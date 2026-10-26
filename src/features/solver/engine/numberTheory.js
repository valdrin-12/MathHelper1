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

// ---------------------------------------------------------------------------------------------
// Is n prime? (trial division up to √n)
// ---------------------------------------------------------------------------------------------

const PRIME_Q = [
  /^(?:is\s+)?(\d+)\s+(?:a\s+)?prime(?:\s+number)?$/i,
  /^is\s+(\d+)\s+(?:a\s+)?prime(?:\s+number)?$/i,
  /^isprime\s*\(\s*(\d+)\s*\)$/i,
  /^a\s+(?:është|eshte)\s+(?:numri\s+)?(\d+)\s+(?:numër|numer)?\s*(?:i\s+)?(?:thjeshtë|thjeshte|prim)$/i,
  /^(?:numri\s+)?(\d+)\s+(?:a\s+)?(?:është|eshte)\s+(?:numër|numer)?\s*(?:i\s+)?(?:thjeshtë|thjeshte|prim)$/i,
  /^ist\s+(\d+)\s+(?:eine\s+)?primzahl$/i,
];

export const detectPrimeQuestion = (text) => {
  for (const re of PRIME_Q) {
    const m = text.match(re);
    if (m) return { n: Number(m[1]) };
  }
  return null;
};

export const isPrimeTool = ({ n }, lang) => {
  if (!validInt(n) || n < 2) return fail('Enter a whole number from 2 to 10¹²');
  const S = new Steps(lang);
  const root = Math.floor(Math.sqrt(n));
  S.addT('primeCheckRule', { n }, `√${n} ≈ ${Math.sqrt(n).toFixed(2).replace('.', lang === 'en' ? '.' : ',')}`);
  let divisor = null;
  for (let p = 2; p <= root; p += p === 2 ? 1 : 2) { if (n % p === 0) { divisor = p; break; } }
  if (divisor === null) {
    const tried = [];
    for (let p = 2; p <= root && tried.length < 12; p++) if (primeFactorize(p).length === 1 && primeFactorize(p)[0].exp === 1) tried.push(p);
    if (tried.length) S.addT('primeNoDivisor', null, `${n} : ${tried.join(', ')}${root > tried[tried.length - 1] && tried.length === 12 ? ', …' : ''}`);
    S.addT('isPrime', { n });
    return ok({ type: 'isPrime', answer: S.t('answerIsPrime', { n }), steps: S, explanation: S.t('isPrime', { n }), extras: { n, isPrime: true } });
  }
  S.addT('primeFoundDivisor', { n, d: divisor }, `${n} = ${divisor} · ${n / divisor}`);
  const text = factorsText(primeFactorize(n));
  if (text !== `${divisor} · ${n / divisor}`) S.addT('writeAsProduct', null, `${n} = ${text}`);
  return ok({ type: 'isPrime', answer: S.t('answerNotPrime', { n, text }), steps: S, explanation: S.t('answerNotPrime', { n, text }), extras: { n, isPrime: false } });
};

// ---------------------------------------------------------------------------------------------
// Combinations C(n, k) and variations / permutations V(n, k) = P(n, k)
// ---------------------------------------------------------------------------------------------

const COMB_RES = [
  { kind: 'C', re: /^(\d+)\s*(?:choose|c|ncr|mbi)\s*(\d+)$/i },
  { kind: 'C', re: /^(?:c|ncr|binom|binomial|komb\w*|kombination\w*)\s*\(\s*(\d+)\s*[,;]\s*(\d+)\s*\)$/i },
  { kind: 'V', re: /^(\d+)\s*(?:p|npr)\s*(\d+)$/i },
  { kind: 'V', re: /^(?:p|npr|v|a|var\w*|perm\w*)\s*\(\s*(\d+)\s*[,;]\s*(\d+)\s*\)$/i },
];

export const detectCombinatorics = (text) => {
  const t = text.replace(/\s+/g, ' ').trim();
  for (const { kind, re } of COMB_RES) {
    const m = t.match(re);
    if (m) return { kind, n: Number(m[1]), k: Number(m[2]) };
  }
  return null;
};

const fallingProduct = (n, k) => { let r = 1n; for (let i = 0; i < k; i++) r *= BigInt(n - i); return r; };
const factorialBig = (k) => fallingProduct(k, k);

export const combinatoricsTool = ({ kind, n, k }, lang) => {
  if (!Number.isInteger(n) || !Number.isInteger(k) || n < 0 || k < 0 || n > 1000) return fail('Enter whole numbers 0 ≤ k ≤ n ≤ 1000');
  if (k > n) return fail('k must not be greater than n');
  const S = new Steps(lang);
  const name = kind === 'C' ? `C(${n}${listSep(lang)}${k})` : `V(${n}${listSep(lang)}${k})`;
  const factors = [];
  for (let i = 0; i < k; i++) factors.push(n - i);
  const shown = factors.length <= 8 ? factors.join(' · ') : `${factors.slice(0, 3).join(' · ')} · … · ${factors[factors.length - 1]}`;
  const num = fallingProduct(n, k);
  if (kind === 'C') {
    S.addT('combFormula', null, `C(n${listSep(lang)}k) = n! / (k! · (n − k)!)`);
    const den = factorialBig(k);
    const result = num / den;
    S.addT('combSubstitute', null, `${name} = ${n}! / (${k}! · ${n - k}!) = (${k ? shown : '1'}) / ${k}!`);
    S.addT('calculate', null, `${name} = ${num} / ${den} = ${result}`);
    return ok({ type: 'combinatorics', answer: `${name} = ${result}`, steps: S, explanation: S.t('combExplanation', { n, k, r: String(result) }), extras: { kind, n, k, result: String(result) } });
  }
  S.addT('varFormula', null, `V(n${listSep(lang)}k) = n! / (n − k)! = n · (n − 1) · … · (n − k + 1)`);
  S.addT('calculate', null, `${name} = ${k ? shown : '1'} = ${num}`);
  return ok({ type: 'combinatorics', answer: `${name} = ${num}`, steps: S, explanation: S.t('varExplanation', { n, k, r: String(num) }), extras: { kind, n, k, result: String(num) } });
};
