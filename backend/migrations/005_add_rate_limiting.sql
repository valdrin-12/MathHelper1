-- Add tier column to users (free or premium)
ALTER TABLE users ADD COLUMN IF NOT EXISTS tier VARCHAR(10) DEFAULT 'free';

-- Create api_requests table for tracking daily usage
CREATE TABLE IF NOT EXISTS api_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    request_date DATE NOT NULL DEFAULT CURRENT_DATE,
    endpoint VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_api_requests_user_date ON api_requests(user_id, request_date);
