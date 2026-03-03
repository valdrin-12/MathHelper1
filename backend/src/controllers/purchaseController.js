const pool = require('../config/database');
const { validateAppleReceipt, validateGoogleReceipt } = require('../services/receiptValidator');

// Stripe (lazy init — only when keys are configured)
let stripe = null;
function getStripe() {
  if (!stripe && process.env.STRIPE_SECRET_KEY) {
    stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  }
  return stripe;
}

async function verifyPurchase(req, res) {
  try {
    const { productId, platform, transactionId, receiptData, purchaseToken } = req.body;
    const userId = req.userId;

    if (!productId || !platform || !transactionId) {
      return res.status(400).json({
        success: false,
        error: 'productId, platform, and transactionId are required',
      });
    }

    // Check for duplicate transaction
    const { rows: existing } = await pool.query(
      'SELECT id FROM purchases WHERE transaction_id = $1',
      [transactionId]
    );
    if (existing.length > 0) {
      // Already processed - just return success with current tier
      const { rows: userRows } = await pool.query(
        'SELECT tier FROM users WHERE id = $1',
        [userId]
      );
      return res.json({
        success: true,
        tier: userRows[0]?.tier || 'premium',
        message: 'Purchase already verified',
      });
    }

    // Validate receipt with Apple or Google
    let validation;
    if (platform === 'ios') {
      validation = await validateAppleReceipt(receiptData);
    } else if (platform === 'android') {
      validation = await validateGoogleReceipt(productId, purchaseToken || receiptData);
    } else {
      return res.status(400).json({ success: false, error: 'Invalid platform' });
    }

    if (!validation.valid) {
      console.error(`[Purchase] Receipt validation failed for user ${userId}:`, validation.error);
      return res.status(400).json({
        success: false,
        error: 'Receipt validation failed',
      });
    }

    if (validation.skipped) {
      console.warn(`[Purchase] Validation skipped (dev mode) for user ${userId}`);
    }

    // Store purchase record
    await pool.query(
      `INSERT INTO purchases (user_id, product_id, platform, transaction_id, receipt_data)
       VALUES ($1, $2, $3, $4, $5)`,
      [userId, productId, platform, transactionId, receiptData || null]
    );

    // Upgrade user to premium
    await pool.query(
      "UPDATE users SET tier = 'premium', updated_at = NOW() WHERE id = $1",
      [userId]
    );

    res.json({ success: true, tier: 'premium' });
  } catch (err) {
    console.error('VerifyPurchase error:', err);
    res.status(500).json({ success: false, error: 'Failed to verify purchase' });
  }
}

async function restorePurchase(req, res) {
  try {
    const userId = req.userId;

    // Check if user has any previous purchase
    const { rows } = await pool.query(
      'SELECT id, product_id, purchased_at FROM purchases WHERE user_id = $1 ORDER BY purchased_at DESC LIMIT 1',
      [userId]
    );

    if (rows.length === 0) {
      return res.json({ success: true, hasPurchase: false, tier: 'free' });
    }

    // Re-activate premium
    await pool.query(
      "UPDATE users SET tier = 'premium', updated_at = NOW() WHERE id = $1",
      [userId]
    );

    res.json({ success: true, hasPurchase: true, tier: 'premium' });
  } catch (err) {
    console.error('RestorePurchase error:', err);
    res.status(500).json({ success: false, error: 'Failed to restore purchase' });
  }
}

// --- Stripe Web Payment ---

async function createCheckout(req, res) {
  try {
    const s = getStripe();
    if (!s || !process.env.STRIPE_PRICE_ID) {
      return res.status(503).json({ success: false, error: 'Stripe not configured' });
    }

    const userId = req.userId;
    const appUrl = process.env.APP_URL || 'https://mathhelper.online';

    // Check if user is already premium
    const { rows: userRows } = await pool.query('SELECT tier FROM users WHERE id = $1', [userId]);
    if (userRows[0]?.tier === 'premium') {
      return res.json({ success: false, error: 'Already premium' });
    }

    const session = await s.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
      success_url: `${appUrl}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/learn`,
      client_reference_id: userId,
      metadata: { userId },
    });

    res.json({ success: true, url: session.url });
  } catch (err) {
    console.error('CreateCheckout error:', err);
    res.status(500).json({ success: false, error: 'Failed to create checkout session' });
  }
}

async function stripeWebhook(req, res) {
  try {
    const s = getStripe();
    if (!s) {
      return res.status(503).send('Stripe not configured');
    }

    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = s.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId = session.client_reference_id;
      const transactionId = session.id;

      if (!userId) {
        console.error('Webhook: No userId in session');
        return res.status(400).send('Missing userId');
      }

      // Idempotency check
      const { rows: existing } = await pool.query(
        'SELECT id FROM purchases WHERE transaction_id = $1',
        [transactionId]
      );

      if (existing.length === 0) {
        // Store purchase
        await pool.query(
          `INSERT INTO purchases (user_id, product_id, platform, transaction_id, receipt_data)
           VALUES ($1, $2, $3, $4, $5)`,
          [userId, 'com.valdrin.mathhelper.premium', 'web', transactionId, JSON.stringify(session)]
        );

        // Upgrade to premium
        await pool.query(
          "UPDATE users SET tier = 'premium', updated_at = NOW() WHERE id = $1",
          [userId]
        );

        console.log(`[Stripe] User ${userId} upgraded to premium via web payment`);
      }
    }

    res.json({ received: true });
  } catch (err) {
    console.error('StripeWebhook error:', err);
    res.status(500).send('Webhook handler failed');
  }
}

async function checkSession(req, res) {
  try {
    const s = getStripe();
    if (!s) {
      return res.status(503).json({ success: false, error: 'Stripe not configured' });
    }

    const { session_id } = req.query;
    if (!session_id) {
      return res.status(400).json({ success: false, error: 'session_id required' });
    }

    const session = await s.checkout.sessions.retrieve(session_id);

    if (session.payment_status === 'paid') {
      const userId = session.client_reference_id;

      // Ensure tier is updated (webhook might not have fired yet)
      if (userId) {
        await pool.query(
          "UPDATE users SET tier = 'premium', updated_at = NOW() WHERE id = $1",
          [userId]
        );

        // Also ensure purchase record exists
        const { rows: existing } = await pool.query(
          'SELECT id FROM purchases WHERE transaction_id = $1',
          [session.id]
        );
        if (existing.length === 0) {
          await pool.query(
            `INSERT INTO purchases (user_id, product_id, platform, transaction_id, receipt_data)
             VALUES ($1, $2, $3, $4, $5)`,
            [userId, 'com.valdrin.mathhelper.premium', 'web', session.id, JSON.stringify(session)]
          );
        }
      }

      return res.json({ success: true, tier: 'premium', paid: true });
    }

    res.json({ success: true, paid: false });
  } catch (err) {
    console.error('CheckSession error:', err);
    res.status(500).json({ success: false, error: 'Failed to check session' });
  }
}

module.exports = { verifyPurchase, restorePurchase, createCheckout, stripeWebhook, checkSession };
