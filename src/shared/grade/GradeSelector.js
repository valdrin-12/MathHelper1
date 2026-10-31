import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Chip } from '../ui';
import { useTheme } from '../theme/ThemeContext';
import { SPACING, TYPOGRAPHY } from '../theme/constants';
import { GRADE_OPTIONS } from '../../content/grades/filterByGrade';

/** Compact row of chips: General Math, 6 … 12 (shared by Learn and Quiz). */
export default function GradeSelector({ value, onChange, style }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <View style={[styles.row, style]} accessibilityRole="radiogroup" accessibilityLabel={t('grades.selectorLabel')}>
      <Text style={[styles.label, { color: colors.textSubtle }]}>{t('grades.label')}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
        {GRADE_OPTIONS.map((g) => (
          <Chip
            key={String(g)}
            icon={g === 'general' ? 'infinite' : undefined}
            label={g === 'general' ? t('grades.general') : String(g)}
            active={value === g}
            onPress={() => onChange(g)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

/** Title above a group of courses or quizzes ("General Math", "Grade 6 · 12 themes"). */
export function GradeSectionHeader({ grade, count, style }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const title = grade == null ? t('grades.sectionGeneral') : t('grades.grade', { n: grade });
  return (
    <View style={[styles.header, style]} accessibilityRole="header">
      <Text style={[styles.headerTitle, { color: colors.text }]}>{title}</Text>
      {count != null && <Text style={[styles.headerCount, { color: colors.textSubtle }]}>{count}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.lg, paddingLeft: SPACING.lg },
  label: { ...TYPOGRAPHY.footnote, fontWeight: '600', marginRight: SPACING.sm },
  chips: { paddingRight: SPACING.lg },
  header: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginHorizontal: SPACING.xl, marginTop: SPACING.xl, marginBottom: SPACING.sm },
  headerTitle: { ...TYPOGRAPHY.headline },
  headerCount: { ...TYPOGRAPHY.footnote },
});
