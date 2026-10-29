import { useState, useEffect, useRef, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useLocalizedQuizzes } from '../../content/useLocalizedData';
import { isQuizFree } from '../../content/quizData';
import { sectionsByGrade } from '../../content/grades/filterByGrade';
import useGradeFilter from '../../shared/grade/useGradeFilter';
import GradeSelector, { GradeSectionHeader } from '../../shared/grade/GradeSelector';
import { createQuizAttempt, parseDurationSeconds } from './quizAttempt';
import { useProgress, computeAttemptXp, hintCost } from '../progress/progress';
import { isPremiumActive } from '../premium/isPremium';
import ActiveQuizModal from './ActiveQuizModal';
import QuizResultModal from './QuizResultModal';
import PremiumModal from '../premium/PremiumModal';
import { useTranslation } from 'react-i18next';
import { useStats } from '../progress/StatsContext';
import { useUser } from '../auth/UserContext';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';
import { ScreenHeader, Chip, Pill, IconBadge, Button, EmptyState } from '../../shared/ui';
import WebContainer from '../../shared/ui/WebContainer';
import PressableCard from '../../shared/ui/PressableCard';
import { useResponsive } from '../../shared/utils/responsive';
import ProgressRing from '../../shared/ui/ProgressRing';
import { getUserScopedKey, CHALLENGE_KEY_PREFIX } from '../auth/userStorage';
import { getLocalDateKey } from '../../shared/utils/localDate';

// Mini circular progress for quiz cards (best score)
function MiniProgressRing({ progress, size = 44, strokeWidth = 3, color }) {
  return (
    <ProgressRing progress={progress} size={size} strokeWidth={strokeWidth} color={color}>
      <Text style={{ fontSize: 11, fontWeight: '800', color }}>{Math.round(progress * 100)}%</Text>
    </ProgressRing>
  );
}

// Last chosen quiz mode ('practice' | 'test'), a device preference
const QUIZ_MODE_KEY = '@mathhelper_quiz_mode';

