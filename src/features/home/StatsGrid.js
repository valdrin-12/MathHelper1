import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Card, SectionTitle } from '../../shared/ui';
import { useResponsive } from '../../shared/utils/responsive';
import { useDashboardStyles } from './dashboardStyles';

// "Your statistics": four small cards (problems, streak, courses, quizzes).
export default function StatsGrid({ problems, streak, courses, quizzes }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { isDesktop } = useResponsive();
  const styles = useDashboardStyles();

  const stats = [
    { icon: 'checkmark-done', color: colors.primary, value: problems, label: t('dashboard.problemsSolved') },
    { icon: 'flame', color: colors.secondary, value: streak, label: t('dashboard.dayStreak') },
    { icon: 'book', color: colors.success, value: courses, label: t('dashboard.coursesCompleted') },
    { icon: 'trophy', color: colors.purple, value: quizzes, label: t('dashboard.quizzesCompleted') },
  ];

  return (
    <View style={styles.sectionBlock}>
      <SectionTitle>{t('dashboard.yourStats')}</SectionTitle>
      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <Card key={stat.icon} style={[styles.statCard, isDesktop && styles.statCardDesktop]}>
            <View style={styles.statTop}>
              <Ionicons name={stat.icon} size={18} color={stat.color} />
              <Text style={styles.statNumber}>{stat.value}</Text>
            </View>
            <Text style={styles.statLabel} numberOfLines={2}>{stat.label}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}
