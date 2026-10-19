const pool = require('../config/database');
const {
  validateAppleReceipt,
  validateGoogleReceipt,
  IAP_PRODUCT_ID,
} = require('../services/receiptValidator');

// The premium product is a one-time purchase that grants 1 month of access (see open product decision:
// one-time vs auto-renewing subscription). When the store returns its own expiry, that wins.
const ACCESS_MONTHS_PER_PURCHASE = 1;

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function storeUnavailable(res) {
  return res.status(503).json({
    success: false,
    error: 'Purchase verification is temporarily unavailable. Please try again later.',
    code: 'IAP_UNAVAILABLE',
  });
}

/** Sandbox/test purchases are only accepted outside production, or for the App Review account. */
function sandboxAllowed(email) {
  if (!isProduction()) return true;
  const reviewEmail = (process.env.IAP_REVIEW_ACCOUNT_EMAIL || '').trim().toLowerCase();
  return !!reviewEmail && (email || '').toLowerCase() === reviewEmail;
}

function accessExpiry(validation) {
  if (validation.expiresAt) return validation.expiresAt;
  const expires = new Date(validation.purchaseDate || Date.now());
  expires.setUTCMonth(expires.getUTCMonth() + ACCESS_MONTHS_PER_PURCHASE);
  return expires;
}

function validateWithStore(platform, productId, { receiptData, purchaseToken }) {
  if (platform === 'ios') return validateAppleReceipt(receiptData);
  return validateGoogleReceipt(productId, purchaseToken);
}

/** Extract the Play purchase token from a legacy Android row (receipt_data held the JSON transactionReceipt). */
function legacyAndroidToken(receiptData) {
  if (!receiptData) return null;
  try {
    return JSON.parse(receiptData).purchaseToken || null;
  } catch {
    return null;
  }
}

