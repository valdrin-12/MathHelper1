import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useLessonStyles } from './courseStyles';

/** One lesson: theory, key points, worked examples and practice problems with a "show solution" toggle. */
export default function LessonBody({ lesson, currentLesson, tint, expandedPractice, onTogglePractice, scrollRef }) {
  const { t } = useTranslation();
  const styles = useLessonStyles();

  if (!lesson) {
    return (
      <View style={styles.noContent}>
        <Text style={styles.noContentIcon}>📚</Text>
        <Text style={styles.noContentTitle}>{t('courseContent.contentPreparing')}</Text>
        <Text style={styles.noContentText}>{t('courseContent.contentPreparingHint')}</Text>
      </View>
    );
  }

  return (
    <ScrollView ref={scrollRef} style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.lessonHeader}>
        <Text style={styles.lessonNumber}>{t('courseContent.lessonLabel', { number: currentLesson + 1 })}</Text>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
      </View>

      {/* Theory */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionIcon}>📖</Text>
          <Text style={styles.sectionTitle}>{t('courseContent.theory')}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.theoryText}>{lesson.theory}</Text>
        </View>
      </View>

      {/* Key Points */}
      {lesson.keyPoints && lesson.keyPoints.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>💡</Text>
            <Text style={styles.sectionTitle}>{t('courseContent.keyPoints')}</Text>
          </View>
          <View style={[styles.card, styles.keyPointsCard]}>
            {lesson.keyPoints.map((point, i) => (
              <View key={i} style={styles.keyPoint}>
                <View style={[styles.keyPointDot, { backgroundColor: tint }]} />
                <Text style={styles.keyPointText}>{point}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Examples */}
      {lesson.examples && lesson.examples.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>✏️</Text>
            <Text style={styles.sectionTitle}>{t('courseContent.examples')}</Text>
          </View>
          {lesson.examples.map((ex, i) => (
            <View key={i} style={[styles.card, styles.cardSpaced]}>
              <View style={styles.exampleHeader}>
                <Text style={styles.exampleLabel}>{t('courseContent.exampleLabel', { number: i + 1 })}</Text>
              </View>
              <Text style={styles.exampleProblem}>{ex.example}</Text>
              <View style={styles.exampleDivider} />
              <Text style={styles.exampleLabel}>{t('courseContent.solution')}</Text>
              <Text style={styles.exampleSolution}>{ex.solution}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Practice Problems */}
      {lesson.practice && lesson.practice.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🧮</Text>
            <Text style={styles.sectionTitle}>{t('courseContent.practiceProblems')}</Text>
          </View>
          {lesson.practice.map((p, i) => (
            <View key={i} style={[styles.card, styles.cardSpaced]}>
              <Text style={styles.practiceProblem}>{p.problem}</Text>
              <TouchableOpacity
                style={[styles.showSolutionBtn, { backgroundColor: tint + '1F' }]}
                onPress={() => onTogglePractice(i)}
                activeOpacity={0.7}
              >
                <Ionicons name={expandedPractice[i] ? 'chevron-up' : 'chevron-down'} size={16} color={tint} />
                <Text style={[styles.showSolutionText, { color: tint }]}>
                  {expandedPractice[i] ? t('courseContent.hideSolution') : t('courseContent.showSolution')}
                </Text>
              </TouchableOpacity>
              {expandedPractice[i] && (
                <View style={styles.solutionContainer}>
                  <Text style={styles.solutionAnswer}>✓ {p.solution}</Text>
                  {p.steps && p.steps.map((step, si) => (
                    <View key={si} style={styles.stepRow}>
                      <Text style={styles.stepNumber}>{si + 1}.</Text>
                      <Text style={styles.stepText}>{step}</Text>
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
  );
}
