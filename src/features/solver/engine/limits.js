// Limits: lim x→a f(x) with a a number or ±∞.
// Rational functions exactly (substitution, cancelling (x − a) for 0/0, degrees at ±∞),
// sin(u)/u = 1 as a known limit, anything else numerically from both sides.
import { math, normalizeCore, decimalCommaToPoint, freeVariables, unwrap } from './parse';
import { Poly } from './poly';
import { Steps, ok, fail } from './steps';
import { pretty, fmtNum, fmtDec, isNeg, isZero, toNum } from './format';
import { asFrac } from './nonPolynomial';

const ARROW = '(?:->|→|to|drejt|gegen)';
const LIM = '(?:lim|limit|limiti|limes|grenzwert)';
const LIMIT_RES = [
  // lim x->0 sin(x)/x · lim_{x→∞} … · lim(x->2) …
  new RegExp(`^${LIM}\\s*(?:_\\s*)?[({]?\\s*([a-z])\\s*${ARROW}\\s*([^\\s})]+?)\\s*[})]?\\s+(?:(?:of|i|e|von)\\s+)?(.+)$`, 'i'),
  // limit sin(x)/x x->0 · limit of … as x → ∞ · limiti i … kur x → 2
  new RegExp(`^${LIM}\\s+(?:(?:of|i|e|von)\\s+)?(.+?)\\s*,?\\s+(?:(?:as|kur|für|wenn)\\s+)?([a-z])\\s*${ARROW}\\s*(\\S+)$`, 'i'),
];

const readPoint = (raw) => {
  const s = String(raw).trim().replace(/[−–]/g, '-').toLowerCase();
  if (/^\+?(inf|infinity|∞|oo)$/.test(s)) return Infinity;
  if (/^-(inf|infinity|∞|oo)$/.test(s)) return -Infinity;
  try {
    const val = math.evaluate(decimalCommaToPoint(normalizeCore(s)));
    return typeof val === 'number' && Number.isFinite(val) ? val : null;
  } catch {
    return null;
  }
};

export const detectLimit = (text) => {
  const t = String(text).trim();
  for (let i = 0; i < LIMIT_RES.length; i++) {
    const m = t.match(LIMIT_RES[i]);
    if (!m) continue;
    const [v, point, expr] = i === 0 ? [m[1], m[2], m[3]] : [m[2], m[3], m[1]];
    const a = readPoint(point);
    if (a !== null) return { v, a, expr };
  }
  return null;
};

const pointText = (a, lang) => (a === Infinity ? '+∞' : a === -Infinity ? '−∞' : fmtNum(asFrac(a) || a, lang));
const valueText = (x, lang) => {
  if (x === Infinity) return '+∞';
  if (x === -Infinity) return '−∞';
  const f = asFrac(x);
  if (f && f.d <= 1000n) return fmtNum(f, lang);
  if (Math.abs(x - Math.E) < 1e-6) return 'e';
  for (const [k, name] of [[1, 'π'], [0.5, 'π/2'], [2, '2π'], [0.25, 'π/4']]) if (Math.abs(x - k * Math.PI) < 1e-6) return name;
  return `≈ ${fmtDec(x, lang)}`;
};
const exactValue = (x) => !String(x).startsWith('≈');

const finish = (S, v, a, value, lang, shownExpr) => {
  const vt = valueText(value, lang);
  const head = `lim(${v}→${pointText(a, lang)}) ${shownExpr}`;
  const answer = exactValue(vt) ? `${head} = ${vt}` : `${head} ${vt}`;
  return ok({ type: 'limit', answer, steps: S, explanation: S.t('limitExplanation', { value: vt.replace(/^≈ /, '≈ ') }), extras: { variable: v, point: a, value } });
};

// ---------------------------------------------------------------------------------------------
// Rational functions N/D
// ---------------------------------------------------------------------------------------------

const rationalParts = (node, v) => {
  const n = unwrap(node);
  if (n.isOperatorNode && n.fn === 'divide') {
    const N = Poly.tryFromNode(n.args[0], v);
    const D = Poly.tryFromNode(n.args[1], v);
    if (N && D && !D.isZero()) return { N, D };
    return null;
  }
  const P = Poly.tryFromNode(n, v);
  return P ? { N: P, D: Poly.const(1, v) } : null;
};

