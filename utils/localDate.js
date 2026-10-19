/**
 * Device-local calendar date helpers.
 *
 * Always use these instead of `new Date().toISOString().slice(0, 10)`, which returns the
 * UTC date and is wrong for users east/west of UTC around midnight.
 */

/**
 * @param {Date} [date=new Date()]
 * @returns {string} Device-local date as YYYY-MM-DD
 */
export const getLocalDateKey = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export default { getLocalDateKey };
