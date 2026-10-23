// Quadratic equations: standard form, discriminant, exact surd roots, vertex, factored form.
import { math } from './parse';
import { Poly, lcmInt, gcdInt } from './poly';
import { Steps, ok, fail } from './steps';
import {
  F, fmtNum, fmtDec, isZero, isNeg, isInt, toNum, listSep, sub, paren, joinTerms, monomial,
} from './format';
import { hasBracketSum } from './linear';
import { pretty } from './format';

/** N = k²·m with m square-free (N ≥ 0 safe integer). */
export const splitSquare = (N) => {
  let n = N;
  let k = 1;
  for (let p = 2; p * p <= n && p < 2e6; p++) {
    while (n % (p * p) === 0) { n /= p * p; k *= p; }
  }
  return { k, m: n };
};

const bigAbs = (x) => (x < 0n ? -x : x);

/**
 * Exact description of P ± Q·√m as text (P, Q Fractions, Q > 0).
 * Returns { pm, minus, plus } strings, e.g. "2 ± √3", "2 − √3", "2 + √3" or "(1 ± √5)/2".
 */
export const surdForm = (P, Q, m, lang, unit = '') => {
  const D = lcmInt(Number(P.d), Number(Q.d));
  const Pn = P.mul(D);
  const Qn = Q.mul(D);
  const root = m === 1 ? '' : `√${m}`;
  const qPart = unit
    ? `${Qn.equals(1) ? '' : fmtNum(Qn, lang)}${unit}${root}`
    : `${Qn.equals(1) && root ? '' : fmtNum(Qn, lang)}${root}`;
  const build = (sign) => {
    if (isZero(Pn)) return sign === '±' ? `±${qPart}` : sign === '−' ? `−${qPart}` : qPart;
    return `${fmtNum(Pn, lang)} ${sign} ${qPart}`;
  };
  const wrap = (s) => (D === 1 ? s : `${isZero(Pn) ? s : `(${s})`}/${D}`);
  return { pm: wrap(build('±')), minus: wrap(build('−')), plus: wrap(build('+')), D };
};

/** Linear factor text for a rational root: 2 → "(x − 2)", −1/2 → "(2x + 1)"; returns the multiplier used. */
export const linearFactor = (root, v, lang) => {
  const r = F(root);
  const q = r.d;
  const p = r.n * (r.s < 0n ? -1n : 1n);
  if (p === 0n) return { text: v, mult: math.fraction(1) };
  const body = joinTerms([monomial(math.fraction(q), v, lang), { neg: p > 0n, body: `${bigAbs(p)}` }]);
  return { text: `(${body})`, mult: math.fraction(q) };
};

/** Product text: constant · factors (with exponents). */
export const productText = (constant, factors, lang) => {
  const c = F(constant);
  const body = factors.join('');
  if (!body) return fmtNum(c, lang);
  if (c.equals(1)) return body;
  if (c.equals(-1)) return `−${body}`;
  return `${fmtNum(c, lang)}${body.startsWith('(') || /^[a-z]/i.test(body) ? '' : '·'}${body}`;
};

