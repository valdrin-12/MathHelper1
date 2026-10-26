import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Card, IconBadge } from '../../shared/ui';
import { useDashboardStyles } from './dashboardStyles';

const DAILY_GOAL = 10;

// "Daily goal: n/10 problems" with a progress bar and a short encouragement.
export default function DailyGoalCard({ todayProblems }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useDashboardStyles();

  const dailyProgress = Math.min(todayProblems, DAILY_GOAL);
  const progressPercent = (dailyProgress / DAILY_GOAL) * 100;
  const goalDone = progressPercent >= 100;

  return (
    <Card style={styles.block}>
      <View style={styles.goalHeader}>
        <IconBadge name={goalDone ? 'trophy' : 'flag'} color={goalDone ? colors.success : colors.secondary} />
        <Text style={styles.goalTitle}>{t('dashboard.dailyGoal')}</Text>
        <Text style={[styles.goalCount, goalDone && { color: colors.success }]}>
          {t('dashboard.problemsProgress', { done: dailyProgress, total: DAILY_GOAL })}
        </Text>
      </View>
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${Math.max(progressPercent, 2)}%`, backgroundColor: goalDone ? colors.success : colors.primary },
          ]}
        />
      </View>
      <Text style={styles.goalEncouragement}>
        {goalDone
          ? t('dashboard.goalReached')
          : progressPercent >= 50
          ? t('dashboard.keepGoing')
          : t('dashboard.startSolving')}
      </Text>
    </Card>
  );
}
