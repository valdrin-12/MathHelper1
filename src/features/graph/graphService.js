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

// ── Offline graph helpers (used by GraphModal / FunctionGraph / functionAnalysis) ──

/** Maximum number of functions plotted together in the graph sheet */
export const MAX_GRAPH_FUNCTIONS = 3;

/**
 * Turns user input into a mathjs expression string:
 * normalizeFunction() plus school notation → mathjs names (ln → log, log/lg → log10, arcsin → asin,
 * √x → sqrt(x), |x| → abs(x)). Returns '' for empty input.
 * As in Kosovo/Albanian and German schools (and the offline solver), `log` is base 10 and `ln` is natural.
 */
export function toMathExpression(text) {
  if (!text || typeof text !== 'string' || !text.trim()) return '';
  // Protect function names ending in digits from the "2(" → "2*(" rule in normalizeFunction;
  // a plain `log` becomes `lg` (base 10) before `ln` is mapped to mathjs' natural `log`
  const protectedText = text
    .replace(/\blog10\s*\(/g, 'lg(')
    .replace(/\blog2\s*\(/g, 'lb(')
    .replace(/\blog\b/g, 'lg');
  let expr = normalizeFunction(protectedText)
    .replace(/√\s*\(/g, 'sqrt(')
    .replace(/√\s*([a-zA-Z0-9.]+)/g, 'sqrt($1)')
    .replace(/\|([^|]+)\|/g, 'abs($1)')
    .replace(/\bln\b/g, 'log')
    .replace(/\blg\b/g, 'log10')
    .replace(/\blb\b/g, 'log2')
    .replace(/\barc(sin|cos|tan)\b/g, 'a$1')
    // decimal comma (al/de): 0,5x → 0.5x
    .replace(/(\d),(?=\d)/g, '$1.');
  // "2sqrt(x)" / "3sin(x)" are handled by mathjs implicit multiplication
  expr = expr.trim();
  return expr;
}

/** Decimal separator per app language: comma for al/de, point for en */
export function decimalSeparator(lang) {
  return lang === 'en' ? '.' : ',';
}

const PI_DENOMINATORS = [1, 2, 3, 4, 6];

/**
 * Formats a number for display: max 3 decimals, no trailing zeros, typographic minus,
 * locale decimal separator. With { pi: true } exact multiples of π/1,2,3,4,6 are shown as π fractions.
 */
export function formatNumber(value, lang = 'al', { pi = false } = {}) {
  if (value === Infinity) return '∞';
  if (value === -Infinity) return '−∞';
  if (typeof value !== 'number' || Number.isNaN(value)) return '–';
  if (pi && value !== 0) {
    for (const den of PI_DENOMINATORS) {
      const num = (value * den) / Math.PI;
      const k = Math.round(num);
      if (k !== 0 && Math.abs(num - k) < 1e-6 && Math.abs(k) <= 48) {
        // reduce k/den
        const g = gcd(Math.abs(k), den);
        const n = k / g;
        const d = den / g;
        const sign = n < 0 ? '−' : '';
        const absN = Math.abs(n);
        const numerator = absN === 1 ? 'π' : `${absN}π`;
        return d === 1 ? `${sign}${numerator}` : `${sign}${numerator}/${d}`;
      }
    }
  }
  let rounded = Math.round(value * 1000) / 1000;
  if (Object.is(rounded, -0) || Math.abs(rounded) < 5e-4) rounded = 0;
  let s;
  if (Math.abs(rounded) >= 1e6) {
    s = Number(rounded.toPrecision(3)).toExponential().replace('e+', 'e');
  } else {
    s = String(rounded);
  }
  return s.replace('-', '−').replace('.', decimalSeparator(lang));
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/** Formats a point as "(x; y)" for al/de (comma decimals) and "(x, y)" for en */
export function formatPoint(point, lang = 'al', opts) {
  const sep = lang === 'en' ? ', ' : '; ';
  return `(${formatNumber(point.x, lang, opts)}${sep}${formatNumber(point.y, lang)})`;
}

/** Formats an interval {from, to, fromClosed, toClosed} like "(−∞; 2]" */
export function formatInterval(iv, lang = 'al', opts) {
  const sep = lang === 'en' ? ', ' : '; ';
  const left = iv.fromClosed && Number.isFinite(iv.from) ? '[' : '(';
  const right = iv.toClosed && Number.isFinite(iv.to) ? ']' : ')';
  return `${left}${formatNumber(iv.from, lang, opts)}${sep}${formatNumber(iv.to, lang, opts)}${right}`;
}
