import { Platform } from 'react-native';
import Constants from 'expo-constants';
import api from './apiClient';

const PREMIUM_SKU = 'com.valdrin.mathhelper.premium';

// Only load react-native-iap in native builds (not Expo Go)
const isExpoGo = Constants.appOwnership === 'expo';
let IAP = null;

if (!isExpoGo) {
  try {
    IAP = require('react-native-iap');
  } catch (e) {
    console.warn('react-native-iap not available:', e.message);
  }
}

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
 * Fetch premium product info from store
 */
export const fetchPremiumProduct = async () => {
  if (!IAP) return null;
  try {
    const products = await IAP.getProducts({
      skus: [PREMIUM_SKU],
    });
    return products.length > 0 ? products[0] : null;
  } catch (error) {
    console.error('Fetch products error:', error);
    return null;
  }
};

/**
 * Purchase premium - triggers store purchase flow
 */
export const purchasePremium = async () => {
  if (!IAP) throw new Error('IAP not available in Expo Go');
  try {
    await IAP.requestPurchase({
      request: {
        ios: {
          sku: PREMIUM_SKU,
        },
        android: {
          skus: [PREMIUM_SKU],
        },
      },
      type: 'inapp',
    });
  } catch (error) {
    if (error.code === 'E_USER_CANCELLED') {
      return { cancelled: true };
    }
    console.error('Purchase error:', error);
    throw error;
  }
};

/**
 * Validate purchase with backend and upgrade user
 */
export const validateAndUpgrade = async (purchase) => {
  try {
    const data = await api.post('/api/purchases/verify', {
      productId: purchase.productId || PREMIUM_SKU,
      platform: Platform.OS,
      transactionId: purchase.transactionId || purchase.orderId,
      receiptData: purchase.transactionReceipt,
      purchaseToken: purchase.purchaseToken, // Android only - needed for Google Play validation
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
 */
export const restorePurchases = async () => {
  try {
    if (IAP) {
      // First check locally with the store
      const purchases = await IAP.getAvailablePurchases();
      const premiumPurchase = purchases.find(
        (p) => p.productId === PREMIUM_SKU
      );

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
 */
export const setupPurchaseListeners = (onSuccess, onError) => {
  if (!IAP) return;
  removePurchaseListeners();

  purchaseUpdateSubscription = IAP.purchaseUpdatedListener((purchase) => {
    if (purchase.transactionReceipt) {
      onSuccess(purchase);
    }
  });

  purchaseErrorSubscription = IAP.purchaseErrorListener((error) => {
    if (error.code !== 'E_USER_CANCELLED') {
      onError(error);
    }
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
