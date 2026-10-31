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
import g9NumberSets from './g9-number-sets-quiz';
import g9Expressions from './g9-expressions-quiz';
import g9EquationsInequalities from './g9-equations-inequalities-quiz';
import g9PlaneGeometry from './g9-plane-geometry-quiz';
import g9Proportionality from './g9-proportionality-quiz';
import g9LinearSystems from './g9-linear-systems-quiz';
import g9Vectors from './g9-vectors-quiz';
import g9Similarity from './g9-similarity-quiz';
import g9RightTriangleTrig from './g9-right-triangle-trig-quiz';
import g9DataProbability from './g9-data-probability-quiz';

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
  g9NumberSets,
  g9Expressions,
  g9EquationsInequalities,
  g9PlaneGeometry,
  g9Proportionality,
  g9LinearSystems,
  g9Vectors,
  g9Similarity,
  g9RightTriangleTrig,
  g9DataProbability,
];

export default ALL.filter((set) => PUBLISHED_GRADES.includes(set.grade));
