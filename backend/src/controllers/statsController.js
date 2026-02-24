const statsModel = require('../models/statsModel');
const pool = require('../config/database');

const DAILY_LIMITS = { free: 4, premium: 10 };

async function getStats(req, res) {
  try {
    const stats = await statsModel.getStats(req.userId);
    res.json({ success: true, stats });
  } catch (err) {
    console.error('GetStats error:', err);
    res.status(500).json({ success: false, error: 'Failed to get stats' });
  }
}

async function problemSolved(req, res) {
  try {
    await statsModel.recordProblemSolved(req.userId);
    res.json({ success: true });
  } catch (err) {
    console.error('ProblemSolved error:', err);
    res.status(500).json({ success: false, error: 'Failed to record problem' });
  }
}

async function courseCompleted(req, res) {
  try {
    const { courseId, title } = req.body;
    if (!courseId || !title) {
      return res.status(400).json({ success: false, error: 'courseId and title are required' });
    }
    await statsModel.recordCourseCompleted(req.userId, courseId, title);
    res.json({ success: true });
  } catch (err) {
    console.error('CourseCompleted error:', err);
    res.status(500).json({ success: false, error: 'Failed to record course' });
  }
}

async function quizCompleted(req, res) {
  try {
    const { quizId, title, score, total } = req.body;
    if (!quizId || !title || score === undefined || !total) {
      return res.status(400).json({ success: false, error: 'quizId, title, score, and total are required' });
    }
    await statsModel.recordQuizCompleted(req.userId, quizId, title, score, total);
    res.json({ success: true });
  } catch (err) {
    console.error('QuizCompleted error:', err);
    res.status(500).json({ success: false, error: 'Failed to record quiz' });
  }
}

async function getUsage(req, res) {
  try {
    const { rows: userRows } = await pool.query(
      'SELECT tier FROM users WHERE id = $1',
      [req.userId]
    );
    const tier = userRows[0]?.tier || 'free';
    const dailyLimit = DAILY_LIMITS[tier] || DAILY_LIMITS.free;

    const { rows: countRows } = await pool.query(
      'SELECT COUNT(*)::int as count FROM api_requests WHERE user_id = $1 AND request_date = CURRENT_DATE',
      [req.userId]
    );
    const used = countRows[0].count;

    res.json({
      success: true,
      tier,
      dailyLimit,
      used,
      remaining: Math.max(0, dailyLimit - used),
    });
  } catch (err) {
    console.error('GetUsage error:', err);
    res.status(500).json({ success: false, error: 'Failed to get usage' });
  }
}

module.exports = { getStats, getUsage, problemSolved, courseCompleted, quizCompleted };
