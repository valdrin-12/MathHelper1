// Arithmetic with one operation per step (order of operations), exact fractions when the input
// is made of integers and fractions, degrees for trig as in the historical calculator.
import { math, normalizeExpression, freeVariables, decimalCommaToPoint } from './parse';
import { Steps, ok, fail } from './steps';
import { pretty, fmtNum, fmtFloat, fmtDec, isFrac, isShortDecimal, toNum } from './format';
import { describeFractionOp, simplifyFractionStep } from './fractions';

const MAX_STEPS = 20;
const FN_KEYS = { sqrt: 'opSqrt', abs: 'opAbs', factorial: 'opFactorial' };
const OP_KEYS = { add: 'opAdd', subtract: 'opSubtract', multiply: 'opMultiply', divide: 'opDivide', pow: 'opPower', mod: 'opMod', factorial: 'opFactorial' };

const isDegLeaf = (n) => n.isOperatorNode && n.fn === 'multiply' && n.args[1].isSymbolNode && n.args[1].name === 'deg' && n.args[0].isConstantNode;
const isConstSym = (n) => n.isSymbolNode && (n.name === 'pi' || n.name === 'e');
const isLeaf = (n) => n.isConstantNode || isConstSym(n) || isDegLeaf(n);
const isIntConst = (n) => n.isConstantNode && ((typeof n.value === 'number' && Number.isInteger(n.value)) || (isFrac(n.value) && n.value.d === 1n));

/** Integers / fractions only, + − · : and integer powers, at least one division → exact mode. */
const fractionCandidate = (node, allowDecimals) => {
  let okTree = true;
  let hasDiv = false;
  node.traverse((n) => {
    if (n.isConstantNode) {
      if (typeof n.value !== 'number' || (!allowDecimals && !Number.isInteger(n.value))) okTree = false;
    } else if (n.isOperatorNode) {
      if (!['add', 'subtract', 'multiply', 'divide', 'unaryMinus', 'unaryPlus', 'pow'].includes(n.fn)) okTree = false;
      if (n.fn === 'divide') hasDiv = true;
      if (n.fn === 'pow') {
        const e = n.args[1].isParenthesisNode ? n.args[1].content : n.args[1];
        const ev = e.isOperatorNode && e.fn === 'unaryMinus' ? e.args[0] : e;
        if (!ev.isConstantNode || !Number.isInteger(ev.value) || Math.abs(ev.value) > 20) okTree = false;
        if (e !== ev) hasDiv = true;
      }
    } else if (!n.isParenthesisNode) okTree = false;
  });
  return okTree && (hasDiv || allowDecimals);
};

/** Find the first node (post-order, left to right) whose operands are all values. */
const findTarget = (node, insideParen = false) => {
  const children = node.isParenthesisNode ? [node.content] : node.args || [];
  if (!isDegLeaf(node)) {
    for (const ch of children) {
      const r = findTarget(ch, insideParen || node.isParenthesisNode);
      if (r) return r;
    }
  }
  if (node.isOperatorNode && !isDegLeaf(node) && node.args.every(isLeaf)) return { node, insideParen };
  if (node.isFunctionNode && node.args.every(isLeaf)) return { node, insideParen };
  return null;
};

const replace = (tree, target, value) => {
  const out = tree.transform((n) => (n === target ? new math.ConstantNode(value) : n));
  // drop brackets around single values
  return out.transform((n) => (n.isParenthesisNode && isLeaf(n.content) && !(n.content.isConstantNode && toNum(n.content.value) < 0) ? n.content : n));
};

const valueOk = (v) => (typeof v === 'number' && Number.isFinite(v)) || isFrac(v);

/**
 * Evaluate an arithmetic expression step by step.
 * opts.forceFraction → always exact fractions (decimals converted), used by the fraction tool.
 */
