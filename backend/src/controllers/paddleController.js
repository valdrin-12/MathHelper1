const { Webhooks, NodeRuntime } = require('@paddle/paddle-node-sdk');
const pool = require('../config/database');

// Signature verification needs the Node crypto provider; new Paddle() normally sets it,
// but we only need webhooks here (no API key), so initialize it directly.
NodeRuntime.initialize();
const webhooks = new Webhooks();

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Statuses that grant Premium until the end of the current billing period (or trial)
const ENTITLED_STATUSES = ['active', 'trialing'];

/**
 * Apply a subscription.* event to the user it belongs to.
 * The user is matched via customData.user_id (set by PremiumModal at checkout),
 * falling back to the stored paddle_subscription_id.
 */
async function applySubscriptionEvent(event) {
  const sub = event.data;
  const customUserId = sub.customData?.user_id;

  let userId = null;
  if (customUserId && UUID_RE.test(customUserId)) {
    userId = customUserId;
  } else {
    const { rows } = await pool.query(
      'SELECT id FROM users WHERE paddle_subscription_id = $1',
      [sub.id]
    );
    userId = rows[0]?.id || null;
  }

  if (!userId) {
    console.error(`[Paddle] No user for subscription ${sub.id} (${event.eventType})`);
    return;
  }

  let tier;
  let expiresAt;
  if (ENTITLED_STATUSES.includes(sub.status)) {
    tier = 'premium';
    expiresAt = sub.currentBillingPeriod?.endsAt || sub.nextBilledAt;
  } else if (sub.status === 'past_due') {
    // Paddle is retrying payment: keep whatever access is left, don't extend it
    tier = null;
    expiresAt = null;
  } else {
    // canceled / paused
    tier = 'free';
    expiresAt = new Date().toISOString();
  }

  // Only apply if this event is newer than the last one we applied (webhooks can arrive out of order)
  const { rowCount } = await pool.query(
    `UPDATE users SET
       tier = COALESCE($2, tier),
       premium_expires_at = COALESCE($3::timestamptz, premium_expires_at),
       paddle_customer_id = $4,
       paddle_subscription_id = $5,
       paddle_subscription_status = $6,
       paddle_event_at = $7,
       updated_at = NOW()
     WHERE id = $1 AND (paddle_event_at IS NULL OR paddle_event_at < $7)`,
    [userId, tier, expiresAt, sub.customerId, sub.id, sub.status, event.occurredAt]
  );

  if (rowCount === 0) {
    console.warn(`[Paddle] Skipped ${event.eventType} for user ${userId} (stale event or unknown user)`);
  } else {
    console.log(`[Paddle] ${event.eventType}: user ${userId} -> ${sub.status}`);
  }
}

/**
 * POST /api/paddle/webhook
 * Must be mounted with express.raw() — signature verification needs the exact raw body.
 */
async function handleWebhook(req, res) {
  const secret = process.env.PADDLE_WEBHOOK_SECRET;
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

  try {
    if (event.eventType.startsWith('subscription.')) {
      await applySubscriptionEvent(event);
    }
    // Respond 200 quickly so Paddle doesn't retry
    res.status(200).send('OK');
  } catch (err) {
    console.error('[Paddle] Webhook handling error:', err);
    // 500 makes Paddle retry later
    res.status(500).send('ERROR');
  }
}

module.exports = { handleWebhook };
