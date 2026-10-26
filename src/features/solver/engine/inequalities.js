// Linear inequalities in one variable (also double inequalities a < expr < b), answer in interval notation.
import { math, freeVariables } from './parse';
import { Poly, lcmInt } from './poly';
import { Steps, ok, fail } from './steps';
import { pretty, fmtNum, relSymbol, isNeg, isZero, toNum, listSep, fabs, monomial } from './format';
import { isolateLinear, prepareRelation } from './linear';
import { solveSpecialInequality } from './nonPolynomial';

const REL_RE = /(<=|>=|<|>)/;
const FLIP = { '<': '>', '>': '<', '<=': '>=', '>=': '<=' };

export const looksLikeInequality = (s) => REL_RE.test(s) && !/=/.test(s.replace(/<=|>=/g, ''));

const intervalText = (op, value, lang) => {
  const sep = listSep(lang);
  const n = fmtNum(value, lang);
  switch (op) {
    case '<': return `(−∞${sep}${n})`;
    case '<=': return `(−∞${sep}${n}]`;
    case '>': return `(${n}${sep}+∞)`;
    case '>=': return `[${n}${sep}+∞)`;
    default: return '';
  }
};

const testPoint = (op, value) => {
  const v = toNum(value);
  const step = Math.abs(v) >= 10 ? Math.round(Math.abs(v) / 2) : 1;
  const raw = op === '<' || op === '<=' ? Math.floor(v) - step : Math.ceil(v) + step;
  return math.fraction(raw === v ? (op.startsWith('<') ? raw - 1 : raw + 1) : raw);
};

const holds = (op, l, r) => ({ '<': l < r, '>': l > r, '<=': l <= r, '>=': l >= r }[op]);

/** Single linear inequality "lhs op rhs". */
const solveSingle = (leftStr, op, rightStr, lang) => {
  const ctx = prepareRelation(leftStr, rightStr);
  if (!ctx || ctx.degree > 1) {
    // quadratic inequalities and |A| < c, |A| > c
    const special = solveSpecialInequality(leftStr, op, rightStr, lang);
    if (special) return special;
    return fail(ctx ? 'Only linear and quadratic inequalities are supported offline' : 'Inequality must be linear in one variable');
  }
  const { leftNode, rightNode, v, L, R } = ctx;
  const S = new Steps(lang);
  S.addT('givenInequality', null, `${pretty(leftNode, lang)} ${relSymbol(op)} ${pretty(rightNode, lang)}`);
  const res = isolateLinear({ L, R, v, op, S, lang, leftNode, rightNode });
  if (res.status !== 'unique') {
    const answer = res.status === 'all' ? `${v} ∈ ℝ` : `${v} ∈ ∅`;
    const interval = res.status === 'all' ? `(−∞${listSep(lang)}+∞)` : '∅';
    return ok({ type: 'inequality', answer, steps: S, explanation: S.t(res.status === 'all' ? 'ineqAll' : 'ineqNone'), extras: { variable: v, interval, status: res.status } });
  }
  const interval = intervalText(res.op, res.value, lang);
  const answer = `${v} ${relSymbol(res.op)} ${fmtNum(res.value, lang)}`;
  // check with a test point
  const tp = testPoint(res.op, res.value);
  const lv = L.evalAt(tp);
  const rv = R.evalAt(tp);
  const good = holds(op, toNum(lv), toNum(rv));
  S.addT('ineqCheck', { v, value: fmtNum(tp, lang) }, `${fmtNum(lv, lang)} ${relSymbol(op)} ${fmtNum(rv, lang)}${good ? ' ✓' : ' ✗'}`);
  S.addT('intervalNotation', null, `${v} ∈ ${interval}`);
  return ok({
    type: 'inequality',
    answer: `${answer}  (${v} ∈ ${interval})`,
    steps: S,
    explanation: S.t('ineqExplanation', { answer, interval }),
    extras: { variable: v, inequality: answer, interval, boundary: toNum(res.value), relation: res.op, status: 'unique' },
  });
};

