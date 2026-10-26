#!/usr/bin/env node
// Tests for the offline step-by-step solver (src/features/solver: engine/ + mathCalculatorService.js).
// Usage: node scripts/testSolver.js [--verbose] [filter]
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

const service = require(path.join(root, 'src', 'features', 'solver', 'mathCalculatorService.js'));
const { missingKeys } = require(path.join(root, 'src', 'features', 'solver', 'engine', 'i18n.js'));
const { solveMathProblem, solveWithTool } = service;

const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps * (1 + Math.abs(b));
const sameSet = (a, b) => a.length === b.length && a.every((x, i) => near(x, b[i]));
const normalizeText = (s) => String(s).replace(/\s+/g, '');

const cases = [];
const text = (name, input, lang, check) => cases.push({ name, run: () => solveMathProblem(input, lang), check });
const tool = (name, t, input, lang, check) => cases.push({ name, run: () => solveWithTool(t, input, lang), check });

// Generic checks
const answerIs = (expected) => (r) => r.success && normalizeText(r.answer) === normalizeText(expected) || `answer "${r.answer}" ≠ "${expected}"`;
const answerHas = (...parts) => (r) => (r.success && parts.every((p) => normalizeText(r.answer).includes(normalizeText(p)))) || `answer "${r.answer}" lacks ${parts.join(' / ')}`;
const typeIs = (type, inner) => (r) => (!r.success ? `failed: ${r.reason}` : r.type !== type ? `type ${r.type} ≠ ${type}` : inner ? inner(r) : true);
const fails = () => (r) => !r.success || `expected failure, got ${r.type}: ${r.answer}`;
const numericExtra = (key, value) => (r) => (r.success && near(Number(r.extras?.[key]), value)) || `extras.${key} = ${r.extras?.[key]} ≠ ${value}`;
const evalEq = (expr, expected, v = 'x') => {
  const { create, all } = require('mathjs');
  const m = create(all);
  return [0.3, 1.7, 2.9].every((x) => near(m.evaluate(expr, { [v]: x }), m.evaluate(expected, { [v]: x })));
};

// ---- historical behaviour -----------------------------------------------------------------------
text('legacy 2^3+1', '2^3+1', 'en', typeIs('arithmetic', answerIs('9')));
text('legacy sin(30°)', 'sin(30°)', 'en', answerIs('0.5'));
text('legacy sin(30°) al comma', 'sin(30°)', 'al', answerIs('0,5'));
text('legacy cos(60) degrees', 'cos(60)', 'en', answerIs('0.5'));
text('legacy 5−3', '5−3', 'en', answerIs('2'));
text('legacy 2×3÷4', '2×3÷4', 'en', answerIs('3/2'));
text('legacy √16+3²', '√16 + 3²', 'de', answerIs('13'));
text('word problem → AI', 'Ana has 5 apples and gets 3 more', 'en', fails());
text('unsupported comparison', '2 == 2', 'en', fails());
text('order of operations 2+3·4', '2+3*4', 'al', (r) => (answerIs('14')(r) === true && r.steps.length === 3) || `steps ${JSON.stringify(r.steps)}`);

// ---- fractions -----------------------------------------------------------------------------
text('fraction 1/3+1/6', '1/3+1/6', 'en', typeIs('fraction', answerIs('1/2')));
text('fraction steps mention LCD', '1/3 + 1/6', 'al', (r) => (r.success && r.steps.some((s) => s.includes('emërues të përbashkët 6'))) || r.steps.join(' | '));
text('fraction 2/3·3/4', '2/3 * 3/4', 'en', answerIs('1/2'));
text('fraction division with ÷', '3/4 ÷ 2/5', 'en', answerIs('15/8'));
tool('tool fraction 0.5 + 1/3', 'fraction', { expression: '0.5 + 1/3' }, 'en', answerIs('5/6'));
tool('tool fraction simplify 12/18', 'fraction', { expression: '12/18' }, 'de', answerIs('2/3'));

