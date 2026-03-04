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
 * Manual solving without math.solve() which doesn't work reliably
 */
const solveLinearEquation = (equation, lang) => {
  try {
    const steps = [];
    const t = (key) => getTranslation(lang, key);

    // Parse equation
    const [left, right] = equation.split('=').map(s => s.trim());

    steps.push(`${t('step')} 1: ${equation}`);

    // Try to solve manually for simple cases: x + b = c or ax = c
    try {
      // Replace x with a placeholder value to test
      const testValue = 1;
      const leftWithTest = left.replace(/x/g, `(${testValue})`);
      const rightValue = math.evaluate(right);

      // For simple linear equations like "x + 5 = 10" or "2x = 10"
      // We can solve by trying different approaches

      // Approach 1: Try to isolate x algebraically
      // If equation is like "x + b = c", then x = c - b
      // If equation is like "ax = c", then x = c / a

      // Simplify both sides first
      let leftSimplified;
      try {
        leftSimplified = math.simplify(left);
      } catch {
        leftSimplified = left;
      }

      // Check if it's a simple "x + number = number" or "x - number = number"
      const simplePattern = /^x\s*([+\-])\s*(\d+\.?\d*)$/;
      const simpleMatch = leftSimplified.toString().match(simplePattern);

      if (simpleMatch) {
        const operator = simpleMatch[1];
        const value = parseFloat(simpleMatch[2]);
        const rightValue = math.evaluate(right);

        let solution;
        if (operator === '+') {
          solution = rightValue - value;
          steps.push(`${t('step')} 2: x = ${rightValue} - ${value}`);
        } else {
          solution = rightValue + value;
          steps.push(`${t('step')} 2: x = ${rightValue} + ${value}`);
        }

        steps.push(`${t('step')} 3: x = ${solution}`);

        return {
          success: true,
          answer: `x = ${math.format(solution, { precision: 4 })}`,
          steps,
          explanation: `${t('solution')}: x = ${math.format(solution, { precision: 4 })}`,
        };
      }

      // Check if it's "number * x = number"
      const multiplyPattern = /^(\d+\.?\d*)\s*\*?\s*x$/;
      const multiplyMatch = leftSimplified.toString().match(multiplyPattern);

      if (multiplyMatch) {
        const coefficient = parseFloat(multiplyMatch[1]);
        const rightValue = math.evaluate(right);
        const solution = rightValue / coefficient;

        steps.push(`${t('step')} 2: x = ${rightValue} / ${coefficient}`);
        steps.push(`${t('step')} 3: x = ${solution}`);

        return {
          success: true,
          answer: `x = ${math.format(solution, { precision: 4 })}`,
          steps,
          explanation: `${t('solution')}: x = ${math.format(solution, { precision: 4 })}`,
        };
      }

      // If we can't solve it with simple pattern matching, fail gracefully
      return { success: false, reason: 'Equation too complex for local solver' };
    } catch (error) {
      return { success: false, reason: 'Could not parse equation: ' + error.message };
    }
  } catch (error) {
    return { success: false, reason: error.message };
  }
};

/**
 * Solve quadratic equation: ax² + bx + c = 0
 * NOTE: Quadratic equations are complex - let AI handle them for now
 * TODO: Implement quadratic formula if needed
 */
const solveQuadraticEquation = (equation, lang) => {
  // Quadratic equations are too complex for simple local solving
  // Let AI handle these for better explanations
  return {
    success: false,
    reason: 'Quadratic equations not supported by local solver - use AI'
  };
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
