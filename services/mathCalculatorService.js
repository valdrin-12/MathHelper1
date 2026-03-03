import { create, all } from 'mathjs';

const math = create(all);

/**
 * Solve math problems locally without AI
 * Supports: arithmetic, equations, fractions, percentages, trigonometry
 * Returns step-by-step solution
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
  },
  en: {
    step: 'Step',
    answer: 'Answer',
    solution: 'Solution',
    simplify: 'Simplify',
    solve: 'Solve',
    calculate: 'Calculate',
    final: 'Final answer',
  },
  de: {
    step: 'Schritt',
    answer: 'Antwort',
    solution: 'Lösung',
    simplify: 'Vereinfachen',
    solve: 'Lösen',
    calculate: 'Berechnen',
    final: 'Endgültige Antwort',
  },
};

const getTranslation = (lang, key) => {
  const language = lang || 'en';
  return translations[language]?.[key] || translations.en[key];
};

/**
 * Detect if input is an equation (contains =)
 */
const isEquation = (text) => {
  return text.includes('=') && !text.includes('==');
};

/**
 * Solve simple linear equation: ax + b = c
 */
const solveLinearEquation = (equation, lang) => {
  try {
    const steps = [];
    const t = (key) => getTranslation(lang, key);

    // Parse equation
    const [left, right] = equation.split('=').map(s => s.trim());

    // Try to solve using mathjs
    const solutions = math.solve(equation, 'x');

    if (typeof solutions === 'number' || (Array.isArray(solutions) && solutions.length > 0)) {
      const answer = Array.isArray(solutions) ? solutions[0] : solutions;

      steps.push(`${t('step')} 1: ${equation}`);
      steps.push(`${t('step')} 2: ${t('solve')} ${left} = ${right}`);
      steps.push(`${t('step')} 3: x = ${math.format(answer, { precision: 14 })}`);

      return {
        success: true,
        answer: `x = ${math.format(answer, { precision: 4 })}`,
        steps,
        explanation: `${t('solution')}: x = ${math.format(answer, { precision: 4 })}`,
      };
    }

    return { success: false, reason: 'Could not solve equation' };
  } catch (error) {
    return { success: false, reason: error.message };
  }
};

/**
 * Solve quadratic equation: ax² + bx + c = 0
 */
const solveQuadraticEquation = (equation, lang) => {
  try {
    const steps = [];
    const t = (key) => getTranslation(lang, key);

    // Try to solve using mathjs
    const solutions = math.solve(equation, 'x');

    if (Array.isArray(solutions) && solutions.length > 0) {
      steps.push(`${t('step')} 1: ${equation}`);
      steps.push(`${t('step')} 2: ${t('solve')} ${equation}`);

      const formattedSolutions = solutions.map(s => math.format(s, { precision: 4 }));
      steps.push(`${t('step')} 3: x = ${formattedSolutions.join(', ')}`);

      return {
        success: true,
        answer: `x = ${formattedSolutions.join(', ')}`,
        steps,
        explanation: `${t('solution')}: ${formattedSolutions.length} zgjidhje`,
      };
    }

    return { success: false, reason: 'Could not solve quadratic' };
  } catch (error) {
    return { success: false, reason: error.message };
  }
};

/**
 * Evaluate arithmetic expression with step-by-step
 */
const evaluateExpression = (expr, lang) => {
  try {
    const steps = [];
    const t = (key) => getTranslation(lang, key);

    // Parse and evaluate
    const result = math.evaluate(expr);

    // Generate simple steps
    steps.push(`${t('step')} 1: ${expr}`);

    // Try to show intermediate calculations
    const simplified = math.simplify(expr);
    if (simplified.toString() !== expr) {
      steps.push(`${t('step')} 2: ${t('simplify')} = ${simplified.toString()}`);
    }

    steps.push(`${t('step')} ${steps.length + 1}: ${t('calculate')} = ${math.format(result, { precision: 14 })}`);

    return {
      success: true,
      answer: math.format(result, { precision: 6 }),
      steps,
      explanation: `${t('final')}: ${math.format(result, { precision: 6 })}`,
    };
  } catch (error) {
    return { success: false, reason: error.message };
  }
};

/**
 * Main solver function
 * @param {string} problemText - The math problem to solve
 * @param {string} lang - Language code (al, en, de)
 * @returns {Promise<{success: boolean, answer?: string, steps?: string[], explanation?: string, reason?: string}>}
 */
export const solveMathProblem = async (problemText, lang = 'en') => {
  try {
    if (!problemText || typeof problemText !== 'string') {
      return { success: false, reason: 'Empty or invalid input' };
    }

    const cleaned = problemText.trim();

    // Check if it's a word problem (contains letters beyond variable names)
    const wordProblemPattern = /\b(ka|has|have|është|is|are|der|die|das)\b/i;
    if (wordProblemPattern.test(cleaned)) {
      return { success: false, reason: 'Word problem detected - use AI' };
    }

    // Replace common symbols for mathjs compatibility
    let normalized = cleaned
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/\^/g, '**')
      .replace(/√(\d+)/g, 'sqrt($1)')
      .replace(/(\d+)%\s*(?:of|e|von)\s*(\d+)/gi, '($1/100)*$2');

    // Detect problem type and solve
    if (isEquation(normalized)) {
      // Check if quadratic (contains x^2 or x**2)
      if (normalized.match(/x\*\*2|x\^2/)) {
        return solveQuadraticEquation(normalized, lang);
      } else {
        return solveLinearEquation(normalized, lang);
      }
    } else {
      // Simple arithmetic expression
      return evaluateExpression(normalized, lang);
    }
  } catch (error) {
    console.error('[MathCalculator] Error:', error);
    return {
      success: false,
      reason: `Calculation error: ${error.message}`
    };
  }
};

export default {
  solveMathProblem,
};
