// Number and expression formatting: Unicode math, decimal comma for al/de, fractions shown exactly.
import { math } from './parse';

const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻', '−': '⁻' };
const SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉', '-': '₋', '−': '₋' };

export const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
export const sub = (n) => String(n).split('').map((c) => SUB[c] ?? c).join('');

export const usesComma = (lang) => lang !== 'en';
/** Separator for lists of values (comma would clash with the decimal comma in al/de). */
export const listSep = (lang) => (usesComma(lang) ? '; ' : ', ');

export const isFrac = (x) => math.isFraction(x);
export const F = (x) => (math.isFraction(x) ? x : math.fraction(x));
export const isZero = (f) => (isFrac(f) ? f.n === 0n : Math.abs(f) < 1e-12);
export const isInt = (f) => (isFrac(f) ? f.d === 1n : Number.isInteger(f));
export const isNeg = (f) => (isFrac(f) ? f.s < 0n && f.n !== 0n : f < 0);
export const toNum = (x) => (isFrac(x) ? x.valueOf() : Number(x));
export const fabs = (f) => (isFrac(f) ? f.abs() : Math.abs(f));

const localize = (s, lang) => {
  let out = s.replace(/-/g, '−');
  if (usesComma(lang)) out = out.replace(/(\d)\.(\d)/g, '$1,$2');
  return out;
};

/** Format a plain JS number: 12 significant digits max, no float noise, localized. */
export const fmtFloat = (x, lang, precision = 10) => {
  if (!Number.isFinite(x)) return x > 0 ? '∞' : x < 0 ? '−∞' : 'NaN';
  let r = Number(x.toPrecision(12));
  if (Object.is(r, -0) || Math.abs(r) < 1e-13) r = 0;
  const s = math.format(r, { precision, lowerExp: -7, upperExp: 15 });
  return localize(s, lang);
};

/** Fraction → "3/4", "−5", number → localized decimal. */
export const fmtNum = (x, lang = 'en') => {
  if (isFrac(x)) {
    const sign = x.s < 0n && x.n !== 0n ? '−' : '';
    return x.d === 1n ? `${sign}${x.n}` : `${sign}${x.n}/${x.d}`;
  }
  if (typeof x === 'bigint') return localize(String(x), lang);
  return fmtFloat(Number(x), lang);
};

/** Rounded decimal value (default 4 decimals), localized. */
export const fmtDec = (x, lang = 'en', digits = 4) => {
  const v = toNum(x);
  const r = Number(v.toFixed(digits));
  return fmtFloat(r, lang);
};

/** True when a fraction has a short terminating decimal expansion (denominator 2^a·5^b, ≤ maxDigits). */
export const isShortDecimal = (f, maxDigits = 6) => {
  if (!isFrac(f)) return false;
  let d = f.d;
  let twos = 0;
  let fives = 0;
  while (d % 2n === 0n) { d /= 2n; twos++; }
  while (d % 5n === 0n) { d /= 5n; fives++; }
  return d === 1n && Math.max(twos, fives) <= maxDigits;
};

/** "7/2 = 3,5" or "1/3 ≈ 0,3333" or "4" (exact + decimal when useful). */
export const fmtExactAndDec = (f, lang) => {
  if (!isFrac(f)) return fmtNum(f, lang);
  if (f.d === 1n) return fmtNum(f, lang);
  return `${fmtNum(f, lang)} ${isShortDecimal(f) ? '=' : '≈'} ${fmtDec(f, lang, isShortDecimal(f) ? 6 : 4)}`;
};

/** Wrap negatives / fractions in parentheses for substitution: 2·(−3), (1/2)². */
export const paren = (s) => (/^[−-]|[/+ ]/.test(s) ? `(${s})` : s);

