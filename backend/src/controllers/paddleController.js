const { Webhooks, NodeRuntime } = require('@paddle/paddle-node-sdk');
const pool = require('../config/database');
const { accessForSubscriptions } = require('../services/paddleAccess');

// Signature verification needs the Node crypto provider; new Paddle() normally sets it,
// but we only need webhooks here (no API key), so initialize it directly.
NodeRuntime.initialize();
const webhooks = new Webhooks();

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Find the MathHelper user an event belongs to.
 * 1. customData.user_id (set by PremiumModal at checkout), if that user exists
 * 2. a user already linked to the Paddle customer
 * Email is deliberately not used: users can change it.
 */
async function resolveUserId(db, { customData, customerId }) {
  const customUserId = customData?.user_id;
  if (customUserId && UUID_RE.test(customUserId)) {
    const { rows } = await db.query('SELECT id FROM users WHERE id = $1', [customUserId]);
    if (rows[0]) return rows[0].id;
  }
  if (customerId) {
    const { rows } = await db.query(
      `SELECT user_id AS id FROM paddle_customers WHERE paddle_customer_id = $1 AND user_id IS NOT NULL
       UNION ALL
       SELECT id FROM users WHERE paddle_customer_id = $1
       LIMIT 1`,
      [customerId]
    );
    if (rows[0]) return rows[0].id;
  }
  return null;
}

/** Link a Paddle customer to a user (keeps the first link; email is filled in by customer.* events). */
async function linkCustomer(db, customerId, userId) {
  if (!customerId) return;
  await db.query(
    `INSERT INTO paddle_customers (paddle_customer_id, user_id)
     VALUES ($1, $2)
     ON CONFLICT (paddle_customer_id) DO UPDATE SET
       user_id = COALESCE(paddle_customers.user_id, EXCLUDED.user_id),
       updated_at = NOW()`,
    [customerId, userId]
  );
}

/** Keep a subscription event we couldn't attach to a user, for manual reconciliation. */
async function recordUnlinkedEvent(db, event, sub) {
  await db.query(
    `INSERT INTO paddle_unlinked_events (
       event_id, event_type, paddle_subscription_id, paddle_customer_id, custom_user_id, payload, occurred_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     ON CONFLICT (event_id) DO NOTHING`,
    [
      event.eventId || null, event.eventType, sub.id, sub.customerId || null,
      sub.customData?.user_id ? String(sub.customData.user_id).slice(0, 100) : null,
      JSON.stringify({ status: sub.status, customData: sub.customData || null }),
      event.occurredAt || null,
    ]
  );
}

async function withTransaction(fn) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

// --- Handlers (all idempotent: upsert on the Paddle ID, ignore events older than last_event_at) ---

async function handleSubscriptionEvent(event) {
  const sub = event.data;
  const item = sub.items?.[0];
  const periodEndsAt = sub.currentBillingPeriod?.endsAt || sub.nextBilledAt || null;

  await withTransaction(async (db) => {
    const userId = await resolveUserId(db, { customData: sub.customData, customerId: sub.customerId });

    const { rowCount } = await db.query(
      `INSERT INTO paddle_subscriptions (
         paddle_subscription_id, paddle_customer_id, user_id, status, price_id, product_id,
         current_period_ends_at, scheduled_change_action, scheduled_change_at, last_event_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       ON CONFLICT (paddle_subscription_id) DO UPDATE SET
         paddle_customer_id = EXCLUDED.paddle_customer_id,
         user_id = COALESCE(EXCLUDED.user_id, paddle_subscriptions.user_id),
         status = EXCLUDED.status,
         price_id = EXCLUDED.price_id,
         product_id = EXCLUDED.product_id,
         current_period_ends_at = EXCLUDED.current_period_ends_at,
         scheduled_change_action = EXCLUDED.scheduled_change_action,
         scheduled_change_at = EXCLUDED.scheduled_change_at,
         last_event_at = EXCLUDED.last_event_at,
         updated_at = NOW()
       WHERE paddle_subscriptions.last_event_at IS NULL
          OR paddle_subscriptions.last_event_at < EXCLUDED.last_event_at`,
      [
        sub.id, sub.customerId, userId, sub.status,
        item?.price?.id || null, item?.price?.productId || item?.product?.id || null,
        periodEndsAt, sub.scheduledChange?.action || null, sub.scheduledChange?.effectiveAt || null,
        event.occurredAt,
      ]
    );

    if (rowCount === 0) {
      console.warn(`[Paddle] Skipped stale ${event.eventType} for ${sub.id}`);
      return;
    }
    if (!userId) {
      // Acknowledge (200) instead of making Paddle retry forever: a retry can't find the user either.
      // Keep the event for manual reconciliation.
      console.error(
        `[Paddle] UNLINKED ${event.eventType} for subscription ${sub.id} (customer ${sub.customerId}, `
        + `customData.user_id=${sub.customData?.user_id || 'none'}) - stored in paddle_unlinked_events`
      );
      await recordUnlinkedEvent(db, event, sub);
      return;
    }

    await linkCustomer(db, sub.customerId, userId);

    // Access is computed from ALL of the user's subscriptions (each row is already
    // guarded against out-of-order events), so one canceled sub can't revoke another active one.
    const { rows: subs } = await db.query(
      'SELECT status, current_period_ends_at FROM paddle_subscriptions WHERE user_id = $1',
      [userId]
    );
    let { tier, expiresAt } = accessForSubscriptions(subs);

    // Don't let Paddle state cut short a still-valid in-app purchase
    const { rows: iapRows } = await db.query(
      `SELECT MAX(expires_at) AS expires_at FROM purchases
       WHERE user_id = $1 AND status = 'completed' AND expires_at > NOW()`,
      [userId]
    );
    const iapExpiresAt = iapRows[0]?.expires_at;
    if (iapExpiresAt && (tier === 'free' || (tier === 'premium' && expiresAt && new Date(iapExpiresAt) > new Date(expiresAt)))) {
      tier = 'premium';
      expiresAt = new Date(iapExpiresAt).toISOString();
    }

    await db.query(
      `UPDATE users SET
         tier = COALESCE($2, tier),
         premium_expires_at = COALESCE($3::timestamptz, premium_expires_at),
         updated_at = NOW()
       WHERE id = $1`,
      [userId, tier, expiresAt]
    );
    // The per-user "latest subscription" columns still only move forward in time
    await db.query(
      `UPDATE users SET
         paddle_customer_id = $2,
         paddle_subscription_id = $3,
         paddle_subscription_status = $4,
         paddle_event_at = $5
       WHERE id = $1 AND (paddle_event_at IS NULL OR paddle_event_at < $5)`,
      [userId, sub.customerId, sub.id, sub.status, event.occurredAt]
    );
    console.log(`[Paddle] ${event.eventType}: user ${userId} -> ${sub.status}`);
  });
}

