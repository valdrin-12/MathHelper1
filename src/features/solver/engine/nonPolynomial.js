// Equations and inequalities that are not polynomial: |A| = c, √A = B, aᴬ = b, log_b(A) = c,
// sin/cos/tan(A) = c, plus quadratic and absolute-value inequalities. A is linear in the variable
// (a polynomial for √A = B), so every answer is exact where school math expects it to be.
import { math, freeVariables, unwrap } from './parse';
import { Poly } from './poly';
import { Steps, ok, fail } from './steps';
import { pretty, fmtNum, fmtDec, isNeg, isZero, toNum, listSep, relSymbol } from './format';
import { analyzeQuadratic, surdForm } from './quadratic';
import { formatNumber } from '../../graph/graphService';

const frac = (a, b = 1) => math.fraction(a, b);
const FLIP = { '<': '>', '>': '<', '<=': '>=', '>=': '<=' };
const holds = (op, l, r) => ({ '<': l < r, '>': l > r, '<=': l <= r + 1e-12, '>=': l >= r - 1e-12, '=': Math.abs(l - r) < 1e-9 * (1 + Math.abs(r)) }[op]);

/** Exact fraction for a number when it is (close to) one with a small denominator, else null. */
const asFrac = (x) => {
  if (math.isFraction(x)) return x;
  if (typeof x !== 'number' || !Number.isFinite(x)) return null;
  if (Number.isInteger(x)) return frac(x);
  // continued fraction, denominators up to 10 000
  let [h0, h1, k0, k1] = [0, 1, 1, 0];
  let y = x;
  for (let i = 0; i < 20; i++) {
    const a = Math.floor(y);
    [h0, h1] = [h1, a * h1 + h0];
    [k0, k1] = [k1, a * k1 + k0];
    if (k1 > 10000) return null;
    if (Math.abs(h1 / k1 - x) < 1e-12 * (1 + Math.abs(x))) return frac(h1, k1);
    if (y - a < 1e-15) return null;
    y = 1 / (y - a);
  }
  return null;
};

const constValue = (node) => {
  if (freeVariables(node).length) return null;
  try {
    const val = node.evaluate();
    return typeof val === 'number' && Number.isFinite(val) ? val : null;
  } catch {
    return null;
  }
};

/** Linear polynomial in v (degree ≤ 1 with a non-zero slope), or null. */
const linear = (node, v) => {
  const P = Poly.tryFromNode(node, v);
  return P && P.degree === 1 ? P : null;
};

/** Solve m·v + c = target for v. Exact when target is a fraction. */
const solveLin = (P, target) => {
  const m = P.coef(1);
  const c = P.coef(0);
  const t = asFrac(target);
  if (t) { const x = t.sub(c).div(m); return { exact: x, value: toNum(x) }; }
  const x = (target - toNum(c)) / toNum(m);
  return { exact: null, value: x };
};

const valText = (r, lang) => (r.exact ? fmtNum(r.exact, lang) : `≈ ${fmtDec(r.value, lang)}`);
const rootLine = (v, r, lang) => (r.exact ? `${v} = ${fmtNum(r.exact, lang)}` : `${v} ≈ ${fmtDec(r.value, lang)}`);
const uniqRoots = (roots) => roots
  .filter((r, i, all) => all.findIndex((s) => Math.abs(s.value - r.value) < 1e-9) === i)
  .sort((a, b) => a.value - b.value);

const answerOf = (v, roots, lang) => (roots.length
  ? roots.map((r, i) => (roots.length > 1 ? rootLine(`${v}${['₁', '₂', '₃', '₄'][i] || ''}`, r, lang) : rootLine(v, r, lang))).join(listSep(lang))
  : `${v} ∈ ∅`);

const done = (S, v, roots, type, lang, extra = {}) => ok({
  type,
  // a symbolic exact value (ln 5, e) is shown with its decimal: x = ln(5) ≈ 1,6094
  answer: extra.exact && roots.length === 1 ? `${v} = ${extra.exact} ≈ ${fmtDec(roots[0].value, lang)}` : answerOf(v, roots, lang),
  steps: S,
  explanation: roots.length ? S.t('specialSolutions', { list: answerOf(v, roots, lang) }) : S.t('noSolution'),
  extras: { variable: v, solutions: roots.map((r) => r.value), ...extra },
});