const ratioText = (N, D, lang) => (D.degree === 0 && D.coef(0).equals(1) ? N.toString(lang) : `(${N.toString(lang)})/(${D.toString(lang)})`);

const rationalAtInfinity = (N, D, v, a, shown, lang) => {
  const S = new Steps(lang);
  S.addT('givenLimit', null, `lim(${v}→${pointText(a, lang)}) ${shown}`);
  const dn = N.degree;
  const dd = D.degree;
  S.addT('limitDegrees', { n: dn, d: dd });
  let value;
  if (dn < dd) { value = 0; S.addT('limitDegreeLess'); } else if (dn === dd) {
    const r = N.lead.div(D.lead);
    value = toNum(r);
    S.addT('limitDegreeEqual', null, `${fmtNum(N.lead, lang)}/${fmtNum(D.lead, lang)} = ${fmtNum(r, lang)}`);
  } else {
    // sign of lead_N/lead_D · a^(dn − dd)
    const sign = (isNeg(N.lead) !== isNeg(D.lead) ? -1 : 1) * (a < 0 && (dn - dd) % 2 === 1 ? -1 : 1);
    value = sign * Infinity;
    S.addT('limitDegreeGreater');
  }
  return finish(S, v, a, value, lang, shown);
};

const rationalAtPoint = (N0, D0, v, a, shown, lang) => {
  const af = asFrac(a);
  if (!af) return null;
  const S = new Steps(lang);
  S.addT('givenLimit', null, `lim(${v}→${pointText(a, lang)}) ${shown}`);
  let N = N0;
  let D = D0;
  let nv = N.evalAt(af);
  let dv = D.evalAt(af);
  if (!isZero(dv)) {
    S.addT('limitSubstitute', null, `${fmtNum(nv, lang)}/${fmtNum(dv, lang)} = ${fmtNum(nv.div(dv), lang)}`);
    return finish(S, v, a, toNum(nv.div(dv)), lang, shown);
  }
  if (isZero(nv)) {
    S.addT('limitZeroOverZero', null, `${fmtNum(nv, lang)}/${fmtNum(dv, lang)}`);
    // divide out (x − a) while both vanish
    const factor = new Poly([af.neg(), math.fraction(1)], v);
    const before = ratioText(N, D, lang);
    let k = 0;
    while (isZero(N.evalAt(af)) && isZero(D.evalAt(af)) && N.degree > 0 && D.degree > 0 && k < 10) {
      N = N.divmod(factor).q;
      D = D.divmod(factor).q;
      k++;
    }
    S.addT('limitCancel', { f: `(${factor.toString(lang)})` }, `${before} = ${ratioText(N, D, lang)}`);
    nv = N.evalAt(af);
    dv = D.evalAt(af);
    if (!isZero(dv)) {
      S.addT('limitSubstitute', null, `${fmtNum(nv, lang)}/${fmtNum(dv, lang)} = ${fmtNum(nv.div(dv), lang)}`);
      return finish(S, v, a, toNum(nv.div(dv)), lang, shown);
    }
  }
  // c/0 with c ≠ 0: infinite; look at both sides
  const h = 1e-7;
  const left = N.evalNum(a - h) / D.evalNum(a - h);
  const right = N.evalNum(a + h) / D.evalNum(a + h);
  S.addT('limitNonZeroOverZero', null, `${fmtNum(nv, lang)}/0`);
  S.addT('limitOneSided', null, `${v} → ${pointText(a, lang)}⁻: ${left > 0 ? '+∞' : '−∞'}\n${v} → ${pointText(a, lang)}⁺: ${right > 0 ? '+∞' : '−∞'}`);
  if (Math.sign(left) === Math.sign(right)) return finish(S, v, a, Math.sign(left) * Infinity, lang, shown);
  S.addT('limitDoesNotExist');
  return ok({ type: 'limit', answer: S.t('limitDoesNotExistShort', { head: `lim(${v}→${pointText(a, lang)}) ${shown}` }), steps: S, explanation: S.t('limitDoesNotExist'), extras: { variable: v, point: a, value: null } });
};

