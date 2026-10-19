import { create, all } from 'mathjs';

const math = create(all);

/**
 * Solve math problems locally without AI.
 * Supports: arithmetic, powers (^), roots, percentages ("20% of 50"), trigonometry and linear
 * equations in one variable. Anything else returns { success: false } so the caller can fall
 * back to the server.
 *
 * Angle convention:
 *  - An explicit degree sign switches to degrees: sin(30°) → sin(30 deg) = 0.5
 *  - A trig function applied directly to an INTEGER literal, e.g. sin(30), cos(60), tan(45),
 *    is interpreted in degrees (school convention; radians would almost never be written that
 *    way), unless the input mentions pi/π or "rad" anywhere.
 *  - Everything else (sin(pi/6), sin(0.5), sin(x+1)) stays in radians.
 */

const translations = {
  al: {
    step: 'Hapi',
    answer: 'Përgjigje',
    solution: 'Zgjidhje',
    simplify: 'Thjeshtoj',
    solve: 'Zgjidh',
    calculate: 'Llogarit',
    final: 'Përgjigje finale',
    degrees: 'këndet në gradë',
    moveTerms: 'Kalojmë termat',
    divide: 'Pjesëtojmë me',
  },
  en: {
    step: 'Step',
    answer: 'Answer',
    solution: 'Solution',
    simplify: 'Simplify',
    solve: 'Solve',
    calculate: 'Calculate',
    final: 'Final answer',
    degrees: 'angles in degrees',
    moveTerms: 'Collect terms',
    divide: 'Divide by',
  },
  de: {
    step: 'Schritt',
    answer: 'Antwort',
    solution: 'Lösung',
    simplify: 'Vereinfachen',
    solve: 'Lösen',
    calculate: 'Berechnen',
    final: 'Endgültige Antwort',
    degrees: 'Winkel in Grad',
    moveTerms: 'Terme zusammenfassen',
    divide: 'Teilen durch',
  },
};

const SUPPORTED_LANGS = ['al', 'en', 'de'];

/** Accepts 'al' | 'en' | 'de' (also 'sq' and region tags like 'de-DE'); defaults to 'al'. */
export const normalizeLang = (lang) => {
  const base = String(lang || '').toLowerCase().split(/[-_]/)[0];
  if (base === 'sq') return 'al';
  return SUPPORTED_LANGS.includes(base) ? base : 'al';
};

export const getTranslation = (lang, key) => {
  const language = normalizeLang(lang);
  return translations[language]?.[key] || translations.al[key] || key;
};

const TRIG_FUNCS = 'sin|cos|tan|cot|sec|csc';

const fmt = (value, precision = 10) => {
  if (typeof value === 'number') {
    // Kill float noise such as 0.49999999999999994 / 1e-17
    const rounded = Number(value.toPrecision(12));
    return math.format(Object.is(rounded, -0) ? 0 : rounded, { precision });
  }
  return math.format(value, { precision });
};

/**
 * Normalise user input to mathjs syntax. Exported for tests.
 * @returns {{ expr: string, degrees: boolean }}
 */
