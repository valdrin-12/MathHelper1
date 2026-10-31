#!/usr/bin/env node
// Grade selector: filtering and sections, the remembered choice, and locale number formatting/parsing.
const Module = require('module');
const { requireSrc } = require('./lib/loadSrc');

// AsyncStorage is a native module: give the hook file an in-memory stand-in
const memory = new Map();
const fakeStorage = {
  getItem: async (k) => (memory.has(k) ? memory.get(k) : null),
  setItem: async (k, v) => { memory.set(k, v); },
  getAllKeys: async () => [...memory.keys()],
  multiRemove: async (keys) => keys.forEach((k) => memory.delete(k)),
};
const FAKE_STORAGE = require.resolve('./lib/fakeAsyncStorage');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function resolve(request, ...rest) {
  if (request === '@react-native-async-storage/async-storage') return FAKE_STORAGE;
  return originalResolve.call(this, request, ...rest);
};
require('./lib/fakeAsyncStorage').use(fakeStorage);

let passed = 0; let failed = 0;
const check = (name, ok, detail = '') => {
  if (ok) { passed++; console.log(`  ok   ${name}`); } else { failed++; console.log(`  FAIL ${name} ${detail}`); }
};

(async () => {
  const { sectionsByGrade, filterByGrade, normalizeGradeSelection } = requireSrc('content/grades/filterByGrade.js');

  // ── filtering on synthetic data ──
  const items = [
    { id: 'old-1' }, { id: 'old-2' },
    { id: 'g7-b', grade: 7, order: 2 }, { id: 'g6-b', grade: 6, order: 2 },
    { id: 'g6-a', grade: 6, order: 1 }, { id: 'g12-a', grade: 12, order: 1 }, { id: 'g7-a', grade: 7, order: 1 },
  ];
  const ids = (list) => list.map((i) => i.id).join(',');
  check('grade 6 shows only grade 6, in curriculum order', ids(filterByGrade(items, 6)) === 'g6-a,g6-b');
  check('grade 7 shows only grade 7', ids(filterByGrade(items, 7)) === 'g7-a,g7-b');
  check('grade without content is empty', filterByGrade(items, 9).length === 0);
  const general = sectionsByGrade(items, 'general');
  check('general shows everything', filterByGrade(items, 'general').length === items.length);
  check('general: existing first, then grades 6…12', general.map((s) => s.key).join(',') === 'general,grade-6,grade-7,grade-12');
  check('general: existing keep their order', ids(general[0].items) === 'old-1,old-2');
  check('unknown selection falls back to general', normalizeGradeSelection('x') === 'general' && normalizeGradeSelection('8') === 8);

  // ── on the real registries ──
  const { getLocalizedQuizSets } = requireSrc('content/quizData.js');
  const { getLocalizedCourses } = requireSrc('content/coursesData.js');
  for (const [name, list] of [['quizzes', getLocalizedQuizSets('en')], ['courses', getLocalizedCourses('en')]]) {
    const all = filterByGrade(list, 'general');
    check(`${name}: general = all ${list.length}`, all.length === list.length);
    const existing = list.filter((x) => x.grade == null);
    check(`${name}: general starts with the ${existing.length} existing items in order`,
      ids(all.slice(0, existing.length)) === ids(existing));
    for (const g of [6, 7, 8, 9, 10, 11, 12]) {
      const sel = filterByGrade(list, g);
      if (!sel.every((x) => x.grade === g)) check(`${name}: grade ${g} only`, false);
    }
    check(`${name}: every grade selection contains only that grade`, true);
  }

  // ── remembered choice ──
  const { loadGradeFilter, saveGradeFilter } = requireSrc('shared/grade/useGradeFilter.js');
  check('default is general', (await loadGradeFilter('u1', fakeStorage)) === 'general');
  await saveGradeFilter('u1', 7, fakeStorage);
  check('saved grade loads back', (await loadGradeFilter('u1', fakeStorage)) === 7);
  check('choice is per user', (await loadGradeFilter('u2', fakeStorage)) === 'general');
  memory.set([...memory.keys()][0], 'not json');
  check('broken stored value falls back to general', (await loadGradeFilter('u1', fakeStorage)) === 'general');
  const { clearUserLocalData } = requireSrc('features/auth/userStorage.js');
  await saveGradeFilter('u1', 9, fakeStorage);
  await clearUserLocalData();
  check('logout clears the saved grade', (await loadGradeFilter('u1', fakeStorage)) === 'general');

  // ── locale numbers ──
  const { formatNumber } = requireSrc('shared/utils/formatNumber.js');
  const { parseNumericAnswer } = requireSrc('features/quiz/quizAttempt.js');
  const N = ' ';
  check('format 3.5 → al 3,5 / de 3,5 / en 3.5', formatNumber(3.5, 'al') === '3,5' && formatNumber(3.5, 'de') === '3,5' && formatNumber(3.5, 'en') === '3.5');
  check('format 48800 groups thousands', formatNumber(48800, 'al') === `48${N}800` && formatNumber(48800, 'en') === `48${N}800`);
  check('format 2400 is not grouped', formatNumber(2400, 'de') === '2400');
  check('format negative uses minus sign', formatNumber(-1.25, 'de') === '−1,25');
  check('format fixed decimals', formatNumber(8.7, 'al', { decimals: 2 }) === '8,70');
  check('parse "3,5" and "3.5"', parseNumericAnswer('3,5') === 3.5 && parseNumericAnswer('3.5') === 3.5);
  check('parse "−4" and "3/4"', parseNumericAnswer('−4') === -4 && parseNumericAnswer('3/4') === 0.75);
  check('parse grouped "48 800" and "48,800"', parseNumericAnswer('48 800') === 48800 && parseNumericAnswer(`48${N}800`) === 48800);
  check('parse with unit "12 cm"', parseNumericAnswer('12 cm', 'cm') === 12);
  check('formatted values parse back (grade quizzes pass the language)', [3.5, -1.25, 48800, 0.35].every((v) => ['al', 'en', 'de'].every((l) => parseNumericAnswer(formatNumber(v, l), '', l) === v)));
  check('without a language a comma stays decimal (existing quizzes unchanged)', parseNumericAnswer('48,800') === 48.8 && parseNumericAnswer('1,5') === 1.5);
  check('en with language: "1,5" is still 1.5 (not a thousands group)', parseNumericAnswer('1,5', '', 'en') === 1.5);

  console.log(`${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
})();
