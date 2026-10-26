// Builds one quiz attempt from a quiz set and grades answers for every question type.
// Question order is shuffled every time; answer options are shuffled only for 'choice' questions
// (`correct` and `whyWrong` are remapped to the new option order). 'input' and 'truefalse' are left as is.

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const shuffleQuestion = (question) => {
  if ((question.type || 'choice') !== 'choice' || !Array.isArray(question.options)) return question;
  const order = shuffle(question.options.map((_, i) => i));
  const whyWrong = Array.isArray(question.whyWrong) ? question.whyWrong : [];
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    whyWrong: order.map((i) => whyWrong[i] ?? null),
    correct: order.indexOf(question.correct),
  };
};

export const QUIZ_MODES = ['practice', 'test'];

/**
 * @param quizSet  localized quiz set
 * @param options.questionIds  only include these questions (e.g. "practise mistakes")
 * @param options.isPractice   "practise mistakes" attempts: not counted in scores, mastery or the daily challenge
 * @param options.mode         'practice' (immediate feedback, no timer) or 'test' (timer, feedback at the end)
 */
export function createQuizAttempt(quizSet, { questionIds, isPractice = false, mode = 'practice' } = {}) {
  const pool = questionIds
    ? quizSet.questions.filter((q) => questionIds.includes(q.id))
    : quizSet.questions;
  return {
    ...quizSet,
    isPractice,
    mode: QUIZ_MODES.includes(mode) ? mode : 'practice',
    questions: shuffle(pool).map(shuffleQuestion),
  };
}

// ─── Numeric answers ───

const MINUS_SIGNS = /[−‒–—﹣－]/g; // − ‒ – — ﹣ －
const SPACES = /[\s   ]/g;
const PLAIN_NUMBER = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

const parsePlain = (s) => {
  let str = s;
  if (str.includes(',') && str.includes('.')) {
    // "1.234,5" or "1,234.5": the separator that comes first is a thousands separator
    str = str.indexOf(',') < str.indexOf('.') ? str.replace(/,/g, '') : str.replace(/\./g, '').replace(',', '.');
  } else {
    str = str.replace(',', '.');
  }
  return PLAIN_NUMBER.test(str) ? Number(str) : NaN;
};

/**
 * Parse what a student typed: decimal comma or point, minus sign variants, fractions ("3/4", "-1/2"),
 * leading/trailing spaces and an optional trailing unit (e.g. "12 cm" when unit is "cm").
 * @returns {number} the value, or NaN if it is not a number
 */
export function parseNumericAnswer(input, unit = '') {
  if (input === null || input === undefined) return NaN;
  let s = String(input).replace(MINUS_SIGNS, '-').trim();
  if (unit) {
    const u = String(unit).trim().toLowerCase();
    if (u && s.toLowerCase().endsWith(u)) s = s.slice(0, s.length - u.length);
  }
  s = s.replace(SPACES, '');
  if (!s) return NaN;
  const slash = s.indexOf('/');
  if (slash > 0 && slash === s.lastIndexOf('/')) {
    const num = parsePlain(s.slice(0, slash));
    let denStr = s.slice(slash + 1);
    let sign = 1;
    if (denStr.startsWith('-')) { sign = -1; denStr = denStr.slice(1); }
    const den = parsePlain(denStr);
    if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) return NaN;
    return (sign * num) / den;
  }
  return parsePlain(s);
}

/** Numeric comparison with absolute tolerance (default 1e-9) and a relative tolerance of 1e-6. */
export function numbersMatch(a, b, tolerance) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
  const abs = typeof tolerance === 'number' && tolerance >= 0 ? tolerance : 1e-9;
  return Math.abs(a - b) <= Math.max(abs, 1e-6 * Math.abs(b));
}

/** Is the typed value correct for an 'input' question? */
export function isInputCorrect(question, value) {
  const ans = question?.answer || {};
  const accepted = [ans.value, ...(Array.isArray(ans.alternatives) ? ans.alternatives : [])];
  return accepted.some((v) => numbersMatch(value, v, ans.tolerance));
}

/** The commonMistakes entry ({ value, why }) matching a wrong typed value, or null. */
export function findCommonMistake(question, value) {
  const list = Array.isArray(question?.commonMistakes) ? question.commonMistakes : [];
  return list.find((m) => numbersMatch(value, m?.value, question?.answer?.tolerance)) || null;
}

/** Format a number for display in the current language (decimal comma for al/de). */
export function formatNumber(value, lang = 'al') {
  if (!Number.isFinite(value)) return '';
  const rounded = Math.abs(value) >= 1e-6 ? Number(value.toPrecision(12)) : value;
  const str = String(rounded);
  return lang === 'en' ? str : str.replace('.', ',');
}

/**
 * Grade one answer. `given` is the option index (choice), the typed string (input) or a boolean (truefalse).
 * Returns the answer record stored for the attempt: { questionId, correct, usedHint, given }.
 */
export function gradeAnswer(question, given, usedHint = false) {
  const type = question.type || 'choice';
  let correct = false;
  if (given !== null && given !== undefined) {
    if (type === 'input') correct = isInputCorrect(question, parseNumericAnswer(given, question.unit));
    else if (type === 'truefalse') correct = given === question.correct;
    else correct = given === question.correct;
  }
  return { questionId: question.id, correct, usedHint: !!usedHint, given: given ?? null };
}

/** "10 min" / "10 Min." / "90 s" → seconds. Falls back to 60 s per question. */
export function parseDurationSeconds(duration, questionCount = 10) {
  const m = String(duration || '').match(/(\d+(?:[.,]\d+)?)\s*(h|std|orë|ore|min|m|s|sek|sec)?/i);
  if (m) {
    const n = Number(m[1].replace(',', '.'));
    const unit = (m[2] || 'min').toLowerCase();
    const secs = ['h', 'std', 'orë', 'ore'].includes(unit) ? n * 3600 : ['s', 'sek', 'sec'].includes(unit) ? n : n * 60;
    if (secs > 0) return Math.round(secs);
  }
  return Math.max(60, questionCount * 60);
}
