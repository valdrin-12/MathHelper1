-- New subscription model:
-- Free: 2 lifetime analyses (never resets), 2 courses, 3 quizzes
-- Premium: 10 analyses/day, all courses/quizzes, expires after 1 month

-- Add lifetime free analyses counter
ALTER TABLE users ADD COLUMN IF NOT EXISTS free_analyses_used INT DEFAULT 0;

-- Add premium expiry date (NULL = no premium, or expired)
ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_expires_at TIMESTAMPTZ;

-- Migrate existing premium users: give them 30 days from now
UPDATE users
SET premium_expires_at = NOW() + INTERVAL '30 days'
WHERE tier = 'premium' AND premium_expires_at IS NULL;
