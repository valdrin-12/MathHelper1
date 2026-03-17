const pool = require('../config/database');
const { validateAppleReceipt, validateGoogleReceipt } = require('../services/receiptValidator');

// Paysera (lazy init — only when keys are configured)
let paysera = null;
function getPaysera() {
  if (!paysera && process.env.PAYSERA_PROJECT_ID && process.env.PAYSERA_SIGN_PASSWORD) {
    const Paysera = require('paysera-nodejs');
    const appUrl = process.env.APP_URL || 'https://mathhelper.online';
    paysera = new Paysera({
      projectid: process.env.PAYSERA_PROJECT_ID,
      sign_password: process.env.PAYSERA_SIGN_PASSWORD,
      accepturl: `${appUrl}/premium/success`,
      cancelurl: `${appUrl}/learn`,
      callbackurl: `${appUrl}/api/purchases/paysera-callback`,
    });
  }
  return paysera;
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
      "UPDATE users SET tier = 'premium', premium_expires_at = NOW() + INTERVAL '1 month', updated_at = NOW() WHERE id = $1",
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
      "UPDATE users SET tier = 'premium', premium_expires_at = NOW() + INTERVAL '1 month', updated_at = NOW() WHERE id = $1",
      [userId]
    );

    res.json({ success: true, hasPurchase: true, tier: 'premium' });
  } catch (err) {
    console.error('RestorePurchase error:', err);
    res.status(500).json({ success: false, error: 'Failed to restore purchase' });
  }
}

// --- Paysera Web Payment ---

async function createCheckout(req, res) {
  try {
    const p = getPaysera();
    if (!p) {
      return res.status(503).json({ success: false, error: 'Paysera not configured' });
    }

    const userId = req.userId;

    // Check if user is already premium
    const { rows: userRows } = await pool.query('SELECT tier FROM users WHERE id = $1', [userId]);
    if (userRows[0]?.tier === 'premium') {
      return res.json({ success: false, error: 'Already premium' });
    }

    // Generate unique order ID
    const orderId = `premium-${userId}-${Date.now()}`;

    // Build Paysera payment URL (test mode only when env var explicitly set)
    const paymentParams = {
      orderid: orderId,
      amount: 399, // €3.99 in cents
      currency: 'EUR',
    };
    if (process.env.PAYSERA_TEST_MODE === '1') {
      paymentParams.test = 1;
    }
    const paymentUrl = p.buildRequestUrl(paymentParams);

    res.json({ success: true, url: paymentUrl });
  } catch (err) {
    console.error('CreateCheckout error:', err);
    res.status(500).json({ success: false, error: 'Failed to create checkout session' });
  }
}

async function payseraCallback(req, res) {
  try {
    const p = getPaysera();
    if (!p) {
      return res.status(503).send('FAILED');
    }

    // Verify callback signature
    if (!p.checkCallback(req)) {
      console.error('[Paysera] Invalid callback signature');
      return res.status(400).send('FAILED');
    }

    // Decode payment data
    const paymentData = p.decode(req.body.data);
    const { orderid, status } = paymentData;

    console.log('[Paysera] Callback received:', { orderid, status });

    // Extract userId from orderid (format: premium-{userId}-{timestamp})
    const parts = orderid.split('-');
    if (parts.length < 3 || parts[0] !== 'premium') {
      console.error('[Paysera] Invalid orderid format:', orderid);
      return res.status(400).send('FAILED');
    }
    const userId = parts[1];

    // Validate userId is a positive integer and exists in DB
    if (!/^\d+$/.test(userId)) {
      console.error('[Paysera] Non-numeric userId in orderid:', orderid);
      return res.status(400).send('FAILED');
    }
    const { rows: userCheck } = await pool.query(
      'SELECT id FROM users WHERE id = $1',
      [userId]
    );
    if (userCheck.length === 0) {
      console.error('[Paysera] Unknown userId in orderid:', userId);
      return res.status(400).send('FAILED');
    }

    // Idempotency check
    const { rows: existing } = await pool.query(
      'SELECT id FROM purchases WHERE transaction_id = $1',
      [orderid]
    );

    if (existing.length === 0 && status === 1) {
      // Store purchase
      await pool.query(
        `INSERT INTO purchases (user_id, product_id, platform, transaction_id, receipt_data)
         VALUES ($1, $2, $3, $4, $5)`,
        [userId, 'com.valdrin.mathhelper.premium', 'web', orderid, JSON.stringify(paymentData)]
      );

      // Upgrade to premium
      await pool.query(
        "UPDATE users SET tier = 'premium', premium_expires_at = NOW() + INTERVAL '1 month', updated_at = NOW() WHERE id = $1",
        [userId]
      );

      console.log(`[Paysera] User ${userId} upgraded to premium via web payment`);
    }

    // CRITICAL: Must respond with "OK" for Paysera to not retry
    res.send('OK');
  } catch (err) {
    console.error('PayseraCallback error:', err);
    res.status(500).send('ERROR');
  }
}

async function checkPayment(req, res) {
  try {
    const { orderid } = req.query;
    if (!orderid) {
      return res.status(400).json({ success: false, error: 'orderid required' });
    }

    // Check if purchase exists
    const { rows } = await pool.query(
      'SELECT user_id FROM purchases WHERE transaction_id = $1',
      [orderid]
    );

    if (rows.length > 0) {
      const userId = rows[0].user_id;

      // Ensure tier is updated (callback might not have fired yet)
      await pool.query(
        "UPDATE users SET tier = 'premium', premium_expires_at = NOW() + INTERVAL '1 month', updated_at = NOW() WHERE id = $1",
        [userId]
      );

      return res.json({ success: true, tier: 'premium', paid: true });
    }

    res.json({ success: true, paid: false });
  } catch (err) {
    console.error('CheckPayment error:', err);
    res.status(500).json({ success: false, error: 'Failed to check payment' });
  }
}

module.exports = { verifyPurchase, restorePurchase, createCheckout, payseraCallback, checkPayment };
