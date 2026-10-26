import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { useLessonStyles } from './courseStyles';

/** Bottom bar of the lesson viewer: Previous, progress dots, and Next (or Complete on the last lesson). */
export default function LessonToolbar({ lessons, currentLesson, tint, completing, courseCompleted, onLessonChange, onComplete }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useLessonStyles();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={[styles.navButton, currentLesson === 0 && styles.navButtonDisabled]}
        onPress={() => currentLesson > 0 && onLessonChange(currentLesson - 1)}
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
          onPress={onComplete}
          disabled={completing || courseCompleted}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityState={{ disabled: completing, busy: completing }}
        >
          <View style={styles.navButtonInner}>
            {courseCompleted ? <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" /> : null}
            <Text style={styles.navButtonNextText}>
              {courseCompleted ? t('courseContent.completed') : t('courseContent.completeCourse')}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.navButton, styles.navButtonNext, { backgroundColor: tint }]}
          onPress={() => onLessonChange(currentLesson + 1)}
          activeOpacity={0.7}
        >
          <View style={styles.navButtonInner}>
            <Text style={styles.navButtonNextText}>{t('courseContent.next')}</Text>
            <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
