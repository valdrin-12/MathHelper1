import React, { useEffect, useRef, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Button, Pill } from '../../shared/ui';
import Confetti from '../../shared/ui/Confetti';
import { getLevelInfo } from '../progress/progress';
import { formatNumber, parseNumericAnswer, findCommonMistake } from './quizAttempt';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CONFETTI_COUNT = 40;

// Confetti particle component
function ConfettiParticle({ delay, color, startX }) {
  const fallAnim = useRef(new Animated.Value(-20)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const swayAnim = useRef(new Animated.Value(0)).current;
  // Shape is picked once per particle so it does not flicker between renders
  const isSquare = useRef(Math.random() > 0.5).current;

  useEffect(() => {
    let animation = null;
    const timeout = setTimeout(() => {
      animation = Animated.parallel([
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
      ]);
      animation.start();
    }, delay);

    // Stop the infinite loops when the particle unmounts (modal closed)
    return () => {
      clearTimeout(timeout);
      if (animation) animation.stop();
    };
  }, [delay, fallAnim, opacityAnim, rotateAnim, swayAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const translateX = swayAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-15, 15],
  });

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

// XP gained in this attempt and the level progress after it
function XpCard({ xpSummary, styles, colors, t }) {
  const before = getLevelInfo(xpSummary.totalBefore);
  const after = getLevelInfo(xpSummary.totalAfter);
  const leveledUp = after.level > before.level;
  return (
    <View style={styles.xpCard} accessible accessibilityLabel={`${t('quizResult.xpGained', { xp: xpSummary.gained })}, ${t('progress.levelN', { level: after.level })}`}>
      <View style={styles.xpTopRow}>
        <View style={styles.xpIcon}>
          <Ionicons name="sparkles" size={18} color={colors.warningAccent} />
        </View>
        <View style={styles.flex1}>
          <Text style={styles.xpGained}>{t('quizResult.xpGained', { xp: xpSummary.gained })}</Text>
          {xpSummary.hintPenalty > 0 && (
            <Text style={styles.xpNote}>{t('quizResult.hintPenalty', { xp: xpSummary.hintPenalty })}</Text>
          )}
        </View>
        {leveledUp && <Pill icon="arrow-up-circle" label={t('quizResult.levelUp')} color={colors.success} filled />}
      </View>
      <View style={styles.xpLevelRow}>
        <Text style={styles.xpLevelText} numberOfLines={1}>
          {t('progress.levelN', { level: after.level })} · {t(after.nameKey)}
        </Text>
        <Text style={styles.xpLevelValue}>{after.xpIntoLevel}/{after.xpForLevel} XP</Text>
      </View>
      <View style={styles.xpBar}>
        <View style={[styles.xpBarFill, { width: `${Math.round(after.progress * 100)}%` }]} />
      </View>
      <Text style={styles.xpNote}>{t('progress.xpToNext', { xp: after.nextLevelAt - after.xp, level: after.level + 1 })}</Text>
    </View>
  );
}

export default function QuizResultModal({ visible, result, quizSet, onClose, onRetry, onPracticeMistakes, isPerfectScore, quizHistory = [], xpSummary, timedOut }) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'al').slice(0, 2);
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  if (!result || !quizSet) return null;

  const totalQuestions = quizSet.questions.length;
  const correctCount = result.filter(a => a?.correct).length;
  // Answers are matched by question id (a timed-out test fills unanswered questions as wrong)
  const answerById = new Map(result.map((a) => [a?.questionId, a]));
  const tfLabel = (v) => (v ? t('activeQuiz.trueLabel') : t('activeQuiz.falseLabel'));
  const unitOf = (q) => (q.unit ? ` ${q.unit}` : '');
  const givenText = (q, a) => {
    if (a?.given === null || a?.given === undefined) return null;
    if (q.type === 'input') {
      const v = parseNumericAnswer(a.given, q.unit, q.numberLang);
      return Number.isFinite(v) ? `${formatNumber(v, lang)}${unitOf(q)}` : String(a.given);
    }
    if (q.type === 'truefalse') return tfLabel(a.given);
    return q.options?.[a.given] ?? null;
  };
  const correctText = (q) => {
    if (q.type === 'input') return `${formatNumber(q.answer?.value, lang)}${unitOf(q)}`;
    if (q.type === 'truefalse') return tfLabel(q.correct);
    return q.options?.[q.correct];
  };
  const whyWrongFor = (q, a) => {
    if (a?.correct || a?.given === null || a?.given === undefined) return null;
    if (q.type === 'input') return findCommonMistake(q, parseNumericAnswer(a.given, q.unit, q.numberLang))?.why || null;
    if (q.type === 'truefalse') return q.whyWrong || null;
    return q.whyWrong?.[a.given] || null;
  };
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const wrongCount = totalQuestions - correctCount;
  const attemptPercentage = (attempt) => (
    typeof attempt?.percentage === 'number'
      ? attempt.percentage
      : attempt?.total > 0 ? Math.round((attempt.score / attempt.total) * 100) : 0
  );

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
            {quizSet.isPractice && (
              <View style={styles.practiceNote}>
                <Pill icon="barbell" label={t('quizResult.practiceNotCounted')} color={colors.primary} />
              </View>
            )}
            {!quizSet.isPractice && quizSet.mode === 'test' && (
              <View style={styles.practiceNote}>
                <Pill icon={timedOut ? 'alarm' : 'timer-outline'} label={timedOut ? t('quizResult.timeUp') : t('quizResult.testMode')} color={timedOut ? colors.error : colors.primary} />
              </View>
            )}

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

          {xpSummary && <XpCard xpSummary={xpSummary} styles={styles} colors={colors} t={t} />}

          {/* Review Answers */}
          <Text style={styles.reviewTitle}>{t('quizResult.reviewAnswers')}</Text>
          {quizSet.questions.map((question, index) => {
            const answer = answerById.get(question.id);
            const isCorrect = answer?.correct;
            const given = givenText(question, answer);
            const why = whyWrongFor(question, answer);
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
                      {given === null ? t('quizResult.notAnswered') : t('quizResult.yourAnswer', { answer: given })}
                    </Text>
                  </View>
                )}
                <View style={[styles.reviewAnswerRow, styles.reviewAnswerRowCorrect]}>
                  <Ionicons name="checkmark" size={15} color={colors.success} style={styles.reviewAnswerIcon} />
                  <Text style={styles.reviewCorrectAnswer}>
                    {t('quizResult.correctAnswer', { answer: correctText(question) })}
                  </Text>
                </View>
                {!!why && <Text style={styles.reviewWhyWrong}>{why}</Text>}
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
                      <View style={[styles.historyBarFill, { width: `${attemptPercentage(attempt)}%`, backgroundColor: attemptPercentage(attempt) >= 75 ? colors.success : attemptPercentage(attempt) >= 50 ? colors.warning : colors.error }]} />
                    </View>
                    <Text style={styles.historyScore}>{attemptPercentage(attempt)}%</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          <View style={{ height: 20 }} />
        </ScrollView>

        {/* Footer Buttons */}
        <View style={styles.footer}>
          {wrongCount > 0 && onPracticeMistakes && (
            <Button
              title={t('quizResult.practiceMistakes', { count: wrongCount })}
              icon="barbell"
              tone="warning"
              onPress={onPracticeMistakes}
              style={styles.practiceButton}
            />
          )}
          <View style={styles.footerRow}>
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
        </View>
        {/* 80 % or more: a short burst of confetti */}
        <Confetti trigger={visible && percentage >= 80 ? result : null} />
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
  reviewWhyWrong: {
    ...TYPOGRAPHY.footnote,
    color: colors.error,
    marginTop: SPACING.xs,
  },
  reviewExplanation: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSecondary,
    marginTop: SPACING.xs,
  },

  // XP
  flex1: {
    flex: 1,
  },
  xpCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginTop: SPACING.lg,
    gap: SPACING.sm,
  },
  xpTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  xpIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.warningLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpGained: {
    ...TYPOGRAPHY.h2,
    color: colors.text,
  },
  xpLevelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: SPACING.sm,
    marginTop: SPACING.xs,
  },
  xpLevelText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
    flex: 1,
  },
  xpLevelValue: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },
  xpBar: {
    height: 8,
    backgroundColor: colors.borderLight,
    borderRadius: 4,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: colors.warningAccent,
  },
  xpNote: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
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
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    gap: SPACING.sm + 2,
    backgroundColor: colors.surface,
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
  },
  footerRow: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  footerButton: {
    flex: 1,
  },
  practiceButton: {
    alignSelf: 'stretch',
  },
  practiceNote: {
    marginTop: SPACING.sm,
    alignItems: 'center',
  },
});
