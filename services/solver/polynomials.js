// Polynomials in one variable: factor, expand, simplify (incl. cancelling rational expressions)
// and polynomial equations of degree ≥ 3 with rational roots.
import { math, freeVariables, unwrap } from './parse';
import { Poly, gcdInt } from './poly';
import { Steps, ok, fail } from './steps';
import {
  F, fmtNum, fmtDec, isZero, isNeg, toNum, sup, sub, listSep, monomial, joinTerms, pretty, paren,
} from './format';
import { productText, analyzeQuadratic, surdForm, quadraticSteps } from './quadratic';

const frac = (a, b = 1) => math.fraction(a, b);

const isPerfectSquare = (n) => n >= 0 && Number.isInteger(Math.sqrt(n)) && Math.round(Math.sqrt(n)) ** 2 === n;

const divisors = (n) => {
  const out = [];
  const m = Math.abs(n);
  for (let i = 1; i * i <= m && i < 1e6; i++) {
    if (m % i === 0) { out.push(i); if (i * i !== m) out.push(m / i); }
  }
  return out.sort((a, b) => a - b);
};

/** Text of a factor polynomial, wrapped in brackets unless it is a single symbol. */
const factorText = (p, lang, mult = 1) => {
  const s = p.toString(lang);
  const body = /^[a-z]$/i.test(s) ? s : `(${s})`;
  return mult > 1 ? `${body}${sup(mult)}` : body;
};

/** Primitive integer polynomial with positive leading coefficient → { content (Fraction), prim }. */
const primitive = (P) => {
  const d = P.denominatorLcm();
  const Q = P.scale(d);
  let g = Q.numeratorGcd() || 1;
  if (isNeg(Q.lead)) g = -g;
  return { content: frac(g, d), prim: Q.scale(frac(1, g)) };
};

/** Integer square root helper for "a x^2k − c" patterns. */
const sqrtInt = (n) => (isPerfectSquare(n) ? Math.round(Math.sqrt(n)) : null);

/**
 * Factor a primitive integer polynomial (positive lead, non-zero constant term).
 * Pushes steps (if S) and returns an array of { poly, mult } irreducible over ℚ (as far as we can tell).
 */
