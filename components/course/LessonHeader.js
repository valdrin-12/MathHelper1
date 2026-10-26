import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useLessonStyles } from './courseStyles';

/** Top of the lesson viewer: back button, course title, "3/5" counter, and the row of lesson number tabs. */
export default function LessonHeader({ course, difficulty, lessons, currentLesson, tint, lessonNavRef, onBack, onLessonChange }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useLessonStyles();

  return (
    <>
      {/* Nav bar: plain back button, centered title, lesson counter */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.closeButton} hitSlop={8} accessibilityRole="button" accessibilityLabel={t('a11y.back')}>
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

      {/* Lesson Navigation */}
      <View style={styles.lessonNav}>
        <ScrollView ref={lessonNavRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.lessonNavContent}>
          {lessons.map((l, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.lessonTab,
                currentLesson === index && { backgroundColor: tint },
              ]}
              onPress={() => onLessonChange(index)}
              hitSlop={{ top: 4, bottom: 4 }}
            >
              <Text style={[styles.lessonTabNum, currentLesson === index && styles.lessonTabNumActive]}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
