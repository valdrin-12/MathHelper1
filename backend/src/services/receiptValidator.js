const https = require('https');
const { GoogleAuth } = require('google-auth-library');

const APPLE_PRODUCTION_URL = 'https://buy.itunes.apple.com/verifyReceipt';
const APPLE_SANDBOX_URL = 'https://sandbox.itunes.apple.com/verifyReceipt';
const STORE_TIMEOUT_MS = 15000;

// Expected store identifiers (defaults match app.json / services/purchaseService.js)
const IAP_IOS_BUNDLE_ID = process.env.IAP_IOS_BUNDLE_ID || 'com.valdrin.mathhelper';
const IAP_ANDROID_PACKAGE = process.env.IAP_ANDROID_PACKAGE || process.env.ANDROID_PACKAGE_NAME || 'com.valdrin.mathhelper';
const IAP_PRODUCT_ID = process.env.IAP_PRODUCT_ID || 'com.valdrin.mathhelper.premium';

/*
 * Every validator resolves (never throws) to a normalized result:
 * {
 *   valid: boolean,
 *   skipped?: true,          // dev only: credentials missing, nothing was checked
 *   notConfigured?: true,    // production: credentials missing -> caller should answer 503
 *   transient?: true,        // store unreachable / 5xx -> caller should answer 503
 *   error?: string,
 *   environment?: 'production' | 'sandbox',
 *   productId?, transactionId?, originalTransactionId?,
 *   purchaseDate?: Date, expiresAt?: Date | null   // expiresAt only when the store returns one
 * }
 */

function missingCredentials(name) {
  if (process.env.NODE_ENV === 'production') {
    console.error(`[Receipt Validation] ${name} not set in production — rejecting`);
    return { valid: false, notConfigured: true, error: 'Receipt validation not configured' };
  }
  console.warn(`[Receipt Validation] ${name} not set - skipping validation (dev mode)`);
  return { valid: true, skipped: true };
}

function msToDate(ms) {
  const n = Number(ms);
  return Number.isFinite(n) && n > 0 ? new Date(n) : null;
}

/**
 * Validate an Apple App Store receipt for our bundle id and product.
 * @param {string} receiptData - Base64-encoded receipt from the app
 */
