const pool = require('../config/database');

const LIST_COLUMNS = `id, problem_text AS "problemText", answer, steps, explanation,
            (image_data IS NOT NULL AND image_data <> '') AS "hasImage",
            CASE WHEN jsonb_typeof(steps) = 'array' THEN jsonb_array_length(steps) ELSE 0 END AS "stepsCount",
            saved_at AS "savedAt"`;

// List view: never ships the (large) base64 image; fetch it per item via findById
async function getByUserId(userId) {
  const { rows } = await pool.query(
    `SELECT ${LIST_COLUMNS}
     FROM saved_items WHERE user_id = $1 ORDER BY saved_at DESC`,
    [userId]
  );
  return rows;
}

/**
 * Insert unless the user already has maxItems items.
 * Returns the new item (list shape), or null when the cap was reached.
 */
async function create(userId, { imageData, problemText, answer, steps, explanation }, maxItems) {
  const { rows } = await pool.query(
    `INSERT INTO saved_items (user_id, image_data, problem_text, answer, steps, explanation)
     SELECT $1, $2, $3, $4, $5, $6
     WHERE (SELECT COUNT(*) FROM saved_items WHERE user_id = $1) < $7
     RETURNING ${LIST_COLUMNS}`,
    [userId, imageData || null, problemText || null, answer, JSON.stringify(steps || []), explanation || null, maxItems]
  );
  return rows[0] || null;
}

async function deleteById(id, userId) {
  const { rowCount } = await pool.query(
    'DELETE FROM saved_items WHERE id = $1 AND user_id = $2',
    [id, userId]
  );
  return rowCount > 0;
}

// Full item including imageData, scoped to the owner
async function findById(id, userId) {
  const { rows } = await pool.query(
    `SELECT id, image_data AS "imageData", problem_text AS "problemText",
            answer, steps, explanation,
            (image_data IS NOT NULL AND image_data <> '') AS "hasImage",
            CASE WHEN jsonb_typeof(steps) = 'array' THEN jsonb_array_length(steps) ELSE 0 END AS "stepsCount",
            saved_at AS "savedAt"
     FROM saved_items WHERE id = $1 AND user_id = $2`,
    [id, userId]
  );
  return rows[0] || null;
}

module.exports = { getByUserId, create, deleteById, findById };
