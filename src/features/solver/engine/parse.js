// Shared mathjs instance, input normalisation and expression-tree helpers for the offline solver.
import { create, all } from 'mathjs';

export const math = create(all);

const TRIG_FUNCS = 'sin|cos|tan|cot|sec|csc';
const SUPERSCRIPT_DIGITS = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };

/** Replace `log(` (one argument) by log10 and `ln(` by mathjs' natural `log(`; `log_2(8)` → log(8, 2). */
const convertLogs = (input) => {
  let s = input.replace(/\blog_?\{?(\d+)\}?\s*\(/g, 'logb$1(');
  let out = '';
  let i = 0;
  const re = /\b(logb\d+|log|ln)\s*\(/g;
  let m;
  while ((m = re.exec(s))) {
    const open = m.index + m[0].length - 1;
    let depth = 0;
    let close = -1;
    let topComma = false;
    for (let j = open; j < s.length; j++) {
      if (s[j] === '(') depth++;
      else if (s[j] === ')') { depth--; if (depth === 0) { close = j; break; } }
      else if (s[j] === ',' && depth === 1) topComma = true;
    }
    if (close < 0) break;
    out += s.slice(i, m.index);
    const inner = s.slice(open + 1, close);
    if (m[1] === 'ln') out += `log(${inner})`;
    else if (m[1] === 'log') out += topComma ? `log(${inner})` : `log10(${inner})`;
    else out += `log(${inner}, ${m[1].slice(4)})`;
    i = close + 1;
    re.lastIndex = close + 1;
  }
  out += s.slice(i);
  // bare "ln x" / "log x" are handled by the function-space rule before this runs
  return out;
};

/** Accepts "|x − 3|" style bars and rewrites them as abs(…). */
const barsToAbs = (s) => {
  if (!s.includes('|')) return s;
  let out = '';
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch !== '|') { out += ch; continue; }
    const prev = out.replace(/\s+$/, '').slice(-1);
    const opening = depth === 0 || prev === '' || /[(+\-*/^=<>,|]/.test(prev);
    if (opening) { out += 'abs('; depth++; } else { out += ')'; depth--; }
  }
  return depth === 0 ? out : s;
};

/** Character-level clean-up shared by every solver path (no percent / degree logic). */
export const normalizeCore = (input) => {
  let s = barsToAbs(String(input).trim());
  s = s
    .replace(/[−–—﹣－]/g, '-')
    .replace(/[×✕✖⋅·∙]/g, '*')
    .replace(/[÷∶]/g, '/')
    .replace(/π/g, 'pi')
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => `^${m.split('').map((c) => SUPERSCRIPT_DIGITS[c]).join('')}`)
    .replace(/\*\*/g, '^')
    .replace(/≤|=<|⩽/g, '<=')
    .replace(/≥|=>|⩾/g, '>=')
    .replace(/√\s*\(/g, 'sqrt(')
    .replace(/√\s*(\d+(?:\.\d+)?)/g, 'sqrt($1)')
    .replace(/√\s*([a-zA-Z])/g, 'sqrt($1)')
    .replace(/∛\s*\(/g, 'cbrt(')
    .replace(/∛\s*(\d+(?:\.\d+)?)/g, 'cbrt($1)')
    .replace(/∛\s*([a-zA-Z])/g, 'cbrt($1)');
  // Mixed numbers as taught in school: "2 1/2" = 2 + 1/2
  s = s.replace(/(^|[^\d.,\w)])(\d+)\s+(\d+)\s*\/\s*(\d+)(?![\d.,\w(])/g, '$1($2+$3/$4)');
  // "sin x", "ln 2x", "cos 30°" → sin(x), ln(2x), cos(30°)
  s = s.replace(/\b(sin|cos|tan|cot|sec|csc|ln|log|sqrt|exp|arcsin|arccos|arctan|asin|acos|atan)\s+(\d*\.?\d*[a-zA-Z]?\d*°?)(?![a-zA-Z(])/g,
    (m, fn, arg) => (arg ? `${fn}(${arg})` : m));
  s = s.replace(/\barc(sin|cos|tan)\b/g, 'a$1');
  s = convertLogs(s);
  return s;
};

/**
 * Normalise user input to mathjs syntax (arithmetic path, keeps the historical behaviour).
 * @returns {{ expr: string, degrees: boolean }}
 */
export const normalizeExpression = (input) => {
  let s = normalizeCore(input)
    .replace(/(\d+(?:\.\d+)?)\s*%\s*(?:of|e|nga|von)\s*(\d+(?:\.\d+)?)/gi, '($1/100)*$2');

  let degrees = false;
  if (s.includes('°')) {
    degrees = true;
    s = s.replace(/\s*°/g, ' deg');
  } else if (!/\bpi\b|\brad\b/i.test(s)) {
    const trigIntRe = new RegExp(`\\b(${TRIG_FUNCS})\\s*\\(\\s*(-?\\d+)\\s*\\)`, 'gi');
    if (trigIntRe.test(s)) {
      degrees = true;
      s = s.replace(trigIntRe, (_m, fn, n) => `${fn.toLowerCase()}(${n} deg)`);
    }
  }
  return { expr: s, degrees };
};

const KNOWN_CONSTANTS = new Set(['pi', 'e', 'i', 'Infinity', 'NaN', 'tau', 'phi', 'deg', 'rad']);

/** Free variable names of an expression or node (ignores function names and constants). */
export const freeVariables = (exprOrNode) => {
  const vars = new Set();
  const node = typeof exprOrNode === 'string' ? math.parse(exprOrNode) : exprOrNode;
  node.traverse((n, path, parent) => {
    if (n.isSymbolNode && !(parent && parent.isFunctionNode && path === 'fn')) {
      if (!KNOWN_CONSTANTS.has(n.name) && typeof math[n.name] !== 'function') vars.add(n.name);
    }
  });
  return [...vars].sort();
};

export const hasVariable = (node, v) => {
  let found = false;
  node.traverse((n, path, parent) => {
    if (n.isSymbolNode && n.name === v && !(parent && parent.isFunctionNode && path === 'fn')) found = true;
  });
  return found;
};

/** Strip redundant ParenthesisNode wrappers. */
export const unwrap = (node) => {
  let n = node;
  while (n && n.isParenthesisNode) n = n.content;
  return n;
};

/** Parse safely; returns null on syntax errors. */
export const tryParse = (expr) => {
  try {
    return math.parse(expr);
  } catch {
    return null;
  }
};

/** Turn decimal commas into points (only between digits): "2,5" → "2.5". */
export const decimalCommaToPoint = (s) => s.replace(/(\d),(\d)/g, '$1.$2');

/** Read a number given as number or string ("1/2", "−3", "2,5", "pi"). Returns a Fraction when rational. */
export const readNumber = (value) => {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new Error('Not a finite number');
    return math.fraction(value);
  }
  if (math.isFraction(value)) return value;
  const s = decimalCommaToPoint(normalizeCore(String(value)));
  if (/^[-+]?\d+(\.\d+)?(\s*\/\s*[-+]?\d+(\.\d+)?)?$/.test(s.replace(/\s/g, ''))) {
    const [p, q] = s.replace(/\s/g, '').split('/');
    const f = math.fraction(p);
    return q !== undefined ? f.div(math.fraction(q)) : f;
  }
  const r = math.evaluate(s);
  if (typeof r !== 'number' || !Number.isFinite(r)) throw new Error('Not a number');
  return r;
};
