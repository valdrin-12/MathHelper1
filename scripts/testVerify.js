#!/usr/bin/env node
// Tests for the mathjs answer verifier (src/features/solver/verifyAnswer.js).
// Usage: node scripts/testVerify.js [--verbose] [filter]
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');

const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'src') + path.sep;
const verbose = process.argv.includes('--verbose');
const filter = process.argv.slice(2).find((a) => !a.startsWith('--'));

// Load the ES-module service files with Babel (only files under src/)
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

const { verifyAnswer } = require(path.join(root, 'src', 'features', 'solver', 'verifyAnswer.js'));

// [problem, answer, expected status, expected code (mismatch only)]
const V = 'verified', M = 'mismatch', U = 'unknown';
const CASES = [
  // ── one-variable equations
  ['2x + 3 = 11', 'x = 4', V],
  ['2x + 3 = 11', 'x = 5', M, 'substitution'],
  ['x^2 - 5x + 6 = 0', 'x = 2, x = 3', V],
  ['x^2 - 5x + 6 = 0', 'x₁ = 2; x₂ = 3', V],
  ['x^2 - 5x + 6 = 0', 'x = 2 ose x = 3', V],
  ['x^2 - 5x + 6 = 0', 'x = 2 or x = 3', V],
  ['x^2 - 5x + 6 = 0', 'x = 2 oder x = 3', V],
  ['x^2 - 5x + 6 = 0', 'x = 2', M, 'missingRoots'],
  ['x^2 - 5x + 6 = 0', 'x = 2, x = 4', M, 'substitution'],
  ['x² − 5x + 6 = 0', 'x = 2, x = 3', V],
  ['x^2 = 2', 'x = ±√2', V],
  ['x^2 = 2', 'x ≈ 1.414, x ≈ −1.414', V],
  ['x^2 = 2', 'x = √2 ≈ 1.414 or x = −√2 ≈ −1.414', V],
  ['x^2 = 2', 'x = 1.5, x = -1.5', M, 'substitution'],
  ['x^2 = 9', '\\(x = \\pm 3\\)', V],
  ['x + 1 = 4', '**x = 3**', V],
  ['x^2 + 1 = 0', 'no real solutions', V],
  ['x^2 + 1 = 0', 'Nuk ka zgjidhje reale', V],
  ['x^2 + 1 = 0', 'keine reelle Lösung', V],
  ['x^2 + 1 = 0', 'x = 1', M, 'substitution'],
  ['x^2 + 1 = 0', 'x = i, x = -i', V],
  ['x^2 - 4x + 5 = 0', 'x = 2 ± i', V],
  ['x^2 - 4 = 0', 'No solution', M, 'noSolution'],
  ['(x-1)(x+2) = 0', 'x = 1, x = -2', V],
  ['x^3 - x = 0', 'x = 0, x = 1, x = -1', V],
  ['x^3 - x = 0', 'x = 0, x = 1', M, 'missingRoots'],
  ['1/x = 2', 'x = 1/2', V],
  ['1/x = 2', 'x = 2', M, 'substitution'],
  ['sqrt(x+2) = x', 'x = 2', V],
  ['sqrt(x+2) = x', 'x = 2, x = -1', M, 'substitution'],
  ['2^x = 8', 'x = 3', V],
  ['x^2 - 3x + 1 = 0', 'x = (3 ± √5)/2', V],
  ['x^2 - 3x + 1 = 0', 'x = (3 ± √7)/2', M, 'substitution'],
  ['2x + 3 = 2x + 5', 'Pa zgjidhje', V],
  ['2x + 3 = 2x + 5', 'x = 1', M, 'substitution'],
  ['2(x+1) = 2x + 2', 'infinitely many solutions', V],
  ['2(x+1) = 2x + 3', 'infinitely many solutions', M, 'generic'],
  ['Zgjidh ekuacionin 2x + 3 = 11', 'Zgjidhja është x = 4.', V],
  ['Löse 3x - 6 = 0', 'x = 2', V],
  ['0,5x = 2', 'x = 4', V],
  ['3x = 10', 'x ≈ 3.33', V],
  ['3x = 10', 'x ≈ 3.4', M, 'substitution'],
  ['3x = 10', 'x = 10/3', V],
  ['x(x - 3) = 0', 'x = 0 dhe x = 3', V],
  ['|x| = 3', 'x = 3, x = -3', V],
  ['|x| = 3', 'x = 3', M, 'missingRoots'],
  ['sin(x) = 0', 'x = 0', V],
  ['x^2 = 4', 'x ∈ {-2, 2}', V],
  ['x^2 = 4', '{−2, 2}', V],
  // ── systems
  ['x + y = 5; x - y = 1', 'x = 3, y = 2', V],
  ['x + y = 5; x - y = 1', 'x = 2, y = 3', M, 'systemSubstitution'],
  ['2x + y = 7\nx - y = 2', '(3, 1)', V],
  ['x + y = 1, x - y = 0', 'x = 0,5; y = 0,5', V],
  ['x + y = 1; x - y = 0', 'x = 0.5 and y = 0.5', V],
  ['x + 2y = 4; 3x - y = 5', 'x = 2, y = 1', V],
  ['x + 2y = 4; 3x - y = 5', 'x = 2.0, y = 1.1', M, 'systemSubstitution'],
  // ── inequalities
  ['2x + 1 > 7', 'x > 3', V],
  ['2x + 1 > 7', 'x > 4', M, 'inequality'],
  ['2x + 1 > 7', 'x ≥ 3', M, 'inequality'],
  ['2x + 1 > 7', '(3, ∞)', V],
  ['-2x + 1 > 7', 'x < -3', V],
  ['-2x + 1 > 7', 'x > -3', M, 'inequality'],
  ['x^2 - 4 < 0', '-2 < x < 2', V],
  ['x^2 - 4 < 0', '(−2, 2)', V],
  ['x^2 - 4 < 0', 'x ∈ (-2, 2]', M, 'inequality'],
  ['x^2 - 4 > 0', 'x < -2 or x > 2', V],
  ['x^2 - 4 > 0', '(−∞, −2) ∪ (2, ∞)', V],
  ['x^2 - 4 > 0', 'x > 2', M, 'inequality'],
  ['x^2 + 1 < 0', 'no solution', V],
  ['x <= 5', 'x ≤ 5', V],
  ['x ≤ 5', '(−∞, 5]', V],
  ['3x - 2 >= 10', 'x ≥ 4', V],
  // ── derivatives
  ['derivative of x^3 + 2x', "f'(x) = 3x^2 + 2", V],
  ['derivative of x^3 + 2x', 'f′(x) = 3x²', M, 'derivative'],
  ['d/dx sin(x)', 'cos(x)', V],
  ['d/dx sin(x)', '-cos(x)', M, 'derivative'],
  ['Derivati i x^2 sin(x)', '2x sin(x) + x² cos(x)', V],
  ['derivative of ln(x)', '1/x', V],
  ['f(x) = e^(2x), f\'(x) = ?', '2e^(2x)', V],
  ['Ableitung von x^4', '4x^3', V],
  ['derivative of x^2', 'See analysis below', U],
  // ── integrals
  ['integral of x^2', 'x^3/3 + C', V],
  ['integral of x^2', 'x^3 + C', M, 'integral'],
  ['∫ 2x dx', 'x² + C', V],
  ['∫ 1/x dx', 'ln|x| + C', V],
  ['integral of cos(x) from 0 to pi', '0', V],
  ['integral of cos(x) from 0 to pi', '1', M, 'value'],
  ['integral of x from 0 to 2', '2', V],
  ['integral of x from 0 to 2', '3', M, 'value'],
  ['∫_0^1 x^2 dx', '1/3 ≈ 0.333', V],
  // ── arithmetic
  ['23 + 15', '38', V],
  ['23 + 15', '37', M, 'value'],
  ['12 * (3 + 4)', '84', V],
  ['15% of 80', '12', V],
  ['sqrt(2)', '≈ 1.414', V],
  ['sqrt(2)', '1.5', M, 'value'],
  ['1/3 + 1/6', '1/2', V],
  ['1/3 + 1/6', '2/3', M, 'value'],
  ['2^10', '1024', V],
  ['7 ÷ 2', '3,5', V],
  ['100 - 37 = ?', '63', V],
  ['6 × 7', 'The result is 42', V],
  ['3/4 ÷ 2/5', '15/8', V],
  ['3/4 ÷ 2/5', '1/2', M, 'value'],
  ['x^2 - 4x + 1 = 0', 'x₁,₂ = 2 ± √3', V],
  ['x^2 - 4x + 1 = 0', 'x₁,₂ = 2 ± √5', M, 'substitution'],
  ['-2x + 1 > 7', 'x < −3  (x ∈ (−∞, −3))', V],
  ['x/2 >= 1 - x', 'x ≥ 2/3  (x ∈ [2/3, +∞))', V],
  // ── factor / expand / simplify
  ['factor x^2 - 9', '(x - 3)(x + 3)', V],
  ['factor x^2 - 9', '(x - 3)(x + 2)', M, 'equivalence'],
  ['faktorizo x²−9', '(x − 3)(x + 3)', V],
  ['expand (x+3)^2', 'x² + 6x + 9', V],
  ['expand (x+3)^2', 'x² + 9', M, 'equivalence'],
  ['ausmultiplizieren (a+b)^2', 'a² + a·b + b·a + b²', V],
  ['thjeshto (x^2+5x+6)/(x+2)', 'x + 3', V],
  ['simplify (x^2+5x+6)/(x+2)', 'x + 2', M, 'equivalence'],
  ['factor 84', '84 = 2² · 3 · 7', V],
  ['factor 84', '84 = 2² · 3 · 5', M, 'equivalence'],
  // ── not checkable: say nothing
  ['Ari has 5 apples and eats 2', '3', U],
  ['Prove that sqrt(2) is irrational', 'Assume the opposite…', U],
  ['x + y = 5', 'x = 1', U],
  ['2x + 3 = 11', 'See analysis below', U],
  ['2x + 3 = 11', '', U],
  ['', 'x = 4', U],
  ['sin(x) = 1/2', 'x = 30° + 360°k', U],
  ['x^2 = 4', 'Error parsing response', U],
];

let pass = 0;
const fails = [];
let slowest = { ms: 0, name: '' };
for (const [problem, answer, wantStatus, wantCode] of CASES) {
  const name = `${JSON.stringify(problem)} / ${JSON.stringify(answer)}`;
  if (filter && !name.includes(filter)) continue;
  const t0 = Date.now();
  const r = verifyAnswer({ problem, answer, lang: 'en' });
  const ms = Date.now() - t0;
  if (ms > slowest.ms) slowest = { ms, name };
  const ok = r.status === wantStatus && (!wantCode || r.code === wantCode);
  if (ok) pass++; else fails.push(`${name}\n      expected ${wantStatus}${wantCode ? '/' + wantCode : ''}, got ${JSON.stringify(r)}`);
  if (verbose || !ok) console.log(`${ok ? '  ok ' : ' FAIL'}  ${name}  → ${r.status}${r.code ? '/' + r.code : ''} ${r.params ? JSON.stringify(r.params) : ''} (${ms} ms)`);
}

console.log(`\n${pass}/${pass + fails.length} passed · slowest ${slowest.ms} ms`);
if (fails.length) {
  console.log('\nFailures:\n  ' + fails.join('\n  '));
  process.exit(1);
}
