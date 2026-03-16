import React, { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme/constants';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CONFETTI_COUNT = 40;
const CONFETTI_COLORS = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#F59E0B', '#8B5CF6', '#10B981', '#EF4444', '#3B82F6'];

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
  const particles = useRef(
    Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
      id: i,
      delay: Math.random() * 800,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      startX: Math.random() * SCREEN_WIDTH,
    }))
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

  if (!result || !quizSet) return null;

  const totalQuestions = quizSet.questions.length;
  const correctCount = result.filter(a => a.correct).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const getGradeInfo = () => {
    if (percentage >= 90) return { icon: 'trophy', iconColor: '#FFD700', label: t('quizResult.excellent'), color: '#FFD700', message: t('quizResult.excellentMsg') };
    if (percentage >= 75) return { icon: 'star', iconColor: COLORS.success, label: t('quizResult.veryGood'), color: COLORS.success, message: t('quizResult.veryGoodMsg') };
    if (percentage >= 60) return { icon: 'thumbs-up', iconColor: COLORS.info, label: t('quizResult.good'), color: COLORS.info, message: t('quizResult.goodMsg') };
    if (percentage >= 40) return { icon: 'book', iconColor: '#FF9800', label: t('quizResult.sufficient'), color: '#FF9800', message: t('quizResult.sufficientMsg') };
    return { icon: 'fitness', iconColor: COLORS.destructive, label: t('quizResult.keepGoing'), color: COLORS.destructive, message: t('quizResult.keepGoingMsg') };
  };

  const grade = getGradeInfo();

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={onClose}>
      <SafeAreaView style={styles.safeArea}>
        {/* Confetti for perfect score */}
        {isPerfectScore && <ConfettiAnimation />}

        {/* Result Header */}
        <View style={[styles.resultHeader, { backgroundColor: quizSet.color }]}>
          {isPerfectScore && (
            <View style={styles.perfectBadge}>
              <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" />
              <Text style={styles.perfectBadgeText}>{t('quizResult.perfectScore')}</Text>
            </View>
          )}
          <View style={styles.gradeIconContainer}>
            <Ionicons name={grade.icon} size={42} color={grade.iconColor} />
          </View>
          <Text style={styles.gradeLabel}>{grade.label}</Text>
          <Text style={styles.gradeMessage}>{grade.message}</Text>

          {/* Score Circle */}
          <View style={styles.scoreCircle}>
            <Text style={styles.scorePercentage}>{percentage}%</Text>
            <Text style={styles.scoreLabel}>{t('quizResult.score')}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.success} style={{ marginBottom: 4 }} />
            <Text style={styles.statValue}>{correctCount}</Text>
            <Text style={styles.statLabel}>{t('quizResult.correctLabel')}</Text>
          </View>
          <View style={[styles.statCard, styles.statCardCenter]}>
            <Ionicons name="close-circle" size={20} color={COLORS.destructive} style={{ marginBottom: 4 }} />
            <Text style={styles.statValue}>{totalQuestions - correctCount}</Text>
            <Text style={styles.statLabel}>{t('quizResult.wrongLabel')}</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="layers" size={20} color={COLORS.primary} style={{ marginBottom: 4 }} />
            <Text style={styles.statValue}>{totalQuestions}</Text>
            <Text style={styles.statLabel}>{t('quizResult.totalLabel')}</Text>
          </View>
        </View>

        {/* Review Answers */}
        <ScrollView style={styles.reviewContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.reviewTitle}>{t('quizResult.reviewAnswers')}</Text>
          {quizSet.questions.map((question, index) => {
            const answer = result[index];
            const isCorrect = answer?.correct;
            return (
              <View key={question.id} style={[styles.reviewCard, isCorrect ? styles.reviewCardCorrect : styles.reviewCardWrong]}>
                <View style={styles.reviewCardHeader}>
                  <View style={styles.reviewStatusContainer}>
                    <Ionicons
                      name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                      size={18}
                      color={isCorrect ? COLORS.success : COLORS.destructive}
                    />
                    <Text style={[styles.reviewStatus, isCorrect ? styles.reviewStatusCorrect : styles.reviewStatusWrong]}>
                      {isCorrect ? t('quizResult.correctStatus') : t('quizResult.wrongStatus')}
                    </Text>
                  </View>
                  <Text style={styles.reviewQuestionNum}>#{index + 1}</Text>
                </View>
                <Text style={styles.reviewQuestion}>{question.question}</Text>
                {!isCorrect && (
                  <Text style={styles.reviewYourAnswer}>
                    {t('quizResult.yourAnswer', { answer: question.options[answer?.selected] || '-' })}
                  </Text>
                )}
                <Text style={styles.reviewCorrectAnswer}>
                  {t('quizResult.correctAnswer', { answer: question.options[question.correct] })}
                </Text>
                <Text style={styles.reviewExplanation}>{question.explanation}</Text>
              </View>
            );
          })}
          {/* Quiz History */}
          {quizHistory.length > 1 && (
            <View style={styles.historySection}>
              <Text style={styles.historyTitle}>{t('quizResult.history')}</Text>
              {quizHistory.slice().reverse().slice(0, 5).map((attempt, i) => (
                <View key={i} style={styles.historyRow}>
                  <Text style={styles.historyAttempt}>#{quizHistory.length - i}</Text>
                  <View style={styles.historyBar}>
                    <View style={[styles.historyBarFill, { width: `${attempt.percentage}%`, backgroundColor: attempt.percentage >= 75 ? COLORS.success : attempt.percentage >= 50 ? COLORS.warning : COLORS.error }]} />
                  </View>
                  <Text style={styles.historyScore}>{attempt.percentage}%</Text>
                </View>
              ))}
            </View>
          )}

          <View style={{ height: 20 }} />
        </ScrollView>

        {/* Footer Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
            <Ionicons name="refresh" size={18} color={COLORS.textSecondary} style={{ marginRight: 6 }} />
            <Text style={styles.retryButtonText}>{t('quizResult.retry')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.closeButton, { backgroundColor: quizSet.color }]} onPress={onClose}>
            <Ionicons name="checkmark" size={18} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.closeButtonText}>{t('quizResult.goBack')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
  },
  resultHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: SPACING.xl,
  },
  perfectBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  perfectBadgeText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  gradeIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  gradeLabel: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.textLight,
    marginBottom: 6,
  },
  gradeMessage: {
    fontSize: 14,
    color: COLORS.textLight,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  scorePercentage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  scoreLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    opacity: 0.9,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.xl,
    marginTop: -15,
    borderRadius: 15,
    ...SHADOWS.medium,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  statCardCenter: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.borderLight,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  reviewContainer: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    marginTop: SPACING.xl,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 15,
  },
  reviewCard: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    borderLeftWidth: 4,
  },
  reviewCardCorrect: {
    borderLeftColor: COLORS.success,
  },
  reviewCardWrong: {
    borderLeftColor: COLORS.destructive,
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
    fontSize: 13,
    fontWeight: 'bold',
  },
  reviewStatusCorrect: {
    color: COLORS.success,
  },
  reviewStatusWrong: {
    color: COLORS.destructive,
  },
  reviewQuestionNum: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  reviewQuestion: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
    lineHeight: 22,
  },
  reviewYourAnswer: {
    fontSize: 13,
    color: COLORS.destructive,
    marginBottom: SPACING.xs,
  },
  reviewCorrectAnswer: {
    fontSize: 13,
    color: COLORS.success,
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  reviewExplanation: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 19,
    backgroundColor: COLORS.backgroundAlt,
    padding: 10,
    borderRadius: BORDER_RADIUS.sm,
  },
  footer: {
    flexDirection: 'row',
    padding: SPACING.xl,
    paddingBottom: 10,
    gap: SPACING.md,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
  },
  retryButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.borderLight,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  closeButton: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  historySection: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.lg,
    backgroundColor: COLORS.backgroundAlt,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  historyTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  historyAttempt: {
    fontSize: 12,
    color: COLORS.textMuted,
    fontWeight: '600',
    width: 28,
  },
  historyBar: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  historyBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  historyScore: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text,
    width: 36,
    textAlign: 'right',
  },
});
