const { Pool } = require('pg');

const poolConfig = {
  connectionString: process.env.DATABASE_URL,
};

// Supabase and other cloud providers require SSL
if (process.env.NODE_ENV === 'production') {
  poolConfig.ssl = { rejectUnauthorized: false };
}

const pool = new Pool(poolConfig);

pool.on('error', (err) => {
  console.error('Unexpected database pool error:', err);
});

module.exports = pool;
