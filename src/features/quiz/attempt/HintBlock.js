import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../shared/theme/ThemeContext';
import { useQuizStyles } from './quizStyles';

// Hint: one nudge towards the method, only before answering; costs a little XP.
export default function HintBlock({ hint, shown, cost, onShow }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useQuizStyles();

  if (shown) {
    return (
      <View style={styles.hintCard}>
        <Ionicons name="bulb" size={18} color={colors.secondary} />
        <Text style={styles.hintText}>{hint}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={styles.hintButton}
      onPress={onShow}
      activeOpacity={0.6}
      accessibilityRole="button"
    >
      <Ionicons name="bulb-outline" size={16} color={colors.secondary} />
      <Text style={styles.hintButtonText}>{t('activeQuiz.showHintCost', { xp: cost })}</Text>
    </TouchableOpacity>
  );
}
