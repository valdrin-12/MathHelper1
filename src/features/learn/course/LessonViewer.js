import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../shared/theme/ThemeContext';
import { useLessonStyles } from './courseStyles';
import LessonHeader from './LessonHeader';
import LessonBody from './LessonBody';
import LessonToolbar from './LessonToolbar';

/** The lessons of a course: header with tabs, the lesson itself, and the bottom toolbar. */
export default function LessonViewer({
  course, difficulty, lessons, currentLesson, tint, expandedPractice, showResumeMessage,
  completing, courseCompleted, scrollRef, lessonNavRef,
  onBack, onLessonChange, onTogglePractice, onComplete,
}) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useLessonStyles();

  return (
    <SafeAreaView style={styles.safeArea}>
      <LessonHeader
        course={course}
        difficulty={difficulty}
        lessons={lessons}
        currentLesson={currentLesson}
        tint={tint}
        lessonNavRef={lessonNavRef}
        onBack={onBack}
        onLessonChange={onLessonChange}
      />

      {/* Resume Message */}
      {showResumeMessage && (
        <View style={styles.resumeBanner}>
          <Ionicons name="bookmark" size={16} color={colors.warning} />
          <Text style={styles.resumeBannerText}>{t('learn.resumeMessage')}</Text>
        </View>
      )}

      <LessonBody
        key={currentLesson}
        courseId={course.id}
        lesson={lessons[currentLesson]}
        currentLesson={currentLesson}
        tint={tint}
        expandedPractice={expandedPractice}
        onTogglePractice={onTogglePractice}
        scrollRef={scrollRef}
      />

      <LessonToolbar
        lessons={lessons}
        currentLesson={currentLesson}
        tint={tint}
        completing={completing}
        courseCompleted={courseCompleted}
        onLessonChange={onLessonChange}
        onComplete={onComplete}
      />
    </SafeAreaView>
  );
}
