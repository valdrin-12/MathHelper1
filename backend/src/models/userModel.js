const pool = require('../config/database');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 12;

function toCamelCase(user) {
  if (!user) return null;
  const { created_at, updated_at, free_analyses_used, premium_expires_at, has_paddle_subscription, has_password, google_linked, ...rest } = user;
  return {
    ...rest,
    freeAnalysesUsed: free_analyses_used ?? 0,
    premiumExpiresAt: premium_expires_at || null,
    hasPaddleSubscription: !!has_paddle_subscription,
    // Accounts created with Google have no password until the user sets one
    hasPassword: has_password !== false,
    googleLinked: !!google_linked,
    createdAt: created_at,
    updatedAt: updated_at,
  };
}

async function createUser({ name, email, password, language = 'al' }) {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const { rows } = await pool.query(
    `INSERT INTO users (name, email, password_hash, language)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, language, tier, created_at, updated_at`,
    [name, email.toLowerCase(), passwordHash, language]
  );
  return toCamelCase(rows[0]);
}

/** Account created through Google sign-in: no password, matched later by Google's user id. */
async function createGoogleUser({ name, email, googleId, language = 'al' }) {
  const { rows } = await pool.query(
    `INSERT INTO users (name, email, password_hash, google_id, language)
     VALUES ($1, $2, NULL, $3, $4)
     RETURNING id, name, email, language, tier, created_at, updated_at,
       FALSE AS has_password, TRUE AS google_linked`,
    [name, email.toLowerCase(), googleId, language]
  );
  return toCamelCase(rows[0]);
}

async function findByGoogleId(googleId) {
  const { rows } = await pool.query('SELECT * FROM users WHERE google_id = $1', [googleId]);
  return rows[0] || null;
}

/**
 * Attach a Google identity to an existing account. Returns true when it was linked.
 * `dropPassword` removes the old password: the email address of a password account is not verified,
 * so someone else may have registered it first. After Google has proven who owns the address, the
 * password must not keep working (the user can set a new one through "forgot password").
 */
async function linkGoogleId(userId, googleId, { dropPassword = false } = {}) {
  const { rowCount } = await pool.query(
    `UPDATE users SET google_id = $2, password_hash = CASE WHEN $3 THEN NULL ELSE password_hash END, updated_at = NOW()
     WHERE id = $1 AND google_id IS NULL`,
    [userId, googleId, dropPassword]
  );
  return rowCount > 0;
}

async function findByEmail(email) {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email.toLowerCase()]
  );
  return rows[0] || null;
}

async function findById(id) {
  const { rows } = await pool.query(
    `SELECT id, name, email, language, tier, free_analyses_used, premium_expires_at, created_at, updated_at,
       (password_hash IS NOT NULL) AS has_password,
       (google_id IS NOT NULL) AS google_linked,
       EXISTS (
         SELECT 1 FROM paddle_subscriptions ps
         WHERE ps.user_id = users.id AND ps.status <> 'canceled'
       ) AS has_paddle_subscription
     FROM users WHERE id = $1`,
    [id]
  );
  return toCamelCase(rows[0]);
}

async function updateUser(id, updates) {
  const fields = [];
  const values = [];
  let paramIndex = 1;

  if (updates.name) {
    fields.push(`name = $${paramIndex++}`);
    values.push(updates.name.trim());
  }
  if (updates.email) {
    fields.push(`email = $${paramIndex++}`);
    values.push(updates.email.trim().toLowerCase());
  }
  if (updates.password) {
    const passwordHash = await bcrypt.hash(updates.password, SALT_ROUNDS);
    fields.push(`password_hash = $${paramIndex++}`);
    values.push(passwordHash);
  }
  if (updates.language) {
    fields.push(`language = $${paramIndex++}`);
    values.push(updates.language);
  }

  if (fields.length === 0) return findById(id);

  fields.push(`updated_at = NOW()`);
  values.push(id);

  const { rowCount } = await pool.query(
    `UPDATE users SET ${fields.join(', ')} WHERE id = $${paramIndex}`,
    values
  );
  // Re-read so the response keeps premiumExpiresAt/hasPaddleSubscription like /me
  return rowCount ? findById(id) : null;
}

async function comparePassword(plainPassword, hashedPassword) {
  // Accounts created with Google have no password hash
  if (!hashedPassword) return false;
  return bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = { createUser, createGoogleUser, findByEmail, findByGoogleId, findById, linkGoogleId, updateUser, comparePassword };
