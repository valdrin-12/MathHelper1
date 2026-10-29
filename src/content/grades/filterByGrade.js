// Grade filter for Learn and Quiz (pure, so scripts/testGradeFilter.js can test it).
// Items without a `grade` are General Math (all the content that existed before grades 6–12).
//   'general' → every item, in sections: General Math first (original order), then Grade 6 … 12
//   6 … 12    → only that grade, sorted by curriculum order (one section)

export const GRADE_OPTIONS = ['general', 6, 7, 8, 9, 10, 11, 12];

export const normalizeGradeSelection = (value) => {
  if (value === 'general' || value === null || value === undefined) return 'general';
  const n = Number(value);
  return GRADE_OPTIONS.includes(n) ? n : 'general';
};

const byOrder = (a, b) => (a.order || 0) - (b.order || 0);

/**
 * @param {Array<{ grade?: number, order?: number }>} items in their display order
 * @param {'general'|number} selection
 * @returns {Array<{ key: string, grade: number|null, items: Array }>} non-empty sections
 */
export function sectionsByGrade(items, selection) {
  const sel = normalizeGradeSelection(selection);
  if (sel !== 'general') {
    const only = items.filter((it) => it.grade === sel).sort(byOrder);
    return [{ key: `grade-${sel}`, grade: sel, items: only }];
  }
  const sections = [{ key: 'general', grade: null, items: items.filter((it) => it.grade == null) }];
  GRADE_OPTIONS.filter((g) => g !== 'general').forEach((g) => {
    const list = items.filter((it) => it.grade === g).sort(byOrder);
    if (list.length) sections.push({ key: `grade-${g}`, grade: g, items: list });
  });
  return sections.filter((s) => s.items.length > 0);
}

/** Flat list in display order (used for counts). */
export const filterByGrade = (items, selection) => sectionsByGrade(items, selection).flatMap((s) => s.items);
