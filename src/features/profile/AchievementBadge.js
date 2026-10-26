import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { useBadgeStyles } from './profileStyles';

// ─── Achievement Badge ───
export default function AchievementBadge({ achievement, earned }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const title = t(`achievements.${achievement.id}.title`);
  const progress = Math.min(achievement.progress ?? 0, achievement.threshold ?? 0);
  const badgeStyles = useBadgeStyles();
  const iconMap = {
    first_problem: 'checkmark-circle',
    ten_problems: 'star',
    fifty_problems: 'ribbon',
    first_course: 'book',
    five_courses: 'library',
    first_quiz: 'help-circle',
    five_quizzes: 'trophy',
    streak_3: 'flame',
    streak_7: 'bonfire',
  };
  const colorMap = {
    first_problem: colors.success,
    ten_problems: colors.secondary,
    fifty_problems: colors.purple,
    first_course: colors.primary,
    five_courses: colors.info,
    first_quiz: colors.accent,
    five_quizzes: colors.warningAccent,
    streak_3: colors.secondary,
    streak_7: colors.error,
  };
  const tint = colorMap[achievement.id] || colors.primary;

  return (
    <View
      style={[badgeStyles.container, !earned && badgeStyles.locked]}
      accessible
      accessibilityLabel={`${title}, ${t(`achievements.${achievement.id}.desc`)}, ${earned
        ? t('achievements.earned')
        : t('achievements.lockedProgress', { progress, threshold: achievement.threshold })}`}
    >
      <View style={[badgeStyles.iconCircle, { backgroundColor: earned ? tint + '20' : colors.borderLight }]}>
        <Ionicons
          name={iconMap[achievement.id] || 'medal'}
          size={22}
          color={earned ? tint : colors.textMuted}
        />
        {/* Locked state is not colour-only: a lock glyph sits on the badge */}
        {!earned && (
          <View style={[badgeStyles.lockBadge, { backgroundColor: colors.surface }]}>
            <Ionicons name="lock-closed" size={11} color={colors.textMuted} />
          </View>
        )}
      </View>
      <Text style={[badgeStyles.title, !earned && badgeStyles.lockedText]} numberOfLines={2}>
        {title}
      </Text>
      {earned ? (
        <Ionicons name="checkmark-circle" size={14} color={colors.success} />
      ) : (
        <Text style={badgeStyles.progressText}>{progress}/{achievement.threshold}</Text>
      )}
    </View>
  );
}