// ---------------------------------------------------------------------------------------------
// sin(u)/w with u, w linear and u(a) = w(a) = 0 → u′/w′
// ---------------------------------------------------------------------------------------------

const sinOverLinear = (node, v, a, shown, lang) => {
  const n = unwrap(node);
  if (!(n.isOperatorNode && n.fn === 'divide')) return null;
  const [top, bottom] = n.args.map(unwrap);
  const isSin = (x) => x.isFunctionNode && ['sin', 'tan'].includes(x.fn.name);
  const af = asFrac(a);
  if (!af) return null;
  let U;
  let W;
  let flipped = false;
  if (isSin(top)) { U = Poly.tryFromNode(top.args[0], v); W = Poly.tryFromNode(bottom, v); } else if (isSin(bottom)) { U = Poly.tryFromNode(bottom.args[0], v); W = Poly.tryFromNode(top, v); flipped = true; }
  if (!U || !W || U.degree !== 1 || W.degree !== 1 || !isZero(U.evalAt(af)) || !isZero(W.evalAt(af))) return null;
  const fn = (flipped ? bottom : top).fn.name;
  const S = new Steps(lang);
  S.addT('givenLimit', null, `lim(${v}→${pointText(a, lang)}) ${shown}`);
  S.addT('limitZeroOverZero', null, '0/0');
  S.addT('limitKnownSin', { f: fn }, `lim(u→0) ${fn}(u)/u = 1`);
  const k = flipped ? W.coef(1).div(U.coef(1)) : U.coef(1).div(W.coef(1));
  const uText = U.toString(lang);
  S.addT('limitRewriteSin', null, flipped
    ? `${shown} = (${W.toString(lang)})/(${uText}) · (${uText})/${fn}(${uText}) → ${fmtNum(k, lang)} · 1`
    : `${shown} = ${fn}(${uText})/(${uText}) · (${uText})/(${W.toString(lang)}) → 1 · ${fmtNum(k, lang)}`);
  return finish(S, v, a, toNum(k), lang, shown);
};

// ---------------------------------------------------------------------------------------------
// Numeric approach from both sides (or towards ±∞)
// ---------------------------------------------------------------------------------------------