/** Pull a constant term off a sum: (inner + c) → { inner, c } for side = f(...) ± c. */
const splitConstant = (node) => {
  const n = unwrap(node);
  if (n.isOperatorNode && (n.fn === 'add' || n.fn === 'subtract')) {
    const [a, b] = n.args;
    const cb = constValue(b);
    if (cb !== null && freeVariables(a).length) return { inner: a, c: n.fn === 'add' ? cb : -cb };
    const ca = constValue(a);
    if (ca !== null && n.fn === 'add' && freeVariables(b).length) return { inner: b, c: ca };
  }
  return { inner: n, c: 0 };
};

const isFn = (node, ...names) => node.isFunctionNode && names.includes(node.fn.name);

// ---------------------------------------------------------------------------------------------
// |A| = c, |A| = B, |A| = |B|
// ---------------------------------------------------------------------------------------------

const solveAbs = (absNode, otherNode, v, shown, lang) => {
  const A = linear(absNode.args[0], v);
  if (!A) return null;
  const S = new Steps(lang);
  S.addT('givenEquation', null, shown);
  const Atext = pretty(absNode.args[0], lang);
  // |A| = |B|
  if (isFn(otherNode, 'abs')) {
    const B = linear(otherNode.args[0], v);
    if (!B) return null;
    const Btext = pretty(otherNode.args[0], lang);
    S.addT('absBothSides', null, `${Atext} = ${Btext}   ${S.t('or')}   ${Atext} = −(${Btext})`);
    const roots = [];
    [B, B.scale(-1)].forEach((Bs) => {
      const D = A.sub(Bs);
      if (D.degree === 1) roots.push(solveLin(D, 0));
    });
    const r = uniqRoots(roots);
    S.addT('solveEachCase', null, r.map((x) => rootLine(v, x, lang)).join('\n') || S.t('noSolution'));
    return done(S, v, r, 'absolute', lang);
  }
  const c = constValue(otherNode);
  if (c !== null) {
    if (c < 0) {
      S.addT('absNegative', { c: fmtNum(asFrac(c) || c, lang) });
      return done(S, v, [], 'absolute', lang);
    }
    const cf = asFrac(c) || c;
    if (c === 0) {
      S.addT('absZero', null, `${Atext} = 0`);
      const r = [solveLin(A, 0)];
      S.addT('solveEachCase', null, rootLine(v, r[0], lang));
      return done(S, v, r, 'absolute', lang);
    }
    S.addT('absTwoCases', null, `${Atext} = ${fmtNum(cf, lang)}   ${S.t('or')}   ${Atext} = −${fmtNum(cf, lang)}`);
    const r = uniqRoots([solveLin(A, c), solveLin(A, -c)]);
    S.addT('solveEachCase', null, r.map((x) => rootLine(v, x, lang)).join('\n'));
    return done(S, v, r, 'absolute', lang);
  }
  // |A| = B with B linear: A = B or A = −B, keep the roots with B ≥ 0
  const B = Poly.tryFromNode(otherNode, v);
  if (!B || B.degree > 1) return null;
  const Btext = pretty(otherNode, lang);
  S.addT('absConditionCases', { b: Btext }, `${Atext} = ${Btext}   ${S.t('or')}   ${Atext} = −(${Btext})`);
  const cands = [];
  [B, B.scale(-1)].forEach((Bs) => { const D = A.sub(Bs); if (D.degree === 1) cands.push(solveLin(D, 0)); });
  const kept = [];
  const lines = uniqRoots(cands).map((r) => {
    const bv = toNum(B.evalAt(r.exact || frac(r.value)));
    const good = bv >= -1e-12;
    if (good) kept.push(r);
    return `${rootLine(v, r, lang)}: ${Btext} = ${fmtNum(asFrac(bv) || bv, lang)} ${good ? '≥ 0 ✓' : `< 0 ✗ (${S.t('rejected')})`}`;
  });
  S.addT('checkCondition', null, lines.join('\n'));
  return done(S, v, kept, 'absolute', lang);
};

// ---------------------------------------------------------------------------------------------
// √A = B (A polynomial, B polynomial of degree ≤ 1): square, solve, reject false roots
// ---------------------------------------------------------------------------------------------

