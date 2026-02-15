// Kurset e matematikës të organizuara sipas kategorisë dhe nivelit
// With localization support for SQ, EN, DE

import { coursesTranslations_sq } from './localized/courses_sq';
import { coursesTranslations_en } from './localized/courses_en';
import { coursesTranslations_de } from './localized/courses_de';

const translationsMap = {
  al: coursesTranslations_sq,
  en: coursesTranslations_en,
  de: coursesTranslations_de,
};

// Category metadata (icons and colors are language-independent)
export const mathCategories = [
  { id: 'algebra', icon: '∑', color: '#FF6B6B' },
  { id: 'geometry', icon: '△', color: '#4ECDC4' },
  { id: 'calculus', icon: '∫', color: '#45B7D1' },
  { id: 'statistics', icon: '📊', color: '#96CEB4' },
  { id: 'trigonometry', icon: '∿', color: '#FFEAA7' },
  { id: 'arithmetic', icon: '➕', color: '#DDA15E' },
  { id: 'linearAlgebra', icon: '⊗', color: '#BC6C25' },
  { id: 'numberTheory', icon: 'ℕ', color: '#E63946' },
];

// Category names by language
const categoryNames = {
  al: {
    algebra: 'Algjebër', geometry: 'Gjeometri', calculus: 'Kalkulus',
    statistics: 'Statistikë', trigonometry: 'Trigonometri', arithmetic: 'Aritmetikë',
    linearAlgebra: 'Algjebër Lineare', numberTheory: 'Teoria e Numrave',
  },
  en: {
    algebra: 'Algebra', geometry: 'Geometry', calculus: 'Calculus',
    statistics: 'Statistics', trigonometry: 'Trigonometry', arithmetic: 'Arithmetic',
    linearAlgebra: 'Linear Algebra', numberTheory: 'Number Theory',
  },
  de: {
    algebra: 'Algebra', geometry: 'Geometrie', calculus: 'Analysis',
    statistics: 'Statistik', trigonometry: 'Trigonometrie', arithmetic: 'Arithmetik',
    linearAlgebra: 'Lineare Algebra', numberTheory: 'Zahlentheorie',
  },
};

// Difficulty metadata (emojis and colors are language-independent)
export const difficultyMeta = {
  beginner: { color: '#4ECDC4', emoji: '🌱' },
  intermediate: { color: '#FFB84D', emoji: '🔥' },
  advanced: { color: '#FF6B6B', emoji: '🚀' },
};

// Difficulty names by language
const difficultyNames = {
  al: { beginner: 'Fillestar', intermediate: 'Mesatar', advanced: 'Avancuar' },
  en: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
  de: { beginner: 'Anfänger', intermediate: 'Mittelstufe', advanced: 'Fortgeschritten' },
};

