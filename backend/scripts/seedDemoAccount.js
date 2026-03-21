/**
 * seedDemoAccount.js
 *
 * Creates a demo/reviewer account in the database for App Store & Google Play reviewers.
 * Run once on production: node backend/scripts/seedDemoAccount.js
 *
 * Demo credentials (put these in App Store Connect > Notes for Reviewer):
 *   Email:    reviewer@mathhelper.online
 *   Password: MathHelper2024!
 */

require('dotenv').config({ path: require('path').join(__dirname, '../.env') });

const pool = require('../src/config/database');
const bcrypt = require('bcrypt');

const DEMO_EMAIL = 'reviewer@mathhelper.online';
const DEMO_PASSWORD = 'MathHelper2024!';
const DEMO_NAME = 'App Reviewer';

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
    console.log('   Password:', DEMO_PASSWORD);
    console.log('   User ID :', result.rows[0].id);
    console.log('');
    console.log('📋 Paste this in App Store Connect > Notes for Reviewer:');
    console.log('   Test Account Email:    ' + DEMO_EMAIL);
    console.log('   Test Account Password: ' + DEMO_PASSWORD);

    await pool.end();
  } catch (err) {
    console.error('❌ Failed to seed demo account:', err.message);
    process.exit(1);
  }
}

seedDemoAccount();
