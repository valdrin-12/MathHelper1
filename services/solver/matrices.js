// Matrices with exact fractions: determinant, inverse, multiply, add, transpose, solve A·x = b.
import { math, readNumber } from './parse';
import { Steps, ok, fail } from './steps';
import { fmtNum, fmtMatrix, isZero, isNeg, toNum, paren, sub, listSep } from './format';
import { gaussEliminate } from './systems';

const frac = (a, b = 1) => math.fraction(a, b);

const toMatrix = (M) => {
  if (!Array.isArray(M) || !M.length) throw new Error('Matrix must be a non-empty array');
  const rows = M.map((r) => (Array.isArray(r) ? r : [r]));
  const cols = rows[0].length;
  if (!cols || rows.some((r) => r.length !== cols)) throw new Error('All rows must have the same length');
  return rows.map((r) => r.map((x) => {
    const v = readNumber(x);
    if (!math.isFraction(v)) throw new Error('Entries must be rational numbers');
    return v;
  }));
};

const dims = (M) => `${M.length}×${M[0].length}`;
const numeric = (M) => M.map((r) => r.map((x) => Number(toNum(x).toPrecision(12))));
const exactStr = (M) => M.map((r) => r.map((x) => x.toFraction()));
const minor = (M, i, j) => M.filter((_, r) => r !== i).map((row) => row.filter((_, c) => c !== j));

const detExact = (M) => {
  const n = M.length;
  if (n === 1) return M[0][0];
  if (n === 2) return M[0][0].mul(M[1][1]).sub(M[0][1].mul(M[1][0]));
  let d = frac(0);
  for (let j = 0; j < n; j++) {
    if (isZero(M[0][j])) continue;
    const term = M[0][j].mul(detExact(minor(M, 0, j)));
    d = j % 2 ? d.sub(term) : d.add(term);
  }
  return d;
};

const det2Text = (M, lang) => {
  const n = (x) => paren(fmtNum(x, lang));
  return `${n(M[0][0])}·${n(M[1][1])} − ${n(M[0][1])}·${n(M[1][0])}`;
};

const detSteps = (S, A, lang) => {
  const n = A.length;
  const d = detExact(A);
  if (n === 1) { S.addT('det1', null, `det A = ${fmtNum(d, lang)}`); return d; }
  if (n === 2) {
    S.add(S.t('det2Rule'), `det A = ${det2Text(A, lang)} = ${fmtNum(A[0][0].mul(A[1][1]), lang)} − ${paren(fmtNum(A[0][1].mul(A[1][0]), lang))} = ${fmtNum(d, lang)}`, 'det = a·d − b·c');
    return d;
  }
  if (n === 3) {
    S.add(S.t('cofactorExpansion'), 'det A = a₁₁·M₁₁ − a₁₂·M₁₂ + a₁₃·M₁₃');
    const parts = [];
    for (let j = 0; j < 3; j++) {
      const m = minor(A, 0, j);
      const md = detExact(m);
      S.addT('minorValue', { ij: `${sub(1)}${sub(j + 1)}` }, `M${sub(1)}${sub(j + 1)} = ${det2Text(m, lang)} = ${fmtNum(md, lang)}`);
      parts.push({ a: A[0][j], md, sign: j % 2 ? '−' : '+' });
    }
    const expr = parts.map((p, j) => `${j ? ` ${p.sign} ` : ''}${paren(fmtNum(p.a, lang))}·${paren(fmtNum(p.md, lang))}`).join('');
    S.addT('combineCofactors', null, `det A = ${expr} = ${fmtNum(d, lang)}`);
    return d;
  }
  S.addT('detByElimination', null, `det A = ${fmtNum(d, lang)}`);
  return d;
};

