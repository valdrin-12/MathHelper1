import api from '../../shared/api/apiClient';
import { getLocalDateKey } from '../../shared/utils/localDate';

const defaultStats = {
  completedCourses: [],
  completedQuizzes: [],
  dailyActivity: {},
  streak: { current: 0, longest: 0, lastActiveDate: null },
};

/**
 * Fetch stats. `today` (device-local YYYY-MM-DD) lets the server compute the streak in the
 * user's timezone. Errors PROPAGATE (no silent fallback to empty stats).
 * @returns {Promise<Object>}
 */
export const getStats = async () => {
  const today = getLocalDateKey();
  const data = await api.get(`/api/stats?today=${encodeURIComponent(today)}`);
  return { ...defaultStats, ...(data.stats || {}) };
};

// All writes send the device-local date so activity is attributed to the user's calendar day.
// Errors propagate to the caller.

export const recordProblemSolved = async () => {
  await api.post('/api/stats/problem-solved', { localDate: getLocalDateKey() });
};

export const recordCourseCompleted = async (courseId, title) => {
  await api.post('/api/stats/course-completed', { courseId, title, localDate: getLocalDateKey() });
};

export const recordQuizCompleted = async (quizId, title, score, total) => {
  await api.post('/api/stats/quiz-completed', {
    quizId,
    title,
    score,
    total,
    localDate: getLocalDateKey(),
  });
};

/** Add a guest's progress ({ dailyActivity, completedCourses, completedQuizzes }) to the account. Errors propagate. */
export const importGuestStats = async ({ dailyActivity, completedCourses, completedQuizzes }) => {
  await api.post('/api/stats/import-guest', { dailyActivity, completedCourses, completedQuizzes, localDate: getLocalDateKey() });
};

/**
 * Achievement catalogue. Titles/descriptions live in locales: achievements.<id>.title / .desc
 */
export const ACHIEVEMENT_CATALOGUE = [
  { id: 'first_problem', emoji: '🎯', metric: 'problems', threshold: 1 },
  { id: 'ten_problems', emoji: '🔥', metric: 'problems', threshold: 10 },
  { id: 'fifty_problems', emoji: '💪', metric: 'problems', threshold: 50 },
  { id: 'first_course', emoji: '📚', metric: 'courses', threshold: 1 },
  { id: 'five_courses', emoji: '🏆', metric: 'courses', threshold: 5 },
  { id: 'first_quiz', emoji: '✅', metric: 'quizzes', threshold: 1 },
  { id: 'five_quizzes', emoji: '🌟', metric: 'quizzes', threshold: 5 },
  { id: 'streak_3', emoji: '📅', metric: 'streak', threshold: 3 },
  { id: 'streak_7', emoji: '🗓️', metric: 'streak', threshold: 7 },
];

/**
 * Full achievement catalogue with earned flags.
 * @param {Object|null} stats
 * @returns {Array<{ id: string, emoji: string, earned: boolean, progress: number, threshold: number }>}
 */
export const getAchievements = (stats) => {
  const s = stats || {};
  const metrics = {
    problems: Object.values(s.dailyActivity || {}).reduce((sum, d) => sum + (d.problems || 0), 0),
    courses: s.completedCourses?.length || 0,
    quizzes: s.completedQuizzes?.length || 0,
    streak: s.streak?.longest || 0,
  };
  return ACHIEVEMENT_CATALOGUE.map(({ id, emoji, metric, threshold }) => ({
    id,
    emoji,
    earned: metrics[metric] >= threshold,
    progress: Math.min(metrics[metric], threshold),
    threshold,
  }));
};

export const clearStats = async () => {
  // Stats are managed server-side
};

export default {
  getStats,
  recordProblemSolved,
  recordCourseCompleted,
  recordQuizCompleted,
  getAchievements,
  ACHIEVEMENT_CATALOGUE,
  clearStats,
};