const factorPrimitive = (Q, S, lang, depth = 0) => {
  const v = Q.v;
  const n = (x) => fmtNum(x, lang);
  if (Q.degree <= 1) return [{ poly: Q }];

  const a = toNum(Q.lead);
  const c = toNum(Q.coef(0));
  const onlyTwoTerms = Q.c.filter((x) => !isZero(x)).length === 2;

  // Difference of squares: A·v^(2k) − C with A, C perfect squares
  if (onlyTwoTerms && Q.degree % 2 === 0 && c < 0) {
    const ra = sqrtInt(a);
    const rc = sqrtInt(-c);
    if (ra && rc) {
      const k = Q.degree / 2;
      const half = new Poly([0, ...Array(k - 1).fill(0), ra], v);
      const p1 = half.sub(Poly.const(rc, v));
      const p2 = half.add(Poly.const(rc, v));
      const hs = half.toString(lang);
      const hsq = /^[a-z]$/i.test(hs) || /^\d+$/.test(hs) ? `${hs}²` : `(${hs})²`;
      S?.add(S.t('differenceOfSquares'), `${Q.toString(lang)} = ${hsq} − ${rc}² = ${factorText(p1, lang)}${factorText(p2, lang)}`, 'a² − b² = (a − b)(a + b)');
      return [...factorPrimitive(p1, S, lang, depth + 1), ...factorPrimitive(p2, S, lang, depth + 1)];
    }
  }

  if (Q.degree === 2) {
    const b = toNum(Q.coef(1));
    const ra = sqrtInt(a);
    const rc = sqrtInt(c);
    if (ra && rc && Math.abs(b) === 2 * ra * rc) {
      const base = new Poly([b < 0 ? -rc : rc, ra], v);
      const as = monomial(frac(ra), v, lang).text;
      S?.add(S.t('perfectSquareTrinomial'),
        `${Q.toString(lang)} = ${ra === 1 ? v : `(${as})`}² ${b < 0 ? '−' : '+'} 2·${as}·${rc} + ${rc}² = ${factorText(base, lang, 2)}`,
        b < 0 ? 'a² − 2ab + b² = (a − b)²' : 'a² + 2ab + b² = (a + b)²');
      return [{ poly: base, mult: 2 }];
    }
    const q = analyzeQuadratic(Q.coef(2), Q.coef(1), Q.coef(0));
    if (q.kind === 'two' && q.rational) {
      const [r1, r2] = q.roots.map((r) => r.frac);
      const lin = (r) => primitive(new Poly([r.neg(), 1], v)).prim;
      const f1 = lin(r1);
      const f2 = lin(r2);
      S?.add(S.t('trinomialByRoots', { x1: n(r1), x2: n(r2), d: n(q.disc) }),
        `${Q.toString(lang)} = ${factorText(f1, lang)}${factorText(f2, lang)}`, 'ax² + bx + c = a(x − x₁)(x − x₂)');
      return [{ poly: f1 }, { poly: f2 }];
    }
    S?.addT('irreducibleQuadratic', { p: Q.toString(lang), d: n(q.disc) });
    return [{ poly: Q }];
  }

  // Degree ≥ 3: rational root theorem
  const pCands = divisors(c);
  const qCands = divisors(a);
  const cands = [];
  const seen = new Set();
  pCands.forEach((p) => qCands.forEach((qq) => {
    [frac(p, qq), frac(-p, qq)].forEach((r) => { const key = r.toFraction(); if (!seen.has(key)) { seen.add(key); cands.push(r); } });
  }));
  cands.sort((x, y) => Math.abs(toNum(x)) - Math.abs(toNum(y)) || toNum(y) - toNum(x));
  if (depth === 0 || S) {
    const shown = cands.slice(0, 12).map((r) => n(r)).join(listSep(lang)) + (cands.length > 12 ? ' …' : '');
    S?.add(S.t('rationalRootTheorem'), `${S.t('candidates')}: ${shown}`, S.t('rationalRootRule', { a: a, c: Math.abs(c) }));
  }
  const root = cands.find((r) => isZero(Q.evalAt(r)));
  if (!root) {
    S?.addT('noRationalRoots', { p: Q.toString(lang) });
    return [{ poly: Q }];
  }
  const lin = primitive(new Poly([root.neg(), 1], v)).prim;
  const { q: quotient } = Q.divmod(lin);
  S?.add(S.t('rootFound', { r: n(root) }), `P(${n(root)}) = 0 ⇒ ${factorText(lin, lang)}`);
  S?.add(S.t('polynomialDivision'), `${Q.toString(lang)} = ${factorText(lin, lang)}${factorText(quotient, lang)}`, S.t('hornerNote'));
  return [{ poly: lin }, ...factorPrimitive(quotient, S, lang, depth + 1)];
};

/**
 * Merge equal factors and order them like a textbook: linear factors first,
 * (x − a) with positive roots ascending, then (x + b) by |root|, then the rest.
 * E.g. (x − 2)(x − 3), (x − 2)(x + 2), (2x − 1)(3x + 2).
 */
const mergeFactors = (list) => {
  const map = new Map();
  list.forEach(({ poly, mult = 1 }) => {
    const key = poly.toString('en');
    if (map.has(key)) map.get(key).mult += mult;
    else map.set(key, { poly, mult });
  });
  const arr = [...map.values()];
  const rootOf = (p) => (p.degree === 1 ? toNum(p.coef(0).neg().div(p.coef(1))) : Infinity);
  const rank = (p) => {
    const r = rootOf(p);
    if (!Number.isFinite(r)) return [2, 0];
    return r >= 0 ? [0, r] : [1, -r];
  };
  return arr.sort((x, y) => {
    if (x.poly.degree !== y.poly.degree) return x.poly.degree - y.poly.degree;
    const [gx, vx] = rank(x.poly);
    const [gy, vy] = rank(y.poly);
    return gx - gy || vx - vy;
  });
};

/**
 * Factor P completely over ℚ (as far as the methods allow).
 * Returns { constant, xPower, factors: [{poly, mult}], text }.
 */
