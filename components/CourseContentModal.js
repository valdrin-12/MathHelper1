import React, { useState, useRef } from 'react';
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
import { useLocalizedCourses, useLocalizedCourseContent } from '../hooks/useLocalizedData';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function CourseContentModal({ visible, course, onClose, onComplete }) {
  const { t } = useTranslation();
  const { categories, difficultyLevels } = useLocalizedCourses();
  const { courseContents } = useLocalizedCourseContent();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [expandedPractice, setExpandedPractice] = useState({});
  const [courseCompleted, setCourseCompleted] = useState(false);
  const scrollRef = useRef(null);

  if (!course) return null;

  const category = categories.find(c => c.id === course.category);
  const difficulty = difficultyLevels[course.difficulty];
  const content = courseContents[course.id];
  const lessons = content?.lessons || [];

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
        {/* Header */}
        <View style={[styles.header, { backgroundColor: category?.color || COLORS.primary }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle} numberOfLines={1}>{course.title}</Text>
            <Text style={styles.headerMeta}>{difficulty?.emoji} {difficulty?.name} · {course.duration}</Text>
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
                  currentLesson === index && styles.lessonTabActive,
                  currentLesson === index && { backgroundColor: category?.color || COLORS.primary },
                ]}
                onPress={() => handleLessonChange(index)}
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
              <Text style={styles.theoryText}>{lesson.theory}</Text>
            </View>

            {/* Key Points */}
            {lesson.keyPoints && lesson.keyPoints.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>💡</Text>
                  <Text style={styles.sectionTitle}>{t('courseContent.keyPoints')}</Text>
                </View>
                <View style={styles.keyPointsCard}>
                  {lesson.keyPoints.map((point, i) => (
                    <View key={i} style={styles.keyPoint}>
                      <View style={[styles.keyPointDot, { backgroundColor: category?.color || COLORS.primary }]} />
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
                  <View key={i} style={styles.exampleCard}>
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
                  <View key={i} style={styles.practiceCard}>
                    <Text style={styles.practiceProblem}>{p.problem}</Text>
                    <TouchableOpacity
                      style={[styles.showSolutionBtn, { borderColor: category?.color || COLORS.primary }]}
                      onPress={() => togglePractice(i)}
                    >
                      <Text style={[styles.showSolutionText, { color: category?.color || COLORS.primary }]}>
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

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={[styles.navButton, currentLesson === 0 && styles.navButtonDisabled]}
            onPress={() => currentLesson > 0 && handleLessonChange(currentLesson - 1)}
            disabled={currentLesson === 0}
          >
            <Text style={[styles.navButtonText, currentLesson === 0 && styles.navButtonTextDisabled]}>{`← ${t('courseContent.previous')}`}</Text>
          </TouchableOpacity>
          <View style={styles.progressDots}>
            {lessons.slice(Math.max(0, currentLesson - 2), currentLesson + 3).map((_, i) => {
              const realIndex = Math.max(0, currentLesson - 2) + i;
              return (
                <View
                  key={realIndex}
                  style={[
                    styles.dot,
                    realIndex === currentLesson && [styles.dotActive, { backgroundColor: category?.color || COLORS.primary }],
                  ]}
                />
              );
            })}
          </View>
          {currentLesson === lessons.length - 1 ? (
            <TouchableOpacity
              style={[styles.navButton, styles.navButtonNext, styles.completeButton]}
              onPress={handleCompleteCourse}
            >
              <Text style={styles.navButtonNextText}>
                {courseCompleted ? `✓ ${t('courseContent.completed')}` : `🎓 ${t('courseContent.completeCourse')}`}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.navButton, styles.navButtonNext, { backgroundColor: category?.color || COLORS.primary }]}
              onPress={() => handleLessonChange(currentLesson + 1)}
            >
              <Text style={styles.navButtonNextText}>{`${t('courseContent.next')} →`}</Text>
            </TouchableOpacity>
          )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 22,
    color: COLORS.textLight,
    fontWeight: 'bold',
  },
  headerCenter: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  headerMeta: {
    fontSize: 12,
    color: COLORS.textLight,
    opacity: 0.85,
    marginTop: 2,
  },
  lessonCounter: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  lessonCounterText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  lessonNav: {
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    paddingVertical: 10,
  },
  lessonNavContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  lessonTab: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonTabActive: {
    ...SHADOWS.medium,
  },
  lessonTabNum: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textMuted,
  },
  lessonTabNumActive: {
    color: COLORS.textLight,
  },
  content: {
    flex: 1,
  },
  lessonHeader: {
    padding: 20,
    paddingBottom: 5,
  },
  lessonNumber: {
    fontSize: 13,
    color: COLORS.textMuted,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  lessonTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textDark,
    lineHeight: 30,
  },
  section: {
    padding: 20,
    paddingTop: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionIcon: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  theoryText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
  },
  keyPointsCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    gap: 10,
    ...SHADOWS.soft,
  },
  keyPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  keyPointDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  keyPointText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textDark,
    lineHeight: 20,
  },
  exampleCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
    ...SHADOWS.soft,
  },
  exampleHeader: {
    marginBottom: 8,
  },
  exampleLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  exampleProblem: {
    fontSize: 15,
    color: COLORS.textDark,
    fontWeight: '500',
    marginBottom: 10,
  },
  exampleDivider: {
    height: 1,
    backgroundColor: COLORS.borderLight,
    marginBottom: 10,
  },
  exampleSolution: {
    fontSize: 15,
    color: '#4CAF50',
    fontWeight: '600',
    lineHeight: 22,
  },
  practiceCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...SHADOWS.soft,
  },
  practiceProblem: {
    fontSize: 15,
    color: COLORS.textDark,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 12,
  },
  showSolutionBtn: {
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 9,
    alignItems: 'center',
  },
  showSolutionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  solutionContainer: {
    marginTop: 12,
    backgroundColor: '#F8FFF8',
    borderRadius: 10,
    padding: 14,
  },
  solutionAnswer: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  stepNumber: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4CAF50',
    width: 16,
  },
  stepText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 19,
  },
  noContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  noContentIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  noContentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 8,
  },
  noContentText: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    gap: 12,
  },
  navButton: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: COLORS.borderLight,
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  navButtonTextDisabled: {
    color: COLORS.textMuted,
  },
  navButtonNext: {
    paddingHorizontal: 20,
  },
  completeButton: {
    backgroundColor: COLORS.success,
  },
  navButtonNextText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  progressDots: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
