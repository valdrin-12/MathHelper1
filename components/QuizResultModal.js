import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function QuizResultModal({ visible, result, quizSet, onClose, onRetry }) {
  const { t } = useTranslation();

  if (!result || !quizSet) return null;

  const totalQuestions = quizSet.questions.length;
  const correctCount = result.filter(a => a.correct).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const getGradeInfo = () => {
    if (percentage >= 90) return { emoji: '\u{1F3C6}', label: t('quizResult.excellent'), color: '#FFD700', message: t('quizResult.excellentMsg') };
    if (percentage >= 75) return { emoji: '\u{1F31F}', label: t('quizResult.veryGood'), color: COLORS.success, message: t('quizResult.veryGoodMsg') };
    if (percentage >= 60) return { emoji: '\u{1F44D}', label: t('quizResult.good'), color: COLORS.info, message: t('quizResult.goodMsg') };
    if (percentage >= 40) return { emoji: '\u{1F4DA}', label: t('quizResult.sufficient'), color: '#FF9800', message: t('quizResult.sufficientMsg') };
    return { emoji: '\u{1F4AA}', label: t('quizResult.keepGoing'), color: COLORS.destructive, message: t('quizResult.keepGoingMsg') };
  };

  const grade = getGradeInfo();

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={onClose}>
      <SafeAreaView style={styles.safeArea}>
        {/* Result Header */}
        <View style={[styles.resultHeader, { backgroundColor: quizSet.color }]}>
          <Text style={styles.gradeEmoji}>{grade.emoji}</Text>
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
            <Text style={styles.statValue}>{correctCount}</Text>
            <Text style={styles.statLabel}>{t('quizResult.correctLabel')}</Text>
          </View>
          <View style={[styles.statCard, styles.statCardCenter]}>
            <Text style={styles.statValue}>{totalQuestions - correctCount}</Text>
            <Text style={styles.statLabel}>{t('quizResult.wrongLabel')}</Text>
          </View>
          <View style={styles.statCard}>
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
                  <Text style={[styles.reviewStatus, isCorrect ? styles.reviewStatusCorrect : styles.reviewStatusWrong]}>
                    {isCorrect ? t('quizResult.correctStatus') : t('quizResult.wrongStatus')}
                  </Text>
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
          <View style={{ height: 20 }} />
        </ScrollView>

        {/* Footer Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
            <Text style={styles.retryButtonText}>{'\u{1F504}'} {t('quizResult.retry')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.closeButton, { backgroundColor: quizSet.color }]} onPress={onClose}>
            <Text style={styles.closeButtonText}>{'\u2713'} {t('quizResult.goBack')}</Text>
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
  gradeEmoji: {
    fontSize: 50,
    marginBottom: SPACING.sm,
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
    backgroundColor: COLORS.borderLight,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 15,
    alignItems: 'center',
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  closeButton: {
    flex: 1,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
});
