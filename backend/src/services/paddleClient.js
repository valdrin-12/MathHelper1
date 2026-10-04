const { Paddle, Environment } = require('@paddle/paddle-node-sdk');

let paddle = null;

const KEY_PREFIX = { sandbox: 'pdl_sdbx_apikey_', production: 'pdl_live_apikey_' };

/** Clean up common copy/paste mistakes from hosting dashboards: whitespace, quotes, a "Bearer " prefix. */
function normalizeKey(raw) {
  return (raw || '').trim().replace(/^["']|["']$/g, '').replace(/^Bearer\s+/i, '').trim();
}

/**
 * Server-side Paddle API client. Fails loudly if env is missing or the key doesn't match the
 * environment, so we never call the wrong Paddle account. PADDLE_API_KEY must never reach client code.
 * Error messages only mention the expected prefix, never the key itself.
 */
function getPaddleClient() {
  if (!paddle) {
    const env = (process.env.PADDLE_ENV || '').trim();
    const apiKey = normalizeKey(process.env.PADDLE_API_KEY);
    if (env !== 'sandbox' && env !== 'production') {
      throw new Error(`PADDLE_ENV must be "sandbox" or "production" (got "${env}")`);
    }
    if (!apiKey) {
      throw new Error('PADDLE_API_KEY is not set');
    }
    if (!apiKey.startsWith(KEY_PREFIX[env])) {
      const kind = apiKey.startsWith('test_') || apiKey.startsWith('live_') ? 'a client-side token'
        : apiKey.startsWith('pdl_ntfset_') ? 'a webhook secret'
          : apiKey.startsWith(KEY_PREFIX[env === 'sandbox' ? 'production' : 'sandbox']) ? 'an API key for the other environment'
            : 'not a Paddle API key';
      throw new Error(`PADDLE_API_KEY must start with ${KEY_PREFIX[env]} for PADDLE_ENV=${env} (the value looks like ${kind})`);
    }
    paddle = new Paddle(apiKey, {
      environment: env === 'production' ? Environment.production : Environment.sandbox,
    });
  }
  return paddle;
}

module.exports = { getPaddleClient };