const numericLimit = (node, v, a, shown, lang) => {
  let f;
  try {
    const code = node.compile();
    f = (x) => { const r = code.evaluate({ [v]: x }); return typeof r === 'number' ? r : NaN; };
  } catch {
    return fail('Could not evaluate the limit');
  }
  const S = new Steps(lang);
  S.addT('givenLimit', null, `lim(${v}→${pointText(a, lang)}) ${shown}`);
  const finite = Number.isFinite(a);
  // direct substitution when the function is defined and continuous there
  if (finite) {
    const fa = f(a);
    // continuous from at least one side where it is defined (√x at 0)
    const close = (y) => Number.isFinite(y) && Math.abs(fa - y) < 1e-4 * (1 + Math.abs(fa));
    const l = f(a - 1e-9);
    const r = f(a + 1e-9);
    const continuous = (close(l) || !Number.isFinite(l)) && (close(r) || !Number.isFinite(r)) && (close(l) || close(r));
    if (Number.isFinite(fa) && continuous) {
      S.addT('limitSubstituteDirect', null, `${shown.replace(new RegExp(`\\b${v}\\b`, 'g'), `(${pointText(a, lang)})`)} = ${valueText(fa, lang).replace(/^≈ /, '≈ ')}`);
      return finish(S, v, a, fa, lang, shown);
    }
  }
  // h below 1e-5 loses digits to cancellation (1 − cos h); slow limits at ∞ need large x
  const steps = finite ? [1e-1, 1e-2, 1e-3, 1e-4, 1e-5] : [10, 100, 1e3, 1e4, 1e6, 1e8, 1e10];
  let sides = finite ? [-1, 1] : [Math.sign(a)];
  let seqs = sides.map((s) => steps.map((h) => (finite ? f(a + s * h) : f(s * h))));
  // defined on one side only (x·ln x at 0): take the one-sided limit
  let oneSide = null;
  if (finite) {
    const defined = seqs.map((q) => q.slice(-2).every(Number.isFinite));
    if (defined[0] !== defined[1]) {
      const i = defined[0] ? 0 : 1;
      oneSide = sides[i];
      sides = [sides[i]];
      seqs = [seqs[i]];
    }
  }
  const lastOf = (q) => q[q.length - 1];
  const converge = (q) => {
    const [x0, x1, x2] = [q[q.length - 3], q[q.length - 2], lastOf(q)];
    if (!Number.isFinite(x1) || !Number.isFinite(x2)) return null;
    // shrinking steadily towards 0 (x·ln x): each value under half of the previous one
    if (Number.isFinite(x0) && Math.abs(x2) < 1e-3 && Math.abs(x2) < Math.abs(x1) / 2 && Math.abs(x1) < Math.abs(x0) / 2) return 0;
    if (Math.abs(x2) > 1e6 && Math.abs(x2) > Math.abs(x1) * 2) return x2 > 0 ? Infinity : -Infinity;
    return Math.abs(x2 - x1) < 1e-4 * (1 + Math.abs(x2)) ? x2 : null;
  };
  const lim = seqs.map(converge);
  const fmt = (x) => (Number.isFinite(x) ? fmtDec(x, lang) : '–');
  const shownSteps = finite ? [1, 2, 3] : [1, 2, 3, 4];
  const table = sides.map((s, i) => shownSteps.map((j) => `${v} = ${fmtDec(finite ? a + s * steps[j] : s * steps[j], lang)}: ${fmt(seqs[i][j])}`).join('\n'));
  if (oneSide !== null) S.addT(oneSide > 0 ? 'limitOnlyRight' : 'limitOnlyLeft');
  S.addT(!finite ? 'limitNumericInfinity' : oneSide === null ? 'limitNumericBothSides' : 'limitNumericOneSide', null, table.join('\n'));
  if (lim.some((x) => x === null)) return fail('Limit not found numerically - use AI');
  if (lim.length === 2 && !(lim[0] === lim[1] || Math.abs(lim[0] - lim[1]) < 1e-3 * (1 + Math.abs(lim[0])))) {
    S.addT('limitDoesNotExist');
    return ok({ type: 'limit', answer: S.t('limitDoesNotExistShort', { head: `lim(${v}→${pointText(a, lang)}) ${shown}` }), steps: S, explanation: S.t('limitDoesNotExist'), extras: { variable: v, point: a, value: null } });
  }
  // snap to a nice value (1/2, e, π …) when the numbers agree closely
  let value = lim[0];
  if (Number.isFinite(value)) {
    // e and π first, then the nearest p/q with q ≤ 100 (tight, so 2.71828… never becomes 87/32)
    let best = [Math.E, Math.PI].find((c) => Math.abs(c - value) < 1e-4 * (1 + Math.abs(value))) ?? null;
    for (let q = 1; q <= 100 && best === null; q++) {
      const p = Math.round(value * q);
      if (Math.abs(p / q - value) < 2e-5 * (1 + Math.abs(value))) best = p / q;
    }
    if (best !== null) value = best;
  }
  S.addT('limitNumericConclusion', null, valueText(value, lang));
  return finish(S, v, a, value, lang, shown);
};

export const limitTool = ({ v, a, expr }, lang) => {
  let node;
  try { node = math.parse(decimalCommaToPoint(normalizeCore(expr))); } catch { return fail('Could not parse the limit'); }
  const vars = freeVariables(node);
  if (vars.length > 1 || (vars.length === 1 && vars[0] !== v)) return fail('The limit must be in one variable');
  const shown = pretty(node, lang);
  const rat = rationalParts(node, v);
  if (rat) return Number.isFinite(a) ? (rationalAtPoint(rat.N, rat.D, v, a, shown, lang) || numericLimit(node, v, a, shown, lang)) : rationalAtInfinity(rat.N, rat.D, v, a, shown, lang);
  if (Number.isFinite(a)) {
    const sr = sinOverLinear(node, v, a, shown, lang);
    if (sr) return sr;
  }
  return numericLimit(node, v, a, shown, lang);
};
