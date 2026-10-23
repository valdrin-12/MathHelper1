// Systems of linear equations (2×2 by substitution/elimination, 3×3 by Gaussian elimination).
import { math, freeVariables, normalizeCore, decimalCommaToPoint } from './parse';
import { Lin, lcmInt } from './poly';
import { Steps, ok, fail } from './steps';
import { fmtNum, isZero, isNeg, toNum, listSep, monomial, joinTerms, sub, paren, F } from './format';

const frac = (a, b = 1) => math.fraction(a, b);

/** Split a text into equations: ';', newlines, "and/dhe/und", or ',' when every part has one '='. */
export const splitSystem = (text) => {
  const s = String(text).trim().replace(/^\{|\}$/g, '').replace(/^\s*\[|\]\s*$/g, '');
  let parts = s.split(/;|\n|\s+(?:and|dhe|edhe|und)\s+/i).map((p) => p.trim()).filter(Boolean);
  if (parts.length < 2) {
    const commaParts = s.split(',').map((p) => p.trim()).filter(Boolean);
    if (commaParts.length >= 2 && commaParts.every((p) => (p.match(/=/g) || []).length === 1)) parts = commaParts;
    else {
      const spaced = s.split(/,\s+/).map((p) => p.trim()).filter(Boolean);
      if (spaced.length >= 2 && spaced.every((p) => (p.match(/=/g) || []).length === 1)) parts = spaced;
    }
  }
  return parts;
};

const eqText = (lin, rhs, order, lang) => `${lin.lhsString(order, lang)} = ${fmtNum(rhs, lang)}`;

/** Row-based Gaussian elimination with row-operation steps. rows: Fraction[][] augmented (n × (m+1)). */
export const gaussEliminate = (rowsIn, vars, S, lang, { showEquations = true } = {}) => {
  const rows = rowsIn.map((r) => r.slice());
  const n = rows.length;
  const m = vars.length;
  const label = (i) => `(${i + 1})`;
  const rowText = (r) => {
    const terms = vars.map((v, j) => (isZero(r[j]) ? null : monomial(r[j], v, lang))).filter(Boolean);
    return `${joinTerms(terms)} = ${fmtNum(r[m], lang)}`;
  };
  const showAll = () => rows.map((r, i) => `${label(i)} ${showEquations ? rowText(r) : r.map((x) => fmtNum(x, lang)).join('  ')}`).join('\n');
  const pivots = [];
  let row = 0;
  for (let col = 0; col < m && row < n; col++) {
    let p = row;
    while (p < n && isZero(rows[p][col])) p++;
    if (p === n) continue;
    if (p !== row) {
      [rows[p], rows[row]] = [rows[row], rows[p]];
      S?.add(S.t('swapRows', { i: row + 1, j: p + 1 }), showAll());
    }
    for (let r = row + 1; r < n; r++) {
      if (isZero(rows[r][col])) continue;
      const f = rows[r][col].div(rows[row][col]);
      rows[r] = rows[r].map((x, j) => x.sub(f.mul(rows[row][j])));
      const op = `R${sub(r + 1)} → R${sub(r + 1)} ${isNeg(f) ? '+' : '−'} ${f.abs().equals(1) ? '' : `${paren(fmtNum(f.abs(), lang))}·`}R${sub(row + 1)}`;
      S?.add(S.t('eliminateVar', { v: vars[col], i: r + 1 }), `${op}\n${showAll()}`);
    }
    pivots.push({ row, col });
    row++;
  }
  // consistency
  for (let r = 0; r < n; r++) {
    if (rows[r].slice(0, m).every(isZero) && !isZero(rows[r][m])) return { status: 'none', rows };
  }
  if (pivots.length < m) return { status: 'infinite', rows };
  // back substitution
  const sol = Array(m).fill(null);
  for (let k = pivots.length - 1; k >= 0; k--) {
    const { row: r, col } = pivots[k];
    let rhs = rows[r][m];
    const known = [];
    for (let j = col + 1; j < m; j++) {
      if (!isZero(rows[r][j])) { rhs = rhs.sub(rows[r][j].mul(sol[j])); known.push(j); }
    }
    sol[col] = rhs.div(rows[r][col]);
    if (S) {
      const subst = known.length
        ? `${monomial(rows[r][col], vars[col], lang).text} ${known.map((j) => `${isNeg(rows[r][j]) ? '−' : '+'} ${rows[r][j].abs().equals(1) ? '' : fmtNum(rows[r][j].abs(), lang)}·${paren(fmtNum(sol[j], lang))}`).join(' ')} = ${fmtNum(rows[r][m], lang)} ⇒ `
        : '';
      S.add(S.t('backSubstitute', { v: vars[col], i: r + 1 }), `${subst}${vars[col]} = ${fmtNum(sol[col], lang)}`);
    }
  }
  return { status: 'unique', solution: sol, rows };
};

