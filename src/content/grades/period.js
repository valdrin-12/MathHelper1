// When a theme is taught: [fromMonth, toMonth] → "shtator–tetor" / "Sep–Oct" / "Sep.–Okt.", { hours } → "8 orë".
const MONTHS = {
  al: ['janar', 'shkurt', 'mars', 'prill', 'maj', 'qershor', 'korrik', 'gusht', 'shtator', 'tetor', 'nëntor', 'dhjetor'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  de: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
};
const HOURS = { al: (h) => `${h} orë`, en: (h) => `${h} hours`, de: (h) => `${h} Std.` };

export function formatPeriod(period, lang = 'al') {
  const l = MONTHS[lang] ? lang : 'al';
  if (!period) return '';
  if (period.hours) return HOURS[l](period.hours);
  const [from, to] = period;
  return from === to ? MONTHS[l][from - 1] : `${MONTHS[l][from - 1]}–${MONTHS[l][to - 1]}`;
}
