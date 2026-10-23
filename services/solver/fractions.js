// Teacher-style descriptions of operations on fractions (common denominator, multiply, divide, reduce).
import { math } from './parse';
import { fmtNum } from './format';
import { tr } from './i18n';

const big = (x) => (typeof x === 'bigint' ? x : BigInt(x));
const gcdBig = (a, b) => {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y) [x, y] = [y, x % y];
  return x;
};
const lcmBig = (a, b) => (a / gcdBig(a, b)) * b;

/** Signed numerator of a Fraction as BigInt. */
const num = (f) => (f.s < 0n ? -f.n : f.n);

const raw = (n, d) => {
  const s = n < 0n ? '−' : '';
  const a = n < 0n ? -n : n;
  return d === 1n ? `${s}${a}` : `${s}${a}/${d}`;
};

/** "6/12 = 1/2" tail when the raw fraction can be reduced. */
const reduceTail = (n, d) => {
  const g = gcdBig(n, d);
  if (g === 1n || n === 0n) return '';
  return ` = ${raw(n / g, d / g)}`;
};

const wrapNeg = (s) => (s.startsWith('−') ? `(${s})` : s);

/**
 * Describe x (op) y for Fractions when at least one is not an integer.
 * Returns { title, detail } or null when the plain description is enough.
 */
export const describeFractionOp = (fn, x, y, lang) => {
  const t = (k, p) => tr(lang, k, p);
  const intX = x.d === 1n;
  const intY = y.d === 1n;
  if (intX && intY && fn !== 'divide') return null;
  const fx = fmtNum(x, lang);
  const fy = fmtNum(y, lang);
  if (fn === 'add' || fn === 'subtract') {
    const sym = fn === 'add' ? '+' : '−';
    const D = lcmBig(x.d, y.d);
    const nx = num(x) * (D / x.d);
    const ny = num(y) * (D / y.d);
    const n = fn === 'add' ? nx + ny : nx - ny;
    if (x.d === y.d) {
      return { title: t('fracSameDen'), detail: `${fx} ${sym} ${wrapNeg(fy)} = (${nx} ${sym} ${wrapNeg(String(ny).replace('-', '−'))})/${D} = ${raw(n, D)}${reduceTail(n, D)}` };
    }
    return {
      title: t('fracCommonDen', { d: String(D) }),
      detail: `${fx} ${sym} ${wrapNeg(fy)} = ${raw(nx, D)} ${sym} ${wrapNeg(raw(ny, D))} = ${raw(n, D)}${reduceTail(n, D)}`,
    };
  }
  if (fn === 'multiply') {
    const n = num(x) * num(y);
    const d = x.d * y.d;
    return { title: t('fracMultiply'), detail: `${fx} · ${wrapNeg(fy)} = (${String(num(x)).replace('-', '−')}·${wrapNeg(String(num(y)).replace('-', '−'))})/(${x.d}·${y.d}) = ${raw(n, d)}${reduceTail(n, d)}` };
  }
  if (fn === 'divide') {
    if (y.n === 0n) return null;
    if (intX && intY) {
      const n = num(x);
      const d = num(y);
      const sign = (n < 0n) !== (d < 0n) ? -1n : 1n;
      const an = n < 0n ? -n : n;
      const ad = d < 0n ? -d : d;
      const g = gcdBig(an, ad);
      if (g === ad) return null; // exact integer division: plain description
      return { title: t('fracSimplify', { g: String(g) }), detail: `${fx} : ${wrapNeg(fy)} = ${raw(sign * an, ad)}${reduceTail(sign * an, ad)}` };
    }
    const recip = math.fraction(1).div(y);
    const n = num(x) * num(recip);
    const d = x.d * recip.d;
    return { title: t('fracDivide'), detail: `${fx} : ${wrapNeg(fy)} = ${fx} · ${wrapNeg(fmtNum(recip, lang))} = ${raw(n, d)}${reduceTail(n, d)}` };
  }
  if (fn === 'pow' && intY && !intX) {
    const k = num(y);
    if (k < 0n) return null;
    const n = num(x) ** k;
    const d = x.d ** k;
    return { title: t('fracPower'), detail: `(${fx})${supStr(k)} = ${String(num(x)).replace('-', '−')}${supStr(k)}/${x.d}${supStr(k)} = ${raw(n, d)}` };
  }
  return null;
};

const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻' };
const supStr = (k) => String(k).split('').map((c) => SUP[c] || c).join('');

/** Step text for simplifying a single fraction a/b by its gcd. */
export const simplifyFractionStep = (n, d, lang) => {
  const g = gcdBig(big(n), big(d));
  return { g, text: `${raw(big(n), big(d))} = ${raw(big(n) / g, big(d) / g)}`, title: tr(lang, 'fracSimplify', { g: String(g) }) };
};
