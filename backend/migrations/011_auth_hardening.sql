-- Auth hardening: password reset codes are stored hashed (SHA-256 hex) and lock after 5 wrong attempts.
-- Outstanding plaintext codes are short-lived (15 min); drop them rather than migrating.
DELETE FROM password_reset_tokens;

ALTER TABLE password_reset_tokens ADD COLUMN IF NOT EXISTS code_hash CHAR(64);
ALTER TABLE password_reset_tokens ADD COLUMN IF NOT EXISTS attempts INT NOT NULL DEFAULT 0;
ALTER TABLE password_reset_tokens ALTER COLUMN code DROP NOT NULL;
