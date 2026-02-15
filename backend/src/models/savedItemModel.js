const pool = require('../config/database');

async function getByUserId(userId) {
  const { rows } = await pool.query(
    `SELECT id, image_data AS "imageData", problem_text AS "problemText",
            answer, steps, explanation, saved_at AS "savedAt"
     FROM saved_items WHERE user_id = $1 ORDER BY saved_at DESC`,
    [userId]
  );
  return rows;
}

async function create(userId, { imageData, problemText, answer, steps, explanation }) {
  const { rows } = await pool.query(
    `INSERT INTO saved_items (user_id, image_data, problem_text, answer, steps, explanation)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, image_data AS "imageData", problem_text AS "problemText",
              answer, steps, explanation, saved_at AS "savedAt"`,
    [userId, imageData || null, problemText || null, answer, JSON.stringify(steps || []), explanation || null]
  );
  return rows[0];
}

async function deleteById(id, userId) {
  const { rowCount } = await pool.query(
    'DELETE FROM saved_items WHERE id = $1 AND user_id = $2',
    [id, userId]
  );
  return rowCount > 0;
}

async function findById(id, userId) {
  const { rows } = await pool.query(
    'SELECT * FROM saved_items WHERE id = $1 AND user_id = $2',
    [id, userId]
  );
  return rows[0] || null;
}

module.exports = { getByUserId, create, deleteById, findById };