const inverseExact = (A) => {
  const n = A.length;
  const M = A.map((r, i) => [...r, ...Array.from({ length: n }, (_, j) => frac(i === j ? 1 : 0))]);
  for (let c = 0; c < n; c++) {
    let p = c;
    while (p < n && isZero(M[p][c])) p++;
    if (p === n) return null;
    [M[p], M[c]] = [M[c], M[p]];
    const piv = M[c][c];
    M[c] = M[c].map((x) => x.div(piv));
    for (let r = 0; r < n; r++) {
      if (r === c || isZero(M[r][c])) continue;
      const f = M[r][c];
      M[r] = M[r].map((x, j) => x.sub(f.mul(M[c][j])));
    }
  }
  return M.map((r) => r.slice(n));
};

export const matrixTool = (input, lang) => {
  const op = input.op || 'det';
  let A;
  let B;
  try {
    A = toMatrix(input.A);
    if (input.B !== undefined && input.B !== null) B = toMatrix(input.B);
  } catch (e) {
    return fail(e.message);
  }
  const S = new Steps(lang);
  const show = (M) => fmtMatrix(M, lang);
  S.add(`A (${dims(A)})`, show(A));
  if (B && op !== 'det' && op !== 'inverse' && op !== 'transpose') S.add(`B (${dims(B)})`, show(B));
  const square = A.length === A[0].length;

  if (op === 'det') {
    if (!square) return fail('Determinant needs a square matrix');
    const d = detSteps(S, A, lang);
    const answer = `det A = ${fmtNum(d, lang)}`;
    return ok({ type: 'matrix', answer, steps: S, explanation: S.t(isZero(d) ? 'detZeroNote' : 'detNonZeroNote', { d: fmtNum(d, lang) }), extras: { op, determinant: toNum(d), determinantExact: d.toFraction() } });
  }
  if (op === 'inverse') {
    if (!square) return fail('Inverse needs a square matrix');
    const d = detSteps(S, A, lang);
    if (isZero(d)) {
      S.addT('singularMatrix');
      return ok({ type: 'matrix', answer: S.t('noInverse'), steps: S, explanation: S.t('singularMatrix'), extras: { op, determinant: 0, matrix: null } });
    }
    const inv = inverseExact(A);
    if (A.length === 2) {
      const [[a, b], [c, dd]] = A;
      S.add(S.t('inverse2Rule'), `A⁻¹ = 1/${paren(fmtNum(d, lang))} · ${show([[dd, b.neg()], [c.neg(), a]]).replace(/\n/g, '\n')}`, 'A⁻¹ = 1/det A · [d −b; −c a]');
    } else if (A.length === 3) {
      const C = A.map((r, i) => r.map((_, j) => { const m = detExact(minor(A, i, j)); return (i + j) % 2 ? m.neg() : m; }));
      S.add(S.t('cofactorMatrix'), show(C), 'Cᵢⱼ = (−1)ⁱ⁺ʲ·Mᵢⱼ');
      const adj = C[0].map((_, j) => C.map((r) => r[j]));
      S.add(S.t('adjugateMatrix'), `adj A = Cᵀ =\n${show(adj)}`);
      S.add(S.t('inverseFormula'), `A⁻¹ = 1/${paren(fmtNum(d, lang))} · adj A`, 'A⁻¹ = (1/det A)·adj A');
    } else {
      S.add(S.t('gaussJordanInverse'), `[A | I] → [I | A⁻¹]`);
    }
    S.addT('inverseResult', null, `A⁻¹ =\n${show(inv)}`);
    S.addT('inverseCheck', null, 'A · A⁻¹ = I ✓');
    return ok({ type: 'matrix', answer: `A⁻¹ =\n${show(inv)}`, steps: S, explanation: S.t('inverseExplanation'), extras: { op, determinant: toNum(d), matrix: numeric(inv), matrixExact: exactStr(inv) } });
  }
  if (op === 'transpose') {
    const T = A[0].map((_, j) => A.map((r) => r[j]));
    S.addT('transposeRule', null, `Aᵀ =\n${show(T)}`);
    return ok({ type: 'matrix', answer: `Aᵀ =\n${show(T)}`, steps: S, explanation: S.t('transposeRule'), extras: { op, matrix: numeric(T), matrixExact: exactStr(T) } });
  }
  if (op === 'add') {
    if (!B) return fail('Matrix B is required');
    if (dims(A) !== dims(B)) return fail('Matrices must have the same size');
    const C = A.map((r, i) => r.map((x, j) => x.add(B[i][j])));
    const lines = A.map((r, i) => r.map((x, j) => `${fmtNum(x, lang)} + ${paren(fmtNum(B[i][j], lang))} = ${fmtNum(C[i][j], lang)}`).join(listSep(lang))).join('\n');
    S.addT('addEntrywise', null, lines);
    S.addT('matrixResult', { name: 'A + B' }, show(C));
    return ok({ type: 'matrix', answer: `A + B =\n${show(C)}`, steps: S, explanation: S.t('addEntrywise'), extras: { op, matrix: numeric(C), matrixExact: exactStr(C) } });
  }
  if (op === 'multiply') {
    if (!B) return fail('Matrix B is required');
    if (A[0].length !== B.length) return fail('Columns of A must equal rows of B');
    const C = A.map((r) => B[0].map((_, j) => r.reduce((acc, x, k) => acc.add(x.mul(B[k][j])), frac(0))));
    S.addT('multiplyRowByColumn', { m: A.length, n: A[0].length, p: B[0].length });
    if (C.length * C[0].length <= 9) {
      const lines = [];
      C.forEach((row, i) => row.forEach((val, j) => {
        const terms = A[i].map((x, k) => `${paren(fmtNum(x, lang))}·${paren(fmtNum(B[k][j], lang))}`).join(' + ');
        lines.push(`c${sub(i + 1)}${sub(j + 1)} = ${terms} = ${fmtNum(val, lang)}`);
      }));
      S.addT('entries', null, lines.join('\n'));
    }
    S.addT('matrixResult', { name: 'A · B' }, show(C));
    return ok({ type: 'matrix', answer: `A · B =\n${show(C)}`, steps: S, explanation: S.t('multiplyRowByColumn', { m: A.length, n: A[0].length, p: B[0].length }), extras: { op, matrix: numeric(C), matrixExact: exactStr(C) } });
  }
  if (op === 'solve') {
    if (!square) return fail('A must be square');
    if (!B) return fail('Vector b is required');
    const bcol = B.length === A.length && B[0].length === 1 ? B.map((r) => r[0]) : B.length === 1 && B[0].length === A.length ? B[0] : null;
    if (!bcol) return fail('b must have one value per row of A');
    const vars = A.length <= 3 ? ['x', 'y', 'z'].slice(0, A.length) : A.map((_, i) => `x${sub(i + 1)}`);
    const rows = A.map((r, i) => [...r, bcol[i]]);
    S.addT('augmentedSystem', null, rows.map((r, i) => `(${i + 1}) ${r.slice(0, -1).map((x, j) => `${paren(fmtNum(x, lang))}${vars[j]}`).join(' + ')} = ${fmtNum(r[r.length - 1], lang)}`).join('\n'));
    const res = gaussEliminate(rows, vars, S, lang);
    if (res.status !== 'unique') {
      const answer = S.t(res.status === 'none' ? 'systemNoSolution' : 'systemInfinite');
      return ok({ type: 'matrix', answer, steps: S, explanation: answer, extras: { op, status: res.status } });
    }
    const answer = vars.map((v, i) => `${v} = ${fmtNum(res.solution[i], lang)}`).join(listSep(lang));
    return ok({ type: 'matrix', answer, steps: S, explanation: answer, extras: { op, status: 'unique', solution: res.solution.map(toNum), solutionExact: res.solution.map((x) => x.toFraction()) } });
  }
  return fail('Unknown matrix operation');
};

export { isNeg };
