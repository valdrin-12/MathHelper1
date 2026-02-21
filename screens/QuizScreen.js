import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useLocalizedQuizzes } from '../hooks/useLocalizedData';
import ActiveQuizModal from '../components/ActiveQuizModal';
import QuizResultModal from '../components/QuizResultModal';
import { useTranslation } from 'react-i18next';
import { useStats } from '../context/StatsContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme/constants';

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
  const { t } = useTranslation();
  const { quizSets, getDifficultyLabel, getDifficultyColor } = useLocalizedQuizzes();
  const { recordQuizCompleted, streak, stats } = useStats();
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [completedQuizSet, setCompletedQuizSet] = useState(null);
  const [lastScore, setLastScore] = useState(null);

  // Animations
  const streakPulse = useRef(new Animated.Value(1)).current;
  const challengeSlide = useRef(new Animated.Value(30)).current;
  const challengeOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Streak pulse animation
    if (streak > 0) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(streakPulse, { toValue: 1.1, duration: 800, useNativeDriver: true }),
          Animated.timing(streakPulse, { toValue: 1, duration: 800, useNativeDriver: true }),
        ])
      ).start();
    }
    // Challenge section slide in
    Animated.parallel([
      Animated.timing(challengeSlide, { toValue: 0, duration: 500, useNativeDriver: true }),
      Animated.timing(challengeOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, [streak, streakPulse, challengeSlide, challengeOpacity]);

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
  const getDailyChallenge = () => {
    if (quizSets.length === 0) return null;
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const index = dayOfYear % quizSets.length;
    return quizSets[index];
  };

  const dailyChallenge = getDailyChallenge();

  const handleStartQuiz = (quizSet) => {
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
    recordQuizCompleted(quizSet?.id, quizSet?.title, correct, total);
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

  const beginnerCount = quizSets.filter(q => q.difficulty === 'beginner').length;
  const intermediateCount = quizSets.filter(q => q.difficulty === 'intermediate').length;
  const advancedCount = quizSets.filter(q => q.difficulty === 'advanced').length;

  return (
    <View style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient
        colors={[COLORS.primary, COLORS.primarySoft, COLORS.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        {/* Title Row with Streak Badge */}
        <View style={styles.headerTitleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>{t('quiz.title')}</Text>
            <Text style={styles.headerSubtitle}>{t('quiz.quizzesAvailable', { count: quizSets.length })}</Text>
          </View>
          {/* Streak Badge */}
          {streak > 0 && (
            <Animated.View style={[styles.streakBadge, { transform: [{ scale: streakPulse }] }]}>
              <Ionicons name="flame" size={18} color="#FF6B35" />
              <Text style={styles.streakBadgeText}>{streak}</Text>
            </Animated.View>
          )}
        </View>

        {/* Glass Stats Row */}
        <View style={styles.glassStatsRow}>
          <View style={styles.glassStatCard}>
            <Ionicons name="star" size={16} color={COLORS.success} style={{ marginBottom: 4 }} />
            <Text style={styles.glassStatValue}>{beginnerCount}</Text>
            <Text style={styles.glassStatLabel}>{t('difficulty.beginner')}</Text>
            <View style={[styles.glassStatAccent, { backgroundColor: COLORS.success }]} />
          </View>
          <View style={styles.glassStatCard}>
            <Ionicons name="flash" size={16} color={COLORS.warning} style={{ marginBottom: 4 }} />
            <Text style={styles.glassStatValue}>{intermediateCount}</Text>
            <Text style={styles.glassStatLabel}>{t('difficulty.intermediate')}</Text>
            <View style={[styles.glassStatAccent, { backgroundColor: COLORS.warning }]} />
          </View>
          <View style={styles.glassStatCard}>
            <Ionicons name="flame" size={16} color={COLORS.error} style={{ marginBottom: 4 }} />
            <Text style={styles.glassStatValue}>{advancedCount}</Text>
            <Text style={styles.glassStatLabel}>{t('difficulty.advanced')}</Text>
            <View style={[styles.glassStatAccent, { backgroundColor: COLORS.error }]} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Challenge of the Day */}
        {dailyChallenge && (
          <Animated.View style={[
            styles.challengeSection,
            { transform: [{ translateY: challengeSlide }], opacity: challengeOpacity }
          ]}>
            <View style={styles.challengeHeader}>
              <View style={styles.challengeTitleRow}>
                <Ionicons name="trophy" size={20} color="#F59E0B" />
                <Text style={styles.challengeTitle}>{t('quiz.challengeOfDay')}</Text>
              </View>
              <View style={styles.challengeDailyBadge}>
                <Ionicons name="today" size={12} color={COLORS.primary} />
                <Text style={styles.challengeDailyText}>{t('quiz.daily')}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.challengeCard}
              onPress={() => handleStartQuiz(dailyChallenge)}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={['#FEF3C7', '#FDE68A', '#FCD34D']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.challengeGradient}
              >
                <View style={styles.challengeIconContainer}>
                  <Ionicons name="trophy" size={28} color="#D97706" />
                </View>
                <View style={styles.challengeInfo}>
                  <Text style={styles.challengeQuizTitle} numberOfLines={1}>{dailyChallenge.title}</Text>
                  <View style={styles.challengeMeta}>
                    <DifficultyIcon difficulty={dailyChallenge.difficulty} size={14} />
                    <Text style={styles.challengeMetaText}>{getDifficultyLabel(dailyChallenge.difficulty)}</Text>
                    <Text style={styles.challengeMetaDot}>·</Text>
                    <Ionicons name="help-circle-outline" size={14} color="#92400E" />
                    <Text style={styles.challengeMetaText}>
                      {t('quiz.questions', { count: dailyChallenge.questions.length })}
                    </Text>
                  </View>
                </View>
                <View style={styles.challengePlayButton}>
                  <Ionicons name="play" size={20} color="#FFFFFF" />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* Difficulty Filter */}
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>{t('quiz.filterByLevel')}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            {difficulties.map((d) => (
              <TouchableOpacity
                key={d}
                style={[
                  styles.filterChip,
                  selectedDifficulty === d && styles.filterChipActive,
                  selectedDifficulty === d && d !== 'all' && { backgroundColor: getDifficultyColor(d), borderColor: getDifficultyColor(d) },
                ]}
                onPress={() => setSelectedDifficulty(d)}
              >
                {d !== 'all' && (
                  <Ionicons
                    name={getDifficultyFilterIcon(d)}
                    size={14}
                    color={selectedDifficulty === d ? '#FFFFFF' : getDifficultyColor(d)}
                    style={{ marginRight: 4 }}
                  />
                )}
                <Text style={[
                  styles.filterChipText,
                  selectedDifficulty === d && styles.filterChipTextActive,
                ]}>
                  {getDifficultyFilterLabel(d)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quiz Cards - Glassmorphism */}
        <View style={styles.quizList}>
          <Text style={styles.sectionTitle}>
            {t('quiz.quizCount', { count: filteredQuizzes.length })}
          </Text>
          {filteredQuizzes.map((quizSet) => {
            const bestScore = getBestScore(quizSet.id);
            return (
              <TouchableOpacity
                key={quizSet.id}
                style={styles.glassQuizCard}
                onPress={() => handleStartQuiz(quizSet)}
                activeOpacity={0.85}
              >
                {/* Glass background layer */}
                <View style={styles.glassLayer} />

                {/* Colored accent bar */}
                <View style={[styles.quizCardAccentBar, { backgroundColor: quizSet.color }]} />

                <View style={styles.quizCardContent}>
                  {/* Icon + Title + Progress Ring */}
                  <View style={styles.quizCardHeader}>
                    <View style={[styles.glassIconContainer, { backgroundColor: quizSet.color + '18' }]}>
                      <DifficultyIcon difficulty={quizSet.difficulty} size={26} />
                    </View>
                    <View style={styles.quizTitleContainer}>
                      <Text style={styles.quizTitle} numberOfLines={2}>{quizSet.title}</Text>
                      <Text style={styles.quizCategory} numberOfLines={1}>{quizSet.category}</Text>
                    </View>
                    {/* Best Score Progress Ring */}
                    {bestScore !== null && (
                      <MiniProgressRing
                        progress={bestScore / 100}
                        color={bestScore >= 80 ? COLORS.success : bestScore >= 50 ? COLORS.warning : COLORS.error}
                      />
                    )}
                  </View>

                  {/* Difficulty Badge */}
                  <View style={styles.badgeRow}>
                    <View style={[styles.glassDifficultyBadge, { backgroundColor: getDifficultyColor(quizSet.difficulty) + '15' }]}>
                      <DifficultyIcon difficulty={quizSet.difficulty} size={12} />
                      <Text style={[styles.glassDifficultyText, { color: getDifficultyColor(quizSet.difficulty) }]}>
                        {getDifficultyLabel(quizSet.difficulty)}
                      </Text>
                    </View>
                    {bestScore !== null && (
                      <View style={[styles.bestScoreBadge, {
                        backgroundColor: bestScore === 100 ? COLORS.success + '15' : COLORS.primary + '10',
                      }]}>
                        <Ionicons
                          name={bestScore === 100 ? 'checkmark-circle' : 'stats-chart'}
                          size={12}
                          color={bestScore === 100 ? COLORS.success : COLORS.primary}
                        />
                        <Text style={[styles.bestScoreText, {
                          color: bestScore === 100 ? COLORS.success : COLORS.primary,
                        }]}>
                          {t('quiz.bestScore', { score: bestScore })}
                        </Text>
                      </View>
                    )}
                  </View>

                  {/* Meta */}
                  <View style={styles.quizMeta}>
                    <View style={styles.glassMetaItem}>
                      <Ionicons name="help-circle-outline" size={16} color={COLORS.textSubtle} />
                      <Text style={styles.metaText}>{t('quiz.questions', { count: quizSet.questions.length })}</Text>
                    </View>
                    <View style={styles.glassMetaItem}>
                      <Ionicons name="time-outline" size={16} color={COLORS.textSubtle} />
                      <Text style={styles.metaText}>{quizSet.duration}</Text>
                    </View>
                  </View>

                  {/* Start Button */}
                  <TouchableOpacity
                    style={styles.glassStartButton}
                    onPress={() => handleStartQuiz(quizSet)}
                    activeOpacity={0.85}
                  >
                    <LinearGradient
                      colors={[quizSet.color, quizSet.color + 'CC']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.startGradient}
                    >
                      <Text style={styles.startButtonText}>{t('quiz.startQuiz')}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ height: 100 }} />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Header Gradient
  headerGradient: {
    paddingHorizontal: SPACING.xl,
    paddingTop: 60,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    marginBottom: 20,
  },

  // Streak Badge
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    gap: 4,
  },
  streakBadgeText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // Glass Stats in Header
  glassStatsRow: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  glassStatCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    overflow: 'hidden',
  },
  glassStatValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  glassStatLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
    fontWeight: '600',
  },
  glassStatAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
  },

  // Challenge of the Day
  challengeSection: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  challengeTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  challengeTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: -0.3,
  },
  challengeDailyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.primaryBg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  challengeDailyText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary,
  },
  challengeCard: {
    borderRadius: 18,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  challengeGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 14,
  },
  challengeIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: 'rgba(217, 119, 6, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(217, 119, 6, 0.25)',
  },
  challengeInfo: {
    flex: 1,
  },
  challengeQuizTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#78350F',
    marginBottom: 4,
  },
  challengeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  challengeMetaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
  },
  challengeMetaDot: {
    fontSize: 12,
    color: '#92400E',
    marginHorizontal: 2,
  },
  challengePlayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D97706',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },

  // Filter Section
  filterSection: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.sm,
  },
  filterLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  filterScroll: {
    flexGrow: 0,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: COLORS.glassBackground,
    borderWidth: 1.5,
    borderColor: COLORS.glassBorder,
    marginRight: SPACING.sm + 2,
    ...SHADOWS.small,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    ...SHADOWS.primary,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textSecondary,
  },
  filterChipTextActive: {
    color: '#FFFFFF',
  },

  // Quiz List
  quizList: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.md,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: SPACING.lg,
    letterSpacing: -0.3,
  },

  // Glassmorphism Quiz Card
  glassQuizCard: {
    marginBottom: SPACING.lg,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: COLORS.glassBackground,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    ...SHADOWS.glass,
  },
  glassLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.glassBackgroundDark,
    borderRadius: 22,
  },
  quizCardAccentBar: {
    height: 4,
  },
  quizCardContent: {
    padding: 20,
  },
  quizCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: SPACING.md,
  },
  glassIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  quizTitleContainer: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 3,
  },
  quizCategory: {
    fontSize: 13,
    color: COLORS.textMuted,
    fontWeight: '500',
  },

  // Badge
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 14,
    gap: 8,
  },
  glassDifficultyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    gap: 6,
  },
  glassDifficultyText: {
    fontSize: 12,
    fontWeight: '700',
  },
  bestScoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    gap: 4,
  },
  bestScoreText: {
    fontSize: 12,
    fontWeight: '700',
  },

  // Meta
  quizMeta: {
    flexDirection: 'row',
    gap: SPACING.xl,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: COLORS.glassBackgroundDark,
    borderRadius: 12,
  },
  glassMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs + 2,
  },
  metaText: {
    fontSize: 13,
    color: COLORS.textSubtle,
    fontWeight: '600',
  },

  // Start Button
  glassStartButton: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  startGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 14,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
});
