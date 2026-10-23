// Linear equations in one variable, plus the shared "isolate the variable" step engine
// (also used for linear inequalities).
import { math, freeVariables, unwrap } from './parse';
import { Poly, lcmInt } from './poly';
import { Steps, ok, fail } from './steps';
import {
  pretty, fmtNum, fmtExactAndDec, monomial, isZero, isNeg, fabs, relSymbol, substitute, F, toNum,
} from './format';

const FLIP = { '<': '>', '>': '<', '<=': '>=', '>=': '<=', '=': '=' };

/** True when some bracket holds a sum (so the first step is "remove the brackets"). */
export const hasBracketSum = (...nodes) => nodes.some((node) => {
  let found = false;
  node.traverse((n) => {
    if (n.isParenthesisNode) {
      const c = unwrap(n);
      if (c.isOperatorNode && (c.fn === 'add' || c.fn === 'subtract')) found = true;
    }
  });
  return found;
});

/** Split "lhs = rhs" (or with an inequality sign) and build polynomials in the single variable. */
export const prepareRelation = (leftStr, rightStr, forcedVar) => {
  const leftNode = math.parse(leftStr);
  const rightNode = math.parse(rightStr);
  const vars = [...new Set([...freeVariables(leftNode), ...freeVariables(rightNode)])];
  if (forcedVar ? vars.some((x) => x !== forcedVar) : vars.length !== 1) return null;
  const v = forcedVar || vars[0];
  const L = Poly.tryFromNode(leftNode, v);
  const R = Poly.tryFromNode(rightNode, v);
  if (!L || !R) return null;
  return { leftNode, rightNode, v, L, R, degree: L.sub(R).degree };
};

const sideStr = (p, lang) => p.toString(lang);

/**
 * Isolate the variable of a linear relation L op R step by step.
 * Returns { status: 'unique', value, op } | { status: 'all' } | { status: 'none' }.
 */
export const isolateLinear = ({ L: L0, R: R0, v, op = '=', S, lang, leftNode, rightNode }) => {
  let L = L0;
  let R = R0;
  let rel = op;
  const show = () => `${sideStr(L, lang)} ${relSymbol(rel)} ${sideStr(R, lang)}`;
  const ineq = op !== '=';

  // 1) brackets / like terms
  if (leftNode && (pretty(leftNode, lang) !== sideStr(L, lang) || pretty(rightNode, lang) !== sideStr(R, lang))) {
    S.addT(hasBracketSum(leftNode, rightNode) ? 'expandBrackets' : 'combineLikeTerms', null, show());
  }

  // 2) clear fractions
  const d = lcmInt(L.denominatorLcm(), R.denominatorLcm());
  if (d > 1) {
    L = L.scale(d);
    R = R.scale(d);
    S.addT('multiplyBothSidesLcd', { k: d }, show());
  }

  // 3) variable only on the right → swap sides
  if (isZero(L.coef(1)) && !isZero(R.coef(1))) {
    [L, R] = [R, L];
    rel = FLIP[rel];
    S.addT(ineq ? 'swapSidesIneq' : 'swapSides', null, show());
  }

  // 4) variable terms to the left
  const a2 = R.coef(1);
  if (!isZero(a2)) {
    const term = monomial(fabs(a2), v, lang).text;
    const move = Poly.x(v).scale(a2);
    L = L.sub(move);
    R = R.sub(move);
    S.addT(isNeg(a2) ? 'addBothSides' : 'subtractBothSides', { term }, show());
  }

  // 5) constants to the right
  const b1 = L.coef(0);
  if (!isZero(b1) && !isZero(L.coef(1))) {
    const term = fmtNum(fabs(b1), lang);
    L = L.sub(Poly.const(b1, v));
    R = R.sub(Poly.const(b1, v));
    S.addT(isNeg(b1) ? 'addBothSides' : 'subtractBothSides', { term }, show());
  }

  const a = L.coef(1);
  if (isZero(a)) {
    // 0 = c  (or 0 < c …): decide by the constants
    const lhs = toNum(L.coef(0));
    const rhs = toNum(R.coef(0));
    const holds = { '=': lhs === rhs, '<': lhs < rhs, '>': lhs > rhs, '<=': lhs <= rhs, '>=': lhs >= rhs }[rel];
    S.addT(holds ? 'alwaysTrue' : 'neverTrue', { rel: `${fmtNum(L.coef(0), lang)} ${relSymbol(rel)} ${fmtNum(R.coef(0), lang)}` });
    return { status: holds ? 'all' : 'none' };
  }

  // 6) divide by the coefficient
  const c = R.coef(0);
  const value = c.div(a);
  if (!a.equals(1)) {
    const flipped = isNeg(a) && ineq;
    const newRel = flipped ? FLIP[rel] : rel;
    let mathLine;
    if (a.equals(-1)) {
      mathLine = `${v} ${relSymbol(newRel)} ${fmtNum(value, lang)}`;
      S.add(S.t('multiplyBothSides', { k: '−1' }), mathLine, flipped ? S.t('signFlips', { from: relSymbol(rel), to: relSymbol(newRel) }) : undefined);
    } else {
      const literal = `${fmtNum(c, lang)}/${isNeg(a) || a.d !== 1n ? `(${fmtNum(a, lang)})` : fmtNum(a, lang)}`;
      const shown = fmtNum(value, lang);
      mathLine = `${v} ${relSymbol(newRel)} ${literal}${literal !== shown ? ` = ${shown}` : ''}`;
      S.add(S.t('divideBothSides', { k: fmtNum(a, lang) }), mathLine, flipped ? S.t('signFlips', { from: relSymbol(rel), to: relSymbol(newRel) }) : undefined);
    }
    rel = newRel;
  }
  return { status: 'unique', value, op: rel };
};

