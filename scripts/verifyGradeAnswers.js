#!/usr/bin/env node
// Recomputes every answer of the grade 6–12 content with mathjs, so no wrong answer ships.
//  Lessons: answers.examples[i] / answers.practice[i] = 'text' or [[expr, expected, tolerance?, shown?], …].
//    expr is computed and must equal expected; expected must also appear in the solution text
//    (solution + steps) of every language, written the local way (3,5 / 3.5, 48 800, −4, 3/4); `shown` gives the
//    exact form to look for when it differs from `expected` (mixed numbers: expected '4 + 1/12', shown '4 1/12').
//  Quizzes: question.verify = 'text' | [expr, expected, tol?] | [[…], …]
//    choice: expected must be the correct option's value (and no other option's), in every language
//    input: expected must equal answer.value; truefalse: expected (true/false) must equal correct.
const math = require('mathjs');
const { requireSrc, loadSrc } = require('./lib/loadSrc');

const LANGS = ['al', 'en', 'de'];
const { publishedThemes } = requireSrc('content/grades/index.js');
const quizSets = loadSrc('content/quizzes/grades/index.js');

const errors = [];
let verified = 0; let textOnly = 0;

const evaluate = (e) => {
  if (typeof e === 'number' || typeof e === 'boolean') return e;
  const v = math.evaluate(String(e).replace(/−/g, '-').replace(/·|×/g, '*').replace(/:/g, '/'));
  return typeof v === 'object' && v !== null && 'valueOf' in v ? Number(v.valueOf()) : v;
};
const close = (a, b, tol = 1e-9) => (typeof a === 'boolean' || typeof b === 'boolean'
  ? a === b
  : Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= Math.max(tol, 1e-9 * Math.abs(b)));

// numbers written in a text, read the way that language writes them
const numbersIn = (text, lang) => {
  const s = String(text).replace(/[−–]/g, '-');
  const re = lang === 'en'
    ? /(?<![\d.,)])-?\d{1,3}(?:[,\s\u00A0\u202F]\d{3})+(?:\.\d+)?|(?<![\d.,)])-?\d+(?:\.\d+)?/g
    : /(?<![\d.,)])-?\d{1,3}(?:[\s\u00A0\u202F]\d{3})+(?:,\d+)?|(?<![\d.,)])-?\d+(?:,\d+)?/g;
  return (s.match(re) || []).map((m) => Number(lang === 'en' ? m.replace(/[,\s\u00A0\u202F]/g, '') : m.replace(/[\s\u00A0\u202F]/g, '').replace(',', '.')));
};
const squash = (s) => String(s).replace(/[−–]/g, '-').replace(/[\s   ]/g, '');
// expected value written in a text?
const appearsIn = (expected, text, lang) => {
  if (typeof expected === 'boolean') return true;
  if (typeof expected === 'string') {
    // fractions / mixed numbers / expressions: compare literally (local decimal sign)
    const local = lang === 'en' ? expected : expected.replace(/\./g, ',');
    return squash(text).includes(squash(local));
  }
  return numbersIn(text, lang).some((n) => close(n, expected, Math.max(1e-9, Math.abs(expected) * 1e-9)));
};

const checkPairs = (where, pairs, texts) => {
  pairs.forEach(([expr, expected, tol, shown]) => {
    let got; let want;
    try { got = evaluate(expr); want = evaluate(expected); } catch (e) { errors.push(`${where}: cannot compute "${expr}" / "${expected}": ${e.message}`); return; }
    if (!close(got, want, tol)) errors.push(`${where}: ${expr} = ${got}, but the answer says ${expected}`);
    const look = shown ?? expected;
    LANGS.forEach((l) => { if (texts[l] !== undefined && !appearsIn(look, texts[l], l)) errors.push(`${where} [${l}]: answer ${look} not found in the solution text`); });
    verified++;
  });
};

// ── lessons ──
publishedThemes().forEach(({ data }) => {
  data.lessons.forEach((lesson) => {
    ['examples', 'practice'].forEach((kind) => {
      (lesson.answers?.[kind] || []).forEach((entry, i) => {
        if (entry === 'text') { textOnly++; return; }
        const texts = {};
        LANGS.forEach((l) => {
          const item = lesson[l]?.[kind]?.[i];
          texts[l] = item ? [item.solution, ...(item.steps || [])].join('\n') : undefined;
        });
        checkPairs(`${lesson.slug} ${kind}[${i}]`, entry, texts);
      });
    });
  });
});

// ── quizzes ──
quizSets.forEach((set) => {
  set.questions.forEach((q) => {
    const where = `${set.id} q${q.id}`;
    if (q.verify === 'text') { textOnly++; return; }
    const pairs = Array.isArray(q.verify?.[0]) ? q.verify : [q.verify];
    const type = q.type || 'choice';
    pairs.forEach(([expr, expected, tol, shown]) => {
      let got; let want;
      try { got = evaluate(expr); want = evaluate(expected); } catch (e) { errors.push(`${where}: cannot compute "${expr}": ${e.message}`); return; }
      if (!close(got, want, tol)) { errors.push(`${where}: ${expr} = ${got}, but verify says ${expected}`); return; }
      verified++;
      if (type === 'truefalse') { if (want !== q.correct) errors.push(`${where}: statement is ${want}, marked ${q.correct}`); return; }
      if (type === 'input') { if (!close(q.answer?.value, want, q.answer?.tolerance || tol)) errors.push(`${where}: answer.value ${q.answer?.value} ≠ ${want}`); return; }
      LANGS.forEach((l) => {
        const opts = q[l]?.options || [];
        if (!appearsIn(shown ?? expected, opts[q.correct], l)) errors.push(`${where} [${l}]: correct option "${opts[q.correct]}" does not show ${shown ?? expected}`);
        if (typeof expected === 'number') {
          // a wrong option may repeat the number only if its words differ ("scalene, 18 cm" vs "isosceles, 18 cm")
          const words = (o) => String(o).replace(/[−-]?\d[\d\s.,]*/g, '#').trim();
          opts.forEach((o, i) => {
            const nums = numbersIn(o, l);
            if (i !== q.correct && nums.length === 1 && close(nums[0], want, tol) && words(o) === words(opts[q.correct])) errors.push(`${where} [${l}]: wrong option "${o}" has the correct value`);
          });
        }
      });
    });
  });
});

if (errors.length) { console.log(errors.join('\n')); console.log(`${errors.length} wrong or unverifiable answer(s)`); process.exit(1); }
console.log(`OK grade answers: ${verified} computed and matched in al/en/de, ${textOnly} non-numeric answers (checked by hand)`);