export const solveArithmetic = (text, lang, opts = {}) => {
  let raw = String(text).trim();
  if (/[÷:]/.test(raw)) raw = raw.replace(/(\d+)\s*\/\s*(\d+)/g, '($1/$2)').replace(/(\d|\))\s*:\s*(?=[\d(−-])/g, '$1 ÷ ');
  const { expr: e0, degrees } = normalizeExpression(raw);
  let expr = e0;
  if (/\d,\d/.test(expr) && !/[a-z]\s*\(/i.test(expr)) expr = decimalCommaToPoint(expr);
  let node;
  try { node = math.parse(expr); } catch (e) { return fail(`Parse error: ${e.message}`); }
  if (freeVariables(node).length) return fail('Expression contains variables');

  let result;
  try { result = node.evaluate(); } catch (e) { return fail(e.message); }
  if (!valueOk(result)) return fail('Unsupported result');

  const exact = fractionCandidate(node, !!opts.forceFraction);
  const S = new Steps(lang);
  let tree = node;
  if (exact) {
    tree = tree.transform((n) => (n.isConstantNode && typeof n.value === 'number' ? new math.ConstantNode(math.fraction(n.value)) : n));
    // irreducible integer fractions become fraction literals; reducible ones get a "simplify" step later
    tree = tree.transform((n) => {
      if (n.isOperatorNode && n.fn === 'divide' && isIntConst(n.args[0]) && isIntConst(n.args[1]) && n.args[1].value.n !== 0n) {
        const { g } = simplifyFractionStep(n.args[0].value.n, n.args[1].value.n, lang);
        if (g === 1n) return new math.ConstantNode(n.args[0].value.div(n.args[1].value));
      }
      return n;
    });
    tree = tree.transform((n) => (n.isParenthesisNode && n.content.isConstantNode && !(toNum(n.content.value) < 0) ? n.content : n));
  }
  const given = pretty(tree, lang);
  S.add(S.t('givenExpression'), `${given}${degrees ? ` (${S.t('degrees')})` : ''}`);

  let stepped = true;
  let guard = 0;
  while (guard++ < 60) {
    const found = findTarget(tree);
    if (!found) break;
    const { node: target, insideParen } = found;
    let value;
    try { value = target.evaluate(); } catch { stepped = false; break; }
    if (!valueOk(value)) { stepped = false; break; }
    if (exact && typeof value === 'number') value = math.fraction(value);
    const silent = target.isOperatorNode && (target.fn === 'unaryMinus' || target.fn === 'unaryPlus');
    tree = replace(tree, target, value);
    if (silent) continue;
    if (S.length > MAX_STEPS) { stepped = false; break; }
    let title;
    let detail;
    if (target.isOperatorNode) {
      const [a, b] = target.args.map((x) => (x.isConstantNode ? x.value : x.evaluate()));
      const frDesc = exact && b !== undefined ? describeFractionOp(target.fn, math.fraction(a), math.fraction(b), lang) : null;
      if (frDesc) ({ title, detail } = frDesc);
      else {
        title = S.t(OP_KEYS[target.fn] || 'opCalculate');
        detail = `${pretty(target, lang)} = ${fmtNum(value, lang)}`;
      }
    } else {
      const name = target.fn.name || target.name;
      title = S.t(FN_KEYS[name] || 'opFunction', { fn: { log: 'ln', log10: 'log', asin: 'arcsin', acos: 'arccos', atan: 'arctan' }[name] || name });
      detail = `${pretty(target, lang)} = ${fmtNum(value, lang)}`;
    }
    if (insideParen) title = `${title} ${S.t('insideBrackets')}`;
    const after = pretty(tree, lang);
    S.add(title, after !== fmtNum(value, lang) ? after : null, detail);
  }

  const finalExact = exact ? math.fraction(result) : null;
  const answer = exact ? fmtNum(finalExact, lang) : fmtFloat(toNum(result), lang);
  if (!stepped || S.length === 1) {
    S.list.splice(1);
    S.add(S.t('calculate'), `${given} = ${answer}`);
  }
  let explanation = `${S.t('finalAnswer')}: ${answer}`;
  if (exact && finalExact.d !== 1n) {
    explanation += ` ${isShortDecimal(finalExact) ? '=' : '≈'} ${fmtDec(finalExact, lang, isShortDecimal(finalExact) ? 6 : 4)}`;
  }
  return ok({
    type: exact ? 'fraction' : 'arithmetic',
    answer,
    steps: S,
    explanation,
    extras: { value: Number(toNum(result).toPrecision(12)), exact: exact ? finalExact.toFraction() : null, degrees },
  });
};
