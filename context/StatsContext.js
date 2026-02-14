import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as statsService from '../services/statsService';

const StatsContext = createContext();

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) throw new Error('useStats duhet të përdoret brenda StatsProvider');
  return context;
};

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadStats = useCallback(async () => {
    try {
      const data = await statsService.getStats();
      setStats(data);
    } catch (e) {
      console.error('Gabim në ngarkimin e stats:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  const recordCourseCompleted = async (courseId, title) => {
    await statsService.recordCourseCompleted(courseId, title);
    await loadStats();
  };

  const recordQuizCompleted = async (quizId, title, score, total) => {
    await statsService.recordQuizCompleted(quizId, title, score, total);
    await loadStats();
  };

  const recordProblemSolved = async () => {
    await statsService.recordProblemSolved();
    await loadStats();
  };

  const totalProblems = Object.values(stats?.dailyActivity || {}).reduce(
    (sum, day) => sum + (day.problems || 0), 0
  );

  const todayKey = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  })();

  const todayProblems = stats?.dailyActivity?.[todayKey]?.problems || 0;
  const todayCourses = stats?.dailyActivity?.[todayKey]?.courses || 0;
  const todayQuizzes = stats?.dailyActivity?.[todayKey]?.quizzes || 0;

  const value = {
    stats,
    loading,
    refresh: loadStats,
    recordCourseCompleted,
    recordQuizCompleted,
    recordProblemSolved,
    totalProblems,
    todayProblems,
    todayCourses,
    todayQuizzes,
    completedCoursesCount: stats?.completedCourses?.length || 0,
    completedQuizzesCount: stats?.completedQuizzes?.length || 0,
    streak: stats?.streak?.current || 0,
    longestStreak: stats?.streak?.longest || 0,
    achievements: stats ? statsService.getAchievements(stats) : [],
  };

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
};

export default StatsContext;
