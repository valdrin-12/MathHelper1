// Mathematical check of AI (Gemini / Wolfram) answers with mathjs. Runs on the device, no network.
//
//   verifyAnswer({ problem, answer, lang }) -> { status, kind, code?, params? }
//
//   status 'verified'  the answer was confirmed by an independent calculation
//          'mismatch'  mathjs found a concrete problem (code + params say what, see locales "verify.*")
//          'unknown'   the problem or the answer is not in a form that can be checked: say nothing
//
// A mismatch is only reported when the problem was understood AND the answer was understood.
// Supported: arithmetic, one-variable equations (roots are substituted back and the real line is
// scanned for roots the answer missed), systems of equations, inequalities, derivatives, integrals.
import { math, normalizeCore, normalizeExpression, decimalCommaToPoint, freeVariables, tryParse } from './solver/parse';
import { detectDerivative, detectIntegral, SOLVE_PREFIX, KEYWORD_TOOLS, cleanExpr } from './solver';
import { splitSystem } from './solver/systems';
import { looksLikeInequality } from './solver/inequalities';

const SUB = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
const TRIG = /\b(sin|cos|tan|cot|sec|csc|asin|acos|atan|arcsin|arccos|arctan)\b/i;
const NO_SOLUTION = /\b(no\s+(?:real\s+)?(?:solutions?|roots?)|pa\s+zgjidhje|nuk\s+ka\s+(?:zgjidhje|rrënj)|keine\s+(?:reelle\s+)?(?:lösung|nullstelle)|empty\s+set)\b|∅|\{\s*\}/i;
const ALL_REALS = /\b(infinitely\s+many|all\s+real\s+numbers|any\s+real|pafund|çdo\s+numër|të\s+gjithë\s+numrat|unendlich\s+viele|alle\s+reellen)\b|ℝ/i;
const OR_WORDS = /\s+(?:ose|or|oder|dhe|and|und)\s+/gi;
const DET_SAMPLE = [-2.7, -1.3, -0.45, 0.35, 0.8, 1.7, 2.3, 3.1, 0.5, 1.2, -0.9, 2.0];
const TIME_BUDGET_MS = 600;

const unknown = (kind) => ({ status: 'unknown', kind });
const verified = (kind) => ({ status: 'verified', kind });
const mismatch = (kind, code, params = {}) => ({ status: 'mismatch', kind, code, params });

// ---------------------------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------------------------

const stripSubscripts = (s) => s.replace(/[₀-₉]/g, (c) => SUB[c]);

