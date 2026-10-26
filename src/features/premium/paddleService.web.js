import { initializePaddle } from '@paddle/paddle-js';

// Web only — Metro picks this file for Platform.OS === 'web'; native builds use paddleService.js.
// EXPO_PUBLIC_* values are inlined at build time, so they must be referenced literally.
const PADDLE_ENV = process.env.EXPO_PUBLIC_PADDLE_ENV;
const PADDLE_CLIENT_TOKEN = process.env.EXPO_PUBLIC_PADDLE_CLIENT_TOKEN;

// Paddle checkout has no Albanian translation, so Albanian falls back to English
const CHECKOUT_LOCALES = { al: 'en', en: 'en', de: 'de' };

let paddlePromise = null;

export const isPaddleAvailable = () => true;

/**
 * Initialize Paddle.js once. Fails loudly if env is missing so we never
 * run against the wrong Paddle account.
 */
export const getPaddle = () => {
  if (!paddlePromise) {
    if (PADDLE_ENV !== 'sandbox' && PADDLE_ENV !== 'production') {
      throw new Error(`EXPO_PUBLIC_PADDLE_ENV must be "sandbox" or "production" (got "${PADDLE_ENV}")`);
    }
    if (!PADDLE_CLIENT_TOKEN) {
      throw new Error('EXPO_PUBLIC_PADDLE_CLIENT_TOKEN is not set');
    }
    if (PADDLE_ENV === 'sandbox' && !PADDLE_CLIENT_TOKEN.startsWith('test_')) {
      throw new Error('Sandbox requires a test_ client-side token');
    }

    paddlePromise = initializePaddle({
      environment: PADDLE_ENV,
      token: PADDLE_CLIENT_TOKEN,
    }).then((paddle) => {
      if (!paddle) throw new Error('Paddle.js failed to initialize');
      return paddle;
    });
    // Allow a retry on the next call if loading failed (e.g. offline)
    paddlePromise.catch(() => { paddlePromise = null; });
  }
  return paddlePromise;
};

/**
 * Localized prices for the given price IDs. No country code is passed:
 * Paddle detects the visitor's location from their IP.
 * Returns { [priceId]: { total, trialDays } } using Paddle's formatted strings as-is.
 */
export const fetchPrices = async (priceIds) => {
  const paddle = await getPaddle();
  const result = await paddle.PricePreview({
    items: priceIds.map((priceId) => ({ priceId, quantity: 1 })),
  });

  const prices = {};
  result.data.details.lineItems.forEach((item) => {
    const trial = item.price.trialPeriod;
    prices[item.price.id] = {
      total: item.formattedTotals.total,
      trialDays: trial && trial.interval === 'day' ? trial.frequency : null,
    };
  });
  return prices;
};

/**
 * Open the one-page overlay checkout for a single price.
 */
export const openCheckout = async ({ priceId, email, userId, language }) => {
  const paddle = await getPaddle();
  paddle.Checkout.open({
    items: [{ priceId, quantity: 1 }],
    ...(email ? { customer: { email } } : {}),
    customData: { user_id: userId },
    settings: {
      displayMode: 'overlay',
      variant: 'one-page',
      locale: CHECKOUT_LOCALES[language] || 'en',
      successUrl: `${window.location.origin}/premium/success`,
    },
  });
};

export default { isPaddleAvailable, getPaddle, fetchPrices, openCheckout };
