const pool = require('../config/database');

const DAY_MS = 1000 * 60 * 60 * 24;
const DATE_KEY_RE = /^\d{4}-\d{2}-\d{2}$/;

function toKey(date) {
  return date.toISOString().split('T')[0];
}

function getUtcTodayKey() {
  return toKey(new Date());
}

function shiftKey(key, days) {
  return toKey(new Date(Date.parse(`${key}T00:00:00Z`) + days * DAY_MS));
}

/**
 * The client's local calendar day (YYYY-MM-DD) if it is a real date within ±1 day of the
 * server's UTC date; otherwise the UTC date. Used as the daily_activity key and for streaks.
 */
function resolveDayKey(localDate) {
  const today = getUtcTodayKey();
  if (typeof localDate !== 'string' || !DATE_KEY_RE.test(localDate)) return today;
  const parsed = Date.parse(`${localDate}T00:00:00Z`);
  if (Number.isNaN(parsed) || toKey(new Date(parsed)) !== localDate) return today;
  const diffDays = Math.round((parsed - Date.parse(`${today}T00:00:00Z`)) / DAY_MS);
  return Math.abs(diffDays) <= 1 ? localDate : today;
}

// Achievement ids the app knows about, with the rule that earns each one
const ACHIEVEMENT_RULES = [
  { id: 'first_problem', metric: 'problems', threshold: 1 },
  { id: 'ten_problems', metric: 'problems', threshold: 10 },
  { id: 'fifty_problems', metric: 'problems', threshold: 50 },
  { id: 'first_course', metric: 'courses', threshold: 1 },
  { id: 'five_courses', metric: 'courses', threshold: 5 },
  { id: 'first_quiz', metric: 'quizzes', threshold: 1 },
  { id: 'five_quizzes', metric: 'quizzes', threshold: 5 },
  { id: 'streak_3', metric: 'longestStreak', threshold: 3 },
  { id: 'streak_7', metric: 'longestStreak', threshold: 7 },
];

function computeAchievements(totals) {
  return {
    earned: ACHIEVEMENT_RULES.filter((r) => totals[r.metric] >= r.threshold).map((r) => r.id),
    totals,
  };
}

async function getStats(userId, todayKey = getUtcTodayKey()) {
  const [coursesRes, quizzesRes, activityRes, streakRes] = await Promise.all([
    pool.query('SELECT course_id as "courseId", title, completed_at as "completedAt" FROM completed_courses WHERE user_id = $1 ORDER BY completed_at DESC', [userId]),
    pool.query('SELECT quiz_id as "quizId", title, score, total, percentage, completed_at as "completedAt" FROM completed_quizzes WHERE user_id = $1 ORDER BY completed_at DESC', [userId]),
    pool.query('SELECT activity_date::text AS activity_date, problems, courses, quizzes FROM daily_activity WHERE user_id = $1', [userId]),
    pool.query('SELECT current_streak, longest_streak, last_active_date::text AS last_active_date FROM user_streaks WHERE user_id = $1', [userId]),
  ]);

  // Convert daily_activity rows to object keyed by date
  const dailyActivity = {};
  for (const row of activityRes.rows) {
    // DATE read as text: no timezone conversion of the calendar day
    const dateKey = row.activity_date;
    dailyActivity[dateKey] = {
      problems: row.problems,
      courses: row.courses,
      quizzes: row.quizzes,
    };
  }

  const streak = streakRes.rows[0]
    ? {
        current: streakRes.rows[0].current_streak,
        longest: streakRes.rows[0].longest_streak,
        lastActiveDate: streakRes.rows[0].last_active_date || null,
      }
    : { current: 0, longest: 0, lastActiveDate: null };

  // A streak is broken once a whole day passed without activity (report only; history is untouched)
  if (streak.lastActiveDate && streak.lastActiveDate < shiftKey(todayKey, -1)) {
    streak.current = 0;
  }

  const totals = {
    problems: Object.values(dailyActivity).reduce((sum, d) => sum + (d.problems || 0), 0),
    courses: coursesRes.rows.length,
    quizzes: quizzesRes.rows.length,
    longestStreak: streak.longest || 0,
  };

  return {
    completedCourses: coursesRes.rows,
    completedQuizzes: quizzesRes.rows,
    dailyActivity,
    streak,
    achievements: computeAchievements(totals),
  };
}

async function updateDailyActivity(userId, field, today) {
  await pool.query(
    `INSERT INTO daily_activity (user_id, activity_date, ${field})
     VALUES ($1, $2, 1)
     ON CONFLICT (user_id, activity_date)
     DO UPDATE SET ${field} = daily_activity.${field} + 1`,
    [userId, today]
  );
}

