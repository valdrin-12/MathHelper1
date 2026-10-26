import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { Button, SectionTitle } from '../ui';
import { useDetailStyles } from './courseStyles';

/**
 * The page of a course before the lessons: description, topics, outcomes, prerequisites,
 * and the Start / Continue button.
 * @param {{ category, difficulty, tint: string, resumeLesson: number|null }} props
 */
export default function CourseOverview({ course, category, difficulty, tint, resumeLesson, onClose, onStart }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useDetailStyles();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Sheet nav bar: plain back button, centered title */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton} hitSlop={8} accessibilityRole="button" accessibilityLabel={t('a11y.back')}>
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
          <Button
            title={resumeLesson !== null && resumeLesson > 0 ? t('common.continue') : t('courseDetail.startCourse')}
            onPress={onStart}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
