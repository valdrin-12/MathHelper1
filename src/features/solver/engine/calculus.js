// Derivatives (rule-by-rule explanation by walking the expression tree) and integrals
// (polynomials, x^n, 1/x, sin/cos/e^x with linear inner functions; definite via F(b) − F(a),
// Simpson's rule as an approximate fallback).
import { math, freeVariables, hasVariable, unwrap, normalizeCore } from './parse';
import { Poly } from './poly';
import { Steps, ok, fail } from './steps';
import { pretty, fmtNum, fmtFloat, fmtDec, isFrac, isNeg, toNum, F, sub, sup } from './format';

const MAX_STEPS = 18;

const simp = (node) => {
  try { return math.simplify(node); } catch { return node; }
};

/** Polynomial-looking output when possible, otherwise the simplified tree. */
export const show = (node, v, lang) => {
  const P = Poly.tryFromNode(node, v);
  if (P) return P.toString(lang);
  return pretty(simp(node), lang);
};

const prime = (inner) => `(${inner})′`;
const derivOf = (node, v) => simp(math.derivative(node, v));

/** Collect top-level signed terms of a sum. */
const sumTerms = (node, sign = 1, out = []) => {
  const n = unwrap(node);
  if (n.isOperatorNode && n.fn === 'add') { sumTerms(n.args[0], sign, out); sumTerms(n.args[1], sign, out); return out; }
  if (n.isOperatorNode && n.fn === 'subtract') { sumTerms(n.args[0], sign, out); sumTerms(n.args[1], -sign, out); return out; }
  out.push({ sign, node: n });
  return out;
};

const FN_RULES = {
  sin: { key: 'derivSin', formula: '(sin x)′ = cos x' },
  cos: { key: 'derivCos', formula: '(cos x)′ = −sin x' },
  tan: { key: 'derivTan', formula: '(tan x)′ = 1/cos²x' },
  cot: { key: 'derivCot', formula: '(cot x)′ = −1/sin²x' },
  exp: { key: 'derivExp', formula: '(eˣ)′ = eˣ' },
  log: { key: 'derivLn', formula: '(ln x)′ = 1/x' },
  log10: { key: 'derivLog', formula: '(log x)′ = 1/(x·ln 10)' },
  sqrt: { key: 'derivSqrt', formula: '(√x)′ = 1/(2√x)' },
  asin: { key: 'derivAsin', formula: '(arcsin x)′ = 1/√(1 − x²)' },
  acos: { key: 'derivAcos', formula: '(arccos x)′ = −1/√(1 − x²)' },
  atan: { key: 'derivAtan', formula: '(arctan x)′ = 1/(1 + x²)' },
};

const isVar = (node, v) => { const n = unwrap(node); return n.isSymbolNode && n.name === v; };
const isConstFor = (node, v) => !hasVariable(node, v);