export const factorPoly = (P, S, lang) => {
  const v = P.v;
  const { content, prim } = primitive(P);
  const k = prim.minDegree;
  const rest = prim.shiftDown(k);
  if (S && (!content.equals(1) || k > 0)) {
    const cf = productText(content, k ? [k === 1 ? v : `${v}${sup(k)}`] : [], lang);
    if (rest.degree >= 1 || k > 0) {
      S.add(S.t('commonFactor', { f: cf }), `${P.toString(lang)} = ${cf}${rest.isConst() ? '' : factorText(rest, lang)}`);
    }
  }
  const factors = rest.degree >= 1 ? mergeFactors(factorPrimitive(rest, S, lang)) : [];
  const parts = [];
  if (k) parts.push(k === 1 ? v : `${v}${sup(k)}`);
  factors.forEach((f) => parts.push(factorText(f.poly, lang, f.mult)));
  let text = productText(content, parts, lang);
  if (factors.length === 0 && !k) text = fmtNum(content, lang);
  return { constant: content, xPower: k, factors, text };
};

const parseOneVarPoly = (expr) => {
  const node = math.parse(expr);
  const vars = freeVariables(node);
  if (vars.length > 1) return { node, vars };
  const v = vars[0] || 'x';
  return { node, vars, v, P: Poly.tryFromNode(node, v) };
};

/** Tool: factor. Integers go to prime factorisation (handled by caller). */
export const factorTool = (expr, lang) => {
  const { node, vars, v, P } = parseOneVarPoly(expr);
  if (vars.length > 1) return fail('Factoring supports polynomials in one variable');
  if (!P) return fail('Not a polynomial');
  if (P.degree < 1) return fail('Constant polynomial');
  const S = new Steps(lang);
  S.addT('givenExpression', null, pretty(node, lang));
  if (pretty(node, lang) !== P.toString(lang)) S.addT('expandFirst', null, P.toString(lang));
  const res = factorPoly(P, S, lang);
  const irreducible = res.factors.length === 1 && res.factors[0].mult === 1 && res.xPower === 0 && res.constant.equals(1);
  if (irreducible && P.degree >= 2) {
    const answer = P.toString(lang);
    return ok({ type: 'factor', answer, steps: S, explanation: S.t('cannotFactor'), extras: { factored: answer, irreducible: true } });
  }
  S.addT('factoredResult', null, `${P.toString(lang)} = ${res.text}`);
  const roots = [];
  res.factors.filter((f) => f.poly.degree === 1).forEach((f) => roots.push(toNum(f.poly.coef(0).neg().div(f.poly.coef(1)))));
  if (res.xPower) roots.push(0);
  return ok({
    type: 'factor',
    answer: res.text,
    steps: S,
    explanation: S.t('factorExplanation', { result: res.text }),
    extras: { factored: res.text, rationalRoots: roots.sort((x, y) => x - y), variable: v },
  });
};

// ---------------------------------------------------------------------------------------------
// Expand
// ---------------------------------------------------------------------------------------------

const termCount = (p) => p.c.filter((x) => !isZero(x)).length;
const termsTexts = (p, lang) => p.terms(lang);
const sq = (t) => (/^[a-z0-9]$/i.test(t) || /^\d+$/.test(t) ? `${t}²` : `(${t})²`);

