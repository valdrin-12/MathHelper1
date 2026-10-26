// Function analysis from text: "f(x) = x² − 4x + 3", "y = 2x + 1", or a bare expression in one variable.
// Linear and quadratic functions are analysed exactly; anything else numerically by the graph module.
import { math } from './parse';
import { Poly } from './poly';
import { Steps, ok, fail } from './steps';
import { fmtNum, isNeg, isZero, listSep, pretty } from './format';
import { quadraticSteps } from './quadratic';
import { analyzeFunction } from '../../graph/functionAnalysis';
import { formatNumber, formatPoint } from '../../graph/graphService';

/** "f(x) = …" / "g(t) = …" / "y = …" (optionally followed by ", find …"). Returns { name, v, expr } or null. */
export const detectFunctionDefinition = (text) => {
  const s = String(text).replace(/\s*[,;.]\s*(?:find|gjeni|gjej|analizo(?:ni)?|analyse|analyze|bestimme|bestimmen\s+sie|untersuche)\b.*$/i, '');
  let m = s.match(/^\s*([a-z])\s*\(\s*([a-z])\s*\)\s*=\s*(.+)$/i);
  if (m) return { name: m[1], v: m[2], expr: m[3] };
  m = s.match(/^\s*y\s*=\s*(.+)$/i);
  if (m && /x/.test(m[1]) && !/[=<>]/.test(m[1])) return { name: 'y', v: 'x', expr: m[1] };
  return null;
};

const label = (name, v) => (name === 'y' ? 'y' : `${name}(${v})`);
const intervalStr = (from, to, fromClosed, toClosed, lang) => {
  const sep = listSep(lang);
  const a = from === null ? '−∞' : fmtNum(from, lang);
  const b = to === null ? '+∞' : fmtNum(to, lang);
  return `${from !== null && fromClosed ? '[' : '('}${a}${sep}${b}${to !== null && toClosed ? ']' : ')'}`;
};

const linearAnalysis = (P, name, v, shown, lang) => {
  const S = new Steps(lang);
  const sep = listSep(lang);
  const k = P.coef(1);
  const n = P.coef(0);
  S.addT('givenFunction', null, `${label(name, v)} = ${shown}`);
  S.addT('fnSlope', null, `k = ${fmtNum(k, lang)}${sep}n = ${fmtNum(n, lang)}`);
  S.addT('fnYIntercept', { f: name === 'y' ? 'y' : name }, `${name === 'y' ? 'y' : `${name}(0)`} = ${fmtNum(n, lang)} → (0${sep}${fmtNum(n, lang)})`);
  const zero = n.neg().div(k);
  S.addT('fnZeros', { fx: label(name, v) }, `${shown} = 0 → ${v} = −n/k = ${fmtNum(zero, lang)}`);
  S.addT('fnMonotonic', null, S.t(isNeg(k) ? 'fnDecreasingEverywhere' : 'fnIncreasingEverywhere', { k: fmtNum(k, lang) }));
  const answer = `${S.t('fnAnswerZeros')}: ${v} = ${fmtNum(zero, lang)}${sep}k = ${fmtNum(k, lang)}${sep}${S.t('fnAnswerYIntercept')}: (0${sep}${fmtNum(n, lang)})`;
  return ok({ type: 'function', answer, steps: S, explanation: S.t('fnExplanation', { f: label(name, v), expr: shown }), extras: { kind: 'linear', variable: v } });
};

const quadraticAnalysis = (P, name, v, shown, lang) => {
  const S = new Steps(lang);
  const sep = listSep(lang);
  const [c, b, a] = [P.coef(0), P.coef(1), P.coef(2)];
  const f = name === 'y' ? 'y' : name;
  S.addT('givenFunction', null, `${label(name, v)} = ${shown}`);
  S.addT('fnZeros', { fx: label(name, v) }, `${shown} = 0`);
  const q = quadraticSteps(S, a, b, c, v, lang, { verify: false, vertex: false, factored: true });
  const vx = b.neg().div(a.mul(2));
  const vy = c.sub(b.mul(b).div(a.mul(4)));
  S.addT('vertex', null, `${v}ᵥ = −b/(2a) = ${fmtNum(vx, lang)}\nyᵥ = ${f === 'y' ? 'y' : `${f}`}(${fmtNum(vx, lang)}) = ${fmtNum(vy, lang)}\nV(${fmtNum(vx, lang)}${sep}${fmtNum(vy, lang)})`,
    isNeg(a) ? 'opensDown' : 'opensUp');
  S.addT('fnYIntercept', { f }, `${f === 'y' ? 'y' : `${f}(0)`} = ${fmtNum(c, lang)} → (0${sep}${fmtNum(c, lang)})`);
  const up = !isNeg(a);
  S.addT('fnRange', null, up ? `[${fmtNum(vy, lang)}${sep}+∞)` : `(−∞${sep}${fmtNum(vy, lang)}]`);
  const dec = up ? intervalStr(null, vx, false, true, lang) : intervalStr(vx, null, true, false, lang);
  const inc = up ? intervalStr(vx, null, true, false, lang) : intervalStr(null, vx, false, true, lang);
  S.addT('fnMonotonic', null, `${S.t('fnDecreasing')}: ${dec}\n${S.t('fnIncreasing')}: ${inc}`);

  let zeros;
  if (q.kind === 'none') zeros = S.t('fnNone');
  else if (q.kind === 'one') zeros = `${v} = ${fmtNum(q.P, lang)}`;
  else if (q.rational) zeros = q.roots.map((r, i) => `${v}${['₁', '₂'][i]} = ${fmtNum(r.frac, lang)}`).join(sep);
  else if (q.exact) zeros = `${v}₁,₂ = ${q.exact.pm}`;
  else zeros = q.roots.map((r, i) => `${v}${['₁', '₂'][i]} ≈ ${formatNumber(r.value, lang)}`).join(sep);
  const answer = `${S.t('fnAnswerZeros')}: ${zeros}${sep}${S.t('fnAnswerVertex')}: V(${fmtNum(vx, lang)}${sep}${fmtNum(vy, lang)})`;
  return ok({ type: 'function', answer, steps: S, explanation: S.t('fnExplanation', { f: label(name, v), expr: shown }), extras: { kind: 'quadratic', variable: v, vertex: { x: vx.valueOf(), y: vy.valueOf() } } });
};

