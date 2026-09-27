// Native stub — Paddle.js is web only (see paddleService.web.js).
// TODO: decide how native (iOS/Android) billing should work; native keeps using purchaseService (store IAP) for now.
export const isPaddleAvailable = () => false;

const notAvailable = () => {
  throw new Error('Paddle checkout is only available on web');
};

export const getPaddle = notAvailable;
export const fetchPrices = notAvailable;
export const openCheckout = notAvailable;

export default { isPaddleAvailable, getPaddle, fetchPrices, openCheckout };