const polyRoots = (P) => {
  if (P.degree === 1) return [solveLin(P, 0)];
  if (P.degree !== 2) return null;
  const q = analyzeQuadratic(P.coef(2), P.coef(1), P.coef(0));
  if (q.kind === 'none') return [];
  if (q.kind === 'one') return [{ exact: q.P, value: toNum(q.P) }];
  return q.roots.map((r) => ({ exact: r.frac || null, value: r.value }));
};

const solveSqrt = (sqrtNode, c, otherNode, v, shown, lang) => {
  const A = Poly.tryFromNode(sqrtNode.args[0], v);
  if (!A || A.degree < 1 || A.degree > 2) return null;
  let B = Poly.tryFromNode(otherNode, v);
  if (!B || B.degree > 1) return null;
  const S = new Steps(lang);
  S.addT('givenEquation', null, shown);
  const Atext = pretty(sqrtNode.args[0], lang);
  if (c !== 0) {
    B = B.sub(Poly.const(asFrac(c) || frac(c), v));
    S.addT('isolateRoot', null, `√(${Atext}) = ${B.toString(lang)}`);
  }
  S.addT('rootConditions', null, `${Atext} ≥ 0${listSep(lang)}${B.toString(lang)} ≥ 0`);
  const B2 = B.mul(B);
  S.addT('squareBothSides', null, `${A.toString(lang)} = ${B.degree === 0 ? fmtNum(B.coef(0), lang) : `(${B.toString(lang)})`}² = ${B2.toString(lang)}`);
  const P = A.sub(B2);
  if (P.isZero()) return null;
  const cands = polyRoots(P);
  if (!cands) return null;
  S.addT('solveSquared', null, `${P.toString(lang)} = 0 → ${cands.length ? cands.map((r) => rootLine(v, r, lang)).join(listSep(lang)) : S.t('noRealRoots')}`);
  const kept = [];
  const lines = uniqRoots(cands).map((r) => {
    const av = r.exact ? toNum(A.evalAt(r.exact)) : A.evalNum(r.value);
    const bv = r.exact ? toNum(B.evalAt(r.exact)) : B.evalNum(r.value);
    const good = av >= -1e-9 && bv >= -1e-9 && Math.abs(Math.sqrt(Math.max(av, 0)) - bv) < 1e-7 * (1 + Math.abs(bv));
    if (good) kept.push(r);
    return `${rootLine(v, r, lang)}: √(${fmtNum(asFrac(av) || av, lang)}) = ${fmtNum(asFrac(Math.sqrt(Math.max(av, 0))) || Math.sqrt(Math.max(av, 0)), lang)}${good ? ' ✓' : ` ≠ ${fmtNum(asFrac(bv) || bv, lang)} ✗ (${S.t('rejected')})`}`;
  });
  if (lines.length) S.addT('checkInOriginal', null, lines.join('\n'));
  return done(S, v, kept, 'radical', lang);
};

// ---------------------------------------------------------------------------------------------
// aᴬ = b (a, b > 0) and log_b(A) = c
// ---------------------------------------------------------------------------------------------

const BASE_NAME = (b) => (Math.abs(b - Math.E) < 1e-12 ? 'e' : null);

