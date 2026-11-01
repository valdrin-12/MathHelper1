-- Track in-app purchases
CREATE TABLE IF NOT EXISTS purchases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id VARCHAR(100) NOT NULL,
    platform VARCHAR(10) NOT NULL,
    transaction_id VARCHAR(255),
    receipt_data TEXT,
    status VARCHAR(20) DEFAULT 'completed',
    purchased_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_purchases_user ON purchases(user_id);
