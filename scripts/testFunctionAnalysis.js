#!/usr/bin/env node
// Tests src/features/graph/functionAnalysis.js (offline graph analysis) with plain Node.
// Usage: node scripts/testFunctionAnalysis.js
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');

const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'src') + path.sep;

// Load the ES-module service files with Babel (only project files under src/)
const originalLoader = Module._extensions['.js'];
Module._extensions['.js'] = function load(m, file) {
  if (file.startsWith(srcDir)) {
    const { code } = babel.transformFileSync(file, {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
    });
    return m._compile(code, file);
  }
  return originalLoader(m, file);
};

const fa = require(path.join(root, 'src', 'features', 'graph', 'functionAnalysis.js'));
const gs = require(path.join(root, 'src', 'features', 'graph', 'graphService.js'));
const { placeLabels } = require(path.join(root, 'src', 'features', 'graph', 'labelLayout.js'));

let passed = 0;
let failed = 0;
const TOL = 1e-6;

function check(name, cond, info) {
  if (cond) {
    passed++;
    console.log(`  ok   ${name}`);
  } else {
    failed++;
    console.log(`  FAIL ${name}${info !== undefined ? ` — got ${JSON.stringify(info)}` : ''}`);
  }
}

const close = (a, b, tol = TOL) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const xsOf = (pts) => pts.map((p) => p.x);
const sameXs = (pts, expected) => pts.length === expected.length && expected.every((x, i) => close(pts[i].x, x));
const hasPoint = (pts, x, y) => pts.some((p) => close(p.x, x) && close(p.y, y));

function section(title, fn) {
  console.log(`\n${title}`);
  fn();
}

section('x^2 - 4', () => {
  const a = fa.analyzeFunction('x^2 - 4');
  check('ok', a.ok, a);
  check('roots ±2', sameXs(a.roots, [-2, 2]), xsOf(a.roots));
  check('min (0, −4)', a.minima.length === 1 && hasPoint(a.minima, 0, -4), a.minima);
  check('no maxima', a.maxima.length === 0, a.maxima);
  check('y-intercept −4', a.yIntercept && a.yIntercept.y === -4, a.yIntercept);
  check('domain ℝ', a.domain.allReal, a.domain);
  check('decreasing (−∞, 0)', a.decreasing.length === 1 && a.decreasing[0].from === -Infinity && a.decreasing[0].to === 0, a.decreasing);
  check('increasing (0, ∞)', a.increasing.length === 1 && a.increasing[0].from === 0 && a.increasing[0].to === Infinity, a.increasing);
  check('no inflection', a.inflections.length === 0, a.inflections);
  check('viewport contains roots and min', a.viewport.xMin < -2 && a.viewport.xMax > 2 && a.viewport.yMin < -4 && a.viewport.yMax > 0, a.viewport);
  check('normalised input "y = x² − 4"', fa.analyzeFunction('y = x² − 4').roots.length === 2);
});

section('x^3 - 3x', () => {
  const a = fa.analyzeFunction('x^3 - 3x');
  check('max (−1, 2)', a.maxima.length === 1 && hasPoint(a.maxima, -1, 2), a.maxima);
  check('min (1, −2)', a.minima.length === 1 && hasPoint(a.minima, 1, -2), a.minima);
  check('inflection (0, 0)', a.inflections.length === 1 && hasPoint(a.inflections, 0, 0), a.inflections);
  check('roots −√3, 0, √3', sameXs(a.roots, [-Math.sqrt(3), 0, Math.sqrt(3)]), xsOf(a.roots));
  check('increasing twice, decreasing (−1, 1)', a.increasing.length === 2 && a.decreasing.length === 1 && a.decreasing[0].from === -1 && a.decreasing[0].to === 1, [a.increasing, a.decreasing]);
});

