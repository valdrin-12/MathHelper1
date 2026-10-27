/**
 * functionAnalysis.js — offline, Symbolab-style analysis of real functions f(x).
 *
 * Pure JS on top of mathjs. Expressions are parsed with math.parse, checked against a whitelist
 * (numbers, x, e, pi, + − · / ^ and known functions) and compiled with node.compile() — never eval
 * or new Function. All results are plain data (numbers, arrays, objects).
 *
 * Numerical approach: dense sampling on an analysis window, sign changes refined by bisection
 * (roots, critical points, inflection points), blow-up checks for vertical asymptotes and
 * evaluation at large |x| for horizontal asymptotes. Trig functions use radians.
 */
import { create, all } from 'mathjs';
import { toMathExpression, MAX_GRAPH_FUNCTIONS } from './graphService';

export const math = create(all, { predictable: true }); // predictable: sqrt(-1), log(-1) → NaN (no complex results)

const ALLOWED_FUNCTIONS = new Set([
  'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'asin', 'acos', 'atan', 'acot',
  'sinh', 'cosh', 'tanh', 'sqrt', 'cbrt', 'log', 'log10', 'log2', 'exp', 'abs',
]);
const PERIODIC_FUNCTIONS = new Set(['sin', 'cos', 'tan', 'cot', 'sec', 'csc']);
const ALLOWED_CONSTANTS = new Set(['e', 'pi']);
const ALLOWED_OPERATORS = new Set(['+', '-', '*', '/', '^']);
const MAX_EXPR_LENGTH = 200;

/** Default analysis window: [−50, 50] for general functions, [−2π, 2π] when trig functions occur */
export const DEFAULT_HALF_WINDOW = 50;
export const PERIODIC_HALF_WINDOW = 2 * Math.PI;
const SAMPLES = 6000;
const PERIODIC_SAMPLES = 2400;
const MAX_LISTED = 12;

const fin = (v) => typeof v === 'number' && Number.isFinite(v);

// ── Compilation ──────────────────────────────────────────────────────────────

function toReal(v) {
  if (typeof v === 'number') return v;
  if (v && typeof v === 'object' && typeof v.re === 'number' && typeof v.im === 'number') {
    return Math.abs(v.im) < 1e-12 ? v.re : NaN;
  }
  return NaN;
}

function validateNode(root) {
  let error = null;
  let usesX = false;
  let periodic = false;
  root.traverse((node, path, parent) => {
    if (error) return;
    switch (node.type) {
      case 'ConstantNode':
        if (typeof node.value !== 'number') error = { code: 'unsupported' };
        break;
      case 'ParenthesisNode':
        break;
      case 'OperatorNode':
        if (!ALLOWED_OPERATORS.has(node.op) || node.args.length > 2) error = { code: 'unsupported' };
        break;
      case 'FunctionNode': {
        const name = node.fn && node.fn.type === 'SymbolNode' ? node.fn.name : null;
        if (!name || !ALLOWED_FUNCTIONS.has(name)) error = { code: 'unknownSymbol', detail: name || '?' };
        else if (PERIODIC_FUNCTIONS.has(name)) periodic = true;
        break;
      }
      case 'SymbolNode':
        if (parent && parent.type === 'FunctionNode' && parent.fn === node) break;
        if (node.name === 'x') usesX = true;
        else if (!ALLOWED_CONSTANTS.has(node.name)) error = { code: 'unknownSymbol', detail: node.name };
        break;
      default:
        error = { code: 'unsupported' };
    }
  });
  return { error, usesX, periodic };
}

function makeEvaluator(code) {
  const scope = { x: 0 };
  return (x) => {
    scope.x = x;
    try {
      return toReal(code.evaluate(scope));
    } catch (e) {
      return NaN;
    }
  };
}

function numericDerivative(g, rel = 1e-5) {
  return (x) => {
    const h = rel * Math.max(1, Math.abs(x));
    const a = g(x + h);
    const b = g(x - h);
    if (fin(a) && fin(b)) return (a - b) / (2 * h);
    const c = g(x);
    if (fin(a) && fin(c)) return (a - c) / h;
    if (fin(c) && fin(b)) return (c - b) / h;
    return NaN;
  };
}

