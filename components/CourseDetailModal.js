import React, { useState, useRef, useEffect } from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import { useLocalizedCourses, useLocalizedCourseContent } from '../hooks/useLocalizedData';
import * as statsService from '../services/statsService';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function CourseDetailModal({ visible, course, onClose }) {
  const { t } = useTranslation();
  const { categories, difficultyLevels } = useLocalizedCourses();
  const { courseContents } = useLocalizedCourseContent();
  const [showContent, setShowContent] = useState(false);

  // Course content state
  const [currentLesson, setCurrentLesson] = useState(0);
  const [expandedPractice, setExpandedPractice] = useState({});
  const [courseCompleted, setCourseCompleted] = useState(false);
  const scrollRef = useRef(null);

  // Reset when modal closes
  useEffect(() => {
    if (!visible) {
      setShowContent(false);
      setCurrentLesson(0);
      setExpandedPractice({});
      setCourseCompleted(false);
    }
  }, [visible]);

  if (!course) return null;

  const category = categories.find(cat => cat.id === course.category);
  const difficulty = difficultyLevels[course.difficulty];
  const content = courseContents[course.id];
  const lessons = content?.lessons || [];

  const handleStartCourse = () => {
    setShowContent(true);
  };

  const handleBackFromContent = () => {
    setShowContent(false);
    setCurrentLesson(0);
    setExpandedPractice({});
  };

  const handleLessonChange = (index) => {
    setCurrentLesson(index);
    setExpandedPractice({});
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleCompleteCourse = async () => {
    await statsService.recordCourseCompleted(course.id, course.title);
    setCourseCompleted(true);
    Alert.alert(
      `${t('courseContent.courseCompleted')}`,
      t('courseContent.courseCompletedMessage', { title: course.title }),
      [{ text: t('common.continue'), onPress: onClose }]
    );
  };

  const togglePractice = (index) => {
    setExpandedPractice(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // ─── Course Content View ───
  const renderContentView = () => {
    const lesson = lessons[currentLesson];

    return (
      <SafeAreaView style={contentStyles.safeArea}>
        {/* Header */}
        <View style={[contentStyles.header, { backgroundColor: category?.color || COLORS.primary }]}>
          <TouchableOpacity onPress={handleBackFromContent} style={contentStyles.closeButton}>
            <Ionicons name="chevron-back" size={24} color={COLORS.textLight} />
          </TouchableOpacity>
          <View style={contentStyles.headerCenter}>
            <Text style={contentStyles.headerTitle} numberOfLines={1}>{course.title}</Text>
            <Text style={contentStyles.headerMeta}>{difficulty?.emoji} {difficulty?.name} · {course.duration}</Text>
          </View>
          <View style={contentStyles.lessonCounter}>
            <Text style={contentStyles.lessonCounterText}>{currentLesson + 1}/{lessons.length}</Text>
          </View>
        </View>

        {/* Lesson Navigation */}
        <View style={contentStyles.lessonNav}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={contentStyles.lessonNavContent}>
            {lessons.map((l, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  contentStyles.lessonTab,
                  currentLesson === index && contentStyles.lessonTabActive,
                  currentLesson === index && { backgroundColor: category?.color || COLORS.primary },
                ]}
                onPress={() => handleLessonChange(index)}
              >
                <Text style={[contentStyles.lessonTabNum, currentLesson === index && contentStyles.lessonTabNumActive]}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Content */}
        {lesson ? (
          <ScrollView ref={scrollRef} style={contentStyles.content} showsVerticalScrollIndicator={false}>
            <View style={contentStyles.lessonHeader}>
              <Text style={contentStyles.lessonNumber}>{t('courseContent.lessonLabel', { number: currentLesson + 1 })}</Text>
              <Text style={contentStyles.lessonTitle}>{lesson.title}</Text>
            </View>

            {/* Theory */}
            <View style={contentStyles.section}>
              <View style={contentStyles.sectionHeader}>
                <Text style={contentStyles.sectionIcon}>📖</Text>
                <Text style={contentStyles.sectionTitle}>{t('courseContent.theory')}</Text>
              </View>
              <Text style={contentStyles.theoryText}>{lesson.theory}</Text>
            </View>

            {/* Key Points */}
            {lesson.keyPoints && lesson.keyPoints.length > 0 && (
              <View style={contentStyles.section}>
                <View style={contentStyles.sectionHeader}>
                  <Text style={contentStyles.sectionIcon}>💡</Text>
                  <Text style={contentStyles.sectionTitle}>{t('courseContent.keyPoints')}</Text>
                </View>
                <View style={contentStyles.keyPointsCard}>
                  {lesson.keyPoints.map((point, i) => (
                    <View key={i} style={contentStyles.keyPoint}>
                      <View style={[contentStyles.keyPointDot, { backgroundColor: category?.color || COLORS.primary }]} />
                      <Text style={contentStyles.keyPointText}>{point}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Examples */}
            {lesson.examples && lesson.examples.length > 0 && (
              <View style={contentStyles.section}>
                <View style={contentStyles.sectionHeader}>
                  <Text style={contentStyles.sectionIcon}>✏️</Text>
                  <Text style={contentStyles.sectionTitle}>{t('courseContent.examples')}</Text>
                </View>
                {lesson.examples.map((ex, i) => (
                  <View key={i} style={contentStyles.exampleCard}>
                    <View style={contentStyles.exampleHeader}>
                      <Text style={contentStyles.exampleLabel}>{t('courseContent.exampleLabel', { number: i + 1 })}</Text>
                    </View>
                    <Text style={contentStyles.exampleProblem}>{ex.example}</Text>
                    <View style={contentStyles.exampleDivider} />
                    <Text style={contentStyles.exampleLabel}>{t('courseContent.solution')}</Text>
                    <Text style={contentStyles.exampleSolution}>{ex.solution}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Practice Problems */}
            {lesson.practice && lesson.practice.length > 0 && (
              <View style={contentStyles.section}>
                <View style={contentStyles.sectionHeader}>
                  <Text style={contentStyles.sectionIcon}>🧮</Text>
                  <Text style={contentStyles.sectionTitle}>{t('courseContent.practiceProblems')}</Text>
                </View>
                {lesson.practice.map((p, i) => (
                  <View key={i} style={contentStyles.practiceCard}>
                    <Text style={contentStyles.practiceProblem}>{p.problem}</Text>
                    <TouchableOpacity
                      style={[contentStyles.showSolutionBtn, { borderColor: category?.color || COLORS.primary }]}
                      onPress={() => togglePractice(i)}
                    >
                      <Text style={[contentStyles.showSolutionText, { color: category?.color || COLORS.primary }]}>
                        {expandedPractice[i] ? `▲ ${t('courseContent.hideSolution')}` : `▼ ${t('courseContent.showSolution')}`}
                      </Text>
                    </TouchableOpacity>
                    {expandedPractice[i] && (
                      <View style={contentStyles.solutionContainer}>
                        <Text style={contentStyles.solutionAnswer}>✓ {p.solution}</Text>
                        {p.steps && p.steps.map((step, si) => (
                          <View key={si} style={contentStyles.stepRow}>
                            <Text style={contentStyles.stepNumber}>{si + 1}.</Text>
                            <Text style={contentStyles.stepText}>{step}</Text>
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
          <View style={contentStyles.noContent}>
            <Text style={contentStyles.noContentIcon}>📚</Text>
            <Text style={contentStyles.noContentTitle}>{t('courseContent.contentPreparing')}</Text>
            <Text style={contentStyles.noContentText}>{t('courseContent.contentPreparingHint')}</Text>
          </View>
        )}

        {/* Bottom Navigation */}
        <View style={contentStyles.bottomNav}>
          <TouchableOpacity
            style={[contentStyles.navButton, currentLesson === 0 && contentStyles.navButtonDisabled]}
            onPress={() => currentLesson > 0 && handleLessonChange(currentLesson - 1)}
            disabled={currentLesson === 0}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Ionicons name="chevron-back" size={18} color={currentLesson === 0 ? COLORS.textMuted : COLORS.textDark} />
              <Text style={[contentStyles.navButtonText, currentLesson === 0 && contentStyles.navButtonTextDisabled]}>{t('courseContent.previous')}</Text>
            </View>
          </TouchableOpacity>
          <View style={contentStyles.progressDots}>
            {lessons.slice(Math.max(0, currentLesson - 2), currentLesson + 3).map((_, i) => {
              const realIndex = Math.max(0, currentLesson - 2) + i;
              return (
                <View
                  key={realIndex}
                  style={[
                    contentStyles.dot,
                    realIndex === currentLesson && [contentStyles.dotActive, { backgroundColor: category?.color || COLORS.primary }],
                  ]}
                />
              );
            })}
          </View>
          {currentLesson === lessons.length - 1 ? (
            <TouchableOpacity
              style={[contentStyles.navButton, contentStyles.navButtonNext, contentStyles.completeButton]}
              onPress={handleCompleteCourse}
            >
              <Text style={contentStyles.navButtonNextText}>
                {courseCompleted ? `✓ ${t('courseContent.completed')}` : `${t('courseContent.completeCourse')}`}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[contentStyles.navButton, contentStyles.navButtonNext, { backgroundColor: category?.color || COLORS.primary }]}
              onPress={() => handleLessonChange(currentLesson + 1)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={contentStyles.navButtonNextText}>{t('courseContent.next')}</Text>
                <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };

  // ─── Detail View ───
  const renderDetailView = () => (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={onClose} style={styles.backButton}>
              <Ionicons name="chevron-back" size={22} color={COLORS.textSecondary} />
            </TouchableOpacity>
            <Text style={styles.headerTitle} numberOfLines={1}>{t('courseDetail.title')}</Text>
          </View>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Course Header */}
          <View style={[styles.courseHeader, { backgroundColor: category?.color || COLORS.primary }]}>
            <Text style={styles.categoryIcon}>{category?.icon || '📚'}</Text>
            <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
            <Text style={styles.categoryName}>{category?.name}</Text>
          </View>

          {/* Meta Information */}
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Text style={styles.metaIcon}>{difficulty?.emoji}</Text>
              <Text style={styles.metaLabel}>{t('courseDetail.level')}</Text>
              <Text style={styles.metaValue}>{difficulty?.name}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaIcon}>⏱</Text>
              <Text style={styles.metaLabel}>{t('courseDetail.duration')}</Text>
              <Text style={styles.metaValue}>{course.duration}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaIcon}>📚</Text>
              <Text style={styles.metaLabel}>{t('courseDetail.lessons')}</Text>
              <Text style={styles.metaValue}>{course.lessons}</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('courseDetail.description')}</Text>
            <Text style={styles.descriptionText}>{course.description}</Text>
          </View>

          {/* Topics Covered */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('courseDetail.whatYouLearn')}</Text>
            {course.topics.map((topic, index) => (
              <View key={index} style={styles.topicItem}>
                <Text style={styles.topicBullet}>•</Text>
                <Text style={styles.topicText}>{topic}</Text>
              </View>
            ))}
          </View>

          {/* Learning Outcomes */}
          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('courseDetail.learningOutcomes')}</Text>
              {course.learningOutcomes.map((outcome, index) => (
                <View key={index} style={styles.outcomeItem}>
                  <Text style={styles.outcomeIcon}>✓</Text>
                  <Text style={styles.outcomeText}>{outcome}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Prerequisites */}
          {course.prerequisites && course.prerequisites.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('courseDetail.prerequisites')}</Text>
              <View style={styles.prerequisitesCard}>
                <Text style={styles.prerequisitesIcon}>⚠️</Text>
                <Text style={styles.prerequisitesText}>
                  {t('courseDetail.prerequisitesHint', { count: course.prerequisites.length })}
                </Text>
              </View>
            </View>
          )}

          <View style={{ height: 100 }} />
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartCourse}
          >
            <Text style={styles.startButtonText}>{t('courseDetail.startCourse')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle={showContent ? 'fullScreen' : 'pageSheet'}
      onRequestClose={showContent ? handleBackFromContent : onClose}
    >
      {showContent ? renderContentView() : renderDetailView()}
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  content: {
    flex: 1,
  },
  courseHeader: {
    padding: 30,
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 50,
    marginBottom: 15,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    color: COLORS.textLight,
    opacity: 0.9,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: COLORS.surface,
    marginTop: -20,
    marginHorizontal: 20,
    borderRadius: 15,
    ...SHADOWS.medium,
  },
  metaItem: {
    alignItems: 'center',
  },
  metaIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  metaLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 3,
  },
  metaValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  topicItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingLeft: 10,
  },
  topicBullet: {
    fontSize: 18,
    color: COLORS.primary,
    marginRight: 12,
    fontWeight: 'bold',
  },
  topicText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    lineHeight: 22,
  },
  outcomeItem: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: COLORS.backgroundAlt,
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },
  outcomeIcon: {
    fontSize: 18,
    color: COLORS.accent,
    marginRight: 12,
    fontWeight: 'bold',
  },
  outcomeText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    lineHeight: 22,
  },
  prerequisitesCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.warningBg,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.warningAccent,
  },
  prerequisitesIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  prerequisitesText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  startButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
});

// Course content styles
const contentStyles = StyleSheet.create({
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
