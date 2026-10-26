// Percentages: p% of b, percentage change from a to b, a is what percent of b.
import { math, readNumber } from './parse';
import { Steps, ok, fail } from './steps';
import { fmtNum, fmtDec, isFrac, isShortDecimal, toNum, paren } from './format';

const val = (f, lang) => (f.d === 1n || isShortDecimal(f, 4) ? fmtDec(f, lang, 6) : `≈ ${fmtDec(f, lang, 2)}`);
const eqv = (f, lang) => { const s = val(f, lang); return s.startsWith('≈') ? ` ${s}` : ` = ${s}`; };

export const percentTool = (input, lang) => {
  const kind = input.kind || 'of';
  let a;
  let b;
  try {
    a = readNumber(input.a);
    b = readNumber(input.b);
  } catch {
    return fail('Invalid numbers');
  }
  if (!isFrac(a) || !isFrac(b)) return fail('Invalid numbers');
  const S = new Steps(lang);
  const n = (x) => fmtNum(x, lang);
  const d = (x) => fmtDec(x, lang, 6);
  const h = math.fraction(100);

  if (kind === 'of') {
    // a % of b
    const r = a.mul(b).div(h);
    S.addT('percentOfGiven', { p: d(a), b: d(b) });
    S.addT('percentAsFraction', null, `${d(a)}% = ${d(a)}/100`);
    S.addT('percentMultiply', null, `${d(a)}/100 · ${paren(d(b))} = ${d(a.mul(b))}/100${eqv(r, lang)}`);
    const answer = val(r, lang);
    return ok({ type: 'percent', answer, steps: S, explanation: S.t('percentOfExplanation', { p: d(a), b: d(b), r: answer }), extras: { kind, value: toNum(r) } });
  }
  if (kind === 'whatPercent') {
    // a is what percent of b
    if (b.n === 0n) return fail('Division by zero');
    const r = a.div(b).mul(h);
    S.addT('whatPercentGiven', { a: d(a), b: d(b) });
    S.addT('whatPercentFormula', null, `p = ${d(a)}/${paren(d(b))} · 100%`);
    S.addT('calculate', null, `p = ${n(a.div(b))} · 100%${eqv(r, lang)}%`);
    const answer = `${val(r, lang)}%`;
    return ok({ type: 'percent', answer, steps: S, explanation: S.t('whatPercentExplanation', { a: d(a), b: d(b), r: answer }), extras: { kind, value: toNum(r) } });
  }
  if (kind === 'change') {
    // from a to b
    if (a.n === 0n) return fail('Initial value must not be zero');
    const diff = b.sub(a);
    const r = diff.div(a).mul(h);
    S.addT('changeGiven', { a: d(a), b: d(b) });
    S.addT('changeDifference', null, `${d(b)} − ${paren(d(a))} = ${d(diff)}`);
    S.addT('changeFormula', null, `${d(diff)}/${paren(d(a))} · 100%${eqv(r, lang)}%`);
    const up = diff.s > 0n && diff.n !== 0n;
    const word = diff.n === 0n ? S.t('noChange') : S.t(up ? 'increase' : 'decrease');
    const abs = r.abs();
    const answer = diff.n === 0n ? '0%' : `${up ? '+' : '−'}${val(abs, lang)}%`;
    S.add(word, answer);
    return ok({ type: 'percent', answer, steps: S, explanation: S.t('changeExplanation', { a: d(a), b: d(b), r: answer, word }), extras: { kind, value: toNum(r) } });
  }
  return fail('Unknown percent kind');
};

/** Detect percent questions in free text. Returns tool input or null. */
export const detectPercent = (text) => {
  const s = text.replace(/[−–]/g, '-').replace(/(\d),(\d)/g, '$1.$2').trim();
  const N = '(-?\\d+(?:\\.\\d+)?)';
  let m = s.match(new RegExp(`^${N}\\s*%\\s*(?:of|e|nga|von|prej)\\s*${N}\\s*[?=]?\\s*$`, 'i'));
  if (m) return { kind: 'of', a: m[1], b: m[2] };
  m = s.match(new RegExp(`^(?:what|which)\\s+percent(?:age)?\\s+of\\s+${N}\\s+is\\s+${N}\\s*\\??$`, 'i'));
  if (m) return { kind: 'whatPercent', a: m[2], b: m[1] };
  m = s.match(new RegExp(`^${N}\\s+is\\s+what\\s+percent(?:age)?\\s+of\\s+${N}\\s*\\??$`, 'i'));
  if (m) return { kind: 'whatPercent', a: m[1], b: m[2] };
  m = s.match(new RegExp(`^sa\\s+(?:për\\s*qind|përqind)\\s+(?:është|eshte|janë|jane)\\s+${N}\\s+(?:nga|prej|e)\\s+${N}\\s*\\??$`, 'i'));
  if (m) return { kind: 'whatPercent', a: m[1], b: m[2] };
  m = s.match(new RegExp(`^${N}\\s+(?:nga|prej)\\s+${N}\\s+(?:është|eshte|janë|jane)\\s+sa\\s+(?:për\\s*qind|përqind)\\s*\\??$`, 'i'));
  if (m) return { kind: 'whatPercent', a: m[1], b: m[2] };
  m = s.match(new RegExp(`^wie\\s*viel(?:e)?\\s+prozent\\s+(?:sind|ist)\\s+${N}\\s+von\\s+${N}\\s*\\??$`, 'i'));
  if (m) return { kind: 'whatPercent', a: m[1], b: m[2] };
  m = s.match(new RegExp(`^(?:percent(?:age)?\\s+change|ndryshimi\\s+(?:në\\s+)?përqind(?:je)?|prozentuale\\s+änderung|änderung\\s+in\\s+prozent)\\s+(?:from|nga|prej|von)\\s+${N}\\s+(?:to|në|ne|deri\\s+në|auf|zu|nach)\\s+${N}\\s*\\??$`, 'i'));
  if (m) return { kind: 'change', a: m[1], b: m[2] };
  return null;
};
