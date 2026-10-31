CREATE TABLE IF NOT EXISTS saved_items (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  image_data    TEXT,
  problem_text  TEXT,
  answer        TEXT NOT NULL,
  steps         JSONB DEFAULT '[]',
  explanation   TEXT,
  saved_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_saved_items_user ON saved_items(user_id, saved_at DESC);
