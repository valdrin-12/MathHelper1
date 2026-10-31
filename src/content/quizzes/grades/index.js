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
import g7FractionsDecimals from './g7-fractions-decimals-quiz';
import g7Angles from './g7-angles-quiz';
import g7Integers from './g7-integers-quiz';
import g7RationalNumbers from './g7-rational-numbers-quiz';
import g7Polygons from './g7-polygons-quiz';
import g7PowersRoots from './g7-powers-roots-quiz';
import g7RatiosProportions from './g7-ratios-proportions-quiz';
import g7Pythagoras from './g7-pythagoras-quiz';
import g7ExpressionsEquations from './g7-expressions-equations-quiz';
import g7TransformationsSolids from './g7-transformations-solids-quiz';
import g7Function from './g7-function-quiz';
import g7StatisticsProbability from './g7-statistics-probability-quiz';
import g8NumberSense from './g8-number-sense-quiz';
import g8NumberOperations from './g8-number-operations-quiz';
import g8Measurement from './g8-measurement-quiz';
import g8PlaneGeometry from './g8-plane-geometry-quiz';
import g8Transformations from './g8-transformations-quiz';
import g8SolidGeometry from './g8-solid-geometry-quiz';
import g8AlgebraicExpressions from './g8-algebraic-expressions-quiz';
import g8EquationsSystems from './g8-equations-systems-quiz';
import g8Function from './g8-function-quiz';
import g8StatisticsProbability from './g8-statistics-probability-quiz';

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
  g7FractionsDecimals,
  g7Angles,
  g7Integers,
  g7RationalNumbers,
  g7Polygons,
  g7PowersRoots,
  g7RatiosProportions,
  g7Pythagoras,
  g7ExpressionsEquations,
  g7TransformationsSolids,
  g7Function,
  g7StatisticsProbability,
  g8NumberSense,
  g8NumberOperations,
  g8Measurement,
  g8PlaneGeometry,
  g8Transformations,
  g8SolidGeometry,
  g8AlgebraicExpressions,
  g8EquationsSystems,
  g8Function,
  g8StatisticsProbability,
];

export default ALL.filter((set) => PUBLISHED_GRADES.includes(set.grade));