// Symbolic derivative via mathjs, cross-checked against a numeric derivative (null when unusable)
function symbolicDerivative(node, base) {
  try {
    const dNode = math.derivative(node, 'x', { simplify: false });
    const fn = makeEvaluator(dNode.compile());
    const numeric = numericDerivative(base);
    for (const x of [-2.31, -0.73, 0.41, 1.93, 3.17, 7.7]) {
      const a = fn(x);
      const b = numeric(x);
      if (fin(a) && fin(b) && Math.abs(a - b) > 1e-3 * Math.max(1, Math.abs(a), Math.abs(b))) return null;
    }
    // Some symbolic forms (e.g. fractional powers of negative numbers) evaluate very slowly in mathjs;
    // fall back to the numeric derivative when the compiled derivative is much slower than f itself
    const timed = (g) => {
      const t0 = Date.now();
      for (let i = 0; i < 40; i++) g(-9.7 + i * 0.49);
      return Date.now() - t0;
    };
    if (timed(fn) > 10 + 4 * timed(base)) return null;
    return { node: dNode, fn };
  } catch (e) {
    return null;
  }
}

const compileCache = new Map();

/**
 * Compiles user input into evaluators. Returns
 *   { ok: true, expr, f, d1, d2, periodic, usesX, symbolic }  or  { ok: false, error, detail? }
 * error: 'empty' | 'tooLong' | 'syntax' | 'unknownSymbol' | 'unsupported'
 */
export function compileFunction(input) {
  const expr = toMathExpression(input);
  if (!expr) return { ok: false, error: 'empty' };
  if (expr.length > MAX_EXPR_LENGTH) return { ok: false, error: 'tooLong', expr };
  if (compileCache.has(expr)) return compileCache.get(expr);

  let result;
  try {
    const node = math.parse(expr);
    const check = validateNode(node);
    if (check.error) {
      result = { ok: false, error: check.error.code, detail: check.error.detail, expr };
    } else {
      const f = makeEvaluator(node.compile());
      const d1Sym = symbolicDerivative(node, f);
      const d1 = d1Sym ? d1Sym.fn : numericDerivative(f);
      const d2Sym = d1Sym ? symbolicDerivative(d1Sym.node, d1) : null;
      const d2 = d2Sym ? d2Sym.fn : numericDerivative(d1, 1e-4);
      result = {
        ok: true,
        expr,
        f,
        d1,
        d2,
        periodic: check.periodic,
        usesX: check.usesX,
        symbolic: !!d1Sym,
      };
    }
  } catch (e) {
    result = { ok: false, error: 'syntax', expr };
  }
  if (compileCache.size > 60) compileCache.clear();
  compileCache.set(expr, result);
  return result;
}

// ── Numeric helpers ──────────────────────────────────────────────────────────

function sampleGrid(g, a, b, n) {
  const xs = new Array(n + 1);
  const ys = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    xs[i] = x;
    ys[i] = g(x);
  }
  return { xs, ys };
}

/**
 * Sign changes of sampled values gs (only across contiguous samples where valid[i]).
 * Returns brackets { a, b, before, after } or { exact, before, after } (zeros hit exactly).
 */
function signChanges(xs, gs, valid, zeroTol = 0) {
  const out = [];
  let last = -1;
  let lastSign = 0;
  let zeroStart = -1;
  for (let i = 0; i < xs.length; i++) {
    if (!valid[i]) {
      last = -1;
      zeroStart = -1;
      continue;
    }
    const g = gs[i];
    if (!fin(g)) continue; // e.g. derivative undefined at a corner: skip without breaking contiguity
    const s = Math.abs(g) <= zeroTol ? 0 : Math.sign(g);
    if (s === 0) {
      if (zeroStart < 0) zeroStart = i;
      continue;
    }
    if (last >= 0 && s !== lastSign) {
      if (zeroStart >= 0) {
        if (i - zeroStart <= 3) out.push({ exact: (xs[zeroStart] + xs[i - 1]) / 2, before: lastSign, after: s });
      } else {
        out.push({ a: xs[last], b: xs[i], before: lastSign, after: s });
      }
    } else if (last >= 0 && zeroStart >= 0 && i - zeroStart <= 3) {
      out.push({ exact: (xs[zeroStart] + xs[i - 1]) / 2, before: lastSign, after: s, touch: true });
    }
    last = i;
    lastSign = s;
    zeroStart = -1;
  }
  return out;
}

function bisect(g, a, b) {
  let ga = g(a);
  if (!fin(ga)) ga = g(a + (b - a) * 1e-6);
  for (let k = 0; k < 200; k++) {
    const m = (a + b) / 2;
    if (m <= a || m >= b) break;
    let gm = g(m);
    if (!fin(gm)) gm = g(m + (b - a) * 1e-3);
    if (!fin(gm)) break;
    if (gm === 0) return m;
    if (Math.sign(gm) === Math.sign(ga)) {
      a = m;
      ga = gm;
    } else {
      b = m;
    }
  }
  return (a + b) / 2;
}

const bracketPoint = (g, br) => (br.exact !== undefined ? br.exact : bisect(g, br.a, br.b));

