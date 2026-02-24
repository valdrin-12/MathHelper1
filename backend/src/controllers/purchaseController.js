const pool = require('../config/database');
const { validateAppleReceipt, validateGoogleReceipt } = require('../services/receiptValidator');

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

module.exports = { verifyPurchase, restorePurchase };
