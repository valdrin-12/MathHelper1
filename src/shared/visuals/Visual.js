import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { tr } from './common';
import NumberLine from './NumberLine';
import { FractionBar, PieModel } from './FractionModels';
import GeoFigure from './GeoFigure';
import FunctionPlot from './FunctionPlot';
import { BarChart, PieChart, Histogram, BoxPlot, ScatterPlot } from './Charts';
import { TreeDiagram, VennDiagram, ValueTable, Solid } from './Diagrams';

const COMPONENTS = {
  numberLine: NumberLine,
  fractionBar: FractionBar,
  pieModel: PieModel,
  geoFigure: GeoFigure,
  functionPlot: FunctionPlot,
  barChart: BarChart,
  pieChart: PieChart,
  histogram: Histogram,
  boxPlot: BoxPlot,
  scatterPlot: ScatterPlot,
  treeDiagram: TreeDiagram,
  vennDiagram: VennDiagram,
  valueTable: ValueTable,
  solid: Solid,
};

export const VISUAL_TYPES = Object.keys(COMPONENTS);

/**
 * A picture drawn from data (lessons and quiz questions).
 * spec: { type, alt: { al, en, de }, caption?: { al, en, de } | string, ...type-specific data }
 * The alt text is what screen readers announce; labels translate and numbers follow the language.
 */
export default function Visual({ spec, style, bare }) {
  const { i18n } = useTranslation();
  const { colors } = useTheme();
  const lang = (i18n.language || 'al').slice(0, 2);
  const Component = spec && COMPONENTS[spec.type];
  if (!Component) return null;
  const caption = spec.caption !== undefined ? tr(spec.caption, lang) : '';
  return (
    <View
      style={[!bare && [styles.card, { backgroundColor: colors.surface, borderColor: colors.borderLight || colors.border }], style]}
      accessible
      accessibilityRole="image"
      accessibilityLabel={tr(spec.alt, lang)}
    >
      <Component spec={spec} lang={lang} />
      {!!caption && <Text style={[styles.caption, { color: colors.textSubtle }]}>{caption}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: BORDER_RADIUS.lg, borderWidth: StyleSheet.hairlineWidth, padding: SPACING.sm, marginVertical: SPACING.sm },
  caption: { ...TYPOGRAPHY.footnote, textAlign: 'center', marginTop: SPACING.xs },
});
