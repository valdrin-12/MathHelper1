const userModel = require('../models/userModel');
const { generateAccessToken, generateRefreshToken, verifyToken, getRefreshTokenExpiry } = require('../utils/tokens');
const { hashResetCode, safeEqualHex } = require('../utils/security');
const pool = require('../config/database');
const { sendWelcomeEmail, sendPasswordResetEmail } = require('../services/emailService');
const { getPaddleClient } = require('../services/paddleClient');
const googleAuth = require('../services/googleAuthService');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const SALT_ROUNDS = 12;
const MAX_RESET_ATTEMPTS = 5;

// Compared against when the email is unknown so login takes about as long as a wrong password
const DUMMY_PASSWORD_HASH = bcrypt.hashSync(crypto.randomBytes(16).toString('hex'), SALT_ROUNDS);

/** Issue an access/refresh pair and persist the refresh token. `db` may be a pool or a transaction client. */
async function issueTokens(userId, db = pool) {
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);
  const expiresAt = new Date(Date.now() + getRefreshTokenExpiry());
  await db.query(
    'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
    [userId, refreshToken, expiresAt]
  );
  return { accessToken, refreshToken };
}

async function getPasswordHash(userId) {
  const { rows } = await pool.query('SELECT password_hash FROM users WHERE id = $1', [userId]);
  return rows[0]?.password_hash || null;
}

async function register(req, res) {
  try {
    const { name, email, password, language } = req.body;

    // Check if email already exists (409 is an accepted residual enumeration vector for signup UX)
    const existing = await userModel.findByEmail(email);
    if (existing) {
      return res.status(409).json({ success: false, error: 'Email already registered' });
    }

    const user = await userModel.createUser({ name: name.trim(), email, password, language: language || 'al' });

    const { accessToken, refreshToken } = await issueTokens(user.id);

    // Send welcome email in user's language (non-blocking)
    sendWelcomeEmail(email, name.trim(), language || 'al');

    res.status(201).json({
      success: true,
      user,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ success: false, error: 'Registration failed' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findByEmail(email);
    // Always run bcrypt so unknown emails and wrong passwords are indistinguishable (response + timing)
    // (an account created with Google has no password hash: it can never match)
    const valid = await userModel.comparePassword(password, user && user.password_hash ? user.password_hash : DUMMY_PASSWORD_HASH);
    if (!user || !user.password_hash || !valid) {
      return res.status(401).json({ success: false, error: 'Invalid email or password', code: 'INVALID_CREDENTIALS' });
    }

    const { accessToken, refreshToken } = await issueTokens(user.id);

    // Same shape as /me so the client sees premiumExpiresAt (premium gates) and no internal columns
    res.json({
      success: true,
      user: await userModel.findById(user.id),
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, error: 'Login failed' });
  }
}

/**
 * POST /api/auth/google  body: { idToken, language? }
 * Signs in (or signs up) with a Google ID token. The token is verified here; the client is never trusted.
 *  - known Google id            → sign in
 *  - existing account, same email → link it, and drop its old password (see userModel.linkGoogleId)
 *  - otherwise                   → create an account without a password
 */
async function googleLogin(req, res) {
  try {
    const { idToken, language } = req.body;

    let profile;
    try {
      profile = await googleAuth.verifyGoogleIdToken(idToken);
    } catch (err) {
      return res.status(401).json({ success: false, error: 'Invalid Google token', code: 'INVALID_GOOGLE_TOKEN' });
    }
    if (!profile.email || !profile.emailVerified) {
      return res.status(401).json({ success: false, error: 'Your Google email is not verified', code: 'GOOGLE_EMAIL_NOT_VERIFIED' });
    }
    const email = profile.email.toLowerCase();

    let row = await userModel.findByGoogleId(profile.sub);
    let isNewUser = false;
    let linkedExisting = false;

    if (!row) {
      const byEmail = await userModel.findByEmail(email);
      if (byEmail) {
        if (byEmail.google_id && byEmail.google_id !== profile.sub) {
          return res.status(409).json({ success: false, error: 'This email belongs to another Google account', code: 'GOOGLE_ACCOUNT_CONFLICT' });
        }
        const hadPassword = Boolean(byEmail.password_hash);
        const linked = await userModel.linkGoogleId(byEmail.id, profile.sub, { dropPassword: true });
        if (linked && hadPassword) {
          // Old sessions and the old password may belong to whoever registered the address first
          await pool.query('DELETE FROM refresh_tokens WHERE user_id = $1', [byEmail.id]);
          linkedExisting = true;
        }
        row = { ...byEmail, google_id: profile.sub };
      } else {
        const name = (profile.name || email.split('@')[0]).trim().slice(0, 100) || 'MathHelper';
        try {
          const created = await userModel.createGoogleUser({ name, email, googleId: profile.sub, language: language || 'al' });
          row = { id: created.id };
          isNewUser = true;
        } catch (err) {
          // Two sign-ins at once: the other one created the account first
          if (err.code !== '23505') throw err;
          row = (await userModel.findByGoogleId(profile.sub)) || (await userModel.findByEmail(email));
          if (!row) throw err;
        }
      }
    }

    const { accessToken, refreshToken } = await issueTokens(row.id);
    if (isNewUser) sendWelcomeEmail(email, (profile.name || email.split('@')[0]).trim(), language || 'al');

    res.json({
      success: true,
      user: await userModel.findById(row.id),
      accessToken,
      refreshToken,
      isNewUser,
      linkedExisting,
    });
  } catch (err) {
    console.error('Google login error:', err);
    res.status(500).json({ success: false, error: 'Google sign-in failed' });
  }
}

async function logout(req, res) {
  try {
    // Delete all refresh tokens for this user
    await pool.query('DELETE FROM refresh_tokens WHERE user_id = $1', [req.userId]);
    res.json({ success: true });
  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).json({ success: false, error: 'Logout failed' });
  }
}

async function getMe(req, res) {
  try {
    const user = await userModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, user });
  } catch (err) {
    console.error('GetMe error:', err);
    res.status(500).json({ success: false, error: 'Failed to get user' });
  }
}