// ---- percent -------------------------------------------------------------------------------
text('15% of 80', '15% of 80', 'en', typeIs('percent', answerIs('12')));
text('15% e 80 (al)', '15% e 80', 'al', answerIs('12'));
text('20% von 50 (de)', '20% von 50', 'de', answerIs('10'));
tool('percent change 50→60', 'percent', { kind: 'change', a: 50, b: 60 }, 'en', answerIs('+20%'));
tool('what percent 12 of 80', 'percent', { kind: 'whatPercent', a: 12, b: 80 }, 'en', answerIs('15%'));
text('what percent text', '12 is what percent of 80?', 'en', answerIs('15%'));

// ---- linear equations ----------------------------------------------------------------------
text('2x+5=13', '2x+5=13', 'al', typeIs('linear', answerIs('x = 4')));
text('2x+5=13 steps', '2x+5=13', 'al', (r) => (r.steps.some((s) => s.startsWith('Zbresim 5 nga të dyja anët')) && r.steps.some((s) => s.startsWith('Pjesëtojmë të dyja anët me 2')) && r.steps.some((s) => s.includes('✓'))) || r.steps.join(' | '));
text('3(x−2) = x+4', '3(x-2) = x + 4', 'en', answerIs('x = 5'));
text('x/2 + 1/3 = 1', 'x/2 + 1/3 = 1', 'en', answerIs('x = 4/3'));
text('5 = 2x + 1 (swap)', '5 = 2x + 1', 'de', answerIs('x = 2'));
text('linear no solution', 'x + 1 = x + 2', 'en', (r) => (r.success && r.extras.status === 'none') || r.answer);
text('linear infinitely many', '2(x+1) = 2x + 2', 'en', (r) => (r.success && r.extras.status === 'all') || r.answer);
text('decimal comma 0,5x = 2 (al)', '0,5x = 2', 'al', answerIs('x = 4'));
text('solve prefix "Zgjidh"', 'Zgjidh 3x − 7 = 11', 'al', answerIs('x = 6'));

// ---- quadratic -----------------------------------------------------------------------------
text('x²−5x+6=0', 'x²−5x+6=0', 'en', typeIs('quadratic', (r) => sameSet(r.extras.roots, [2, 3]) || JSON.stringify(r.extras)));
text('x²−5x+6=0 factored', 'x^2-5x+6=0', 'al', (r) => (r.extras.factored === '(x − 2)(x − 3)' && r.extras.vertex.x === 2.5) || JSON.stringify(r.extras));
text('x²+4x+5=0 no real roots', 'x^2+4x+5=0', 'en', typeIs('quadratic', (r) => (r.extras.rootCount === 0 && r.answer === 'No real roots' && /−2 ± i/.test(r.extras.complexRoots)) || JSON.stringify(r)));
text('x²−4x+1=0 surd', 'x^2-4x+1=0', 'en', typeIs('quadratic', (r) => (r.extras.rootsExact[0] === '2 − √3' && r.extras.rootsExact[1] === '2 + √3' && r.answer.includes('2 ± √3')) || JSON.stringify(r.extras)));
text('x²−6x+9=0 double', 'x^2 - 6x + 9 = 0', 'de', (r) => (r.extras.rootCount === 1 && r.answer === 'x = 3') || r.answer);
text('2x² = 8 (move/divide)', '2x^2 = 8', 'en', (r) => sameSet(r.extras.roots, [-2, 2]) || JSON.stringify(r.extras));
text('x² − x − 1 = 0 golden ratio', 'x^2 - x - 1 = 0', 'en', (r) => (r.answer.includes('(1 ± √5)/2') && near(r.extras.roots[1], 1.6180339887)) || r.answer);
tool('tool quadratic a=2 b=−3 c=1', 'quadratic', { a: 2, b: -3, c: 1 }, 'en', (r) => (sameSet(r.extras.roots, [0.5, 1]) && r.extras.factored === '(2x − 1)(x − 1)') || JSON.stringify(r.extras));
tool('tool quadratic a=0 → linear', 'quadratic', { a: 0, b: 2, c: -4 }, 'en', answerIs('x = 2'));
text('quadratic al steps D', 'x^2-5x+6=0', 'al', (r) => r.steps.some((s) => s.startsWith('Formula e diskriminantit D = b² − 4ac')) || r.steps.join(' | '));

