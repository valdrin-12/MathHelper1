const pool = require('../config/database');

const DAILY_LIMITS = {
  free: 4,
  premium: 10,
};

async function rateLimitMiddleware(req, res, next) {
  try {
    const userId = req.userId;

    // Get user tier
    const { rows: userRows } = await pool.query(
      'SELECT tier FROM users WHERE id = $1',
      [userId]
    );

    if (userRows.length === 0) {
      return res.status(401).json({ success: false, error: 'User not found' });
    }

    const tier = userRows[0].tier || 'free';
    const dailyLimit = DAILY_LIMITS[tier] || DAILY_LIMITS.free;

    // Count today's requests
    const { rows: countRows } = await pool.query(
      'SELECT COUNT(*)::int as count FROM api_requests WHERE user_id = $1 AND request_date = CURRENT_DATE',
      [userId]
    );

    const todayCount = countRows[0].count;

    if (todayCount >= dailyLimit) {
      return res.status(429).json({
        success: false,
        error: 'DAILY_LIMIT_REACHED',
        tier,
        dailyLimit,
        used: todayCount,
      });
    }

    // Log this request
    const endpoint = req.path;
    await pool.query(
      'INSERT INTO api_requests (user_id, request_date, endpoint) VALUES ($1, CURRENT_DATE, $2)',
      [userId, endpoint]
    );

    // Add remaining count to response headers
    res.set('X-RateLimit-Limit', String(dailyLimit));
    res.set('X-RateLimit-Remaining', String(dailyLimit - todayCount - 1));

    next();
  } catch (error) {
    console.error('Rate limit middleware error:', error);
    next();
  }
}

module.exports = rateLimitMiddleware;