/** Parse equations into linear forms; returns { lins, rhs, vars } or throws. */
export const parseLinearSystem = (equations) => {
  const lins = [];
  const rhs = [];
  const allVars = new Set();
  for (const raw of equations) {
    const eq = decimalCommaToPoint(normalizeCore(raw));
    const sides = eq.split('=');
    if (sides.length !== 2 || !sides[0].trim() || !sides[1].trim()) throw new Error('Each line must be one equation');
    const l = Lin.fromNode(math.parse(sides[0]));
    const r = Lin.fromNode(math.parse(sides[1]));
    const lin = l.sub(r);
    freeVariables(`(${sides[0]})-(${sides[1]})`).forEach((v) => allVars.add(v));
    lins.push(new Lin(lin.coeffs, 0));
    rhs.push(lin.k.neg());
  }
  const vars = [...allVars].sort();
  return { lins, rhs, vars };
};

const solutionText = (vars, sol, lang) => vars.map((v, i) => `${v} = ${fmtNum(sol[i], lang)}`).join(listSep(lang));

const verify = (S, lins, rhs, vars, sol, lang) => {
  const lines = lins.map((lin, i) => {
    const parts = vars.filter((v) => !isZero(lin.get(v))).map((v, k) => {
      const c = lin.get(v);
      const val = sol[vars.indexOf(v)];
      const coef = c.abs().equals(1) ? '' : `${fmtNum(c.abs(), lang)}·`;
      const sign = isNeg(c) ? (k === 0 ? '−' : ' − ') : (k === 0 ? '' : ' + ');
      return `${sign}${coef}${paren(fmtNum(val, lang))}`;
    }).join('');
    const value = vars.reduce((acc, v, j) => acc.add(lin.get(v).mul(sol[j])), frac(0));
    return `(${i + 1}) ${parts} = ${fmtNum(value, lang)}${value.equals(rhs[i]) ? ' ✓' : ' ✗'}`;
  });
  S.addT('verifySystem', null, lines.join('\n'));
};

/** 2×2 by substitution when a coefficient is ±1, otherwise by elimination. */
const solve2x2 = (S, lins, rhs, vars, lang) => {
  const [v1, v2] = vars;
  const n = (x) => fmtNum(x, lang);
  // substitution candidate
  let pick = null;
  for (let i = 0; i < 2 && !pick; i++) {
    for (const v of vars) {
      if (lin1Abs(lins[i].get(v))) { pick = { i, v }; break; }
    }
  }
  if (pick) {
    const { i, v } = pick;
    const o = 1 - i;
    const w = v === v1 ? v2 : v1;
    const cv = lins[i].get(v);
    const cw = lins[i].get(w);
    // v = (rhs_i − cw·w)/cv
    const k0 = rhs[i].div(cv);
    const k1 = cw.neg().div(cv);
    const exprTerms = [];
    if (!isZero(k0)) exprTerms.push(monomial(k0, '', lang));
    if (!isZero(k1)) exprTerms.push(monomial(k1, w, lang));
    const exprText = joinTerms(exprTerms);
    S.add(S.t('expressVariable', { v, i: i + 1 }), `${v} = ${exprText}`);
    const a = lins[o].get(v);
    const b = lins[o].get(w);
    const substituted = `${isZero(a) ? '' : `${a.equals(1) ? '' : a.equals(-1) ? '−' : n(a)}(${exprText})`}${isZero(b) ? '' : ` ${isNeg(b) ? '−' : '+'} ${monomial(b.abs(), w, lang).text}`} = ${n(rhs[o])}`;
    S.add(S.t('substituteInto', { v, i: o + 1 }), substituted.trim());
    const coefW = a.mul(k1).add(b);
    const constPart = a.mul(k0);
    const lhs = joinTerms([monomial(coefW, w, lang), ...(isZero(constPart) ? [] : [monomial(constPart, '', lang)])].filter((t) => t.body !== '0'));
    S.addT('expandAndCombine', null, `${lhs} = ${n(rhs[o])}`);
    if (isZero(coefW)) return null; // degenerate, caller uses the general method
    const wVal = rhs[o].sub(constPart).div(coefW);
    if (!isZero(constPart)) S.addT(isNeg(constPart) ? 'addBothSides' : 'subtractBothSides', { term: n(constPart.abs()) }, `${monomial(coefW, w, lang).text} = ${n(rhs[o].sub(constPart))}`);
    if (!coefW.equals(1)) S.addT('divideBothSides', { k: n(coefW) }, `${w} = ${n(wVal)}`);
    const vVal = k0.add(k1.mul(wVal));
    S.add(S.t('backSubstituteInto', { w, v }), `${v} = ${exprText.replace(new RegExp(`(^|[^a-z])${w}(?![a-z])`, 'g'), (mm, pre) => `${pre}·${paren(n(wVal))}`).replace(/^·|(\s)·/g, '$1')} = ${n(vVal)}`);
    const sol = vars.map((x) => (x === v ? vVal : wVal));
    return sol;
  }
  // elimination of v1
  const a1 = lins[0].get(v1);
  const a2 = lins[1].get(v1);
  if (isZero(a1) || isZero(a2)) return null;
  let m1;
  let m2;
  if (a1.d === 1n && a2.d === 1n) {
    const L = lcmInt(Number(a1.abs().n), Number(a2.abs().n));
    m1 = frac(L).div(a1.abs());
    m2 = frac(L).div(a2.abs());
  } else {
    m1 = a2.abs();
    m2 = a1.abs();
  }
  const e1 = lins[0].scale(m1); const r1 = rhs[0].mul(m1);
  const e2 = lins[1].scale(m2); const r2 = rhs[1].mul(m2);
  S.add(S.t('multiplyEquations', { m1: n(m1), m2: n(m2) }), `(1) ${eqText(e1, r1, vars, lang)}\n(2) ${eqText(e2, r2, vars, lang)}`);
  const sameSign = isNeg(a1) === isNeg(a2);
  const comb = sameSign ? e1.sub(e2) : e1.add(e2);
  const rc = sameSign ? r1.sub(r2) : r1.add(r2);
  S.add(S.t(sameSign ? 'subtractEquations' : 'addEquations', { v: v1 }), `${eqText(comb, rc, vars, lang)}`);
  const cw = comb.get(v2);
  if (isZero(cw)) return null;
  const wVal = rc.div(cw);
  if (!cw.equals(1)) S.addT('divideBothSides', { k: n(cw) }, `${v2} = ${n(wVal)}`);
  // back-substitute into (1)
  const b1 = lins[0].get(v2);
  const vVal = rhs[0].sub(b1.mul(wVal)).div(a1);
  S.add(S.t('backSubstituteInto', { w: v2, v: v1 }),
    `${monomial(a1, v1, lang).text} ${isNeg(b1) ? '−' : '+'} ${b1.abs().equals(1) ? '' : `${n(b1.abs())}·`}${paren(n(wVal))} = ${n(rhs[0])} ⇒ ${v1} = ${n(vVal)}`);
  return [vVal, wVal];
};