/**
 * PUT /api/auth/profile
 * Name/language updates need no re-authentication. Changing email or password requires
 * `currentPassword`; on success all refresh tokens are revoked and a fresh pair is returned
 * as `accessToken`/`refreshToken` alongside `user`.
 */
async function updateProfile(req, res) {
  try {
    const current = await userModel.findById(req.userId);
    if (!current) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.body.language) updates.language = req.body.language;
    // Clients may echo the unchanged email back; only a different address counts as a change
    if (req.body.email && req.body.email.trim().toLowerCase() !== String(current.email).toLowerCase()) {
      updates.email = req.body.email;
    }
    if (req.body.password) updates.password = req.body.password;

    const sensitiveChange = Boolean(updates.email || updates.password);
    if (sensitiveChange) {
      const hash = await getPasswordHash(req.userId);
      if (!hash) {
        // Signed up with Google: nothing to re-check. A password can be added; the email is tied to Google
        if (updates.email) {
          return res.status(400).json({ success: false, error: 'Set a password before changing the email', code: 'SET_PASSWORD_FIRST' });
        }
      } else {
        const { currentPassword } = req.body;
        if (!currentPassword) {
          return res.status(400).json({ success: false, error: 'Current password is required', code: 'CURRENT_PASSWORD_REQUIRED' });
        }
        if (!(await userModel.comparePassword(currentPassword, hash))) {
          return res.status(401).json({ success: false, error: 'Current password is incorrect', code: 'INVALID_CURRENT_PASSWORD' });
        }
      }
    }

    // If email is changing, check it's not taken
    if (updates.email) {
      const existing = await userModel.findByEmail(updates.email);
      if (existing && existing.id !== req.userId) {
        return res.status(409).json({ success: false, error: 'Email already in use' });
      }
    }

    const user = await userModel.updateUser(req.userId, updates);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (!sensitiveChange) {
      return res.json({ success: true, user });
    }

    // Credentials changed: revoke every existing session, then keep this client signed in
    await pool.query('DELETE FROM refresh_tokens WHERE user_id = $1', [req.userId]);
    const { accessToken, refreshToken } = await issueTokens(req.userId);
    res.json({ success: true, user, accessToken, refreshToken });
  } catch (err) {
    console.error('UpdateProfile error:', err);
    res.status(500).json({ success: false, error: 'Update failed' });
  }
}

