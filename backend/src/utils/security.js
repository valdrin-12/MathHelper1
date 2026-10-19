const crypto = require('crypto');

/** Escape a value for safe interpolation into HTML text or attribute content. */
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Mask an email for logs: "valdrin@example.com" -> "v***@example.com". */
function maskEmail(email) {
  const str = String(email || '');
  const at = str.lastIndexOf('@');
  if (at < 1) return '***';
  return `${str[0]}***${str.slice(at)}`;
}

/**
 * Keyed SHA-256 (HMAC) hex digest for short-lived reset codes. A 6-digit code hashed with plain
 * SHA-256 is trivially reversible from a DB dump; keying it with the server secret prevents that.
 */
function hashResetCode(userId, code) {
  return crypto.createHmac('sha256', process.env.JWT_SECRET || '')
    .update(`${userId}:${code}`)
    .digest('hex');
}

/** Constant-time comparison of two hex digests of equal length. */
function safeEqualHex(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a, 'hex'), Buffer.from(b, 'hex'));
}

module.exports = { escapeHtml, maskEmail, hashResetCode, safeEqualHex };
