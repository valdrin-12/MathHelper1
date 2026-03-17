import { useState, useMemo, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
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
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme/constants';
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

  return (
    <View style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient
        colors={[COLORS.primary, COLORS.primarySoft, COLORS.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.headerGradient, isWeb && { paddingTop: 20 }]}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerTitle}>{t('learn.title')}</Text>
            <Text style={styles.headerSubtitle}>
              {t('learn.coursesAvailable', { count: courses.length })}
            </Text>
          </View>
          <View style={styles.headerIconBox}>
            <Ionicons name="school" size={28} color="rgba(255,255,255,0.9)" />
          </View>
        </View>

        {/* Search Bar inside header */}
        <View style={styles.glassSearchContainer}>
          <Ionicons name="search" size={20} color="rgba(255,255,255,0.7)" />
          <TextInput
            style={styles.glassSearchInput}
            placeholder={t('learn.searchPlaceholder')}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="rgba(255,255,255,0.5)"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="rgba(255,255,255,0.7)" />
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>

      {/* Category & Difficulty Filters - Compact Single Row */}
      <View style={styles.filterRow}>
        <Text style={styles.filterLabel}>{t('learn.categories')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          <TouchableOpacity
            style={[styles.chipSmall, selectedCategory === 'all' && styles.chipSmallActive]}
            onPress={() => setSelectedCategory('all')}
          >
            <Ionicons name="grid" size={13} color={selectedCategory === 'all' ? '#FFFFFF' : COLORS.textSecondary} />
            <Text style={[styles.chipSmallText, selectedCategory === 'all' && styles.chipSmallTextActive]}>{t('common.all')}</Text>
          </TouchableOpacity>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.chipSmall,
                selectedCategory === category.id && styles.chipSmallActive,
                selectedCategory === category.id && { backgroundColor: category.color, borderColor: category.color },
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={{ fontSize: 13 }}>{category.icon}</Text>
              <Text style={[styles.chipSmallText, selectedCategory === category.id && styles.chipSmallTextActive]}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.filterLabel}>{t('learn.level')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          <TouchableOpacity
            style={[styles.chipSmall, selectedDifficulty === 'all' && styles.chipSmallActive]}
            onPress={() => setSelectedDifficulty('all')}
          >
            <Ionicons name="layers" size={13} color={selectedDifficulty === 'all' ? '#FFFFFF' : COLORS.textSecondary} />
            <Text style={[styles.chipSmallText, selectedDifficulty === 'all' && styles.chipSmallTextActive]}>{t('common.all')}</Text>
          </TouchableOpacity>
          {Object.entries(difficultyLevels).map(([key, level]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.chipSmall,
                selectedDifficulty === key && styles.chipSmallActive,
                selectedDifficulty === key && { backgroundColor: level.color, borderColor: level.color },
              ]}
              onPress={() => setSelectedDifficulty(key)}
            >
              <Text style={{ fontSize: 13 }}>{level.emoji}</Text>
              <Text style={[styles.chipSmallText, selectedDifficulty === key && styles.chipSmallTextActive]}>{level.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results Count */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          {t('learn.courseCount', { count: filteredCourses.length })}
        </Text>
      </View>

      {/* Courses List */}
      <ScrollView style={styles.coursesContainer} showsVerticalScrollIndicator={false}>
        <WebContainer>
        {filteredCourses.length === 0 ? (
          <View style={styles.emptyContainer}>
            <View style={styles.illustrationContainer}>
              <View style={styles.illustrationBgCircle}>
                <View style={styles.emptyIconBox}>
                  <Ionicons name="book-outline" size={36} color={COLORS.primaryLight} />
                </View>
              </View>
              <View style={[styles.floatingBubble, styles.floatingTopRight]}>
                <Ionicons name="search" size={16} color={COLORS.primarySoft} />
              </View>
              <View style={[styles.floatingBubble, styles.floatingBottomLeft]}>
                <Ionicons name="school" size={14} color={COLORS.secondary} />
              </View>
            </View>
            <Text style={styles.emptyTitle}>{t('learn.noCourseFound')}</Text>
            <Text style={styles.emptyText}>
              {t('learn.tryDifferentFilters')}
            </Text>
          </View>
        ) : (
          <View style={[styles.coursesGrid, isDesktop && { flexDirection: 'row', flexWrap: 'wrap', gap: 16 }]}>
            {filteredCourses.map((course) => {
              const category = getCategoryInfo(course.category);
              const difficulty = getDifficultyInfo(course.difficulty);
              const status = getCourseStatus(course.id);
              const locked = isCourseLocked(course.id);

              return (
                <PressableCard
                  key={course.id}
                  style={[
                    styles.glassCourseCard,
                    isDesktop && { flexBasis: '48%', flexGrow: 0 },
                    locked && { opacity: 0.75 },
                  ]}
                  onPress={() => handleCoursePress(course)}
                >
                  {/* Glass layer */}
                  <View style={styles.glassLayer} />

                  {/* Course Header */}
                  <LinearGradient
                    colors={[category?.color || COLORS.primary, (category?.color || COLORS.primary) + 'CC']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.courseCardHeader}
                  >
                    <Text style={styles.courseIcon}>{category?.icon || '📚'}</Text>
                    <View style={{ alignItems: 'flex-end', gap: 6 }}>
                      {/* PRO badge for locked courses */}
                      {locked && (
                        <View style={styles.proBadge}>
                          <Ionicons name="lock-closed" size={11} color="#FFFFFF" />
                          <Text style={styles.proBadgeText}>PRO</Text>
                        </View>
                      )}
                      <View style={styles.difficultyBadge}>
                        <Text style={styles.difficultyBadgeText}>
                          {difficulty?.emoji} {difficulty?.name}
                        </Text>
                      </View>
                      {/* Course Status Badge - only show for unlocked */}
                      {!locked && (
                        <View style={[
                          styles.statusBadge,
                          status === 'completed' && styles.statusBadgeCompleted,
                          status === 'learning' && styles.statusBadgeLearning,
                          status === 'start' && styles.statusBadgeStart,
                        ]}>
                          <Ionicons
                            name={status === 'completed' ? 'checkmark-circle' : status === 'learning' ? 'play-circle' : 'arrow-forward-circle'}
                            size={12}
                            color="#FFFFFF"
                          />
                          <Text style={styles.statusBadgeText}>
                            {status === 'completed' ? t('learn.statusCompleted') : status === 'learning' ? t('learn.statusLearning') : t('learn.statusStart')}
                          </Text>
                        </View>
                      )}
                    </View>
                  </LinearGradient>

                  {/* Course Content */}
                  <View style={styles.courseCardContent}>
                    <Text style={styles.courseTitle} numberOfLines={2}>
                      {course.title}
                    </Text>
                    <Text style={styles.courseDescription} numberOfLines={2}>
                      {course.description}
                    </Text>

                    {/* Meta Info */}
                    <View style={styles.glassMeta}>
                      <View style={styles.courseMeta}>
                        <Ionicons name="time-outline" size={15} color={COLORS.textMuted} />
                        <Text style={styles.courseMetaText}>{course.duration}</Text>
                      </View>
                      <View style={styles.courseMeta}>
                        <Ionicons name="document-text-outline" size={15} color={COLORS.textMuted} />
                        <Text style={styles.courseMetaText}>
                          {course.lessons} {t('learn.lessons')}
                        </Text>
                      </View>
                    </View>

                    {/* Footer */}
                    <TouchableOpacity
                      style={styles.viewCourseButton}
                      onPress={() => handleCoursePress(course)}
                    >
                      <Text style={styles.viewCourseButtonText}>
                        {locked ? t('premium.unlockPro') : t('learn.viewDetails')}
                      </Text>
                      <Ionicons
                        name={locked ? 'lock-closed' : 'arrow-forward'}
                        size={16}
                        color={locked ? '#F59E0B' : COLORS.primarySoft}
                      />
                    </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Header Gradient
  headerGradient: {
    paddingHorizontal: SPACING.xl,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  headerIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },

  // Glass Search
  glassSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    gap: 10,
  },
  glassSearchInput: {
    flex: 1,
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500',
  },

  // Filters - Compact
  filterRow: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.sm,
    paddingBottom: 2,
  },
  filterLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  filterScroll: {
    flexGrow: 0,
  },
  chipSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.glassBackground,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: BORDER_RADIUS.round,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: COLORS.glassBorder,
    gap: 4,
    ...SHADOWS.small,
  },
  chipSmallActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    ...SHADOWS.primary,
  },
  chipSmallText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textSecondary,
  },
  chipSmallTextActive: {
    color: '#FFFFFF',
  },
  resultsHeader: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: 10,
  },
  resultsCount: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: -0.3,
  },
  coursesContainer: {
    flex: 1,
  },
  coursesGrid: {
    padding: SPACING.xl,
    paddingTop: 6,
    gap: 16,
  },

  // Glassmorphism Course Card
  glassCourseCard: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: COLORS.glassBackground,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    marginBottom: 2,
    ...SHADOWS.glass,
  },
  glassLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.glassBackgroundDark,
    borderRadius: 16,
  },
  courseCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.xl,
    paddingBottom: 16,
  },
  courseIcon: {
    fontSize: 40,
  },
  difficultyBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  difficultyBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  courseCardContent: {
    padding: SPACING.xl,
    paddingTop: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  courseDescription: {
    fontSize: 14,
    color: COLORS.textSubtle,
    lineHeight: 20,
    marginBottom: 14,
  },
  glassMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: COLORS.glassBackgroundDark,
    borderRadius: 10,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  courseMetaText: {
    fontSize: 13,
    color: COLORS.textSubtle,
    fontWeight: '600',
  },
  viewCourseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: COLORS.glassBorder,
    paddingTop: 14,
    gap: 4,
  },
  viewCourseButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primarySoft,
  },

  // PRO Badge for locked courses
  proBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.9)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    gap: 4,
  },
  proBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  // Status Badge
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.round,
    gap: 4,
  },
  statusBadgeCompleted: {
    backgroundColor: 'rgba(16, 185, 129, 0.85)',
  },
  statusBadgeLearning: {
    backgroundColor: 'rgba(245, 158, 11, 0.85)',
  },
  statusBadgeStart: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 60,
  },
  illustrationContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  illustrationBgCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.inputBorder,
  },
  emptyIconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  floatingBubble: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  floatingTopRight: {
    top: 2,
    right: 0,
  },
  floatingBottomLeft: {
    bottom: 2,
    left: 0,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
