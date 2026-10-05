import { useState, useEffect, useRef, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import { useLocalizedQuizzes } from '../hooks/useLocalizedData';
import { FREE_QUIZ_IDS } from '../data/quizData';
import { isPremiumActive } from '../utils/isPremium';
import ActiveQuizModal from '../components/ActiveQuizModal';
import QuizResultModal from '../components/QuizResultModal';
import PremiumModal from '../components/PremiumModal';
import { useTranslation } from 'react-i18next';
import { useStats } from '../context/StatsContext';
import { useUser } from '../context/UserContext';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { ScreenHeader, Chip, Pill, IconBadge, Button } from '../components/ui';
import WebContainer from '../components/WebContainer';
import PressableCard from '../components/PressableCard';
import { useResponsive } from '../utils/responsive';

// Mini circular progress for quiz cards
function MiniProgressRing({ progress, size = 44, strokeWidth = 3, color }) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {/* Background ring */}
      <View style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: strokeWidth,
        borderColor: color + '20',
      }} />
      {/* Progress ring - use border trick for partial circle */}
      <View style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: strokeWidth,
        borderColor: color,
        borderRightColor: progress >= 0.75 ? color : 'transparent',
        borderBottomColor: progress >= 0.5 ? color : 'transparent',
        borderLeftColor: progress >= 0.25 ? color : 'transparent',
        transform: [{ rotate: '-90deg' }],
      }} />
      <Text style={{ fontSize: 11, fontWeight: '800', color }}>{Math.round(progress * 100)}%</Text>
    </View>
  );
}

// Difficulty icon component
function DifficultyIcon({ difficulty, size = 16 }) {
  const iconMap = {
    beginner: { name: 'star', color: COLORS.success },
    intermediate: { name: 'flash', color: COLORS.warning },
    advanced: { name: 'flame', color: COLORS.error },
  };
  const config = iconMap[difficulty] || iconMap.beginner;
  return <Ionicons name={config.name} size={size} color={config.color} />;
}

