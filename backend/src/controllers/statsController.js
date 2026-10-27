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

// Limits for importing a guest's progress (generous for real use, small enough to stop abuse)
const MAX_IMPORT_DAYS = 400;
const MAX_DAILY_COUNT = 500;
const MAX_IMPORT_COURSES = 200;
const MAX_IMPORT_QUIZZES = 500; // keeps the body under the 100 kB JSON limit
const DATE_KEY_RE = /^\d{4}-\d{2}-\d{2}$/;

const count = (v) => (Number.isInteger(v) && v >= 0 && v <= MAX_DAILY_COUNT ? v : null);
/** An ISO time not in the future; anything else becomes "now". */
const pastTime = (v) => {
  const t = typeof v === 'string' ? Date.parse(v) : NaN;
  return Number.isNaN(t) || t > Date.now() + 60_000 ? new Date() : new Date(t);
};

/** POST /api/stats/import-guest — progress made without an account, added once after sign-in. */
async function importGuest(req, res) {
  try {
    const body = req.body || {};
    const latest = statsModel.resolveDayKey(body.localDate);
    const dailyActivity = {};
    const days = Object.entries(body.dailyActivity && typeof body.dailyActivity === 'object' ? body.dailyActivity : {});
    if (days.length > MAX_IMPORT_DAYS) return res.status(400).json({ success: false, error: 'Too many days' });
    for (const [day, a] of days) {
      if (!DATE_KEY_RE.test(day) || Number.isNaN(Date.parse(`${day}T00:00:00Z`)) || day > latest) {
        return res.status(400).json({ success: false, error: `Invalid day ${String(day).slice(0, 20)}` });
      }
      const problems = count(a?.problems ?? 0);
      const courses = count(a?.courses ?? 0);
      const quizzes = count(a?.quizzes ?? 0);
      if (problems === null || courses === null || quizzes === null) {
        return res.status(400).json({ success: false, error: `Invalid counts for ${day}` });
      }
      if (problems + courses + quizzes > 0) dailyActivity[day] = { problems, courses, quizzes };
    }
    const rawCourses = Array.isArray(body.completedCourses) ? body.completedCourses : [];
    const rawQuizzes = Array.isArray(body.completedQuizzes) ? body.completedQuizzes : [];
    if (rawCourses.length > MAX_IMPORT_COURSES || rawQuizzes.length > MAX_IMPORT_QUIZZES) {
      return res.status(400).json({ success: false, error: 'Too many items' });
    }
    const completedCourses = [];
    for (const c of rawCourses) {
      const courseId = cleanString(c?.courseId, MAX_ID_LENGTH);
      const title = cleanString(c?.title, MAX_TITLE_LENGTH);
      if (!courseId || !title) return res.status(400).json({ success: false, error: 'Invalid course' });
      completedCourses.push({ courseId, title, completedAt: pastTime(c.completedAt) });
    }
    const completedQuizzes = [];
    for (const q of rawQuizzes) {
      const quizId = cleanString(q?.quizId, MAX_ID_LENGTH);
      const title = cleanString(q?.title, MAX_TITLE_LENGTH);
      const { score, total } = q || {};
      if (!quizId || !title || !Number.isInteger(total) || total < 1 || total > MAX_QUIZ_TOTAL
        || !Number.isInteger(score) || score < 0 || score > total) {
        return res.status(400).json({ success: false, error: 'Invalid quiz' });
      }
      completedQuizzes.push({ quizId, title, score, total, completedAt: pastTime(q.completedAt) });
    }
    await statsModel.importGuestStats(req.userId, { dailyActivity, completedCourses, completedQuizzes });
    res.json({ success: true, imported: { days: Object.keys(dailyActivity).length, courses: completedCourses.length, quizzes: completedQuizzes.length } });
  } catch (err) {
    console.error('ImportGuest error:', err);
    res.status(500).json({ success: false, error: 'Failed to import progress' });
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

module.exports = { getStats, getUsage, problemSolved, courseCompleted, quizCompleted, importGuest };