const lin1Abs = (c) => !isZero(c) && c.abs().equals(1);

/** Solve a system given as array of equation strings. */
export const solveSystem = (equations, lang) => {
  let parsed;
  try {
    parsed = parseLinearSystem(equations);
  } catch (e) {
    return fail(`System must be linear: ${e.message}`);
  }
  const { lins, rhs, vars } = parsed;
  if (vars.length !== lins.length || vars.length < 2 || vars.length > 4) return fail('Need as many equations as unknowns (2×2 or 3×3)');
  const S = new Steps(lang);
  S.addT('givenSystem', null, equations.map((e, i) => `(${i + 1}) ${e.trim()}`).join('\n'));
  S.addT('standardFormSystem', null, lins.map((l, i) => `(${i + 1}) ${eqText(l, rhs[i], vars, lang)}`).join('\n'));

  let sol = null;
  if (vars.length === 2) {
    const det = lins[0].get(vars[0]).mul(lins[1].get(vars[1])).sub(lins[0].get(vars[1]).mul(lins[1].get(vars[0])));
    if (!isZero(det)) sol = solve2x2(S, lins, rhs, vars, lang);
  }
  let status = 'unique';
  if (!sol) {
    const rows = lins.map((l, i) => [...vars.map((v) => l.get(v)), rhs[i]]);
    if (vars.length === 2) S.list.splice(2); // discard partial 2×2 attempt
    const res = gaussEliminate(rows, vars, S, lang);
    status = res.status;
    sol = res.solution;
  }
  if (status !== 'unique') {
    const answer = S.t(status === 'none' ? 'systemNoSolution' : 'systemInfinite');
    S.add(answer);
    return ok({ type: 'system', answer, steps: S, explanation: answer, extras: { variables: vars, status } });
  }
  verify(S, lins, rhs, vars, sol, lang);
  const answer = solutionText(vars, sol, lang);
  const point = `(${sol.map((x) => fmtNum(x, lang)).join(listSep(lang))})`;
  return ok({
    type: 'system',
    answer,
    steps: S,
    explanation: S.t('systemExplanation', { answer, point }),
    extras: {
      variables: vars,
      status,
      solution: Object.fromEntries(vars.map((v, i) => [v, toNum(sol[i])])),
      solutionExact: Object.fromEntries(vars.map((v, i) => [v, sol[i].toFraction()])),
      point: sol.map(toNum),
    },
  });
};

export { F };
