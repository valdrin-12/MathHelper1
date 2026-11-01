import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Card } from '../../shared/ui';
import ProgressRing from '../../shared/ui/ProgressRing';
import { useDashboardStyles } from './dashboardStyles';

export const DAILY_GOAL = 10;

// Compact progress strip at the top of Home: the daily-goal ring (n/10) and the streak.
// Readable at a glance, like Apple Fitness rings and Duolingo's top bar.
export default function DailyGoalCard({ todayProblems, streak = 0, onPress }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useDashboardStyles();

  const done = Math.min(todayProblems, DAILY_GOAL);
  const goalDone = done >= DAILY_GOAL;
  const encouragement = goalDone ? t('dashboard.goalReached') : done >= DAILY_GOAL / 2 ? t('dashboard.keepGoing') : t('dashboard.startSolving');

  return (
    <Card style={styles.block}>
      <TouchableOpacity
        style={styles.stripRow}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.7}
        accessibilityRole={onPress ? 'button' : undefined}
        accessibilityLabel={`${t('dashboard.dailyGoal')}: ${t('dashboard.problemsProgress', { done, total: DAILY_GOAL })}`}
      >
        <ProgressRing progress={done / DAILY_GOAL} size={52} strokeWidth={5} color={goalDone ? colors.success : colors.primary}>
          {goalDone
            ? <Ionicons name="checkmark" size={22} color={colors.success} />
            : <Text style={styles.ringText}>{done}/{DAILY_GOAL}</Text>}
        </ProgressRing>
        <View style={styles.stripText}>
          <Text style={styles.goalTitle} numberOfLines={1}>{t('dashboard.dailyGoal')}</Text>
          <Text style={styles.goalEncouragement} numberOfLines={2}>{encouragement}</Text>
        </View>
        <View style={styles.stripChips}>
          <View style={[styles.stripChip, { backgroundColor: colors.warningLight }]}>
            <Ionicons name="flame" size={14} color={colors.secondary} />
            <Text style={[styles.stripChipText, { color: colors.secondary }]}>{streak}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}