// Boundary between a point where f is defined (good) and one where it is not (bad)
function bisectValidity(f, good, bad) {
  for (let k = 0; k < 200; k++) {
    const m = (good + bad) / 2;
    if (m === good || m === bad) break;
    if (fin(f(m))) good = m;
    else bad = m;
  }
  return good;
}

/** Tolerance for "f(c) is zero": relative to the size of f one grid step away */
function localTol(f, c, step) {
  let m = 1;
  for (const v of [f(c - step), f(c + step)]) if (fin(v)) m = Math.max(m, Math.abs(v));
  return 1e-7 * m;
}

/** |f| grows without bound near c (from at least one side) */
function isPole(f, c) {
  const s = Math.max(1, Math.abs(c));
  const mags = [1e-3, 1e-6, 1e-9].map((d) => {
    let m = -1;
    for (const v of [f(c - d * s), f(c + d * s)]) {
      if (v === Infinity || v === -Infinity) m = Infinity;
      else if (fin(v)) m = Math.max(m, Math.abs(v));
    }
    return m;
  });
  if (mags.some((m) => m < 0)) return false;
  const [m1, m2, m3] = mags;
  if (m3 === Infinity) return m2 > m1 || m2 === Infinity;
  return m3 > 15 && m3 > m2 + 1 && m2 > m1;
}

/** Snap a computed x to integers, simple fractions or multiples of π/k when it is extremely close */
export function snapValue(v) {
  if (!fin(v)) return v;
  if (Math.abs(v) < 1e-9) return 0;
  const tol = 1e-7 * Math.max(1, Math.abs(v));
  const r = Math.round(v);
  if (Math.abs(v - r) < tol) return r;
  for (const den of [1, 2, 3, 4, 6]) {
    const k = Math.round((v * den) / Math.PI);
    if (k !== 0 && Math.abs(v - (k * Math.PI) / den) < tol) return (k * Math.PI) / den;
  }
  for (const den of [2, 3, 4, 5, 8]) {
    const k = Math.round(v * den);
    if (Math.abs(v - k / den) < tol) return k / den;
  }
  return Number(v.toPrecision(10));
}

function cleanY(v) {
  if (!fin(v)) return v;
  if (Math.abs(v) < 1e-9) return 0;
  const r = Math.round(v);
  if (Math.abs(v - r) < 1e-8 * Math.max(1, Math.abs(v))) return r;
  return Number(v.toPrecision(10));
}

function addUnique(list, x, tol = 1e-6) {
  if (list.some((v) => Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)))) return false;
  list.push(x);
  return true;
}

const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a));

function dedupePoints(points) {
  const out = [];
  for (const p of points.sort((a, b) => a.x - b.x)) {
    if (!out.some((q) => near(q.x, p.x))) out.push(p);
  }
  return out;
}

// Keep at most MAX_LISTED points, closest to the origin, sorted by x
function limitList(points) {
  if (points.length <= MAX_LISTED) return { list: points, truncated: false };
  const list = [...points].sort((a, b) => Math.abs(a.x) - Math.abs(b.x)).slice(0, MAX_LISTED).sort((a, b) => a.x - b.x);
  return { list, truncated: true };
}

function quantile(sorted, q) {
  if (!sorted.length) return NaN;
  const i = Math.min(sorted.length - 1, Math.max(0, Math.round(q * (sorted.length - 1))));
  return sorted[i];
}

function limitAt(f, dir) {
  const p = [1e3, 1e4, 1e5, 1e6, 1e7].map((v) => f(dir * v));
  if (!p.every(fin)) return null;
  const d1 = Math.abs(p[2] - p[1]);
  const d2 = Math.abs(p[3] - p[2]);
  const d3 = Math.abs(p[4] - p[3]);
  if (d1 < 1e-2 && d2 < 1e-3 && d3 < 1e-4) {
    const L = p[4];
    if (Math.abs(L - Math.round(L)) < 1e-4) return Math.round(L) || 0;
    for (const den of [1, 2, 3, 4, 6]) {
      const k = Math.round((L * den) / Math.PI);
      if (k !== 0 && Math.abs(L - (k * Math.PI) / den) < 1e-5) return (k * Math.PI) / den;
    }
    return Math.round(L * 1e5) / 1e5;
  }
  return null;
}

// ── Single-function analysis ─────────────────────────────────────────────────

function resolveWindow(fn, options) {
  if (fin(options.xMin) && fin(options.xMax) && options.xMax > options.xMin) {
    return { xMin: options.xMin, xMax: options.xMax, custom: true };
  }
  const half = fn.periodic ? PERIODIC_HALF_WINDOW : DEFAULT_HALF_WINDOW;
  return { xMin: -half, xMax: half, custom: false };
}