const expandNode = (node, v, S, lang) => {
  if (node.isParenthesisNode) return expandNode(node.content, v, S, lang);
  if (node.isOperatorNode) {
    const [a, b] = node.args;
    if (node.fn === 'add') return expandNode(a, v, S, lang).add(expandNode(b, v, S, lang));
    if (node.fn === 'subtract') {
      const B = expandNode(b, v, S, lang);
      if (termCount(B) > 1 && unwrap(b) !== b) S?.add(S.t('distributeMinus'), `−(${B.toString(lang)}) = ${B.scale(-1).toString(lang)}`);
      return expandNode(a, v, S, lang).sub(B);
    }
    if (node.fn === 'unaryMinus') {
      const A = expandNode(a, v, S, lang);
      if (termCount(A) > 1) S?.add(S.t('distributeMinus'), `−(${A.toString(lang)}) = ${A.scale(-1).toString(lang)}`);
      return A.scale(-1);
    }
    if (node.fn === 'multiply') {
      const A = expandNode(a, v, S, lang);
      const B = expandNode(b, v, S, lang);
      const R = A.mul(B);
      const na = termCount(A);
      const nb = termCount(B);
      if (S && (na > 1 || nb > 1) && na && nb) {
        const At = A.toString(lang);
        const Bt = B.toString(lang);
        if (na === 1 || nb === 1) {
          const [mono, poly] = na === 1 ? [At, Bt] : [Bt, At];
          S.add(S.t('distributive'), `${mono === '−1' ? '−' : mono}(${poly}) = ${R.toString(lang)}`, 'a(b + c) = ab + ac');
        } else if (na === 2 && nb === 2 && (() => {
          const [a1, a2] = termsTexts(A, lang);
          const [b1, b2] = termsTexts(B, lang);
          return a1.body === b1.body && a2.body === b2.body && a1.neg === b1.neg && a2.neg !== b2.neg;
        })()) {
          S.add(S.t('diffSquaresFormula'), `(${At})(${Bt}) = ${R.toString(lang)}`, '(a + b)(a − b) = a² − b²');
        } else {
          const rawTerms = [];
          for (let i = A.c.length - 1; i >= 0; i--) {
            if (isZero(A.c[i])) continue;
            for (let j = B.c.length - 1; j >= 0; j--) {
              if (isZero(B.c[j])) continue;
              const deg = i + j;
              rawTerms.push(monomial(A.c[i].mul(B.c[j]), deg === 0 ? '' : deg === 1 ? v : `${v}${sup(deg)}`, lang));
            }
          }
          const raw = joinTerms(rawTerms);
          const fin = R.toString(lang);
          S.add(S.t('multiplyEachTerm'), `(${At})(${Bt}) = ${raw}${raw !== fin ? ` = ${fin}` : ''}`);
        }
      }
      return R;
    }
    if (node.fn === 'divide') {
      const D = Poly.fromNode(b, v);
      if (!D.isConst() || D.isZero()) throw new Error('Not a polynomial');
      const A = expandNode(a, v, S, lang);
      const R = A.scale(frac(1).div(D.coef(0)));
      if (S && termCount(A) > 1) S.add(S.t('divideEachTerm'), `(${A.toString(lang)})/${paren(fmtNum(D.coef(0), lang))} = ${R.toString(lang)}`);
      return R;
    }
    if (node.fn === 'pow') {
      const E = Poly.fromNode(b, v);
      if (!E.isConst()) throw new Error('Not a polynomial');
      const k = E.coef(0);
      if (k.d !== 1n || k.s < 0n || k.n > 30n) throw new Error('Not a polynomial');
      const nExp = Number(k.n);
      const B = expandNode(a, v, S, lang);
      const R = B.pow(nExp);
      if (S && termCount(B) > 1 && nExp >= 2) {
        const Bt = B.toString(lang);
        const [t1, t2] = termsTexts(B, lang);
        if (termCount(B) === 2 && nExp === 2) {
          const sign = t1.neg === t2.neg ? '+' : '−';
          const a1 = t1.text;
          const b1 = t2.body;
          S.add(S.t('squareOfBinomial'), `(${Bt})² = ${sq(a1)} ${sign} 2·${a1}·${b1} + ${sq(b1)} = ${R.toString(lang)}`,
            sign === '+' ? '(a + b)² = a² + 2ab + b²' : '(a − b)² = a² − 2ab + b²');
        } else if (termCount(B) === 2 && nExp === 3) {
          S.add(S.t('cubeOfBinomial'), `(${Bt})³ = ${R.toString(lang)}`, '(a ± b)³ = a³ ± 3a²b + 3ab² ± b³');
        } else {
          S.add(S.t('powerExpand', { n: nExp }), `(${Bt})${sup(nExp)} = ${R.toString(lang)}`);
        }
      }
      return R;
    }
    if (node.fn === 'unaryPlus') return expandNode(a, v, S, lang);
  }
  return Poly.fromNode(node, v);
};

const topTerms = (node) => {
  const n = unwrap(node);
  if (n.isOperatorNode && n.fn === 'add') return [...topTerms(n.args[0]), ...topTerms(n.args[1])];
  if (n.isOperatorNode && n.fn === 'subtract') return [...topTerms(n.args[0]), { neg: true, node: n.args[1] }];
  return [{ neg: false, node: n }];
};

