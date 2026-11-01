#!/usr/bin/env node
// Completeness and quality gate for the grade 6–12 content (published grades only, see curriculum.js):
//  - every curriculum subtopic has a lesson, in al/en/de, with every section filled:
//    objectives 2–3, theory, key rules, ≥2 worked examples, 1–3 common mistakes, 3–5 practice problems
//  - lessons have a picture unless they say why not (noVisual), every picture has alt text in 3 languages
//  - every theme has one quiz with 8–10 questions mixing easy/medium/hard, all with a verify entry
//  - no placeholders, no concept used before the grade that introduces it
const path = require('path');
const fs = require('fs');
const { root, loadSrc, requireSrc } = require('./lib/loadSrc');

const LANGS = ['al', 'en', 'de'];
const VISUAL_TYPES = ['numberLine', 'fractionBar', 'pieModel', 'geoFigure', 'functionPlot', 'unitCircle', 'barChart', 'pieChart',
  'histogram', 'boxPlot', 'scatterPlot', 'treeDiagram', 'vennDiagram', 'valueTable', 'solid'];
const PLACEHOLDER = /\b(TODO|TBD|FIXME|lorem|ipsum)\b|\?\?\?|XXX/i;
// concept → first grade where the curriculum introduces it
// (letters in Albanian/German words are not ASCII, so word edges are checked with Unicode letter classes)
const W0 = '(?<![\\p{L}])'; const W1 = '(?![\\p{L}])';
const word = (alts) => new RegExp(`${W0}(${alts})${W1}`, 'iu');
const CONCEPTS = [
  { name: 'square roots', grade: 7, re: /√/u },
  { name: 'Pythagoras', grade: 7, re: /pitagor|pythagor/iu },
  { name: 'powers with negative exponents', grade: 8, re: /⁻[⁰¹²³⁴⁵⁶⁷⁸⁹]/u },
  { name: 'vectors', grade: 8, re: word('vektor\\p{L}*|vector\\p{L}*') },
  { name: 'trigonometry', grade: 9, re: word('sin|cos|tg|tan|cotg|cot|trigonometr\\p{L}*') },
  { name: 'logarithms', grade: 11, re: word('log|logarit\\p{L}*|logarithm\\p{L}*') },
  { name: 'calculus', grade: 12, re: new RegExp(`${W0}(derivat\\p{L}*|ableitung\\p{L}*|integral\\p{L}*|limes|limiti)${W1}|∫|${W0}lim\\s*[(\\[]`, 'iu') },
];

const { CURRICULUM, PUBLISHED_GRADES } = requireSrc('content/grades/curriculum.js');
const { publishedThemes } = requireSrc('content/grades/index.js');
const quizSets = loadSrc('content/quizzes/grades/index.js');

const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const nonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;
const allStrings = (obj, out = []) => {
  if (typeof obj === 'string') out.push(obj);
  else if (Array.isArray(obj)) obj.forEach((v) => allStrings(v, out));
  else if (obj && typeof obj === 'object') Object.values(obj).forEach((v) => allStrings(v, out));
  return out;
};
const textCheck = (where, grade, obj) => {
  allStrings(obj).forEach((s) => {
    if (PLACEHOLDER.test(s)) err(where, `placeholder text "${s.slice(0, 40)}"`);
    CONCEPTS.forEach((c) => { if (grade < c.grade && c.re.test(s)) err(where, `uses ${c.name} (introduced in grade ${c.grade}): "${s.slice(0, 60)}"`); });
  });
};
const { parse } = require('mathjs');
// every expression of an interactive graph must parse; slider start values must lie inside their range
const checkExpressions = (where, v) => {
  if (v.type !== 'functionPlot') return;
  const exprs = [];
  const add = (e) => { if (typeof e === 'string') exprs.push(e); };
  (v.functions || []).forEach((f) => { add(f.expr); (f.domain || []).forEach(add); });
  (v.curves || []).forEach((c) => { add(c.x); add(c.y); (c.t || []).forEach(add); });
  (v.points || []).forEach((p) => p.at.forEach(add));
  (v.segments || []).forEach((g) => [...g.from, ...g.to].forEach(add));
  if (v.shade) { add(v.shade.expr); add(v.shade.lower); add(v.shade.from); add(v.shade.to); }
  (v.readouts || []).forEach((r) => (r.cases || []).forEach((c) => add(c.when)));
  allStrings([v.functions, v.curves, v.points, v.segments, v.readouts]).forEach((t) => (t.match(/\{([^{}]+)\}/g) || []).forEach((m) => add(m.slice(1, -1))));
  exprs.forEach((e) => { try { parse(e); } catch (x) { err(where, `graph expression "${e}" does not parse: ${x.message}`); } });
  (v.sliders || []).forEach((sl) => { if (!(sl.min <= sl.value && sl.value <= sl.max)) err(where, `slider ${sl.name} starts outside [${sl.min}, ${sl.max}]`); });
};
const checkVisual = (where, v) => {
  if (!v || !VISUAL_TYPES.includes(v.type)) { err(where, `unknown visual type ${v?.type}`); return; }
  LANGS.forEach((l) => { if (!nonEmpty(v.alt?.[l])) err(where, `visual ${v.type} has no ${l} alt text`); });
  checkExpressions(where, v);
};
const checkAnswers = (where, list, count) => {
  if (!Array.isArray(list) || list.length !== count) { err(where, `answers needs ${count} entries, has ${list?.length ?? 0}`); return; }
  list.forEach((a, i) => {
    if (a === 'text') return;
    if (!Array.isArray(a) || !a.length || !a.every((p) => Array.isArray(p) && typeof p[0] === 'string')) err(where, `answers[${i}] must be 'text' or [[expr, expected], …]`);
  });
};

