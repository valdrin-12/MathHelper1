import React, { useState } from 'react';
import * as statsService from '../services/statsService';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useLocalizedQuizzes } from '../hooks/useLocalizedData';
import ActiveQuizModal from '../components/ActiveQuizModal';
import QuizResultModal from '../components/QuizResultModal';
import { useTranslation } from 'react-i18next';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

const { width } = Dimensions.get('window');

export default function QuizScreen() {
  const { t } = useTranslation();
  const { quizSets, getDifficultyLabel, getDifficultyColor } = useLocalizedQuizzes();
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [completedQuizSet, setCompletedQuizSet] = useState(null);

  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredQuizzes = selectedDifficulty === 'all'
    ? quizSets
    : quizSets.filter(q => q.difficulty === selectedDifficulty);

  const handleStartQuiz = (quizSet) => {
    setActiveQuiz(quizSet);
    setShowQuiz(true);
  };

  const handleQuizComplete = (answers, quizSet) => {
    setQuizResult(answers);
    setCompletedQuizSet(quizSet);
    setShowQuiz(false);
    setShowResult(true);
    // Record quiz completion to stats
    const correct = answers ? answers.filter(a => a?.isCorrect).length : 0;
    const total = quizSet?.questions?.length || 0;
    statsService.recordQuizCompleted(quizSet?.id, quizSet?.title, correct, total);
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

  const beginnerCount = quizSets.filter(q => q.difficulty === 'beginner').length;
  const intermediateCount = quizSets.filter(q => q.difficulty === 'intermediate').length;
  const advancedCount = quizSets.filter(q => q.difficulty === 'advanced').length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('quiz.title')}</Text>
        <Text style={styles.headerSubtitle}>{t('quiz.quizzesAvailable', { count: quizSets.length })}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stats Overview */}
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { borderTopColor: COLORS.success }]}>
            <Text style={styles.statValue}>{beginnerCount}</Text>
            <Text style={styles.statLabel}>{t('difficulty.beginner')}</Text>
          </View>
          <View style={[styles.statCard, { borderTopColor: COLORS.warning }]}>
            <Text style={styles.statValue}>{intermediateCount}</Text>
            <Text style={styles.statLabel}>{t('difficulty.intermediate')}</Text>
          </View>
          <View style={[styles.statCard, { borderTopColor: COLORS.error }]}>
            <Text style={styles.statValue}>{advancedCount}</Text>
            <Text style={styles.statLabel}>{t('difficulty.advanced')}</Text>
          </View>
        </View>

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

        {/* Quiz Cards */}
        <View style={styles.quizList}>
          <Text style={styles.sectionTitle}>
            {t('quiz.quizCount', { count: filteredQuizzes.length })}
          </Text>
          {filteredQuizzes.map((quizSet) => (
            <TouchableOpacity
              key={quizSet.id}
              style={styles.quizCard}
              onPress={() => handleStartQuiz(quizSet)}
            >
              {/* Colored Top Bar */}
              <View style={[styles.quizCardBar, { backgroundColor: quizSet.color }]} />

              <View style={styles.quizCardContent}>
                {/* Icon + Title */}
                <View style={styles.quizCardHeader}>
                  <View style={[styles.quizIconContainer, { backgroundColor: quizSet.color + '20' }]}>
                    <Text style={styles.quizIcon}>{quizSet.icon}</Text>
                  </View>
                  <View style={styles.quizTitleContainer}>
                    <Text style={styles.quizTitle} numberOfLines={2}>{quizSet.title}</Text>
                    <Text style={styles.quizCategory} numberOfLines={1}>{quizSet.category}</Text>
                  </View>
                  <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(quizSet.difficulty) + '20' }]}>
                    <Text style={[styles.difficultyBadgeText, { color: getDifficultyColor(quizSet.difficulty) }]}>
                      {getDifficultyLabel(quizSet.difficulty)}
                    </Text>
                  </View>
                </View>

                {/* Meta */}
                <View style={styles.quizMeta}>
                  <View style={styles.metaItem}>
                    <Text style={styles.metaIcon}>❓</Text>
                    <Text style={styles.metaText}>{t('quiz.questions', { count: quizSet.questions.length })}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Text style={styles.metaIcon}>⏱</Text>
                    <Text style={styles.metaText}>{quizSet.duration}</Text>
                  </View>
                </View>

                {/* Start Button */}
                <TouchableOpacity
                  style={[styles.startButton, { backgroundColor: quizSet.color }]}
                  onPress={() => handleStartQuiz(quizSet)}
                >
                  <Text style={styles.startButtonText}>{t('quiz.startQuiz')}</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: SPACING.xl }} />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
  },
  header: {
    padding: SPACING.xl,
    paddingTop: 60,
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    ...TYPOGRAPHY.h1,
    color: COLORS.textOnPrimary,
    marginBottom: SPACING.xs + 1,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textOnPrimary,
    opacity: 0.9,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
    gap: SPACING.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg - 1,
    alignItems: 'center',
    borderTopWidth: 3,
    ...SHADOWS.small,
  },
  statValue: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textDark,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 3,
  },
  filterSection: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.sm + 2,
  },
  filterLabel: {
    ...TYPOGRAPHY.label,
    color: COLORS.textDark,
    marginBottom: SPACING.sm + 2,
  },
  filterScroll: {
    flexGrow: 0,
  },
  filterChip: {
    paddingHorizontal: 18,
    paddingVertical: SPACING.sm + 2,
    borderRadius: BORDER_RADIUS.xl,
    backgroundColor: COLORS.surface,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    marginRight: SPACING.sm + 2,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  filterChipTextActive: {
    color: COLORS.textOnPrimary,
  },
  quizList: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.sm + 2,
  },
  sectionTitle: {
    ...TYPOGRAPHY.bodyLargeBold,
    color: COLORS.textDark,
    marginBottom: SPACING.lg - 1,
  },
  quizCard: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg - 1,
    marginBottom: SPACING.lg - 1,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  quizCardBar: {
    height: 4,
  },
  quizCardContent: {
    padding: 18,
  },
  quizCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg - 1,
    gap: SPACING.md,
  },
  quizIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizIcon: {
    fontSize: 26,
  },
  quizTitleContainer: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 3,
  },
  quizCategory: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
  },
  difficultyBadge: {
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 1,
    borderRadius: SPACING.sm + 2,
  },
  difficultyBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  quizMeta: {
    flexDirection: 'row',
    gap: SPACING.xl,
    marginBottom: SPACING.lg - 1,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs + 1,
  },
  metaIcon: {
    fontSize: 14,
  },
  metaText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
  },
  startButton: {
    borderRadius: SPACING.sm + 2,
    paddingVertical: SPACING.md + 1,
    alignItems: 'center',
  },
  startButtonText: {
    ...TYPOGRAPHY.body,
    fontWeight: 'bold',
    color: COLORS.textOnPrimary,
  },
});
