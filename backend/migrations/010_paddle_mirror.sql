-- Mirror of Paddle state, written only from verified webhooks.
-- Rows are keyed on Paddle IDs and upserted; last_event_at guards against out-of-order delivery.
-- No FK between the paddle_* tables: customer.* and subscription.* events can arrive in any order.

CREATE TABLE IF NOT EXISTS paddle_customers (
    paddle_customer_id TEXT PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    email TEXT,
    last_event_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_paddle_customers_user ON paddle_customers(user_id);

CREATE TABLE IF NOT EXISTS paddle_subscriptions (
    paddle_subscription_id TEXT PRIMARY KEY,
    paddle_customer_id TEXT NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    status TEXT NOT NULL,
    price_id TEXT,
    product_id TEXT,
    current_period_ends_at TIMESTAMPTZ,
    scheduled_change_action TEXT,
    scheduled_change_at TIMESTAMPTZ,
    last_event_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_paddle_subscriptions_user ON paddle_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_paddle_subscriptions_customer ON paddle_subscriptions(paddle_customer_id);

CREATE TABLE IF NOT EXISTS paddle_transactions (
    paddle_transaction_id TEXT PRIMARY KEY,
    paddle_subscription_id TEXT,
    paddle_customer_id TEXT,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    status TEXT NOT NULL,
    currency_code TEXT,
    -- lowest denomination as Paddle sends it (e.g. "399" = EUR 3.99)
    total TEXT,
    billed_at TIMESTAMPTZ,
    last_event_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_paddle_transactions_user ON paddle_transactions(user_id);
