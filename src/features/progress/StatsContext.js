import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AppState } from 'react-native';
import * as statsService from './statsService';
import { getErrorCode } from '../auth/authService';
import { getLocalDateKey } from '../../shared/utils/localDate';
import { useUser } from '../auth/UserContext';

const StatsContext = createContext();

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) throw new Error('useStats duhet të përdoret brenda StatsProvider');
  return context;
};

export const StatsProvider = ({ children }) => {
  const { offline } = useUser();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  // Load error: { code, message } or null. Stats keep their last good value on error.
  const [error, setError] = useState(null);
  const errorRef = useRef(null);
  errorRef.current = error;

  const loadStats = useCallback(async () => {
    try {
      const data = await statsService.getStats();
      setStats(data);
      setError(null);
      return true;
    } catch (e) {
      console.warn('Gabim në ngarkimin e stats:', e?.code || e?.message);
      setError({ code: getErrorCode(e, 'STATS_LOAD_FAILED'), message: e?.message || null });
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  // Retry automatically when the app returns to the foreground or the session comes back online
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active' && errorRef.current) loadStats();
    });
    return () => sub.remove();
  }, [loadStats]);

  useEffect(() => {
    if (!offline && errorRef.current) loadStats();
  }, [offline, loadStats]);

  // Writes return true on success, false on failure (never throw), then reload stats.
  // With `waitForReload: false` the caller is released as soon as the write succeeds
  // and the stats refresh continues in the background.
  const runWrite = async (fn, { waitForReload = true } = {}) => {
    try {
      await fn();
    } catch (e) {
      console.warn('Gabim në ruajtjen e stats:', e?.code || e?.message);
      return false;
    }
    if (waitForReload) await loadStats();
    else loadStats();
    return true;
  };

  const recordCourseCompleted = (courseId, title) =>
    runWrite(() => statsService.recordCourseCompleted(courseId, title), { waitForReload: false });

  const recordQuizCompleted = (quizId, title, score, total) =>
    runWrite(() => statsService.recordQuizCompleted(quizId, title, score, total));

  const recordProblemSolved = () => runWrite(() => statsService.recordProblemSolved());

  const totalProblems = Object.values(stats?.dailyActivity || {}).reduce(
    (sum, day) => sum + (day.problems || 0), 0
  );

  const todayKey = getLocalDateKey();

  const todayProblems = stats?.dailyActivity?.[todayKey]?.problems || 0;
  const todayCourses = stats?.dailyActivity?.[todayKey]?.courses || 0;
  const todayQuizzes = stats?.dailyActivity?.[todayKey]?.quizzes || 0;

  const allAchievements = useMemo(() => statsService.getAchievements(stats), [stats]);
  const earnedAchievements = useMemo(() => allAchievements.filter((a) => a.earned), [allAchievements]);

  const value = {
    stats,
    loading,
    error,
    refresh: loadStats,
    retry: loadStats,
    recordCourseCompleted,
    recordQuizCompleted,
    recordProblemSolved,
    totalProblems,
    todayKey,
    todayProblems,
    todayCourses,
    todayQuizzes,
    completedCoursesCount: stats?.completedCourses?.length || 0,
    completedQuizzesCount: stats?.completedQuizzes?.length || 0,
    streak: stats?.streak?.current || 0,
    longestStreak: stats?.streak?.longest || 0,
    // Full catalogue: [{ id, emoji, earned, progress, threshold }]
    achievements: allAchievements,
    earnedAchievements,
    earnedAchievementsCount: earnedAchievements.length,
  };

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
};

export default StatsContext;
