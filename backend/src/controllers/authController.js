const userModel = require('../models/userModel');
const { generateAccessToken, generateRefreshToken, verifyToken, getRefreshTokenExpiry } = require('../utils/tokens');
const pool = require('../config/database');
const { sendWelcomeEmail, sendPasswordResetEmail } = require('../services/emailService');
const crypto = require('crypto');

async function register(req, res) {
  try {
    const { name, email, password, language } = req.body;

    // Check if email already exists
    const existing = await userModel.findByEmail(email);
    if (existing) {
      return res.status(409).json({ success: false, error: 'Email already registered' });
    }

    const user = await userModel.createUser({ name: name.trim(), email, password, language: language || 'al' });

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Store refresh token
    const expiresAt = new Date(Date.now() + getRefreshTokenExpiry());
    await pool.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, refreshToken, expiresAt]
    );

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
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    const valid = await userModel.comparePassword(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Store refresh token
    const expiresAt = new Date(Date.now() + getRefreshTokenExpiry());
    await pool.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, refreshToken, expiresAt]
    );

    const { password_hash, created_at, updated_at, ...rest } = user;
    res.json({
      success: true,
      user: { ...rest, createdAt: created_at, updatedAt: updated_at },
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, error: 'Login failed' });
  }
}

async function logout(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      // Delete all refresh tokens for this user
      await pool.query('DELETE FROM refresh_tokens WHERE user_id = $1', [req.userId]);
    }
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

async function updateProfile(req, res) {
  try {
    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.body.email) updates.email = req.body.email;
    if (req.body.password) updates.password = req.body.password;
    if (req.body.language) updates.language = req.body.language;

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
    res.json({ success: true, user });
  } catch (err) {
    console.error('UpdateProfile error:', err);
    res.status(500).json({ success: false, error: 'Update failed' });
  }
}

async function refreshTokens(req, res) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ success: false, error: 'Refresh token required' });
    }

    // Verify the refresh token
    let decoded;
    try {
      decoded = verifyToken(refreshToken);
    } catch {
      return res.status(401).json({ success: false, error: 'Invalid refresh token', code: 'INVALID_TOKEN' });
    }

    // Check if token exists in database
    const { rows } = await pool.query(
      'SELECT * FROM refresh_tokens WHERE token = $1 AND user_id = $2 AND expires_at > NOW()',
      [refreshToken, decoded.userId]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: 'Refresh token expired or revoked', code: 'INVALID_TOKEN' });
    }

    // Delete old refresh token
    await pool.query('DELETE FROM refresh_tokens WHERE token = $1', [refreshToken]);

    // Generate new token pair
    const newAccessToken = generateAccessToken(decoded.userId);
    const newRefreshToken = generateRefreshToken(decoded.userId);

    const expiresAt = new Date(Date.now() + getRefreshTokenExpiry());
    await pool.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [decoded.userId, newRefreshToken, expiresAt]
    );

    res.json({
      success: true,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    console.error('Refresh error:', err);
    res.status(500).json({ success: false, error: 'Token refresh failed' });
  }
}

async function forgotPassword(req, res) {
  try {
    const { email, language } = req.body;

    const user = await userModel.findByEmail(email);
    if (!user) {
      return res.status(404).json({ success: false, error: 'No account found with this email' });
    }

    // Generate 8-digit code (100M combinations — brute-force resistant)
    const code = crypto.randomInt(10000000, 99999999).toString();

    // Delete any existing reset tokens for this user
    await pool.query('DELETE FROM password_reset_tokens WHERE user_id = $1', [user.id]);

    // Insert new token with 15-min expiry
    await pool.query(
      `INSERT INTO password_reset_tokens (user_id, code, expires_at)
       VALUES ($1, $2, NOW() + INTERVAL '15 minutes')`,
      [user.id, code]
    );

    // Use language from request (current UI), fallback to user's stored language
    const emailLang = language || user.language || 'al';
    await sendPasswordResetEmail(email, code, emailLang);

    res.json({
      success: true,
      message: 'Code sent successfully to your email',
    });
  } catch (err) {
    console.error('ForgotPassword error:', err);
    res.status(500).json({ success: false, error: 'Failed to process request' });
  }
}