/** Expand/simplify a one-variable polynomial with steps. */
const expandPolyWithSteps = (node, v, lang, type) => {
  const S = new Steps(lang);
  S.addT('givenExpression', null, pretty(node, lang));
  const parts = topTerms(node).map((t) => {
    const p = expandNode(t.node, v, S, lang);
    if (t.neg && termCount(p) > 1) S.add(S.t('distributeMinus'), `−(${p.toString(lang)}) = ${p.scale(-1).toString(lang)}`);
    return t.neg ? p.scale(-1) : p;
  });
  const result = parts.reduce((acc, p) => acc.add(p), new Poly([], v));
  const rawTerms = parts.flatMap((p) => p.terms(lang));
  const raw = joinTerms(rawTerms);
  const fin = result.toString(lang);
  if (rawTerms.length > termCount(result) || raw !== fin) S.add(S.t('combineLikeTerms'), `${raw}${raw !== fin ? ` = ${fin}` : ''}`);
  if (S.length === 1) S.addT('alreadySimplest', null, fin);
  return ok({
    type,
    answer: fin,
    steps: S,
    explanation: S.t(type === 'expand' ? 'expandExplanation' : 'simplifyExplanation', { result: fin }),
    extras: { result: fin, expression: result.toExpr(), degree: result.degree, variable: v },
  });
};

/** Tool: expand. */
export const expandTool = (expr, lang) => {
  const node = math.parse(expr);
  const vars = freeVariables(node);
  if (vars.length <= 1) {
    const v = vars[0] || 'x';
    if (Poly.tryFromNode(node, v)) return expandPolyWithSteps(node, v, lang, 'expand');
    return fail('Not a polynomial');
  }
  return genericSimplify(node, lang, 'expand');
};

/** Polynomial gcd (monic) via Euclid. */
const polyGcd = (a, b) => {
  let x = a;
  let y = b;
  while (!y.isZero()) { const { r } = x.divmod(y); x = y; y = r; }
  return x.isZero() ? x : x.scale(frac(1).div(x.lead));
};

const genericSimplify = (node, lang, type) => {
  const S = new Steps(lang);
  S.addT('givenExpression', null, pretty(node, lang));
  let out;
  try {
    out = type === 'expand' ? math.rationalize(node) : math.simplify(node);
  } catch {
    return fail('Could not simplify');
  }
  const res = pretty(out, lang);
  if (res === pretty(node, lang)) S.addT('alreadySimplest', null, res);
  else S.addT(type === 'expand' ? 'expandResult' : 'simplifyRules', null, `${pretty(node, lang)} = ${res}`);
  return ok({ type, answer: res, steps: S, explanation: S.t(type === 'expand' ? 'expandExplanation' : 'simplifyExplanation', { result: res }), extras: { result: res, expression: out.toString() } });
};

/** Tool: simplify (numbers are handled by the arithmetic module in index.js). */
export const simplifyTool = (expr, lang) => {
  const node = math.parse(expr);
  const vars = freeVariables(node);
  if (vars.length === 1) {
    const v = vars[0];
    if (Poly.tryFromNode(node, v)) return expandPolyWithSteps(node, v, lang, 'simplify');
    const inner = unwrap(node);
    if (inner.isOperatorNode && inner.fn === 'divide') {
      const N = Poly.tryFromNode(inner.args[0], v);
      const D = Poly.tryFromNode(inner.args[1], v);
      if (N && D && D.degree >= 1) return simplifyRational(node, N, D, v, lang);
    }
  }
  return genericSimplify(node, lang, 'simplify');
};

