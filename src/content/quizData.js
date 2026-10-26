// Quiz sets with questions, answers, hints and explanations.
// Every set lives in quizzes/<id>.js with all languages (al = Albanian source, en, de).

import arithEasy from './quizzes/arith-easy';
import arithMedium from './quizzes/arith-medium';
import arithHard from './quizzes/arith-hard';
import algEasy from './quizzes/alg-easy';
import algMedium from './quizzes/alg-medium';
import algHard from './quizzes/alg-hard';
import geoEasy from './quizzes/geo-easy';
import geoMedium from './quizzes/geo-medium';
import geoHard from './quizzes/geo-hard';
import trigEasy from './quizzes/trig-easy';
import trigMedium from './quizzes/trig-medium';
import trigHard from './quizzes/trig-hard';
import calcEasy from './quizzes/calc-easy';
import calcMedium from './quizzes/calc-medium';
import calcHard from './quizzes/calc-hard';
import statEasy from './quizzes/stat-easy';
import statMedium from './quizzes/stat-medium';
import statHard from './quizzes/stat-hard';
import linalgEasy from './quizzes/linalg-easy';
import linalgMedium from './quizzes/linalg-medium';
import linalgHard from './quizzes/linalg-hard';
import numthEasy from './quizzes/numth-easy';
import numthMedium from './quizzes/numth-medium';

// Free tier quiz IDs (available without premium)
export const FREE_QUIZ_IDS = ['arith-easy', 'arith-medium', 'alg-easy'];

// Display order (kept from the original list)
const RAW_QUIZ_SETS = [
  arithEasy, arithMedium, algEasy, algHard, geoEasy, geoMedium, trigMedium, arithHard,
  algMedium, geoHard, trigEasy, trigHard, calcEasy, calcMedium, calcHard,
  statEasy, statMedium, statHard, linalgEasy, linalgMedium, linalgHard, numthEasy, numthMedium,
];

const LANGS = ['al', 'en', 'de'];

// Flatten one set into the shape the app uses: questions get their texts in one language.
// Question types: 'choice' (options + correct index), 'input' (numeric answer), 'truefalse' (boolean correct).
const localizeSet = (set, lang) => {
  const l = LANGS.includes(lang) ? lang : 'al';
  const meta = set.i18n[l] || set.i18n.al;
  return {
    id: set.id,
    title: meta.title,
    category: meta.category,
    duration: meta.duration,
    difficulty: set.difficulty,
    icon: set.icon,
    color: set.color,
    questions: set.questions.map((q) => {
      const t = q[l] || q.al;
      const type = q.type || 'choice';
      const base = {
        id: q.id,
        type,
        question: t.question,
        explanation: t.explanation,
        hint: t.hint || q.al.hint || '',
      };
      if (type === 'input') {
        // Numeric typed answer: { value, tolerance?, alternatives? } is language-independent
        return {
          ...base,
          answer: q.answer,
          unit: t.unit ?? q.al.unit ?? '',
          placeholder: t.placeholder ?? q.al.placeholder ?? '',
          commonMistakes: t.commonMistakes || q.al.commonMistakes || [],
        };
      }
      if (type === 'truefalse') {
        // correct is a boolean; whyWrong is a single string shown when the student picks the wrong value
        return { ...base, correct: q.correct, whyWrong: t.whyWrong || q.al.whyWrong || '' };
      }
      return {
        ...base,
        options: t.options,
        correct: q.correct,
        whyWrong: t.whyWrong || q.al.whyWrong || [],
      };
    }),
  };
};

export const quizSets = RAW_QUIZ_SETS.map((set) => localizeSet(set, 'al'));

// Get localized quiz sets
export const getLocalizedQuizSets = (lang = 'al') => RAW_QUIZ_SETS.map((set) => localizeSet(set, lang));

// Stats helpers
const difficultyLabels = {
  al: { beginner: '🌱 Fillestar', intermediate: '🔥 Mesatar', advanced: '🚀 Avancuar' },
  en: { beginner: '🌱 Beginner', intermediate: '🔥 Intermediate', advanced: '🚀 Advanced' },
  de: { beginner: '🌱 Anfänger', intermediate: '🔥 Mittelstufe', advanced: '🚀 Fortgeschritten' },
};

export const getDifficultyLabel = (d, lang = 'al') => {
  const map = difficultyLabels[lang] || difficultyLabels.al;
  return map[d] || d;
};

export const getDifficultyColor = (d) => {
  const map = { beginner: '#4ECDC4', intermediate: '#FFB84D', advanced: '#FF6B6B' };
  return map[d] || '#999';
};