const solveExp = (powNode, otherNode, v, shown, lang) => {
  const base = constValue(powNode.args[0]);
  const A = linear(powNode.args[1], v);
  if (base === null || !A || base <= 0 || base === 1) return null;
  const S = new Steps(lang);
  S.addT('givenEquation', null, shown);
  const baseText = BASE_NAME(base) || fmtNum(asFrac(base) || base, lang);
  const Atext = pretty(powNode.args[1], lang);
  // same base on both sides: aᴬ = aᴮ → A = B
  const other = unwrap(otherNode);
  const otherBase = other.isOperatorNode && other.fn === 'pow' ? constValue(other.args[0]) : null;
  if (otherBase !== null && otherBase > 0 && otherBase !== 1 && freeVariables(other.args[1]).length) {
    const B = Poly.tryFromNode(other.args[1], v);
    if (!B || B.degree > 1) return null;
    // different bases that are powers of each other: 4ˣ = 2^(x+3) → 2^(2x) = 2^(x+3)
    let Aexp = A;
    if (otherBase !== base) {
      const r = asFrac(Math.log(base) / Math.log(otherBase));
      if (!r) return null;
      Aexp = A.scale(r);
      const bText = BASE_NAME(otherBase) || fmtNum(asFrac(otherBase) || otherBase, lang);
      S.addT('writeSameBase', null, `${baseText} = ${bText}^${r.d === 1n ? fmtNum(r, lang) : `(${fmtNum(r, lang)})`} → ${bText}^(${Aexp.toString(lang)}) = ${bText}^(${pretty(unwrap(other.args[1]), lang)})`);
    }
    S.addT('sameBaseExponents', null, `${Aexp.toString(lang)} = ${pretty(unwrap(other.args[1]), lang)}`);
    const D = Aexp.sub(B);
    if (D.degree !== 1) return null;
    const r = [solveLin(D, 0)];
    S.addT('solveLinearShort', null, rootLine(v, r[0], lang));
    return done(S, v, r, 'exponential', lang);
  }
  const b = constValue(otherNode);
  if (b === null) return null;
  if (b <= 0) {
    S.addT('expPositive', { a: baseText });
    return done(S, v, [], 'exponential', lang);
  }
  // write b as a power of the base when possible: 32 = 2⁵, 1/8 = 2⁻³, 9 = 27^(2/3)
  const k = Math.log(b) / Math.log(base);
  const kf = asFrac(Math.round(k * 1e9) / 1e9);
  if (kf && kf.d <= 12n && Math.abs(base ** toNum(kf) - b) < 1e-9 * Math.max(1, b)) {
    S.addT('writeAsPower', null, `${fmtNum(asFrac(b) || b, lang)} = ${baseText}^${kf.d === 1n && !isNeg(kf) ? fmtNum(kf, lang) : `(${fmtNum(kf, lang)})`}`);
    S.addT('sameBaseExponents', null, `${Atext} = ${fmtNum(kf, lang)}`);
    const r = [solveLin(A, kf)];
    if (!(A.coef(1).equals(1) && isZero(A.coef(0)))) S.addT('solveLinearShort', null, rootLine(v, r[0], lang));
    return done(S, v, r, 'exponential', lang);
  }
  const logName = baseText === 'e' ? `ln(${fmtNum(asFrac(b) || b, lang)})` : `log${baseText === '10' ? '' : `_${baseText}`}(${fmtNum(asFrac(b) || b, lang)})`;
  S.addT('takeLog', null, `${Atext} = ${logName} ≈ ${fmtDec(k, lang)}`);
  const r = [solveLin(A, k)];
  if (!(A.coef(1).equals(1) && isZero(A.coef(0)))) S.addT('solveLinearShort', null, rootLine(v, r[0], lang));
  return done(S, v, r, 'exponential', lang, { exact: A.coef(1).equals(1) && isZero(A.coef(0)) ? logName : undefined });
};

const solveLog = (logNode, otherNode, v, shown, lang) => {
  let base;
  if (logNode.fn.name === 'log10') base = 10;
  else if (logNode.args.length === 2) base = constValue(logNode.args[1]);
  else base = Math.E;
  const A = linear(logNode.args[0], v);
  const c = constValue(otherNode);
  if (!A || c === null || base === null || base <= 0 || base === 1) return null;
  const S = new Steps(lang);
  S.addT('givenEquation', null, shown);
  const Atext = pretty(logNode.args[0], lang);
  const baseText = BASE_NAME(base) || fmtNum(asFrac(base) || base, lang);
  S.addT('logDomain', null, `${Atext} > 0`);
  const cf = asFrac(c);
  const value = base ** c;
  const vf = baseText !== 'e' && cf && cf.d === 1n ? asFrac(value) : null;
  const powText = cf && cf.equals(1) ? baseText : `${baseText}^${cf && cf.d === 1n && !isNeg(cf) ? fmtNum(cf, lang) : `(${fmtNum(cf || c, lang)})`}`;
  S.addT('logDefinition', null, `${Atext} = ${powText}${vf ? ` = ${fmtNum(vf, lang)}` : ` ≈ ${fmtDec(value, lang)}`}`);
  const r = [solveLin(A, vf || value)];
  if (!(A.coef(1).equals(1) && isZero(A.coef(0)))) S.addT('solveLinearShort', null, rootLine(v, r[0], lang));
  const good = A.evalNum(r[0].value) > 0;
  const av = A.evalNum(r[0].value);
  S.addT('checkCondition', null, `${Atext} = ${asFrac(av) ? fmtNum(asFrac(av), lang) : `${fmtDec(av, lang)}`} ${good ? '> 0 ✓' : `≤ 0 ✗ (${S.t('rejected')})`}`);
  const exact = !vf && A.coef(1).equals(1) && isZero(A.coef(0)) ? powText : undefined;
  return done(S, v, good ? r : [], 'logarithmic', lang, { exact });
};

