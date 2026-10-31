#!/usr/bin/env node
// Guards the existing ("General Math") content: every quiz set, every course's lessons, course texts and
// quick questions must stay byte-for-byte the same, in the same order, as recorded in
// scripts/fixtures/existingContent.json (written once, before the grade 6–12 content was added).
// Usage: node scripts/testExistingContentUnchanged.js [--update]   (--update rewrites the fixture; do not use casually)
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { root, loadSrc, requireSrc } = require('./lib/loadSrc');

const FIXTURE = path.join(__dirname, 'fixtures', 'existingContent.json');
const LANGS = ['al', 'en', 'de'];
const PARTS = ['base', 'algebra', 'geometry', 'calculus', 'other'];
const hash = (value) => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');

const snapshot = () => {
  const out = { quizzes: {}, quizOrder: [], lessons: {}, courseTexts: {}, courseOrder: [], lessonChecks: {} };
  // quiz set files, hashed as written
  const quizDir = path.join(root, 'src', 'content', 'quizzes');
  fs.readdirSync(quizDir).filter((f) => f.endsWith('.js')).sort().forEach((f) => {
    const set = loadSrc(`content/quizzes/${f}`);
    out.quizzes[set.id] = hash(set);
  });
  // the order in which General Math quizzes are shown (grade sets are excluded)
  const { getLocalizedQuizSets } = requireSrc('content/quizData.js');
  out.quizOrder = getLocalizedQuizSets('al').filter((q) => q.grade == null).map((q) => q.id);
  // lessons per course and language
  LANGS.forEach((l) => PARTS.forEach((p) => {
    const mod = requireSrc(`content/localized/courseContent_${l}/${p}.js`);
    const contents = mod.default || Object.values(mod)[0];
    Object.entries(contents).forEach(([id, c]) => { out.lessons[`${l}:${id}`] = hash(c); });
  }));
  // course titles, descriptions, topics per language
  LANGS.forEach((l) => {
    const mod = requireSrc(`content/localized/courses_${l}.js`);
    Object.entries(Object.values(mod)[0]).forEach(([id, c]) => { out.courseTexts[`${l}:${id}`] = hash(c); });
  });
  const { getLocalizedCourses } = requireSrc('content/coursesData.js');
  out.courseOrder = getLocalizedCourses('al').filter((c) => c.grade == null)
    .map((c) => `${c.id}|${c.category}|${c.difficulty}|${c.lessons}|${(c.prerequisites || []).join(',')}`);
  // quick questions of the existing lessons
  const checks = loadSrc('content/lessonChecks/index.js');
  Object.entries(checks).forEach(([id, lessons]) => { out.lessonChecks[id] = hash(lessons); });
  return out;
};

const current = snapshot();
if (process.argv.includes('--update')) {
  fs.writeFileSync(FIXTURE, JSON.stringify(current, null, 1) + '\n');
  console.log(`Fixture written: ${Object.keys(current.quizzes).length} quiz sets, ${Object.keys(current.lessons).length} lesson courses`);
  process.exit(0);
}

const expected = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
const errors = [];
const compareMap = (name, exp, cur) => {
  Object.entries(exp).forEach(([k, h]) => {
    if (!(k in cur)) errors.push(`${name}: ${k} is missing`);
    else if (cur[k] !== h) errors.push(`${name}: ${k} changed`);
  });
};
compareMap('quiz', expected.quizzes, current.quizzes);
compareMap('lessons', expected.lessons, current.lessons);
compareMap('course texts', expected.courseTexts, current.courseTexts);
compareMap('lesson checks', expected.lessonChecks, current.lessonChecks);
if (JSON.stringify(expected.quizOrder) !== JSON.stringify(current.quizOrder)) errors.push('General Math quiz list or order changed');
if (JSON.stringify(expected.courseOrder) !== JSON.stringify(current.courseOrder)) errors.push('General Math course list, order or metadata changed');

if (errors.length) { console.log(errors.join('\n')); console.log(`FAIL existing content changed (${errors.length})`); process.exit(1); }
console.log(`OK existing content unchanged: ${expected.quizOrder.length} quiz sets, ${expected.courseOrder.length} courses, `
  + `${Object.keys(expected.lessons).length} lesson files (course × language), ${Object.keys(expected.lessonChecks).length} quick-question sets`);
