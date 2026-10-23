// Exact polynomials in one variable (Fraction coefficients) and multi-variable linear forms.
import { math } from './parse';
import { F, sup, monomial, joinTerms, isZero, isInt, toNum } from './format';

const ZERO = () => math.fraction(0);
const ONE = () => math.fraction(1);

export class Poly {
  constructor(coeffs = [], v = 'x') {
    this.c = coeffs.map(F);
    this.v = v;
    this.trim();
  }

  static const(k, v = 'x') { return new Poly([F(k)], v); }
  static x(v = 'x') { return new Poly([ZERO(), ONE()], v); }

  trim() {
    while (this.c.length && isZero(this.c[this.c.length - 1])) this.c.pop();
    return this;
  }

  get degree() { return this.c.length ? this.c.length - 1 : -Infinity; }
  coef(i) { return this.c[i] || ZERO(); }
  get lead() { return this.coef(this.c.length - 1); }
  isZero() { return this.c.length === 0; }
  isConst() { return this.c.length <= 1; }
  clone() { return new Poly(this.c.slice(), this.v); }

  add(p) {
    const n = Math.max(this.c.length, p.c.length);
    const out = [];
    for (let i = 0; i < n; i++) out.push(this.coef(i).add(p.coef(i)));
    return new Poly(out, this.v);
  }
  sub(p) { return this.add(p.scale(-1)); }
  scale(k) { const f = F(k); return new Poly(this.c.map((a) => a.mul(f)), this.v); }
  mul(p) {
    if (this.isZero() || p.isZero()) return new Poly([], this.v);
    const out = Array.from({ length: this.c.length + p.c.length - 1 }, ZERO);
    this.c.forEach((a, i) => p.c.forEach((b, j) => { out[i + j] = out[i + j].add(a.mul(b)); }));
    return new Poly(out, this.v);
  }
  pow(n) {
    let r = Poly.const(1, this.v);
    for (let i = 0; i < n; i++) r = r.mul(this);
    return r;
  }
  evalAt(x) {
    const f = F(x);
    let r = ZERO();
    for (let i = this.c.length - 1; i >= 0; i--) r = r.mul(f).add(this.c[i]);
    return r;
  }
  evalNum(x) {
    let r = 0;
    for (let i = this.c.length - 1; i >= 0; i--) r = r * x + toNum(this.c[i]);
    return r;
  }
  derivative() { return new Poly(this.c.slice(1).map((a, i) => a.mul(i + 1)), this.v); }
  integral() { return new Poly([ZERO(), ...this.c.map((a, i) => a.div(i + 1))], this.v); }
  /** Lowest power with a non-zero coefficient. */
  get minDegree() { const i = this.c.findIndex((a) => !isZero(a)); return i < 0 ? 0 : i; }
  shiftDown(k) { return new Poly(this.c.slice(k), this.v); }

  /** Long division: returns { q, r }. */
  divmod(d) {
    let r = this.clone();
    const q = Array.from({ length: Math.max(0, r.c.length - d.c.length + 1) }, ZERO);
    while (!r.isZero() && r.degree >= d.degree) {
      const k = r.degree - d.degree;
      const factor = r.lead.div(d.lead);
      q[k] = factor;
      const sub = new Poly([...Array.from({ length: k }, ZERO), ...d.c.map((a) => a.mul(factor))], this.v);
      r = r.sub(sub);
    }
    return { q: new Poly(q, this.v), r };
  }

  /** Least common multiple of all coefficient denominators. */
  denominatorLcm() {
    return this.c.reduce((acc, a) => { const d = Number(a.d); return (acc * d) / gcdInt(acc, d); }, 1);
  }
  /** gcd of the integer numerators (assumes integer coefficients). */
  numeratorGcd() { return this.c.reduce((acc, a) => gcdInt(acc, Number(a.n)), 0); }
  isIntegral() { return this.c.every(isInt); }

  equals(p) { return this.sub(p).isZero(); }

  terms(lang) {
    const out = [];
    for (let i = this.c.length - 1; i >= 0; i--) {
      if (isZero(this.c[i])) continue;
      const mono = i === 0 ? '' : i === 1 ? this.v : `${this.v}${sup(i)}`;
      out.push(monomial(this.c[i], mono, lang));
    }
    return out;
  }

  toString(lang = 'en') { return joinTerms(this.terms(lang)); }

  /** mathjs syntax (for numeric checks / extras). */
  toExpr() {
    if (this.isZero()) return '0';
    const parts = [];
    for (let i = this.c.length - 1; i >= 0; i--) {
      if (isZero(this.c[i])) continue;
      const c = `(${this.c[i].toFraction()})`;
      parts.push(i === 0 ? c : `${c}*${this.v}^${i}`);
    }
    return parts.join(' + ');
  }

