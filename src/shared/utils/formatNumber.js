// Locale number formatting for content and visuals: decimal comma in Albanian and German ("3,5"),
// decimal point in English ("3.5"); thousands are grouped from 10 000 on with a narrow no-break space
// (al, de) or a comma (en). Negative numbers use the real minus sign "−".
// Works without Intl (Hermes on older devices ships a reduced Intl).

const DECIMAL = { al: ',', de: ',', en: '.' };
const GROUP = { al: ' ', de: ' ', en: ',' };

/**
 * @param {number} value
 * @param {string} lang 'al' | 'en' | 'de'
 * @param {{ decimals?: number, group?: boolean }} [opts] decimals: fixed number of decimals
 *        (default: up to 6, trailing zeros removed); group: group thousands (default true)
 */
export function formatNumber(value, lang = 'al', opts = {}) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return String(value);
  const l = DECIMAL[lang] ? lang : 'al';
  const { decimals, group = true } = opts;
  const abs = Math.abs(value);
  let str = decimals === undefined
    ? String(Number(abs.toFixed(6)))
    : abs.toFixed(decimals);
  if (str.includes('e')) str = abs.toFixed(decimals ?? 6).replace(/\.?0+$/, '');
  let [int, frac] = str.split('.');
  if (group && abs >= 10000) int = int.replace(/\B(?=(\d{3})+(?!\d))/g, GROUP[l]);
  const body = frac ? `${int}${DECIMAL[l]}${frac}` : int;
  return value < 0 && Number(str) !== 0 ? `−${body}` : body;
}

/** Decimal separator of a language. */
export const decimalSeparator = (lang) => DECIMAL[lang] || ',';
