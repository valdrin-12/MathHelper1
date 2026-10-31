// Grade 6–12 courses: one course per curriculum theme, one lesson per subtopic (see curriculum.js).
// Theme files live in grades/g<N>/<theme>.js with all three languages side by side:
//   { id, i18n: { al|en|de: { title, description } },
//     lessons: [{ slug, visuals?: [Visual], answers: { examples: [...], practice: [...] },
//                 al|en|de: { title, objectives[], theory, keyPoints[], examples[{example, solution}],
//                             commonMistakes[{mistake, fix}], practice[{problem, solution, steps[]}] } }] }
// `answers` (language-independent) lists, per worked example and practice problem, the expressions that
// scripts/verifyGradeAnswers.js recomputes, or 'text' for answers that are not numbers.
// A missing translation falls back to English and is logged once.
import { CURRICULUM, PUBLISHED_GRADES } from './curriculum';
import grade6 from './g6';
import grade7 from './g7';
import grade8 from './g8';
import grade9 from './g9';

const THEMES_BY_GRADE = { 6: grade6, 7: grade7, 8: grade8, 9: grade9 };
const LANGS = ['al', 'en', 'de'];

// Grade 6–7: beginner, 8–10: intermediate, 11–12: advanced (used by the existing difficulty filter)
const difficultyOf = (grade) => (grade <= 7 ? 'beginner' : grade <= 10 ? 'intermediate' : 'advanced');

const warned = new Set();
const pick = (obj, lang, where) => {
  if (obj?.[lang]) return obj[lang];
  if (!warned.has(where + lang)) {
    warned.add(where + lang);
    console.warn(`[grades] missing ${lang} translation for ${where}, using English`);
  }
  return obj?.en || obj?.al || {};
};

/** Themes of the published grades: [{ ...curriculumTheme, data }] in curriculum order. */
export const publishedThemes = () => CURRICULUM
  .filter((g) => PUBLISHED_GRADES.includes(g.grade))
  .flatMap((g) => g.themes.map((theme) => ({
    ...theme,
    data: (THEMES_BY_GRADE[g.grade] || []).find((d) => d.id === theme.slug) || null,
  })))
  .filter((t) => t.data);

/** Language-independent course structure (same fields as coursesData's structure, plus grade info). */
export const gradeCourseStructures = () => publishedThemes().map((t) => ({
  id: t.slug,
  category: t.category,
  difficulty: difficultyOf(t.grade),
  plannedLessons: t.subtopics.length,
  prerequisites: [],
  grade: t.grade,
  theme: t.slug,
  order: t.order,
  period: t.period,
}));

const MINUTES_PER_LESSON = 10;
const durationText = (lessons, lang) => {
  const min = lessons * MINUTES_PER_LESSON;
  return lang === 'de' ? `ca. ${min} Min.` : lang === 'en' ? `about ${min} min` : `rreth ${min} min`;
};

/** Course texts in one language: { [courseId]: { title, duration, description, topics, learningOutcomes } } */
export const gradeCourseTexts = (lang) => {
  const out = {};
  publishedThemes().forEach(({ slug, data }) => {
    const meta = pick(data.i18n, lang, slug);
    const lessons = data.lessons.map((l) => pick(l, lang, l.slug));
    out[slug] = {
      title: meta.title,
      duration: durationText(lessons.length, lang),
      description: meta.description,
      topics: lessons.map((l) => l.title),
      learningOutcomes: lessons.map((l) => l.objectives?.[0]).filter(Boolean),
    };
  });
  return out;
};

/** Lessons in one language, in the shape the lesson viewer uses (plus objectives, mistakes, visuals). */
export const gradeCourseContents = (lang) => {
  const l = LANGS.includes(lang) ? lang : 'al';
  const out = {};
  publishedThemes().forEach(({ slug, grade, data }) => {
    out[slug] = {
      grade,
      lessons: data.lessons.map((lesson) => {
        const t = pick(lesson, l, lesson.slug);
        return {
          slug: lesson.slug,
          title: t.title,
          objectives: t.objectives || [],
          theory: t.theory,
          keyPoints: t.keyPoints || [],
          examples: (t.examples || []).map((ex, i) => ({ ...ex, visual: lesson.exampleVisuals?.[i] || undefined })),
          commonMistakes: t.commonMistakes || [],
          practice: t.practice || [],
          visuals: lesson.visuals || [],
        };
      }),
    };
  });
  return out;
};
