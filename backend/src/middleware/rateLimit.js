const crypto = require('crypto');
const pool = require('../config/database');

const FREE_LIFETIME_LIMIT = 3;
const PREMIUM_DAILY_LIMIT = 10;

// An analysis ticket covers one "Llogarit" click: e.g. Wolfram first, then the AI fallback.
const TICKET_TTL_MINUTES = 10;
const TICKET_USES = 2;

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isPremiumActive(user) {
  return (
    user.tier === 'premium' &&
    user.premium_expires_at &&
    new Date(user.premium_expires_at) > new Date()
  );
}

function serviceUnavailable(res) {
  return res.status(503).json({
    success: false,
    error: 'Usage check temporarily unavailable. Please try again.',
    code: 'USAGE_CHECK_FAILED',
  });
}

/**
 * Atomically consume one analysis credit.
 * Free: 3 lifetime analyses total (never resets).
 * Premium (active): 10 analyses/day (resets daily, server date).
 * Premium (expired): treated as free.
 *
 * `db` may be a pool or a client inside a transaction. Throws on DB errors (callers fail closed).
 * Returns { ok: true, tier, creditType, usageDate, limit, remaining }
 *      or { ok: false, status, body } (body is the exact 401/429 payload).
 */
async function consumeCredit(db, userId) {
  const { rows: userRows } = await db.query(
    'SELECT tier, free_analyses_used, premium_expires_at FROM users WHERE id = $1',
    [userId]
  );
  if (userRows.length === 0) {
    return { ok: false, status: 401, body: { success: false, error: 'User not found' } };
  }

  if (isPremiumActive(userRows[0])) {
    const { rows } = await db.query(
      `INSERT INTO analysis_daily_usage (user_id, usage_date, count)
       VALUES ($1, CURRENT_DATE, 1)
       ON CONFLICT (user_id, usage_date)
       DO UPDATE SET count = analysis_daily_usage.count + 1
       WHERE analysis_daily_usage.count < $2
       RETURNING count, usage_date::text AS usage_date`,
      [userId, PREMIUM_DAILY_LIMIT]
    );
    if (rows.length === 0) {
      return {
        ok: false,
        status: 429,
        body: {
          success: false,
          error: 'DAILY_LIMIT_REACHED',
          tier: 'premium',
          dailyLimit: PREMIUM_DAILY_LIMIT,
          used: PREMIUM_DAILY_LIMIT,
        },
      };
    }
    return {
      ok: true,
      tier: 'premium',
      creditType: 'premium',
      usageDate: rows[0].usage_date,
      limit: PREMIUM_DAILY_LIMIT,
      remaining: Math.max(0, PREMIUM_DAILY_LIMIT - rows[0].count),
    };
  }

  const { rows } = await db.query(
    `UPDATE users SET free_analyses_used = COALESCE(free_analyses_used, 0) + 1, updated_at = NOW()
     WHERE id = $1 AND COALESCE(free_analyses_used, 0) < $2
     RETURNING free_analyses_used`,
    [userId, FREE_LIFETIME_LIMIT]
  );
  if (rows.length === 0) {
    return {
      ok: false,
      status: 429,
      body: {
        success: false,
        error: 'FREE_LIMIT_REACHED',
        tier: 'free',
        lifetimeLimit: FREE_LIFETIME_LIMIT,
        used: Math.max(userRows[0].free_analyses_used || 0, FREE_LIFETIME_LIMIT),
      },
    };
  }
  return {
    ok: true,
    tier: 'free',
    creditType: 'free',
    usageDate: null,
    limit: FREE_LIFETIME_LIMIT,
    remaining: Math.max(0, FREE_LIFETIME_LIMIT - rows[0].free_analyses_used),
  };
}

function setRateLimitHeaders(res, credit) {
  res.set('X-RateLimit-Tier', credit.tier);
  res.set('X-RateLimit-Limit', String(credit.limit));
  res.set('X-RateLimit-Remaining', String(credit.remaining));
}

/**
 * POST /api/analyze/record — consume one credit and issue an analysis ticket, in one transaction
 * (a credit is never charged without the ticket that can refund it).
 * Sets req.analysisTicket = { id, expiresAt, tier, remaining, limit }.
 */
async function rateLimitMiddleware(req, res, next) {
  let client;
  try {
    client = await pool.connect();
  } catch (error) {
    console.error('Rate limit middleware error (connect):', error);
    return serviceUnavailable(res);
  }

  let credit;
  let ticket;
  try {
    await client.query('BEGIN');
    credit = await consumeCredit(client, req.userId);
    if (!credit.ok) {
      await client.query('ROLLBACK');
      return res.status(credit.status).json(credit.body);
    }

    const { rows } = await client.query(
      `INSERT INTO analysis_tickets (id, user_id, credit_type, usage_date, expires_at, uses_left)
       VALUES ($1, $2, $3, $4, NOW() + ($5 || ' minutes')::interval, $6)
       RETURNING id, expires_at`,
      [crypto.randomUUID(), req.userId, credit.creditType, credit.usageDate, String(TICKET_TTL_MINUTES), TICKET_USES]
    );
    await client.query('COMMIT');
    ticket = rows[0];
  } catch (error) {
    console.error('Rate limit middleware error:', error);
    await client.query('ROLLBACK').catch(() => {});
    // Fail closed: never hand out a free analysis because the DB hiccuped
    return serviceUnavailable(res);
  } finally {
    client.release();
  }

  setRateLimitHeaders(res, credit);
  req.analysisTicket = {
    id: ticket.id,
    expiresAt: ticket.expires_at,
    tier: credit.tier,
    limit: credit.limit,
    remaining: credit.remaining,
  };
  next();
}