let lessonCount = 0; let visualCount = 0; let interactiveCount = 0; let quizCount = 0; let questionCount = 0;
const counts = {};

CURRICULUM.filter((g) => PUBLISHED_GRADES.includes(g.grade)).forEach(({ grade, themes }) => {
  counts[grade] = { themes: themes.length, lessons: 0, quizzes: 0, questions: 0, visuals: 0 };
  const published = publishedThemes().filter((t) => t.grade === grade);
  themes.forEach((theme) => {
    const where = theme.slug;
    const data = published.find((t) => t.slug === theme.slug)?.data;
    if (!data) { err(where, 'theme file missing (or not listed in grades/g<N>/index.js)'); return; }
    LANGS.forEach((l) => {
      if (!nonEmpty(data.i18n?.[l]?.title) || !nonEmpty(data.i18n?.[l]?.description)) err(where, `course title/description missing in ${l}`);
    });
    textCheck(where, grade, data.i18n);
    // one lesson per subtopic, same order
    if (data.lessons.length !== theme.subtopics.length) err(where, `${theme.subtopics.length} subtopics but ${data.lessons.length} lessons`);
    theme.subtopics.forEach((sub, i) => {
      const lesson = data.lessons[i];
      const lw = sub.slug;
      if (!lesson) { err(lw, 'lesson missing'); return; }
      if (lesson.slug !== sub.slug) { err(lw, `lesson ${i} has slug ${lesson.slug}`); return; }
      lessonCount++; counts[grade].lessons++;
      const n = {};
      LANGS.forEach((l) => {
        const t = lesson[l];
        const w = `${lw} [${l}]`;
        if (!t) { err(w, 'language missing'); return; }
        if (!nonEmpty(t.title)) err(w, 'title');
        if (!Array.isArray(t.objectives) || t.objectives.length < 2 || t.objectives.length > 3 || !t.objectives.every(nonEmpty)) err(w, 'objectives must be 2–3');
        if (!nonEmpty(t.theory)) err(w, 'theory');
        if (!Array.isArray(t.keyPoints) || !t.keyPoints.length || !t.keyPoints.every(nonEmpty)) err(w, 'key rules');
        if (!Array.isArray(t.examples) || t.examples.length < 2 || !t.examples.every((e) => nonEmpty(e.example) && nonEmpty(e.solution))) err(w, 'needs ≥2 worked examples');
        if (!Array.isArray(t.commonMistakes) || t.commonMistakes.length < 1 || t.commonMistakes.length > 3
          || !t.commonMistakes.every((m) => nonEmpty(m.mistake) && nonEmpty(m.fix))) err(w, 'common mistakes must be 1–3');
        if (!Array.isArray(t.practice) || t.practice.length < 3 || t.practice.length > 5
          || !t.practice.every((p) => nonEmpty(p.problem) && nonEmpty(p.solution) && Array.isArray(p.steps) && p.steps.length && p.steps.every(nonEmpty))) err(w, 'practice must be 3–5 with solution and steps');
        n[l] = { ex: t.examples?.length, pr: t.practice?.length, km: t.keyPoints?.length, cm: t.commonMistakes?.length, ob: t.objectives?.length };
        textCheck(w, grade, t);
      });
      if (n.al && LANGS.some((l) => JSON.stringify(n[l]) !== JSON.stringify(n.al))) err(lw, `section sizes differ between languages ${JSON.stringify(n)}`);
      const visuals = [...(lesson.visuals || []), ...(lesson.exampleVisuals || []).filter(Boolean)];
      if (!visuals.length && !nonEmpty(lesson.noVisual)) err(lw, 'no visual (add one or give noVisual: reason)');
      visuals.forEach((v) => checkVisual(lw, v));
      textCheck(lw, grade, visuals.map((v) => v.alt));
      visualCount += visuals.length; counts[grade].visuals += visuals.length;
      Object.entries(lesson.practiceVisuals || {}).forEach(([i, v]) => {
        if (!(Number(i) < (n.al?.pr || 0))) err(lw, `practiceVisuals[${i}] has no practice problem`);
        checkVisual(`${lw} practice ${i}`, v); textCheck(lw, grade, v.alt); interactiveCount++;
      });
      checkAnswers(`${lw} examples`, lesson.answers?.examples, n.al?.ex);
      checkAnswers(`${lw} practice`, lesson.answers?.practice, n.al?.pr);
    });
    // quiz of the theme
    const quiz = quizSets.find((q) => q.theme === theme.slug);
    if (!quiz) { err(where, 'quiz missing'); return; }
    quizCount++; counts[grade].quizzes++;
    if (quiz.id !== `${theme.slug}-quiz` || quiz.grade !== grade || quiz.order !== theme.order) err(quiz.id, 'id/grade/order do not match the curriculum');
    const qs = quiz.questions || [];
    questionCount += qs.length; counts[grade].questions += qs.length;
    if (qs.length < 8 || qs.length > 10) err(quiz.id, `needs 8–10 questions, has ${qs.length}`);
    const diffs = new Set(qs.map((q) => q.difficulty));
    ['easy', 'medium', 'hard'].forEach((d) => { if (!diffs.has(d)) err(quiz.id, `no ${d} question`); });
    qs.forEach((q) => {
      const w = `${quiz.id} q${q.id}`;
      if (!['easy', 'medium', 'hard'].includes(q.difficulty)) err(w, 'difficulty must be easy/medium/hard');
      if (q.verify === undefined) err(w, "verify missing ('text' or [expr, expected])");
      if (q.visual) { checkVisual(w, q.visual); visualCount++; counts[grade].visuals++; }
      if (q.explainVisual) { checkVisual(`${w} explainVisual`, q.explainVisual); textCheck(w, grade, q.explainVisual.alt); interactiveCount++; }
      LANGS.forEach((l) => { if (!q[l]) err(w, `${l} missing`); });
      textCheck(w, grade, [q.al, q.en, q.de]);
    });
    textCheck(quiz.id, grade, quiz.i18n);
  });
});

// quiz files on disk must all be registered
const gradeQuizDir = path.join(root, 'src', 'content', 'quizzes', 'grades');
fs.readdirSync(gradeQuizDir).filter((f) => /^g\d+-.*\.js$/.test(f)).forEach((f) => {
  const set = loadSrc(`content/quizzes/grades/${f}`);
  if (PUBLISHED_GRADES.includes(set.grade) && !quizSets.some((q) => q.id === set.id)) err(f, 'quiz file not registered in quizzes/grades/index.js');
});

if (errors.length) { console.log(errors.join('\n')); console.log(`${errors.length} problem(s) in grade content`); process.exit(1); }
Object.entries(counts).forEach(([g, c]) => console.log(`  grade ${g}: ${c.themes} themes, ${c.lessons} lessons × 3 languages, ${c.quizzes} quizzes (${c.questions} questions), ${c.visuals} visuals`));
console.log(`OK grade content: ${lessonCount} lessons, ${quizCount} quizzes, ${questionCount} questions, ${visualCount} visuals in al/en/de, ${interactiveCount} "show graph" visuals`
  + ` (published grades: ${PUBLISHED_GRADES.join(', ') || 'none'})`);
