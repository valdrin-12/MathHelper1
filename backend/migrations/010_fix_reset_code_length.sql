-- Migration 010: Increase password_reset_tokens.code column from VARCHAR(6) to VARCHAR(8)
--
-- Why: Security fix changed reset codes from 6-digit to 8-digit (100M combinations
-- instead of 1M) to prevent brute-force attacks. The column must match or inserts fail.

ALTER TABLE password_reset_tokens
  ALTER COLUMN code TYPE VARCHAR(8);
