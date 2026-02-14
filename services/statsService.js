import AsyncStorage from '@react-native-async-storage/async-storage';

const STATS_KEY_PREFIX = '@math_helper_stats_';
const USER_KEY = '@math_helper_user';

const defaultStats = {
  completedCourses: [],
  completedQuizzes: [],
  dailyActivity: {},
  streak: { current: 0, longest: 0, lastActiveDate: null },
};

const getTodayKey = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
};

const getCurrentUserId = async () => {
  try {
    const userData = await AsyncStorage.getItem(USER_KEY);
    if (!userData) return null;
    const user = JSON.parse(userData);
    return user.id;
  } catch {
    return null;
  }
};

export const getStats = async () => {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return { ...defaultStats };

    const statsKey = `${STATS_KEY_PREFIX}${userId}`;
    const data = await AsyncStorage.getItem(statsKey);
    return data ? JSON.parse(data) : { ...defaultStats };
  } catch {
    return { ...defaultStats };
  }
};

const saveStats = async (stats) => {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return;

    const statsKey = `${STATS_KEY_PREFIX}${userId}`;
    await AsyncStorage.setItem(statsKey, JSON.stringify(stats));
  } catch (e) {
    console.error('Gabim gjatë ruajtjes së stats:', e);
  }
};

const updateDailyActivity = (stats, field) => {
  const today = getTodayKey();
  if (!stats.dailyActivity[today]) {
    stats.dailyActivity[today] = { problems: 0, courses: 0, quizzes: 0 };
  }
  stats.dailyActivity[today][field] = (stats.dailyActivity[today][field] || 0) + 1;
  return stats;
};

const recalcStreak = (stats) => {
  const today = getTodayKey();
  const lastActive = stats.streak.lastActiveDate;

  if (!lastActive) {
    stats.streak.current = 1;
    stats.streak.longest = 1;
    stats.streak.lastActiveDate = today;
    return stats;
  }

  if (lastActive === today) return stats;

  const lastDate = new Date(lastActive);
  const todayDate = new Date(today);
  const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    stats.streak.current += 1;
    if (stats.streak.current > stats.streak.longest) {
      stats.streak.longest = stats.streak.current;
    }
  } else {
    stats.streak.current = 1;
  }
  stats.streak.lastActiveDate = today;
  return stats;
};

export const recordProblemSolved = async () => {
  try {
    let stats = await getStats();
    stats = updateDailyActivity(stats, 'problems');
    stats = recalcStreak(stats);
    await saveStats(stats);
  } catch (e) {
    console.error('Gabim gjatë regjistrimit të problemit:', e);
  }
};

export const recordCourseCompleted = async (courseId, title) => {
  try {
    let stats = await getStats();
    const alreadyDone = stats.completedCourses.some(c => c.courseId === courseId);
    if (!alreadyDone) {
      stats.completedCourses.push({ courseId, title, completedAt: new Date().toISOString() });
    }
    stats = updateDailyActivity(stats, 'courses');
    stats = recalcStreak(stats);
    await saveStats(stats);
  } catch (e) {
    console.error('Gabim gjatë regjistrimit të kursit:', e);
  }
};

export const recordQuizCompleted = async (quizId, title, score, total) => {
  try {
    let stats = await getStats();
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    stats.completedQuizzes.push({
      quizId,
      title,
      score,
      total,
      percentage,
      completedAt: new Date().toISOString(),
    });
    stats = updateDailyActivity(stats, 'quizzes');
    stats = recalcStreak(stats);
    await saveStats(stats);
  } catch (e) {
    console.error('Gabim gjatë regjistrimit të kuizit:', e);
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
  try {
    const userId = await getCurrentUserId();
    if (!userId) return;

    const statsKey = `${STATS_KEY_PREFIX}${userId}`;
    await AsyncStorage.removeItem(statsKey);
  } catch (e) {
    console.error('Gabim gjatë fshirjes së stats:', e);
  }
};
