import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { useQuizStyles } from './quizStyles';

const formatClock = (secs) => {
  const s = Math.max(0, Math.ceil(secs));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

// Navigation bar (close · centered title · quiz glyph or timer) and the thin progress bar below it.
export default function QuizHeader({ quizSet, isTest, currentIndex, totalQuestions, remaining, onQuit }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useQuizStyles();
  const lowTime = remaining !== null && remaining <= 60;

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={onQuit} style={styles.quitButton} hitSlop={8} activeOpacity={0.6} accessibilityRole="button" accessibilityLabel={t('activeQuiz.quitTitle')}>
          <Ionicons name="close" size={18} color={colors.textSubtle} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle} numberOfLines={1}>{quizSet.title}</Text>
          <Text style={styles.headerProgress}>
            {quizSet.isPractice ? `${t('activeQuiz.practiceMode')} · ` : isTest ? `${t('activeQuiz.testMode')} · ` : ''}{currentIndex + 1} / {totalQuestions}
          </Text>
        </View>
        {remaining !== null ? (
          <View
            style={[styles.timerPill, lowTime && styles.timerPillLow]}
            accessible
            accessibilityLabel={t('activeQuiz.timeLeft', { time: formatClock(remaining) })}
          >
            <Ionicons name="timer-outline" size={14} color={lowTime ? colors.error : colors.primary} />
            <Text style={[styles.timerText, lowTime && styles.timerTextLow]}>{formatClock(remaining)}</Text>
          </View>
        ) : (
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{quizSet.icon}</Text>
          </View>
        )}
      </View>

      {/* Thin progress bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: `${((currentIndex) / totalQuestions) * 100}%`,
                backgroundColor: quizSet.color,
              },
            ]}
          />
        </View>
      </View>
    </>
  );
}
