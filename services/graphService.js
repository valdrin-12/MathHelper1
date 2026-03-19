/**
 * graphService.js — helpers for detecting and normalising plottable functions
 */

/**
 * Returns true if the text looks like a plottable function (contains variable x).
 * Returns false for pure arithmetic (no x) or equations with no x on the RHS.
 */
export function isPlottableFunction(text) {
  if (!text || !text.trim()) return false;
  const t = text.trim().toLowerCase();

  // Must contain the variable x
  if (!/\bx\b/.test(t)) return false;

  // Exclude plain equations solved to a number: "x = 5"  (LHS is just x, RHS is a number)
  if (/^x\s*=\s*-?\d+(\.\d+)?$/.test(t)) return false;

  return true;
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
  let expr = text.trim();

  // Strip "y =" or "f(x) =" prefix
  expr = expr.replace(/^[yY]\s*=\s*/, '');
  expr = expr.replace(/^[fFgGhH]\s*\(\s*[xX]\s*\)\s*=\s*/, '');

  // Convert implicit multiplication: 2x → 2*x,  3x^2 → 3*x^2
  expr = expr.replace(/(\d)(x)/gi, '$1*$2');
  // Convert )(  or  )x  → )*(  or  )*x
  expr = expr.replace(/\)\s*([a-wyzA-WYZ(])/g, ')*$1');
  expr = expr.replace(/\)\s*(x)/gi, ')*$1');

  return expr;
}