/** Core quadratic analysis with exact values. a, b, c are Fractions (a ≠ 0). */
export const analyzeQuadratic = (a, b, c) => {
  const disc = b.mul(b).sub(a.mul(c).mul(4));
  const vx = b.neg().div(a.mul(2));
  const P = vx;
  const info = { a, b, c, disc, vertex: { x: vx, y: c.sub(b.mul(b).div(a.mul(4))) } };
  const absD = disc.abs();
  // √(p/q) = √(p·q)/q
  const N = Number(absD.n * absD.d);
  if (Number.isSafeInteger(N)) {
    const { k, m } = splitSquare(N);
    info.k = k; info.m = m;
    info.Q = math.fraction(k).div(math.fraction(Number(absD.d))).div(a.mul(2).abs());
    info.sqrtDisc = math.fraction(k).div(math.fraction(Number(absD.d)));
  }
  info.P = P;
  if (isZero(disc)) {
    info.kind = 'one';
    info.roots = [{ frac: P, value: toNum(P) }];
  } else if (isNeg(disc)) {
    info.kind = 'none';
    info.roots = [];
  } else {
    info.kind = 'two';
    const s = Math.sqrt(toNum(disc));
    const r1 = (-toNum(b) - s) / (2 * toNum(a));
    const r2 = (-toNum(b) + s) / (2 * toNum(a));
    const [lo, hi] = r1 < r2 ? [r1, r2] : [r2, r1];
    if (info.m === 1 && info.Q) {
      info.rational = true;
      const x1 = P.sub(info.Q);
      const x2 = P.add(info.Q);
      info.roots = [{ frac: x1, value: toNum(x1) }, { frac: x2, value: toNum(x2) }];
    } else {
      info.rational = false;
      info.roots = [{ value: lo }, { value: hi }];
    }
  }
  return info;
};

/**
 * Steps for solving a·v² + b·v + c = 0 (integers preferred). Adds to S, returns the analysis.
 * opts: { verify: bool, vertex: bool, factored: bool, original: {a,b,c} for vertex/factored }
 */
