const pool = require('../config/database');

const FREE_LIFETIME_LIMIT = 2;
const PREMIUM_DAILY_LIMIT = 10;

function isPremiumActive(user) {
  return (
    user.tier === 'premium' &&
    user.premium_expires_at &&
    new Date(user.premium_expires_at) > new Date()
  );
}

/**
 * Rate limit middleware for analyze endpoints.
 * Free: 2 lifetime analyses total (never resets).
 * Premium (active): 10 analyses/day (resets daily).
 * Premium (expired): treated as free.
 */
async function rateLimitMiddleware(req, res, next) {
  try {
    const userId = req.userId;

    const { rows: userRows } = await pool.query(
      'SELECT tier, free_analyses_used, premium_expires_at FROM users WHERE id = $1',
      [userId]
    );

    if (userRows.length === 0) {
      return res.status(401).json({ success: false, error: 'User not found' });
    }

    const user = userRows[0];

    if (isPremiumActive(user)) {
      // Premium active: check daily limit
      const { rows: countRows } = await pool.query(
        'SELECT COUNT(*)::int AS count FROM api_requests WHERE user_id = $1 AND request_date = CURRENT_DATE',
        [userId]
      );
      const todayCount = countRows[0].count;

      if (todayCount >= PREMIUM_DAILY_LIMIT) {
        return res.status(429).json({
          success: false,
          error: 'DAILY_LIMIT_REACHED',
          tier: 'premium',
          dailyLimit: PREMIUM_DAILY_LIMIT,
          used: todayCount,
        });
      }

      await pool.query(
        'INSERT INTO api_requests (user_id, request_date, endpoint) VALUES ($1, CURRENT_DATE, $2)',
        [userId, req.path]
      );

      res.set('X-RateLimit-Tier', 'premium');
      res.set('X-RateLimit-Limit', String(PREMIUM_DAILY_LIMIT));
      res.set('X-RateLimit-Remaining', String(PREMIUM_DAILY_LIMIT - todayCount - 1));
    } else {
      // Free or expired premium: check lifetime limit
      const used = user.free_analyses_used || 0;

      if (used >= FREE_LIFETIME_LIMIT) {
        return res.status(429).json({
          success: false,
          error: 'FREE_LIMIT_REACHED',
          tier: 'free',
          lifetimeLimit: FREE_LIFETIME_LIMIT,
          used,
        });
      }

      await pool.query(
        'UPDATE users SET free_analyses_used = free_analyses_used + 1, updated_at = NOW() WHERE id = $1',
        [userId]
      );

      res.set('X-RateLimit-Tier', 'free');
      res.set('X-RateLimit-Limit', String(FREE_LIFETIME_LIMIT));
      res.set('X-RateLimit-Remaining', String(FREE_LIFETIME_LIMIT - used - 1));
    }

    next();
  } catch (error) {
    console.error('Rate limit middleware error:', error);
    next();
  }
}

module.exports = rateLimitMiddleware;