/** Any other function: numeric analysis (domain, zeros, y-intercept, extrema, asymptotes). */
const numericAnalysis = (exprText, node, name, v, shown, lang) => {
  // the graph module works in x
  const xExpr = v === 'x' ? exprText : node.transform((n) => (n.isSymbolNode && n.name === v ? new math.SymbolNode('x') : n)).toString();
  const res = analyzeFunction(xExpr);
  if (!res || !res.ok) return fail('Function analysis failed');
  const S = new Steps(lang);
  const sep = listSep(lang);
  const f = name === 'y' ? 'y' : name;
  const pi = !!res.periodic;
  const num = (x) => formatNumber(x, lang, { pi });
  const pt = (p) => formatPoint(p, lang, { pi });
  S.addT('givenFunction', null, `${label(name, v)} = ${shown}`);
  const dom = res.domain || {};
  const end = (x, left) => (Number.isFinite(x) ? num(x) : left ? '−∞' : '+∞');
  const ivText = (iv) => `${iv.fromClosed && Number.isFinite(iv.from) ? '[' : '('}${end(iv.from, true)}${sep}${end(iv.to, false)}${iv.toClosed && Number.isFinite(iv.to) ? ']' : ')'}`;
  // points left out of the domain: removable gaps and poles (1/(x − 2) → 2)
  const holes = [...(dom.excluded || []), ...(res.verticalAsymptotes || [])]
    .filter((x, i, all) => all.findIndex((y) => Math.abs(y - x) < 1e-9) === i)
    .sort((x, y) => x - y);
  const ivs = dom.intervals || [];
  const unbounded = ivs.length > 0 && !Number.isFinite(ivs[0].from) && !Number.isFinite(ivs[ivs.length - 1].to);
  let domainText;
  if (unbounded && holes.length && ivs.length <= holes.length + 1) domainText = `${v} ∈ ℝ \\ {${holes.map(num).join(sep)}}`;
  else if (dom.allReal || (unbounded && ivs.length === 1)) domainText = `${v} ∈ ℝ`;
  else domainText = `${v} ∈ ${ivs.map(ivText).join(' ∪ ') || '∅'}`;
  if (res.periodic) S.addT('fnPeriodicWindow', null, `[${num(res.window.xMin)}${sep}${num(res.window.xMax)}]`);
  S.addT('fnDomain', null, domainText);
  const roots = res.roots || [];
  S.addT('fnZeros', { fx: label(name, v) }, roots.length ? roots.map((r) => `${v} = ${num(r.x)}`).join('\n') : S.t('fnNoZeros'));
  if (res.yIntercept) S.addT('fnYIntercept', { f }, pt(res.yIntercept));
  const ext = [...(res.maxima || []).map((p) => `${S.t('fnMax')}: ${pt(p)}`), ...(res.minima || []).map((p) => `${S.t('fnMin')}: ${pt(p)}`)];
  if (ext.length) S.addT('fnExtrema', null, ext.join('\n'));
  const asym = [];
  (res.verticalAsymptotes || []).forEach((x) => asym.push(`${S.t('fnVertical')}: ${v} = ${num(x)}`));
  const h = res.horizontalAsymptotes || {};
  const hs = [...new Set([h.left, h.right].filter((y) => typeof y === 'number' && Number.isFinite(y)))];
  hs.forEach((y) => asym.push(`${S.t('fnHorizontal')}: y = ${num(y)}`));
  if (asym.length) S.addT('fnAsymptotes', null, asym.join('\n'));
  S.addT('fnNumericNote');
  const parts = [`${S.t('fnAnswerZeros')}: ${roots.length ? roots.map((r) => `${v} = ${num(r.x)}`).join(sep) : S.t('fnNone')}`];
  if (res.yIntercept) parts.push(`${S.t('fnAnswerYIntercept')}: ${pt(res.yIntercept)}`);
  return ok({ type: 'function', answer: parts.join(sep), steps: S, explanation: S.t('fnExplanation', { f: label(name, v), expr: shown }), extras: { kind: 'numeric', variable: v } });
};

/** Analyse "name(v) = expr". exprText is already normalised to mathjs syntax. */
export const functionTool = ({ name = 'f', v = 'x', expr }, lang) => {
  let node;
  try { node = math.parse(expr); } catch { return fail('Could not parse function'); }
  const shown = pretty(node, lang);
  const P = Poly.tryFromNode(node, v);
  if (P && P.degree === 1 && !isZero(P.coef(1))) return linearAnalysis(P, name, v, shown, lang);
  if (P && P.degree === 2) return quadraticAnalysis(P, name, v, shown, lang);
  if (P && P.degree < 1) return fail('Constant function');
  return numericAnalysis(expr, node, name, v, shown, lang);
};
