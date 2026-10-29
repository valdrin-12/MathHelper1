// Short "check yourself" questions shown between the theory paragraphs of a lesson (Brilliant-style).
// courseId → one array per lesson; each question: after = index of the theory paragraph it follows.
//
// Two notations are accepted:
//   long  (free.js):  { after, type: 'choice'|'truefalse'|'input', correct?, answer?: { value },
//                       al: { question, options?, explanation }, en: {…}, de: {…} }
//   short (others):   { a: after, t: 'c'|'tf'|'n', k?: correct, v?: value,
//                       al: [question, options?, explanation], en: […], de: […] }
// Formal address everywhere ("ju" / "Sie"); al/de write decimals with a comma.
import free from './free';
import base from './base';
import algebra from './algebra';
import geometry from './geometry';
import calculus from './calculus';
import other from './other';

const TYPES = { c: 'choice', tf: 'truefalse', n: 'input' };

const toLong = (q) => {
  if (q.type) return q;
  const text = (arr) => (q.t === 'c'
    ? { question: arr[0], options: arr[1], explanation: arr[2] }
    : { question: arr[0], explanation: arr[1] });
  return {
    after: q.a,
    type: TYPES[q.t],
    correct: q.k,
    answer: q.t === 'n' ? { value: q.v } : undefined,
    al: text(q.al),
    en: text(q.en),
    de: text(q.de),
  };
};

const LESSON_CHECKS = {};
[free, base, algebra, geometry, calculus, other].forEach((group) => {
  Object.entries(group).forEach(([courseId, lessons]) => {
    LESSON_CHECKS[courseId] = lessons.map((list) => (list || []).map(toLong));
  });
});

/**
 * The questions of one lesson in the given language, ready for the quiz components:
 * [{ id, after, type, correct?, answer?, question, options?, explanation }]
 */
export const getLessonChecks = (courseId, lessonIndex, lang = 'al') => {
  const list = LESSON_CHECKS[courseId]?.[lessonIndex] || [];
  const l = ['al', 'en', 'de'].includes(lang) ? lang : 'al';
  return list.map((c, i) => {
    const text = c[l] || c.al;
    return {
      id: `${courseId}:${lessonIndex}:${i}`,
      after: c.after,
      type: c.type,
      correct: c.correct,
      answer: c.answer,
      question: text.question,
      options: text.options,
      explanation: text.explanation,
    };
  });
};

export default LESSON_CHECKS;
