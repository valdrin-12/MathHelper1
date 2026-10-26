// Step collection and result helpers shared by all solver modules.
import { tr } from './i18n';

export class Steps {
  constructor(lang) {
    this.lang = lang;
    this.list = [];
  }

  /** Translate a key with parameters. */
  t(key, params) { return tr(this.lang, key, params); }

  /** Add a step: title (already translated), optional math line, optional rule/detail text. */
  add(title, math, detail) {
    const step = { title };
    if (detail) step.detail = detail;
    if (math) step.math = math;
    this.list.push(step);
    return this;
  }

  /** Add a step whose title is a translation key. */
  addT(key, params, math, detailKey, detailParams) {
    return this.add(this.t(key, params), math, detailKey ? this.t(detailKey, detailParams) : undefined);
  }

  get length() { return this.list.length; }

  strings() {
    return this.list.map((s) => {
      const head = s.detail ? `${s.title}: ${s.detail}` : s.title;
      return s.math ? `${head}\n${s.math}` : head;
    });
  }
}

export const ok = ({ type, answer, steps, explanation, extras }) => {
  const result = {
    success: true,
    type,
    answer,
    steps: steps.strings(),
    stepDetails: steps.list,
    explanation,
  };
  if (extras) result.extras = extras;
  return result;
};

export const fail = (reason) => ({ success: false, reason });