// Bottom sheet to pick Practice or Test before a quiz starts
function ModeSheet({ quizSet, mode, onChangeMode, onStart, onCancel, colors, styles, t }) {
  const minutes = quizSet ? Math.max(1, Math.round(parseDurationSeconds(quizSet.duration, quizSet.questions.length) / 60)) : 0;
  const options = [
    { value: 'practice', icon: 'school', title: t('quiz.modePractice'), desc: t('quiz.modePracticeDesc', { xp: hintCost('practice') }) },
    { value: 'test', icon: 'timer', title: t('quiz.modeTest'), desc: t('quiz.modeTestDesc', { minutes, xp: hintCost('test') }) },
  ];
  return (
    <Modal visible={!!quizSet} transparent animationType="slide" onRequestClose={onCancel}>
      <View style={styles.sheetOverlay}>
        <TouchableOpacity style={StyleSheet.absoluteFill} onPress={onCancel} accessibilityRole="button" accessibilityLabel={t('common.cancel')} />
        <View style={styles.sheet}>
          <View style={styles.sheetGrabber} />
          <Text style={styles.sheetTitle}>{t('quiz.chooseMode')}</Text>
          {!!quizSet && <Text style={styles.sheetSubtitle} numberOfLines={1}>{quizSet.title}</Text>}
          <View style={styles.sheetOptions}>
            {options.map((o) => {
              const active = mode === o.value;
              return (
                <TouchableOpacity
                  key={o.value}
                  style={[styles.modeOption, active && styles.modeOptionActive]}
                  onPress={() => onChangeMode(o.value)}
                  activeOpacity={0.7}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: active, checked: active }}
                  accessibilityLabel={`${o.title}, ${o.desc}`}
                >
                  <IconBadge name={o.icon} color={o.value === 'test' ? colors.secondary : colors.primary} size={34} />
                  <View style={styles.modeText}>
                    <Text style={styles.modeTitle}>{o.title}</Text>
                    <Text style={styles.modeDesc}>{o.desc}</Text>
                  </View>
                  <Ionicons name={active ? 'checkmark-circle' : 'ellipse-outline'} size={22} color={active ? colors.primary : colors.textPlaceholder} />
                </TouchableOpacity>
              );
            })}
          </View>
          <Button title={t('quiz.startMode', { mode: mode === 'test' ? t('quiz.modeTest') : t('quiz.modePractice') })} icon="play" onPress={onStart} />
          <Button title={t('common.cancel')} variant="plain" onPress={onCancel} />
        </View>
      </View>
    </Modal>
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
  const [grade, setGrade] = useGradeFilter(user?.id);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [completedQuizSet, setCompletedQuizSet] = useState(null);
  const [lastScore, setLastScore] = useState(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [challengeCompletedToday, setChallengeCompletedToday] = useState(false);
  const [pendingQuiz, setPendingQuiz] = useState(null); // quiz waiting for a mode choice
  const [quizMode, setQuizMode] = useState('practice');
  const [xpSummary, setXpSummary] = useState(null);
  const [timedOut, setTimedOut] = useState(false);
  const { xp, level, addXp } = useProgress(stats, user?.id);

  useEffect(() => {
    AsyncStorage.getItem(QUIZ_MODE_KEY)
      .then((v) => { if (v === 'practice' || v === 'test') setQuizMode(v); })
      .catch(() => {});
  }, []);

  // Device-local calendar date (not UTC) so the challenge flips at local midnight
  const todayDateKey = getLocalDateKey();
  const challengeKey = getUserScopedKey(`${CHALLENGE_KEY_PREFIX}${todayDateKey}`, user?.id);

  useEffect(() => {
    setChallengeCompletedToday(false);
    AsyncStorage.getItem(challengeKey)
      .then(val => { if (val === 'done') setChallengeCompletedToday(true); })
      .catch(() => {});
  }, [challengeKey]);

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

  const byDifficulty = selectedDifficulty === 'all'
    ? quizSets
    : quizSets.filter(q => q.difficulty === selectedDifficulty);
  // grade selector: General Math shows everything in sections, a grade only its own quizzes
  const quizSections = sectionsByGrade(byDifficulty, grade);
  const filteredQuizzes = quizSections.flatMap((section) => section.items);

  // Get best score for a quiz from completed quizzes
  const getBestScore = (quizId) => {
    const completed = stats?.completedQuizzes || [];
    const quizResults = completed.filter(q => q.quizId === quizId);
    if (quizResults.length === 0) return null;
    return Math.max(...quizResults.map(q => Math.round((q.score / q.total) * 100)));
  };

  // Get daily challenge quiz (deterministic based on date)
  // Uses days-since-epoch of the *local* date so each calendar date maps to a unique index,
  // avoiding the leap-year collision of the old dayOfYear approach.
  const getDailyChallenge = () => {
    // the daily challenge stays on the General Math quizzes, as before the grade quizzes existed
    const general = quizSets.filter(q => q.grade == null);
    const pool = isPremium ? general : general.filter(q => isQuizFree(q));
    if (pool.length === 0) return null;
    const [y, m, d] = todayDateKey.split('-').map(Number);
    const daysSinceEpoch = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
    return pool[daysSinceEpoch % pool.length];
  };

  const dailyChallenge = getDailyChallenge();

  const isQuizLocked = (quizSet) => !isPremium && !isQuizFree(quizSet);

  const handleStartQuiz = (quizSet) => {
    if (isQuizLocked(quizSet)) {
      setShowPremiumModal(true);
      return;
    }
    setPendingQuiz(quizSet);
  };

  const handleChangeMode = (mode) => {
    setQuizMode(mode);
    AsyncStorage.setItem(QUIZ_MODE_KEY, mode).catch(() => {});
  };

  const handleStartWithMode = () => {
    const quizSet = pendingQuiz;
    if (!quizSet) return;
    setPendingQuiz(null);
    setActiveQuiz(createQuizAttempt(quizSet, { mode: quizMode }));
    // iOS can't present a modal while another one is still dismissing
    if (Platform.OS === 'ios') setTimeout(() => setShowQuiz(true), 400);
    else setShowQuiz(true);
  };

  const handleQuizComplete = (answers, quizSet, { timedOut: didTimeOut = false } = {}) => {
    setQuizResult(answers);
    setCompletedQuizSet(quizSet);
    setTimedOut(!!didTimeOut);
    setShowQuiz(false);
    setShowResult(true);
    const correct = answers ? answers.filter(a => a?.correct).length : 0;
    const total = quizSet?.questions?.length || 0;
    const hintsUsed = answers ? answers.filter(a => a?.usedHint).length : 0;
    // Practising mistakes doesn't count towards scores, best score, mastery or the daily challenge — reduced XP only
    if (quizSet?.isPractice) {
      setLastScore(null);
      const attemptXp = computeAttemptXp({ correct, total, hintsUsed, mode: 'practice', isMistakesPractice: true });
      setXpSummary({ ...attemptXp, totalBefore: xp.total, totalAfter: xp.total + attemptXp.gained });
      if (attemptXp.gained) addXp(attemptXp.gained);
      return;
    }
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    setLastScore(percentage);
    const previousAttempts = (stats?.completedQuizzes || []).filter(q => q.quizId === quizSet?.id).length;
    const attemptXp = computeAttemptXp({ correct, total, hintsUsed, mode: quizSet?.mode, previousAttempts });
    setXpSummary({ ...attemptXp, totalBefore: xp.total, totalAfter: xp.total + attemptXp.gained });
    // Guard: only record if we have a valid quiz reference
    if (quizSet?.id && quizSet?.title) {
      // Quiz XP is derived from the recorded attempt; hints are charged locally once it is saved
      Promise.resolve(recordQuizCompleted(quizSet.id, quizSet.title, correct, total))
        .then((ok) => { if (ok && attemptXp.hintPenalty) addXp(-attemptXp.hintPenalty); })
        .catch(() => {});
    }
    // Mark daily challenge as completed
    if (dailyChallenge && quizSet?.id === dailyChallenge.id) {
      AsyncStorage.setItem(challengeKey, 'done')
        .then(() => setChallengeCompletedToday(true))
        .catch(() => {});
    }
  };

  // A retry is always a full, freshly shuffled attempt of the original set
  const findOriginalSet = (attempt) => quizSets.find((q) => q.id === attempt?.id) || attempt;

  const handleRetryQuiz = () => {
    setActiveQuiz(createQuizAttempt(findOriginalSet(completedQuizSet), { mode: completedQuizSet?.mode }));
    setShowResult(false);
    setXpSummary(null);
    setQuizResult(null);
    setShowQuiz(true);
  };

  const handlePracticeMistakes = () => {
    const wrongIds = (quizResult || []).filter((a) => !a?.correct).map((a) => a.questionId);
    if (wrongIds.length === 0) return;
    // Always with immediate feedback, whatever the original mode was
    setActiveQuiz(createQuizAttempt(findOriginalSet(completedQuizSet), { questionIds: wrongIds, isPractice: true, mode: 'practice' }));
    setShowResult(false);
    setXpSummary(null);
    setQuizResult(null);
    setShowQuiz(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
    setQuizResult(null);
    setCompletedQuizSet(null);
    setActiveQuiz(null);
    setLastScore(null);
    setXpSummary(null);
    setTimedOut(false);
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
          right={(
            <View style={styles.headerChips}>
              <View
                style={styles.levelChip}
                accessible
                accessibilityLabel={`${t('progress.levelN', { level: level.level })}, ${xp.total} XP`}
              >
                <Ionicons name="sparkles" size={14} color={colors.primary} />
                <Text style={styles.levelText}>{t('progress.levelShort', { level: level.level })}</Text>
                <Text style={styles.levelXp}>{xp.total} XP</Text>
              </View>
              {streak > 0 && (
                <View style={styles.streakChip}>
                  <Ionicons name="flame" size={15} color={colors.secondary} />
                  <Text style={styles.streakText}>{streak}</Text>
                </View>
              )}
            </View>
          )}
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

        {/* Grade (General Math, 6–12) */}
        <GradeSelector value={grade} onChange={setGrade} />

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

        {filteredQuizzes.length === 0 && grade !== 'general' && (
          <EmptyState icon="construct-outline" title={t('grades.comingSoonTitle', { n: grade })} message={t('grades.comingSoonText')} />
        )}

        {/* Quiz Cards, grouped by grade */}
        {quizSections.map((section) => (
        <View key={section.key}>
        {(grade !== 'general' || quizSections.length > 1) && section.items.length > 0 && (
          <GradeSectionHeader grade={section.grade} count={t('quiz.quizCount', { count: section.items.length })} />
        )}
        <View style={[styles.quizList, isDesktop && styles.quizListDesktop]}>
          {section.items.map((quizSet) => {
            const bestScore = getBestScore(quizSet.id);
            const locked = isQuizLocked(quizSet);
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
        </View>
        ))}

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
        onPracticeMistakes={handlePracticeMistakes}
        isPerfectScore={lastScore === 100}
        quizHistory={(stats?.completedQuizzes || []).filter(q => q.quizId === completedQuizSet?.id)}
        xpSummary={xpSummary}
        timedOut={timedOut}
      />

      {/* Practice / Test chooser */}
      <ModeSheet
        quizSet={pendingQuiz}
        mode={quizMode}
        onChangeMode={handleChangeMode}
        onStart={handleStartWithMode}
        onCancel={() => setPendingQuiz(null)}
        colors={colors}
        styles={styles}
        t={t}
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
  headerChips: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs + 2,
  },
  levelChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.primaryBg,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 1,
    borderRadius: BORDER_RADIUS.round,
  },
  levelText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.primary,
  },
  levelXp: {
    ...TYPOGRAPHY.footnote,
    color: colors.primary,
  },

  // Mode sheet
  sheetOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.overlay,
  },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: BORDER_RADIUS.lg + 4,
    borderTopRightRadius: BORDER_RADIUS.lg + 4,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.xxl,
    gap: SPACING.sm,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
  },
  sheetGrabber: {
    alignSelf: 'center',
    width: 36,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.borderLight,
    marginBottom: SPACING.sm,
  },
  sheetTitle: {
    ...TYPOGRAPHY.h3,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
  },
  sheetSubtitle: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },
  sheetOptions: {
    gap: SPACING.sm,
    marginVertical: SPACING.md,
  },
  modeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  modeOptionActive: {
    borderColor: colors.primary,
  },
  modeText: {
    flex: 1,
  },
  modeTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  modeDesc: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: 2,
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