async function resetPassword(req, res) {
  try {
    const { email, code, newPassword } = req.body;

    const user = await userModel.findByEmail(email);
    if (!user) {
      return res.status(400).json({ success: false, error: 'Invalid code' });
    }

    // Find valid token
    const { rows } = await pool.query(
      `SELECT id FROM password_reset_tokens
       WHERE user_id = $1 AND code = $2 AND used = FALSE AND expires_at > NOW()`,
      [user.id, code]
    );

    if (rows.length === 0) {
      return res.status(400).json({ success: false, error: 'Invalid or expired code' });
    }

    // Update password
    await userModel.updateUser(user.id, { password: newPassword });

    // Mark token as used
    await pool.query(
      'UPDATE password_reset_tokens SET used = TRUE WHERE id = $1',
      [rows[0].id]
    );

    res.json({ success: true, message: 'Password reset successfully' });
  } catch (err) {
    console.error('ResetPassword error:', err);
    res.status(500).json({ success: false, error: 'Failed to reset password' });
  }
}

async function deleteAccount(req, res) {
  try {
    const userId = req.userId;
    // Delete all user data in order (foreign keys first)
    await pool.query('DELETE FROM refresh_tokens WHERE user_id = $1', [userId]);
    await pool.query('DELETE FROM saved_items WHERE user_id = $1', [userId]);
    await pool.query('DELETE FROM completed_courses WHERE user_id = $1', [userId]);
    await pool.query('DELETE FROM completed_quizzes WHERE user_id = $1', [userId]);
    await pool.query('DELETE FROM daily_activity WHERE user_id = $1', [userId]);
    await pool.query('DELETE FROM users WHERE id = $1', [userId]);
    res.json({ success: true, message: 'Account deleted successfully' });
  } catch (err) {
    console.error('DeleteAccount error:', err);
    res.status(500).json({ success: false, error: 'Failed to delete account' });
  }
}

async function socialLogin(req, res) {
  try {
    const { provider, accessToken, language } = req.body;

    if (!provider || !accessToken) {
      return res.status(400).json({ success: false, error: 'provider and accessToken are required' });
    }
    if (!['google', 'facebook'].includes(provider)) {
      return res.status(400).json({ success: false, error: 'Invalid provider' });
    }

    // Verify token and fetch user info from provider
    let providerUser;
    if (provider === 'google') {
      const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!r.ok) return res.status(401).json({ success: false, error: 'Invalid Google token' });
      providerUser = await r.json();
      // Google returns { sub, name, email, picture }
    } else {
      const r = await fetch(
        `https://graph.facebook.com/me?fields=id,name,email&access_token=${encodeURIComponent(accessToken)}`
      );
      if (!r.ok) return res.status(401).json({ success: false, error: 'Invalid Facebook token' });
      providerUser = await r.json();
      // Facebook returns { id, name, email }
    }

    if (!providerUser.email) {
      return res.status(422).json({ success: false, error: 'Email permission is required for social login' });
    }

    // Find or create user
    let user = await userModel.findByEmail(providerUser.email);
    if (!user) {
      // Create new account — random secure password (social users sign in via OAuth only)
      const { randomBytes } = require('crypto');
      const randomPassword = randomBytes(32).toString('hex');
      user = await userModel.createUser({
        name: providerUser.name || providerUser.email.split('@')[0],
        email: providerUser.email,
        password: randomPassword,
        language: language || 'al',
      });
    }

    const newAccessToken = generateAccessToken(user.id);
    const newRefreshToken = generateRefreshToken(user.id);

    const expiresAt = new Date(Date.now() + getRefreshTokenExpiry());
    await pool.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, newRefreshToken, expiresAt]
    );

    const { password_hash, created_at, updated_at, ...rest } = user.id ? user : {};
    const safeUser = await userModel.findById(user.id);

    res.json({
      success: true,
      user: safeUser,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    console.error('SocialLogin error:', err);
    res.status(500).json({ success: false, error: 'Social login failed' });
  }
}

module.exports = { register, login, logout, getMe, updateProfile, refreshTokens, forgotPassword, resetPassword, deleteAccount, socialLogin };