/** Coefficient times monomial: (−3/4, "x²") → "−3x²/4"; (1, "x") → "x"; (5, "") → "5". */
export const monomial = (coef, mono, lang = 'en') => {
  const c = F(coef);
  const neg = c.s < 0n && c.n !== 0n;
  const n = c.n;
  const d = c.d;
  let body;
  if (!mono) body = d === 1n ? `${n}` : `${n}/${d}`;
  else {
    const num = `${n === 1n ? '' : n}${mono}`;
    body = d === 1n ? num : `${num}/${d}`;
  }
  return { neg, body, text: `${neg ? '−' : ''}${body}` };
};

/** Join signed terms: [{neg, body}] → "x² − 3x + 2". */
export const joinTerms = (terms) => {
  if (!terms.length) return '0';
  return terms.map((t, i) => {
    if (i === 0) return `${t.neg ? '−' : ''}${t.body}`;
    return `${t.neg ? ' − ' : ' + '}${t.body}`;
  }).join('');
};

// ---------------------------------------------------------------------------------------------
// Expression-tree pretty printer (mathjs node → Unicode school notation)
// ---------------------------------------------------------------------------------------------

const FN_NAMES = { log: 'ln', log10: 'log', asin: 'arcsin', acos: 'arccos', atan: 'arctan' };