/** Double inequality a op1 expr op2 b with both signs pointing the same way. */
const solveDouble = (parts, ops, lang) => {
  const [aStr, midStr, bStr] = parts;
  const nodes = parts.map((p) => math.parse(p));
  const vars = freeVariables(nodes[1]);
  if (vars.length !== 1 || freeVariables(nodes[0]).length || freeVariables(nodes[2]).length) return fail('Unsupported double inequality');
  const v = vars[0];
  let M = Poly.tryFromNode(nodes[1], v);
  let A = Poly.tryFromNode(nodes[0], v);
  let B = Poly.tryFromNode(nodes[2], v);
  if (!M || !A || !B || M.degree !== 1) return fail('Only linear double inequalities are supported');
  let [op1, op2] = ops;
  const S = new Steps(lang);
  const show = () => `${A.toString(lang)} ${relSymbol(op1)} ${M.toString(lang)} ${relSymbol(op2)} ${B.toString(lang)}`;
  S.addT('givenInequality', null, `${pretty(nodes[0], lang)} ${relSymbol(op1)} ${pretty(nodes[1], lang)} ${relSymbol(op2)} ${pretty(nodes[2], lang)}`);
  void aStr; void midStr; void bStr;
  const d = lcmInt(M.denominatorLcm(), lcmInt(A.denominatorLcm(), B.denominatorLcm()));
  if (d > 1) { M = M.scale(d); A = A.scale(d); B = B.scale(d); S.addT('multiplyAllPartsLcd', { k: d }, show()); }
  const b = M.coef(0);
  if (!isZero(b)) {
    const shift = Poly.const(b, v);
    M = M.sub(shift); A = A.sub(shift); B = B.sub(shift);
    S.addT(isNeg(b) ? 'addAllParts' : 'subtractAllParts', { term: fmtNum(fabs(b), lang) }, show());
  }
  const a = M.coef(1);
  if (!a.equals(1)) {
    const k = a;
    A = A.scale(math.fraction(1).div(k)); B = B.scale(math.fraction(1).div(k)); M = M.scale(math.fraction(1).div(k));
    if (isNeg(k)) {
      [op1, op2] = [FLIP[op2], FLIP[op1]];
      [A, B] = [B, A];
      S.add(S.t('divideAllParts', { k: fmtNum(k, lang) }), show(), S.t('signFlipsBoth'));
    } else {
      S.addT('divideAllParts', { k: fmtNum(k, lang) }, show());
    }
  }
  const lo = A.coef(0);
  const hi = B.coef(0);
  const sep = listSep(lang);
  // after normalisation the chain reads lo op1 v op2 hi with op1, op2 ∈ {<, <=}
  if (!(op1.startsWith('<') && op2.startsWith('<'))) return fail('Unsupported double inequality');
  if (toNum(lo) > toNum(hi) || (toNum(lo) === toNum(hi) && (op1 === '<' || op2 === '<'))) {
    S.addT('emptyInterval');
    return ok({ type: 'inequality', answer: `${v} ∈ ∅`, steps: S, explanation: S.t('ineqNone'), extras: { variable: v, interval: '∅', status: 'none' } });
  }
  const interval = `${op1 === '<' ? '(' : '['}${fmtNum(lo, lang)}${sep}${fmtNum(hi, lang)}${op2 === '<' ? ')' : ']'}`;
  S.addT('intervalNotation', null, `${v} ∈ ${interval}`);
  const answer = `${fmtNum(lo, lang)} ${relSymbol(op1)} ${v} ${relSymbol(op2)} ${fmtNum(hi, lang)}`;
  void monomial;
  return ok({
    type: 'inequality',
    answer: `${answer}  (${v} ∈ ${interval})`,
    steps: S,
    explanation: S.t('ineqExplanation', { answer, interval }),
    extras: { variable: v, inequality: answer, interval, lower: toNum(lo), upper: toNum(hi), status: 'unique' },
  });
};

/** Entry: expression already normalised (≤ → <=, ≥ → >=). */
export const solveInequality = (expr, lang) => {
  const tokens = expr.split(REL_RE).map((s) => s.trim());
  if (tokens.length === 3) {
    if (!tokens[0] || !tokens[2]) return fail('Incomplete inequality');
    return solveSingle(tokens[0], tokens[1], tokens[2], lang);
  }
  if (tokens.length === 5) {
    const ops = [tokens[1], tokens[3]];
    const sameDir = (ops[0][0] === ops[1][0]);
    if (!sameDir) return fail('Mixed inequality directions');
    if (ops[0].startsWith('>')) {
      // a > expr > b  ⇔  b < expr < a
      return solveDouble([tokens[4], tokens[2], tokens[0]], [FLIP[ops[1]], FLIP[ops[0]]], lang);
    }
    return solveDouble([tokens[0], tokens[2], tokens[4]], ops, lang);
  }
  return fail('Unsupported inequality');
};

export const inequalityTool = (input, lang, normalize) => {
  const expr = normalize(String(input.expression || ''));
  if (!looksLikeInequality(expr)) return fail('No inequality sign found');
  return solveInequality(expr, lang);
};
