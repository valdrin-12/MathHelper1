// Grade 6–12 quiz sets (one per curriculum theme), same format as the other quiz sets plus
// grade, theme and order. Questions may carry a language-independent `visual` and `verify`.
import { PUBLISHED_GRADES } from '../../grades/curriculum';

const ALL = [];

export default ALL.filter((set) => PUBLISHED_GRADES.includes(set.grade));
