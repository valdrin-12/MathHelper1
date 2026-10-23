// Prime factorisation, gcd and lcm via prime factors (school method).
import { Steps, ok, fail } from './steps';
import { sup, listSep } from './format';

const MAX_N = 1e12;

export const primeFactorize = (n) => {
  const out = [];
  let m = n;
  for (let p = 2; p * p <= m; p += p === 2 ? 1 : 2) {
    let e = 0;
    while (m % p === 0) { m /= p; e++; }
    if (e) out.push({ prime: p, exp: e });
  }
  if (m > 1) out.push({ prime: m, exp: 1 });
  return out;
};

export const factorsText = (factors) => (factors.length ? factors.map((f) => (f.exp > 1 ? `${f.prime}${sup(f.exp)}` : `${f.prime}`)).join(' · ') : '1');

const validInt = (x) => Number.isInteger(x) && x >= 1 && x <= MAX_N;

export const primeFactorsTool = (input, lang) => {
  const n = Number(String(input.n).replace(/\s/g, ''));
  if (!validInt(n) || n < 2) return fail('Enter a whole number from 2 to 10¹²');
  const S = new Steps(lang);
  S.addT('primeFactorizeGiven', { n });
  const factors = primeFactorize(n);
  if (factors.length === 1 && factors[0].exp === 1) {
    S.addT('isPrime', { n });
    return ok({ type: 'primeFactors', answer: `${n} = ${n}`, steps: S, explanation: S.t('isPrime', { n }), extras: { n, factors, isPrime: true, factorization: `${n}` } });
  }
  // repeated division, one division per step (summarised when long)
  let m = n;
  const divisions = [];
  factors.forEach(({ prime, exp }) => { for (let i = 0; i < exp; i++) { divisions.push(`${m} : ${prime} = ${m / prime}`); m /= prime; } });
  if (divisions.length <= 10) divisions.forEach((d, i) => S.add(S.t(i === 0 ? 'divideBySmallestPrime' : 'continueDividing'), d));
  else S.add(S.t('repeatedDivision'), divisions.join('\n'));
  const text = factorsText(factors);
  S.addT('writeAsProduct', null, `${n} = ${text}`);
  return ok({
    type: 'primeFactors',
    answer: `${n} = ${text}`,
    steps: S,
    explanation: S.t('primeExplanation', { n, text }),
    extras: { n, factors, isPrime: false, factorization: factors.map((f) => (f.exp > 1 ? `${f.prime}^${f.exp}` : `${f.prime}`)).join('*') },
  });
};

const gcd2 = (a, b) => { let x = a; let y = b; while (y) [x, y] = [y, x % y]; return x; };

/** input: { numbers: number[] }, opts.want: 'gcd' | 'lcm' | 'both' */
export const gcdLcmTool = (input, lang, want = 'both') => {
  const nums = (input.numbers || []).map((x) => Number(String(x).replace(/\s/g, '')));
  if (nums.length < 2 || nums.length > 10 || !nums.every(validInt)) return fail('Enter 2 to 10 whole numbers ≥ 1');
  const S = new Steps(lang);
  const sep = listSep(lang);
  S.addT('gcdLcmGiven', { list: nums.join(sep) });
  const fs = nums.map(primeFactorize);
  S.addT('factorEach', null, nums.map((n, i) => `${n} = ${factorsText(fs[i])}`).join('\n'));
  const primes = [...new Set(fs.flatMap((f) => f.map((x) => x.prime)))].sort((a, b) => a - b);
  const expOf = (f, p) => (f.find((x) => x.prime === p) || { exp: 0 }).exp;
  const gcdF = primes.map((p) => ({ prime: p, exp: Math.min(...fs.map((f) => expOf(f, p))) })).filter((x) => x.exp > 0);
  const lcmF = primes.map((p) => ({ prime: p, exp: Math.max(...fs.map((f) => expOf(f, p))) }));
  const gcd = nums.reduce(gcd2);
  const lcm = nums.reduce((a, b) => (a / gcd2(a, b)) * b);
  const name = S.t('gcdName');
  const lname = S.t('lcmName');
  if (want !== 'lcm') S.add(S.t('gcdRule'), `${name}(${nums.join(sep)}) = ${gcdF.length ? `${factorsText(gcdF)} = ` : ''}${gcd}`);
  if (want !== 'gcd') S.add(S.t('lcmRule'), `${lname}(${nums.join(sep)}) = ${factorsText(lcmF)} = ${lcm}`);
  if (nums.length === 2 && want === 'both') S.addT('gcdLcmCheck', null, `${gcd} · ${lcm} = ${gcd * lcm} = ${nums[0]} · ${nums[1]} ✓`);
  const parts = [];
  if (want !== 'lcm') parts.push(`${name}(${nums.join(sep)}) = ${gcd}`);
  if (want !== 'gcd') parts.push(`${lname}(${nums.join(sep)}) = ${lcm}`);
  const answer = parts.join(sep);
  return ok({
    type: 'gcdlcm',
    answer,
    steps: S,
    explanation: answer,
    extras: { numbers: nums, gcd, lcm, factorizations: nums.map((n, i) => ({ n, factors: fs[i] })) },
  });
};
