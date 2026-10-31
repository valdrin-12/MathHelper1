import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useLessonStyles } from './courseStyles';
import { getLessonChecks } from '../../../content/lessonChecks';
import LessonCheck from './LessonCheck';
import { Visual } from '../../../shared/visuals';

/**
 * One lesson: theory, key points, worked examples and practice problems.
 * Lessons with questions (content/lessonChecks) are taken step by step, Brilliant-style: one theory
 * paragraph at a time, with a short question after some paragraphs; the rest of the lesson appears
 * when the theory is done ("Show everything" skips this). Examples hide their solution until asked.
 * Rendered with key={lesson index}, so every lesson starts fresh.
 */
export default function LessonBody({ lesson, courseId, currentLesson, tint, expandedPractice, onTogglePractice, scrollRef }) {
  const { t, i18n } = useTranslation();
  const styles = useLessonStyles();
  const lang = (i18n.language || 'al').slice(0, 2);
  const paragraphs = useMemo(() => (lesson?.theory || '').split(/\n\n+/).filter(Boolean), [lesson]);
  const checks = useMemo(() => (lesson ? getLessonChecks(courseId, currentLesson, lang) : []), [courseId, currentLesson, lang, lesson]);
  const stepByStep = checks.length > 0;
  // number of paragraphs shown, and the questions answered (by id)
  const [shown, setShown] = useState(stepByStep ? 1 : paragraphs.length);
  const [answered, setAnswered] = useState({});
  const [openExamples, setOpenExamples] = useState({});
  const theoryDone = shown >= paragraphs.length;

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

      {/* Learning objectives (grade 6–12 lessons) */}
      {lesson.objectives && lesson.objectives.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🎯</Text>
            <Text style={styles.sectionTitle}>{t('courseContent.objectives')}</Text>
          </View>
          <View style={[styles.card, styles.keyPointsCard]}>
            {lesson.objectives.map((o, i) => (
              <View key={i} style={styles.keyPoint}>
                <Ionicons name="checkmark-circle-outline" size={18} color={tint} />
                <Text style={styles.keyPointText}>{o}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Theory */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionIcon}>📖</Text>
          <Text style={styles.sectionTitle}>{t('courseContent.theory')}</Text>
        </View>
        {stepByStep ? (
          <>
            {paragraphs.slice(0, shown).map((p, i) => {
              const after = checks.filter((c) => c.after === i);
              return (
                <View key={i}>
                  <View style={[styles.card, styles.theoryParagraph]}>
                    <Text style={styles.theoryText}>{p}</Text>
                  </View>
                  {after.map((c) => (
                    <LessonCheck key={c.id} check={c} tint={tint} onAnswered={() => setAnswered((prev) => ({ ...prev, [c.id]: true }))} />
                  ))}
                </View>
              );
            })}
            {!theoryDone && (() => {
              // continue once the questions after the last shown paragraph are answered
              const waiting = checks.some((c) => c.after === shown - 1 && !answered[c.id]);
              return (
                <>
                  <TouchableOpacity
                    style={[styles.continueBtn, { backgroundColor: tint, opacity: waiting ? 0.45 : 1 }]}
                    onPress={() => setShown((n) => n + 1)}
                    disabled={waiting}
                    activeOpacity={0.8}
                    accessibilityRole="button"
                    accessibilityState={{ disabled: waiting }}
                  >
                    <Text style={styles.continueText}>{waiting ? t('courseContent.answerToContinue') : t('courseContent.continue')}</Text>
                    {!waiting && <Ionicons name="arrow-down" size={18} color="#FFFFFF" />}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShown(paragraphs.length)} accessibilityRole="button" style={{ alignSelf: 'center', padding: 6 }}>
                    <Text style={[styles.showAllLink, { color: tint }]}>{t('courseContent.showEverything')}</Text>
                  </TouchableOpacity>
                </>
              );
            })()}
          </>
        ) : (
          <View style={styles.card}>
            <Text style={styles.theoryText}>{lesson.theory}</Text>
          </View>
        )}
      </View>

      {theoryDone && (
      <>

      {/* Pictures drawn from data (grade 6–12 lessons) */}
      {lesson.visuals && lesson.visuals.length > 0 && (
        <View style={styles.section}>
          {lesson.visuals.map((v, i) => <Visual key={i} spec={v} />)}
        </View>
      )}

      {/* Key Points */}
      {lesson.keyPoints && lesson.keyPoints.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>💡</Text>
            <Text style={styles.sectionTitle}>{lesson.objectives ? t('courseContent.keyRules') : t('courseContent.keyPoints')}</Text>
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
              {ex.visual && <Visual spec={ex.visual} bare style={{ marginTop: 8 }} />}
              {openExamples[i] ? (
                <>
                  <View style={styles.exampleDivider} />
                  <Text style={styles.exampleLabel}>{t('courseContent.solution')}</Text>
                  <Text style={styles.exampleSolution}>{ex.solution}</Text>
                </>
              ) : (
                // try it first, then look (active recall)
                <TouchableOpacity
                  style={[styles.showSolutionBtn, { backgroundColor: tint + '1F' }]}
                  onPress={() => setOpenExamples((prev) => ({ ...prev, [i]: true }))}
                  activeOpacity={0.7}
                  accessibilityRole="button"
                >
                  <Ionicons name="eye-outline" size={16} color={tint} />
                  <Text style={[styles.showSolutionText, { color: tint }]}>{t('courseContent.tryThenShow')}</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Common mistakes (grade 6–12 lessons) */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>⚠️</Text>
            <Text style={styles.sectionTitle}>{t('courseContent.commonMistakes')}</Text>
          </View>
          {lesson.commonMistakes.map((m, i) => (
            <View key={i} style={[styles.card, styles.cardSpaced, styles.keyPointsCard]}>
              <View style={styles.keyPoint}>
                <Ionicons name="close-circle" size={18} color="#FF3B30" />
                <Text style={styles.keyPointText}>{m.mistake}</Text>
              </View>
              <View style={styles.keyPoint}>
                <Ionicons name="checkmark-circle" size={18} color="#34C759" />
                <Text style={styles.keyPointText}>{m.fix}</Text>
              </View>
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

      </>
      )}

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}