async function refreshTokens(req, res) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken || typeof refreshToken !== 'string') {
      return res.status(400).json({ success: false, error: 'Refresh token required' });
    }

    // Verify the refresh token
    let decoded;
    try {
      decoded = verifyToken(refreshToken);
    } catch {
      return res.status(401).json({ success: false, error: 'Invalid refresh token', code: 'INVALID_TOKEN' });
    }
    if (decoded.type !== 'refresh' || !decoded.userId) {
      return res.status(401).json({ success: false, error: 'Invalid refresh token', code: 'INVALID_TOKEN' });
    }

    // Atomic rotation: consume the presented token; a concurrent/replayed request gets no row
    const { rows } = await pool.query(
      `DELETE FROM refresh_tokens
       WHERE token = $1 AND user_id = $2 AND expires_at > NOW()
       RETURNING id`,
      [refreshToken, decoded.userId]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: 'Refresh token expired or revoked', code: 'INVALID_TOKEN' });
    }

    const tokens = await issueTokens(decoded.userId);

    res.json({
      success: true,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  } catch (err) {
    console.error('Refresh error:', err);
    res.status(500).json({ success: false, error: 'Token refresh failed' });
  }
}

const FORGOT_PASSWORD_MESSAGE = 'If an account exists for this email, a reset code has been sent.';

async function forgotPassword(req, res) {
  try {
    const { email, language } = req.body;

    const user = await userModel.findByEmail(email);
    if (user) {
      // 6-digit code; brute force is bounded by MAX_RESET_ATTEMPTS per code, 15-min expiry and rate limits
      const code = crypto.randomInt(100000, 1000000).toString();

      // Delete any existing reset tokens for this user (at most one active code per user)
      await pool.query('DELETE FROM password_reset_tokens WHERE user_id = $1', [user.id]);

      // Store only the keyed hash of the code, with 15-min expiry
      await pool.query(
        `INSERT INTO password_reset_tokens (user_id, code_hash, expires_at)
         VALUES ($1, $2, NOW() + INTERVAL '15 minutes')`,
        [user.id, hashResetCode(user.id, code)]
      );

      // Use language from request (current UI), fallback to user's stored language.
      // Not awaited so response time does not reveal whether the account exists.
      const emailLang = language || user.language || 'al';
      sendPasswordResetEmail(user.email, code, emailLang);
    }

    // Same response whether or not the email is registered (no user enumeration)
    res.json({ success: true, message: FORGOT_PASSWORD_MESSAGE });
  } catch (err) {
    console.error('ForgotPassword error:', err);
    res.status(500).json({ success: false, error: 'Failed to process request' });
  }
}

async function resetPassword(req, res) {
  const invalidCode = () => res.status(400).json({ success: false, error: 'Invalid or expired code', code: 'INVALID_CODE' });
  let client;
  try {
    const { email, code, newPassword } = req.body;

    const user = await userModel.findByEmail(email);
    if (!user) {
      return invalidCode();
    }

    // Consume one attempt atomically before comparing; codes stop working after MAX_RESET_ATTEMPTS
    const { rows } = await pool.query(
      `UPDATE password_reset_tokens SET attempts = attempts + 1
       WHERE user_id = $1 AND used = FALSE AND expires_at > NOW()
         AND code_hash IS NOT NULL AND attempts < $2
       RETURNING id, code_hash`,
      [user.id, MAX_RESET_ATTEMPTS]
    );

    const token = rows.find((r) => safeEqualHex(r.code_hash, hashResetCode(user.id, String(code))));
    if (!token) {
      return invalidCode();
    }

    const passwordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);

    client = await pool.connect();
    await client.query('BEGIN');
    // Mark the code used first; if a concurrent request already used it, abort
    const { rowCount } = await client.query(
      'UPDATE password_reset_tokens SET used = TRUE WHERE id = $1 AND used = FALSE',
      [token.id]
    );
    if (rowCount === 0) {
      await client.query('ROLLBACK');
      return invalidCode();
    }
    await client.query(
      'UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2',
      [passwordHash, user.id]
    );
    // Revoke every existing session after a password reset
    await client.query('DELETE FROM refresh_tokens WHERE user_id = $1', [user.id]);
    await client.query('COMMIT');

    res.json({ success: true, message: 'Password reset successfully' });
  } catch (err) {
    if (client) await client.query('ROLLBACK').catch(() => {});
    console.error('ResetPassword error:', err);
    res.status(500).json({ success: false, error: 'Failed to reset password' });
  } finally {
    if (client) client.release();
  }
}