export default function QuizScreen() {
  const { isWeb, isDesktop } = useResponsive();
  const { t } = useTranslation();
  const { quizSets, getDifficultyLabel, getDifficultyColor } = useLocalizedQuizzes();
  const { recordQuizCompleted, streak, stats } = useStats();
  const { user } = useUser();
  const isPremium = isPremiumActive(user);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [completedQuizSet, setCompletedQuizSet] = useState(null);
  const [lastScore, setLastScore] = useState(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [challengeCompletedToday, setChallengeCompletedToday] = useState(false);

  const todayDateKey = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    AsyncStorage.getItem(`@mathhelper_challenge_${todayDateKey}`)
      .then(val => { if (val === 'done') setChallengeCompletedToday(true); })
      .catch(() => {});
  }, [todayDateKey]);

  // Animations
  const challengeSlide = useRef(new Animated.Value(30)).current;
  const challengeOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Challenge section slide in
    Animated.parallel([
      Animated.timing(challengeSlide, { toValue: 0, duration: 500, useNativeDriver: true }),
      Animated.timing(challengeOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, [challengeSlide, challengeOpacity]);

  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredQuizzes = selectedDifficulty === 'all'
    ? quizSets
    : quizSets.filter(q => q.difficulty === selectedDifficulty);

  // Get best score for a quiz from completed quizzes
  const getBestScore = (quizId) => {
    const completed = stats?.completedQuizzes || [];
    const quizResults = completed.filter(q => q.quizId === quizId);
    if (quizResults.length === 0) return null;
    return Math.max(...quizResults.map(q => Math.round((q.score / q.total) * 100)));
  };

  // Get daily challenge quiz (deterministic based on date)
  // Uses days-since-epoch so each calendar date maps to a unique index,
  // avoiding the leap-year collision of the old dayOfYear approach.
  const getDailyChallenge = () => {
    const pool = isPremium ? quizSets : quizSets.filter(q => FREE_QUIZ_IDS.includes(q.id));
    if (pool.length === 0) return null;
    const daysSinceEpoch = Math.floor(Date.now() / 86400000);
    return pool[daysSinceEpoch % pool.length];
  };

  const dailyChallenge = getDailyChallenge();

  const isQuizLocked = (quizId) => !isPremium && !FREE_QUIZ_IDS.includes(quizId);

  const handleStartQuiz = (quizSet) => {
    if (isQuizLocked(quizSet.id)) {
      setShowPremiumModal(true);
      return;
    }
    setActiveQuiz(quizSet);
    setShowQuiz(true);
  };

  const handleQuizComplete = (answers, quizSet) => {
    setQuizResult(answers);
    setCompletedQuizSet(quizSet);
    setShowQuiz(false);
    setShowResult(true);
    const correct = answers ? answers.filter(a => a?.isCorrect).length : 0;
    const total = quizSet?.questions?.length || 0;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    setLastScore(percentage);
    // Guard: only record if we have a valid quiz reference
    if (quizSet?.id && quizSet?.title) {
      recordQuizCompleted(quizSet.id, quizSet.title, correct, total);
    }
    // Mark daily challenge as completed
    if (dailyChallenge && quizSet?.id === dailyChallenge.id) {
      AsyncStorage.setItem(`@mathhelper_challenge_${todayDateKey}`, 'done')
        .then(() => setChallengeCompletedToday(true))
        .catch(() => {});
    }
  };

  const handleRetryQuiz = () => {
    setShowResult(false);
    setQuizResult(null);
    setShowQuiz(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
    setQuizResult(null);
    setCompletedQuizSet(null);
    setActiveQuiz(null);
    setLastScore(null);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
    setActiveQuiz(null);
  };

  const getDifficultyFilterLabel = (d) => {
    if (d === 'all') return t('common.all');
    const labels = { beginner: t('difficulty.beginner'), intermediate: t('difficulty.intermediate'), advanced: t('difficulty.advanced') };
    return labels[d] || getDifficultyLabel(d);
  };

  const getDifficultyFilterIcon = (d) => {
    const icons = { beginner: 'star', intermediate: 'flash', advanced: 'flame' };
    return icons[d] || null;
  };

  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <WebContainer>
        <ScreenHeader
          title={t('quiz.title')}
          subtitle={t('quiz.quizzesAvailable', { count: quizSets.length })}
          right={streak > 0 ? (
            <View style={styles.streakChip}>
              <Ionicons name="flame" size={15} color={colors.secondary} />
              <Text style={styles.streakText}>{streak}</Text>
            </View>
          ) : null}
        />

        {/* Challenge of the Day */}
        {dailyChallenge && (
          <Animated.View style={{ transform: [{ translateY: challengeSlide }], opacity: challengeOpacity }}>
            <PressableCard style={styles.challengeCard} onPress={() => handleStartQuiz(dailyChallenge)}>
              <View style={styles.challengeHeader}>
                <Text style={styles.challengeEyebrow}>{t('quiz.challengeOfDay')}</Text>
                {challengeCompletedToday ? (
                  <Pill icon="checkmark-circle" label={t('quiz.completed')} color={colors.success} />
                ) : (
                  <Pill icon="today" label={t('quiz.daily')} color={colors.primary} />
                )}
              </View>
              <View style={styles.challengeBody}>
                <IconBadge name="trophy" color={colors.secondary} size={44} />
                <View style={styles.challengeInfo}>
                  <Text style={styles.challengeTitle} numberOfLines={1}>{dailyChallenge.title}</Text>
                  <View style={styles.metaRow}>
                    <Text style={styles.metaText}>
                      {getDifficultyLabel(dailyChallenge.difficulty)}  ·  {t('quiz.questions', { count: dailyChallenge.questions.length })}
                    </Text>
                  </View>
                </View>
                <View style={styles.playButton}>
                  <Ionicons name="play" size={18} color="#FFFFFF" />
                </View>
              </View>
            </PressableCard>
          </Animated.View>
        )}

        {/* Difficulty Filter */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterContent}>
          {difficulties.map((d) => (
            <Chip
              key={d}
              icon={d === 'all' ? 'layers' : getDifficultyFilterIcon(d)}
              label={getDifficultyFilterLabel(d)}
              color={d === 'all' ? undefined : getDifficultyColor(d)}
              active={selectedDifficulty === d}
              onPress={() => setSelectedDifficulty(d)}
            />
          ))}
        </ScrollView>

        <Text style={styles.sectionLabel}>{t('quiz.quizCount', { count: filteredQuizzes.length })}</Text>

        {/* Quiz Cards */}
        <View style={[styles.quizList, isDesktop && styles.quizListDesktop]}>
          {filteredQuizzes.map((quizSet) => {
            const bestScore = getBestScore(quizSet.id);
            const locked = isQuizLocked(quizSet.id);
            return (
              <PressableCard
                key={quizSet.id}
                style={[styles.quizCard, isDesktop && styles.quizCardDesktop]}
                onPress={() => handleStartQuiz(quizSet)}
              >
                <View style={styles.quizHeader}>
                  <View style={[styles.quizIconBox, { backgroundColor: quizSet.color + '1F' }]}>
                    {locked ? (
                      <Ionicons name="lock-closed" size={22} color={quizSet.color} />
                    ) : (
                      <DifficultyIcon difficulty={quizSet.difficulty} size={22} />
                    )}
                  </View>
                  <View style={styles.quizTitleContainer}>
                    <Text style={styles.quizTitle} numberOfLines={2}>{quizSet.title}</Text>
                    <Text style={styles.quizCategory} numberOfLines={1}>{quizSet.category}</Text>
                  </View>
                  {locked ? (
                    <Pill icon="lock-closed" label="PRO" color={colors.secondary} filled />
                  ) : bestScore !== null ? (
                    <MiniProgressRing
                      progress={bestScore / 100}
                      color={bestScore >= 80 ? colors.success : bestScore >= 50 ? colors.warning : colors.error}
                    />
                  ) : null}
                </View>

                <View style={styles.quizMeta}>
                  <Text style={[styles.metaText, { color: getDifficultyColor(quizSet.difficulty) }]}>
                    {getDifficultyLabel(quizSet.difficulty)}
                  </Text>
                  <Text style={styles.metaText}>
                    {'  ·  '}{t('quiz.questions', { count: quizSet.questions.length })}{'  ·  '}{quizSet.duration}
                  </Text>
                </View>
                {!locked && bestScore !== null && (
                  <View style={styles.bestScoreRow}>
                    <Pill
                      icon={bestScore === 100 ? 'checkmark-circle' : 'stats-chart'}
                      label={t('quiz.bestScore', { score: bestScore })}
                      color={bestScore === 100 ? colors.success : colors.primary}
                    />
                  </View>
                )}

                <Button
                  style={styles.startButton}
                  variant={locked ? 'filled' : 'tinted'}
                  tone={locked ? 'warning' : 'primary'}
                  icon={locked ? 'lock-closed' : undefined}
                  title={locked ? t('premium.unlockPro') : t('quiz.startQuiz')}
                  onPress={() => handleStartQuiz(quizSet)}
                />
              </PressableCard>
            );
          })}
        </View>

        <View style={{ height: isWeb ? 20 : 100 }} />
        </WebContainer>
      </ScrollView>

      {/* Active Quiz Modal */}
      <ActiveQuizModal
        visible={showQuiz}
        quizSet={activeQuiz}
        onClose={handleCloseQuiz}
        onComplete={handleQuizComplete}
      />

      {/* Quiz Result Modal */}
      <QuizResultModal
        visible={showResult}
        result={quizResult}
        quizSet={completedQuizSet}
        onClose={handleCloseResult}
        onRetry={handleRetryQuiz}
        isPerfectScore={lastScore === 100}
        quizHistory={(stats?.completedQuizzes || []).filter(q => q.quizId === completedQuizSet?.id)}
      />

      {/* Premium Upsell Modal */}
      <PremiumModal
        visible={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
      />
    </View>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  streakChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.warningLight,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 1,
    borderRadius: BORDER_RADIUS.round,
  },
  streakText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.secondary,
  },

  // Challenge
  challengeCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  challengeEyebrow: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: colors.textSubtle,
  },
  challengeBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  challengeInfo: {
    flex: 1,
    marginHorizontal: SPACING.md,
  },
  challengeTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    marginBottom: 2,
  },
  playButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    ...TYPOGRAPHY.footnote,
    color: colors.textMuted,
  },

  // Filters
  filterScroll: {
    flexGrow: 0,
    marginTop: SPACING.xl,
  },
  filterContent: {
    paddingHorizontal: SPACING.lg,
  },
  sectionLabel: {
    ...TYPOGRAPHY.footnote,
    textTransform: 'uppercase',
    color: colors.textSubtle,
    marginHorizontal: SPACING.xl,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },

  // Quiz cards
  quizList: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
  quizListDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quizCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
  },
  quizCardDesktop: {
    flexBasis: '48%',
    flexGrow: 0,
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizIconBox: {
    width: 44,
    height: 44,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  quizTitleContainer: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  quizTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  quizCategory: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: 1,
  },
  quizMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: SPACING.md,
  },
  bestScoreRow: {
    marginTop: SPACING.sm,
  },
  startButton: {
    marginTop: SPACING.md,
    minHeight: 44,
  },
});
