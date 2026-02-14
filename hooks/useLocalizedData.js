import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  getLocalizedCourses,
  getLocalizedCategories,
  getLocalizedDifficulty,
  searchCourses,
} from '../data/coursesData';
import {
  getLocalizedQuizSets,
  getDifficultyLabel,
  getDifficultyColor,
} from '../data/quizData';
import { getLocalizedCourseContents } from '../data/courseContentData';

export function useLocalizedCourses() {
  const { language } = useLanguage();
  const courses = useMemo(() => getLocalizedCourses(language), [language]);
  const categories = useMemo(() => getLocalizedCategories(language), [language]);
  const difficultyLevels = useMemo(() => getLocalizedDifficulty(language), [language]);

  const search = (query) => searchCourses(query, language);

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