// Structural course data (language-independent)
const coursesStructure = [
  // ARITHMETIC
  { id: 'arith-001', category: 'arithmetic', difficulty: 'beginner', lessons: 12, prerequisites: [] },
  { id: 'arith-002', category: 'arithmetic', difficulty: 'beginner', lessons: 15, prerequisites: ['arith-001'] },
  { id: 'arith-003', category: 'arithmetic', difficulty: 'intermediate', lessons: 10, prerequisites: ['arith-002'] },
  // ALGEBRA
  { id: 'alg-001', category: 'algebra', difficulty: 'beginner', lessons: 14, prerequisites: ['arith-001'] },
  { id: 'alg-002', category: 'algebra', difficulty: 'beginner', lessons: 18, prerequisites: ['alg-001'] },
  { id: 'alg-003', category: 'algebra', difficulty: 'intermediate', lessons: 12, prerequisites: ['alg-002'] },
  { id: 'alg-004', category: 'algebra', difficulty: 'intermediate', lessons: 20, prerequisites: ['alg-002'] },
  { id: 'alg-005', category: 'algebra', difficulty: 'intermediate', lessons: 16, prerequisites: ['alg-004'] },
  { id: 'alg-006', category: 'algebra', difficulty: 'intermediate', lessons: 15, prerequisites: ['alg-005'] },
  { id: 'alg-007', category: 'algebra', difficulty: 'advanced', lessons: 13, prerequisites: ['alg-006'] },
  { id: 'alg-008', category: 'algebra', difficulty: 'advanced', lessons: 18, prerequisites: ['alg-006'] },
  { id: 'alg-009', category: 'algebra', difficulty: 'advanced', lessons: 14, prerequisites: ['alg-008'] },
  { id: 'alg-010', category: 'algebra', difficulty: 'advanced', lessons: 16, prerequisites: ['alg-008'] },
  // GEOMETRY
  { id: 'geo-001', category: 'geometry', difficulty: 'beginner', lessons: 14, prerequisites: [] },
  { id: 'geo-002', category: 'geometry', difficulty: 'beginner', lessons: 16, prerequisites: ['geo-001'] },
  { id: 'geo-003', category: 'geometry', difficulty: 'beginner', lessons: 14, prerequisites: ['geo-002'] },
  { id: 'geo-004', category: 'geometry', difficulty: 'intermediate', lessons: 15, prerequisites: ['geo-002'] },
  { id: 'geo-005', category: 'geometry', difficulty: 'intermediate', lessons: 18, prerequisites: ['geo-003'] },
  { id: 'geo-006', category: 'geometry', difficulty: 'advanced', lessons: 16, prerequisites: ['geo-002', 'alg-004'] },
  { id: 'geo-007', category: 'geometry', difficulty: 'advanced', lessons: 20, prerequisites: ['calc-007', 'geo-006'] },
  { id: 'geo-008', category: 'geometry', difficulty: 'advanced', lessons: 18, prerequisites: ['calc-001', 'geo-006'] },
  // TRIGONOMETRY
  { id: 'trig-001', category: 'trigonometry', difficulty: 'intermediate', lessons: 15, prerequisites: ['geo-002', 'alg-004'] },
  { id: 'trig-002', category: 'trigonometry', difficulty: 'intermediate', lessons: 18, prerequisites: ['trig-001'] },
  { id: 'trig-003', category: 'trigonometry', difficulty: 'advanced', lessons: 16, prerequisites: ['trig-002'] },
  { id: 'trig-004', category: 'trigonometry', difficulty: 'advanced', lessons: 12, prerequisites: ['trig-002'] },
  // CALCULUS
  { id: 'calc-001', category: 'calculus', difficulty: 'intermediate', lessons: 20, prerequisites: ['alg-008', 'trig-002'] },
  { id: 'calc-002', category: 'calculus', difficulty: 'advanced', lessons: 24, prerequisites: ['calc-001'] },
  { id: 'calc-003', category: 'calculus', difficulty: 'advanced', lessons: 20, prerequisites: ['calc-002'] },
  { id: 'calc-004', category: 'calculus', difficulty: 'advanced', lessons: 22, prerequisites: ['calc-002'] },
  { id: 'calc-005', category: 'calculus', difficulty: 'advanced', lessons: 18, prerequisites: ['calc-004'] },
  { id: 'calc-006', category: 'calculus', difficulty: 'advanced', lessons: 26, prerequisites: ['calc-004'] },
  { id: 'calc-007', category: 'calculus', difficulty: 'advanced', lessons: 28, prerequisites: ['calc-004', 'linalg-001'] },
  // STATISTICS
  { id: 'stat-001', category: 'statistics', difficulty: 'beginner', lessons: 16, prerequisites: ['arith-001'] },
  { id: 'stat-002', category: 'statistics', difficulty: 'intermediate', lessons: 18, prerequisites: ['stat-001', 'alg-002'] },
  { id: 'stat-003', category: 'statistics', difficulty: 'advanced', lessons: 22, prerequisites: ['stat-002'] },
  { id: 'stat-004', category: 'statistics', difficulty: 'advanced', lessons: 18, prerequisites: ['stat-003'] },
  { id: 'stat-005', category: 'statistics', difficulty: 'advanced', lessons: 22, prerequisites: ['stat-003'] },
  { id: 'stat-006', category: 'statistics', difficulty: 'advanced', lessons: 20, prerequisites: ['stat-004'] },
  // LINEAR ALGEBRA
  { id: 'linalg-001', category: 'linearAlgebra', difficulty: 'intermediate', lessons: 20, prerequisites: ['alg-006'] },
  { id: 'linalg-002', category: 'linearAlgebra', difficulty: 'intermediate', lessons: 18, prerequisites: ['linalg-001'] },
  { id: 'linalg-003', category: 'linearAlgebra', difficulty: 'advanced', lessons: 22, prerequisites: ['linalg-002'] },
  { id: 'linalg-004', category: 'linearAlgebra', difficulty: 'advanced', lessons: 18, prerequisites: ['linalg-003'] },
  { id: 'linalg-005', category: 'linearAlgebra', difficulty: 'advanced', lessons: 22, prerequisites: ['linalg-002', 'calc-002'] },
  // NUMBER THEORY
  { id: 'numth-001', category: 'numberTheory', difficulty: 'intermediate', lessons: 16, prerequisites: ['arith-001', 'alg-002'] },
  { id: 'numth-002', category: 'numberTheory', difficulty: 'advanced', lessons: 18, prerequisites: ['numth-001'] },
];

// Get localized categories
export const getLocalizedCategories = (lang = 'al') => {
  const names = categoryNames[lang] || categoryNames.al;
  return mathCategories.map(cat => ({
    ...cat,
    name: names[cat.id] || cat.id,
  }));
};

// Get localized difficulty levels
export const getLocalizedDifficulty = (lang = 'al') => {
  const names = difficultyNames[lang] || difficultyNames.al;
  const result = {};
  Object.entries(difficultyMeta).forEach(([key, meta]) => {
    result[key] = { ...meta, name: names[key] || key };
  });
  return result;
};

// Legacy: difficultyLevels for backward compatibility (Albanian)
export const difficultyLevels = getLocalizedDifficulty('al');

// Get localized courses
export const getLocalizedCourses = (lang = 'al') => {
  const translations = translationsMap[lang] || translationsMap.al;
  return coursesStructure.map(course => {
    const t = translations[course.id] || translationsMap.al[course.id] || {};
    return {
      ...course,
      title: t.title || course.id,
      duration: t.duration || '',
      description: t.description || '',
      topics: t.topics || [],
      learningOutcomes: t.learningOutcomes || [],
    };
  });
};

// Legacy: courses array for backward compatibility (Albanian)
export const courses = getLocalizedCourses('al');

// Helper functions
export const getCoursesByCategory = (categoryId, lang = 'al') => {
  return getLocalizedCourses(lang).filter(course => course.category === categoryId);
};

export const getCoursesByDifficulty = (difficulty, lang = 'al') => {
  return getLocalizedCourses(lang).filter(course => course.difficulty === difficulty);
};

export const searchCourses = (query, lang = 'al') => {
  const lowerQuery = query.toLowerCase();
  return getLocalizedCourses(lang).filter(course =>
    course.title.toLowerCase().includes(lowerQuery) ||
    course.description.toLowerCase().includes(lowerQuery) ||
    course.topics.some(topic => topic.toLowerCase().includes(lowerQuery))
  );
};

export default {
  mathCategories,
  difficultyLevels,
  difficultyMeta,
  courses,
  getLocalizedCourses,
  getLocalizedCategories,
  getLocalizedDifficulty,
  getCoursesByCategory,
  getCoursesByDifficulty,
  searchCourses,
};