/**
 * Analyse one function. `input` is user text or a compiled function from compileFunction().
 * options: { xMin, xMax } analysis window (default [−50, 50], or [−2π, 2π] for trig functions).
 *
 * Returns plain data:
 * { ok, expr, periodic, constant, window, domain: { intervals, excluded, allReal },
 *   roots: [{x, y, touch}], yIntercept: {x, y} | null, maxima, minima, inflections: [{x, y}],
 *   increasing, decreasing: [{from, to, fromClosed, toClosed}], verticalAsymptotes: [x],
 *   horizontalAsymptotes: { left, right } (number | null), viewport: {xMin, xMax, yMin, yMax}, truncated }
 * or { ok: false, error, detail }.
 */
export function analyzeFunction(input, options = {}) {
  const fn = typeof input === 'string' ? compileFunction(input) : input;
  if (!fn || !fn.ok) return { ok: false, error: fn ? fn.error : 'empty', detail: fn && fn.detail, expr: fn && fn.expr };

  const { f, d1, d2 } = fn;
  const win = resolveWindow(fn, options);
  const { xMin, xMax } = win;
  const n = options.samples || (fn.periodic ? PERIODIC_SAMPLES : SAMPLES);
  const step = (xMax - xMin) / n;

  const { xs, ys } = sampleGrid(f, xMin, xMax, n);
  const valid = ys.map(fin);
  if (!valid.some(Boolean)) return { ok: false, error: 'undefinedEverywhere', expr: fn.expr };

  const absSorted = ys.filter(fin).map(Math.abs).sort((a, b) => a - b);
  const scale = Math.max(1, quantile(absSorted, 0.9));
  const rootTol = 1e-12 * scale;

  const poles = [];
  const excluded = [];

  // 1. Domain: runs of defined samples, refined boundaries
  const runs = [];
  for (let i = 0; i <= n; i++) {
    if (!valid[i]) continue;
    let j = i;
    while (j + 1 <= n && valid[j + 1]) j++;
    const from = i === 0 ? xMin : bisectValidity(f, xs[i], xs[i - 1]);
    const to = j === n ? xMax : bisectValidity(f, xs[j], xs[j + 1]);
    runs.push({ from, to, fromEdge: i === 0, toEdge: j === n });
    i = j;
  }
  // Merge runs separated by a single undefined point (e.g. 1/x when the grid hits x = 0)
  const merged = [];
  for (const run of runs) {
    const prev = merged[merged.length - 1];
    if (prev && run.from - prev.to < 1e-6 * Math.max(1, Math.abs(run.from))) {
      addUnique(excluded, (prev.to + run.from) / 2);
      prev.to = run.to;
      prev.toEdge = run.toEdge;
    } else {
      merged.push({ ...run });
    }
  }
  // Boundary blow-ups (log x at 0) are vertical asymptotes
  for (const run of merged) {
    if (!run.fromEdge && isPole(f, run.from)) addUnique(poles, run.from);
    if (!run.toEdge && isPole(f, run.to)) addUnique(poles, run.to);
  }
  for (const x of excluded) if (isPole(f, x)) addUnique(poles, x);

  // Isolated undefined points the grid may have missed (holes like (x²−1)/(x−1) at 1, poles at π/2 …)
  const special = [];
  for (let k = Math.ceil(xMin); k <= Math.floor(xMax); k++) special.push(k);
  if (fn.periodic) {
    for (let k = Math.ceil((xMin * 2) / Math.PI); k <= Math.floor((xMax * 2) / Math.PI); k++) special.push((k * Math.PI) / 2);
  }
  for (const x of special) {
    if (x <= xMin || x >= xMax || fin(f(x))) continue;
    const d = 1e-7 * Math.max(1, Math.abs(x));
    if (fin(f(x - d)) && fin(f(x + d))) {
      addUnique(excluded, x);
      if (isPole(f, x)) addUnique(poles, x);
    }
  }

  // 2. Roots (sign changes of f)
  let roots = [];
  for (const br of signChanges(xs, ys, valid, 0)) {
    if (br.touch) {
      const c = br.exact;
      if (Math.abs(f(c)) <= localTol(f, c, step)) roots.push({ x: c, touch: true });
      continue;
    }
    const c = bracketPoint(f, br);
    if (isPole(f, c)) {
      addUnique(poles, c);
      addUnique(excluded, c);
      continue;
    }
    const v = f(c);
    if (fin(v) && Math.abs(v) <= localTol(f, c, step)) roots.push({ x: c, touch: false });
  }

  // Roots on a domain boundary (sqrt(x) at 0)
  for (const run of merged) {
    for (const [edge, b] of [[run.fromEdge, run.from], [run.toEdge, run.to]]) {
      if (edge) continue;
      const sb = snapValue(b);
      const v = f(sb);
      if (fin(v) && Math.abs(v) <= rootTol) roots.push({ x: sb, touch: false });
    }
  }

  // 3. Critical points (sign changes of f')
  const d1s = xs.map((x) => d1(x));
  const zeroTolD = fn.symbolic ? 1e-12 * scale : 1e-7 * scale;
  let maxima = [];
  let minima = [];
  for (const br of signChanges(xs, d1s, valid, zeroTolD)) {
    if (br.touch) continue;
    const c = bracketPoint(d1, br);
    if (isPole(f, c)) {
      addUnique(poles, c);
      if (fin(f(c - 1e-7)) && fin(f(c + 1e-7))) addUnique(excluded, c);
      continue;
    }
    const y = f(c);
    if (!fin(y)) continue;
    if (br.before > 0 && br.after < 0) maxima.push({ x: c });
    else if (br.before < 0 && br.after > 0) minima.push({ x: c });
    if (Math.abs(y) <= localTol(f, c, step)) roots.push({ x: c, touch: true });
  }

  // 4. Inflection points (sign changes of f'')
  let inflections = [];
  const d2s = xs.map((x) => d2(x));
  const zeroTolD2 = fn.symbolic ? 1e-10 * scale : 1e-5 * scale;
  for (const br of signChanges(xs, d2s, valid, zeroTolD2)) {
    if (br.touch) continue;
    const c = bracketPoint(d2, br);
    if (poles.some((p) => near(p, c, 1e-5)) || excluded.some((p) => near(p, c, 1e-5))) continue;
    if (isPole(f, c) || !fin(f(c))) continue;
    const dl = d2(c - step / 2);
    const dr = d2(c + step / 2);
    if (fin(dl) && fin(dr) && Math.sign(dl) !== Math.sign(dr) && Math.abs(dl) > zeroTolD2 && Math.abs(dr) > zeroTolD2) {
      inflections.push({ x: c });
    }
  }

  // Snap & evaluate y values
  const finalize = (p, extra) => {
    const sx = snapValue(p.x);
    let y = f(sx);
    if (!fin(y)) y = f(p.x);
    return { ...extra, x: sx, y: cleanY(y) };
  };
  const notExcluded = (p) => !excluded.some((e) => near(e, p.x, 1e-6)) && !poles.some((e) => near(e, p.x, 1e-6));
  roots = dedupePoints(roots.filter(notExcluded).map((p) => ({ ...finalize(p, { touch: p.touch }), y: 0 })));
  maxima = dedupePoints(maxima.filter(notExcluded).map((p) => finalize(p)));
  minima = dedupePoints(minima.filter(notExcluded).map((p) => finalize(p)));
  inflections = dedupePoints(inflections.map((p) => finalize(p)));

  const verticalAsymptotes = [...new Set(poles.map(snapValue))].sort((a, b) => a - b);
  const excludedPoints = [...new Set(excluded.map(snapValue))].sort((a, b) => a - b);

  // Domain intervals: window edges count as ±∞ (assumed to continue beyond the window)
  const domainIntervals = [];
  for (const run of merged) {
    const inner = excludedPoints.filter((x) => x > run.from && x < run.to);
    const cuts = [run.from, ...inner, run.to];
    for (let i = 0; i < cuts.length - 1; i++) {
      const isFirst = i === 0;
      const isLast = i === cuts.length - 2;
      const from = isFirst && run.fromEdge ? -Infinity : snapValue(cuts[i]);
      const to = isLast && run.toEdge ? Infinity : snapValue(cuts[i + 1]);
      domainIntervals.push({
        from,
        to,
        fromClosed: isFirst && fin(from) ? fin(f(from)) : false,
        toClosed: isLast && fin(to) ? fin(f(to)) : false,
      });
    }
  }
  const singleRun = merged.length === 1 && merged[0].fromEdge && merged[0].toEdge;
  const domain = {
    intervals: singleRun ? [{ from: -Infinity, to: Infinity, fromClosed: false, toClosed: false }] : domainIntervals,
    excluded: singleRun ? excludedPoints : [],
    allReal: singleRun && excludedPoints.length === 0,
  };
  if (!singleRun) {
    // Excluded points are already expressed by the split intervals
    domain.excluded = [];
  }

  // Constant function?
  const finiteYs = ys.filter(fin);
  const constant = finiteYs.every((y) => Math.abs(y - finiteYs[0]) < 1e-12 * Math.max(1, Math.abs(finiteYs[0])));

  // 5. Increasing / decreasing intervals
  const increasing = [];
  const decreasing = [];
  if (!constant) {
    const breakXs = [...maxima, ...minima].map((p) => p.x);
    const pieces = [];
    for (const run of merged) {
      const inner = [...breakXs, ...excludedPoints].filter((x) => x > run.from && x < run.to);
      const cuts = [run.from, ...[...new Set(inner)].sort((a, b) => a - b), run.to];
      for (let i = 0; i < cuts.length - 1; i++) {
        const a = cuts[i];
        const b = cuts[i + 1];
        if (b - a < 1e-9) continue;
        let pos = 0;
        let neg = 0;
        for (const t of [0.1, 0.3, 0.5, 0.7, 0.9]) {
          const v = d1(a + (b - a) * t);
          if (fin(v) && Math.abs(v) > zeroTolD) {
            if (v > 0) pos++;
            else neg++;
          }
        }
        const sign = pos > neg ? 1 : neg > pos ? -1 : 0;
        if (!sign) continue;
        const edgeToInf = !fn.periodic && !win.custom;
        pieces.push({
          from: i === 0 && run.fromEdge && edgeToInf ? -Infinity : snapValue(a),
          to: i === cuts.length - 2 && run.toEdge && edgeToInf ? Infinity : snapValue(b),
          sign,
        });
      }
    }
    // Merge neighbours with the same direction unless separated by an excluded point
    const mergedPieces = [];
    for (const p of pieces) {
      const prev = mergedPieces[mergedPieces.length - 1];
      if (prev && prev.sign === p.sign && prev.to === p.from && !excludedPoints.some((e) => near(e, p.from))) {
        prev.to = p.to;
      } else {
        mergedPieces.push({ ...p });
      }
    }
    for (const p of mergedPieces) {
      const iv = { from: p.from, to: p.to, fromClosed: false, toClosed: false };
      (p.sign > 0 ? increasing : decreasing).push(iv);
    }
  }

  // 6. Horizontal asymptotes
  const horizontalAsymptotes = constant ? { left: null, right: null } : { left: limitAt(f, -1), right: limitAt(f, 1) };

  // 7. y-intercept
  const y0 = f(0);
  const yIntercept = xMin <= 0 && xMax >= 0 && fin(y0) ? { x: 0, y: cleanY(y0) } : null;

  const lr = limitList(roots);
  const lmax = limitList(maxima);
  const lmin = limitList(minima);
  const linf = limitList(inflections);

  const result = {
    ok: true,
    expr: fn.expr,
    periodic: fn.periodic,
    constant,
    window: { xMin, xMax },
    domain,
    roots: lr.list,
    yIntercept,
    maxima: lmax.list,
    minima: lmin.list,
    inflections: linf.list,
    increasing,
    decreasing,
    verticalAsymptotes,
    horizontalAsymptotes,
    truncated: lr.truncated || lmax.truncated || lmin.truncated || linf.truncated,
  };
  result.viewport = computeViewport([{ fn, analysis: result }], []);
  return result;
}

