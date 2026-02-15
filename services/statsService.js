import api from './apiClient';

const defaultStats = {
  completedCourses: [],
  completedQuizzes: [],
  dailyActivity: {},
  streak: { current: 0, longest: 0, lastActiveDate: null },
};

export const getStats = async () => {
  try {
    const data = await api.get('/api/stats');
    return data.stats || { ...defaultStats };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return { ...defaultStats };
  }
};

export const recordProblemSolved = async () => {
  try {
    await api.post('/api/stats/problem-solved');
  } catch (error) {
    console.error('Error recording problem:', error);
  }
};

export const recordCourseCompleted = async (courseId, title) => {
  try {
    await api.post('/api/stats/course-completed', { courseId, title });
  } catch (error) {
    console.error('Error recording course:', error);
  }
};

export const recordQuizCompleted = async (quizId, title, score, total) => {
  try {
    await api.post('/api/stats/quiz-completed', { quizId, title, score, total });
  } catch (error) {
    console.error('Error recording quiz:', error);
  }
};

export const getAchievements = (stats) => {
  const achievements = [];
  const problems = Object.values(stats.dailyActivity || {}).reduce((s, d) => s + (d.problems || 0), 0);
  const courses = stats.completedCourses?.length || 0;
  const quizzes = stats.completedQuizzes?.length || 0;
  const streak = stats.streak?.longest || 0;

  if (problems >= 1) achievements.push({ id: 'first_problem', emoji: '🎯' });
  if (problems >= 10) achievements.push({ id: 'ten_problems', emoji: '🔥' });
  if (problems >= 50) achievements.push({ id: 'fifty_problems', emoji: '💪' });
  if (courses >= 1) achievements.push({ id: 'first_course', emoji: '📚' });
  if (courses >= 5) achievements.push({ id: 'five_courses', emoji: '🏆' });
  if (quizzes >= 1) achievements.push({ id: 'first_quiz', emoji: '✅' });
  if (quizzes >= 5) achievements.push({ id: 'five_quizzes', emoji: '🌟' });
  if (streak >= 3) achievements.push({ id: 'streak_3', emoji: '📅' });
  if (streak >= 7) achievements.push({ id: 'streak_7', emoji: '🗓️' });

  return achievements;
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
  clearStats,
};
