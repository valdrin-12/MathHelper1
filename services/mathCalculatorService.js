/**
 * Local (offline) math solver facade. All work happens in services/solver/ — no network calls.
 *
 * solveMathProblem(text, lang) auto-detects: arithmetic (exact fractions), percentages, linear /
 * quadratic / polynomial equations, linear inequalities, systems of linear equations, derivatives,
 * integrals, simplify / expand / factor, gcd / lcm, prime factorisation, statistics and matrices.
 * Anything else returns { success: false, reason } so the caller can fall back to the server.
 *
 * solveWithTool(tool, input, lang) runs a specific calculator (see services/solver/index.js).
 *
 * Angle convention (unchanged):
 *  - An explicit degree sign switches to degrees: sin(30°) → 0.5
 *  - A trig function applied directly to an INTEGER literal, e.g. sin(30), cos(60), tan(45),
 *    is interpreted in degrees unless the input mentions pi/π or "rad".
 *  - Everything else (sin(pi/6), sin(0.5), sin(x+1)) stays in radians.
 */
import { normalizeExpression } from './solver/parse';
import { normalizeLang } from './solver/i18n';
import { solveMathProblem, solveWithTool, SUPPORTED_TOOLS } from './solver';

// Legacy labels kept for callers that still use getTranslation()
const translations = {
  al: {
    step: 'Hapi', answer: 'Përgjigje', solution: 'Zgjidhje', simplify: 'Thjeshtoj', solve: 'Zgjidh', calculate: 'Llogarit',
    final: 'Përgjigje finale', degrees: 'këndet në gradë', moveTerms: 'Kalojmë termat', divide: 'Pjesëtojmë me',
  },
  en: {
    step: 'Step', answer: 'Answer', solution: 'Solution', simplify: 'Simplify', solve: 'Solve', calculate: 'Calculate',
    final: 'Final answer', degrees: 'angles in degrees', moveTerms: 'Collect terms', divide: 'Divide by',
  },
  de: {
    step: 'Schritt', answer: 'Antwort', solution: 'Lösung', simplify: 'Vereinfachen', solve: 'Lösen', calculate: 'Berechnen',
    final: 'Endgültige Antwort', degrees: 'Winkel in Grad', moveTerms: 'Terme zusammenfassen', divide: 'Teilen durch',
  },
};

export const getTranslation = (lang, key) => {
  const language = normalizeLang(lang);
  return translations[language]?.[key] || translations.al[key] || key;
};

export { normalizeExpression, normalizeLang, solveMathProblem, solveWithTool, SUPPORTED_TOOLS };

export default {
  solveMathProblem,
  solveWithTool,
  normalizeExpression,
  normalizeLang,
  getTranslation,
};
