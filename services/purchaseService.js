import { Platform } from 'react-native';
import Constants from 'expo-constants';
import api from './apiClient';

// Targets react-native-iap v14 (OpenIAP API): fetchProducts / displayPrice / ErrorCode.UserCancelled
// ('user-cancelled'), event-based requestPurchase, Purchase without transactionReceipt.

const PREMIUM_SKU = 'com.valdrin.mathhelper.premium';

// Only load react-native-iap in native builds (not Expo Go / web)
const isExpoGo = Constants.appOwnership === 'expo';
let IAP = null;

if (!isExpoGo && Platform.OS !== 'web') {
  try {
    IAP = require('react-native-iap');
  } catch (e) {
    console.warn('react-native-iap not available:', e.message);
  }
}

// v14 uses 'user-cancelled'; older versions used 'E_USER_CANCELLED'
const CANCEL_CODES = ['user-cancelled', 'E_USER_CANCELLED'];
const isCancelError = (error) =>
  !!error && (CANCEL_CODES.includes(error.code) || (IAP?.ErrorCode && error.code === IAP.ErrorCode.UserCancelled));

let purchaseUpdateSubscription = null;
let purchaseErrorSubscription = null;

/**
 * Check if IAP is available (native build only)
 */
export const isIAPAvailable = () => !!IAP;

/**
 * Initialize IAP connection
 */
export const initIAP = async () => {
  if (!IAP) return false;
  try {
    await IAP.initConnection();
    return true;
  } catch (error) {
    console.error('IAP init error:', error);
    return false;
  }
};

/**
 * Normalise a store product across library versions.
 * `price` (and the legacy `localizedPrice`) contain the formatted, localized price string.
 */
const normalizeProduct = (product) => {
  if (!product) return null;
  const price = product.displayPrice ?? product.localizedPrice ?? product.price ?? null;
  return {
    ...product,
    productId: product.id ?? product.productId,
    price: price != null ? String(price) : null,
    localizedPrice: price != null ? String(price) : null,
    currency: product.currency ?? null,
  };
};

/**
 * Fetch premium product info from store
 * @returns {Promise<null | { productId: string, price: string|null, localizedPrice: string|null, title?: string, ... }>}
 */
export const fetchPremiumProduct = async () => {
  if (!IAP) return null;
  try {
    const fetcher = IAP.fetchProducts || IAP.getProducts;
    const products = await fetcher({ skus: [PREMIUM_SKU], type: 'in-app' });
    return Array.isArray(products) && products.length > 0 ? normalizeProduct(products[0]) : null;
  } catch (error) {
    console.error('Fetch products error:', error);
    return null;
  }
};

/**
 * Purchase premium - triggers store purchase flow.
 * The result arrives through the listeners registered with setupPurchaseListeners.
 * @throws Error with `cancelled: true` when the user cancels (UI should not show an error)
 */
export const purchasePremium = async () => {
  if (!IAP) throw new Error('IAP not available in Expo Go');
  try {
    await IAP.requestPurchase({
      request: {
        apple: { sku: PREMIUM_SKU },
        google: { skus: [PREMIUM_SKU] },
      },
      type: 'in-app',
    });
  } catch (error) {
    if (isCancelError(error)) {
      const err = new Error('Purchase cancelled');
      err.code = 'user-cancelled';
      err.cancelled = true;
      throw err;
    }
    console.error('Purchase error:', error);
    throw error;
  }
};

/** iOS: app receipt (base64) for the backend's verifyReceipt validation. */
const getIOSReceipt = async () => {
  try {
    if (IAP?.getReceiptDataIOS) return await IAP.getReceiptDataIOS();
    if (IAP?.getReceiptIOS) return await IAP.getReceiptIOS();
  } catch (error) {
    console.warn('Could not read iOS receipt:', error?.message);
  }
  return null;
};

/**
 * Validate purchase with backend and upgrade user
 */
export const validateAndUpgrade = async (purchase) => {
  try {
    let receiptData = purchase.transactionReceipt || null;
    if (!receiptData && Platform.OS === 'ios') {
      receiptData = await getIOSReceipt();
    }

    const data = await api.post('/api/purchases/verify', {
      productId: purchase.productId || PREMIUM_SKU,
      platform: Platform.OS,
      transactionId: purchase.transactionId || purchase.orderId || purchase.id,
      receiptData,
      // Android only - needed for Google Play validation
      purchaseToken: purchase.purchaseTokenAndroid || purchase.purchaseToken,
    });

    if (data.success && IAP) {
      // Finish the transaction so the store knows we delivered
      await IAP.finishTransaction({ purchase, isConsumable: false });
    }

    return data;
  } catch (error) {
    console.error('Validate purchase error:', error);
    throw error;
  }
};

/**
 * Restore previous purchases
 * @returns {Promise<{ restored: boolean, tier?: string }>}
 */
export const restorePurchases = async () => {
  try {
    if (IAP) {
      // First check locally with the store
      const purchases = (await IAP.getAvailablePurchases()) || [];
      const premiumPurchase = purchases.find((p) => p.productId === PREMIUM_SKU);

      if (premiumPurchase) {
        // Validate with backend
        const result = await validateAndUpgrade(premiumPurchase);
        return { restored: true, tier: result.tier };
      }
    }

    // Also check backend for previous purchases
    const data = await api.post('/api/purchases/restore', {});
    if (data.hasPurchase) {
      return { restored: true, tier: data.tier };
    }

    return { restored: false };
  } catch (error) {
    console.error('Restore purchases error:', error);
    throw error;
  }
};

/**
 * Set up purchase listeners
 * @param {(purchase) => void} onSuccess - completed purchase (pending purchases are ignored)
 * @param {(error) => void} onError - store error (cancellations excluded)
 * @param {() => void} [onCancel] - user cancelled the store sheet (use it to clear loading state)
 */
export const setupPurchaseListeners = (onSuccess, onError, onCancel) => {
  if (!IAP) return;
  removePurchaseListeners();

  purchaseUpdateSubscription = IAP.purchaseUpdatedListener((purchase) => {
    if (!purchase || purchase.purchaseState === 'pending') return;
    if (purchase.productId && purchase.productId !== PREMIUM_SKU) return;
    if (purchase.purchaseToken || purchase.transactionId || purchase.transactionReceipt || purchase.id) {
      onSuccess(purchase);
    }
  });

  purchaseErrorSubscription = IAP.purchaseErrorListener((error) => {
    if (isCancelError(error)) {
      if (onCancel) onCancel(error);
      return;
    }
    onError(error);
  });
};

/**
 * Remove purchase listeners
 */
export const removePurchaseListeners = () => {
  if (purchaseUpdateSubscription) {
    purchaseUpdateSubscription.remove();
    purchaseUpdateSubscription = null;
  }
  if (purchaseErrorSubscription) {
    purchaseErrorSubscription.remove();
    purchaseErrorSubscription = null;
  }
};

/**
 * Clean up IAP connection
 */
export const cleanupIAP = async () => {
  removePurchaseListeners();
  if (!IAP) return;
  try {
    await IAP.endConnection();
  } catch (error) {
    console.error('IAP cleanup error:', error);
  }
};

export default {
  isIAPAvailable,
  initIAP,
  fetchPremiumProduct,
  purchasePremium,
  validateAndUpgrade,
  restorePurchases,
  setupPurchaseListeners,
  removePurchaseListeners,
  cleanupIAP,
  PREMIUM_SKU,
};