export const normalizeExpression = (input) => {
  let s = String(input).trim();

  s = s
    .replace(/[−–—﹣－]/g, '-') // minus sign, en/em dash, small/fullwidth hyphen-minus
    .replace(/[×✕✖⋅·∙]/g, '*')
    .replace(/[÷∶]/g, '/')
    .replace(/π/g, 'pi')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/\*\*/g, '^') // mathjs uses ^ for powers
    .replace(/√\s*\(/g, 'sqrt(')
    .replace(/√\s*(\d+(?:\.\d+)?)/g, 'sqrt($1)')
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

/**
 * Detect if input is an equation (contains a single =)
 */
const isEquation = (text) => {
  return (text.match(/=/g) || []).length === 1 && !/[<>!]=|==/.test(text);
};

const KNOWN_CONSTANTS = new Set(['pi', 'e', 'i', 'Infinity', 'NaN', 'tau', 'phi', 'deg', 'rad']);

/** Collect free variable names of an expression (ignores function names and constants). */
const freeVariables = (expr) => {
  const vars = new Set();
  math.parse(expr).traverse((node, path, parent) => {
    if (node.isSymbolNode && !(parent && parent.isFunctionNode && path === 'fn')) {
      if (!KNOWN_CONSTANTS.has(node.name) && typeof math[node.name] !== 'function') {
        vars.add(node.name);
      }
    }
  });
  return [...vars];
};

/**
 * Solve a linear equation in one variable (a·v + b = c·v + d).
 * Linearity is verified numerically; non-linear equations return success:false (→ AI).
 */
const solveLinearEquation = (equation, original, lang) => {
  const t = (key) => getTranslation(lang, key);
  const steps = [];
  try {
    const [left, right] = equation.split('=').map((s) => s.trim());
    if (!left || !right) return { success: false, reason: 'Incomplete equation' };

    const vars = [...new Set([...freeVariables(left), ...freeVariables(right)])];
    if (vars.length !== 1) {
      return { success: false, reason: 'Equation must contain exactly one variable' };
    }
    const v = vars[0];

    const f = math.compile(`(${left}) - (${right})`);
    const at = (val) => {
      const r = f.evaluate({ [v]: val });
      if (typeof r !== 'number' || !Number.isFinite(r)) throw new Error('Non-numeric');
      return r;
    };

    const b = at(0);
    const a = at(1) - b;
    const tol = 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
    for (const probe of [2, -3, 7.5]) {
      if (Math.abs(at(probe) - (a * probe + b)) > tol * Math.max(1, Math.abs(probe))) {
        return { success: false, reason: 'Equation is not linear - use AI' };
      }
    }
    if (Math.abs(a) < 1e-12) {
      return { success: false, reason: 'No unique solution' };
    }

    const solution = -b / a;
    const aStr = fmt(a);
    const cStr = fmt(-b);

    steps.push(`${t('step')} 1: ${original}`);
    steps.push(`${t('step')} 2: ${t('moveTerms')}: ${aStr === '1' ? '' : `${aStr}·`}${v} = ${cStr}`);
    if (aStr !== '1') {
      steps.push(`${t('step')} 3: ${t('divide')} ${aStr}: ${v} = ${cStr} / ${aStr}`);
      steps.push(`${t('step')} 4: ${v} = ${fmt(solution, 6)}`);
    }

    return {
      success: true,
      answer: `${v} = ${fmt(solution, 6)}`,
      steps,
      explanation: `${t('solution')}: ${v} = ${fmt(solution, 6)}`,
    };
  } catch (error) {
    return { success: false, reason: 'Could not parse equation: ' + error.message };
  }
};

/**
 * Evaluate arithmetic expression with step-by-step
 */
const evaluateExpression = (expr, original, degrees, lang) => {
  try {
    const steps = [];
    const t = (key) => getTranslation(lang, key);

    if (freeVariables(expr).length > 0) {
      return { success: false, reason: 'Expression contains variables - use AI' };
    }

    const result = math.evaluate(expr);
    if (typeof result === 'function' || result === undefined || result === null) {
      return { success: false, reason: 'Unsupported expression' };
    }
    if (typeof result === 'number' && !Number.isFinite(result)) {
      return { success: false, reason: 'Result is not finite' };
    }

    steps.push(`${t('step')} 1: ${original}${degrees ? ` (${t('degrees')})` : ''}`);

    // Show a simplification step when it adds information
    try {
      if (!degrees) {
        const simplified = math.simplify(expr).toString();
        if (simplified !== expr && !/^-?[\d.e+]+$/.test(simplified)) {
          steps.push(`${t('step')} 2: ${t('simplify')} = ${simplified}`);
        }
      }
    } catch {
      // simplification is cosmetic only
    }

    steps.push(`${t('step')} ${steps.length + 1}: ${t('calculate')} = ${fmt(result, 14)}`);

    return {
      success: true,
      answer: fmt(result, 6),
      steps,
      explanation: `${t('final')}: ${fmt(result, 6)}`,
    };
  } catch (error) {
    return { success: false, reason: error.message };
  }
};

/**
 * Main solver function
 * @param {string} problemText - The math problem to solve
 * @param {'al'|'en'|'de'} [lang='al'] - UI language for the step labels
 * @returns {Promise<{success: boolean, answer?: string, steps?: string[], explanation?: string, reason?: string}>}
 */
export const solveMathProblem = async (problemText, lang = 'al') => {
  try {
    if (!problemText || typeof problemText !== 'string') {
      return { success: false, reason: 'Empty or invalid input' };
    }

    const cleaned = problemText.trim();
    const language = normalizeLang(lang);

    // Word problems go to AI
    const wordProblemPattern = /\b(ka|kanë|has|have|është|janë|is|are|der|die|das|hat|haben|ist|sind)\b/i;
    if (wordProblemPattern.test(cleaned)) {
      return { success: false, reason: 'Word problem detected - use AI' };
    }

    const { expr, degrees } = normalizeExpression(cleaned);

    if (isEquation(expr)) {
      // Quadratic and higher are left to AI (better explanations)
      if (/\^\s*\(?\s*[2-9]/.test(expr) && /[a-z]\s*\^/i.test(expr)) {
        return { success: false, reason: 'Non-linear equations not supported by local solver - use AI' };
      }
      return solveLinearEquation(expr, cleaned, language);
    }
    if (expr.includes('=')) {
      return { success: false, reason: 'Unsupported comparison' };
    }
    return evaluateExpression(expr, cleaned, degrees, language);
  } catch (error) {
    console.error('[MathCalculator] Error:', error);
    return {
      success: false,
      reason: `Calculation error: ${error.message}`,
    };
  }
};

export default {
  solveMathProblem,
  normalizeExpression,
  normalizeLang,
  getTranslation,
};