// ── Viewport ─────────────────────────────────────────────────────────────────

function niceFloor(v, span) {
  const unit = Math.pow(10, Math.floor(Math.log10(span)) - 1);
  return Math.floor(v / unit) * unit;
}
function niceCeil(v, span) {
  const unit = Math.pow(10, Math.floor(Math.log10(span)) - 1);
  return Math.ceil(v / unit) * unit;
}

function keyPointsOf(analysis) {
  return [
    ...analysis.roots,
    ...analysis.maxima,
    ...analysis.minima,
    ...analysis.inflections,
    ...(analysis.yIntercept ? [analysis.yIntercept] : []),
  ];
}

/**
 * Suggested viewport for one or more analysed functions ({ fn, analysis } pairs) plus extra points
 * (e.g. intersections). Shows all key points with padding and a robust y-range.
 */
function computeViewport(items, extraPoints) {
  const points = [...extraPoints];
  const asymptotes = [];
  let periodic = false;
  let domainLeft = Infinity;
  let domainRight = -Infinity;
  for (const { fn, analysis } of items) {
    points.push(...keyPointsOf(analysis));
    asymptotes.push(...analysis.verticalAsymptotes);
    periodic = periodic || fn.periodic;
    const ivs = analysis.domain.intervals;
    if (ivs.length) {
      domainLeft = Math.min(domainLeft, ivs[0].from);
      domainRight = Math.max(domainRight, ivs[ivs.length - 1].to);
    }
  }
  const featureXs = [...points.map((p) => p.x), ...asymptotes].filter(fin);
  let xMin;
  let xMax;
  if (periodic) {
    xMin = -7;
    xMax = 7;
    if (featureXs.length) {
      xMin = Math.min(xMin, Math.min(...featureXs) - 1);
      xMax = Math.max(xMax, Math.max(...featureXs) + 1);
    }
  } else if (!featureXs.length) {
    xMin = -10;
    xMax = 10;
  } else {
    const lo = Math.min(...featureXs);
    const hi = Math.max(...featureXs);
    const pad = Math.max((hi - lo) * 0.3, 2);
    xMin = lo - pad;
    xMax = hi + pad;
    if (xMax - xMin < 8) {
      const c = (lo + hi) / 2;
      xMin = c - 4;
      xMax = c + 4;
    }
  }
  // Do not waste space on large undefined regions
  if (fin(domainLeft) && domainLeft > xMin) xMin = Math.min(domainLeft - (xMax - domainLeft) * 0.1, xMax - 1);
  if (fin(domainRight) && domainRight < xMax) xMax = Math.max(domainRight + (domainRight - xMin) * 0.1, xMin + 1);

  // y-range from samples in the x-range
  const ys = [];
  for (const { fn } of items) {
    for (let i = 0; i <= 400; i++) {
      const y = fn.f(xMin + ((xMax - xMin) * i) / 400);
      if (fin(y)) ys.push(y);
    }
  }
  const pointYs = points.map((p) => p.y).filter(fin);
  let yMin;
  let yMax;
  if (!ys.length && !pointYs.length) {
    yMin = -10;
    yMax = 10;
  } else {
    ys.sort((a, b) => a - b);
    const hasPoleInView = asymptotes.some((a) => a > xMin && a < xMax);
    let lo = ys.length ? ys[0] : Math.min(...pointYs);
    let hi = ys.length ? ys[ys.length - 1] : Math.max(...pointYs);
    if (ys.length) {
      const q10 = quantile(ys, 0.1);
      const q90 = quantile(ys, 0.9);
      if (hasPoleInView || hi - lo > 8 * Math.max(q90 - q10, 1e-9)) {
        lo = quantile(ys, 0.05);
        hi = quantile(ys, 0.95);
      }
    }
    // Fit the key points, not the whole curve: x³ − 3x reaches ±52 at x = ±4, which would flatten
    // its extrema at ±2. When the curve's range is much larger than the range around its key points,
    // let the curve leave the frame (like Desmos) and frame the features instead.
    const keyXs = points.map((p) => p.x).filter(fin);
    if (!periodic && !hasPoleInView && pointYs.length >= 2 && keyXs.length >= 2) {
      const fxLo = Math.min(...keyXs);
      const fxHi = Math.max(...keyXs);
      const featureYs = [...pointYs];
      for (const { fn } of items) {
        for (let i = 0; i <= 100; i++) {
          const y = fn.f(fxLo + ((fxHi - fxLo) * i) / 100);
          if (fin(y)) featureYs.push(y);
        }
      }
      const fLo = Math.min(...featureYs);
      const fHi = Math.max(...featureYs);
      const fSpan = Math.max(fHi - fLo, 2);
      if (hi - lo > 3 * fSpan) {
        lo = fLo - fSpan * 0.6;
        hi = fHi + fSpan * 0.6;
      }
    }
    for (const y of pointYs) {
      lo = Math.min(lo, y);
      hi = Math.max(hi, y);
    }
    const span0 = hi - lo;
    if (lo > 0 && lo < Math.max(span0, 1) * 0.6) lo = 0;
    if (hi < 0 && -hi < Math.max(span0, 1) * 0.6) hi = 0;
    let span = hi - lo;
    if (span < 1e-9) {
      lo -= 2;
      hi += 2;
      span = 4;
    }
    yMin = lo - span * 0.15;
    yMax = hi + span * 0.15;
    if (yMax - yMin < 2) {
      const c = (yMin + yMax) / 2;
      yMin = c - 1;
      yMax = c + 1;
    }
  }
  const xs = xMax - xMin;
  const ysp = yMax - yMin;
  return {
    xMin: niceFloor(xMin, xs),
    xMax: niceCeil(xMax, xs),
    yMin: niceFloor(yMin, ysp),
    yMax: niceCeil(yMax, ysp),
  };
}