// ---------------------------------------------------------------------------------------------
// sin(A) = c, cos(A) = c, tan(A) = c with A = m·v + n: general solution with k ∈ ℤ
// ---------------------------------------------------------------------------------------------

const piText = (x, lang) => formatNumber(x, lang, { pi: true });

const solveTrig = (trigNode, otherNode, v, shown, lang) => {
  const fn = trigNode.fn.name;
  const A = linear(trigNode.args[0], v);
  const c = constValue(otherNode);
  if (!A || c === null) return null;
  const S = new Steps(lang);
  S.addT('givenEquation', null, shown);
  const m = toNum(A.coef(1));
  const n = toNum(A.coef(0));
  const cText = asFrac(c) ? fmtNum(asFrac(c), lang) : pretty(otherNode, lang);
  if ((fn === 'sin' || fn === 'cos') && Math.abs(c) > 1 + 1e-12) {
    S.addT('trigRange', { f: fn });
    return done(S, v, [], 'trigonometric', lang);
  }
  // base angles θ of the inner argument, with the period of that family
  let thetas;
  let period;
  if (fn === 'sin') {
    const a = Math.asin(Math.max(-1, Math.min(1, c)));
    thetas = [a, Math.PI - a];
    period = 2 * Math.PI;
    S.addT('trigSinRule', null, `${S.t('argument')} = arcsin(${cText}) + 2kπ   ${S.t('or')}   ${S.t('argument')} = π − arcsin(${cText}) + 2kπ`);
  } else if (fn === 'cos') {
    const a = Math.acos(Math.max(-1, Math.min(1, c)));
    thetas = [a, -a];
    period = 2 * Math.PI;
    S.addT('trigCosRule', null, `${S.t('argument')} = ± arccos(${cText}) + 2kπ`);
  } else {
    thetas = [Math.atan(c)];
    period = Math.PI;
    S.addT('trigTanRule', null, `${S.t('argument')} = arctan(${cText}) + kπ`);
  }
  // same family twice (sin x = 1, cos x = ±1)
  const norm = (t) => ((t % period) + period) % period;
  thetas = thetas.filter((t, i) => thetas.findIndex((u) => Math.abs(norm(u) - norm(t)) < 1e-9) === i);
  const Atext = pretty(trigNode.args[0], lang);
  S.addT('trigBaseAngles', null, thetas.map((t) => `${Atext} = ${piText(t, lang)} + ${period === Math.PI ? 'kπ' : '2kπ'}`).join('\n'));
  // v = (θ − n)/m + (period/m)·k
  const per = Math.abs(period / m);
  const perText = piText(per, lang);
  let kTerm;
  if (!perText.includes('π')) kTerm = `k·${perText}`;
  else if (perText === 'π') kTerm = 'kπ';
  else if (perText.startsWith('π')) kTerm = `k${perText}`; // π/2 → kπ/2
  else kTerm = `${perText.slice(0, perText.indexOf('π'))}kπ${perText.slice(perText.indexOf('π') + 1)}`; // 2π/3 → 2kπ/3
  // representative in (−period/2, period/2], as in school: cos x = 1/2 → x = ±π/3 + 2kπ
  const families = thetas.map((t) => (t - n) / m).map((x0) => {
    let r = ((x0 % per) + per) % per;
    if (r > per / 2 + 1e-12) r -= per;
    return Math.abs(r) < 1e-12 ? 0 : r;
  });
  const lines = families.map((x0) => `${v} = ${Math.abs(x0) < 1e-12 ? '' : `${piText(x0, lang)} + `}${kTerm}`);
  if (!(m === 1 && n === 0)) S.addT('solveForVariable', { v }, lines.join('\n'));
  const deg = (x) => `${formatNumber((x * 180) / Math.PI, lang)}°`;
  S.addT('inDegrees', null, families.map((x0) => `${v} = ${Math.abs(x0) < 1e-12 ? '' : `${deg(x0)} + `}k·${deg(per)}`).join('\n'));
  const answer = `${lines.join(listSep(lang))}${listSep(lang)}k ∈ ℤ`;
  return ok({ type: 'trigonometric', answer, steps: S, explanation: S.t('trigExplanation', { list: answer }), extras: { variable: v, period: per, base: families } });
};