export const quadraticSteps = (S, a, b, c, v, lang, opts = {}) => {
  const q = analyzeQuadratic(a, b, c);
  const sep = listSep(lang);
  const n = (x) => fmtNum(x, lang);

  S.addT('identifyCoefficients', null, `a = ${n(a)}${sep}b = ${n(b)}${sep}c = ${n(c)}`);
  S.add(S.t('discriminantFormula'), `Δ = ${paren(n(b))}² − 4·${paren(n(a))}·${paren(n(c))} = ${n(b.mul(b))} ${isNeg(a.mul(c).mul(4)) ? '+' : '−'} ${n(a.mul(c).mul(4).abs())} = ${n(q.disc)}`);

  const x12 = `${v}${sub(1)},${sub(2)}`;
  const minusB = isZero(b) ? '0' : isNeg(b) ? `−(${n(b)})` : `−${n(b)}`;
  const twoA = `2·${paren(n(a))}`;

  if (q.kind === 'none') {
    S.addT('discNegative', { d: n(q.disc) });
    if (q.Q) {
      const cx = surdForm(q.P, q.Q, q.m, lang, 'i');
      q.complex = cx.pm;
      S.addT('complexRootsNote', { roots: `${v} = ${cx.pm}` });
    }
  } else if (q.kind === 'one') {
    S.addT('discZero');
    S.add(S.t('doubleRootFormula'), `${v} = −b/(2a) = ${minusB}/(${twoA}) = ${n(q.P)}`);
  } else {
    S.addT('discPositive', { d: n(q.disc) });
    S.add(S.t('quadraticFormula'), `${x12} = (${minusB} ± √${paren(n(q.disc))})/(${twoA})`);
    if (q.rational) {
      const sq = n(q.sqrtDisc);
      S.addT('sqrtOfDisc', null, `√${paren(n(q.disc))} = ${sq}`);
      const negB = n(b.neg());
      const den = n(a.mul(2));
      const [x1, x2] = q.roots;
      S.addT('computeRoots', null,
        `${v}${sub(1)} = (${negB} − ${sq})/${paren(den)} = ${n(x1.frac)}\n${v}${sub(2)} = (${negB} + ${sq})/${paren(den)} = ${n(x2.frac)}`);
    } else if (q.Q) {
      const k = math.fraction(q.k).div(math.fraction(Number(q.disc.d)));
      const simplified = q.m === 1 ? n(k) : `${k.equals(1) ? '' : n(k)}√${q.m}`;
      const full = q.disc.d === 1n ? `√${n(q.disc)}` : `√(${n(q.disc)})`;
      if (simplified !== full.replace(/[()]/g, '')) S.addT('simplifyRoot', null, `${full} = ${simplified}`);
      const sf = surdForm(q.P, q.Q, q.m, lang);
      q.exact = sf;
      S.addT('simplifyRoots', null, `${x12} = (${n(b.neg())} ± ${simplified})/${paren(n(a.mul(2)))} = ${sf.pm}`);
      S.addT('decimalValues', null,
        `${v}${sub(1)} = ${sf.minus} ≈ ${fmtDec(q.roots[0].value, lang)}\n${v}${sub(2)} = ${sf.plus} ≈ ${fmtDec(q.roots[1].value, lang)}`);
    } else {
      S.addT('decimalValues', null,
        `${v}${sub(1)} ≈ ${fmtDec(q.roots[0].value, lang)}\n${v}${sub(2)} ≈ ${fmtDec(q.roots[1].value, lang)}`);
    }
  }

  // Factored form and vertex use the original (unscaled) coefficients
  const o = opts.original || { a, b, c };
  q.originalA = o.a;
  if (opts.factored !== false && q.kind !== 'none') {
    let text;
    if (q.kind === 'one' || q.rational) {
      const roots = q.kind === 'one' ? [q.P, q.P] : q.roots.map((r) => r.frac);
      let mult = math.fraction(1);
      const factors = roots.map((r) => { const lf = linearFactor(r, v, lang); mult = mult.mul(lf.mult); return lf.text; });
      const merged = factors[0] === factors[1] ? [`${factors[0]}²`] : factors;
      text = productText(o.a.div(mult), merged, lang);
    } else if (q.exact) {
      const f = (s) => (q.exact.D === 1 && !/^[−-]?√|^±/.test(s) ? `(${v} − (${s}))` : `(${v} − ${s.startsWith('(') ? s : `(${s})`})`);
      text = productText(o.a, [f(q.exact.minus), f(q.exact.plus)], lang);
    }
    if (text) {
      q.factored = text;
      S.addT('factoredForm', null, `${new Poly([o.c, o.b, o.a], v).toString(lang)} = ${text}`);
    }
  }
  if (opts.vertex !== false) {
    const vx = o.b.neg().div(o.a.mul(2));
    const vy = o.c.sub(o.b.mul(o.b).div(o.a.mul(4)));
    q.vertex = { x: vx, y: vy };
    S.addT('vertex', null,
      `${v}ᵥ = −b/(2a) = ${n(vx)}\nyᵥ = f(${n(vx)}) = ${n(vy)}\nV(${n(vx)}${sep}${n(vy)})`,
      isNeg(o.a) ? 'opensDown' : 'opensUp');
  }
  if (opts.verify !== false && (q.kind === 'one' || q.rational)) {
    const poly = new Poly([c, b, a], v);
    const uniq = q.kind === 'one' ? [q.P] : q.roots.map((r) => r.frac);
    const lines = uniq.map((r) => {
      const rs = paren(n(r));
      const coefTxt = (k) => (k.abs().equals(1) ? '' : `${n(k.abs())}·`);
      let expr = `${isNeg(a) ? '−' : ''}${coefTxt(a)}${rs}²`;
      if (!isZero(b)) expr += ` ${isNeg(b) ? '−' : '+'} ${coefTxt(b)}${rs}`;
      if (!isZero(c)) expr += ` ${isNeg(c) ? '−' : '+'} ${n(c.abs())}`;
      return `${v} = ${n(r)}: ${expr} = ${n(poly.evalAt(r))} ✓`;
    });
    S.addT('verifyRoots', null, lines.join('\n'));
  }
  return q;
};

const rootsAnswer = (q, v, lang) => {
  const n = (x) => fmtNum(x, lang);
  if (q.kind === 'none') return '';
  if (q.kind === 'one') return `${v} = ${n(q.P)}`;
  if (q.rational) return `${v}${sub(1)} = ${n(q.roots[0].frac)}${listSep(lang)}${v}${sub(2)} = ${n(q.roots[1].frac)}`;
  if (q.exact) return `${v}${sub(1)},${sub(2)} = ${q.exact.pm}`;
  return `${v}${sub(1)} ≈ ${fmtDec(q.roots[0].value, lang)}${listSep(lang)}${v}${sub(2)} ≈ ${fmtDec(q.roots[1].value, lang)}`;
};