// ── Several functions ────────────────────────────────────────────────────────

/** Intersection points of two compiled functions on a window → { points: [{x, y}], identical } */
export function findIntersections(fa, fb, window, samples = SAMPLES) {
  const { xMin, xMax } = window;
  const g = (x) => fa.f(x) - fb.f(x);
  const dg = (x) => fa.d1(x) - fb.d1(x);
  const { xs, ys } = sampleGrid(g, xMin, xMax, samples);
  const valid = ys.map(fin);
  const vals = ys.filter(fin);
  if (!vals.length) return { points: [], identical: false };
  const identical = xs.every((x, i) => !valid[i] || Math.abs(ys[i]) < 1e-9 * Math.max(1, Math.abs(fa.f(x))));
  if (identical) return { points: [], identical: true };

  const absSorted = vals.map(Math.abs).sort((a, b) => a - b);
  const tol = 1e-7 * Math.max(1, quantile(absSorted, 0.9));
  const raw = [];
  const isBad = (c) => isPole(fa.f, c) || isPole(fb.f, c) || !fin(fa.f(c)) || !fin(fb.f(c));
  for (const br of signChanges(xs, ys, valid, 0)) {
    const c = br.exact !== undefined ? br.exact : bisect(g, br.a, br.b);
    if (!isBad(c) && Math.abs(g(c)) <= tol * 10) raw.push({ x: c });
  }
  const dgs = xs.map(dg);
  for (const br of signChanges(xs, dgs, valid, 1e-12)) {
    if (br.touch) continue;
    const c = bracketPoint(dg, br);
    if (!isBad(c) && Math.abs(g(c)) <= tol * 10) raw.push({ x: c });
  }
  const points = dedupePoints(
    raw.map((p) => {
      const x = snapValue(p.x);
      let y = fa.f(x);
      if (!fin(y)) y = fa.f(p.x);
      return { x, y: cleanY(y) };
    })
  );
  const limited = limitList(points);
  return { points: limited.list, identical: false, truncated: limited.truncated };
}