// ---------------------------------------------------------------------------------------------
// Entry for equations: returns a result, or null when no pattern applies
// ---------------------------------------------------------------------------------------------

export const solveSpecialEquation = (leftStr, rightStr, lang) => {
  let L;
  let R;
  try { L = math.parse(leftStr); R = math.parse(rightStr); } catch { return null; }
  const vars = [...new Set([...freeVariables(L), ...freeVariables(R)])];
  if (vars.length !== 1) return null;
  const v = vars[0];
  const shown = `${pretty(L, lang)} = ${pretty(R, lang)}`;
  const attempt = (side, other) => {
    const s = unwrap(side);
    if (isFn(s, 'abs')) return solveAbs(s, unwrap(other), v, shown, lang);
    if (isFn(s, 'log', 'log10')) return solveLog(s, other, v, shown, lang);
    if (isFn(s, 'sin', 'cos', 'tan')) return solveTrig(s, other, v, shown, lang);
    if (s.isOperatorNode && s.fn === 'pow' && freeVariables(s.args[1]).length && !freeVariables(s.args[0]).length) return solveExp(s, other, v, shown, lang);
    const { inner, c } = splitConstant(s);
    const u = unwrap(inner);
    if (isFn(u, 'sqrt')) return solveSqrt(u, c, other, v, shown, lang);
    return null;
  };
  for (const [a, b] of [[L, R], [R, L]]) {
    if (!freeVariables(a).length) continue;
    const r = attempt(a, b);
    if (r) return r;
  }
  return null;
};

// ---------------------------------------------------------------------------------------------
// Inequalities: quadratic P(x) op 0 and |A| op c
// ---------------------------------------------------------------------------------------------

const intervalUnion = (parts, lang) => parts.map(({ from, to, fromClosed, toClosed }) => {
  const sep = listSep(lang);
  const a = from === null ? '−∞' : from;
  const b = to === null ? '+∞' : to;
  return `${from !== null && fromClosed ? '[' : '('}${a}${sep}${b}${to !== null && toClosed ? ']' : ')'}`;
}).join(' ∪ ');

const ineqDone = (S, v, interval, lang) => {
  S.addT('intervalNotation', null, `${v} ∈ ${interval}`);
  return ok({ type: 'inequality', answer: `${v} ∈ ${interval}`, steps: S, explanation: S.t('ineqSetExplanation', { v, interval }), extras: { variable: v, interval } });
};

const solveQuadraticIneq = (P, op, v, shown, lang, alreadyZeroRight = false) => {
  const S = new Steps(lang);
  S.addT('givenInequality', null, shown);
  let Q = P;
  let rel = op;
  if (!alreadyZeroRight) S.addT('moveAllToOneSide', null, `${Q.toString(lang)} ${relSymbol(rel)} 0`);
  if (isNeg(Q.coef(2))) {
    Q = Q.scale(-1);
    rel = FLIP[rel];
    S.addT('multiplyByMinusOne', null, `${Q.toString(lang)} ${relSymbol(rel)} 0`);
  }
  const q = analyzeQuadratic(Q.coef(2), Q.coef(1), Q.coef(0));
  const strict = rel === '<' || rel === '>';
  const wantPositive = rel.startsWith('>');
  if (q.kind === 'none') {
    S.addT('quadIneqNoRoots', null, `D = ${fmtNum(q.disc, lang)} < 0`);
    return ineqDone(S, v, wantPositive ? '(−∞; +∞)'.replace('; ', listSep(lang)) : '∅', lang);
  }
  let r1;
  let r2;
  if (q.kind === 'one') { r1 = fmtNum(q.P, lang); r2 = r1; } else if (q.rational) {
    r1 = fmtNum(q.roots[0].frac, lang); r2 = fmtNum(q.roots[1].frac, lang);
    if (toNum(q.roots[0].frac) > toNum(q.roots[1].frac)) [r1, r2] = [r2, r1];
  } else if (q.Q) {
    const sf = surdForm(q.P, q.Q, q.m, lang);
    [r1, r2] = [sf.minus, sf.plus];
  } else {
    r1 = fmtDec(q.roots[0].value, lang); r2 = fmtDec(q.roots[1].value, lang);
  }
  S.addT('quadIneqRoots', null, q.kind === 'one' ? `${v} = ${r1}` : `${v}₁ = ${r1}${listSep(lang)}${v}₂ = ${r2}`);
  S.addT('quadIneqSign', null, `${S.t('quadNegativeBetween')}\n${S.t('quadPositiveOutside')}`);
  let interval;
  if (q.kind === 'one') {
    if (wantPositive) interval = strict ? `ℝ \\ {${r1}}` : `(−∞${listSep(lang)}+∞)`;
    else interval = strict ? '∅' : `{${r1}}`;
  } else if (wantPositive) {
    interval = intervalUnion([{ from: null, to: r1, toClosed: !strict }, { from: r2, to: null, fromClosed: !strict }], lang);
  } else {
    interval = intervalUnion([{ from: r1, to: r2, fromClosed: !strict, toClosed: !strict }], lang);
  }
  return ineqDone(S, v, interval, lang);
};