export const quadraticExtras = (q, v) => ({
  variable: v,
  a: toNum(q.originalA || q.a),
  discriminant: toNum(q.disc),
  rootCount: q.kind === 'two' ? 2 : q.kind === 'one' ? 1 : 0,
  roots: q.kind === 'one' ? [toNum(q.P)] : q.roots.map((r) => Number(r.value.toPrecision(12))),
  rootsExact: q.kind === 'none' ? [] : q.kind === 'one' ? [q.P.toFraction()]
    : q.rational ? q.roots.map((r) => r.frac.toFraction()) : q.exact ? [q.exact.minus, q.exact.plus] : [],
  complexRoots: q.complex || null,
  vertex: q.vertex ? { x: toNum(q.vertex.x), y: toNum(q.vertex.y) } : null,
  factored: q.factored || null,
});

/**
 * Solve P(v) = 0 where P has degree 2 (Fractions). `pre` lets the caller add steps first.
 */
export const solveQuadraticPoly = (P, v, lang, { S = new Steps(lang), standardized = false } = {}) => {
  const n = (x) => fmtNum(x, lang);
  let work = P;
  if (!standardized) S.addT('standardForm', null, `${work.toString(lang)} = 0`);
  const d = work.denominatorLcm();
  if (d > 1) {
    work = work.scale(d);
    S.addT('multiplyBothSidesLcd', { k: d }, `${work.toString(lang)} = 0`);
  }
  const g = work.numeratorGcd();
  if (g > 1) {
    work = work.scale(math.fraction(1, g));
    S.addT('divideBothSides', { k: n(math.fraction(g)) }, `${work.toString(lang)} = 0`);
  }
  const q = quadraticSteps(S, work.coef(2), work.coef(1), work.coef(0), v, lang, {
    original: { a: P.coef(2), b: P.coef(1), c: P.coef(0) },
  });
  const answer = q.kind === 'none' ? S.t('noRealRoots') : rootsAnswer(q, v, lang);
  const explanation = q.kind === 'none'
    ? S.t('quadNoneExplanation', { d: n(q.disc) })
    : q.kind === 'one' ? S.t('quadOneExplanation', { answer }) : S.t('quadTwoExplanation', { answer, d: n(q.disc) });
  return ok({ type: 'quadratic', answer, steps: S, explanation, extras: quadraticExtras(q, v) });
};

/** Equation context from linear.prepareRelation with degree 2. */
export const solveQuadraticEquation = (ctx, lang, original) => {
  const S = new Steps(lang);
  const { leftNode, rightNode, v, L, R } = ctx;
  S.addT('givenEquation', null, original);
  const P = L.sub(R);
  const already = R.isZero() && pretty(leftNode, lang) === L.toString(lang);
  if (!already) {
    S.addT(R.isZero() ? (hasBracketSum(leftNode, rightNode) ? 'expandBrackets' : 'combineLikeTerms') : 'moveAllLeft', null, `${P.toString(lang)} = 0`);
  }
  return solveQuadraticPoly(P, v, lang, { S, standardized: true });
};

/** Tool entry: { a, b, c } numbers or strings. */
export const quadraticTool = (input, lang, readNumber) => {
  const a = readNumber(input.a ?? 0);
  const b = readNumber(input.b ?? 0);
  const c = readNumber(input.c ?? 0);
  if (![a, b, c].every(math.isFraction)) return fail('Coefficients must be rational numbers');
  const v = input.variable || 'x';
  if (isZero(a)) return null; // caller falls back to linear
  const P = new Poly([c, b, a], v);
  const S = new Steps(lang);
  S.addT('givenEquation', null, `${P.toString(lang)} = 0`);
  return solveQuadraticPoly(P, v, lang, { S, standardized: true });
};

export { isInt, gcdInt };