section('1/x', () => {
  const a = fa.analyzeFunction('1/x');
  check('vertical asymptote x = 0', a.verticalAsymptotes.length === 1 && a.verticalAsymptotes[0] === 0, a.verticalAsymptotes);
  check('no roots', a.roots.length === 0, a.roots);
  check('no extrema', a.maxima.length === 0 && a.minima.length === 0, [a.maxima, a.minima]);
  check('no inflection', a.inflections.length === 0, a.inflections);
  check('no y-intercept', a.yIntercept === null, a.yIntercept);
  check('horizontal asymptote y = 0 both sides', a.horizontalAsymptotes.left === 0 && a.horizontalAsymptotes.right === 0, a.horizontalAsymptotes);
  check('domain x ≠ 0', !a.domain.allReal && a.domain.excluded.length === 1 && a.domain.excluded[0] === 0, a.domain);
  check('decreasing on two intervals', a.decreasing.length === 2 && a.increasing.length === 0, a.decreasing);
});

section('sin x on [−2π, 2π]', () => {
  const a = fa.analyzeFunction('sin(x)', { xMin: -2 * Math.PI, xMax: 2 * Math.PI });
  const expected = [-2, -1, 0, 1, 2].map((k) => k * Math.PI);
  // Window ends ±2π may or may not count; interior multiples −π, 0, π must be there
  const interior = a.roots.filter((r) => r.x > -2 * Math.PI + 1e-6 && r.x < 2 * Math.PI - 1e-6);
  check('roots at −π, 0, π', sameXs(interior, [-Math.PI, 0, Math.PI]), xsOf(a.roots));
  check('all roots are multiples of π', a.roots.every((r) => expected.some((e) => close(r.x, e))), xsOf(a.roots));
  check('maxima at −3π/2, π/2', sameXs(a.maxima, [-1.5 * Math.PI, 0.5 * Math.PI]) && a.maxima.every((p) => p.y === 1), a.maxima);
  check('minima at −π/2, 3π/2', sameXs(a.minima, [-0.5 * Math.PI, 1.5 * Math.PI]) && a.minima.every((p) => p.y === -1), a.minima);
  check('no vertical asymptotes', a.verticalAsymptotes.length === 0, a.verticalAsymptotes);
  check('no horizontal asymptote', a.horizontalAsymptotes.left === null && a.horizontalAsymptotes.right === null, a.horizontalAsymptotes);
  check('π formatting', gs.formatNumber(Math.PI / 2, 'en', { pi: true }) === 'π/2' && gs.formatNumber(-Math.PI, 'al', { pi: true }) === '−π');
  const d = fa.analyzeFunction('sin(x)');
  check('default trig window [−2π, 2π]', close(d.window.xMin, -2 * Math.PI) && close(d.window.xMax, 2 * Math.PI), d.window);
});

section('(x−1)^2 (x+2)', () => {
  const a = fa.analyzeFunction('(x-1)^2(x+2)');
  check('roots −2 (crossing), 1 (touching)', sameXs(a.roots, [-2, 1]) && !a.roots[0].touch && a.roots[1].touch, a.roots);
  check('max (−1, 4)', hasPoint(a.maxima, -1, 4), a.maxima);
  check('min (1, 0)', hasPoint(a.minima, 1, 0), a.minima);
  check('inflection (0, 2)', hasPoint(a.inflections, 0, 2), a.inflections);
  check('y-intercept 2', a.yIntercept && a.yIntercept.y === 2, a.yIntercept);
});

section('sqrt(x)', () => {
  const a = fa.analyzeFunction('sqrt(x)');
  const iv = a.domain.intervals;
  check('domain [0, ∞)', iv.length === 1 && iv[0].from === 0 && iv[0].fromClosed && iv[0].to === Infinity, iv);
  check('root at 0', sameXs(a.roots, [0]), a.roots);
  check('no vertical asymptote', a.verticalAsymptotes.length === 0, a.verticalAsymptotes);
  check('increasing', a.increasing.length === 1 && a.decreasing.length === 0, a.increasing);
  check('viewport mostly x ≥ 0', a.viewport.xMin > -2 && a.viewport.xMin < 0, a.viewport);
  const b = fa.analyzeFunction('√x');
  check('√x accepted', b.ok && b.domain.intervals[0].from === 0, b);
});

