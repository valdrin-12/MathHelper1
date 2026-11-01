-- 012: atomic analysis usage + analysis tickets, IAP hardening, Paddle unlinked events.
-- Runs inside the migration runner's transaction (no CONCURRENTLY).

-- ---------------------------------------------------------------------------
-- Premium daily analysis counter: one row per (user, day), incremented atomically
-- with INSERT ... ON CONFLICT DO UPDATE ... WHERE count < limit.
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS analysis_daily_usage (
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    usage_date DATE NOT NULL,
    count INT NOT NULL DEFAULT 0,
    PRIMARY KEY (user_id, usage_date)
);

-- Carry over today's usage from the old per-request log so nobody gets a fresh quota on deploy day
INSERT INTO analysis_daily_usage (user_id, usage_date, count)
SELECT user_id, request_date, COUNT(*)::int
FROM api_requests
WHERE request_date = CURRENT_DATE
GROUP BY user_id, request_date
ON CONFLICT (user_id, usage_date) DO NOTHING;

-- ---------------------------------------------------------------------------
-- Analysis tickets: /api/analyze/record consumes one credit and issues a ticket
-- that authorizes a small number of solver calls (/wolfram, /image, /text).
-- credit_type/usage_date record which counter to refund.
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS analysis_tickets (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    credit_type VARCHAR(10) NOT NULL,          -- 'free' | 'premium'
    usage_date DATE,                           -- premium: the analysis_daily_usage day that was charged
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT NOW() + INTERVAL '10 minutes',
    uses_left INT NOT NULL DEFAULT 2,
    succeeded BOOLEAN NOT NULL DEFAULT FALSE,
    refunded BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_analysis_tickets_user ON analysis_tickets(user_id, created_at DESC);

-- ---------------------------------------------------------------------------
-- IAP purchases: store-derived expiry + Android purchase token, unique transaction ids.
-- ---------------------------------------------------------------------------
ALTER TABLE purchases ADD COLUMN IF NOT EXISTS purchase_token TEXT;
ALTER TABLE purchases ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ;
ALTER TABLE purchases ADD COLUMN IF NOT EXISTS environment VARCHAR(20);

-- Dedupe existing rows before adding the unique index: keep the earliest row per transaction_id,
-- keep the later ones for audit but move their id out of the way and mark them.
WITH ranked AS (
    SELECT id, ROW_NUMBER() OVER (PARTITION BY transaction_id ORDER BY purchased_at, id) AS rn
    FROM purchases
    WHERE transaction_id IS NOT NULL
)
UPDATE purchases p
SET transaction_id = p.transaction_id || '#dup-' || p.id::text,
    status = 'duplicate'
FROM ranked r
WHERE p.id = r.id AND r.rn > 1;

CREATE UNIQUE INDEX IF NOT EXISTS idx_purchases_transaction_id
    ON purchases(transaction_id) WHERE transaction_id IS NOT NULL;

-- ---------------------------------------------------------------------------
-- Paddle subscription events we could not attach to a user (acknowledged with 200,
-- kept here for manual reconciliation).
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS paddle_unlinked_events (
    id BIGSERIAL PRIMARY KEY,
    event_id TEXT UNIQUE,
    event_type TEXT NOT NULL,
    paddle_subscription_id TEXT,
    paddle_customer_id TEXT,
    custom_user_id TEXT,
    payload JSONB,
    occurred_at TIMESTAMPTZ,
    resolved_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_paddle_unlinked_unresolved
    ON paddle_unlinked_events(created_at) WHERE resolved_at IS NULL;
