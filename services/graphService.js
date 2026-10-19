/**
 * graphService.js — helpers for detecting and normalising plottable functions
 */

const ALLOWED_WORDS = new Set([
  'x', 'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'asin', 'acos', 'atan', 'arcsin', 'arccos', 'arctan',
  'sinh', 'cosh', 'tanh', 'sqrt', 'cbrt', 'log', 'ln', 'lg', 'exp', 'abs', 'pi', 'e',
]);

/**
 * Returns true if the text looks like a plottable function of x:
 *   "2x+1", "y = 2x + 3", "3x^2-1", "f(x)=x^2", "sin(x)", "x/2 - 1"
 * Returns false for plain numbers/arithmetic ("2+3"), words ("x marks the spot"),
 * equations to solve ("2x+5=13", "x = 5") and empty input.
 */
export function isPlottableFunction(text) {
  if (!text || typeof text !== 'string' || !text.trim()) return false;
  let t = text
    .trim()
    .toLowerCase()
    .replace(/[\u2212\u2013]/g, '-')
    .replace(/[×·⋅]/g, '*')
    .replace(/÷/g, '/')
    .replace(/π/g, 'pi')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3');

  // Allow an explicit function definition prefix: "y =" or "f(x) ="
  const prefix = t.match(/^(?:y|[fgh]\s*\(\s*x\s*\))\s*=\s*/);
  if (prefix) {
    t = t.slice(prefix[0].length);
  }
  // Any other "=" means an equation to solve, not a function to plot
  if (t.includes('=') || !t) return false;

  // Only math characters are allowed
  if (!/^[0-9a-z\s+\-*/^().,√]+$/.test(t)) return false;

  // Every word must be x or a known function/constant (rejects plain text)
  const words = t.match(/[a-z]+/g) || [];
  if (words.length === 0) return false;
  // Split implicit products like "xsin" is not supported; words must be whole tokens
  if (!words.every((w) => ALLOWED_WORDS.has(w))) return false;

  // Must actually depend on x
  return words.includes('x');
}

/**
 * Extracts and normalises the expression to pass to function-plot.
 * Handles forms:
 *   y = expr      →  expr
 *   f(x) = expr   →  expr
 *   expr           →  expr  (bare expression)
 *
 * Also converts implicit multiplication:  2x → 2*x,  x(... → x*(
 */
export function normalizeFunction(text) {
  let expr = text
    .trim()
    .replace(/[\u2212\u2013]/g, '-')
    .replace(/[×·⋅]/g, '*')
    .replace(/÷/g, '/')
    .replace(/π/g, 'pi')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/\bX\b/g, 'x');

  // Strip "y =" or "f(x) =" prefix
  expr = expr.replace(/^[yY]\s*=\s*/, '');
  expr = expr.replace(/^[fFgGhH]\s*\(\s*[xX]\s*\)\s*=\s*/, '');

  // Convert implicit multiplication: 2x → 2*x,  3x^2 → 3*x^2
  expr = expr.replace(/(\d)(x)/gi, '$1*$2');
  // 2(x+1) → 2*(x+1),  x(x+1) → x*(x+1)
  expr = expr.replace(/(\d|\bx)\s*\(/g, '$1*(');
  // Convert )(  or  )x  → )*(  or  )*x
  expr = expr.replace(/\)\s*([a-wyzA-WYZ(])/g, ')*$1');
  expr = expr.replace(/\)\s*(x)/gi, ')*$1');

  return expr;
}