// ---- higher degree -------------------------------------------------------------------------
text('x³−6x²+11x−6=0', 'x^3-6x^2+11x-6=0', 'en', typeIs('polynomial', (r) => sameSet(r.extras.roots, [1, 2, 3]) || JSON.stringify(r.extras)));
text('x³ − 2x = 0', 'x^3 - 2x = 0', 'en', (r) => (r.success && sameSet(r.extras.roots, [-Math.SQRT2, 0, Math.SQRT2])) || JSON.stringify(r));

// ---- inequalities --------------------------------------------------------------------------
text('−2x+1>7', '-2x+1>7', 'en', typeIs('inequality', (r) => (r.extras.inequality === 'x < −3' && r.extras.interval === '(−∞, −3)') || JSON.stringify(r.extras)));
text('−2x+1>7 flip step', '−2x+1>7', 'al', (r) => r.steps.some((s) => s.includes('shenja > kthehet në <')) || r.steps.join(' | '));
text('3x − 4 ≤ 5 (al interval)', '3x − 4 ≤ 5', 'al', (r) => (r.extras.interval === '(−∞; 3]') || r.extras.interval);
text('x/2 ≥ 1 − x', 'x/2 >= 1 - x', 'en', (r) => (r.extras.inequality === 'x ≥ 2/3' && r.extras.interval === '[2/3, +∞)') || JSON.stringify(r.extras));
tool('tool inequality double', 'inequality', { expression: '1 < 2x + 3 < 7' }, 'en', (r) => (r.extras.interval === '(−1, 2)') || JSON.stringify(r));
tool('tool inequality de', 'inequality', { expression: '5 - x < 2' }, 'de', (r) => (r.extras.inequality === 'x > 3') || JSON.stringify(r.extras));

// ---- systems -------------------------------------------------------------------------------
text('system 2x+y=5; x−y=1', '2x+y=5; x-y=1', 'en', typeIs('system', (r) => (r.extras.solution.x === 2 && r.extras.solution.y === 1) || JSON.stringify(r.extras)));
text('system with commas', '2x+3y=12, 4x-y=10', 'de', (r) => (near(r.extras.solution.x, 3) && near(r.extras.solution.y, 2)) || JSON.stringify(r));
text('system newline elimination', '3x + 2y = 16\n5x - 3y = 14', 'al', (r) => (r.extras.solution.x === 4 && r.extras.solution.y === 2 && r.steps.some((s) => s.startsWith('Metoda e mbledhjes'))) || JSON.stringify(r));
tool('tool system 3×3', 'system', { equations: ['x + y + z = 6', '2x - y + z = 3', 'x + 2y - z = 2'] }, 'en', (r) => (r.extras.point.join() === '1,2,3') || JSON.stringify(r));
tool('tool system no solution', 'system', { equations: ['x + y = 2', '2x + 2y = 5'] }, 'en', (r) => (r.success && r.extras.status === 'none') || JSON.stringify(r));

