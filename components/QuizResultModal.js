import React, { useEffect, useRef, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { Button, Pill } from './ui';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CONFETTI_COUNT = 40;

// Confetti particle component
function ConfettiParticle({ delay, color, startX }) {
  const fallAnim = useRef(new Animated.Value(-20)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const swayAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fallAnim, {
          toValue: SCREEN_HEIGHT + 50,
          duration: 2500 + Math.random() * 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 3000,
          delay: 1000,
          useNativeDriver: true,
        }),
        Animated.loop(
          Animated.sequence([
            Animated.timing(rotateAnim, { toValue: 1, duration: 400 + Math.random() * 400, useNativeDriver: true }),
            Animated.timing(rotateAnim, { toValue: 0, duration: 400 + Math.random() * 400, useNativeDriver: true }),
          ])
        ),
        Animated.loop(
          Animated.sequence([
            Animated.timing(swayAnim, { toValue: 1, duration: 500 + Math.random() * 300, useNativeDriver: true }),
            Animated.timing(swayAnim, { toValue: -1, duration: 500 + Math.random() * 300, useNativeDriver: true }),
          ])
        ),
      ]).start();
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, fallAnim, opacityAnim, rotateAnim, swayAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const translateX = swayAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-15, 15],
  });

  const isSquare = Math.random() > 0.5;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: startX,
        top: 0,
        width: isSquare ? 10 : 8,
        height: isSquare ? 10 : 14,
        borderRadius: isSquare ? 2 : 4,
        backgroundColor: color,
        opacity: opacityAnim,
        transform: [
          { translateY: fallAnim },
          { translateX },
          { rotate },
        ],
      }}
    />
  );
}

// Confetti overlay
function ConfettiAnimation() {
  const { colors } = useTheme();
  const particles = useRef(
    (() => {
      const palette = [colors.warningAccent, colors.error, colors.accent, colors.primary, colors.secondary, colors.purple, colors.success];
      return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
        id: i,
        delay: Math.random() * 800,
        color: palette[Math.floor(Math.random() * palette.length)],
        startX: Math.random() * SCREEN_WIDTH,
      }));
    })()
  ).current;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {particles.map((p) => (
        <ConfettiParticle key={p.id} delay={p.delay} color={p.color} startX={p.startX} />
      ))}
    </View>
  );
}

