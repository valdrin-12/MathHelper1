import React, { useState, useRef, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import * as statsService from '../services/statsService';
import { Ionicons } from '@expo/vector-icons';
import { useLocalizedCourses, useLocalizedCourseContent } from '../hooks/useLocalizedData';
import { useTheme } from '../context/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';

export default function CourseContentModal({ visible, course, onClose, onComplete }) {
  const { t } = useTranslation();
  const { categories, difficultyLevels } = useLocalizedCourses();
  const { courseContents } = useLocalizedCourseContent();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [expandedPractice, setExpandedPractice] = useState({});
  const [courseCompleted, setCourseCompleted] = useState(false);
  const scrollRef = useRef(null);
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  if (!course) return null;

  const category = categories.find(c => c.id === course.category);
  const difficulty = difficultyLevels[course.difficulty];
  const content = courseContents[course.id];
  const lessons = content?.lessons || [];
  // Category colour is the accent for lesson tabs, bullets and the Next button
  const tint = category?.color || colors.primary;

  const handleLessonChange = (index) => {
    setCurrentLesson(index);
    setExpandedPractice({});
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleCompleteCourse = async () => {
    await statsService.recordCourseCompleted(course.id, course.title);
    setCourseCompleted(true);
    if (onComplete) onComplete(course.id, course.title);
    Alert.alert(
      `🎓 ${t('courseContent.courseCompleted')}`,
      t('courseContent.courseCompletedMessage', { title: course.title }),
      [{ text: t('common.continue'), onPress: onClose }]
    );
  };

  const togglePractice = (index) => {
    setExpandedPractice(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const lesson = lessons[currentLesson];

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={onClose}>
      <SafeAreaView style={styles.safeArea}>
        {/* Nav bar: plain back button, centered title, lesson counter */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton} hitSlop={8}>
            <Ionicons name="chevron-back" size={26} color={colors.primary} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle} numberOfLines={1}>{course.title}</Text>
            <Text style={styles.headerMeta} numberOfLines={1}>{difficulty?.emoji} {difficulty?.name} · {course.duration}</Text>
          </View>
          <View style={styles.lessonCounter}>
            <Text style={styles.lessonCounterText}>{currentLesson + 1}/{lessons.length}</Text>
          </View>
        </View>

        {/* Lesson Navigation - Horizontal Scroll */}
        <View style={styles.lessonNav}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.lessonNavContent}>
            {lessons.map((l, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.lessonTab,
                  currentLesson === index && { backgroundColor: tint },
                ]}
                onPress={() => handleLessonChange(index)}
                hitSlop={{ top: 4, bottom: 4 }}
              >
                <Text style={[styles.lessonTabNum, currentLesson === index && styles.lessonTabNumActive]}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Content */}
        {lesson ? (
          <ScrollView ref={scrollRef} style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Lesson Title */}
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonNumber}>{t('courseContent.lessonLabel', { number: currentLesson + 1 })}</Text>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
            </View>

            {/* Theory */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>📖</Text>
                <Text style={styles.sectionTitle}>{t('courseContent.theory')}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.theoryText}>{lesson.theory}</Text>
              </View>
            </View>

            {/* Key Points */}
            {lesson.keyPoints && lesson.keyPoints.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>💡</Text>
                  <Text style={styles.sectionTitle}>{t('courseContent.keyPoints')}</Text>
                </View>
                <View style={[styles.card, styles.keyPointsCard]}>
                  {lesson.keyPoints.map((point, i) => (
                    <View key={i} style={styles.keyPoint}>
                      <View style={[styles.keyPointDot, { backgroundColor: tint }]} />
                      <Text style={styles.keyPointText}>{point}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Examples */}
            {lesson.examples && lesson.examples.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>✏️</Text>
                  <Text style={styles.sectionTitle}>{t('courseContent.examples')}</Text>
                </View>
                {lesson.examples.map((ex, i) => (
                  <View key={i} style={[styles.card, styles.cardSpaced]}>
                    <View style={styles.exampleHeader}>
                      <Text style={styles.exampleLabel}>{t('courseContent.exampleLabel', { number: i + 1 })}</Text>
                    </View>
                    <Text style={styles.exampleProblem}>{ex.example}</Text>
                    <View style={styles.exampleDivider} />
                    <Text style={styles.exampleLabel}>{t('courseContent.solution')}</Text>
                    <Text style={styles.exampleSolution}>{ex.solution}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Practice Problems */}
            {lesson.practice && lesson.practice.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>🧮</Text>
                  <Text style={styles.sectionTitle}>{t('courseContent.practiceProblems')}</Text>
                </View>
                {lesson.practice.map((p, i) => (
                  <View key={i} style={[styles.card, styles.cardSpaced]}>
                    <Text style={styles.practiceProblem}>{p.problem}</Text>
                    <TouchableOpacity
                      style={[styles.showSolutionBtn, { backgroundColor: tint + '1F' }]}
                      onPress={() => togglePractice(i)}
                      activeOpacity={0.7}
                    >
                      <Text style={[styles.showSolutionText, { color: tint }]}>
                        {expandedPractice[i] ? `▲ ${t('courseContent.hideSolution')}` : `▼ ${t('courseContent.showSolution')}`}
                      </Text>
                    </TouchableOpacity>
                    {expandedPractice[i] && (
                      <View style={styles.solutionContainer}>
                        <Text style={styles.solutionAnswer}>✓ {p.solution}</Text>
                        {p.steps && p.steps.map((step, si) => (
                          <View key={si} style={styles.stepRow}>
                            <Text style={styles.stepNumber}>{si + 1}.</Text>
                            <Text style={styles.stepText}>{step}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}

            <View style={{ height: 100 }} />
          </ScrollView>
        ) : (
          <View style={styles.noContent}>
            <Text style={styles.noContentIcon}>📚</Text>
            <Text style={styles.noContentTitle}>{t('courseContent.contentPreparing')}</Text>
            <Text style={styles.noContentText}>{t('courseContent.contentPreparingHint')}</Text>
          </View>
        )}

        {/* Bottom toolbar: tinted Previous, progress dots, filled Next / Complete */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={[styles.navButton, currentLesson === 0 && styles.navButtonDisabled]}
            onPress={() => currentLesson > 0 && handleLessonChange(currentLesson - 1)}
            disabled={currentLesson === 0}
            activeOpacity={0.7}
          >
            <View style={styles.navButtonInner}>
              <Ionicons name="chevron-back" size={18} color={currentLesson === 0 ? colors.textMuted : colors.text} />
              <Text style={[styles.navButtonText, currentLesson === 0 && styles.navButtonTextDisabled]}>{t('courseContent.previous')}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.progressDots}>
            {lessons.slice(Math.max(0, currentLesson - 2), currentLesson + 3).map((_, i) => {
              const realIndex = Math.max(0, currentLesson - 2) + i;
              return (
                <View
                  key={realIndex}
                  style={[
                    styles.dot,
                    realIndex === currentLesson && [styles.dotActive, { backgroundColor: tint }],
                  ]}
                />
              );
            })}
          </View>
          {currentLesson === lessons.length - 1 ? (
            <TouchableOpacity
              style={[styles.navButton, styles.navButtonNext, styles.completeButton]}
              onPress={handleCompleteCourse}
              activeOpacity={0.7}
            >
              <Text style={styles.navButtonNextText}>
                {courseCompleted ? `✓ ${t('courseContent.completed')}` : `🎓 ${t('courseContent.completeCourse')}`}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.navButton, styles.navButtonNext, { backgroundColor: tint }]}
              onPress={() => handleLessonChange(currentLesson + 1)}
              activeOpacity={0.7}
            >
              <View style={styles.navButtonInner}>
                <Text style={styles.navButtonNextText}>{t('courseContent.next')}</Text>
                <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Nav bar
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingHorizontal: SPACING.xs,
    paddingRight: SPACING.lg,
    backgroundColor: colors.surface,
    gap: SPACING.xs,
  },
  closeButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  headerMeta: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: 1,
  },
  lessonCounter: {
    minWidth: 44,
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.round,
  },
  lessonCounterText: {
    ...TYPOGRAPHY.captionBold,
    color: colors.textSubtle,
  },

  // Lesson tabs
  lessonNav: {
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingBottom: SPACING.sm + 2,
  },
  lessonNavContent: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },
  lessonTab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonTabNum: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.textSubtle,
  },
  lessonTabNumActive: {
    color: '#FFFFFF',
  },

  // Lesson body
  content: {
    flex: 1,
  },
  lessonHeader: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xs,
  },
  lessonNumber: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.textSubtle,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: SPACING.xs,
  },
  lessonTitle: {
    ...TYPOGRAPHY.h2,
    color: colors.text,
  },
  section: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
    paddingHorizontal: SPACING.xs,
  },
  sectionIcon: {
    fontSize: 17,
  },
  sectionTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
  },
  cardSpaced: {
    marginBottom: SPACING.md,
  },
  theoryText: {
    ...TYPOGRAPHY.body,
    lineHeight: 25,
    color: colors.text,
  },
  keyPointsCard: {
    gap: SPACING.md,
  },
  keyPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.md,
  },
  keyPointDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginTop: 7,
  },
  keyPointText: {
    flex: 1,
    ...TYPOGRAPHY.subhead,
    color: colors.text,
  },
  exampleHeader: {
    marginBottom: SPACING.xs,
  },
  exampleLabel: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.textSubtle,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    marginBottom: SPACING.xs,
  },
  exampleProblem: {
    ...TYPOGRAPHY.body,
    fontWeight: '500',
    color: colors.text,
    marginBottom: SPACING.md,
  },
  exampleDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginBottom: SPACING.md,
  },
  exampleSolution: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    color: colors.success,
  },
  practiceProblem: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    color: colors.text,
    marginBottom: SPACING.md,
  },
  showSolutionBtn: {
    minHeight: 44,
    borderRadius: BORDER_RADIUS.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showSolutionText: {
    ...TYPOGRAPHY.subheadBold,
  },
  solutionContainer: {
    marginTop: SPACING.md,
    backgroundColor: colors.successLight,
    borderRadius: BORDER_RADIUS.sm,
    padding: SPACING.md + 2,
  },
  solutionAnswer: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.success,
    marginBottom: SPACING.sm,
  },
  stepRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.xs + 2,
  },
  stepNumber: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.success,
    minWidth: 18,
  },
  stepText: {
    flex: 1,
    ...TYPOGRAPHY.subhead,
    color: colors.textSecondary,
  },

  // Empty state
  noContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.huge,
  },
  noContentIcon: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  noContentTitle: {
    ...TYPOGRAPHY.h3,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  noContentText: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },

  // Bottom toolbar
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: colors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    gap: SPACING.md,
  },
  navButton: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: colors.inputBg,
  },
  navButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  navButtonDisabled: {
    opacity: 0.4,
  },
  navButtonText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
  },
  navButtonTextDisabled: {
    color: colors.textMuted,
  },
  navButtonNext: {
    paddingHorizontal: SPACING.xl,
  },
  completeButton: {
    backgroundColor: colors.success,
  },
  navButtonNextText: {
    ...TYPOGRAPHY.subheadBold,
    color: '#FFFFFF',
  },
  progressDots: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.xs + 2,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  dotActive: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },
});
