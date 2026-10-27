// Parameters in a graphed function: every letter except x (a, b, c, k, …) gets a slider.
// "ax^2+bx+c" is read as a·x² + b·x + c.
import { math } from './functionAnalysis';
import { toMathExpression } from './graphService';

const FUNCTIONS = new Set(['sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'asin', 'acos', 'atan', 'acot',
  'sinh', 'cosh', 'tanh', 'sqrt', 'cbrt', 'log', 'log10', 'log2', 'exp', 'abs']);
const CONSTANTS = new Set(['e', 'pi']);
export const MAX_PARAMS = 4;
export const PARAM_MIN = -10;
export const PARAM_MAX = 10;
export const PARAM_STEP = 0.1;

const isParamName = (name) => /^[a-z]$/i.test(name) && name !== 'x' && name !== 'e';

/** Split run-together letters in the text ("ax^2+bx" → "a*x^2+b*x"), keeping function names and pi. */
const splitLetters = (expr) => expr
  .replace(/[a-z]{2,}/gi, (w) => (FUNCTIONS.has(w) || CONSTANTS.has(w) ? w : w.split('').join('*')))
  // a lone letter before a bracket multiplies it: a(x − h)² = a·(x − h)²
  .replace(/(^|[^a-z0-9_.])([a-z])\s*\(/gi, '$1$2*(');

/** Parse a function text; null when it does not parse. */
const parse = (text) => {
  const expr = toMathExpression(text);
  if (!expr) return null;
  try { return math.parse(splitLetters(expr)); } catch { return null; }
};

/** Parameter names used in the given function texts, in alphabetical order (at most MAX_PARAMS). */
export const detectParams = (texts) => {
  const names = new Set();
  texts.forEach((text) => {
    const node = parse(text);
    if (!node) return;
    node.traverse((n, path, parent) => {
      if (n.isSymbolNode && !(parent && parent.isFunctionNode && path === 'fn') && isParamName(n.name)) names.add(n.name);
    });
  });
  return [...names].sort().slice(0, MAX_PARAMS);
};

/** The function with each parameter replaced by its value (text unchanged when it has none). */
export const substituteParams = (text, values) => {
  if (!text || !Object.keys(values).length) return text;
  const node = parse(text);
  if (!node) return text;
  let changed = false;
  const out = node.transform((n, path, parent) => {
    if (n.isSymbolNode && !(parent && parent.isFunctionNode && path === 'fn') && values[n.name] !== undefined) {
      changed = true;
      const v = values[n.name];
      const c = new math.ConstantNode(Math.abs(v));
      return new math.ParenthesisNode(v < 0 ? new math.OperatorNode('-', 'unaryMinus', [c]) : c);
    }
    return n;
  });
  return changed ? out.toString() : text;
};

/** Ready-made examples shown when the input is empty. */
export const PARAM_EXAMPLES = ['a*x^2 + b*x + c', 'a*sin(b*x)', 'k*x + n', 'a*(x - h)^2 + k'];
