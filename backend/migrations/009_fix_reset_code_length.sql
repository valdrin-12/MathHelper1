-- Increase password reset code column from 6 to 8 characters
-- Required because reset codes are now 8 digits (security improvement)
ALTER TABLE password_reset_tokens ALTER COLUMN code TYPE VARCHAR(8);