// ---- derivatives ---------------------------------------------------------------------------
text('d/dx x^3+2x', 'd/dx x^3+2x', 'en', typeIs('derivative', answerIs("f′(x) = 3x² + 2")));
text('d/dx x³·sin x', 'd/dx x^3*sin(x)', 'en', typeIs('derivative', (r) => (evalEq(r.extras.expression, '3x^2*sin(x)+x^3*cos(x)') && r.steps.some((s) => s.startsWith('Product rule'))) || JSON.stringify(r)));
text('derivati i sin(x^2) (al chain)', 'derivati i sin(x^2)', 'al', (r) => (r.success && evalEq(r.extras.expression, '2x*cos(x^2)') && r.steps.some((s) => s.startsWith('Rregulla e zinxhirit'))) || JSON.stringify(r));
text('Ableitung von e^(2x) (de)', 'Ableitung von e^(2x)', 'de', (r) => (r.success && evalEq(r.extras.expression, '2*e^(2x)') && r.steps.some((s) => s.startsWith('Kettenregel'))) || JSON.stringify(r));
text("f(x)=x^2·ln x, f'(x)", "f(x)=x^2*ln(x), f'(x)", 'en', (r) => (r.success && evalEq(r.extras.expression, '2x*log(x)+x')) || JSON.stringify(r));
tool('tool derivative quotient', 'derivative', { expression: 'x/(x+1)' }, 'en', (r) => (r.success && evalEq(r.extras.expression, '1/(x+1)^2') && r.steps.some((s) => s.startsWith('Quotient rule'))) || JSON.stringify(r));
tool('tool derivative variable t', 'derivative', { expression: '4t^3 - t', variable: 't' }, 'de', answerIs('f′(t) = 12t² − 1'));

// ---- integrals -----------------------------------------------------------------------------
text('∫(3x²−4x+1)dx', '∫(3x²−4x+1)dx', 'en', typeIs('integral', answerIs('x³ − 2x² + x + C')));
text('∫_0^π sin x dx = 2', '∫_0^π sin x dx', 'en', typeIs('integral', numericExtra('value', 2)));
text('∫_0^2 x^2 dx = 8/3', '∫_0^2 x^2 dx', 'al', (r) => (r.extras.exact === '8/3') || JSON.stringify(r.extras));
text('integral from 0 to 2 of x^2', 'integral from 0 to 2 of x^2', 'en', (r) => (r.extras?.exact === '8/3') || JSON.stringify(r));
text('integral of cos(2x) + 1/x', 'integral of cos(2x) + 1/x', 'en', (r) => (r.success && r.answer.includes('ln') && r.answer.includes('sin')) || JSON.stringify(r));
text('integrali i e^x (al)', 'integrali i e^x', 'al', (r) => (r.success && r.answer.endsWith('+ C')) || JSON.stringify(r));
text('Integral von 1 bis 2 von 1/x (de)', 'Integral von 1 bis 2 von 1/x', 'de', numericExtra('value', Math.log(2)));
tool('tool integral Simpson fallback', 'integral', { expression: 'e^(-x^2)', from: 0, to: 1 }, 'en', (r) => (r.success && r.extras.approximate && near(r.extras.value, 0.746824132812, 1e-8)) || JSON.stringify(r));
tool('tool indefinite unknown → fail', 'integral', { expression: 'e^(-x^2)' }, 'en', fails());