  /** Convert a mathjs node to a polynomial in v; throws when not a polynomial. */
  static fromNode(node, v) {
    if (node.isParenthesisNode) return Poly.fromNode(node.content, v);
    if (node.isConstantNode) {
      if (typeof node.value === 'number' && Number.isFinite(node.value)) return Poly.const(math.fraction(node.value), v);
      if (math.isFraction(node.value)) return Poly.const(node.value, v);
      throw new Error('Unsupported constant');
    }
    if (node.isSymbolNode) {
      if (node.name === v) return Poly.x(v);
      throw new Error(`Not a polynomial in ${v}: ${node.name}`);
    }
    if (node.isOperatorNode) {
      const [a, b] = node.args;
      switch (node.fn) {
        case 'unaryMinus': return Poly.fromNode(a, v).scale(-1);
        case 'unaryPlus': return Poly.fromNode(a, v);
        case 'add': return Poly.fromNode(a, v).add(Poly.fromNode(b, v));
        case 'subtract': return Poly.fromNode(a, v).sub(Poly.fromNode(b, v));
        case 'multiply': return Poly.fromNode(a, v).mul(Poly.fromNode(b, v));
        case 'divide': {
          const den = Poly.fromNode(b, v);
          if (!den.isConst() || den.isZero()) throw new Error('Division by a non-constant');
          return Poly.fromNode(a, v).scale(ONE().div(den.coef(0)));
        }
        case 'pow': {
          const e = Poly.fromNode(b, v);
          if (!e.isConst()) throw new Error('Variable exponent');
          const k = e.coef(0);
          if (!isInt(k) || k.s < 0n || k.n > 30n) throw new Error('Exponent must be a small natural number');
          return Poly.fromNode(a, v).pow(Number(k.n));
        }
        default: break;
      }
    }
    throw new Error('Not a polynomial');
  }

  static tryFromNode(node, v) {
    try { return Poly.fromNode(node, v); } catch { return null; }
  }
}

export const gcdInt = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x;
};
export const lcmInt = (a, b) => (a && b ? Math.abs(a * b) / gcdInt(a, b) : 0);

/** Linear form Σ coeff·var + const with Fraction coefficients (for systems of equations). */
export class Lin {
  constructor(coeffs = {}, k = 0) {
    this.coeffs = {};
    Object.entries(coeffs).forEach(([n, c]) => { if (!isZero(F(c))) this.coeffs[n] = F(c); });
    this.k = F(k);
  }
  get(v) { return this.coeffs[v] || ZERO(); }
  vars() { return Object.keys(this.coeffs); }
  isConst() { return this.vars().length === 0; }
  add(o) {
    const out = { ...this.coeffs };
    Object.entries(o.coeffs).forEach(([n, c]) => { out[n] = (out[n] || ZERO()).add(c); });
    return new Lin(out, this.k.add(o.k));
  }
  scale(s) {
    const f = F(s);
    const out = {};
    Object.entries(this.coeffs).forEach(([n, c]) => { out[n] = c.mul(f); });
    return new Lin(out, this.k.mul(f));
  }
  sub(o) { return this.add(o.scale(-1)); }

  static fromNode(node) {
    if (node.isParenthesisNode) return Lin.fromNode(node.content);
    if (node.isConstantNode) {
      if (typeof node.value === 'number' && Number.isFinite(node.value)) return new Lin({}, math.fraction(node.value));
      if (math.isFraction(node.value)) return new Lin({}, node.value);
      throw new Error('Unsupported constant');
    }
    if (node.isSymbolNode) return new Lin({ [node.name]: 1 }, 0);
    if (node.isOperatorNode) {
      const [a, b] = node.args;
      switch (node.fn) {
        case 'unaryMinus': return Lin.fromNode(a).scale(-1);
        case 'unaryPlus': return Lin.fromNode(a);
        case 'add': return Lin.fromNode(a).add(Lin.fromNode(b));
        case 'subtract': return Lin.fromNode(a).sub(Lin.fromNode(b));
        case 'multiply': {
          const la = Lin.fromNode(a);
          const lb = Lin.fromNode(b);
          if (la.isConst()) return lb.scale(la.k);
          if (lb.isConst()) return la.scale(lb.k);
          throw new Error('Not linear');
        }
        case 'divide': {
          const lb = Lin.fromNode(b);
          if (!lb.isConst() || isZero(lb.k)) throw new Error('Not linear');
          return Lin.fromNode(a).scale(ONE().div(lb.k));
        }
        case 'pow': {
          const la = Lin.fromNode(a);
          const lb = Lin.fromNode(b);
          if (la.isConst() && lb.isConst() && isInt(lb.k)) return new Lin({}, la.k.pow(lb.k));
          if (lb.isConst() && lb.k.equals(1)) return la;
          throw new Error('Not linear');
        }
        default: break;
      }
    }
    throw new Error('Not linear');
  }

  /** "2x + 3y − z" over the given variable order (without the constant). */
  lhsString(order, lang) {
    const terms = order.filter((n) => !isZero(this.get(n))).map((n) => monomial(this.get(n), n, lang));
    return joinTerms(terms);
  }
}