/** Substitute value into both original sides and show they agree. */
export const verifyStep = (S, leftNode, rightNode, v, value, lang, L, R) => {
  const lv = L.evalAt(value);
  const rv = R.evalAt(value);
  const side = (node, val) => {
    const s = pretty(substitute(node, v, value), lang);
    const r = fmtNum(val, lang);
    return s === r ? r : `${s} = ${r}`;
  };
  const okMark = lv.equals(rv) ? ' ✓' : ' ✗';
  S.addT('verify', { v, value: fmtNum(value, lang) },
    `${S.t('leftSide')}: ${side(leftNode, lv)}\n${S.t('rightSide')}: ${side(rightNode, rv)}${okMark}`);
};

/** Solve a prepared linear equation (degree ≤ 1). */
export const solveLinearEquation = (ctx, lang, original) => {
  const S = new Steps(lang);
  const { leftNode, rightNode, v, L, R } = ctx;
  S.addT('givenEquation', null, original || `${pretty(leftNode, lang)} = ${pretty(rightNode, lang)}`);
  const res = isolateLinear({ L, R, v, op: '=', S, lang, leftNode, rightNode });

  if (res.status !== 'unique') {
    const answer = S.t(res.status === 'all' ? 'infiniteSolutions' : 'noSolution');
    return ok({ type: 'linear', answer, steps: S, explanation: answer, extras: { variable: v, status: res.status } });
  }
  verifyStep(S, leftNode, rightNode, v, res.value, lang, L, R);
  const answer = `${v} = ${fmtNum(res.value, lang)}`;
  return ok({
    type: 'linear',
    answer,
    steps: S,
    explanation: S.t('linearExplanation', { v, value: fmtExactAndDec(res.value, lang) }),
    extras: { variable: v, solution: toNum(res.value), solutionExact: res.value.toFraction(), status: 'unique' },
  });
};

export const solveLinearFromStrings = (leftStr, rightStr, lang, original) => {
  const ctx = prepareRelation(leftStr, rightStr);
  if (!ctx) return fail('Not a linear equation in one variable');
  if (ctx.degree > 1) return fail('Not linear');
  return solveLinearEquation(ctx, lang, original);
};

export { F };