/** Walk the tree and push one step per rule applied. */
const derivSteps = (node0, v, S, lang) => {
  if (S.length >= MAX_STEPS) return;
  const node = unwrap(node0);
  const p = (n) => show(n, v, lang);
  const d = (n) => show(derivOf(n, v), v, lang);
  const fx = (n) => prime(pretty(n, lang));

  if (isConstFor(node, v)) { S.add(S.t('constantRule'), `${fx(node)} = 0`, '(c)′ = 0'); return; }
  if (node.isSymbolNode) { S.add(S.t('powerRule'), `${prime(v)} = 1`, `(${v})′ = 1`); return; }

  if (node.isOperatorNode) {
    const [a, b] = node.args;
    if (node.fn === 'add' || node.fn === 'subtract') {
      const terms = sumTerms(node);
      const parts = terms.map((t, i) => `${i === 0 ? (t.sign < 0 ? '−' : '') : t.sign < 0 ? ' − ' : ' + '}${fx(t.node)}`).join('');
      S.add(S.t('sumRule'), `${fx(node)} = ${parts}`, '(f ± g)′ = f′ ± g′');
      terms.forEach((t) => derivSteps(t.node, v, S, lang));
      return;
    }
    if (node.fn === 'unaryMinus' || node.fn === 'unaryPlus') { derivSteps(a, v, S, lang); return; }
    if (node.fn === 'multiply') {
      const [c, f] = isConstFor(a, v) ? [a, b] : isConstFor(b, v) ? [b, a] : [null, null];
      if (c) {
        const fu = unwrap(f);
        const simplePower = isVar(fu, v) || (fu.isOperatorNode && fu.fn === 'pow' && isVar(fu.args[0], v) && isConstFor(fu.args[1], v));
        if (simplePower) {
          S.add(S.t('constantMultiplePower'), `${fx(node)} = ${pretty(c, lang)}·${fx(fu)} = ${pretty(c, lang)}·${paren2(d(fu))} = ${d(node)}`, '(c·xⁿ)′ = c·n·xⁿ⁻¹');
          return;
        }
        S.add(S.t('constantMultipleRule'), `${fx(node)} = ${pretty(c, lang)}·${fx(fu)}`, '(c·f)′ = c·f′');
        derivSteps(fu, v, S, lang);
        return;
      }
      S.add(S.t('productRule'), `${fx(node)} = ${fx(a)}·${pretty(b, lang)} + ${pretty(a, lang)}·${fx(b)}\n= ${d(node)}`, "(f·g)′ = f′·g + f·g′");
      derivSteps(a, v, S, lang);
      derivSteps(b, v, S, lang);
      return;
    }
    if (node.fn === 'divide') {
      if (isConstFor(b, v)) {
        S.add(S.t('constantMultipleRule'), `${fx(node)} = ${fx(a)}/${pretty(b, lang)} = ${d(node)}`, '(f/c)′ = f′/c');
        derivSteps(a, v, S, lang);
        return;
      }
      const g = pretty(b, lang);
      const gw = /^[a-z0-9]+$/i.test(g) ? g : `(${g})`;
      S.add(S.t('quotientRule'), `${fx(node)} = (${fx(a)}·${gw} − ${pretty(a, lang)}·${fx(b)})/${gw}²\n= ${d(node)}`, '(f/g)′ = (f′·g − f·g′)/g²');
      derivSteps(a, v, S, lang);
      derivSteps(b, v, S, lang);
      return;
    }
    if (node.fn === 'pow') {
      const baseHas = hasVariable(a, v);
      const expHas = hasVariable(b, v);
      if (baseHas && !expHas) {
        if (isVar(a, v)) {
          S.add(S.t('powerRule'), `${fx(node)} = ${d(node)}`, '(xⁿ)′ = n·xⁿ⁻¹');
          return;
        }
        S.add(S.t('powerChainRule'), `${fx(node)} = ${pretty(b, lang)}·(${pretty(a, lang)})^(${pretty(b, lang)} − 1)·${fx(a)}\n= ${d(node)}`, '(uⁿ)′ = n·uⁿ⁻¹·u′');
        derivSteps(a, v, S, lang);
        return;
      }
      if (!baseHas && expHas) {
        const isE = unwrap(a).isSymbolNode && unwrap(a).name === 'e';
        if (isVar(b, v)) {
          S.add(S.t(isE ? 'derivExp' : 'derivExpBase'), `${fx(node)} = ${d(node)}`, isE ? '(eˣ)′ = eˣ' : '(aˣ)′ = aˣ·ln a');
          return;
        }
        S.add(S.t('chainRule'), `${fx(node)} = ${pretty(node, lang)}${isE ? '' : `·ln(${pretty(a, lang)})`}·${fx(b)}\n= ${d(node)}`, isE ? '(eᵘ)′ = eᵘ·u′' : '(aᵘ)′ = aᵘ·ln a·u′');
        derivSteps(b, v, S, lang);
        return;
      }
      S.add(S.t('generalPowerRule'), `${fx(node)} = ${d(node)}`, '(fᵍ)′ = fᵍ·(g′·ln f + g·f′/f)');
      return;
    }
  }
  if (node.isFunctionNode) {
    const name = node.fn.name || node.name;
    const rule = FN_RULES[name];
    const u = node.args[0];
    if (rule && node.args.length === 1) {
      if (isVar(u, v)) {
        S.add(S.t(rule.key), `${fx(node)} = ${d(node)}`, rule.formula.replace(/x/g, v));
        return;
      }
      S.add(S.t('chainRule'), `${fx(node)} = ${S.t('outerDerivative')} · ${fx(u)}\n= ${d(node)}`, `${rule.formula.replace(/x/g, v)}; (f(u))′ = f′(u)·u′`);
      derivSteps(u, v, S, lang);
      return;
    }
  }
  S.add(S.t('derivativeOf'), `${fx(node)} = ${d(node)}`);
};