/**
 * Analyse up to MAX_GRAPH_FUNCTIONS functions together.
 * Empty inputs are skipped (reported as { ok: false, error: 'empty' }).
 * Returns { functions: [analysis], intersections: [{ a, b, points, identical }], viewport }.
 */
export function analyzeFunctions(inputs, options = {}) {
  const list = (inputs || []).slice(0, MAX_GRAPH_FUNCTIONS);
  const compiled = list.map((t) => (typeof t === 'string' ? compileFunction(t) : t));
  const functions = compiled.map((fn) => analyzeFunction(fn, options));
  const okItems = [];
  compiled.forEach((fn, i) => {
    if (functions[i].ok) okItems.push({ fn, analysis: functions[i], index: i });
  });

  const intersections = [];
  const extraPoints = [];
  for (let i = 0; i < okItems.length; i++) {
    for (let j = i + 1; j < okItems.length; j++) {
      const A = okItems[i];
      const B = okItems[j];
      let window;
      if (fin(options.xMin) && fin(options.xMax)) window = { xMin: options.xMin, xMax: options.xMax };
      else if (A.fn.periodic || B.fn.periodic) window = { xMin: -PERIODIC_HALF_WINDOW, xMax: PERIODIC_HALF_WINDOW };
      else window = { xMin: -DEFAULT_HALF_WINDOW, xMax: DEFAULT_HALF_WINDOW };
      const res = findIntersections(A.fn, B.fn, window);
      intersections.push({ a: A.index, b: B.index, ...res });
      extraPoints.push(...res.points);
    }
  }

  const viewport = okItems.length ? computeViewport(okItems, extraPoints) : null;
  return { functions, intersections, viewport };
}

