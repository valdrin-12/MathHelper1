#!/usr/bin/env node
// Validates data/quizzes/*.js: structure, all languages complete, hints and wrong-answer explanations,
// numeric options consistent across languages, and a balanced correct-answer position.
// Usage: node scripts/validateQuizzes.js [--strict] [set-id ...]   (--strict also fails on missing hints/whyWrong)
const fs = require('fs');
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');

const root = path.join(__dirname, '..');
const quizDir = path.join(root, 'data', 'quizzes');
const strict = process.argv.includes('--strict');
const LANGS = ['al', 'en', 'de'];
const onlyIds = process.argv.slice(2).filter((a) => !a.startsWith('--'));

// Load the ES-module data files with Babel (data only, no React Native code)
const originalLoader = Module._extensions['.js'];
Module._extensions['.js'] = function load(m, file) {
  if (file.startsWith(quizDir)) {
    const { code } = babel.transformFileSync(file, {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
      babelrc: false, configFile: false, browserslistConfigFile: false,
    });
    return m._compile(code, file);
  }
  return originalLoader(m, file);
};

const errors = [];
const warnings = [];
const positions = [0, 0, 0, 0];
let questionCount = 0;

// Options that are plain numbers/expressions must be identical across languages (decimal comma vs point allowed)
const normalizeNumeric = (s) => String(s).replace(/\s/g, '').replace(/,/g, '.');
const looksNumeric = (s) => /^[-−+]?[\d.,\s/√π²³^()×·*+−-]+$/.test(String(s).trim());

for (const file of fs.readdirSync(quizDir).filter((f) => f.endsWith('.js') && (!onlyIds.length || onlyIds.includes(f.slice(0, -3)))).sort()) {
  const set = require(path.join(quizDir, file)).default;
  const where = (q, l) => `${set.id}#${q.id}${l ? `[${l}]` : ''}`;

  if (`${set.id}.js` !== file) errors.push(`${file}: id "${set.id}" does not match the file name`);
  for (const l of LANGS) {
    const meta = set.i18n?.[l];
    if (!meta?.title || !meta?.category || !meta?.duration) errors.push(`${set.id}: i18n.${l} needs title, category and duration`);
  }
  if (!Array.isArray(set.questions) || set.questions.length < 10) errors.push(`${set.id}: needs at least 10 questions`);

  const ids = new Set();
  for (const q of set.questions || []) {
    questionCount++;
    if (ids.has(q.id)) errors.push(`${where(q)}: duplicate question id`);
    ids.add(q.id);

    const optionCount = q.al?.options?.length;
    if (!(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < optionCount)) errors.push(`${where(q)}: correct index out of range`);
    else positions[q.correct] = (positions[q.correct] || 0) + 1;

    for (const l of LANGS) {
      const t = q[l];
      if (!t) { errors.push(`${where(q, l)}: missing language block`); continue; }
      if (!t.question?.trim()) errors.push(`${where(q, l)}: empty question`);
      if (!t.explanation?.trim()) errors.push(`${where(q, l)}: empty explanation`);
      if (!Array.isArray(t.options) || t.options.length !== 4) errors.push(`${where(q, l)}: needs exactly 4 options`);
      else {
        if (t.options.some((o) => !String(o).trim())) errors.push(`${where(q, l)}: empty option`);
        if (new Set(t.options.map((o) => String(o).trim())).size !== t.options.length) errors.push(`${where(q, l)}: duplicate options`);
        if (l !== 'al' && q.al?.options) {
          t.options.forEach((o, i) => {
            const a = q.al.options[i];
            if (looksNumeric(a) && looksNumeric(o) && normalizeNumeric(a) !== normalizeNumeric(o)) {
              errors.push(`${where(q, l)}: option ${i} "${o}" differs from al "${a}"`);
            }
          });
        }
      }
      const report = strict ? errors : warnings;
      if (!t.hint?.trim()) report.push(`${where(q, l)}: missing hint`);
      if (!Array.isArray(t.whyWrong) || t.whyWrong.length !== (t.options || []).length) report.push(`${where(q, l)}: whyWrong must have one entry per option`);
      else t.whyWrong.forEach((w, i) => {
        if (i === q.correct && w !== null) report.push(`${where(q, l)}: whyWrong[${i}] must be null for the correct option`);
        if (i !== q.correct && !String(w || '').trim()) report.push(`${where(q, l)}: whyWrong[${i}] missing`);
      });
    }
  }
}

const share = positions.map((n) => (questionCount ? Math.round((n / questionCount) * 100) : 0));
console.log(`${questionCount} questions. Correct answer position A/B/C/D: ${positions.join('/')} (${share.join('%/')}%)`);
if (share.some((p) => p > 35 || p < 15)) (strict ? errors : warnings).push('correct-answer positions are unbalanced (each should be 15–35%)');

if (warnings.length) console.log(`${warnings.length} warnings${warnings.length > 20 ? ' (first 20)' : ''}:\n  ${warnings.slice(0, 20).join('\n  ')}`);
if (errors.length) {
  console.error(`${errors.length} errors:\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log('OK');