// ---- simplify / expand / factor ------------------------------------------------------------
tool('factor x²−5x+6', 'factor', { expression: 'x^2-5x+6' }, 'en', answerIs('(x − 2)(x − 3)'));
tool('factor x³−6x²+11x−6', 'factor', { expression: 'x^3-6x^2+11x-6' }, 'en', answerIs('(x − 1)(x − 2)(x − 3)'));
tool('factor 2x³ − 8x', 'factor', { expression: '2x^3 - 8x' }, 'en', answerIs('2x(x − 2)(x + 2)'));
tool('factor perfect square', 'factor', { expression: '4x^2 + 12x + 9' }, 'en', answerIs('(2x + 3)²'));
tool('factor x⁴ − 16', 'factor', { expression: 'x^4 - 16' }, 'en', answerIs('(x − 2)(x + 2)(x² + 4)'));
text('faktorizo (al)', 'faktorizo x²−9', 'al', answerIs('(x − 3)(x + 3)'));
text('faktorisiere (de)', 'Faktorisiere 6x^2 + x - 2', 'de', answerIs('(2x − 1)(3x + 2)'));
tool('expand (x+2)(x−3)', 'expand', { expression: '(x+2)(x-3)' }, 'en', answerIs('x² − x − 6'));
text('expand (x+3)^2 binomial', 'expand (x+3)^2', 'en', (r) => (answerIs('x² + 6x + 9')(r) === true && r.steps.some((s) => s.startsWith('Square of a binomial'))) || JSON.stringify(r));
text('zbërthe (al)', 'zbërthe 2(x − 1)^2 − x', 'al', answerIs('2x² − 5x + 2'));
text('ausmultiplizieren (de)', 'ausmultiplizieren (a+b)^2', 'de', (r) => (r.success && /a.*b/.test(r.answer)) || JSON.stringify(r));
tool('simplify 3x + 2x − 4 + x', 'simplify', { expression: '3x + 2x - 4 + x' }, 'en', answerIs('6x − 4'));
tool('simplify rational (x²−1)/(x−1)', 'simplify', { expression: '(x^2-1)/(x-1)' }, 'en', (r) => (r.answer === 'x + 1' && r.extras.excluded.includes(1)) || JSON.stringify(r));
text('thjeshto (al)', 'thjeshto (x^2+5x+6)/(x+2)', 'al', answerIs('x + 3'));

// ---- number theory -------------------------------------------------------------------------
text('gcd(36,48)', 'gcd(36,48)', 'en', typeIs('gcdlcm', numericExtra('gcd', 12)));
text('lcm(36,48)', 'lcm(36, 48)', 'en', (r) => (r.extras.lcm === 144 && r.answer.includes('144')) || JSON.stringify(r));
text('PMP (al)', 'PMP(36, 48)', 'al', answerIs('PMP(36; 48) = 12'));
text('kgV (de)', 'kgV von 4 und 6', 'de', answerIs('kgV(4; 6) = 12'));
tool('tool gcdlcm three numbers', 'gcdlcm', { numbers: [12, 18, 30] }, 'en', (r) => (r.extras.gcd === 6 && r.extras.lcm === 180) || JSON.stringify(r.extras));
text('prime factors 360', 'prime factorization of 360', 'en', typeIs('primeFactors', answerIs('360 = 2³ · 3² · 5')));
tool('tool primeFactors 97 prime', 'primeFactors', { n: 97 }, 'al', (r) => (r.extras.isPrime === true) || JSON.stringify(r));
text('factor 84 → primes', 'factor 84', 'en', answerIs('84 = 2² · 3 · 7'));

// ---- matrices ------------------------------------------------------------------------------
tool('det [[1,2],[3,4]]', 'matrix', { op: 'det', A: [[1, 2], [3, 4]] }, 'en', numericExtra('determinant', -2));
tool('det 3×3', 'matrix', { op: 'det', A: [[2, 0, 1], [1, 3, 2], [1, 1, 2]] }, 'de', numericExtra('determinant', 6));
tool('det 3×3 singular', 'matrix', { op: 'det', A: [[2, 0, 1], [1, 3, 2], [1, 1, 1]] }, 'de', numericExtra('determinant', 0));
tool('inverse 2×2', 'matrix', { op: 'inverse', A: [[4, 7], [2, 6]] }, 'en', (r) => (JSON.stringify(r.extras.matrixExact) === JSON.stringify([['3/5', '-7/10'], ['-1/5', '2/5']])) || JSON.stringify(r.extras));
tool('inverse 3×3', 'matrix', { op: 'inverse', A: [[1, 2, 3], [0, 1, 4], [5, 6, 0]] }, 'en', (r) => (JSON.stringify(r.extras.matrix) === JSON.stringify([[-24, 18, 5], [20, -15, -4], [-5, 4, 1]])) || JSON.stringify(r.extras));
tool('multiply', 'matrix', { op: 'multiply', A: [[1, 2], [3, 4]], B: [[5, 6], [7, 8]] }, 'en', (r) => (JSON.stringify(r.extras.matrix) === '[[19,22],[43,50]]') || JSON.stringify(r.extras));
tool('add', 'matrix', { op: 'add', A: [[1, 2]], B: [[3, 4]] }, 'en', (r) => (JSON.stringify(r.extras.matrix) === '[[4,6]]') || JSON.stringify(r.extras));
tool('transpose', 'matrix', { op: 'transpose', A: [[1, 2, 3], [4, 5, 6]] }, 'al', (r) => (JSON.stringify(r.extras.matrix) === '[[1,4],[2,5],[3,6]]') || JSON.stringify(r.extras));
tool('solve A·x = b', 'matrix', { op: 'solve', A: [[2, 1], [1, -1]], B: [5, 1] }, 'en', (r) => (JSON.stringify(r.extras.solution) === '[2,1]') || JSON.stringify(r));
text('det text', 'det [[1,2],[3,4]]', 'en', numericExtra('determinant', -2));

