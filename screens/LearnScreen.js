import { useState, useMemo, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalizedCourses } from '../hooks/useLocalizedData';
import { useStats } from '../context/StatsContext';
import { useUser } from '../context/UserContext';
import { FREE_COURSE_IDS } from '../data/coursesData';
import { isPremiumActive } from '../utils/isPremium';
import CourseDetailModal from '../components/CourseDetailModal';
import PremiumModal from '../components/PremiumModal';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { ScreenHeader, SearchField, Chip, Pill, EmptyState } from '../components/ui';
import WebContainer from '../components/WebContainer';
import PressableCard from '../components/PressableCard';
import { useResponsive } from '../utils/responsive';

const COURSE_PROGRESS_KEY = '@mathhelper_course_progress';

export default function LearnScreen() {
  const { isWeb, isDesktop } = useResponsive();
  const { t } = useTranslation();
  const { courses, categories, difficultyLevels, search } = useLocalizedCourses();
  const { stats } = useStats();
  const { user } = useUser();
  const isPremium = isPremiumActive(user);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [courseProgress, setCourseProgress] = useState({});

  // Load course progress from AsyncStorage
  const loadCourseProgress = useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem(COURSE_PROGRESS_KEY);
      if (data) setCourseProgress(JSON.parse(data));
    } catch (e) {
      console.error('Error loading course progress:', e);
    }
  }, []);

  useEffect(() => {
    loadCourseProgress();
  }, [loadCourseProgress]);

  // Reload progress when modal closes
  const handleCloseModal = () => {
    setShowCourseModal(false);
    setSelectedCourse(null);
    loadCourseProgress();
  };

  // Get course status: 'completed', 'learning', or 'start'
  const getCourseStatus = (courseId) => {
    const completedCourses = stats?.completedCourses || [];
    if (completedCourses.some(c => c.courseId === courseId)) return 'completed';
    if (courseProgress[courseId] !== undefined) return 'learning';
    return 'start';
  };

  const filteredCourses = useMemo(() => {
    let result = courses;
    if (searchQuery.trim()) {
      result = search(searchQuery);
    }
    if (selectedCategory !== 'all') {
      result = result.filter(course => course.category === selectedCategory);
    }
    if (selectedDifficulty !== 'all') {
      result = result.filter(course => course.difficulty === selectedDifficulty);
    }
    return result;
  }, [selectedCategory, selectedDifficulty, searchQuery, courses]);

  const isCourseLocked = (courseId) => !isPremium && !FREE_COURSE_IDS.includes(courseId);

  const handleCoursePress = (course) => {
    if (isCourseLocked(course.id)) {
      setShowPremiumModal(true);
      return;
    }
    setSelectedCourse(course);
    setShowCourseModal(true);
  };

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
  };

  const getDifficultyInfo = (difficultyKey) => {
    return difficultyLevels[difficultyKey];
  };

  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const statusInfo = {
    completed: { label: t('learn.statusCompleted'), icon: 'checkmark-circle', color: colors.success },
    learning: { label: t('learn.statusLearning'), icon: 'play-circle', color: colors.secondary },
    start: { label: t('learn.statusStart'), icon: 'arrow-forward-circle', color: colors.primary },
  };

  return (
    <View style={styles.container}>
      <WebContainer>
      <ScreenHeader
        title={t('learn.title')}
        subtitle={t('learn.coursesAvailable', { count: courses.length })}
      />

      <SearchField
        style={styles.search}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t('learn.searchPlaceholder')}
      />

      {/* Category & Difficulty Filters - compact single rows */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterContent}>
        <Chip icon="grid" label={t('common.all')} active={selectedCategory === 'all'} onPress={() => setSelectedCategory('all')} />
        {categories.map((category) => (
          <Chip
            key={category.id}
            emoji={category.icon}
            label={category.name}
            color={category.color}
            active={selectedCategory === category.id}
            onPress={() => setSelectedCategory(category.id)}
          />
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterContent}>
        <Chip icon="layers" label={t('common.all')} active={selectedDifficulty === 'all'} onPress={() => setSelectedDifficulty('all')} />
        {Object.entries(difficultyLevels).map(([key, level]) => (
          <Chip
            key={key}
            emoji={level.emoji}
            label={level.name}
            color={level.color}
            active={selectedDifficulty === key}
            onPress={() => setSelectedDifficulty(key)}
          />
        ))}
      </ScrollView>

      <Text style={styles.resultsCount}>{t('learn.courseCount', { count: filteredCourses.length })}</Text>
      </WebContainer>

      {/* Courses List */}
      <ScrollView style={styles.coursesContainer} showsVerticalScrollIndicator={false}>
        <WebContainer>
        {filteredCourses.length === 0 ? (
          <EmptyState icon="book-outline" title={t('learn.noCourseFound')} message={t('learn.tryDifferentFilters')} />
        ) : (
          <View style={[styles.coursesGrid, isDesktop && styles.coursesGridDesktop]}>
            {filteredCourses.map((course) => {
              const category = getCategoryInfo(course.category);
              const difficulty = getDifficultyInfo(course.difficulty);
              const status = statusInfo[getCourseStatus(course.id)];
              const locked = isCourseLocked(course.id);
              const tint = category?.color || colors.primary;

              return (
                <PressableCard
                  key={course.id}
                  style={[styles.courseCard, isDesktop && styles.courseCardDesktop]}
                  onPress={() => handleCoursePress(course)}
                >
                  <View style={styles.courseTop}>
                    <View style={[styles.courseIconBox, { backgroundColor: tint + '1F' }]}>
                      <Text style={[styles.courseIcon, { color: tint }]}>{category?.icon || '📚'}</Text>
                    </View>
                    <View style={styles.courseText}>
                      <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
                      <Text style={styles.courseDescription} numberOfLines={2}>{course.description}</Text>
                    </View>
                  </View>

                  <View style={styles.courseMetaRow}>
                    <Text style={styles.courseMetaText} numberOfLines={1}>
                      {difficulty?.emoji} {difficulty?.name}  ·  {course.duration}  ·  {course.lessons} {t('learn.lessons')}
                    </Text>
                  </View>

                  <View style={styles.courseFooter}>
                    {locked ? (
                      <Pill icon="lock-closed" label="PRO" color={colors.secondary} filled />
                    ) : (
                      <Pill icon={status.icon} label={status.label} color={status.color} />
                    )}
                    <Text style={[styles.courseActionText, locked && { color: colors.secondary }]}>
                      {locked ? t('premium.unlockPro') : t('learn.viewDetails')}
                    </Text>
                  </View>
                </PressableCard>
              );
            })}
          </View>
        )}

        <View style={{ height: isWeb ? 20 : 100 }} />
        </WebContainer>
      </ScrollView>

      {/* Course Detail Modal */}
      <CourseDetailModal
        visible={showCourseModal}
        course={selectedCourse}
        onClose={handleCloseModal}
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
  search: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
  },
  filterScroll: {
    flexGrow: 0,
    marginTop: SPACING.sm + 2,
  },
  filterContent: {
    paddingHorizontal: SPACING.lg,
  },
  resultsCount: {
    ...TYPOGRAPHY.footnote,
    textTransform: 'uppercase',
    color: colors.textSubtle,
    marginHorizontal: SPACING.xl,
    marginTop: SPACING.lg,
    marginBottom: SPACING.xs,
  },
  coursesContainer: {
    flex: 1,
  },
  coursesGrid: {
    padding: SPACING.lg,
    paddingTop: SPACING.sm,
    gap: SPACING.md,
  },
  coursesGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  // Course card
  courseCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
  },
  courseCardDesktop: {
    flexBasis: '48%',
    flexGrow: 0,
  },
  courseTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  courseIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  courseIcon: {
    fontSize: 24,
  },
  courseText: {
    flex: 1,
  },
  courseTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  courseDescription: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    marginTop: 2,
  },
  courseMetaRow: {
    marginTop: SPACING.md,
    marginLeft: 48 + SPACING.md,
  },
  courseMetaText: {
    ...TYPOGRAPHY.footnote,
    color: colors.textMuted,
  },
  courseFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.md,
    paddingTop: SPACING.md,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  courseActionText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.primary,
  },
});
