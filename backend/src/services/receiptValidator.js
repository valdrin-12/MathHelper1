const https = require('https');
const { GoogleAuth } = require('google-auth-library');

const APPLE_PRODUCTION_URL = 'https://buy.itunes.apple.com/verifyReceipt';
const APPLE_SANDBOX_URL = 'https://sandbox.itunes.apple.com/verifyReceipt';

/**
 * Validate an Apple App Store receipt
 * @param {string} receiptData - Base64-encoded receipt from the app
 * @returns {{ valid: boolean, productId?: string, transactionId?: string }}
 */
async function validateAppleReceipt(receiptData) {
  const sharedSecret = process.env.APPLE_SHARED_SECRET;

  if (!sharedSecret) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[Receipt Validation] APPLE_SHARED_SECRET not set in production — rejecting purchase');
      return { valid: false, error: 'Receipt validation not configured' };
    }
    console.warn('[Receipt Validation] APPLE_SHARED_SECRET not set - skipping validation (dev mode)');
    return { valid: true, skipped: true };
  }

  if (!receiptData) {
    return { valid: false, error: 'No receipt data provided' };
  }

  const payload = JSON.stringify({
    'receipt-data': receiptData,
    password: sharedSecret,
    'exclude-old-transactions': true,
  });

  // Try production first, then sandbox
  let result = await callAppleVerify(APPLE_PRODUCTION_URL, payload);

  // Status 21007 means receipt is from sandbox - retry against sandbox
  if (result.status === 21007) {
    result = await callAppleVerify(APPLE_SANDBOX_URL, payload);
  }

  if (result.status !== 0) {
    console.error('[Apple Receipt] Validation failed with status:', result.status);
    return { valid: false, error: `Apple status ${result.status}` };
  }

  // Extract the latest transaction for our product
  const inApp = result.receipt?.in_app || [];
  const latestTransaction = result.latest_receipt_info
    ? result.latest_receipt_info[result.latest_receipt_info.length - 1]
    : inApp[inApp.length - 1];

  if (!latestTransaction) {
    return { valid: false, error: 'No transactions found in receipt' };
  }

  return {
    valid: true,
    productId: latestTransaction.product_id,
    transactionId: latestTransaction.transaction_id,
  };
}

/**
 * Make HTTPS POST to Apple's verifyReceipt endpoint
 */
function callAppleVerify(url, payload) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Invalid JSON from Apple'));
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Validate a Google Play purchase
 * @param {string} productId - The product SKU
 * @param {string} purchaseToken - The purchase token from Google Play
 * @returns {{ valid: boolean, productId?: string }}
 */
async function validateGoogleReceipt(productId, purchaseToken) {
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  if (!serviceAccountJson) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[Receipt Validation] GOOGLE_SERVICE_ACCOUNT_JSON not set in production — rejecting purchase');
      return { valid: false, error: 'Receipt validation not configured' };
    }
    console.warn('[Receipt Validation] GOOGLE_SERVICE_ACCOUNT_JSON not set - skipping validation (dev mode)');
    return { valid: true, skipped: true };
  }

  if (!purchaseToken) {
    return { valid: false, error: 'No purchase token provided' };
  }

  try {
    const credentials = JSON.parse(
      Buffer.from(serviceAccountJson, 'base64').toString('utf-8')
    );

    const auth = new GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/androidpublisher'],
    });

    const client = await auth.getClient();
    const packageName = process.env.ANDROID_PACKAGE_NAME || 'com.valdrin.mathhelper';

    const url = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${packageName}/purchases/products/${productId}/tokens/${purchaseToken}`;

    const response = await client.request({ url, method: 'GET' });
    const purchase = response.data;

    // purchaseState: 0 = Purchased, 1 = Canceled, 2 = Pending
    if (purchase.purchaseState !== 0) {
      return { valid: false, error: `Purchase state: ${purchase.purchaseState}` };
    }

    return {
      valid: true,
      productId: purchase.productId || productId,
    };
  } catch (error) {
    console.error('[Google Receipt] Validation error:', error.message);
    return { valid: false, error: error.message };
  }
}

module.exports = { validateAppleReceipt, validateGoogleReceipt };