async function validateAppleReceipt(receiptData) {
  const sharedSecret = process.env.APPLE_SHARED_SECRET;
  if (!sharedSecret) return missingCredentials('APPLE_SHARED_SECRET');

  if (!receiptData || typeof receiptData !== 'string') {
    return { valid: false, error: 'No receipt data provided' };
  }

  const payload = JSON.stringify({
    'receipt-data': receiptData,
    password: sharedSecret,
    'exclude-old-transactions': true,
  });

  let result;
  let usedSandbox = false;
  try {
    // Try production first, then sandbox
    result = await callAppleVerify(APPLE_PRODUCTION_URL, payload);
    // Status 21007 means receipt is from sandbox - retry against sandbox
    if (result.status === 21007) {
      usedSandbox = true;
      result = await callAppleVerify(APPLE_SANDBOX_URL, payload);
    }
  } catch (error) {
    console.error('[Apple Receipt] Request failed:', error.message);
    return { valid: false, transient: true, error: 'Apple verification unavailable' };
  }

  if (result.status !== 0) {
    console.error('[Apple Receipt] Validation failed with status:', result.status);
    // 21005 / 21100-21199: Apple-side temporary errors
    const transient = result.status === 21005 || (result.status >= 21100 && result.status <= 21199);
    return { valid: false, transient, error: `Apple status ${result.status}` };
  }

  const bundleId = result.receipt?.bundle_id;
  if (bundleId !== IAP_IOS_BUNDLE_ID) {
    console.error(`[Apple Receipt] Bundle id mismatch: ${bundleId}`);
    return { valid: false, error: 'Bundle id mismatch' };
  }

  // Latest transaction for OUR product (a receipt can contain other products)
  const candidates = [...(result.latest_receipt_info || []), ...(result.receipt?.in_app || [])]
    .filter((t) => t && t.product_id === IAP_PRODUCT_ID)
    .sort((a, b) => Number(b.purchase_date_ms || 0) - Number(a.purchase_date_ms || 0));
  const latestTransaction = candidates[0];

  if (!latestTransaction) {
    return { valid: false, error: 'No transaction for the expected product in receipt' };
  }

  if (latestTransaction.cancellation_date_ms || latestTransaction.cancellation_date) {
    return { valid: false, error: 'Transaction was refunded/cancelled' };
  }

  const isSandbox = usedSandbox || result.environment === 'Sandbox';
  return {
    valid: true,
    environment: isSandbox ? 'sandbox' : 'production',
    productId: latestTransaction.product_id,
    transactionId: latestTransaction.transaction_id,
    originalTransactionId: latestTransaction.original_transaction_id || null,
    purchaseDate: msToDate(latestTransaction.purchase_date_ms) || new Date(),
    expiresAt: msToDate(latestTransaction.expires_date_ms),
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
      timeout: STORE_TIMEOUT_MS,
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

    req.on('timeout', () => req.destroy(new Error('Apple verifyReceipt timed out')));
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Validate a Google Play one-time product purchase for our package and product.
 * @param {string} productId - The product SKU (must equal IAP_PRODUCT_ID)
 * @param {string} purchaseToken - The purchase token from Google Play
 */
async function validateGoogleReceipt(productId, purchaseToken) {
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!serviceAccountJson) return missingCredentials('GOOGLE_SERVICE_ACCOUNT_JSON');

  if (!purchaseToken || typeof purchaseToken !== 'string') {
    return { valid: false, error: 'No purchase token provided' };
  }
  if (productId !== IAP_PRODUCT_ID) {
    return { valid: false, error: 'Unexpected product id' };
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

    const url = 'https://androidpublisher.googleapis.com/androidpublisher/v3/applications/'
      + `${encodeURIComponent(IAP_ANDROID_PACKAGE)}/purchases/products/${encodeURIComponent(IAP_PRODUCT_ID)}`
      + `/tokens/${encodeURIComponent(purchaseToken)}`;

    const response = await client.request({ url, method: 'GET', timeout: STORE_TIMEOUT_MS });
    const purchase = response.data;

    // purchaseState: 0 = Purchased, 1 = Canceled, 2 = Pending
    if (purchase.purchaseState !== 0) {
      return { valid: false, error: `Purchase state: ${purchase.purchaseState}` };
    }
    if (purchase.productId && purchase.productId !== IAP_PRODUCT_ID) {
      return { valid: false, error: 'Unexpected product id' };
    }

    return {
      valid: true,
      // purchaseType 0 = test purchase (license tester), the Play equivalent of Apple's sandbox
      environment: purchase.purchaseType === 0 ? 'sandbox' : 'production',
      productId: IAP_PRODUCT_ID,
      // orderId is the store-side transaction id; fall back to the (also unique) token
      transactionId: purchase.orderId || purchaseToken,
      originalTransactionId: null,
      purchaseDate: msToDate(purchase.purchaseTimeMillis) || new Date(),
      expiresAt: null, // one-time products have no store expiry
    };
  } catch (error) {
    const status = error.response?.status;
    console.error('[Google Receipt] Validation error:', status || '', error.message);
    // 401/403 = our service account is misconfigured, not the user's fault
    const transient = !status || status >= 500 || [401, 403, 429].includes(status);
    return { valid: false, transient, error: transient ? 'Google verification unavailable' : `Google status ${status}` };
  }
}

module.exports = {
  validateAppleReceipt,
  validateGoogleReceipt,
  IAP_IOS_BUNDLE_ID,
  IAP_ANDROID_PACKAGE,
  IAP_PRODUCT_ID,
};
