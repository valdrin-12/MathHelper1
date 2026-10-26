import { useMemo, useCallback } from 'react';
import { useLanguage } from '../shared/i18n/LanguageContext';
import {
  getLocalizedCourses,
  getLocalizedCategories,
  getLocalizedDifficulty,
  searchCourses,
} from './coursesData';
import {
  getLocalizedQuizSets,
  getDifficultyLabel,
  getDifficultyColor,
} from './quizData';
import { getLocalizedCourseContents } from './courseContentData';

export function useLocalizedCourses() {
  const { language } = useLanguage();
  const courses = useMemo(() => getLocalizedCourses(language), [language]);
  const categories = useMemo(() => getLocalizedCategories(language), [language]);
  const difficultyLevels = useMemo(() => getLocalizedDifficulty(language), [language]);

  const search = useCallback((query) => searchCourses(query, language), [language]);

  return { courses, categories, difficultyLevels, search, language };
}

export function useLocalizedCourseContent() {
  const { language } = useLanguage();
  const courseContents = useMemo(() => getLocalizedCourseContents(language), [language]);
  return { courseContents, language };
}

export function useLocalizedQuizzes() {
  const { language } = useLanguage();
  const quizSets = useMemo(() => getLocalizedQuizSets(language), [language]);

  const getLabel = (d) => getDifficultyLabel(d, language);
  const getColor = getDifficultyColor;

  return { quizSets, getDifficultyLabel: getLabel, getDifficultyColor: getColor, language };
}
