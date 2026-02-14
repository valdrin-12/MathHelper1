import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalizedCourses } from '../hooks/useLocalizedData';
import CourseDetailModal from '../components/CourseDetailModal';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

const { width } = Dimensions.get('window');

export default function LearnScreen() {
  const { t } = useTranslation();
  const { courses, categories, difficultyLevels, search } = useLocalizedCourses();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);

  // Filter courses based on selections
  const filteredCourses = useMemo(() => {
    let result = courses;

    // Filter by search query
    if (searchQuery.trim()) {
      result = search(searchQuery);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(course => course.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      result = result.filter(course => course.difficulty === selectedDifficulty);
    }

    return result;
  }, [selectedCategory, selectedDifficulty, searchQuery, courses]);

  const handleCoursePress = (course) => {
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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('learn.title')}</Text>
        <Text style={styles.headerSubtitle}>
          {t('learn.coursesAvailable', { count: courses.length })}
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={t('learn.searchPlaceholder')}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={COLORS.textMuted}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category Filters */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>{t('learn.categories')}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
        >
          <TouchableOpacity
            style={[
              styles.categoryChip,
              selectedCategory === 'all' && styles.categoryChipActive,
            ]}
            onPress={() => setSelectedCategory('all')}
          >
            <Text
              style={[
                styles.categoryChipText,
                selectedCategory === 'all' && styles.categoryChipTextActive,
              ]}
            >
              {t('common.all')}
            </Text>
          </TouchableOpacity>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryChip,
                selectedCategory === category.id && styles.categoryChipActive,
                selectedCategory === category.id && {
                  backgroundColor: category.color,
                  borderColor: category.color,
                },
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={styles.categoryChipIcon}>{category.icon}</Text>
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === category.id && styles.categoryChipTextActive,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Difficulty Filters */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>{t('learn.level')}</Text>
        <View style={styles.difficultyContainer}>
          <TouchableOpacity
            style={[
              styles.difficultyChip,
              selectedDifficulty === 'all' && styles.difficultyChipActive,
            ]}
            onPress={() => setSelectedDifficulty('all')}
          >
            <Text
              style={[
                styles.difficultyChipText,
                selectedDifficulty === 'all' && styles.difficultyChipTextActive,
              ]}
            >
              {t('common.all')}
            </Text>
          </TouchableOpacity>
          {Object.entries(difficultyLevels).map(([key, level]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.difficultyChip,
                selectedDifficulty === key && styles.difficultyChipActive,
                selectedDifficulty === key && {
                  backgroundColor: level.color,
                  borderColor: level.color,
                },
              ]}
              onPress={() => setSelectedDifficulty(key)}
            >
              <Text style={styles.difficultyEmoji}>{level.emoji}</Text>
              <Text
                style={[
                  styles.difficultyChipText,
                  selectedDifficulty === key && styles.difficultyChipTextActive,
                ]}
              >
                {level.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Results Count */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          {t('learn.courseCount', { count: filteredCourses.length })}
        </Text>
      </View>

      {/* Courses List */}
      <ScrollView style={styles.coursesContainer} showsVerticalScrollIndicator={false}>
        {filteredCourses.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyTitle}>{t('learn.noCourseFound')}</Text>
            <Text style={styles.emptyText}>
              {t('learn.tryDifferentFilters')}
            </Text>
          </View>
        ) : (
          <View style={styles.coursesGrid}>
            {filteredCourses.map((course) => {
              const category = getCategoryInfo(course.category);
              const difficulty = getDifficultyInfo(course.difficulty);

              return (
                <TouchableOpacity
                  key={course.id}
                  style={styles.courseCard}
                  onPress={() => handleCoursePress(course)}
                >
                  {/* Course Header */}
                  <View
                    style={[
                      styles.courseCardHeader,
                      { backgroundColor: category?.color || COLORS.primary },
                    ]}
                  >
                    <Text style={styles.courseIcon}>{category?.icon || '📚'}</Text>
                    <View style={styles.difficultyBadge}>
                      <Text style={styles.difficultyBadgeText}>
                        {difficulty?.emoji} {difficulty?.name}
                      </Text>
                    </View>
                  </View>

                  {/* Course Content */}
                  <View style={styles.courseCardContent}>
                    <Text style={styles.courseTitle} numberOfLines={2}>
                      {course.title}
                    </Text>
                    <Text style={styles.courseDescription} numberOfLines={2}>
                      {course.description}
                    </Text>

                    {/* Meta Info */}
                    <View style={styles.courseMetaContainer}>
                      <View style={styles.courseMeta}>
                        <Text style={styles.courseMetaIcon}>⏱</Text>
                        <Text style={styles.courseMetaText}>{course.duration}</Text>
                      </View>
                      <View style={styles.courseMeta}>
                        <Text style={styles.courseMetaIcon}>📚</Text>
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
                        {t('learn.viewDetails')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Course Detail Modal */}
      <CourseDetailModal
        visible={showCourseModal}
        course={selectedCourse}
        onClose={() => {
          setShowCourseModal(false);
          setSelectedCourse(null);
        }}
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
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textOnPrimary,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textOnPrimary,
    opacity: 0.9,
  },
  searchContainer: {
    padding: SPACING.xl,
    paddingBottom: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: 15,
    paddingVertical: 12,
    ...SHADOWS.small,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textDark,
  },
  clearIcon: {
    fontSize: 20,
    color: COLORS.textMuted,
    paddingHorizontal: 5,
  },
  filterSection: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: 10,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 10,
  },
  filterScroll: {
    flexGrow: 0,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.xl,
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    gap: 6,
  },
  categoryChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryChipIcon: {
    fontSize: 16,
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  categoryChipTextActive: {
    color: COLORS.textOnPrimary,
  },
  difficultyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  difficultyChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    gap: 6,
  },
  difficultyChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  difficultyEmoji: {
    fontSize: 16,
  },
  difficultyChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  difficultyChipTextActive: {
    color: COLORS.textOnPrimary,
  },
  resultsHeader: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: 10,
  },
  resultsCount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  coursesContainer: {
    flex: 1,
  },
  coursesGrid: {
    padding: SPACING.xl,
    paddingTop: 10,
    gap: 15,
  },
  courseCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    ...SHADOWS.medium,
  },
  courseCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.xl,
    paddingBottom: 15,
  },
  courseIcon: {
    fontSize: 40,
  },
  difficultyBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: BORDER_RADIUS.md,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.md,
  },
  difficultyBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.textOnPrimary,
  },
  courseCardContent: {
    padding: SPACING.xl,
    paddingTop: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },
  courseDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 15,
  },
  courseMetaContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  courseMetaIcon: {
    fontSize: 14,
  },
  courseMetaText: {
    fontSize: 13,
    color: COLORS.textMuted,
  },
  viewCourseButton: {
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    paddingTop: BORDER_RADIUS.md,
    alignItems: 'flex-end',
  },
  viewCourseButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 60,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
