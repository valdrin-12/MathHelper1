-- Paddle web subscriptions (replaces Paysera one-off payments)
-- premium_expires_at is kept in sync with the subscription's current billing period via webhooks.

ALTER TABLE users ADD COLUMN IF NOT EXISTS paddle_customer_id VARCHAR(50);
ALTER TABLE users ADD COLUMN IF NOT EXISTS paddle_subscription_id VARCHAR(50);
ALTER TABLE users ADD COLUMN IF NOT EXISTS paddle_subscription_status VARCHAR(20);
-- occurred_at of the last applied subscription event; used to ignore out-of-order webhooks
ALTER TABLE users ADD COLUMN IF NOT EXISTS paddle_event_at TIMESTAMPTZ;

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_paddle_subscription ON users(paddle_subscription_id);