const solveAbsIneq = (absNode, op, c, v, shown, lang) => {
  const A = linear(absNode.args[0], v);
  if (!A) return null;
  const S = new Steps(lang);
  S.addT('givenInequality', null, shown);
  const Atext = pretty(absNode.args[0], lang);
  const strict = op === '<' || op === '>';
  const less = op.startsWith('<');
  const cf = asFrac(c) || c;
  const sep = listSep(lang);
  if (c < 0 || (c === 0 && less && strict)) {
    S.addT('absNeverLess', null, `|${Atext}| ≥ 0`);
    return ineqDone(S, v, less ? '∅' : `(−∞${sep}+∞)`, lang);
  }
  // endpoints where A = ±c, ordered
  const e1 = solveLin(A, -c);
  const e2 = solveLin(A, c);
  const [lo, hi] = e1.value <= e2.value ? [e1, e2] : [e2, e1];
  if (less) {
    S.addT('absLessRule', null, `−${fmtNum(cf, lang)} ${relSymbol(op)} ${Atext} ${relSymbol(op)} ${fmtNum(cf, lang)}`);
    S.addT('solveBothSides', null, `${valText(lo, lang)} ${relSymbol(op)} ${v} ${relSymbol(op)} ${valText(hi, lang)}`);
    return ineqDone(S, v, intervalUnion([{ from: valText(lo, lang), to: valText(hi, lang), fromClosed: !strict, toClosed: !strict }], lang), lang);
  }
  S.addT('absGreaterRule', null, `${Atext} ${relSymbol(FLIP[op])} −${fmtNum(cf, lang)}   ${S.t('or')}   ${Atext} ${relSymbol(op)} ${fmtNum(cf, lang)}`);
  if (c === 0) {
    const z = valText(lo, lang);
    return ineqDone(S, v, strict ? `ℝ \\ {${z}}` : `(−∞${sep}+∞)`, lang);
  }
  return ineqDone(S, v, intervalUnion([{ from: null, to: valText(lo, lang), toClosed: !strict }, { from: valText(hi, lang), to: null, fromClosed: !strict }], lang), lang);
};

/** Entry for "lhs op rhs" that the linear solver does not handle. Returns a result or null. */
export const solveSpecialInequality = (leftStr, op, rightStr, lang) => {
  let L;
  let R;
  try { L = math.parse(leftStr); R = math.parse(rightStr); } catch { return null; }
  const vars = [...new Set([...freeVariables(L), ...freeVariables(R)])];
  if (vars.length !== 1) return null;
  const v = vars[0];
  const shown = `${pretty(L, lang)} ${relSymbol(op)} ${pretty(R, lang)}`;
  // |A| op c (or c op |A|)
  const uL = unwrap(L);
  const uR = unwrap(R);
  if (isFn(uL, 'abs') && constValue(R) !== null) return solveAbsIneq(uL, op, constValue(R), v, shown, lang);
  if (isFn(uR, 'abs') && constValue(L) !== null) return solveAbsIneq(uR, FLIP[op], constValue(L), v, shown, lang);
  const PL = Poly.tryFromNode(L, v);
  const PR = Poly.tryFromNode(R, v);
  if (PL && PR) {
    const P = PL.sub(PR);
    if (P.degree === 2) return solveQuadraticIneq(P, op, v, shown, lang, PR.isZero());
  }
  return null;
};
