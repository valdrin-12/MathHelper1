// Offline step-by-step math solver: auto-detection (solveMathProblem) and calculator tools (solveWithTool).
// Pure JavaScript on top of mathjs, no network calls.
import { math, normalizeCore, normalizeExpression, decimalCommaToPoint, readNumber, freeVariables, tryParse } from './parse';
import { normalizeLang } from './i18n';
import { fail } from './steps';
import { pretty } from './format';
import { solveArithmetic } from './arithmetic';
import { prepareRelation, solveLinearEquation, solveLinearFromStrings } from './linear';
import { solveQuadraticEquation, quadraticTool } from './quadratic';
import { solveSystem, splitSystem } from './systems';
import { looksLikeInequality, solveInequality, inequalityTool } from './inequalities';
import { factorTool, expandTool, simplifyTool, solvePolynomialEquation } from './polynomials';
import { derivativeTool, integralTool } from './calculus';
import { primeFactorsTool, gcdLcmTool, detectPrimeQuestion, isPrimeTool, detectCombinatorics, combinatoricsTool } from './numberTheory';
import { detectFunctionDefinition, functionTool } from './functions';
import { solveSpecialEquation } from './nonPolynomial';
import { detectLimit, limitTool } from './limits';
import { percentTool, detectPercent } from './percent';
import { matrixTool } from './matrices';
import { statisticsTool, parseDataList } from './statistics';

const WORD_PROBLEM = /\b(ka|kanë|has|have|është|janë|is|are|der|die|das|hat|haben|ist|sind)\b/i;
const TRAIL = /(?:\s*\?)+\s*$|\s+$/;

