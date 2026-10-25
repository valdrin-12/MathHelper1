// Course lessons per language (al = Albanian, en, de). Each language has the same five parts, in
// localized/courseContent_<lang>/: base (arithmetic, fractions, ...), algebra, geometry, calculus, other.
import { courseContents_base_al } from './localized/courseContent_al/base';
import { courseContents_algebra_al } from './localized/courseContent_al/algebra';
import { courseContents_geometry_al } from './localized/courseContent_al/geometry';
import { courseContents_calculus_al } from './localized/courseContent_al/calculus';
import { courseContents_other_al } from './localized/courseContent_al/other';

import { courseContents_base_en } from './localized/courseContent_en/base';
import { courseContents_algebra_en } from './localized/courseContent_en/algebra';
import { courseContents_geometry_en } from './localized/courseContent_en/geometry';
import { courseContents_calculus_en } from './localized/courseContent_en/calculus';
import { courseContents_other_en } from './localized/courseContent_en/other';

import { courseContents_base_de } from './localized/courseContent_de/base';
import { courseContents_algebra_de } from './localized/courseContent_de/algebra';
import { courseContents_geometry_de } from './localized/courseContent_de/geometry';
import { courseContents_calculus_de } from './localized/courseContent_de/calculus';
import { courseContents_other_de } from './localized/courseContent_de/other';

const contentsMap = {
  al: {
    ...courseContents_base_al,
    ...courseContents_algebra_al,
    ...courseContents_geometry_al,
    ...courseContents_calculus_al,
    ...courseContents_other_al,
  },
  en: {
    ...courseContents_base_en,
    ...courseContents_algebra_en,
    ...courseContents_geometry_en,
    ...courseContents_calculus_en,
    ...courseContents_other_en,
  },
  de: {
    ...courseContents_base_de,
    ...courseContents_algebra_de,
    ...courseContents_geometry_de,
    ...courseContents_calculus_de,
    ...courseContents_other_de,
  },
};

// Get localized course contents (Albanian when the language is unknown)
export const getLocalizedCourseContents = (lang = 'al') => contentsMap[lang] || contentsMap.al;
