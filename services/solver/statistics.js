// Descriptive statistics: mean, median, mode, range, variance, standard deviation, quartiles.
import { math, readNumber } from './parse';
import { Steps, ok, fail } from './steps';
import { fmtDec, fmtFloat, isFrac, toNum, listSep, isShortDecimal, paren } from './format';

const frac = (a, b = 1) => math.fraction(a, b);

/** Exact value if short decimal, otherwise ≈ rounded. */
const show = (x, lang) => {
  if (isFrac(x)) return x.d === 1n || isShortDecimal(x, 4) ? fmtDec(x, lang, 6) : `≈ ${fmtDec(x, lang, 4)}`;
  return Number.isInteger(Number(x.toFixed(8))) ? fmtFloat(Number(x.toFixed(8)), lang) : `≈ ${fmtDec(x, lang, 4)}`;
};
const eq = (s) => (s.startsWith('≈') ? ` ${s}` : ` = ${s}`);

const medianOf = (arr) => {
  const n = arr.length;
  if (!n) return null;
  const mid = Math.floor(n / 2);
  return n % 2 ? arr[mid] : arr[mid - 1].add(arr[mid]).div(2);
};

/** Parse "2, 4, 4; 5" / "2 4 4" lists (decimal commas when ';' is the separator). */
export const parseDataList = (text) => {
  const s = String(text).trim();
  let parts;
  if (s.includes(';')) parts = s.split(';').map((x) => x.trim().replace(',', '.'));
  else parts = s.split(/[,\s]+/);
  return parts.filter(Boolean).map((x) => readNumber(x.replace(/[−–]/g, '-')));
};

export const statisticsTool = (input, lang) => {
  let data;
  try {
    data = (Array.isArray(input.data) ? input.data : parseDataList(input.data)).map((x) => readNumber(x));
  } catch {
    return fail('Data must be numbers');
  }
  if (data.length < 1 || data.length > 1000 || !data.every(isFrac)) return fail('Enter between 1 and 1000 numbers');
  const sample = !!input.sample;
  const n = data.length;
  if (sample && n < 2) return fail('Sample variance needs at least 2 values');
  const S = new Steps(lang);
  const sep = listSep(lang);
  const D = (x) => fmtDec(x, lang, 6);
  const sorted = data.slice().sort((a, b) => a.compare(b));
  const listText = (arr) => (arr.length > 30 ? `${arr.slice(0, 30).map(D).join(sep)} …` : arr.map(D).join(sep));

  S.addT('sortData', { n }, listText(sorted));
  const sum = data.reduce((a, b) => a.add(b), frac(0));
  const mean = sum.div(n);
  S.add(S.t('meanStep'), `x̄ = ${D(sum)}/${n}${eq(show(mean, lang))}`, 'x̄ = (x₁ + x₂ + … + xₙ)/n');

  const median = medianOf(sorted);
  const mid = Math.floor(n / 2);
  S.add(S.t(n % 2 ? 'medianOdd' : 'medianEven', { pos: mid + 1, a: mid, b: mid + 1 }),
    n % 2 ? `Me = ${D(median)}` : `Me = (${D(sorted[mid - 1])} + ${D(sorted[mid])})/2${eq(show(median, lang))}`);

  const counts = new Map();
  sorted.forEach((x) => { const k = x.toFraction(); counts.set(k, (counts.get(k) || 0) + 1); });
  const maxC = Math.max(...counts.values());
  const modes = maxC > 1 ? [...counts.entries()].filter(([, c]) => c === maxC).map(([k]) => frac(k)) : [];
  S.add(S.t('modeStep'), modes.length ? `Mo = ${modes.map(D).join(sep)} (${S.t('timesCount', { c: maxC })})` : S.t('noMode'));

  const range = sorted[n - 1].sub(sorted[0]);
  S.add(S.t('rangeStep'), `R = ${D(sorted[n - 1])} − ${paren(D(sorted[0]))} = ${D(range)}`);

  const sq = data.reduce((acc, x) => acc.add(x.sub(mean).mul(x.sub(mean))), frac(0));
  const devText = n <= 10 ? data.map((x) => `(${D(x)} − ${paren(show(mean, lang).replace('≈ ', ''))})²`).join(' + ') : `Σ(xᵢ − x̄)²`;
  S.add(S.t('squaredDeviations'), `${devText}${eq(show(sq, lang))}`);
  const variance = sq.div(sample ? n - 1 : n);
  const sd = Math.sqrt(toNum(variance));
  S.add(S.t(sample ? 'sampleVariance' : 'populationVariance'), `${sample ? 's²' : 'σ²'} = ${show(sq, lang).replace('≈ ', '')}/${sample ? n - 1 : n}${eq(show(variance, lang))}`,
    sample ? 's² = Σ(xᵢ − x̄)²/(n − 1)' : 'σ² = Σ(xᵢ − x̄)²/n');
  S.add(S.t('stdDevStep'), `${sample ? 's' : 'σ'} = √${paren(show(variance, lang).replace('≈ ', ''))}${eq(show(sd, lang))}`);

  let q1 = null;
  let q3 = null;
  if (n >= 2) {
    const lower = sorted.slice(0, mid);
    const upper = sorted.slice(n % 2 ? mid + 1 : mid);
    q1 = medianOf(lower);
    q3 = medianOf(upper);
    S.add(S.t('quartilesStep'), `Q₁ = ${show(q1, lang).replace('≈ ', '')}${sep}Q₂ = ${show(median, lang).replace('≈ ', '')}${sep}Q₃ = ${show(q3, lang).replace('≈ ', '')}\nIQR = Q₃ − Q₁ = ${show(q3.sub(q1), lang).replace('≈ ', '')}`, S.t('quartileMethod'));
  }

  const r = (x) => (x === null ? null : Number(toNum(x).toPrecision(12)));
  const stats = {
    n, sum: r(sum), mean: r(mean), median: r(median), mode: modes.map(r), range: r(range), min: r(sorted[0]), max: r(sorted[n - 1]),
    variance: r(variance), stdDev: Number(sd.toPrecision(12)), q1: r(q1), q3: r(q3), iqr: q1 ? r(q3.sub(q1)) : null, sample,
  };
  const table = [
    { key: 'n', label: 'n', value: String(n) },
    { key: 'mean', label: S.t('labelMean'), value: show(mean, lang) },
    { key: 'median', label: S.t('labelMedian'), value: show(median, lang) },
    { key: 'mode', label: S.t('labelMode'), value: modes.length ? modes.map(D).join(sep) : '—' },
    { key: 'range', label: S.t('labelRange'), value: D(range) },
    { key: 'variance', label: S.t('labelVariance'), value: show(variance, lang) },
    { key: 'stdDev', label: S.t('labelStdDev'), value: show(sd, lang) },
    { key: 'q1', label: 'Q₁', value: q1 ? show(q1, lang) : '—' },
    { key: 'q3', label: 'Q₃', value: q3 ? show(q3, lang) : '—' },
  ];
  const answer = `x̄ = ${show(mean, lang).replace('≈ ', '≈')}${sep}Me = ${show(median, lang).replace('≈ ', '≈')}${sep}${sample ? 's' : 'σ'} = ${show(sd, lang).replace('≈ ', '≈')}`;
  return ok({ type: 'statistics', answer, steps: S, explanation: table.map((x) => `${x.label}: ${x.value}`).join('\n'), extras: { stats, table } });
};