section('e^x', () => {
  const a = fa.analyzeFunction('e^x');
  check('no roots', a.roots.length === 0, a.roots);
  check('y-intercept (0, 1)', a.yIntercept && a.yIntercept.y === 1, a.yIntercept);
  check('horizontal asymptote y = 0 as x → −∞ only', a.horizontalAsymptotes.left === 0 && a.horizontalAsymptotes.right === null, a.horizontalAsymptotes);
  check('increasing on ℝ', a.increasing.length === 1 && a.increasing[0].from === -Infinity && a.increasing[0].to === Infinity, a.increasing);
});

section('x^2 and 2x + 3 together', () => {
  const r = fa.analyzeFunctions(['x^2', '2x+3']);
  check('both ok', r.functions.every((f) => f.ok));
  const pts = r.intersections[0] ? r.intersections[0].points : [];
  check('intersections (−1, 1), (3, 9)', pts.length === 2 && hasPoint(pts, -1, 1) && hasPoint(pts, 3, 9), pts);
  check('viewport contains both intersections', r.viewport.xMin < -1 && r.viewport.xMax > 3 && r.viewport.yMax > 9, r.viewport);
  const same = fa.analyzeFunctions(['2x', 'x+x']);
  check('identical functions flagged', same.intersections[0].identical === true, same.intersections[0]);
  const three = fa.analyzeFunctions(['x', '-x', 'x^2']);
  check('three functions → three pairs', three.intersections.length === 3);
});

section('more cases', () => {
  const tan = fa.analyzeFunction('tan(x)');
  check('tan: asymptotes at ±π/2, ±3π/2', sameXs(tan.verticalAsymptotes.map((x) => ({ x })), [-1.5, -0.5, 0.5, 1.5].map((k) => k * Math.PI)), tan.verticalAsymptotes);
  const ln = fa.analyzeFunction('ln(x)');
  check('ln: domain x > 0, asymptote x = 0, root 1', ln.domain.intervals[0].from === 0 && !ln.domain.intervals[0].fromClosed && ln.verticalAsymptotes[0] === 0 && sameXs(ln.roots, [1]), [ln.domain, ln.verticalAsymptotes, ln.roots]);
  const inv2 = fa.analyzeFunction('1/x^2');
  check('1/x²: asymptote x = 0, no extremum', inv2.verticalAsymptotes.length === 1 && inv2.maxima.length === 0 && inv2.minima.length === 0, inv2);
  const abs = fa.analyzeFunction('abs(x) - 1');
  check('|x| − 1: min (0, −1), roots ±1', hasPoint(abs.minima, 0, -1) && sameXs(abs.roots, [-1, 1]), [abs.minima, abs.roots]);
  const hole = fa.analyzeFunction('(x^2-1)/(x-1)');
  check('(x²−1)/(x−1): hole at 1, no asymptote', hole.domain.excluded.includes(1) && hole.verticalAsymptotes.length === 0, [hole.domain, hole.verticalAsymptotes]);
  const rat = fa.analyzeFunction('x/(x+1)');
  check('x/(x+1): HA y = 1, VA x = −1', rat.horizontalAsymptotes.right === 1 && rat.horizontalAsymptotes.left === 1 && rat.verticalAsymptotes[0] === -1, [rat.horizontalAsymptotes, rat.verticalAsymptotes]);
  const c = fa.analyzeFunction('3');
  check('constant 3: no extrema, no intervals', c.ok && c.constant && c.maxima.length === 0 && c.increasing.length === 0, c);
  check('decimal comma 0,5x', fa.analyzeFunction('0,5x - 1').roots.length === 1 && close(fa.analyzeFunction('0,5x - 1').roots[0].x, 2));
});

