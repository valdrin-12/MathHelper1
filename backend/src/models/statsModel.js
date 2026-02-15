const pool = require('../config/database');

function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

async function getStats(userId) {
  const [coursesRes, quizzesRes, activityRes, streakRes] = await Promise.all([
    pool.query('SELECT course_id as "courseId", title, completed_at as "completedAt" FROM completed_courses WHERE user_id = $1 ORDER BY completed_at DESC', [userId]),
    pool.query('SELECT quiz_id as "quizId", title, score, total, percentage, completed_at as "completedAt" FROM completed_quizzes WHERE user_id = $1 ORDER BY completed_at DESC', [userId]),
    pool.query('SELECT activity_date, problems, courses, quizzes FROM daily_activity WHERE user_id = $1', [userId]),
    pool.query('SELECT current_streak, longest_streak, last_active_date FROM user_streaks WHERE user_id = $1', [userId]),
  ]);

  // Convert daily_activity rows to object keyed by date
  const dailyActivity = {};
  for (const row of activityRes.rows) {
    const dateKey = row.activity_date.toISOString().split('T')[0];
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
        lastActiveDate: streakRes.rows[0].last_active_date
          ? streakRes.rows[0].last_active_date.toISOString().split('T')[0]
          : null,
      }
    : { current: 0, longest: 0, lastActiveDate: null };

  return {
    completedCourses: coursesRes.rows,
    completedQuizzes: quizzesRes.rows,
    dailyActivity,
    streak,
  };
}

async function updateDailyActivity(userId, field) {
  const today = getTodayKey();
  await pool.query(
    `INSERT INTO daily_activity (user_id, activity_date, ${field})
     VALUES ($1, $2, 1)
     ON CONFLICT (user_id, activity_date)
     DO UPDATE SET ${field} = daily_activity.${field} + 1`,
    [userId, today]
  );
}

async function recalcStreak(userId) {
  const today = getTodayKey();

  // Get or create streak record
  const { rows } = await pool.query(
    'SELECT current_streak, longest_streak, last_active_date FROM user_streaks WHERE user_id = $1',
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
  const lastActive = streak.last_active_date
    ? streak.last_active_date.toISOString().split('T')[0]
    : null;

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
  const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));

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

async function recordProblemSolved(userId) {
  await updateDailyActivity(userId, 'problems');
  await recalcStreak(userId);
}

async function recordCourseCompleted(userId, courseId, title) {
  // Insert course (ignore if already completed)
  await pool.query(
    `INSERT INTO completed_courses (user_id, course_id, title)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id, course_id) DO NOTHING`,
    [userId, courseId, title]
  );
  await updateDailyActivity(userId, 'courses');
  await recalcStreak(userId);
}

async function recordQuizCompleted(userId, quizId, title, score, total) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  await pool.query(
    `INSERT INTO completed_quizzes (user_id, quiz_id, title, score, total, percentage)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [userId, quizId, title, score, total, percentage]
  );
  await updateDailyActivity(userId, 'quizzes');
  await recalcStreak(userId);
}

module.exports = { getStats, recordProblemSolved, recordCourseCompleted, recordQuizCompleted };
