/**
 * seedDemoAccount.js
 *
 * Creates a demo/reviewer account in the database for App Store & Google Play reviewers.
 * Run once on production:
 *   DEMO_ACCOUNT_EMAIL=... DEMO_ACCOUNT_PASSWORD=... node backend/scripts/seedDemoAccount.js
 *
 * Credentials come from the environment (or backend/.env) and are never hardcoded or printed.
 * Put the same values in App Store Connect > Notes for Reviewer.
 */

require('dotenv').config({ path: require('path').join(__dirname, '../.env') });

const pool = require('../src/config/database');
const bcrypt = require('bcrypt');

const DEMO_EMAIL = (process.env.DEMO_ACCOUNT_EMAIL || '').trim().toLowerCase();
const DEMO_PASSWORD = process.env.DEMO_ACCOUNT_PASSWORD || '';
const DEMO_NAME = 'App Reviewer';

if (!DEMO_EMAIL || !DEMO_PASSWORD) {
  console.error('❌ DEMO_ACCOUNT_EMAIL and DEMO_ACCOUNT_PASSWORD must be set (env or backend/.env).');
  process.exit(1);
}
if (DEMO_PASSWORD.length < 8) {
  console.error('❌ DEMO_ACCOUNT_PASSWORD must be at least 8 characters.');
  process.exit(1);
}

async function seedDemoAccount() {
  try {
    // Check if already exists
    const existing = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [DEMO_EMAIL]
    );

    if (existing.rows.length > 0) {
      console.log('✅ Demo account already exists:', DEMO_EMAIL);
      // Reset password and free_analyses_used just in case
      const hash = await bcrypt.hash(DEMO_PASSWORD, 12);
      await pool.query(
        'UPDATE users SET password_hash = $1, free_analyses_used = 0 WHERE email = $2',
        [hash, DEMO_EMAIL]
      );
      console.log('✅ Password and usage reset.');
      await pool.end();
      return;
    }

    const hash = await bcrypt.hash(DEMO_PASSWORD, 12);
    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash, language, tier)
       VALUES ($1, $2, $3, 'en', 'free')
       RETURNING id, email`,
      [DEMO_NAME, DEMO_EMAIL, hash]
    );

    console.log('✅ Demo account created:');
    console.log('   Email   :', DEMO_EMAIL);
    console.log('   User ID :', result.rows[0].id);
    console.log('');
    console.log('📋 Put DEMO_ACCOUNT_EMAIL / DEMO_ACCOUNT_PASSWORD in App Store Connect > Notes for Reviewer.');

    await pool.end();
  } catch (err) {
    console.error('❌ Failed to seed demo account:', err.message);
    process.exit(1);
  }
}

seedDemoAccount();
