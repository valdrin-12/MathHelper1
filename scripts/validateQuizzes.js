#!/usr/bin/env node
// Validates data/quizzes/*.js: structure, all languages complete, hints and wrong-answer explanations,
// numeric options consistent across languages, and a balanced correct-answer position.
// Types: 'choice' (4 options, correct index, whyWrong[4]), 'input' (answer.value number, optional unit/placeholder/
// commonMistakes per language), 'truefalse' (boolean correct, whyWrong string).
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
let choiceCount = 0;
const typeCounts = {};
const trueFalse = { true: 0, false: 0 };

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
    const type = q.type || 'choice';
    typeCounts[type] = (typeCounts[type] || 0) + 1;
    const report = strict ? errors : warnings;

    // Fields every type needs in every language
    const checkCommon = (t, l) => {
      if (!t.question?.trim()) errors.push(`${where(q, l)}: empty question`);
      if (!t.explanation?.trim()) errors.push(`${where(q, l)}: empty explanation`);
      if (!t.hint?.trim()) report.push(`${where(q, l)}: missing hint`);
    };

    if (type === 'choice') {
      choiceCount++;
      const optionCount = q.al?.options?.length;
      if (!(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < optionCount)) errors.push(`${where(q)}: correct index out of range`);
      else positions[q.correct] = (positions[q.correct] || 0) + 1;

      for (const l of LANGS) {
        const t = q[l];
        if (!t) { errors.push(`${where(q, l)}: missing language block`); continue; }
        checkCommon(t, l);
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
        if (!Array.isArray(t.whyWrong) || t.whyWrong.length !== (t.options || []).length) report.push(`${where(q, l)}: whyWrong must have one entry per option`);
        else t.whyWrong.forEach((w, i) => {
          if (i === q.correct && w !== null) report.push(`${where(q, l)}: whyWrong[${i}] must be null for the correct option`);
          if (i !== q.correct && !String(w || '').trim()) report.push(`${where(q, l)}: whyWrong[${i}] missing`);
        });
      }
    } else if (type === 'input') {
      const a = q.answer;
      const value = a?.value;
      if (!a || typeof value !== 'number' || !Number.isFinite(value)) errors.push(`${where(q)}: answer.value must be a finite number`);
      if (a?.tolerance !== undefined && !(typeof a.tolerance === 'number' && Number.isFinite(a.tolerance) && a.tolerance >= 0)) errors.push(`${where(q)}: answer.tolerance must be a number >= 0`);
      if (a?.alternatives !== undefined && !(Array.isArray(a.alternatives) && a.alternatives.every((v) => typeof v === 'number' && Number.isFinite(v)))) errors.push(`${where(q)}: answer.alternatives must be an array of finite numbers`);
      const accepted = [value, ...(Array.isArray(a?.alternatives) ? a.alternatives : [])].filter((v) => typeof v === 'number');
      const tol = typeof a?.tolerance === 'number' ? a.tolerance : 1e-9;
      const matches = (x, v) => Math.abs(x - v) <= Math.max(tol, 1e-6 * Math.abs(v));
      if ('options' in q || q.al?.options) warnings.push(`${where(q)}: input question has options (ignored)`);

      for (const l of LANGS) {
        const t = q[l];
        if (!t) { errors.push(`${where(q, l)}: missing language block`); continue; }
        checkCommon(t, l);
        if (t.unit !== undefined && typeof t.unit !== 'string') errors.push(`${where(q, l)}: unit must be a string`);
        if (t.placeholder !== undefined && typeof t.placeholder !== 'string') errors.push(`${where(q, l)}: placeholder must be a string`);
        if (t.commonMistakes !== undefined) {
          if (!Array.isArray(t.commonMistakes)) { errors.push(`${where(q, l)}: commonMistakes must be an array`); continue; }
          t.commonMistakes.forEach((m, i) => {
            if (typeof m?.value !== 'number' || !Number.isFinite(m.value)) errors.push(`${where(q, l)}: commonMistakes[${i}].value must be a finite number`);
            else if (accepted.some((v) => matches(m.value, v))) errors.push(`${where(q, l)}: commonMistakes[${i}].value ${m.value} equals an accepted answer`);
            if (!String(m?.why || '').trim()) errors.push(`${where(q, l)}: commonMistakes[${i}].why missing`);
          });
          const alValues = (q.al?.commonMistakes || []).map((m) => m?.value);
          if (l !== 'al' && JSON.stringify(t.commonMistakes.map((m) => m?.value)) !== JSON.stringify(alValues)) {
            errors.push(`${where(q, l)}: commonMistakes values differ from al`);
          }
        }
      }
    } else if (type === 'truefalse') {
      if (typeof q.correct !== 'boolean') errors.push(`${where(q)}: correct must be true or false`);
      else trueFalse[q.correct ? 'true' : 'false']++;
      for (const l of LANGS) {
        const t = q[l];
        if (!t) { errors.push(`${where(q, l)}: missing language block`); continue; }
        checkCommon(t, l);
        if (typeof t.whyWrong !== 'string' || !t.whyWrong.trim()) report.push(`${where(q, l)}: whyWrong must be a non-empty string`);
      }
    } else {
      errors.push(`${where(q)}: unknown type "${type}" (choice, input or truefalse)`);
    }
  }
}

// Position balance only applies to multiple-choice questions
const share = positions.map((n) => (choiceCount ? Math.round((n / choiceCount) * 100) : 0));
console.log(`${questionCount} questions (${Object.entries(typeCounts).map(([k, v]) => `${k}: ${v}`).join(', ')}).`);
if (choiceCount) console.log(`Choice: correct answer position A/B/C/D: ${positions.join('/')} (${share.join('%/')}%)`);
if (choiceCount && share.some((p) => p > 35 || p < 15)) (strict ? errors : warnings).push('correct-answer positions are unbalanced (each should be 15–35%)');
const tfTotal = trueFalse.true + trueFalse.false;
if (tfTotal) {
  const trueShare = Math.round((trueFalse.true / tfTotal) * 100);
  console.log(`True/false: ${trueFalse.true} true / ${trueFalse.false} false (${trueShare}% true)`);
  if (trueShare < 35 || trueShare > 65) warnings.push(`true/false answers are unbalanced: ${trueShare}% true (should be 35–65%)`);
}

if (warnings.length) console.log(`${warnings.length} warnings${warnings.length > 20 ? ' (first 20)' : ''}:\n  ${warnings.slice(0, 20).join('\n  ')}`);
if (errors.length) {
  console.error(`${errors.length} errors:\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log('OK');