async function handleCustomerEvent(event) {
  const customer = event.data;
  await withTransaction(async (db) => {
    const userId = await resolveUserId(db, { customData: customer.customData, customerId: customer.id });
    const { rowCount } = await db.query(
      `INSERT INTO paddle_customers (paddle_customer_id, user_id, email, last_event_at)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (paddle_customer_id) DO UPDATE SET
         user_id = COALESCE(paddle_customers.user_id, EXCLUDED.user_id),
         email = EXCLUDED.email,
         last_event_at = EXCLUDED.last_event_at,
         updated_at = NOW()
       WHERE paddle_customers.last_event_at IS NULL
          OR paddle_customers.last_event_at < EXCLUDED.last_event_at`,
      [customer.id, userId, customer.email, event.occurredAt]
    );
    console.log(`[Paddle] ${event.eventType}: ${customer.id}${rowCount === 0 ? ' (stale, skipped)' : ''}`);
  });
}

async function handleTransactionCompleted(event) {
  const txn = event.data;
  await withTransaction(async (db) => {
    const userId = await resolveUserId(db, { customData: txn.customData, customerId: txn.customerId });
    const { rowCount } = await db.query(
      `INSERT INTO paddle_transactions (
         paddle_transaction_id, paddle_subscription_id, paddle_customer_id, user_id,
         status, currency_code, total, billed_at, last_event_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       ON CONFLICT (paddle_transaction_id) DO UPDATE SET
         paddle_subscription_id = EXCLUDED.paddle_subscription_id,
         paddle_customer_id = EXCLUDED.paddle_customer_id,
         user_id = COALESCE(EXCLUDED.user_id, paddle_transactions.user_id),
         status = EXCLUDED.status,
         currency_code = EXCLUDED.currency_code,
         total = EXCLUDED.total,
         billed_at = EXCLUDED.billed_at,
         last_event_at = EXCLUDED.last_event_at,
         updated_at = NOW()
       WHERE paddle_transactions.last_event_at IS NULL
          OR paddle_transactions.last_event_at < EXCLUDED.last_event_at`,
      [
        txn.id, txn.subscriptionId, txn.customerId, userId, txn.status,
        txn.currencyCode, txn.details?.totals?.total || null, txn.billedAt, event.occurredAt,
      ]
    );
    if (userId) await linkCustomer(db, txn.customerId, userId);
    console.log(`[Paddle] ${event.eventType}: ${txn.id}${rowCount === 0 ? ' (stale, skipped)' : ''}`);
  });
}

const HANDLERS = {
  'subscription.created': handleSubscriptionEvent,
  'subscription.updated': handleSubscriptionEvent,
  'subscription.canceled': handleSubscriptionEvent,
  'subscription.activated': handleSubscriptionEvent,
  'subscription.trialing': handleSubscriptionEvent,
  'subscription.past_due': handleSubscriptionEvent,
  'subscription.paused': handleSubscriptionEvent,
  'subscription.resumed': handleSubscriptionEvent,
  'customer.created': handleCustomerEvent,
  'customer.updated': handleCustomerEvent,
  'transaction.completed': handleTransactionCompleted,
};

/**
 * POST /api/paddle/webhook
 * Must be mounted with express.raw() — signature verification needs the exact raw body.
 */
async function handleWebhook(req, res) {
  // Trim whitespace/quotes that often sneak in when pasting into a hosting dashboard
  const rawSecret = process.env.PADDLE_WEBHOOK_SECRET || '';
  const secret = rawSecret.trim().replace(/^["']|["']$/g, '');
  if (!secret) {
    console.error('[Paddle] PADDLE_WEBHOOK_SECRET is not set');
    return res.status(503).send('Webhook not configured');
  }

  const signature = req.headers['paddle-signature'];
  const rawBody = Buffer.isBuffer(req.body) ? req.body.toString('utf8') : '';
  if (!signature || !rawBody) {
    return res.status(400).send('Missing signature or body');
  }

  let event;
  try {
    event = await webhooks.unmarshal(rawBody, secret, signature);
  } catch (err) {
    console.error('[Paddle] Invalid webhook signature:', err.message);
    return res.status(400).send('Invalid signature');
  }

  const handler = HANDLERS[event.eventType];
  if (!handler) {
    // Not an event we act on: acknowledge so Paddle doesn't retry
    return res.status(200).send('OK');
  }

  try {
    await handler(event);
    res.status(200).send('OK');
  } catch (err) {
    console.error(`[Paddle] Error handling ${event.eventType}:`, err);
    // 500 makes Paddle retry later
    res.status(500).send('ERROR');
  }
}

module.exports = { handleWebhook, HANDLERS };
