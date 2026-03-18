-- ─────────────────────────────────────────────────────────────────────────────
-- Migration 009: Enable Row Level Security on all tables
--
-- Why: Supabase Security Advisor flags tables without RLS as vulnerabilities.
-- Without RLS, anyone with the anon/public key can hit the Supabase REST API
-- and read or write any table directly, bypassing the Express backend entirely.
--
-- Safe to run: The Express backend connects via DATABASE_URL (service_role /
-- postgres superuser). That role ALWAYS bypasses RLS — no backend changes needed.
-- RLS only blocks direct Supabase SDK / REST API access.
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable RLS on every table
ALTER TABLE users              ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_items        ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_courses  ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_quizzes  ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_activity     ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks       ENABLE ROW LEVEL SECURITY;
ALTER TABLE refresh_tokens     ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_requests       ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases          ENABLE ROW LEVEL SECURITY;

-- No policies = deny-all by default for anon/authenticated roles.
-- The backend (postgres/service_role) is unaffected.
--
-- If you ever need Supabase Auth (e.g. Supabase JS client in future),
-- add policies like:
--   CREATE POLICY "users_own_data" ON saved_items
--     USING (auth.uid() = user_id);