// ---- statistics ----------------------------------------------------------------------------
tool('stats σ = 2', 'statistics', { data: [2, 4, 4, 4, 5, 5, 7, 9] }, 'en', (r) => (r.extras.stats.stdDev === 2 && r.extras.stats.mean === 5 && r.extras.stats.median === 4.5 && r.extras.stats.mode[0] === 4 && r.extras.stats.q1 === 4 && r.extras.stats.q3 === 6) || JSON.stringify(r.extras.stats));
tool('stats sample', 'statistics', { data: [1, 2, 3, 4], sample: true }, 'de', (r) => (near(r.extras.stats.variance, 5 / 3)) || JSON.stringify(r.extras.stats));
text('mean of (text)', 'mean of 3, 5, 7', 'en', (r) => (r.extras?.stats?.mean === 5) || JSON.stringify(r));
text('mesatarja (al, ;)', 'mesatarja e 2,5; 3,5', 'al', (r) => (r.extras?.stats?.mean === 3) || JSON.stringify(r));

// ---- fallbacks -----------------------------------------------------------------------------
text('y = 2x + 3 → fallback', 'y = 2x + 3', 'en', fails());
text('sin(x) = 0.5 → fallback', 'sin(x) = 0.5', 'en', fails());
text('x^5 + x + 1 = 0 → fallback', 'x^5 + x + 3 = 0', 'en', fails());
tool('unknown tool', 'nope', {}, 'en', fails());

// ---- run -----------------------------------------------------------------------------------
(async () => {
  let passed = 0;
  const failed = [];
  for (const c of cases) {
    if (filter && !c.name.includes(filter)) continue;
    let r;
    let res;
    try {
      r = await c.run();
      res = c.check(r);
    } catch (e) {
      res = `threw ${e.stack}`;
    }
    if (res === true) passed++;
    else failed.push({ name: c.name, res, r });
    if (verbose || (res !== true && filter)) {
      console.log(`\n=== ${c.name} → ${res === true ? 'OK' : 'FAIL'}`);
      if (r) console.log(JSON.stringify({ success: r.success, type: r.type, answer: r.answer, reason: r.reason, explanation: r.explanation }, null, 1));
      if (r?.steps) r.steps.forEach((s, i) => console.log(`  ${i + 1}. ${s.replace(/\n/g, '\n     ')}`));
    }
  }
  // all keys used must exist in al/en/de
  if (missingKeys.size) failed.push({ name: 'i18n keys', res: [...missingKeys].join(', ') });
  failed.forEach((f) => console.log(`✗ ${f.name}: ${f.res}`));
  const total = passed + failed.length;
  console.log(`\n${passed}/${total} passed${failed.length ? `, ${failed.length} failed` : ''}`);
  process.exit(failed.length ? 1 : 0);
})();
