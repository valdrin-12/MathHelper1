import { compile } from 'mathjs';
import { formatNumber } from '../utils/formatNumber';

// Helpers for visuals driven by sliders: numbers or mathjs expressions in the slider parameters.
const cache = new Map();
const compiled = (expr) => {
  if (!cache.has(expr)) cache.set(expr, compile(expr));
  return cache.get(expr);
};

/** A number, or a mathjs expression evaluated with the slider values ('p + r', 'a^2'). NaN if it fails. */
export function evalNum(value, scope = {}) {
  if (typeof value === 'number') return value;
  try {
    const v = compiled(String(value)).evaluate({ ...scope });
    return typeof v === 'number' ? v : Number(v);
  } catch {
    return NaN;
  }
}

/** Rounds to 2 decimals for display and writes the number the local way (3,5 / 3.5). */
export const showNum = (v, lang) => (Number.isFinite(v) ? formatNumber(Math.round(v * 100) / 100, lang) : '–');

/** Replaces every {expression} in a label with its value: '({p}, {q})' → '(6, 2)'. */
export function fillTemplate(text, scope, lang) {
  if (typeof text !== 'string' || !text.includes('{')) return text;
  return text.replace(/\{([^{}]+)\}/g, (_, expr) => showNum(evalNum(expr, scope), lang));
}

/** The first case whose condition holds ({ when: 'abs(n)/sqrt(2) < 5', text }), or the plain text. */
export function pickReadout(readout, scope) {
  if (!readout.cases) return readout.text;
  const hit = readout.cases.find((c) => !c.when || Boolean(evalNum(c.when, scope)));
  return hit ? hit.text : '';
}

/** Typed number ("3,5", "-2", "−1.5") → number, or NaN. */
export const parseTyped = (text) => Number(String(text).trim().replace(/[−–]/g, '-').replace(',', '.'));