// ── Plot sampling (used by FunctionGraph) ────────────────────────────────────

/**
 * Sample f on [xMin, xMax] for drawing. Returns polyline segments [[x, y], …], split where f is
 * undefined, at known breaks (vertical asymptotes) and at detected jumps through poles.
 * y values are clamped to a band around the view so paths stay finite.
 */
export function sampleSegments(f, { xMin, xMax, yMin, yMax }, count = 400, breaks = []) {
  const H = Math.max(yMax - yMin, 1e-9);
  const lo = yMin - 4 * H;
  const hi = yMax + 4 * H;
  const clamp = (y) => (y < lo ? lo : y > hi ? hi : y);
  const inView = breaks.filter((b) => b > xMin && b < xMax);
  const segments = [];
  let cur = [];
  let px = null;
  let py = null;
  const flush = () => {
    if (cur.length > 1) segments.push(cur);
    cur = [];
  };
  for (let i = 0; i <= count; i++) {
    const x = xMin + ((xMax - xMin) * i) / count;
    const y = f(x);
    if (!fin(y)) {
      flush();
      px = null;
      continue;
    }
    if (px !== null) {
      let split = inView.some((b) => b > px && b <= x);
      if (!split && Math.sign(y) !== Math.sign(py) && Math.abs(y - py) > H) {
        const c = bisect(f, px, x);
        const v = f(c);
        if (!fin(v) || Math.abs(v) > H) split = true;
      }
      if (split) flush();
    }
    cur.push([x, clamp(y)]);
    px = x;
    py = y;
  }
  flush();
  return segments;
}
