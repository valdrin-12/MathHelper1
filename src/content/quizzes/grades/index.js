// Grade 6–12 quiz sets (one per curriculum theme), same format as the other quiz sets plus
// grade, theme and order. Questions may carry a language-independent `visual` and `verify`.
import { PUBLISHED_GRADES } from '../../grades/curriculum';
import g6NaturalNumbers from './g6-natural-numbers-quiz';
import g6PlaneGeometry from './g6-plane-geometry-quiz';
import g6Fractions from './g6-fractions-quiz';
import g6GeometricFigures from './g6-geometric-figures-quiz';
import g6Decimals from './g6-decimals-quiz';
import g6Measurement from './g6-measurement-quiz';
import g6Integers from './g6-integers-quiz';
import g6ExpressionsEquations from './g6-expressions-equations-quiz';
import g6OtherMeasures from './g6-other-measures-quiz';
import g6TransformationsSolids from './g6-transformations-solids-quiz';
import g6FunctionsSequences from './g6-functions-sequences-quiz';
import g6StatisticsProbability from './g6-statistics-probability-quiz';

const ALL = [
  g6NaturalNumbers,
  g6PlaneGeometry,
  g6Fractions,
  g6GeometricFigures,
  g6Decimals,
  g6Measurement,
  g6Integers,
  g6ExpressionsEquations,
  g6OtherMeasures,
  g6TransformationsSolids,
  g6FunctionsSequences,
  g6StatisticsProbability,
];

export default ALL.filter((set) => PUBLISHED_GRADES.includes(set.grade));