const simplifyRational = (node, N, D, v, lang) => {
  const S = new Steps(lang);
  S.addT('givenExpression', null, pretty(node, lang));
  const fn = factorPoly(N, null, lang);
  const fd = factorPoly(D, null, lang);
  S.addT('factorNumerator', null, `${N.toString(lang)} = ${fn.text}`);
  S.addT('factorDenominator', null, `${D.toString(lang)} = ${fd.text}`);
  const G = polyGcd(N, D);
  const Nq = N.divmod(G).q;
  const Dq = D.divmod(G).q;
  // normalise so the denominator has a positive integer leading coefficient
  const { content } = primitive(Dq);
  const Nn = Nq.scale(frac(1).div(content));
  const Dn = Dq.scale(frac(1).div(content));
  const numText = Nn.toString(lang);
  const result = Dn.isConst() ? Nn.scale(frac(1).div(Dn.coef(0))).toString(lang)
    : `${termCount(Nn) > 1 ? `(${numText})` : numText}/(${Dn.toString(lang)})`;
  if (G.degree >= 1) {
    const g = factorPoly(G, null, lang).text;
    S.addT('cancelCommonFactor', { f: g }, `${pretty(node, lang)} = ${result}`);
  } else {
    S.addT('noCommonFactor');
  }
  // domain: real roots of the original denominator (rational ones listed)
  const excluded = fd.factors.filter((f) => f.poly.degree === 1).map((f) => f.poly.coef(0).neg().div(f.poly.coef(1)));
  if (fd.xPower) excluded.push(frac(0));
  if (excluded.length) S.addT('domainNote', { cond: excluded.map((r) => `${v} ≠ ${fmtNum(r, lang)}`).join(listSep(lang)) });
  return ok({
    type: 'simplify',
    answer: result,
    steps: S,
    explanation: S.t('simplifyExplanation', { result }),
    extras: { result, excluded: excluded.map(toNum) },
  });
};

// ---------------------------------------------------------------------------------------------
// Polynomial equations of degree ≥ 3
// ---------------------------------------------------------------------------------------------

export const solvePolynomialEquation = (ctx, lang, original) => {
  const { v, L, R } = ctx;
  const S = new Steps(lang);
  S.addT('givenEquation', null, original);
  const P = L.sub(R);
  S.addT(R.isZero() ? 'standardForm' : 'moveAllLeft', null, `${P.toString(lang)} = 0`);
  const res = factorPoly(P, S, lang);
  const roots = [];
  const exactTexts = [];
  const lines = [];
  if (res.xPower) { roots.push(0); exactTexts.push('0'); lines.push(`${v}${res.xPower > 1 ? sup(res.xPower) : ''} = 0 ⇒ ${v} = 0`); }
  for (const f of res.factors) {
    if (f.poly.degree === 1) {
      const r = f.poly.coef(0).neg().div(f.poly.coef(1));
      roots.push(toNum(r));
      exactTexts.push(fmtNum(r, lang));
      lines.push(`${f.poly.toString(lang)} = 0 ⇒ ${v} = ${fmtNum(r, lang)}`);
    } else if (f.poly.degree === 2) {
      const q = analyzeQuadratic(f.poly.coef(2), f.poly.coef(1), f.poly.coef(0));
      if (q.kind === 'none') { lines.push(`${f.poly.toString(lang)} = 0: ${S.t('noRealRootsShort', { d: fmtNum(q.disc, lang) })}`); continue; }
      if (!q.Q) return fail('Could not compute exact roots');
      const sf = surdForm(q.P, q.Q, q.m, lang);
      q.roots.forEach((r) => roots.push(r.value));
      exactTexts.push(sf.minus, sf.plus);
      lines.push(`${f.poly.toString(lang)} = 0 ⇒ ${v} = ${sf.pm} (Δ = ${fmtNum(q.disc, lang)})`);
    } else {
      return fail('Polynomial has no rational roots - use AI');
    }
  }
  S.add(S.t('zeroProduct'), lines.join('\n'));
  if (!roots.length) {
    const answer = S.t('noRealRoots');
    return ok({ type: 'polynomial', answer, steps: S, explanation: answer, extras: { roots: [] } });
  }
  const order = roots.map((r, i) => ({ r, t: exactTexts[i] })).sort((x, y) => x.r - y.r);
  const answer = order.map((o, i) => `${v}${sub(i + 1)} = ${o.t}`).join(listSep(lang));
  return ok({
    type: 'polynomial',
    answer,
    steps: S,
    explanation: S.t('polyExplanation', { answer, factored: res.text }),
    extras: { variable: v, roots: order.map((o) => Number(o.r.toPrecision(12))), rootsExact: order.map((o) => o.t), factored: res.text, approx: order.map((o) => fmtDec(o.r, lang)) },
  });
};

export { quadraticSteps, gcdInt };