async function verifyPurchase(req, res) {
  try {
    const { productId, platform, transactionId, receiptData, purchaseToken } = req.body;
    const userId = req.userId;

    if (!productId || !platform) {
      return res.status(400).json({
        success: false,
        error: 'productId and platform are required',
      });
    }
    if (platform !== 'ios' && platform !== 'android') {
      return res.status(400).json({ success: false, error: 'Invalid platform' });
    }
    if (productId !== IAP_PRODUCT_ID) {
      return res.status(400).json({ success: false, error: 'Unknown product', code: 'INVALID_PRODUCT' });
    }

    const token = platform === 'android' ? (purchaseToken || legacyAndroidToken(receiptData)) : null;
    const validation = await validateWithStore(platform, productId, { receiptData, purchaseToken: token });

    if (validation.notConfigured || validation.transient) {
      console.error(`[Purchase] Store verification unavailable for user ${userId}:`, validation.error);
      return storeUnavailable(res);
    }
    if (!validation.valid) {
      console.error(`[Purchase] Receipt validation failed for user ${userId}:`, validation.error);
      return res.status(400).json({
        success: false,
        error: 'Receipt validation failed',
      });
    }

    let storeTransactionId = validation.transactionId;
    if (validation.skipped) {
      // Dev mode only (validator refuses to skip in production): trust the client id
      console.warn(`[Purchase] Validation skipped (dev mode) for user ${userId}`);
      storeTransactionId = transactionId;
    }
    if (!storeTransactionId) {
      return res.status(400).json({ success: false, error: 'Receipt validation failed' });
    }

    const { rows: userRows } = await pool.query('SELECT email FROM users WHERE id = $1', [userId]);
    if (userRows.length === 0) {
      return res.status(401).json({ success: false, error: 'User not found' });
    }
    if (validation.environment === 'sandbox' && !sandboxAllowed(userRows[0].email)) {
      console.warn(`[Purchase] Rejected sandbox receipt in production for user ${userId}`);
      return res.status(403).json({
        success: false,
        error: 'Sandbox purchases are not accepted',
        code: 'SANDBOX_RECEIPT',
      });
    }

    const expiresAt = accessExpiry(validation);
    if (expiresAt <= new Date()) {
      return res.status(400).json({ success: false, error: 'Purchase has expired', code: 'PURCHASE_EXPIRED' });
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // Dedupe on the STORE transaction id (unique index from migration 012)
      const { rows: inserted } = await client.query(
        `INSERT INTO purchases (user_id, product_id, platform, transaction_id, receipt_data, purchase_token,
                                expires_at, environment, purchased_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         ON CONFLICT (transaction_id) WHERE transaction_id IS NOT NULL DO NOTHING
         RETURNING id`,
        [
          userId, productId, platform, storeTransactionId,
          platform === 'ios' ? (receiptData || null) : null,
          token,
          expiresAt,
          validation.environment || (validation.skipped ? 'dev' : null),
          validation.purchaseDate || new Date(),
        ]
      );

      if (inserted.length === 0) {
        await client.query('ROLLBACK');
        const { rows: existing } = await pool.query(
          'SELECT user_id FROM purchases WHERE transaction_id = $1',
          [storeTransactionId]
        );
        if (existing[0] && existing[0].user_id !== userId) {
          console.warn(`[Purchase] Transaction already linked to another account (user ${userId})`);
          return res.status(409).json({
            success: false,
            error: 'This purchase is already linked to another account',
            code: 'PURCHASE_OWNED_BY_OTHER_ACCOUNT',
          });
        }
        // Already processed for this user - just return success with current tier
        const { rows: tierRows } = await pool.query('SELECT tier FROM users WHERE id = $1', [userId]);
        return res.json({
          success: true,
          tier: tierRows[0]?.tier || 'premium',
          message: 'Purchase already verified',
        });
      }

      // Upgrade user to premium; never shorten an existing longer entitlement (e.g. Paddle)
      const { rows: updated } = await client.query(
        `UPDATE users SET tier = 'premium',
           premium_expires_at = GREATEST(COALESCE(premium_expires_at, $2::timestamptz), $2::timestamptz),
           updated_at = NOW()
         WHERE id = $1
         RETURNING premium_expires_at`,
        [userId, expiresAt]
      );
      await client.query('COMMIT');

      res.json({ success: true, tier: 'premium', premiumExpiresAt: updated[0]?.premium_expires_at || expiresAt });
    } catch (err) {
      await client.query('ROLLBACK').catch(() => {});
      throw err;
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('VerifyPurchase error:', err);
    res.status(500).json({ success: false, error: 'Failed to verify purchase' });
  }
}

/**
 * Re-validate the user's most recent stored receipt / purchase token with the store.
 * A DB row alone never grants premium.
 */
async function restorePurchase(req, res) {
  const noPurchase = () => res.json({ success: true, hasPurchase: false, tier: 'free' });

  try {
    const userId = req.userId;

    const { rows } = await pool.query(
      `SELECT p.id, p.product_id, p.platform, p.transaction_id, p.receipt_data, p.purchase_token,
              p.expires_at, p.purchased_at, u.email
       FROM purchases p JOIN users u ON u.id = p.user_id
       WHERE p.user_id = $1 AND p.status = 'completed'
         AND (p.receipt_data IS NOT NULL OR p.purchase_token IS NOT NULL)
       ORDER BY p.purchased_at DESC LIMIT 1`,
      [userId]
    );

    if (rows.length === 0) {
      return noPurchase();
    }

    const row = rows[0];
    if (row.platform !== 'ios' && row.platform !== 'android') {
      return noPurchase();
    }

    const token = row.platform === 'android' ? (row.purchase_token || legacyAndroidToken(row.receipt_data)) : null;
    const validation = await validateWithStore(row.platform, row.product_id, {
      receiptData: row.receipt_data,
      purchaseToken: token,
    });

    if (validation.notConfigured || validation.transient) {
      console.error(`[Restore] Store verification unavailable for user ${userId}:`, validation.error);
      return storeUnavailable(res);
    }
    if (!validation.valid) {
      console.warn(`[Restore] Stored purchase no longer valid for user ${userId}:`, validation.error);
      return noPurchase();
    }

    let expiresAt;
    if (validation.skipped) {
      // Dev mode only: nothing to re-validate against, fall back to the stored entitlement
      expiresAt = row.expires_at || accessExpiry({ purchaseDate: row.purchased_at });
    } else {
      if (validation.environment === 'sandbox' && !sandboxAllowed(row.email)) {
        return noPurchase();
      }
      // The store's transaction must not belong to someone else
      const { rows: owners } = await pool.query(
        'SELECT user_id FROM purchases WHERE transaction_id = $1',
        [validation.transactionId]
      );
      if (owners[0] && owners[0].user_id !== userId) {
        console.warn(`[Restore] Store transaction belongs to another account (user ${userId})`);
        return noPurchase();
      }
      expiresAt = accessExpiry(validation);
    }

    if (new Date(expiresAt) <= new Date()) {
      return noPurchase();
    }

    await pool.query('UPDATE purchases SET expires_at = $2 WHERE id = $1', [row.id, expiresAt]);
    const { rows: updated } = await pool.query(
      `UPDATE users SET tier = 'premium',
         premium_expires_at = GREATEST(COALESCE(premium_expires_at, $2::timestamptz), $2::timestamptz),
         updated_at = NOW()
       WHERE id = $1
       RETURNING premium_expires_at`,
      [userId, expiresAt]
    );

    res.json({
      success: true,
      hasPurchase: true,
      tier: 'premium',
      premiumExpiresAt: updated[0]?.premium_expires_at || expiresAt,
    });
  } catch (err) {
    console.error('RestorePurchase error:', err);
    res.status(500).json({ success: false, error: 'Failed to restore purchase' });
  }
}

module.exports = { verifyPurchase, restorePurchase };