/** Cancel every non-canceled Paddle subscription of the user, immediately. Throws on failure. */
async function cancelPaddleSubscriptions(userId) {
  const { rows } = await pool.query(
    `SELECT paddle_subscription_id FROM paddle_subscriptions
     WHERE user_id = $1 AND status <> 'canceled'
     UNION
     SELECT paddle_subscription_id FROM users
     WHERE id = $1 AND paddle_subscription_id IS NOT NULL
       AND COALESCE(paddle_subscription_status, '') <> 'canceled'`,
    [userId]
  );
  if (rows.length === 0) return;

  const paddle = getPaddleClient();
  for (const { paddle_subscription_id: subscriptionId } of rows) {
    try {
      await paddle.subscriptions.cancel(subscriptionId, { effectiveFrom: 'immediately' });
    } catch (err) {
      // Our mirror may be stale: if Paddle already shows it canceled, that's fine
      const sub = await paddle.subscriptions.get(subscriptionId).catch(() => null);
      if (sub?.status !== 'canceled') throw err;
    }
  }
}

/**
 * DELETE /api/auth/account  body: { password }  or, for an account without a password, { idToken }
 * Re-authenticates, cancels Paddle subscriptions immediately, then deletes all user data in one transaction.
 */
async function deleteAccount(req, res) {
  const userId = req.userId;
  const { password, idToken } = req.body || {};

  let client;
  try {
    const { rows: accountRows } = await pool.query('SELECT password_hash, google_id FROM users WHERE id = $1', [userId]);
    const account = accountRows[0];
    if (!account) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (account.password_hash) {
      if (!password || typeof password !== 'string') {
        return res.status(400).json({ success: false, error: 'Password is required', code: 'PASSWORD_REQUIRED' });
      }
      if (!(await userModel.comparePassword(password, account.password_hash))) {
        return res.status(401).json({ success: false, error: 'Invalid password', code: 'INVALID_PASSWORD' });
      }
    } else {
      // Signed up with Google: confirm with a fresh Google token of the same Google account
      if (!idToken || typeof idToken !== 'string') {
        return res.status(400).json({ success: false, error: 'Confirm with Google', code: 'GOOGLE_REAUTH_REQUIRED' });
      }
      let profile;
      try {
        profile = await googleAuth.verifyGoogleIdToken(idToken);
      } catch {
        return res.status(401).json({ success: false, error: 'Invalid Google token', code: 'INVALID_GOOGLE_TOKEN' });
      }
      if (!account.google_id || profile.sub !== account.google_id) {
        return res.status(401).json({ success: false, error: 'Invalid Google token', code: 'INVALID_GOOGLE_TOKEN' });
      }
    }

    try {
      await cancelPaddleSubscriptions(userId);
    } catch (err) {
      console.error('DeleteAccount: Paddle subscription cancel failed:', err?.code || err?.message);
      return res.status(502).json({
        success: false,
        error: 'Could not cancel your subscription. Your account was not deleted; please try again later.',
        code: 'SUBSCRIPTION_CANCEL_FAILED',
      });
    }

    client = await pool.connect();
    await client.query('BEGIN');
    // Anonymize the Paddle customer mirror (kept for billing records; user_id is SET NULL by FK)
    await client.query('UPDATE paddle_customers SET email = NULL, updated_at = NOW() WHERE user_id = $1', [userId]);
    // Delete all user data in order (foreign keys first; the rest cascade from users)
    await client.query('DELETE FROM refresh_tokens WHERE user_id = $1', [userId]);
    await client.query('DELETE FROM password_reset_tokens WHERE user_id = $1', [userId]);
    await client.query('DELETE FROM saved_items WHERE user_id = $1', [userId]);
    await client.query('DELETE FROM completed_courses WHERE user_id = $1', [userId]);
    await client.query('DELETE FROM completed_quizzes WHERE user_id = $1', [userId]);
    await client.query('DELETE FROM daily_activity WHERE user_id = $1', [userId]);
    await client.query('DELETE FROM users WHERE id = $1', [userId]);
    await client.query('COMMIT');

    res.json({ success: true, message: 'Account deleted successfully' });
  } catch (err) {
    if (client) await client.query('ROLLBACK').catch(() => {});
    console.error('DeleteAccount error:', err);
    res.status(500).json({ success: false, error: 'Failed to delete account' });
  } finally {
    if (client) client.release();
  }
}

module.exports = { register, login, googleLogin, logout, getMe, updateProfile, refreshTokens, forgotPassword, resetPassword, deleteAccount };
