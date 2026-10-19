const statsModel = require('../models/statsModel');
const { getUsageForUser } = require('../middleware/rateLimit');

const MAX_ID_LENGTH = 100;
const MAX_TITLE_LENGTH = 100;
const MAX_QUIZ_TOTAL = 100;

/** ids may be strings or numbers in the app's data; normalize to a non-empty string ≤ max chars */
function cleanString(value, max) {
  if (typeof value === 'number' && Number.isFinite(value)) value = String(value);
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed && trimmed.length <= max ? trimmed : null;
}

async function getStats(req, res) {
  try {
    const todayKey = statsModel.resolveDayKey(req.query.today);
    const stats = await statsModel.getStats(req.userId, todayKey);
    res.json({ success: true, stats });
  } catch (err) {
    console.error('GetStats error:', err);
    res.status(500).json({ success: false, error: 'Failed to get stats' });
  }
}

async function problemSolved(req, res) {
  try {
    const dayKey = statsModel.resolveDayKey(req.body?.localDate);
    await statsModel.recordProblemSolved(req.userId, dayKey);
    res.json({ success: true });
  } catch (err) {
    console.error('ProblemSolved error:', err);
    res.status(500).json({ success: false, error: 'Failed to record problem' });
  }
}

async function courseCompleted(req, res) {
  try {
    const courseId = cleanString(req.body.courseId, MAX_ID_LENGTH);
    const title = cleanString(req.body.title, MAX_TITLE_LENGTH);
    if (!courseId || !title) {
      return res.status(400).json({
        success: false,
        error: `courseId and title are required (max ${MAX_ID_LENGTH} characters)`,
      });
    }
    const dayKey = statsModel.resolveDayKey(req.body.localDate);
    const { alreadyCompleted } = await statsModel.recordCourseCompleted(req.userId, courseId, title, dayKey);
    res.json({ success: true, alreadyCompleted });
  } catch (err) {
    console.error('CourseCompleted error:', err);
    res.status(500).json({ success: false, error: 'Failed to record course' });
  }
}

async function quizCompleted(req, res) {
  try {
    const quizId = cleanString(req.body.quizId, MAX_ID_LENGTH);
    const title = cleanString(req.body.title, MAX_TITLE_LENGTH);
    const { score, total } = req.body;
    if (!quizId || !title || score === undefined || !total) {
      return res.status(400).json({ success: false, error: 'quizId, title, score, and total are required' });
    }
    if (!Number.isInteger(total) || total < 1 || total > MAX_QUIZ_TOTAL) {
      return res.status(400).json({ success: false, error: `total must be an integer between 1 and ${MAX_QUIZ_TOTAL}` });
    }
    if (!Number.isInteger(score) || score < 0 || score > total) {
      return res.status(400).json({ success: false, error: 'score must be an integer between 0 and total' });
    }
    const dayKey = statsModel.resolveDayKey(req.body.localDate);
    await statsModel.recordQuizCompleted(req.userId, quizId, title, score, total, dayKey);
    res.json({ success: true });
  } catch (err) {
    console.error('QuizCompleted error:', err);
    res.status(500).json({ success: false, error: 'Failed to record quiz' });
  }
}

// Same limits and premium rule (incl. premium_expires_at) as the analyze rate limiter
async function getUsage(req, res) {
  try {
    const usage = await getUsageForUser(req.userId);
    if (!usage) {
      return res.status(401).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, ...usage });
  } catch (err) {
    console.error('GetUsage error:', err);
    res.status(500).json({ success: false, error: 'Failed to get usage' });
  }
}

module.exports = { getStats, getUsage, problemSolved, courseCompleted, quizCompleted };