const paren2 = (s) => (/[+−]/.test(s.slice(1)) ? `(${s})` : s);

/** Derivative with steps. */
export const derivativeTool = (input, lang) => {
  const exprRaw = String(input.expression || '').trim();
  if (!exprRaw) return fail('Empty expression');
  let node;
  try { node = math.parse(normalizeCore(exprRaw)); } catch (e) { return fail(`Parse error: ${e.message}`); }
  const vars = freeVariables(node);
  let v = input.variable || 'x';
  if (!input.variable && !vars.includes('x') && vars.length === 1) [v] = vars;
  if (vars.some((x) => x !== v)) return fail('Only one variable is supported');
  let result;
  try { result = derivOf(node, v); } catch (e) { return fail(`Cannot differentiate: ${e.message}`); }
  const S = new Steps(lang);
  S.addT('givenFunction', null, `f(${v}) = ${pretty(node, lang)}`);
  derivSteps(node, v, S, lang);
  const final = show(result, v, lang);
  S.addT('simplifyResult', null, `f′(${v}) = ${final}`);
  const answer = `f′(${v}) = ${final}`;
  return ok({
    type: 'derivative',
    answer,
    steps: S,
    explanation: S.t('derivativeExplanation', { answer }),
    extras: { variable: v, function: node.toString(), derivative: final, expression: result.toString() },
  });
};

// ---------------------------------------------------------------------------------------------
// Integrals
// ---------------------------------------------------------------------------------------------

/** Split term into constant coefficient (number/Fraction node) and the variable core. */
const splitCoef = (node, v) => {
  const n = unwrap(node);
  if (!hasVariable(n, v)) return { c: n, core: null };
  if (n.isOperatorNode && n.fn === 'unaryMinus') {
    const r = splitCoef(n.args[0], v);
    return { c: new math.OperatorNode('-', 'unaryMinus', [r.c]), core: r.core };
  }
  if (n.isOperatorNode && n.fn === 'multiply') {
    const [a, b] = n.args;
    if (!hasVariable(a, v)) { const r = splitCoef(b, v); return { c: new math.OperatorNode('*', 'multiply', [a, r.c]), core: r.core }; }
    if (!hasVariable(b, v)) { const r = splitCoef(a, v); return { c: new math.OperatorNode('*', 'multiply', [b, r.c]), core: r.core }; }
  }
  if (n.isOperatorNode && n.fn === 'divide' && !hasVariable(n.args[1], v)) {
    const r = splitCoef(n.args[0], v);
    return { c: new math.OperatorNode('/', 'divide', [r.c, n.args[1]]), core: r.core };
  }
  if (n.isOperatorNode && n.fn === 'divide' && !hasVariable(n.args[0], v) && !(n.args[0].isConstantNode && n.args[0].value === 1)) {
    return { c: n.args[0], core: new math.OperatorNode('/', 'divide', [new math.ConstantNode(1), n.args[1]]) };
  }
  return { c: new math.ConstantNode(1), core: n };
};

/** Linear inner function k·v + b → { k, b } (numbers) or null. */
const linearInner = (node, v) => {
  const P = Poly.tryFromNode(node, v);
  if (!P || P.degree !== 1) return null;
  return { k: P.coef(1), b: P.coef(0) };
};