/**
 * Guard for the solver endpoints (/wolfram, /image, /text).
 * - With an X-Analysis-Ticket header: use one call from that ticket (403 INVALID_TICKET if not usable).
 * - Without it (older app versions): consume one credit per call, like /record.
 * Sets req.analysisTicketId when a ticket was used, so the controller can mark it succeeded.
 */
async function requireTicketOrCredit(req, res, next) {
  const ticketId = req.get('X-Analysis-Ticket');

  if (ticketId !== undefined) {
    if (!UUID_RE.test(ticketId)) {
      return res.status(403).json({ success: false, error: 'Invalid analysis ticket', code: 'INVALID_TICKET' });
    }
    try {
      const { rows } = await pool.query(
        `UPDATE analysis_tickets SET uses_left = uses_left - 1
         WHERE id = $1 AND user_id = $2 AND uses_left > 0 AND refunded = FALSE AND expires_at > NOW()
         RETURNING id`,
        [ticketId, req.userId]
      );
      if (rows.length === 0) {
        return res.status(403).json({ success: false, error: 'Invalid or expired analysis ticket', code: 'INVALID_TICKET' });
      }
      req.analysisTicketId = rows[0].id;
      return next();
    } catch (error) {
      console.error('Analysis ticket check error:', error);
      return serviceUnavailable(res);
    }
  }

  try {
    const credit = await consumeCredit(pool, req.userId);
    if (!credit.ok) {
      return res.status(credit.status).json(credit.body);
    }
    setRateLimitHeaders(res, credit);
    next();
  } catch (error) {
    console.error('Rate limit (legacy, no ticket) error:', error);
    return serviceUnavailable(res);
  }
}

/** Mark the request's ticket as having produced a result (no refund possible afterwards). */
async function markTicketSucceeded(req) {
  if (!req.analysisTicketId) return;
  try {
    await pool.query(
      'UPDATE analysis_tickets SET succeeded = TRUE WHERE id = $1 AND user_id = $2',
      [req.analysisTicketId, req.userId]
    );
  } catch (error) {
    console.error('Failed to mark analysis ticket succeeded:', error);
  }
}

/**
 * Refund the credit behind a ticket that never produced a result. Idempotent.
 * Returns 'refunded' | 'already_refunded' | 'succeeded' | 'not_found'. Throws on DB errors.
 */
async function refundTicket(userId, ticketId) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { rows } = await client.query(
      `UPDATE analysis_tickets SET refunded = TRUE, uses_left = 0
       WHERE id = $1 AND user_id = $2 AND succeeded = FALSE AND refunded = FALSE
       RETURNING credit_type, usage_date::text AS usage_date`,
      [ticketId, userId]
    );

    if (rows.length === 0) {
      await client.query('ROLLBACK');
      const { rows: existing } = await pool.query(
        'SELECT succeeded, refunded FROM analysis_tickets WHERE id = $1 AND user_id = $2',
        [ticketId, userId]
      );
      if (existing.length === 0) return 'not_found';
      if (existing[0].refunded) return 'already_refunded';
      return 'succeeded';
    }

    const { credit_type: creditType, usage_date: usageDate } = rows[0];
    if (creditType === 'premium') {
      await client.query(
        `UPDATE analysis_daily_usage SET count = GREATEST(count - 1, 0)
         WHERE user_id = $1 AND usage_date = $2`,
        [userId, usageDate]
      );
    } else {
      await client.query(
        `UPDATE users SET free_analyses_used = GREATEST(COALESCE(free_analyses_used, 0) - 1, 0), updated_at = NOW()
         WHERE id = $1`,
        [userId]
      );
    }
    await client.query('COMMIT');
    return 'refunded';
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    throw error;
  } finally {
    client.release();
  }
}

/**
 * Current usage for /api/stats/usage — same limits and premium rule as enforcement.
 */
async function getUsageForUser(userId) {
  const { rows: userRows } = await pool.query(
    'SELECT tier, free_analyses_used, premium_expires_at FROM users WHERE id = $1',
    [userId]
  );
  if (userRows.length === 0) return null;
  const user = userRows[0];

  if (isPremiumActive(user)) {
    const { rows } = await pool.query(
      'SELECT count FROM analysis_daily_usage WHERE user_id = $1 AND usage_date = CURRENT_DATE',
      [userId]
    );
    const used = rows[0]?.count || 0;
    return {
      tier: 'premium',
      dailyLimit: PREMIUM_DAILY_LIMIT,
      lifetimeLimit: null,
      used,
      remaining: Math.max(0, PREMIUM_DAILY_LIMIT - used),
    };
  }

  const used = user.free_analyses_used || 0;
  return {
    tier: 'free',
    dailyLimit: null,
    lifetimeLimit: FREE_LIFETIME_LIMIT,
    used,
    remaining: Math.max(0, FREE_LIFETIME_LIMIT - used),
  };
}

module.exports = rateLimitMiddleware;
module.exports.rateLimitMiddleware = rateLimitMiddleware;
module.exports.requireTicketOrCredit = requireTicketOrCredit;
module.exports.markTicketSucceeded = markTicketSucceeded;
module.exports.refundTicket = refundTicket;
module.exports.consumeCredit = consumeCredit;
module.exports.getUsageForUser = getUsageForUser;
module.exports.isPremiumActive = isPremiumActive;
module.exports.FREE_LIFETIME_LIMIT = FREE_LIFETIME_LIMIT;
module.exports.PREMIUM_DAILY_LIMIT = PREMIUM_DAILY_LIMIT;
module.exports.UUID_RE = UUID_RE;