section('safety & errors', () => {
  check('empty', fa.analyzeFunction('').error === 'empty');
  check('syntax error', fa.analyzeFunction('x^^2').error === 'syntax', fa.analyzeFunction('x^^2'));
  check('unknown symbol y', fa.analyzeFunction('x + y').error === 'unknownSymbol');
  check('import() rejected', !fa.analyzeFunction('import({}, {})').ok);
  check('assignment rejected', !fa.analyzeFunction('a = 5').ok);
  check('string constant rejected', !fa.analyzeFunction('"abc"').ok);
  check('function definition rejected', !fa.analyzeFunction('g(t) = t').ok);
  check('evaluate() rejected', !fa.analyzeFunction('evaluate("1+1")').ok);
  check('undefined everywhere', fa.analyzeFunction('sqrt(-1 - x^2)').error === 'undefinedEverywhere');
  check('isPlottableFunction still works', gs.isPlottableFunction('y = 2x + 3') && !gs.isPlottableFunction('2x+5=13'));
  check('normalizeFunction still works', gs.normalizeFunction('f(x) = 3x^2') === '3*x^2');
});

section('formatting', () => {
  check('al decimal comma', gs.formatNumber(-1.5, 'al') === '−1,5');
  check('en decimal point', gs.formatNumber(1.41421356, 'en') === '1.414');
  check('de point', gs.formatPoint({ x: 1.5, y: -2 }, 'de') === '(1,5; −2)');
  check('en point', gs.formatPoint({ x: 1.5, y: -2 }, 'en') === '(1.5, −2)');
  check('interval', gs.formatInterval({ from: -Infinity, to: 0, fromClosed: false, toClosed: true }, 'al') === '(−∞; 0]');
});

section('logarithm convention (school: log = base 10, ln = natural)', () => {
  check('log(x) → log10', gs.toMathExpression('log(x)') === 'log10(x)', gs.toMathExpression('log(x)'));
  check('ln(x) → log', gs.toMathExpression('ln(x)') === 'log(x)', gs.toMathExpression('ln(x)'));
  check('log10 and lg stay base 10', gs.toMathExpression('log10(x)+lg(x)') === 'log10(x)+log10(x)', gs.toMathExpression('log10(x)+lg(x)'));
  const r = fa.analyzeFunction(gs.toMathExpression('log(x)'));
  check('root of log(x) is 1', sameXs(r.roots, [1]), xsOf(r.roots));
});

section('performance', () => {
  const t0 = Date.now();
  fa.analyzeFunctions(['x^3 - 3x', 'sin(x)', 'x/(x^2-4)']);
  const ms = Date.now() - t0;
  check(`3 functions analysed in ${ms} ms (< 3000 ms on Node)`, ms < 3000);
});

section('point labels never overlap', () => {
  const W = 360; const H = 300;
  const boxesOverlap = (a, b) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
  const run = (name, pts) => {
    const spots = placeLabels(pts, W, H);
    const boxes = spots.filter(Boolean).map((s) => s.box);
    const clash = boxes.some((a, i) => boxes.some((b, j) => j > i && boxesOverlap(a, b)));
    const inside = boxes.every((b) => b.x >= 0 && b.y >= 0 && b.x + b.w <= W && b.y + b.h <= H);
    const onPoint = spots.some((s, i) => s && pts.some((p) => boxesOverlap(s.box, { x: p.X - 6, y: p.Y - 6, w: 12, h: 12 })));
    check(`${name}: no overlap, inside, not on a point (${boxes.length}/${pts.length} labelled)`, !clash && inside && !onPoint, spots);
    return spots;
  };
  // vertex right next to the y-intercept (the case seen in the app)
  const s1 = run('vertex next to y-intercept', [{ X: 182, Y: 120, text: '(0,083; 1,042)' }, { X: 180, Y: 124, text: '(0; 1)' }, { X: 150, Y: 200, text: '(−0,333; 0)' }, { X: 215, Y: 200, text: '(0,5; 0)' }]);
  check('close pair: both get a label', s1[0] && s1[1]);
  run('five points in a cluster', [0, 1, 2, 3, 4].map((k) => ({ X: 180 + k * 6, Y: 150 + (k % 2) * 5, text: `(${k}; ${k})` })));
  run('points at the edges', [{ X: 2, Y: 2, text: '(−10; 10)' }, { X: W - 2, Y: H - 2, text: '(10; −10)' }, { X: W - 3, Y: 3, text: '(10; 10)' }]);
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