/** Markdown / LaTeX that models like to sneak in → plain text. */
const latexToPlain = (input) => {
  let t = String(input).replace(/\\\(|\\\)|\\\[|\\\]|\$/g, '').replace(/\*\*/g, '').replace(/`/g, '');
  for (let i = 0; i < 4; i++) t = t.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '(($1)/($2))');
  return t
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, 'sqrt($1)')
    .replace(/\\left|\\right/g, '')
    .replace(/\\pm/g, '±').replace(/\\mp/g, '∓')
    .replace(/\\cdot|\\times/g, '*').replace(/\\div/g, '/')
    .replace(/\\pi/g, 'π').replace(/\\infty/g, '∞')
    .replace(/\\leq?\b/g, '≤').replace(/\\geq?\b/g, '≥')
    .replace(/\\in\b/g, '∈').replace(/\\cup/g, '∪')
    .replace(/\^\{([^{}]*)\}/g, '^($1)').replace(/_\{([^{}]*)\}/g, '$1')
    .replace(/\\([a-z]+)/g, '$1');
};

/** Decimal comma → point, except inside function-call argument lists ("max(2,5)"). */
const toPoint = (s) => (/[a-z]\s*\(/i.test(s) && /\(\s*[^()]*,/.test(s) ? s : decimalCommaToPoint(s));

/** One string → something mathjs can parse. */
const prep = (s) => {
  let t = stripSubscripts(latexToPlain(s))
    .replace(/\b(ln|log|sin|cos|tan|cot|sec|csc|sqrt|exp)\s*\|([^|]+)\|/gi, '$1(abs($2))')   // ln|x| → ln(abs(x))
    .replace(/\|([^|]+)\|/g, 'abs($1)');                                                    // |x| → abs(x)
  t = normalizeCore(t).replace(/\s+/g, ' ').trim();
  t = t.replace(/(^|[^A-Za-z0-9_])([a-zA-Z])\s*\(/g, '$1$2*(');             // x(x+1) → x*(x+1)
  t = t.replace(/[+]?∞|\binf(?:inity)?\b/gi, 'Infinity');
  return t;
};

const fmt = (x, lang = 'en') => {
  let s;
  if (math.isComplex(x)) {
    const re = Number(x.re.toPrecision(5));
    const im = Number(Math.abs(x.im).toPrecision(5));
    s = `${re} ${x.im < 0 ? '−' : '+'} ${im}i`;
  } else {
    s = String(Number(Number(x).toPrecision(6)));
  }
  s = s.replace('-', '−');
  return lang === 'en' ? s : s.replace('.', ',');
};

const compile = (str) => {
  const node = tryParse(str);
  if (!node) return null;
  try {
    return { node, fn: node.compile(), vars: freeVariables(node) };
  } catch {
    return null;
  }
};

const isNum = (x) => typeof x === 'number' && Number.isFinite(x);
const isCx = (x) => math.isComplex(x) && Number.isFinite(x.re) && Number.isFinite(x.im);

/** Evaluate a constant expression → number | Complex | null. */
const safeEval = (str, allowInfinity = false) => {
  const c = compile(str);
  if (!c || c.vars.length) return null;
  try {
    const v = c.fn.evaluate({});
    if (typeof v === 'number') return Number.isFinite(v) || (allowInfinity && Math.abs(v) === Infinity) ? v : null;
    if (math.isComplex(v)) return isCx(v) ? (Math.abs(v.im) < 1e-12 ? v.re : v) : null;
    return null;
  } catch {
    return null;
  }
};

const decimalsOf = (raw) => {
  const m = String(raw).trim().match(/^[-+−]?\d*[.,](\d+)$/);
  return m ? m[1].length : null;
};

/** "5", "√2", "1/3", "2.5", "5 metra", "x" … → { value, decimals } | null. Trailing words are dropped. */
const parseValue = (raw) => {
  let s = String(raw).trim().replace(/[.;:!]+$/, '').trim();
  const parts = s.split(/≈|~/).map((t) => t.trim()).filter(Boolean);
  for (const part of parts) {
    let cur = part;
    for (let guard = 0; guard < 4 && cur; guard++) {
      const pct = /%\s*$/.test(cur);
      const v = safeEval(toPoint(prep(cur.replace(/%\s*$/, ''))));
      if (v !== null) return { value: v, decimals: decimalsOf(cur), percent: pct };
      const trimmed = cur.replace(/\s*\([^()]*\)\s*$/, '').replace(/\s+\S+$/, '');
      if (trimmed === cur) break;
      cur = trimmed;
    }
  }
  return null;
};

/** Expand "±" / "∓" into every combination (max 8). */
const expandPm = (s) => {
  const out = [];
  const walk = (str) => {
    if (out.length >= 8) return;
    const i = str.search(/[±∓]/);
    if (i < 0) { out.push(str); return; }
    const minusFirst = str[i] === '∓';
    walk(str.slice(0, i) + (minusFirst ? '-' : '+') + str.slice(i + 1));
    walk(str.slice(0, i) + (minusFirst ? '+' : '-') + str.slice(i + 1));
  };
  walk(s);
  return out;
};

/** Split at top level (outside brackets) on , ; and newlines. */
const splitTop = (s) => {
  const out = [];
  let depth = 0;
  let cur = '';
  for (const ch of s) {
    if ('([{'.includes(ch)) depth++;
    else if (')]}'.includes(ch)) depth = Math.max(0, depth - 1);
    if ((ch === ',' || ch === ';' || ch === '\n') && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
  }
  out.push(cur);
  return out.map((t) => t.trim()).filter(Boolean);
};

// ---------------------------------------------------------------------------------------------
// Reading the answer: "x = 2, x = 3", "x₁ = 2; x₂ = 3", "x = ±3", "x ∈ {1, 2}", "x = 2 or x = 3"
// ---------------------------------------------------------------------------------------------

const LABELED = /(?:^|[^A-Za-z0-9_])([a-zA-Z])\s*[0-9]*(?:\s*,\s*[0-9]+)?\s*(?:=|≈|∈)\s*(.+)$/;

/**
 * → { items: [{ name, value, decimals }], noSolution, allReals } | null
 * `commaAsDecimal`: read "2,5" as 2.5 (otherwise a comma separates values).
 */
const parseAnswerValues = (answerRaw, commaAsDecimal) => {
  let text = stripSubscripts(latexToPlain(answerRaw)).split('\n').filter((l) => l.trim()).slice(0, 3).join('\n');
  if (NO_SOLUTION.test(text)) return { items: [], noSolution: true, allReals: false };
  if (ALL_REALS.test(text)) return { items: [], noSolution: false, allReals: true };
  if (commaAsDecimal) text = decimalCommaToPoint(text);
  text = text.replace(OR_WORDS, '; ').replace(/([a-zA-Z]\d)\s*,\s*(\d\s*(?:=|≈))/g, '$1$2');       // "x1,2 =" is one label

  const items = [];
  const push = (name, rawValue) => {
    for (const variant of expandPm(rawValue)) {
      const p = parseValue(variant);
      if (!p) return false;
      items.push({ name, value: p.value, decimals: p.decimals });
    }
    return true;
  };

  const tuple = text.match(/^\s*(?:\([^()]*\)\s*=\s*)?\(([^()]*)\)\s*\.?\s*$/);
  if (tuple) text = tuple[1];
  const setM = text.match(/^\s*(?:([a-zA-Z])\s*(?:∈|=)\s*)?\{([^{}]*)\}\s*\.?\s*$/);
  const clauses = setM ? setM[2].split(/[,;]/).map((c) => c.trim()).filter(Boolean) : splitTop(text);
  if (!clauses.length) return null;

  let labeled = 0;
  for (const clause of clauses) {
    const m = clause.match(LABELED);
    if (m) {
      labeled++;
      if (!push(m[1], m[2])) return null;
    } else if (setM) {
      if (!push(setM[1] || null, clause)) return null;
    } else {
      const p = parseValue(clause);
      if (!p) { if (labeled || clauses.length === 1) return null; continue; }
      if (!push(null, clause)) return null;
    }
  }
  if (!items.length) return null;
  return { items, noSolution: false, allReals: false };
};

/** The two readings of commas in an answer (decimal comma vs list separator). */
const answerVariants = (answer) => [parseAnswerValues(answer, true), parseAnswerValues(answer, false)].filter(Boolean);

// ---------------------------------------------------------------------------------------------
// Problem preparation
// ---------------------------------------------------------------------------------------------

const LEAD_WORDS = /^(?:(?:the|die|den|das|ekuacionin|ekuacioni|ekuacion|equation|gleichung|system|sistemin|sistemi|of|for|për|nach|following|e\s+mëposhtme|folgende)\s+)+/i;
const TAIL_FOR = /\s+(?:for|për|nach|in)\s+[a-z]\s*$/i;

const prepProblem = (problem) => {
  const multiline = /\n/.test(String(problem).trim());
  let t = latexToPlain(problem).trim();
  t = multiline ? t : t.replace(/\s+/g, ' ');
  t = t.replace(SOLVE_PREFIX, '').replace(LEAD_WORDS, '').replace(TAIL_FOR, '').trim();
  return t.replace(/(?:\s*\?)+\s*$/, '').replace(/\s*=\s*$/, '').trim();
};

/** `lhs = rhs` string → { left, right } of mathjs source, or null. */
const splitEquation = (s) => {
  const core = toPoint(prep(cleanExpr(s)));
  if (/[<>!]=|==|<|>/.test(core)) return null;
  const parts = core.split('=');
  if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) return null;
  return { left: parts[0].trim(), right: parts[1].trim() };
};

/** Compiled "left − right" helper over a scope. Returns null when either side does not compile. */
const relation = (left, right) => {
  const L = compile(left);
  const R = compile(right);
  if (!L || !R) return null;
  const vars = [...new Set([...L.vars, ...R.vars])].sort();
  const at = (scope) => {
    try {
      const a = L.fn.evaluate({ ...scope });
      const b = R.fn.evaluate({ ...scope });
      if (!(isNum(a) || isCx(a)) || !(isNum(b) || isCx(b))) return null;
      const d = math.subtract(a, b);
      return { a, b, d: Number(math.abs(d)), signed: isNum(a) && isNum(b) ? a - b : NaN, scale: 1 + Number(math.abs(a)) + Number(math.abs(b)) };
    } catch {
      return null;
    }
  };
  return { vars, at };
};

// ---------------------------------------------------------------------------------------------
// Root finding on the real line (completeness check)
// ---------------------------------------------------------------------------------------------

const scanRoots = (rel, v, deadline, range = 50, steps = 5000) => {
  const roots = [];
  let prevX = null;
  let prevF = null;
  for (let i = 0; i <= steps; i++) {
    if (Date.now() > deadline) break;
    const x = -range + (2 * range * i) / steps;
    const r = rel.at({ [v]: x });
    if (!r || Number.isNaN(r.signed)) { prevX = null; prevF = null; continue; }
    const f = r.signed;
    if (Math.abs(f) <= 1e-12 * r.scale) roots.push(x);
    else if (prevX !== null && prevF * f < 0) {
      let lo = prevX;
      let hi = x;
      let flo = prevF;
      for (let k = 0; k < 60; k++) {
        const mid = (lo + hi) / 2;
        const rm = rel.at({ [v]: mid });
        if (!rm || Number.isNaN(rm.signed)) break;
        if (flo * rm.signed <= 0) hi = mid; else { lo = mid; flo = rm.signed; }
      }
      const mid = (lo + hi) / 2;
      const rm = rel.at({ [v]: mid });
      if (rm && rm.d <= 1e-6 * rm.scale) roots.push(mid);            // a real root, not a pole
    }
    prevX = x;
    prevF = f;
  }
  const out = [];
  for (const r of roots) if (!out.some((o) => Math.abs(o - r) < 1e-6)) out.push(r);
  return out;
};

// ---------------------------------------------------------------------------------------------
// Equation, one variable
// ---------------------------------------------------------------------------------------------

const rootHolds = (rel, v, item) => {
  const x = item.value;
  const r = rel.at({ [v]: x });
  if (!r) return null;
  if (r.d <= 1e-7 * r.scale) return { ok: true, r };
  if (item.decimals && isNum(x)) {
    const half = 0.5 * Math.pow(10, -item.decimals) * 1.001;
    let prev = null;
    for (let k = 0; k <= 40; k++) {
      const rr = rel.at({ [v]: x - half + (2 * half * k) / 40 });
      if (!rr || Number.isNaN(rr.signed)) continue;
      if (rr.signed === 0 || (prev !== null && prev * rr.signed < 0)) return { ok: true, r };
      prev = rr.signed;
    }
    return { ok: false, r };
  }
  if (item.decimals) return null;                                    // rounded complex root: cannot judge
  return { ok: false, r };
};

const verifyEquation = (text, answer, lang) => {
  const eq = splitEquation(text);
  if (!eq || /°/.test(text)) return null;
  const rel = relation(eq.left, eq.right);
  if (!rel || rel.vars.length !== 1) return null;
  const v = rel.vars[0];
  const periodic = TRIG.test(eq.left + eq.right);
  const deadline = Date.now() + TIME_BUDGET_MS;

  const variants = answerVariants(answer);
  if (!variants.length) return unknown('equation');
  let firstMismatch = null;

  for (const parsed of variants) {
    const result = checkEquationAnswer(rel, v, parsed, periodic, deadline, lang);
    if (result.status === 'verified') return result;
    if (!firstMismatch && result.status === 'mismatch') firstMismatch = result;
  }
  return firstMismatch || unknown('equation');
};

const checkEquationAnswer = (rel, v, parsed, periodic, deadline, lang) => {
  const kind = 'equation';
  if (parsed.allReals) {
    for (let i = 0; i < 25; i++) {
      const r = rel.at({ [v]: -6 + i * 0.5 + 0.0137 });
      if (r && r.d > 1e-7 * r.scale) return mismatch(kind, 'generic');
    }
    return verified(kind);
  }

  if (parsed.noSolution) {
    const roots = scanRoots(rel, v, deadline);
    if (roots.length) return mismatch(kind, 'noSolution', { variable: v, value: fmt(Number(roots[0].toFixed(6)), lang) });
    return verified(kind);
  }

  const names = new Set(parsed.items.map((i) => i.name).filter(Boolean));
  if (names.size > 1) return unknown(kind);

  for (const item of parsed.items) {
    const h = rootHolds(rel, v, item);
    if (h === null) return unknown(kind);
    if (!h.ok) {
      return mismatch(kind, 'substitution', { variable: v, value: fmt(item.value, lang), left: fmt(h.r.a, lang), right: fmt(h.r.b, lang) });
    }
  }

  const stated = parsed.items.filter((i) => isNum(i.value));
  if (!periodic) {
    const found = scanRoots(rel, v, deadline);
    const missing = found.filter((s) => !stated.some((p) => {
      const tol = Math.max(1e-4 * (1 + Math.abs(s)), p.decimals ? 0.5 * Math.pow(10, -p.decimals) * 1.01 : 0);
      return Math.abs(p.value - s) <= tol;
    }));
    if (missing.length) {
      return mismatch(kind, 'missingRoots', { variable: v, values: missing.slice(0, 3).map((m) => fmt(Number(m.toFixed(4)), lang)).join('; ') });
    }
  }
  return verified(kind);
};

// ---------------------------------------------------------------------------------------------
// Systems of equations
// ---------------------------------------------------------------------------------------------

const verifySystem = (text, answer, lang) => {
  const parts = splitSystem(text);
  if (parts.length < 2 || !parts.every((p) => (p.match(/=/g) || []).length === 1)) return null;
  const rels = [];
  for (const p of parts) {
    const eq = splitEquation(p);
    if (!eq) return null;
    const rel = relation(eq.left, eq.right);
    if (!rel) return null;
    rels.push(rel);
  }
  const vars = [...new Set(rels.flatMap((r) => r.vars))].sort();
  if (vars.length < 2 || vars.length > 4) return null;

  const variants = answerVariants(answer);
  let firstMismatch = null;
  for (const parsed of variants) {
    if (parsed.noSolution || parsed.allReals) return unknown('system');
    const scope = {};
    const decimals = {};
    const named = parsed.items.filter((i) => i.name);
    if (named.length === parsed.items.length) {
      for (const it of named) { scope[it.name] = it.value; decimals[it.name] = it.decimals; }
    } else if (!named.length && parsed.items.length === vars.length) {
      parsed.items.forEach((it, idx) => { scope[vars[idx]] = it.value; decimals[vars[idx]] = it.decimals; });   // "(2, 3)" in alphabetical order
    } else continue;
    if (!vars.every((x) => isNum(scope[x]))) continue;

    let bad = null;
    for (const rel of rels) {
      const r = rel.at(scope);
      if (!r) { bad = 'cant'; break; }
      let tol = 1e-7 * r.scale;
      for (const x of rel.vars) {
        if (!decimals[x]) continue;
        const h = 1e-6;
        const r2 = rel.at({ ...scope, [x]: scope[x] + h });
        if (r2) tol += (Math.abs(r2.signed - r.signed) / h) * 0.5 * Math.pow(10, -decimals[x]) * 1.01;
      }
      if (r.d > tol) { bad = { r }; break; }
    }
    if (bad === null) return verified('system');
    if (bad !== 'cant' && !firstMismatch) {
      const shown = vars.map((x) => `${x} = ${fmt(scope[x], lang)}`).join(', ');
      firstMismatch = mismatch('system', 'systemSubstitution', { values: shown, left: fmt(bad.r.a, lang), right: fmt(bad.r.b, lang) });
    }
  }
  return firstMismatch || unknown('system');
};

// ---------------------------------------------------------------------------------------------
// Numeric answers (arithmetic, definite integrals)
// ---------------------------------------------------------------------------------------------

const numberCandidates = (answer) => {
  const first = stripSubscripts(latexToPlain(answer)).split('\n').find((l) => l.trim()) || '';
  if (first.length > 120) return [];
  const out = [];
  for (const seg of first.split(/=|≈/)) {
    const p = parseValue(seg.replace(/^[^0-9(√π\-−+.]+/, (lead) => (/[a-zA-Z]/.test(lead) ? '' : lead)));
    if (p && isNum(p.value)) out.push(p);
  }
  return out;
};

const numberMatches = (expected, cand) => {
  const variants = cand.percent ? [cand.value, cand.value / 100] : [cand.value];
  return variants.some((val) => {
    if (Math.abs(val - expected) <= 1e-9 * (1 + Math.abs(expected))) return true;
    if (cand.decimals) return Math.abs(val - expected) <= 0.5 * Math.pow(10, -cand.decimals) * 1.001 + 1e-12;
    return false;
  });
};

const verifyNumber = (kind, expected, answer, lang) => {
  const cands = numberCandidates(answer);
  if (!cands.length) return unknown(kind);
  if (cands.some((c) => numberMatches(expected, c))) return verified(kind);
  return mismatch(kind, 'value', { expected: fmt(expected, lang) });
};

const verifyArithmetic = (text, answer, lang) => {
  const clean = cleanExpr(text);
  if (!clean) return null;
  const { expr } = normalizeExpression(clean);
  if (/[a-zA-Z]{2,}/.test(expr.replace(/\b(sin|cos|tan|cot|sec|csc|ln|log|log10|sqrt|exp|abs|asin|acos|atan|pi|deg|rad|mod)\b/gi, ''))) return null;
  const node = tryParse(toPoint(expr));
  if (!node || freeVariables(node).length) return null;
  if (/=/.test(expr)) return null;
  const expected = safeEval(toPoint(prep(expr)));
  if (!isNum(expected)) return null;
  // "3/4 ÷ 2/5" is read left to right by mathjs but as two fractions by people: accept either
  const alt = /[÷:]/.test(clean) && /\d\s*\/\s*\d/.test(clean)
    ? safeEval(toPoint(prep(normalizeExpression(clean.replace(/(\d+(?:[.,]\d+)?)\s*\/\s*(\d+(?:[.,]\d+)?)/g, '($1/$2)')).expr)))
    : null;
  const first = verifyNumber('arithmetic', expected, answer, lang);
  if (first.status === 'mismatch' && isNum(alt) && verifyNumber('arithmetic', alt, answer, lang).status === 'verified') return verified('arithmetic');
  return first;
};

// ---------------------------------------------------------------------------------------------
// Derivatives and integrals
// ---------------------------------------------------------------------------------------------

const answerExpression = (answer) => {
  const line = stripSubscripts(latexToPlain(answer)).split('\n').find((l) => l.trim()) || '';
  const body = line.includes('=') ? line.slice(line.lastIndexOf('=') + 1) : line;
  return body.replace(/[.;]\s*$/, '').trim();
};

const sampleCompare = (fa, fb, v, points, relTol, minValid = 3) => {
  let valid = 0;
  for (const x of points) {
    const a = fa(x);
    const b = fb(x);
    if (!isNum(a) || !isNum(b)) continue;
    valid++;
    if (Math.abs(a - b) > relTol * (1 + Math.abs(b))) return { valid, bad: x };
  }
  return { valid, bad: null, enough: valid >= minValid };
};

const scalarFn = (c, v) => (x) => {
  try {
    const r = c.fn.evaluate({ [v]: x });
    return isNum(r) ? r : NaN;
  } catch {
    return NaN;
  }
};

const verifyDerivative = (spec, answer) => {
  const exprSrc = toPoint(prep(spec.expression));
  const f = compile(exprSrc);
  if (!f || f.vars.length > 1) return null;
  const v = spec.variable || f.vars[0] || 'x';
  const A = compile(toPoint(prep(answerExpression(answer))));
  if (!A || A.vars.some((x) => x !== v)) return unknown('derivative');

  let ref;
  try {
    const d = math.derivative(f.node, v).compile();
    ref = scalarFn({ fn: d }, v);
  } catch {
    const fn = scalarFn(f, v);
    ref = (x) => { const h = 1e-5 * (1 + Math.abs(x)); return (fn(x + h) - fn(x - h)) / (2 * h); };
  }
  const res = sampleCompare(scalarFn(A, v), ref, v, DET_SAMPLE, 1e-6);
  if (res.bad !== null) return mismatch('derivative', 'derivative');
  return res.enough ? verified('derivative') : unknown('derivative');
};

const simpson = (fn, a, b, n = 4000) => {
  const h = (b - a) / n;
  let s = fn(a) + fn(b);
  for (let i = 1; i < n; i++) s += fn(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
};

const verifyIntegral = (spec, answer, lang) => {
  const f = compile(toPoint(prep(spec.expression)));
  if (!f || f.vars.length > 1) return null;
  const v = spec.variable || f.vars[0] || 'x';
  const fn = scalarFn(f, v);

  if (spec.from !== undefined && spec.to !== undefined) {
    const a = safeEval(toPoint(prep(String(spec.from))));
    const b = safeEval(toPoint(prep(String(spec.to))));
    if (!isNum(a) || !isNum(b)) return null;
    const value = simpson(fn, a, b);
    if (!isNum(value)) return null;
    return verifyNumber('integral', value, answer, lang);
  }

  const body = answerExpression(answer).replace(/\s*\+\s*(?:C|c|const\.?|konst\.?)\s*$/, '');
  const F = compile(toPoint(prep(body)));
  if (!F || F.vars.some((x) => x !== v)) return unknown('integral');
  const Fn = scalarFn(F, v);
  const dF = (x) => { const h = 1e-5 * (1 + Math.abs(x)); return (Fn(x + h) - Fn(x - h)) / (2 * h); };
  const res = sampleCompare(dF, fn, v, [0.3, 0.7, 1.1, 1.6, 2.2, 2.9, -0.4, -1.3, -2.1, 0.55], 1e-5);
  if (res.bad !== null) return mismatch('integral', 'integral');
  return res.enough ? verified('integral') : unknown('integral');
};

// ---------------------------------------------------------------------------------------------
// Inequalities: the answer's solution set must agree with the inequality at test points
// ---------------------------------------------------------------------------------------------

const REL_SPLIT = /(<=|>=|<|>)/;

const evalBound = (s) => safeEval(toPoint(prep(s)), true);

/** Answer → intervals [{ lo, hi, loOpen, hiOpen, exact }] | null. */
const parseInequalityAnswer = (answerRaw, v) => {
  let t = normalizeCore(stripSubscripts(latexToPlain(answerRaw)).split('\n').find((l) => l.trim()) || '').trim().replace(/[.;]\s*$/, '');
  if (NO_SOLUTION.test(t)) return [];
  if (ALL_REALS.test(t)) return [{ lo: -Infinity, hi: Infinity, loOpen: true, hiOpen: true, exact: true }];
  t = t.replace(/^\s*[a-zA-Z]\s*(?:∈|in)\s*/, '').replace(/^\s*(?:solution|zgjidhja|lösung)\s*:?\s*/i, '');
  t = t.replace(OR_WORDS, ' ∪ ').replace(/;/g, ' ∪ ');
  const pieces = t.split(/∪|\bU\b/).map((p) => p.trim()).filter(Boolean);
  if (!pieces.length) return null;
  const out = [];
  for (const piece of pieces) {
    const interval = piece.match(/^([[(])(.*)([\])])$/s);
    if (interval) {
      const bounds = splitTop(interval[2]);
      if (bounds.length !== 2) return null;
      const lo = evalBound(bounds[0]);
      const hi = evalBound(bounds[1]);
      if (lo === null || hi === null) return null;
      out.push({ lo, hi, loOpen: interval[1] === '(' || lo === -Infinity, hiOpen: interval[3] === ')' || hi === Infinity, exact: decimalsOf(bounds[0]) === null && decimalsOf(bounds[1]) === null });
      continue;
    }
    const toks = piece.split(REL_SPLIT).map((x) => x.trim());
    const isVar = (s) => s === v || /^[a-zA-Z]$/.test(s);
    let lo = -Infinity, hi = Infinity, loOpen = true, hiOpen = true, exact = true;
    const mark = (raw) => { if (decimalsOf(raw) !== null) exact = false; };
    if (toks.length === 3 && isVar(toks[0])) {
      const b = evalBound(toks[2]); if (b === null) return null; mark(toks[2]);
      if (toks[1][0] === '<') { hi = b; hiOpen = toks[1] === '<'; } else { lo = b; loOpen = toks[1] === '>'; }
    } else if (toks.length === 3 && isVar(toks[2])) {
      const b = evalBound(toks[0]); if (b === null) return null; mark(toks[0]);
      if (toks[1][0] === '<') { lo = b; loOpen = toks[1] === '<'; } else { hi = b; hiOpen = toks[1] === '>'; }
    } else if (toks.length === 5 && isVar(toks[2]) && toks[1][0] === toks[3][0]) {
      const a = evalBound(toks[0]); const b = evalBound(toks[4]); if (a === null || b === null) return null; mark(toks[0]); mark(toks[4]);
      if (toks[1][0] === '<') { lo = a; loOpen = toks[1] === '<'; hi = b; hiOpen = toks[3] === '<'; }
      else { hi = a; hiOpen = toks[1] === '>'; lo = b; loOpen = toks[3] === '>'; }
    } else return null;
    out.push({ lo, hi, loOpen, hiOpen, exact });
  }
  return out;
};

const inIntervals = (x, intervals) => intervals.some((iv) => {
  const aboveLo = iv.loOpen ? x > iv.lo : x >= iv.lo;
  const belowHi = iv.hiOpen ? x < iv.hi : x <= iv.hi;
  return aboveLo && belowHi;
});

const verifyInequality = (text, answer, lang) => {
  const core = toPoint(prep(cleanExpr(text)));
  if (!REL_SPLIT.test(core) || /=(?!=)/.test(core.replace(/<=|>=/g, '')) || /°/.test(text)) return null;
  const toks = core.split(REL_SPLIT).map((x) => x.trim());
  if (toks.length !== 3 && toks.length !== 5) return null;
  const sides = toks.filter((_, i) => i % 2 === 0);
  const ops = toks.filter((_, i) => i % 2 === 1);
  const comps = [];
  for (let i = 0; i < ops.length; i++) {
    const rel = relation(sides[i], sides[i + 1]);
    if (!rel) return null;
    comps.push({ rel, op: ops[i] });
  }
  const vars = [...new Set(comps.flatMap((c) => c.rel.vars))];
  if (vars.length !== 1) return null;
  const v = vars[0];

  let intervals = parseInequalityAnswer(answer, v);
  if (intervals === null) intervals = parseInequalityAnswer(String(answer).replace(/\s*\(.*\)\s*$/s, ''), v);
  if (intervals === null) return unknown('inequality');

  const holds = (x) => {
    for (const { rel, op } of comps) {
      const r = rel.at({ [v]: x });
      if (!r || Number.isNaN(r.signed)) return null;
      const tol = 1e-9 * r.scale;
      const ok = op === '<' ? r.signed < -tol : op === '<=' ? r.signed <= tol : op === '>' ? r.signed > tol : r.signed >= -tol;
      if (!ok) return false;
    }
    return true;
  };

  const deadline = Date.now() + TIME_BUDGET_MS;
  const critical = new Set();
  for (const iv of intervals) for (const b of [iv.lo, iv.hi]) if (Number.isFinite(b)) critical.add(b);
  for (const { rel } of comps) for (const r of scanRoots(rel, v, deadline)) critical.add(r);
  const sorted = [...critical].sort((a, b) => a - b);
  const samples = sorted.length ? [sorted[0] - 1, sorted[sorted.length - 1] + 1] : [-10, 0, 10];
  for (let i = 0; i + 1 < sorted.length; i++) samples.push((sorted[i] + sorted[i + 1]) / 2);
  samples.push(0);

  let checked = 0;
  for (const x of samples) {
    const truth = holds(x);
    if (truth === null) continue;
    checked++;
    if (truth !== inIntervals(x, intervals)) return mismatch('inequality', 'inequality', { variable: v, value: fmt(Number(x.toFixed(6)), lang) });
  }
  for (const iv of intervals) {
    if (!iv.exact) continue;
    for (const b of [iv.lo, iv.hi]) {
      if (!Number.isFinite(b)) continue;
      const truth = holds(b);
      if (truth === null) continue;
      checked++;
      if (truth !== inIntervals(b, intervals)) return mismatch('inequality', 'inequality', { variable: v, value: fmt(b, lang) });
    }
  }
  return checked ? verified('inequality') : unknown('inequality');
};

// ---------------------------------------------------------------------------------------------
// Factor / expand / simplify: the result must equal the original expression everywhere
// ---------------------------------------------------------------------------------------------

const verifyEquivalence = (exprRaw, answer) => {
  const E = compile(toPoint(prep(cleanExpr(exprRaw))));
  const A = compile(toPoint(prep(answerExpression(answer))));
  if (!E || !A) return unknown('equivalence');
  const vars = E.vars;
  if (vars.length > 3 || A.vars.some((x) => !vars.includes(x))) return unknown('equivalence');
  let valid = 0;
  for (let i = 0; i < DET_SAMPLE.length; i++) {
    const scope = {};
    vars.forEach((x, j) => { scope[x] = DET_SAMPLE[(i + 5 * j) % DET_SAMPLE.length]; });
    let a;
    let b;
    try { a = E.fn.evaluate({ ...scope }); b = A.fn.evaluate({ ...scope }); } catch { continue; }
    if (!isNum(a) || !isNum(b)) continue;
    valid++;
    if (Math.abs(a - b) > 1e-8 * (1 + Math.abs(a))) return mismatch('equivalence', 'equivalence');
  }
  return valid >= 3 || (!vars.length && valid >= 1) ? verified('equivalence') : unknown('equivalence');
};

// ---------------------------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------------------------

export const verifyAnswer = ({ problem, answer, lang = 'en' } = {}) => {
  try {
    if (!problem || !answer || typeof problem !== 'string' || typeof answer !== 'string') return unknown(null);
    const text = prepProblem(problem);
    if (!text || text.length > 400) return unknown(null);

    const der = detectDerivative(text);
    if (der) return verifyDerivative(der, answer) || unknown('derivative');
    const integ = detectIntegral(text);
    if (integ) return verifyIntegral(integ, answer, lang) || unknown('integral');

    for (const { re } of KEYWORD_TOOLS) {
      const m = text.match(re);
      if (m) return verifyEquivalence(m[1], answer);
    }

    const sys = verifySystem(text, answer, lang);
    if (sys) return sys;
    if (looksLikeInequality(normalizeCore(cleanExpr(text)))) return verifyInequality(text, answer, lang) || unknown('inequality');

    const eqCount = (normalizeCore(cleanExpr(text)).match(/=/g) || []).length;
    if (eqCount === 1) return verifyEquation(text, answer, lang) || unknown('equation');
    if (eqCount === 0) return verifyArithmetic(text, answer, lang) || unknown('arithmetic');
    return unknown(null);
  } catch {
    return unknown(null);
  }
};

export default verifyAnswer;
