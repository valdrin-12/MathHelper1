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
import g10NumberOperations from './g10-number-operations-quiz';
import g10AlgebraicExpressions from './g10-algebraic-expressions-quiz';
import g10AnglesPolygons from './g10-angles-polygons-quiz';
import g10DataHandling from './g10-data-handling-quiz';
import g10FractionsPercentages from './g10-fractions-percentages-quiz';
import g10FormulasFunctions from './g10-formulas-functions-quiz';
import g10PlaneGeometry from './g10-plane-geometry-quiz';
import g10Probability from './g10-probability-quiz';
import g10MeasuresAccuracy from './g10-measures-accuracy-quiz';
import g10EquationsInequalities from './g10-equations-inequalities-quiz';
import g10CircleLoci from './g10-circle-loci-quiz';
import g10RatioProportion from './g10-ratio-proportion-quiz';
import g11FactorsPowersRoots from './g11-factors-powers-roots-quiz';
import g11Graphs1 from './g11-graphs-1-quiz';
import g11SolidGeometry from './g11-solid-geometry-quiz';
import g11DataHandling from './g11-data-handling-quiz';
import g11NumberOperations from './g11-number-operations-quiz';
import g11Graphs2 from './g11-graphs-2-quiz';
import g11PythagorasTrigVectors from './g11-pythagoras-trig-vectors-quiz';
import g11CombinedProbability from './g11-combined-probability-quiz';
import g11Sequences from './g11-sequences-quiz';
import g11UnitsProportion from './g11-units-proportion-quiz';
import g12NumericFunction from './g12-numeric-function-quiz';
import g12SequencesProgressions from './g12-sequences-progressions-quiz';
import g12LimitsInfinity from './g12-limits-infinity-quiz';
import g12CoordinateGeometry from './g12-coordinate-geometry-quiz';
import g12LimitsContinuity from './g12-limits-continuity-quiz';
import g12Derivatives from './g12-derivatives-quiz';
import g12CircleEllipse from './g12-circle-ellipse-quiz';
import g12DerivativeApplications from './g12-derivative-applications-quiz';
import g12HyperbolaParabola from './g12-hyperbola-parabola-quiz';
import g12Integrals from './g12-integrals-quiz';

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
  g10NumberOperations,
  g10AlgebraicExpressions,
  g10AnglesPolygons,
  g10DataHandling,
  g10FractionsPercentages,
  g10FormulasFunctions,
  g10PlaneGeometry,
  g10Probability,
  g10MeasuresAccuracy,
  g10EquationsInequalities,
  g10CircleLoci,
  g10RatioProportion,
  g11FactorsPowersRoots,
  g11Graphs1,
  g11SolidGeometry,
  g11DataHandling,
  g11NumberOperations,
  g11Graphs2,
  g11PythagorasTrigVectors,
  g11CombinedProbability,
  g11Sequences,
  g11UnitsProportion,
  g12NumericFunction,
  g12SequencesProgressions,
  g12LimitsInfinity,
  g12CoordinateGeometry,
  g12LimitsContinuity,
  g12Derivatives,
  g12CircleEllipse,
  g12DerivativeApplications,
  g12HyperbolaParabola,
  g12Integrals,
];

export default ALL.filter((set) => PUBLISHED_GRADES.includes(set.grade));
