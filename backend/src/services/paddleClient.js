const { Paddle, Environment } = require('@paddle/paddle-node-sdk');

let paddle = null;

/**
 * Server-side Paddle API client. Fails loudly if env is missing so we never
 * call the wrong Paddle account. PADDLE_API_KEY must never reach client code.
 */
function getPaddleClient() {
  if (!paddle) {
    const env = process.env.PADDLE_ENV;
    const apiKey = process.env.PADDLE_API_KEY;
    if (env !== 'sandbox' && env !== 'production') {
      throw new Error(`PADDLE_ENV must be "sandbox" or "production" (got "${env}")`);
    }
    if (!apiKey) {
      throw new Error('PADDLE_API_KEY is not set');
    }
    paddle = new Paddle(apiKey, {
      environment: env === 'production' ? Environment.production : Environment.sandbox,
    });
  }
  return paddle;
}

module.exports = { getPaddleClient };
