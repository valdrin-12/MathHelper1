import React, { useState, useRef, useEffect, useMemo } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useLocalizedCourses, useLocalizedCourseContent } from '../hooks/useLocalizedData';
import { useStats } from '../context/StatsContext';
import { useTheme } from '../context/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { Button, SectionTitle } from './ui';

const COURSE_PROGRESS_KEY = '@mathhelper_course_progress';

export default function CourseDetailModal({ visible, course, onClose }) {
  const { t } = useTranslation();
  const { categories, difficultyLevels } = useLocalizedCourses();
  const { courseContents } = useLocalizedCourseContent();
  const { recordCourseCompleted } = useStats();
  const [showContent, setShowContent] = useState(false);

  // Course content state
  const [currentLesson, setCurrentLesson] = useState(0);
  const [expandedPractice, setExpandedPractice] = useState({});
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [savedLesson, setSavedLesson] = useState(null);
  const [showResumeMessage, setShowResumeMessage] = useState(false);
  const scrollRef = useRef(null);
  const lessonNavRef = useRef(null);
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const contentStyles = useMemo(() => makeContentStyles(colors), [colors]);

  // Load saved progress when modal opens
  useEffect(() => {
    if (visible && course) {
      loadCourseProgress();
    }
    if (!visible) {
      setShowContent(false);
      setCurrentLesson(0);
      setExpandedPractice({});
      setCourseCompleted(false);
      setSavedLesson(null);
      setShowResumeMessage(false);
    }
  }, [visible, course]);

  const loadCourseProgress = async () => {
    try {
      const data = await AsyncStorage.getItem(COURSE_PROGRESS_KEY);
      if (data) {
        const progress = JSON.parse(data);
        if (progress[course.id] !== undefined && progress[course.id] > 0) {
          setSavedLesson(progress[course.id]);
        }
      }
    } catch (e) {
      console.error('Error loading course progress:', e);
    }
  };

  const saveCourseProgress = async (lessonIndex) => {
    try {
      const data = await AsyncStorage.getItem(COURSE_PROGRESS_KEY);
      const progress = data ? JSON.parse(data) : {};
      progress[course.id] = lessonIndex;
      await AsyncStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Error saving course progress:', e);
    }
  };

  if (!course) return null;

  const category = categories.find(cat => cat.id === course.category);
  const difficulty = difficultyLevels[course.difficulty];
  const content = courseContents[course.id];
  const lessons = content?.lessons || [];
  // Category colour is the accent for the hero icon, lesson tabs, bullets and the Next button
  const tint = category?.color || colors.primary;

  const handleStartCourse = () => {
    if (savedLesson !== null && savedLesson > 0) {
      setCurrentLesson(savedLesson);
      setShowContent(true);
      setShowResumeMessage(true);
      setTimeout(() => setShowResumeMessage(false), 5000);
      // Scroll lesson nav to the saved lesson tab
      setTimeout(() => {
        lessonNavRef.current?.scrollTo({ x: savedLesson * 48, animated: true });
      }, 200);
    } else {
      setShowContent(true);
    }
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
    lessonNavRef.current?.scrollTo({ x: index * 48, animated: true });
    saveCourseProgress(index);
  };

  const handleCompleteCourse = async () => {
    await recordCourseCompleted(course.id, course.title);
    setCourseCompleted(true);
    // Close the course modal immediately, then show success alert
    onClose();
    setTimeout(() => {
      Alert.alert(
        `${t('courseContent.courseCompleted')}`,
        t('courseContent.courseCompletedMessage', { title: course.title }),
        [{ text: t('common.ok') }]
      );
    }, 300);
  };

  const togglePractice = (index) => {
    setExpandedPractice(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // ─── Course Content View ───
  const renderContentView = () => {
    const lesson = lessons[currentLesson];

    return (
      <SafeAreaView style={contentStyles.safeArea}>
        {/* Nav bar: plain back button, centered title, lesson counter */}
        <View style={contentStyles.header}>
          <TouchableOpacity onPress={handleBackFromContent} style={contentStyles.closeButton} hitSlop={8}>
            <Ionicons name="chevron-back" size={26} color={colors.primary} />
          </TouchableOpacity>
          <View style={contentStyles.headerCenter}>
            <Text style={contentStyles.headerTitle} numberOfLines={1}>{course.title}</Text>
            <Text style={contentStyles.headerMeta} numberOfLines={1}>{difficulty?.emoji} {difficulty?.name} · {course.duration}</Text>
          </View>
          <View style={contentStyles.lessonCounter}>
            <Text style={contentStyles.lessonCounterText}>{currentLesson + 1}/{lessons.length}</Text>
          </View>
        </View>

        {/* Lesson Navigation */}
        <View style={contentStyles.lessonNav}>
          <ScrollView ref={lessonNavRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={contentStyles.lessonNavContent}>
            {lessons.map((l, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  contentStyles.lessonTab,
                  currentLesson === index && { backgroundColor: tint },
                ]}
                onPress={() => handleLessonChange(index)}
                hitSlop={{ top: 4, bottom: 4 }}
              >
                <Text style={[contentStyles.lessonTabNum, currentLesson === index && contentStyles.lessonTabNumActive]}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Resume Message */}
        {showResumeMessage && (
          <View style={contentStyles.resumeBanner}>
            <Ionicons name="bookmark" size={16} color={colors.warning} />
            <Text style={contentStyles.resumeBannerText}>{t('learn.resumeMessage')}</Text>
          </View>
        )}

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
              <View style={contentStyles.card}>
                <Text style={contentStyles.theoryText}>{lesson.theory}</Text>
              </View>
            </View>

            {/* Key Points */}
            {lesson.keyPoints && lesson.keyPoints.length > 0 && (
              <View style={contentStyles.section}>
                <View style={contentStyles.sectionHeader}>
                  <Text style={contentStyles.sectionIcon}>💡</Text>
                  <Text style={contentStyles.sectionTitle}>{t('courseContent.keyPoints')}</Text>
                </View>
                <View style={[contentStyles.card, contentStyles.keyPointsCard]}>
                  {lesson.keyPoints.map((point, i) => (
                    <View key={i} style={contentStyles.keyPoint}>
                      <View style={[contentStyles.keyPointDot, { backgroundColor: tint }]} />
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
                  <View key={i} style={[contentStyles.card, contentStyles.cardSpaced]}>
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
                  <View key={i} style={[contentStyles.card, contentStyles.cardSpaced]}>
                    <Text style={contentStyles.practiceProblem}>{p.problem}</Text>
                    <TouchableOpacity
                      style={[contentStyles.showSolutionBtn, { backgroundColor: tint + '1F' }]}
                      onPress={() => togglePractice(i)}
                      activeOpacity={0.7}
                    >
                      <Text style={[contentStyles.showSolutionText, { color: tint }]}>
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

        {/* Bottom toolbar: tinted Previous, progress dots, filled Next / Complete */}
        <View style={contentStyles.bottomNav}>
          <TouchableOpacity
            style={[contentStyles.navButton, currentLesson === 0 && contentStyles.navButtonDisabled]}
            onPress={() => currentLesson > 0 && handleLessonChange(currentLesson - 1)}
            disabled={currentLesson === 0}
            activeOpacity={0.7}
          >
            <View style={contentStyles.navButtonInner}>
              <Ionicons name="chevron-back" size={18} color={currentLesson === 0 ? colors.textMuted : colors.text} />
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
                    realIndex === currentLesson && [contentStyles.dotActive, { backgroundColor: tint }],
                  ]}
                />
              );
            })}
          </View>
          {currentLesson === lessons.length - 1 ? (
            <TouchableOpacity
              style={[contentStyles.navButton, contentStyles.navButtonNext, contentStyles.completeButton]}
              onPress={handleCompleteCourse}
              activeOpacity={0.7}
            >
              <Text style={contentStyles.navButtonNextText}>
                {courseCompleted ? `✓ ${t('courseContent.completed')}` : `${t('courseContent.completeCourse')}`}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[contentStyles.navButton, contentStyles.navButtonNext, { backgroundColor: tint }]}
              onPress={() => handleLessonChange(currentLesson + 1)}
              activeOpacity={0.7}
            >
              <View style={contentStyles.navButtonInner}>
                <Text style={contentStyles.navButtonNextText}>{t('courseContent.next')}</Text>
                <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
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
        {/* Sheet nav bar: plain back button, centered title */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton} hitSlop={8}>
            <Ionicons name="chevron-back" size={26} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>{t('courseDetail.title')}</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Content */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentInner} showsVerticalScrollIndicator={false}>
          {/* Course Header */}
          <View style={styles.courseHeader}>
            <View style={[styles.categoryIconBox, { backgroundColor: tint + '1F' }]}>
              <Text style={styles.categoryIcon}>{category?.icon || '📚'}</Text>
            </View>
            <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
            <Text style={styles.categoryName}>{category?.name}</Text>
          </View>

          {/* Meta Information */}
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Text style={styles.metaIcon}>{difficulty?.emoji}</Text>
              <Text style={styles.metaLabel}>{t('courseDetail.level')}</Text>
              <Text style={styles.metaValue} numberOfLines={1}>{difficulty?.name}</Text>
            </View>
            <View style={styles.metaDivider} />
            <View style={styles.metaItem}>
              <Text style={styles.metaIcon}>⏱</Text>
              <Text style={styles.metaLabel}>{t('courseDetail.duration')}</Text>
              <Text style={styles.metaValue} numberOfLines={1}>{course.duration}</Text>
            </View>
            <View style={styles.metaDivider} />
            <View style={styles.metaItem}>
              <Text style={styles.metaIcon}>📚</Text>
              <Text style={styles.metaLabel}>{t('courseDetail.lessons')}</Text>
              <Text style={styles.metaValue} numberOfLines={1}>{course.lessons}</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <SectionTitle style={styles.sectionTitle}>{t('courseDetail.description')}</SectionTitle>
            <View style={styles.card}>
              <Text style={styles.descriptionText}>{course.description}</Text>
            </View>
          </View>

          {/* Topics Covered */}
          <View style={styles.section}>
            <SectionTitle style={styles.sectionTitle}>{t('courseDetail.whatYouLearn')}</SectionTitle>
            <View style={styles.listCard}>
              {course.topics.map((topic, index) => (
                <View key={index}>
                  <View style={styles.listItem}>
                    <Text style={[styles.topicBullet, { color: tint }]}>•</Text>
                    <Text style={styles.listItemText}>{topic}</Text>
                  </View>
                  {index < course.topics.length - 1 && <View style={styles.listDivider} />}
                </View>
              ))}
            </View>
          </View>

          {/* Learning Outcomes */}
          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <View style={styles.section}>
              <SectionTitle style={styles.sectionTitle}>{t('courseDetail.learningOutcomes')}</SectionTitle>
              <View style={styles.listCard}>
                {course.learningOutcomes.map((outcome, index) => (
                  <View key={index}>
                    <View style={styles.listItem}>
                      <Text style={styles.outcomeIcon}>✓</Text>
                      <Text style={styles.listItemText}>{outcome}</Text>
                    </View>
                    {index < course.learningOutcomes.length - 1 && <View style={styles.listDivider} />}
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Prerequisites */}
          {course.prerequisites && course.prerequisites.length > 0 && (
            <View style={styles.section}>
              <SectionTitle style={styles.sectionTitle}>{t('courseDetail.prerequisites')}</SectionTitle>
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
          <Button title={t('courseDetail.startCourse')} onPress={handleStartCourse} />
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

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },

  // Sheet nav bar
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingHorizontal: SPACING.xs,
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...TYPOGRAPHY.headline,
    flex: 1,
    textAlign: 'center',
    color: colors.text,
  },
  headerSpacer: {
    width: 44,
  },
  content: {
    flex: 1,
  },
  contentInner: {
    paddingHorizontal: SPACING.lg,
  },

  // Hero
  courseHeader: {
    alignItems: 'center',
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  categoryIconBox: {
    width: 72,
    height: 72,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  categoryIcon: {
    fontSize: 36,
  },
  courseTitle: {
    ...TYPOGRAPHY.h2,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  categoryName: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },

  // Meta card: three columns split by hairlines
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
  },
  metaItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SPACING.xs,
  },
  metaDivider: {
    width: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    backgroundColor: colors.border,
  },
  metaIcon: {
    fontSize: 22,
    marginBottom: SPACING.xs,
  },
  metaLabel: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginBottom: 2,
  },
  metaValue: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
  },

  // Sections
  section: {
    marginTop: SPACING.xxl,
  },
  sectionTitle: {
    marginLeft: SPACING.xs,
    marginBottom: SPACING.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
  },
  descriptionText: {
    ...TYPOGRAPHY.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },
  listCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: 44,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  listDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginLeft: SPACING.lg + 24,
  },
  topicBullet: {
    width: 24,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '700',
  },
  outcomeIcon: {
    width: 24,
    ...TYPOGRAPHY.bodyBold,
    color: colors.success,
  },
  listItemText: {
    flex: 1,
    ...TYPOGRAPHY.body,
    color: colors.text,
  },
  prerequisitesCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.warningLight,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  prerequisitesIcon: {
    fontSize: 18,
    marginRight: SPACING.md,
  },
  prerequisitesText: {
    flex: 1,
    ...TYPOGRAPHY.subhead,
    color: colors.text,
  },

  // Footer
  footer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    backgroundColor: colors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
});

// Course content styles
const makeContentStyles = (colors) => StyleSheet.create({
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

  // Resume banner
  resumeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.warningLight,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm + 2,
    gap: SPACING.sm,
  },
  resumeBannerText: {
    flex: 1,
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.text,
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