async function recalcStreak(userId, today) {
  // Get or create streak record
  const { rows } = await pool.query(
    'SELECT current_streak, longest_streak, last_active_date::text AS last_active_date FROM user_streaks WHERE user_id = $1',
    [userId]
  );

  if (rows.length === 0) {
    // First activity ever
    await pool.query(
      'INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_active_date) VALUES ($1, 1, 1, $2)',
      [userId, today]
    );
    return;
  }

  const streak = rows[0];
  const lastActive = streak.last_active_date || null;

  if (!lastActive) {
    await pool.query(
      'UPDATE user_streaks SET current_streak = 1, longest_streak = 1, last_active_date = $2 WHERE user_id = $1',
      [userId, today]
    );
    return;
  }

  if (lastActive === today) return; // Already active today

  const lastDate = new Date(lastActive);
  const todayDate = new Date(today);
  const diffDays = Math.round((todayDate - lastDate) / DAY_MS);

  // A day key earlier than the last active day (client clocks a day apart) never breaks the streak
  if (diffDays <= 0) return;

  let newCurrent;
  if (diffDays === 1) {
    newCurrent = streak.current_streak + 1;
  } else {
    newCurrent = 1;
  }

  const newLongest = Math.max(newCurrent, streak.longest_streak);

  await pool.query(
    'UPDATE user_streaks SET current_streak = $2, longest_streak = $3, last_active_date = $4 WHERE user_id = $1',
    [userId, newCurrent, newLongest, today]
  );
}

async function recordProblemSolved(userId, dayKey = getUtcTodayKey()) {
  await updateDailyActivity(userId, 'problems', dayKey);
  await recalcStreak(userId, dayKey);
}

async function recordCourseCompleted(userId, courseId, title, dayKey = getUtcTodayKey()) {
  // Insert course (ignore if already completed)
  const { rowCount } = await pool.query(
    `INSERT INTO completed_courses (user_id, course_id, title)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id, course_id) DO NOTHING`,
    [userId, courseId, title]
  );
  // Re-completing a course still counts as activity for the streak, but not as another course
  if (rowCount > 0) {
    await updateDailyActivity(userId, 'courses', dayKey);
  }
  await recalcStreak(userId, dayKey);
  return { alreadyCompleted: rowCount === 0 };
}

async function recordQuizCompleted(userId, quizId, title, score, total, dayKey = getUtcTodayKey()) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  await pool.query(
    `INSERT INTO completed_quizzes (user_id, quiz_id, title, score, total, percentage)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [userId, quizId, title, score, total, percentage]
  );
  await updateDailyActivity(userId, 'quizzes', dayKey);
  await recalcStreak(userId, dayKey);
}

/** Rebuild the streak from every active day: longest run ever, current run ending at the last active day. */
async function rebuildStreak(client, userId) {
  const { rows } = await client.query(
    `SELECT activity_date::text AS d FROM daily_activity
     WHERE user_id = $1 AND (problems + courses + quizzes) > 0 ORDER BY activity_date`,
    [userId]
  );
  if (!rows.length) return;
  let longest = 0;
  let run = 0;
  let prev = null;
  for (const { d } of rows) {
    run = prev && shiftKey(prev, 1) === d ? run + 1 : 1;
    longest = Math.max(longest, run);
    prev = d;
  }
  await client.query(
    `INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_active_date)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (user_id) DO UPDATE SET current_streak = $2,
       longest_streak = GREATEST(user_streaks.longest_streak, $3), last_active_date = $4`,
    [userId, run, longest, prev]
  );
}

/**
 * Add the progress a user made as a guest (kept on the device) to their account, in one transaction.
 * Input is validated by the controller. Activity counts are added; courses already completed are
 * kept as they are; quiz attempts are added with their original time.
 */
async function importGuestStats(userId, { dailyActivity, completedCourses, completedQuizzes }) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (const [day, a] of Object.entries(dailyActivity)) {
      await client.query(
        `INSERT INTO daily_activity (user_id, activity_date, problems, courses, quizzes)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (user_id, activity_date) DO UPDATE SET
           problems = daily_activity.problems + $3,
           courses = daily_activity.courses + $4,
           quizzes = daily_activity.quizzes + $5`,
        [userId, day, a.problems, a.courses, a.quizzes]
      );
    }
    for (const c of completedCourses) {
      await client.query(
        `INSERT INTO completed_courses (user_id, course_id, title, completed_at)
         VALUES ($1, $2, $3, $4) ON CONFLICT (user_id, course_id) DO NOTHING`,
        [userId, c.courseId, c.title, c.completedAt]
      );
    }
    for (const q of completedQuizzes) {
      await client.query(
        `INSERT INTO completed_quizzes (user_id, quiz_id, title, score, total, percentage, completed_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [userId, q.quizId, q.title, q.score, q.total, Math.round((q.score / q.total) * 100), q.completedAt]
      );
    }
    await rebuildStreak(client, userId);
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {});
    throw err;
  } finally {
    client.release();
  }
}

module.exports = {
  getStats, recordProblemSolved, recordCourseCompleted, recordQuizCompleted, importGuestStats, resolveDayKey, ACHIEVEMENT_RULES,
};