const startsSymbolic = (s) => /^[a-zA-Zπ√(|]/.test(s);

const render = (node, lang) => {
  if (node.isConstantNode) {
    const v = node.value;
    const s = fmtNum(v, lang);
    if (s.startsWith('−')) return { s, prec: 3, kind: 'num' };
    if (isFrac(v) && v.d !== 1n) return { s, prec: 2, kind: 'frac' };
    return { s, prec: 5, kind: 'num' };
  }
  if (node.isSymbolNode) {
    const map = { pi: 'π', Infinity: '∞', tau: 'τ', phi: 'φ' };
    return { s: map[node.name] || node.name, prec: 5, kind: 'sym' };
  }
  if (node.isParenthesisNode) {
    const inner = render(node.content, lang);
    if (inner.prec >= 5 || node.content.isFunctionNode) return inner;
    return { s: `(${inner.s})`, prec: 5, kind: 'paren' };
  }
  if (node.isFunctionNode) {
    const name = node.fn.name || node.name;
    const args = node.args.map((a) => render(a, lang));
    const a0 = args[0];
    if (name === 'sqrt') return { s: `√${a0.prec >= 5 && a0.kind !== 'fn' ? a0.s : `(${a0.s})`}`, prec: 5, kind: 'fn' };
    if (name === 'abs') return { s: `|${a0.s}|`, prec: 5, kind: 'fn' };
    if (name === 'exp') return { s: `e^${a0.prec >= 5 && a0.kind !== 'fn' ? a0.s : `(${a0.s})`}`, prec: 4, kind: 'fn' };
    if (name === 'log' && args.length === 2) return { s: `log${sub(args[1].s)}(${a0.s})`, prec: 5, kind: 'fn' };
    if (name === 'nthRoot' && args.length === 2) return { s: `${sup(args[1].s)}√(${a0.s})`, prec: 5, kind: 'fn' };
    const shown = FN_NAMES[name] || name;
    return { s: `${shown}(${args.map((a) => a.s).join(listSep(lang))})`, prec: 5, kind: 'fn' };
  }
  if (node.isOperatorNode) {
    const { fn } = node;
    if (fn === 'unaryMinus') {
      const a = render(node.args[0], lang);
      const inner = a.prec <= 1 || a.s.startsWith('−') ? `(${a.s})` : a.s;
      return { s: `−${inner}`, prec: 3, kind: 'neg' };
    }
    if (fn === 'unaryPlus') return render(node.args[0], lang);
    if (node.args.length === 2) {
      const l = render(node.args[0], lang);
      const r = render(node.args[1], lang);
      if (fn === 'add') {
        if (r.prec === 3 && r.s.startsWith('−')) return { s: `${l.s} − ${r.s.slice(1)}`, prec: 1, kind: 'sum' };
        return { s: `${l.s} + ${r.s}`, prec: 1, kind: 'sum' };
      }
      if (fn === 'subtract') {
        const rs = r.prec <= 1 || r.s.startsWith('−') ? `(${r.s})` : r.s;
        return { s: `${l.s} − ${rs}`, prec: 1, kind: 'sum' };
      }
      if (fn === 'multiply') {
        if (node.args[1].isSymbolNode && node.args[1].name === 'deg') return { s: `${l.s}°`, prec: 5, kind: 'num' };
        const ls = l.prec <= 1 ? `(${l.s})` : l.s;
        const rs = r.prec <= 1 || r.prec === 3 ? `(${r.s})` : r.s;
        const juxt = l.kind === 'num' && l.prec === 5 && r.kind !== 'num' && r.kind !== 'frac' && startsSymbolic(rs);
        return { s: juxt ? `${ls}${rs}` : `${ls}·${rs}`, prec: 2, kind: 'prod' };
      }
      if (fn === 'divide') {
        const ls = l.prec <= 1 ? `(${l.s})` : l.s;
        const rs = r.prec <= 2 || r.prec === 3 || r.kind === 'prod' ? `(${r.s})` : r.s;
        return { s: `${ls}/${rs}`, prec: 2, kind: 'quot' };
      }
      if (fn === 'pow') {
        const bs = l.prec < 5 || l.s.startsWith('−') || l.kind === 'fn' && !/^[a-z]+\(/.test(l.s) ? `(${l.s})` : l.s;
        const e = node.args[1];
        const ev = e.isConstantNode ? e.value : (e.isOperatorNode && e.fn === 'unaryMinus' && e.args[0].isConstantNode ? -toNum(e.args[0].value) : null);
        if (ev !== null && isInt(ev)) return { s: `${bs}${sup(String(toNum(ev)))}`, prec: 4, kind: 'pow' };
        const es = r.prec >= 5 ? r.s : `(${r.s})`;
        return { s: `${bs}^${es}`, prec: 4, kind: 'pow' };
      }
      if (fn === 'mod') return { s: `${l.s} mod ${r.s}`, prec: 2, kind: 'prod' };
    }
    if (fn === 'factorial') {
      const a = render(node.args[0], lang);
      return { s: `${a.prec >= 5 ? a.s : `(${a.s})`}!`, prec: 5, kind: 'num' };
    }
  }
  return { s: localize(node.toString().replace(/\*/g, '·').replace(/\s*\^\s*/g, '^'), lang), prec: 1, kind: 'other' };
};

/** Pretty-print a mathjs node or expression string. */
export const pretty = (nodeOrExpr, lang = 'en') => {
  try {
    const node = typeof nodeOrExpr === 'string' ? math.parse(nodeOrExpr) : nodeOrExpr;
    return render(node, lang).s;
  } catch {
    return localize(String(nodeOrExpr).replace(/\*/g, '·'), lang);
  }
};

/** Constant node holding a Fraction or number. */
export const constNode = (value) => new math.ConstantNode(value);

/** Substitute a variable with a value (parenthesised so 2·(−3) prints correctly). */
export const substitute = (node, v, value) => node.transform((n, path, parent) => {
  if (n.isSymbolNode && n.name === v && !(parent && parent.isFunctionNode && path === 'fn')) {
    const c = constNode(value);
    const neg = isNeg(value) || (isFrac(value) && value.d !== 1n);
    return neg ? new math.ParenthesisNode(c) : c;
  }
  return n;
});

/** Pretty matrix: one row per line, entries separated by two spaces. */
export const fmtMatrix = (M, lang) => M.map((row) => `[ ${row.map((x) => fmtNum(x, lang)).join('   ')} ]`).join('\n');

/** Comparison operator in Unicode. */
export const relSymbol = (op) => ({ '<': '<', '>': '>', '<=': '≤', '>=': '≥', '=': '=' }[op] || op);
