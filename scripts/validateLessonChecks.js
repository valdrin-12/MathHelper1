#!/usr/bin/env node
// Validates src/content/lessonChecks.js against the lessons: every question follows a theory paragraph
// that exists in al, en and de, has its texts in every language and a valid answer.
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');

const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'src') + path.sep;
const originalLoader = Module._extensions['.js'];
Module._extensions['.js'] = function load(m, file) {
  if (file.startsWith(srcDir)) {
    const { code } = babel.transformFileSync(file, {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
      babelrc: false, configFile: false, browserslistConfigFile: false,
    });
    return m._compile(code, file);
  }
  return originalLoader(m, file);
};

const LANGS = ['al', 'en', 'de'];
const checks = require(path.join(root, 'src', 'content', 'lessonChecks.js')).default;
const content = {};
LANGS.forEach((l) => {
  content[l] = {};
  ['algebra', 'base', 'calculus', 'geometry', 'other'].forEach((f) => {
    const mod = require(path.join(root, 'src', 'content', 'localized', `courseContent_${l}`, `${f}.js`));
    Object.assign(content[l], mod.default || Object.values(mod)[0]);
  });
});

const errors = [];
let count = 0;
for (const [courseId, lessons] of Object.entries(checks)) {
  lessons.forEach((list, li) => {
    list.forEach((c, ci) => {
      count++;
      const where = `${courseId} lesson ${li} question ${ci}`;
      LANGS.forEach((l) => {
        const lesson = content[l][courseId]?.lessons?.[li];
        if (!lesson) { errors.push(`${where}: no lesson in ${l}`); return; }
        const paragraphs = lesson.theory.split(/\n\n+/).length;
        if (!(Number.isInteger(c.after) && c.after >= 0 && c.after < paragraphs)) errors.push(`${where}: after=${c.after} but ${l} has ${paragraphs} paragraphs`);
        const text = c[l];
        if (!text?.question || !text?.explanation) errors.push(`${where}: missing ${l} text`);
        if (c.type === 'choice') {
          if (!Array.isArray(text?.options) || text.options.length < 2) errors.push(`${where}: ${l} needs options`);
          else if (!(c.correct >= 0 && c.correct < text.options.length)) errors.push(`${where}: correct out of range`);
        }
      });
      if (c.type === 'truefalse' && typeof c.correct !== 'boolean') errors.push(`${where}: truefalse needs a boolean`);
      if (c.type === 'input' && !Number.isFinite(c.answer?.value)) errors.push(`${where}: input needs answer.value`);
      if (!['choice', 'truefalse', 'input'].includes(c.type)) errors.push(`${where}: unknown type ${c.type}`);
    });
  });
}
if (errors.length) { console.log(errors.join('\n')); console.log(`${errors.length} problem(s) in lesson checks`); process.exit(1); }
console.log(`OK lesson checks: ${count} questions valid in ${LANGS.length} languages`);
