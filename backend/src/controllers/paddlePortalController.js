const pool = require('../config/database');
const { getPaddleClient } = require('../services/paddleClient');

/**
 * POST /api/paddle/portal-session (authenticated)
 * Mints a Paddle customer portal session for the signed-in user.
 * The Paddle customer is resolved server-side from req.userId — never from the request.
 */
async function createPortalSession(req, res) {
  let paddle;
  try {
    paddle = getPaddleClient();
  } catch (err) {
    console.error('[Paddle] Portal not configured:', err.message);
    // err.message never contains the key itself, only which variable/prefix is wrong
    return res.status(503).json({ success: false, error: 'Billing portal not configured', configError: err.message });
  }

  try {
    const { rows: customers } = await pool.query(
      `SELECT paddle_customer_id FROM paddle_customers WHERE user_id = $1
       UNION ALL
       SELECT paddle_customer_id FROM users WHERE id = $1 AND paddle_customer_id IS NOT NULL
       LIMIT 1`,
      [req.userId]
    );
    const customerId = customers[0]?.paddle_customer_id;
    if (!customerId) {
      return res.status(404).json({ success: false, error: 'No Paddle customer for this user', code: 'NO_PADDLE_CUSTOMER' });
    }

    // Deep-link the most recent subscription that can still be managed
    const { rows: subs } = await pool.query(
      `SELECT paddle_subscription_id FROM paddle_subscriptions
       WHERE user_id = $1 AND paddle_customer_id = $2 AND status <> 'canceled'
       ORDER BY updated_at DESC LIMIT 1`,
      [req.userId, customerId]
    );
    const subscriptionIds = subs.map((s) => s.paddle_subscription_id);

    const session = await paddle.customerPortalSessions.create(customerId, subscriptionIds);
    const subscriptionUrls = session.urls.subscriptions?.[0];

    res.json({
      success: true,
      url: session.urls.general.overview,
      cancelUrl: subscriptionUrls?.cancelSubscription || null,
      updatePaymentMethodUrl: subscriptionUrls?.updateSubscriptionPaymentMethod || null,
    });
  } catch (err) {
    console.error('[Paddle] Portal session error:', err);
    // Paddle's error code (e.g. "forbidden", "authentication_malformed") is not sensitive and
    // makes misconfigured API keys diagnosable without server log access
    res.status(500).json({
      success: false,
      error: 'Failed to create billing portal session',
      paddleError: err?.code || null,
    });
  }
}

module.exports = { createPortalSession };
