const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const JWT_ALGORITHM = 'HS256';
const MIN_SECRET_LENGTH = 32;

/**
 * Refuse to boot in production with a missing or weak JWT secret.
 * Called once at startup (app.js). Never logs the secret itself.
 */
function assertJwtSecret() {
  const secret = process.env.JWT_SECRET || '';
  if (process.env.NODE_ENV === 'production' && secret.length < MIN_SECRET_LENGTH) {
    console.error(
      `[FATAL] JWT_SECRET is ${secret ? `too short (${secret.length} chars)` : 'missing'}; ` +
      `production requires at least ${MIN_SECRET_LENGTH} characters. Refusing to start.`
    );
    process.exit(1);
  }
}

function generateAccessToken(userId) {
  return jwt.sign(
    { userId, type: 'access' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m', algorithm: JWT_ALGORITHM }
  );
}

function generateRefreshToken(userId) {
  return jwt.sign(
    // jti makes every refresh token unique even when two are issued in the same second
    { userId, type: 'refresh', jti: crypto.randomUUID() },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d', algorithm: JWT_ALGORITHM }
  );
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET, { algorithms: [JWT_ALGORITHM] });
}

function getRefreshTokenExpiry() {
  const expiry = process.env.JWT_REFRESH_EXPIRY || '7d';
  const match = expiry.match(/^(\d+)([smhd])$/);
  if (!match) return 7 * 24 * 60 * 60 * 1000; // default 7 days

  const value = parseInt(match[1]);
  const unit = match[2];
  const multipliers = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
  return value * (multipliers[unit] || 86400000);
}

module.exports = { generateAccessToken, generateRefreshToken, verifyToken, getRefreshTokenExpiry, assertJwtSecret };
