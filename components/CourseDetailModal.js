import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalizedCourses } from '../hooks/useLocalizedData';
import CourseContentModal from './CourseContentModal';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function CourseDetailModal({ visible, course, onClose }) {
  const { t } = useTranslation();
  const { categories, difficultyLevels } = useLocalizedCourses();
  const [showContent, setShowContent] = useState(false);

  if (!course) return null;

  const category = categories.find(cat => cat.id === course.category);
  const difficulty = difficultyLevels[course.difficulty];

  const handleStartCourse = () => {
    setShowContent(true);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={onClose} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>{t('courseDetail.title')}</Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Course Header */}
            <View style={[styles.courseHeader, { backgroundColor: category?.color || COLORS.primary }]}>
              <Text style={styles.categoryIcon}>{category?.icon || '📚'}</Text>
              <Text style={styles.courseTitle}>{course.title}</Text>
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
              <Text style={styles.startButtonText}>🚀 {t('courseDetail.startCourse')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Course Content Modal */}
      <CourseContentModal
        visible={showContent}
        course={course}
        onClose={() => setShowContent(false)}
      />
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
  backButtonText: {
    fontSize: 24,
    color: COLORS.textSecondary,
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