const constValue = (node) => {
  try {
    const val = node.evaluate();
    return typeof val === 'number' || isFrac(val) ? val : null;
  } catch { return null; }
};

/** Antiderivative of a core (without coefficient). Returns { expr: string, key, formula } or null. */
const coreAntiderivative = (core, v) => {
  const n = unwrap(core);
  if (n.isSymbolNode && n.name === v) return { expr: `${v}^2/2`, key: 'intPowerRule', formula: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C' };
  if (n.isOperatorNode && n.fn === 'pow') {
    const [a, b] = n.args;
    if (isVar(a, v) && !hasVariable(b, v)) {
      const k = constValue(b);
      if (k === null) return null;
      const kn = toNum(k);
      if (Math.abs(kn + 1) < 1e-12) return { expr: `log(abs(${v}))`, key: 'intLnRule', formula: '∫1/x dx = ln|x| + C' };
      const k1 = isFrac(k) ? k.add(1) : kn + 1;
      const k1s = isFrac(k1) ? k1.toFraction() : String(k1);
      return { expr: `${v}^(${k1s})/(${k1s})`, key: 'intPowerRule', formula: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C' };
    }
    const lin = !hasVariable(a, v) ? linearInner(b, v) : null;
    if (lin) {
      const isE = unwrap(a).isSymbolNode && unwrap(a).name === 'e';
      const inner = `(${b.toString()})`;
      const ks = lin.k.toFraction();
      if (isE) return { expr: `e^${inner}/(${ks})`, key: lin.k.equals(1) && lin.b.n === 0n ? 'intExpRule' : 'intLinearSub', formula: '∫eˣ dx = eˣ + C' };
      return { expr: `${a.toString()}^${inner}/((${ks})*log(${a.toString()}))`, key: 'intExpBaseRule', formula: '∫aˣ dx = aˣ/ln a + C' };
    }
    const linBase = isConstFor(b, v) ? linearInner(a, v) : null;
    if (linBase) {
      const kn = constValue(b);
      if (kn === null) return null;
      const ks = linBase.k.toFraction();
      if (Math.abs(toNum(kn) + 1) < 1e-12) return { expr: `log(abs(${a.toString()}))/(${ks})`, key: 'intLinearSub', formula: '∫1/(ax + b) dx = ln|ax + b|/a + C' };
      const k1 = isFrac(kn) ? kn.add(1).toFraction() : String(toNum(kn) + 1);
      return { expr: `(${a.toString()})^(${k1})/((${k1})*(${ks}))`, key: 'intLinearSub', formula: '∫(ax + b)ⁿ dx = (ax + b)ⁿ⁺¹/(a(n + 1)) + C' };
    }
    return null;
  }
  if (n.isOperatorNode && n.fn === 'divide' && n.args[0].isConstantNode && toNum(n.args[0].value) === 1) {
    const den = unwrap(n.args[1]);
    if (isVar(den, v)) return { expr: `log(abs(${v}))`, key: 'intLnRule', formula: '∫1/x dx = ln|x| + C' };
    if (den.isOperatorNode && den.fn === 'pow' && isVar(den.args[0], v) && !hasVariable(den.args[1], v)) {
      return coreAntiderivative(new math.OperatorNode('^', 'pow', [den.args[0], new math.OperatorNode('-', 'unaryMinus', [den.args[1]])]), v);
    }
    const lin = linearInner(den, v);
    if (lin) return { expr: `log(abs(${den.toString()}))/(${lin.k.toFraction()})`, key: 'intLinearSub', formula: '∫1/(ax + b) dx = ln|ax + b|/a + C' };
    return null;
  }
  if (n.isFunctionNode && n.args.length === 1) {
    const name = n.fn.name || n.name;
    const u = n.args[0];
    if (name === 'sqrt' && isVar(u, v)) return { expr: `2/3*${v}^(3/2)`, key: 'intPowerRule', formula: '∫√x dx = ∫x^(1/2) dx = (2/3)x^(3/2) + C' };
    const lin = linearInner(u, v);
    if (!lin) return null;
    const plain = lin.k.equals(1) && lin.b.n === 0n;
    const ks = lin.k.toFraction();
    const inner = u.toString();
    const div = plain ? '' : `/(${ks})`;
    if (name === 'sin') return { expr: `-cos(${inner})${div}`, key: plain ? 'intSinRule' : 'intLinearSub', formula: '∫sin x dx = −cos x + C' };
    if (name === 'cos') return { expr: `sin(${inner})${div}`, key: plain ? 'intCosRule' : 'intLinearSub', formula: '∫cos x dx = sin x + C' };
    if (name === 'exp') return { expr: `exp(${inner})${div}`, key: plain ? 'intExpRule' : 'intLinearSub', formula: '∫eˣ dx = eˣ + C' };
    if (name === 'sqrt') return { expr: `2/3*(${inner})^(3/2)${div}`, key: 'intLinearSub', formula: '∫√(ax + b) dx = 2(ax + b)^(3/2)/(3a) + C' };
    return null;
  }
  return null;
};

const close = (x, y) => Math.abs(x - y) <= 1e-6 * (1 + Math.abs(x) + Math.abs(y));

/** Check numerically that F′ = f at a few points. */
const checkAntiderivative = (Fnode, fnode, v) => {
  try {
    const dF = math.derivative(Fnode, v).compile();
    const f = fnode.compile();
    let checked = 0;
    for (const x of [0.37, 1.3, 2.1, -0.6, 3.7]) {
      const a = dF.evaluate({ [v]: x });
      const b = f.evaluate({ [v]: x });
      if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) continue;
      if (!close(a, b)) return false;
      checked++;
    }
    return checked >= 2;
  } catch {
    return false;
  }
};

/** Symbolic antiderivative with steps. Returns { F: node, text, poly? } or null. */
const antiderivative = (node, v, S, lang) => {
  const integrand = (n) => `∫${/[+−]/.test(pretty(n, lang).slice(1)) ? `(${pretty(n, lang)})` : pretty(n, lang)} d${v}`;
  const P = Poly.tryFromNode(node, v);
  if (P) {
    const I = P.integral();
    const terms = [];
    for (let i = P.c.length - 1; i >= 0; i--) if (P.c[i].n !== 0n) terms.push(i);
    if (terms.length > 1) S.add(S.t('intLinearity'), `${integrand(node)} = ${P.terms(lang).map((t, i) => `${i ? (t.neg ? ' − ' : ' + ') : t.neg ? '−' : ''}∫${t.body} d${v}`).join('')}`, '∫(f ± g) dx = ∫f dx ± ∫g dx');
    terms.slice(0, 10).forEach((i) => {
      const c = P.c[i];
      const one = new Poly([...Array(i).fill(0), c.abs()], v);
      const res = new Poly([...Array(i + 1).fill(0), c.abs().div(i + 1)], v);
      const detail = i === 0 ? '∫c dx = c·x + C' : '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C';
      const mid = i === 0 ? `${fmtNum(c.abs(), lang)}·${v}` : `${c.abs().equals(1) ? '' : `${fmtNum(c.abs(), lang)}·`}${v}${sup(i + 1)}/${i + 1}`;
      const fin = res.toString(lang);
      S.add(S.t(i === 0 ? 'intConstantRule' : 'intPowerRule'), `∫${one.toString(lang)} d${v} = ${mid}${mid !== fin ? ` = ${fin}` : ''}`, detail);
    });
    return { F: math.parse(I.toExpr()), text: I.toString(lang), poly: I };
  }
  const terms = sumTerms(node);
  const pieces = [];
  for (const t of terms) {
    const { c, core } = splitCoef(t.node, v);
    if (!core) { pieces.push({ t, expr: `(${c.toString()})*${v}`, key: 'intConstantRule', formula: '∫c dx = c·x + C' }); continue; }
    const r = coreAntiderivative(core, v);
    if (!r) return null;
    pieces.push({ t, expr: `(${c.toString()})*(${r.expr})`, key: r.key, formula: r.formula });
  }
  if (terms.length > 1) S.add(S.t('intLinearity'), `${integrand(node)} = ${terms.map((t, i) => `${i ? (t.sign < 0 ? ' − ' : ' + ') : t.sign < 0 ? '−' : ''}${integrand(t.node)}`).join('')}`, '∫(f ± g) dx = ∫f dx ± ∫g dx');
  const texts = [];
  for (const pc of pieces) {
    const termF = simp(math.parse(pc.expr));
    const shown = pretty(termF, lang);
    texts.push({ sign: pc.t.sign, shown });
    S.add(S.t(pc.key), `${integrand(pc.t.node)} = ${shown}`, pc.formula);
  }
  const Fexpr = pieces.map((pc) => `${pc.t.sign < 0 ? '-' : '+'}(${pc.expr})`).join(' ');
  const Fnode = math.parse(Fexpr);
  if (!checkAntiderivative(Fnode, node, v)) return null;
  const text = texts.map((x, i) => {
    const neg = (x.sign < 0) !== x.shown.startsWith('−');
    const body = x.shown.startsWith('−') ? x.shown.slice(1) : x.shown;
    const bodyW = /^[^(].*[+−]/.test(body) ? `(${body})` : body;
    return i === 0 ? `${neg ? '−' : ''}${bodyW}` : `${neg ? ' − ' : ' + '}${bodyW}`;
  }).join('');
  return { F: Fnode, text };
};

const parseBound = (b) => {
  const s = normalizeCore(String(b).trim());
  try {
    if (/^[-+]?\d+(\.\d+)?(\/\d+)?$/.test(s.replace(/\s/g, ''))) return { node: math.parse(s), value: math.fraction(s.replace(/\s/g, '')), exact: true, text: s };
    const val = math.evaluate(s);
    if (typeof val !== 'number' || !Number.isFinite(val)) return null;
    return { node: math.parse(s), value: val, exact: false, text: s };
  } catch { return null; }
};

const simpson = (f, a, b, n = 1000) => {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
};

const substNode = (node, v, valNode) => node.transform((n, path, parent) => (
  n.isSymbolNode && n.name === v && !(parent && parent.isFunctionNode && path === 'fn') ? new math.ParenthesisNode(valNode) : n));

/** Integral tool: { expression, variable='x', from?, to? }. */
export const integralTool = (input, lang) => {
  const exprRaw = String(input.expression || '').trim();
  if (!exprRaw) return fail('Empty expression');
  let node;
  try { node = math.parse(normalizeCore(exprRaw)); } catch (e) { return fail(`Parse error: ${e.message}`); }
  const vars = freeVariables(node);
  let v = input.variable || 'x';
  if (!input.variable && !vars.includes('x') && vars.length === 1) [v] = vars;
  if (vars.some((x) => x !== v)) return fail('Only one variable is supported');
  const definite = input.from !== undefined && input.from !== null && input.from !== '' && input.to !== undefined && input.to !== null && input.to !== '';
  const S = new Steps(lang);
  const fPretty = pretty(node, lang);
  const fWrapped = /[+−]/.test(fPretty.slice(1)) ? `(${fPretty})` : fPretty;

  if (!definite) {
    S.addT('givenIntegral', null, `∫${fWrapped} d${v}`);
    const res = antiderivative(node, v, S, lang);
    if (!res) return fail('No elementary antiderivative found with the basic rules - use AI');
    S.add(S.t('addConstant'), `∫${fWrapped} d${v} = ${res.text} + C`);
    const answer = `${res.text} + C`;
    return ok({ type: 'integral', answer, steps: S, explanation: S.t('integralExplanation', { answer }), extras: { variable: v, antiderivative: res.text, expression: res.F.toString(), definite: false } });
  }

  const A = parseBound(input.from);
  const B = parseBound(input.to);
  if (!A || !B) return fail('Invalid integration bounds');
  const lo = pretty(A.node, lang);
  const hi = pretty(B.node, lang);
  S.addT('givenIntegral', null, `${intSym(lo, hi)} ${fWrapped} d${v}`);
  const f = node.compile();
  const fNum = (x) => { const r = f.evaluate({ [v]: x }); return typeof r === 'number' ? r : (isFrac(r) ? r.valueOf() : NaN); };
  const a = toNum(A.value);
  const b = toNum(B.value);
  // singularities on [a, b]
  for (let i = 0; i <= 200; i++) {
    const x = a + ((b - a) * i) / 200;
    if (!Number.isFinite(fNum(x))) return fail('Improper integral (the function is not defined on the whole interval)');
  }
  const res = antiderivative(node, v, S, lang);
  if (res) {
    S.add(S.t('antiderivativeFound'), `F(${v}) = ${res.text}`);
    S.add(S.t('newtonLeibniz'), `${intSym(lo, hi)} ${fWrapped} d${v} = F(${hi}) − F(${lo})`, '∫ₐᵇ f(x) dx = F(b) − F(a)');
    let Fb;
    let Fa;
    let exact = false;
    if (res.poly && A.exact && B.exact) {
      Fb = res.poly.evalAt(B.value);
      Fa = res.poly.evalAt(A.value);
      exact = true;
    } else {
      Fb = res.F.evaluate({ [v]: b });
      Fa = res.F.evaluate({ [v]: a });
    }
    const showF = (bound, val) => {
      const substituted = res.poly ? null : pretty(simp(substNode(res.F, v, bound.node)), lang);
      const valTxt = exact ? fmtNum(val, lang) : fmtFloat(val, lang, 8);
      return `F(${pretty(bound.node, lang)}) = ${substituted && substituted !== valTxt ? `${substituted} = ` : ''}${valTxt}`;
    };
    S.addT('evaluateBounds', null, `${showF(B, Fb)}\n${showF(A, Fa)}`);
    const value = exact ? Fb.sub(Fa) : Fb - Fa;
    const valTxt = exact ? fmtNum(value, lang) : fmtFloat(value, lang, 8);
    const dec = exact && value.d !== 1n ? ` ≈ ${fmtDec(value, lang)}` : '';
    S.addT('subtractValues', null, `${exact ? fmtNum(Fb, lang) : fmtFloat(Fb, lang, 8)} − ${paren3(exact ? fmtNum(Fa, lang) : fmtFloat(Fa, lang, 8))} = ${valTxt}${dec}`);
    const answer = `${valTxt}${dec}`;
    return ok({
      type: 'integral',
      answer,
      steps: S,
      explanation: S.t('definiteExplanation', { answer }),
      extras: { variable: v, antiderivative: res.text, definite: true, from: a, to: b, value: Number(toNum(value).toPrecision(12)), exact: exact ? value.toFraction() : null, approximate: false },
    });
  }
  // Numerical fallback
  const approx = simpson(fNum, a, b);
  S.list.splice(1);
  S.addT('noAntiderivative');
  S.add(S.t('simpsonRule'), `${intSym(lo, hi)} ${fWrapped} d${v} ≈ ${fmtDec(approx, lang, 6)}`, S.t('simpsonDetail', { n: 1000 }));
  const answer = `≈ ${fmtDec(approx, lang, 6)}`;
  return ok({
    type: 'integral',
    answer,
    steps: S,
    explanation: S.t('approxExplanation', { answer }),
    extras: { variable: v, definite: true, from: a, to: b, value: approx, approximate: true },
  });
};

const intSym = (lo, hi) => (/^[−\d]+$/.test(lo) && /^[−\d]+$/.test(hi) ? `∫${sub(lo)}${sup(hi)}` : `∫_${lo}^${hi}`);

const paren3 = (s) => (s.startsWith('−') ? `(${s})` : s);

export { F, isNeg };
