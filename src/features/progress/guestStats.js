// Progress of a guest (no account), kept on the device in the same shape as the server's stats,
// so every screen works unchanged: { completedCourses, completedQuizzes, dailyActivity, streak }.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocalDateKey } from '../../shared/utils/localDate';

export const GUEST_STATS_KEY = '@mathhelper_guest_stats';

const empty = () => ({ completedCourses: [], completedQuizzes: [], dailyActivity: {}, streak: { current: 0, longest: 0, lastActiveDate: null } });

const dayBefore = (key) => {
  const [y, m, d] = key.split('-').map(Number);
  return getLocalDateKey(new Date(y, m - 1, d - 1));
};

/** Current streak (ending today or yesterday) and the longest run of active days. */
const computeStreak = (dailyActivity) => {
  const active = new Set(Object.keys(dailyActivity).filter((k) => {
    const a = dailyActivity[k] || {};
    return (a.problems || 0) + (a.courses || 0) + (a.quizzes || 0) > 0;
  }));
  const today = getLocalDateKey();
  let day = active.has(today) ? today : dayBefore(today);
  let current = 0;
  while (active.has(day)) { current++; day = dayBefore(day); }
  let longest = 0;
  active.forEach((k) => {
    if (active.has(dayBefore(k))) return; // only count from the first day of each run
    let n = 0;
    const [y, m, d] = k.split('-').map(Number);
    while (active.has(getLocalDateKey(new Date(y, m - 1, d + n)))) n++;
    longest = Math.max(longest, n);
  });
  const sorted = [...active].sort();
  return { current, longest: Math.max(longest, current), lastActiveDate: sorted[sorted.length - 1] || null };
};

export const loadGuestStats = async () => {
  try {
    const raw = await AsyncStorage.getItem(GUEST_STATS_KEY);
    const s = raw ? { ...empty(), ...JSON.parse(raw) } : empty();
    return { ...s, streak: computeStreak(s.dailyActivity) };
  } catch {
    return empty();
  }
};

const update = async (fn) => {
  const s = await loadGuestStats();
  fn(s);
  s.streak = computeStreak(s.dailyActivity);
  await AsyncStorage.setItem(GUEST_STATS_KEY, JSON.stringify(s));
};

const bump = (s, field) => {
  const key = getLocalDateKey();
  const day = s.dailyActivity[key] || { problems: 0, courses: 0, quizzes: 0 };
  day[field] = (day[field] || 0) + 1;
  s.dailyActivity[key] = day;
};

export const guestRecordProblemSolved = () => update((s) => bump(s, 'problems'));

export const guestRecordCourseCompleted = (courseId, title) => update((s) => {
  if (!s.completedCourses.some((c) => c.courseId === courseId)) {
    s.completedCourses.unshift({ courseId, title, completedAt: new Date().toISOString() });
    bump(s, 'courses');
  }
});

export const guestRecordQuizCompleted = (quizId, title, score, total) => update((s) => {
  // newest first, like the server
  s.completedQuizzes.unshift({ quizId, title, score, total, percentage: total > 0 ? Math.round((score / total) * 100) : 0, completedAt: new Date().toISOString() });
  bump(s, 'quizzes');
});