const cleanExpr = (s) => String(s).trim().replace(TRAIL, '').replace(/\s*=\s*\?\s*$/, '').trim();
const stripFn = (s) => s.replace(/^\s*(?:[a-z]\s*\(\s*[a-z]\s*\)|y)\s*=\s*/i, '');
const exprComma = (s) => (/[a-z]\s*\(/i.test(s) && /\(\s*[^()]*,/.test(s) ? s : decimalCommaToPoint(s));

// ---------------------------------------------------------------------------------------------
// Detectors (return tool calls or null)
// ---------------------------------------------------------------------------------------------

const STAT_RE = /^(?:(?:compute\s+|find\s+|calculate\s+)?(?:the\s+)?(?:statistics|statistika|statistik|mean|average|median|mode|standard\s+deviation|variance|mesatarja(?:\s+aritmetike)?|mesataren|mediana|medianen|moda|devijimi\s+standard|shmangia\s+standarde|varianca|mittelwert|durchschnitt|modus|standardabweichung|varianz))(?:\s+(?:of|e|i|të|për|von|der|des))?\s*:?\s*(.+)$/i;

const detectStatistics = (text) => {
  const m = text.match(STAT_RE);
  if (!m) return null;
  const listText = m[1].replace(/^[[({]|[\])}]$/g, '');
  try {
    const data = parseDataList(listText);
    if (data.length < 2) return null;
    return { data, sample: /\b(sample|mostr|stichprobe)/i.test(text) };
  } catch {
    return null;
  }
};

const GCD_WORDS = /\b(gcd|hcf|gcf|pmp|ppmm|ggt|greatest common (?:divisor|factor)|pjesëtuesi më i madh i përbashkët|größter gemeinsamer teiler)\b/gi;
const LCM_WORDS = /\b(lcm|scm|shvp|shpmv|shmv|kgv|least common multiple|shumëfishi më i vogël i përbashkët|kleinstes gemeinsames vielfaches)\b/gi;

const detectGcdLcm = (text) => {
  const hasG = GCD_WORDS.test(text);
  GCD_WORDS.lastIndex = 0;
  const hasL = LCM_WORDS.test(text);
  LCM_WORDS.lastIndex = 0;
  if (!hasG && !hasL) return null;
  const rest = text.replace(GCD_WORDS, ' ').replace(LCM_WORDS, ' ')
    .replace(/\b(of|and|the|numbers|i|e|të|dhe|numrave|për|von|und|der|zahlen|find|gjej|gjeni|berechne)\b/gi, ' ')
    .replace(/[(),;:&/\s=?]+/g, ' ').trim();
  if (!/^\d+(?: \d+)+$/.test(rest)) return null;
  return { numbers: rest.split(' ').map(Number), want: hasG && hasL ? 'both' : hasG ? 'gcd' : 'lcm' };
};

const PRIME_RE = /^(?:(?:the\s+)?prime\s+factori[sz]ation\s+(?:of\s+)?|(?:the\s+)?prime\s+factors\s+of\s+|factori[sz]e\s+|factor\s+|faktorët\s+(?:e\s+)?(?:thjeshtë|primë?)\s+(?:të|e|i)\s+|faktorizimi\s+(?:në\s+faktorë\s+)?(?:të\s+thjeshtë|primë?)\s+(?:i|e|të)?\s*|zbërthe(?:ni)?\s+(?:në\s+faktorë(?:\s+të\s+thjeshtë|\s+primë?)?\s+)?(?:numrin\s+)?|faktorizo(?:ni)?\s+(?:numrin\s+)?|primfaktorzerlegung\s+(?:von\s+)?|primfaktoren\s+von\s+|zerlege\s+|faktorisiere\s+|faktorisieren\s+sie\s+)(\d+)(?:\s+in\s+primfaktoren|\s+në\s+faktorë(?:\s+të\s+thjeshtë)?)?$/i;

const detectPrime = (text) => {
  const m = text.match(PRIME_RE);
  return m ? { n: Number(m[1]) } : null;
};

const detectDerivative = (raw) => {
  const s = raw.replace(/[′’‘´`]/g, "'").replace(TRAIL, '').trim();
  let m = s.match(/^d\s*\/\s*d([a-z])\s*(.+)$/i);
  if (m) return { expression: m[2].replace(/^\[(.*)\]$/, '$1'), variable: m[1] };
  m = s.match(/^(?:the\s+)?(?:first\s+)?derivative\s+(?:of\s+)?(?:the\s+function\s+)?(.+?)(?:\s+(?:with\s+respect\s+to|wrt)\s+([a-z]))?$/i);
  if (m) return { expression: stripFn(m[1]), variable: m[2] };
  m = s.match(/^(?:derivatin|derivati|derivatit)(?:\s+e\s+parë)?\s+(?:e|i|të)?\s*(?:funksionit\s+|i\s+funksionit\s+)?(.+?)(?:\s+sipas\s+([a-z]))?$/i);
  if (m) return { expression: stripFn(m[1]), variable: m[2] };
  m = s.match(/^derivo(?:ni)?\s+(?:funksionin\s+)?(.+?)(?:\s+sipas\s+([a-z]))?$/i);
  if (m) return { expression: stripFn(m[1]), variable: m[2] };
  m = s.match(/^(?:die\s+)?(?:erste\s+)?ableitung\s+(?:von|der\s+funktion|zu|für)\s+(.+?)(?:\s+nach\s+([a-z]))?$/i);
  if (m) return { expression: stripFn(m[1]), variable: m[2] };
  m = s.match(/^(?:leite|leiten\s+sie)\s+(?:die\s+funktion\s+)?(.+?)\s+(?:nach\s+([a-z])\s+)?ab$/i);
  if (m) return { expression: stripFn(m[1]), variable: m[2] };
  m = s.match(/^([a-z])\s*\(\s*([a-z])\s*\)\s*=\s*(.+?)\s*[,;]?\s*\1\s*'\s*\(\s*\2\s*\)\s*(?:=\s*\??)?$/i);
  if (m) return { expression: m[3].replace(/[,;]\s*$/, ''), variable: m[2] };
  m = s.match(/^y\s*=\s*(.+?)\s*[,;]\s*y\s*'\s*(?:=\s*\??)?$/i);
  if (m) return { expression: m[1], variable: 'x' };
  m = s.match(/^\((.+)\)\s*'$/);
  if (m) return { expression: m[1] };
  return null;
};

const SUB_DIGITS = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9', '₋': '-' };

const splitDx = (expr) => {
  const m = expr.match(/^(.*?)\s*\*?\s*d([a-z])$/);
  if (m && m[1].trim()) return { expression: m[1].trim(), variable: m[2] };
  return { expression: expr.trim() };
};

const unbrace = (b) => (b === undefined ? undefined : b.replace(/^\{(.*)\}$/, '$1').replace(/^\((.*)\)$/, '$1'));

const detectIntegral = (raw) => {
  let s = raw.replace(TRAIL, '').trim();
  s = s.replace(/∫\s*([₀-₉₋]+)/, (_m, d) => `∫_${d.split('').map((c) => SUB_DIGITS[c]).join('')}`);
  s = normalizeCore(s);
  let m = s.match(/^∫\s*(?:_\s*(\{[^}]*\}|\([^)]*\)|[^\s^]+)\s*\^\s*(\{[^}]*\}|\([^)]*\)|\S+?)(?=\s|\())?\s*(.+)$/);
  if (m) {
    const r = splitDx(m[3]);
    return { ...r, from: unbrace(m[1]), to: unbrace(m[2]) };
  }
  const B = '(\\S+)';
  const res = (expr, from, to) => ({ ...splitDx(stripFn(expr)), from, to });
  m = s.match(new RegExp(`^(?:the\\s+)?(?:definite\\s+|indefinite\\s+)?integral\\s+from\\s+${B}\\s+to\\s+${B}\\s+of\\s+(.+)$`, 'i'));
  if (m) return res(m[3], m[1], m[2]);
  m = s.match(new RegExp(`^(?:the\\s+)?(?:definite\\s+|indefinite\\s+)?integral\\s+of\\s+(.+?)(?:\\s+from\\s+${B}\\s+to\\s+${B})?$`, 'i'));
  if (m) return res(m[1], m[2], m[3]);
  m = s.match(new RegExp(`^(?:integrali|integralin|integro(?:ni)?)(?:\\s+(?:i|e)\\s+caktuar)?\\s+(?:i\\s+|e\\s+)?nga\\s+${B}\\s+(?:deri\\s+(?:në|ne)|deri|në|ne)\\s+${B}\\s+(?:i\\s+|e\\s+|të\\s+|për\\s+)?(.+)$`, 'i'));
  if (m) return res(m[3], m[1], m[2]);
  m = s.match(new RegExp(`^(?:integrali|integralin|integro(?:ni)?)(?:\\s+(?:i|e)\\s+(?:caktuar|pacaktuar))?\\s+(?:i\\s+|e\\s+|të\\s+)?(?:funksionit\\s+)?(.+?)(?:\\s+nga\\s+${B}\\s+(?:deri\\s+(?:në|ne)|deri|në|ne)\\s+${B})?$`, 'i'));
  if (m) return res(m[1], m[2], m[3]);
  m = s.match(new RegExp(`^(?:das\\s+)?(?:bestimmte\\s+|unbestimmte\\s+)?(?:integral|integriere|integrieren\\s+sie)\\s+von\\s+${B}\\s+bis\\s+${B}\\s+(?:von|über|der\\s+funktion)\\s+(.+)$`, 'i'));
  if (m) return res(m[3], m[1], m[2]);
  m = s.match(new RegExp(`^(?:das\\s+)?(?:bestimmte\\s+|unbestimmte\\s+)?(?:integral|integriere|integrieren\\s+sie)\\s+(?:von\\s+|über\\s+)?(.+?)(?:\\s+von\\s+${B}\\s+bis\\s+${B})?$`, 'i'));
  if (m) return res(m[1], m[2], m[3]);
  return null;
};

const MATRIX_RE = /^(det|determinant|determinanta|determinante|inverse|inverse of|inversa|inversen|inverse von|inv|transpose|transponierte|transpozta)\s*(?:of|e|i|von|der|matrix|matricës)?\s*\(?\s*(\[\s*\[.*\]\s*\])\s*\)?$/i;

const detectMatrix = (text) => {
  const m = text.replace(TRAIL, '').match(MATRIX_RE);
  if (!m) return null;
  let A;
  try { A = JSON.parse(m[2].replace(/[−–]/g, '-')); } catch { return null; }
  const w = m[1].toLowerCase();
  const op = /^(det)/.test(w) ? 'det' : /^(inv)/.test(w) ? 'inverse' : 'transpose';
  return { op, A };
};

const KEYWORD_TOOLS = [
  { tool: 'factor', re: /^(?:factor(?:i[sz]e)?|faktorizo(?:ni)?|zbërthe(?:ni)?\s+në\s+faktorë|faktorisiere|faktorisieren(?:\s+sie)?|zerlege(?:\s+in\s+faktoren)?)\s*:?\s+(.+)$/i },
  { tool: 'expand', re: /^(?:expand|multiply\s+out|zbërthe(?:ni)?|shpërndaj(?:ni)?|hap(?:ni)?\s+kllapat(?:\s+te|\s+në)?|ausmultiplizieren|multipliziere(?:n\s+sie)?(?:\s+aus)?|expandiere(?:n)?)\s*:?\s+(.+?)(?:\s+aus)?$/i },
  { tool: 'simplify', re: /^(?:simplify|thjeshto(?:ni)?|thjeshtoni|vereinfache(?:n)?(?:\s+sie)?)\s*:?\s+(.+)$/i },
];

const SOLVE_PREFIX = /^(?:please\s+)?(?:solve|calculate|compute|evaluate|find|zgjidh(?:ni)?|llogarit(?:ni)?|njehso(?:ni)?|gjej(?:ni)?|löse|lösen\s+sie|berechne|berechnen\s+sie|bestimme|bestimmen\s+sie)\b\s*:?\s*/i;

// ---------------------------------------------------------------------------------------------
// Equations
// ---------------------------------------------------------------------------------------------

const solveEquationText = (text, lang) => {
  const expr = exprComma(normalizeCore(text));
  const [l, r] = expr.split('=');
  if (!l.trim() || !r.trim()) return fail('Incomplete equation');
  let ctx;
  try { ctx = prepareRelation(l, r); } catch (e) { return fail(`Could not parse equation: ${e.message}`); }
  if (!ctx) {
    // |A| = c, √A = B, aᴬ = b, log(A) = c, sin(A) = c …
    const special = solveSpecialEquation(l, r, lang);
    if (special) return special;
    const node = tryParse(`(${l})-(${r})`);
    if (node && freeVariables(node).length > 1) return fail('Equation must contain exactly one variable');
    return fail('Equation is not polynomial - use AI');
  }
  const shown = `${pretty(ctx.leftNode, lang)} = ${pretty(ctx.rightNode, lang)}`;
  if (ctx.degree <= 1) return solveLinearEquation(ctx, lang, shown);
  if (ctx.degree === 2) return solveQuadraticEquation(ctx, lang, shown);
  return solvePolynomialEquation(ctx, lang, shown);
};

const runKeywordTool = (tool, exprRaw, lang) => {
  const expr = exprComma(normalizeCore(cleanExpr(exprRaw)));
  const node = tryParse(expr);
  if (!node) return fail('Could not parse expression');
  const vars = freeVariables(node);
  if (tool === 'factor' && /^\d+$/.test(expr.trim())) return primeFactorsTool({ n: Number(expr) }, lang);
  if (!vars.length) return solveArithmetic(exprRaw, lang);
  if (tool === 'factor') return factorTool(expr, lang);
  if (tool === 'expand') return expandTool(expr, lang);
  return simplifyTool(expr, lang);
};

// An expression with variables and no "=": simplify / expand it when that changes something,
// otherwise (one variable) read it as a function and analyse it.
// Function names that may appear as letter runs of 4+; any other such run is a word ("area", "radius").
const MATH_WORDS = new Set(['sqrt', 'cbrt', 'sinh', 'cosh', 'tanh', 'asin', 'acos', 'atan', 'arcsin', 'arccos', 'arctan', 'log10', 'exp']);

const solveBareExpression = (text, lang) => {
  // "area of a circle with radius 5" is a sentence, not the product a·r·e·a·…: leave it to the AI
  const words = (text.match(/[a-zA-ZëçÇËäöüÄÖÜß]{4,}/g) || []).filter((w) => !MATH_WORDS.has(w.toLowerCase()));
  if (words.length) return fail('Text with words - use AI');
  const expr = exprComma(normalizeCore(text));
  const node = tryParse(expr);
  if (!node) return fail('Could not parse expression');
  const vars = freeVariables(node);
  const same = (r) => r.answer.replace(/\s/g, '') === pretty(node, lang).replace(/\s/g, '');
  if (vars.length === 1) {
    const r = simplifyTool(expr, lang);
    if (r.success && !same(r)) return r;
    return functionTool({ name: 'f', v: vars[0], expr }, lang);
  }
  const r = expandTool(expr, lang);
  if (r.success && !same(r)) return r;
  return fail('Expression contains variables - use AI');
};

const detectAndSolve = (input, lang) => {
  const multiline = /\n/.test(String(input).trim());
  let text = multiline ? String(input).trim() : String(input).trim().replace(/\s+/g, ' ').replace(TRAIL, '');
  text = text.replace(SOLVE_PREFIX, '');
  if (!text) return fail('Empty or invalid input');

  const stats = detectStatistics(text);
  if (stats) return statisticsTool(stats, lang);
  const gl = detectGcdLcm(text);
  if (gl) return gcdLcmTool(gl, lang, gl.want);
  const pf = detectPrime(text);
  if (pf) return primeFactorsTool(pf, lang);
  const pq = detectPrimeQuestion(text);
  if (pq) return isPrimeTool(pq, lang);
  const comb = detectCombinatorics(text);
  if (comb) return combinatoricsTool(comb, lang);
  const mx = detectMatrix(text);
  if (mx) return matrixTool(mx, lang);
  const der = detectDerivative(text);
  if (der) return derivativeTool(der, lang);
  const integ = detectIntegral(text);
  if (integ) return integralTool(integ, lang);
  const lim = detectLimit(text.replace(/→/g, '->'));
  if (lim) return limitTool(lim, lang);
  const pc = detectPercent(text);
  if (pc) return percentTool(pc, lang);
  for (const { tool, re } of KEYWORD_TOOLS) {
    const m = text.match(re);
    if (m) return runKeywordTool(tool, m[1], lang);
  }

  // f(x) = …, y = 2x + 1 → analyse the function
  const fnDef = detectFunctionDefinition(text);
  if (fnDef) {
    const expr = exprComma(normalizeCore(cleanExpr(fnDef.expr)));
    const node = tryParse(expr);
    const vars = node ? freeVariables(node) : [];
    if (node && vars.length === 1 && vars[0] === fnDef.v) return functionTool({ ...fnDef, expr }, lang);
  }

  if (WORD_PROBLEM.test(text)) return fail('Word problem detected - use AI');

  // systems of equations
  const parts = splitSystem(text);
  if (parts.length >= 2 && parts.every((p) => (p.match(/=/g) || []).length === 1)) return solveSystem(parts, lang);

  const core = normalizeCore(cleanExpr(text));
  if (looksLikeInequality(core)) return solveInequality(exprComma(core), lang);

  const eqCount = (core.match(/=/g) || []).length;
  if (eqCount === 1 && !/[<>!]=|==/.test(core)) return solveEquationText(cleanExpr(text), lang);
  if (core.includes('=')) return fail('Unsupported comparison');

  const node = tryParse(exprComma(normalizeExpression(cleanExpr(text)).expr));
  if (node && freeVariables(node).length) return solveBareExpression(cleanExpr(text), lang);
  return solveArithmetic(cleanExpr(text), lang);
};

/**
 * Solve free text. Returns { success, type, answer, steps, explanation, stepDetails, extras } or { success:false, reason }.
 */
export const solveMathProblem = async (problemText, lang = 'al') => {
  try {
    if (!problemText || typeof problemText !== 'string' || !problemText.trim()) return fail('Empty or invalid input');
    return detectAndSolve(problemText, normalizeLang(lang));
  } catch (error) {
    return fail(`Calculation error: ${error.message}`);
  }
};

const asExpression = (input) => cleanExpr(String((input && (input.expression ?? input.expr)) ?? ''));

/** Calculator tools (see README in index.js header for the list). */
export const solveWithTool = async (tool, input = {}, lang = 'al') => {
  const L = normalizeLang(lang);
  try {
    switch (tool) {
      case 'quadratic': {
        const r = quadraticTool(input, L, readNumber);
        if (r) return r;
        const b = readNumber(input.b ?? 0);
        const c = readNumber(input.c ?? 0);
        const v = input.variable || 'x';
        return solveLinearFromStrings(`(${math.isFraction(b) ? b.toFraction() : b})*${v} + (${math.isFraction(c) ? c.toFraction() : c})`, '0', L);
      }
      case 'system': {
        const eqs = Array.isArray(input.equations) ? input.equations.filter((e) => String(e).trim()) : splitSystem(String(input.equations || ''));
        if (eqs.length < 2 || eqs.length > 3) return fail('Enter 2 or 3 equations');
        return solveSystem(eqs.map(String), L);
      }
      case 'derivative': return derivativeTool({ ...input, expression: stripFn(asExpression(input)) }, L);
      case 'integral': {
        const s = splitDx(normalizeCore(stripFn(asExpression(input))));
        return integralTool({ ...input, expression: s.expression, variable: input.variable || s.variable }, L);
      }
      case 'simplify':
      case 'expand':
      case 'factor': {
        const expr = asExpression(input);
        if (!expr) return fail('Empty expression');
        return runKeywordTool(tool, expr, L);
      }
      case 'fraction': {
        const expr = asExpression(input);
        if (!expr) return fail('Empty expression');
        const node = tryParse(normalizeCore(expr));
        if (node && freeVariables(node).length) return simplifyTool(exprComma(normalizeCore(expr)), L);
        return solveArithmetic(expr, L, { forceFraction: true });
      }
      case 'percent': return percentTool(input, L);
      case 'gcdlcm': return gcdLcmTool(input, L, input.want || 'both');
      case 'primeFactors': return primeFactorsTool(input, L);
      case 'matrix': return matrixTool(input, L);
      case 'statistics': return statisticsTool(input, L);
      case 'inequality': return inequalityTool({ expression: exprComma(normalizeCore(asExpression(input))) }, L, (s) => s);
      default: return fail(`Unknown tool: ${tool}`);
    }
  } catch (error) {
    return fail(`Calculation error: ${error.message}`);
  }
};

export const SUPPORTED_TOOLS = ['quadratic', 'system', 'derivative', 'integral', 'simplify', 'expand', 'factor', 'fraction', 'percent', 'gcdlcm', 'primeFactors', 'matrix', 'statistics', 'inequality'];

// Shared with the answer verifier (features/solver/verifyAnswer.js)
export { detectDerivative, detectIntegral, SOLVE_PREFIX, KEYWORD_TOOLS, cleanExpr };