export default function QuizResultModal({ visible, result, quizSet, onClose, onRetry, isPerfectScore, quizHistory = [] }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  if (!result || !quizSet) return null;

  const totalQuestions = quizSet.questions.length;
  const correctCount = result.filter(a => a.correct).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const getGradeInfo = () => {
    if (percentage >= 90) return { icon: 'trophy', iconColor: colors.warningAccent, label: t('quizResult.excellent'), color: colors.warningAccent, message: t('quizResult.excellentMsg') };
    if (percentage >= 75) return { icon: 'star', iconColor: colors.success, label: t('quizResult.veryGood'), color: colors.success, message: t('quizResult.veryGoodMsg') };
    if (percentage >= 60) return { icon: 'thumbs-up', iconColor: colors.info, label: t('quizResult.good'), color: colors.info, message: t('quizResult.goodMsg') };
    if (percentage >= 40) return { icon: 'book', iconColor: colors.warning, label: t('quizResult.sufficient'), color: colors.warning, message: t('quizResult.sufficientMsg') };
    return { icon: 'fitness', iconColor: colors.destructive, label: t('quizResult.keepGoing'), color: colors.destructive, message: t('quizResult.keepGoingMsg') };
  };

  const grade = getGradeInfo();

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={onClose}>
      <SafeAreaView style={styles.safeArea}>
        {/* Confetti for perfect score */}
        {isPerfectScore && <ConfettiAnimation />}

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Result summary */}
          <View style={styles.resultHeader}>
            {isPerfectScore && (
              <View style={styles.perfectBadge}>
                <Pill icon="checkmark-circle" label={t('quizResult.perfectScore')} color={colors.success} filled />
              </View>
            )}
            <View style={[styles.gradeIconContainer, { backgroundColor: grade.color + '1F' }]}>
              <Ionicons name={grade.icon} size={36} color={grade.iconColor} />
            </View>
            <Text style={styles.gradeLabel}>{grade.label}</Text>
            <Text style={styles.gradeMessage}>{grade.message}</Text>

            {/* Score Circle */}
            <View style={[styles.scoreCircle, { borderColor: quizSet.color }]}>
              <Text style={styles.scorePercentage}>{percentage}%</Text>
              <Text style={styles.scoreLabel}>{t('quizResult.score')}</Text>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Ionicons name="checkmark-circle" size={20} color={colors.success} style={{ marginBottom: 4 }} />
              <Text style={styles.statValue}>{correctCount}</Text>
              <Text style={styles.statLabel}>{t('quizResult.correctLabel')}</Text>
            </View>
            <View style={[styles.statCard, styles.statCardCenter]}>
              <Ionicons name="close-circle" size={20} color={colors.error} style={{ marginBottom: 4 }} />
              <Text style={styles.statValue}>{totalQuestions - correctCount}</Text>
              <Text style={styles.statLabel}>{t('quizResult.wrongLabel')}</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="layers" size={20} color={colors.primary} style={{ marginBottom: 4 }} />
              <Text style={styles.statValue}>{totalQuestions}</Text>
              <Text style={styles.statLabel}>{t('quizResult.totalLabel')}</Text>
            </View>
          </View>

          {/* Review Answers */}
          <Text style={styles.reviewTitle}>{t('quizResult.reviewAnswers')}</Text>
          {quizSet.questions.map((question, index) => {
            const answer = result[index];
            const isCorrect = answer?.correct;
            return (
              <View key={question.id} style={styles.reviewCard}>
                <View style={styles.reviewCardHeader}>
                  <View style={styles.reviewStatusContainer}>
                    <Ionicons
                      name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                      size={18}
                      color={isCorrect ? colors.success : colors.error}
                    />
                    <Text style={[styles.reviewStatus, isCorrect ? styles.reviewStatusCorrect : styles.reviewStatusWrong]}>
                      {isCorrect ? t('quizResult.correctStatus') : t('quizResult.wrongStatus')}
                    </Text>
                  </View>
                  <Text style={styles.reviewQuestionNum}>#{index + 1}</Text>
                </View>
                <Text style={styles.reviewQuestion}>{question.question}</Text>
                {!isCorrect && (
                  <View style={[styles.reviewAnswerRow, styles.reviewAnswerRowWrong]}>
                    <Ionicons name="close" size={15} color={colors.error} style={styles.reviewAnswerIcon} />
                    <Text style={styles.reviewYourAnswer}>
                      {t('quizResult.yourAnswer', { answer: question.options[answer?.selected] || '-' })}
                    </Text>
                  </View>
                )}
                <View style={[styles.reviewAnswerRow, styles.reviewAnswerRowCorrect]}>
                  <Ionicons name="checkmark" size={15} color={colors.success} style={styles.reviewAnswerIcon} />
                  <Text style={styles.reviewCorrectAnswer}>
                    {t('quizResult.correctAnswer', { answer: question.options[question.correct] })}
                  </Text>
                </View>
                <Text style={styles.reviewExplanation}>{question.explanation}</Text>
              </View>
            );
          })}
          {/* Quiz History */}
          {quizHistory.length > 1 && (
            <View style={styles.historySection}>
              <Text style={styles.historyTitle}>{t('quizResult.history')}</Text>
              <View style={styles.historyCard}>
                {quizHistory.slice().reverse().slice(0, 5).map((attempt, i) => (
                  <View key={i} style={styles.historyRow}>
                    <Text style={styles.historyAttempt}>#{quizHistory.length - i}</Text>
                    <View style={styles.historyBar}>
                      <View style={[styles.historyBarFill, { width: `${attempt.percentage}%`, backgroundColor: attempt.percentage >= 75 ? colors.success : attempt.percentage >= 50 ? colors.warning : colors.error }]} />
                    </View>
                    <Text style={styles.historyScore}>{attempt.percentage}%</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          <View style={{ height: 20 }} />
        </ScrollView>

        {/* Footer Buttons */}
        <View style={styles.footer}>
          <Button
            title={t('quizResult.retry')}
            icon="refresh"
            variant="tinted"
            onPress={onRetry}
            style={styles.footerButton}
          />
          <Button
            title={t('quizResult.goBack')}
            icon="checkmark"
            onPress={onClose}
            style={[styles.footerButton, { backgroundColor: quizSet.color }]}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const HAIRLINE = StyleSheet.hairlineWidth;

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
  },

  // Summary
  resultHeader: {
    alignItems: 'center',
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  perfectBadge: {
    marginBottom: SPACING.md,
  },
  gradeIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  gradeLabel: {
    ...TYPOGRAPHY.h1,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  gradeMessage: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  scoreCircle: {
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 6,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scorePercentage: {
    ...TYPOGRAPHY.h1,
    color: colors.text,
  },
  scoreLabel: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  statCardCenter: {
    borderLeftWidth: HAIRLINE,
    borderRightWidth: HAIRLINE,
    borderColor: colors.border,
  },
  statValue: {
    ...TYPOGRAPHY.h2,
    color: colors.text,
  },
  statLabel: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: 2,
  },

  // Review
  reviewTitle: {
    ...TYPOGRAPHY.h3,
    fontWeight: '700',
    color: colors.text,
    marginTop: SPACING.xxl,
    marginBottom: SPACING.md,
  },
  reviewCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  reviewCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  reviewStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  reviewStatus: {
    ...TYPOGRAPHY.captionBold,
  },
  reviewStatusCorrect: {
    color: colors.success,
  },
  reviewStatusWrong: {
    color: colors.error,
  },
  reviewQuestionNum: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },
  reviewQuestion: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
    marginBottom: SPACING.sm + 2,
  },
  reviewAnswerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: BORDER_RADIUS.xs,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.sm - 2,
    marginBottom: SPACING.xs + 2,
  },
  reviewAnswerRowWrong: {
    backgroundColor: colors.errorLight,
  },
  reviewAnswerRowCorrect: {
    backgroundColor: colors.successLight,
  },
  reviewAnswerIcon: {
    marginRight: SPACING.xs + 2,
    marginTop: 1,
  },
  reviewYourAnswer: {
    ...TYPOGRAPHY.footnote,
    color: colors.text,
    flex: 1,
  },
  reviewCorrectAnswer: {
    ...TYPOGRAPHY.captionBold,
    color: colors.text,
    flex: 1,
  },
  reviewExplanation: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSecondary,
    marginTop: SPACING.xs,
  },

  // History
  historySection: {
    marginTop: SPACING.lg,
  },
  historyTitle: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textTransform: 'uppercase',
    marginLeft: SPACING.lg,
    marginBottom: SPACING.sm - 2,
  },
  historyCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xs,
  },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    gap: SPACING.sm,
  },
  historyAttempt: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.textSubtle,
    width: 28,
  },
  historyBar: {
    flex: 1,
    height: 6,
    backgroundColor: colors.borderLight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  historyBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  historyScore: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.text,
    width: 40,
    textAlign: 'right',
  },

  // Footer
  footer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    gap: SPACING.md,
    backgroundColor: colors.surface,
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
  },
  footerButton: {
    flex: 1,
  },
});
