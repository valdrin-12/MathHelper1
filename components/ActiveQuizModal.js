import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui';

export default function ActiveQuizModal({ visible, quizSet, onClose, onComplete }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  useEffect(() => {
    if (visible) {
      setCurrentIndex(0);
      setSelectedOption(null);
      setShowExplanation(false);
      setAnswers([]);
      setShowQuitConfirm(false);
      // Reset fade animation so content is visible for the new quiz
      fadeAnim.setValue(1);
    }
  }, [visible, fadeAnim]);

  if (!quizSet) return null;

  const currentQuestion = quizSet.questions[currentIndex];
  const totalQuestions = quizSet.questions.length;
  const progress = (currentIndex + (showExplanation ? 1 : 0)) / totalQuestions;

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(index);
    setShowExplanation(true);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === currentQuestion.correct;
    const newAnswers = [...answers, { questionId: currentQuestion.id, selected: selectedOption, correct: isCorrect }];

    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
    ]).start(() => {
      if (currentIndex + 1 >= totalQuestions) {
        onComplete(newAnswers, quizSet);
      } else {
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
        setShowExplanation(false);
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
      }
    });
  };

  const handleQuit = () => {
    setShowQuitConfirm(true);
  };

  const getOptionStyle = (index) => {
    if (selectedOption === null) return styles.optionButton;
    if (index === currentQuestion.correct) return [styles.optionButton, styles.optionCorrect];
    if (index === selectedOption && index !== currentQuestion.correct) return [styles.optionButton, styles.optionWrong];
    return [styles.optionButton, styles.optionDisabled];
  };

  const getOptionTextStyle = (index) => {
    if (selectedOption === null) return styles.optionText;
    if (index === currentQuestion.correct) return [styles.optionText, styles.optionTextCorrect];
    if (index === selectedOption && index !== currentQuestion.correct) return [styles.optionText, styles.optionTextWrong];
    return [styles.optionText, styles.optionTextDisabled];
  };

  const getOptionIcon = (index) => {
    if (selectedOption === null) return null;
    if (index === currentQuestion.correct) return '✓';
    if (index === selectedOption && index !== currentQuestion.correct) return '✗';
    return null;
  };

  const isAnswerCorrect = selectedOption === currentQuestion.correct;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={handleQuit}>
      <SafeAreaView style={styles.safeArea}>
        {/* Navigation bar: close · centered title · quiz glyph */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleQuit} style={styles.quitButton} hitSlop={8} activeOpacity={0.6}>
            <Ionicons name="close" size={18} color={colors.textSubtle} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle} numberOfLines={1}>{quizSet.title}</Text>
            <Text style={styles.headerProgress}>{currentIndex + 1} / {totalQuestions}</Text>
          </View>
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{quizSet.icon}</Text>
          </View>
        </View>

        {/* Thin progress bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <Animated.View
              style={[
                styles.progressFill,
                {
                  width: `${((currentIndex) / totalQuestions) * 100}%`,
                  backgroundColor: quizSet.color,
                },
              ]}
            />
          </View>
        </View>

        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Question */}
            <View style={styles.questionCard}>
              <Text style={[styles.questionNumber, { color: quizSet.color }]}>{t('activeQuiz.questionLabel', { number: currentIndex + 1 })}</Text>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>

            {/* Options */}
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={getOptionStyle(index)}
                  onPress={() => handleOptionSelect(index)}
                  disabled={selectedOption !== null}
                  activeOpacity={0.6}
                >
                  <View style={styles.optionContent}>
                    <View style={[
                      styles.optionLetter,
                      selectedOption !== null && index === currentQuestion.correct && styles.optionLetterCorrect,
                      selectedOption !== null && index === selectedOption && index !== currentQuestion.correct && styles.optionLetterWrong,
                    ]}>
                      <Text style={[
                        styles.optionLetterText,
                        selectedOption !== null && (index === currentQuestion.correct || index === selectedOption) && styles.optionLetterTextOnColor,
                      ]}>
                        {getOptionIcon(index) || ['A', 'B', 'C', 'D'][index]}
                      </Text>
                    </View>
                    <Text style={getOptionTextStyle(index)}>{option}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Explanation */}
            {showExplanation && (
              <View style={[
                styles.explanationCard,
                isAnswerCorrect ? styles.explanationCorrect : styles.explanationWrong,
              ]}>
                <Text style={[styles.explanationTitle, { color: isAnswerCorrect ? colors.success : colors.error }]}>
                  {isAnswerCorrect ? `✓ ${t('activeQuiz.correct')}` : `✗ ${t('activeQuiz.wrong')}`}
                </Text>
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
              </View>
            )}

            <View style={{ height: 100 }} />
          </ScrollView>
        </Animated.View>

        {/* Next Button */}
        {showExplanation && (
          <View style={styles.footer}>
            <Button
              title={currentIndex + 1 >= totalQuestions ? `🏆 ${t('activeQuiz.viewResult')}` : t('activeQuiz.nextQuestion')}
              onPress={handleNext}
              style={{ backgroundColor: quizSet.color }}
            />
          </View>
        )}

        {/* Quit Confirmation — iOS alert style */}
        {showQuitConfirm && (
          <View style={styles.quitOverlay}>
            <View style={styles.quitDialog}>
              <View style={styles.quitDialogBody}>
                <Text style={styles.quitDialogTitle}>{t('activeQuiz.quitTitle')}</Text>
                <Text style={styles.quitDialogText}>{t('activeQuiz.quitMessage')}</Text>
              </View>
              <View style={styles.quitDialogButtons}>
                <TouchableOpacity style={styles.quitCancelButton} onPress={() => setShowQuitConfirm(false)} activeOpacity={0.6}>
                  <Text style={styles.quitCancelText}>{t('activeQuiz.continueQuiz')}</Text>
                </TouchableOpacity>
                <View style={styles.quitDialogDivider} />
                <TouchableOpacity style={styles.quitConfirmButton} onPress={onClose} activeOpacity={0.6}>
                  <Text style={styles.quitConfirmText}>{t('activeQuiz.quit')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
}

const HAIRLINE = StyleSheet.hairlineWidth;

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm + 2,
    backgroundColor: colors.background,
  },
  quitButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: SPACING.md,
  },
  headerTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  headerProgress: {
    ...TYPOGRAPHY.caption,
    color: colors.textSubtle,
    marginTop: 1,
  },
  difficultyBadge: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyText: {
    fontSize: 20,
  },
  progressContainer: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.sm,
    backgroundColor: colors.background,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.borderLight,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },

  // Question
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.xl,
    marginTop: SPACING.lg,
  },
  questionNumber: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    marginBottom: SPACING.sm,
    textTransform: 'uppercase',
  },
  questionText: {
    ...TYPOGRAPHY.h2,
    fontWeight: '600',
    color: colors.text,
  },

  // Options
  optionsContainer: {
    marginTop: SPACING.lg,
    gap: SPACING.sm + 2,
  },
  optionButton: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: colors.successLight,
  },
  optionWrong: {
    borderColor: colors.error,
    backgroundColor: colors.errorLight,
  },
  optionDisabled: {
    opacity: 0.7,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    gap: SPACING.md,
  },
  optionLetter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionLetterCorrect: {
    backgroundColor: colors.success,
  },
  optionLetterWrong: {
    backgroundColor: colors.error,
  },
  optionLetterText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.textSubtle,
  },
  optionLetterTextOnColor: {
    color: '#FFFFFF',
  },
  optionText: {
    ...TYPOGRAPHY.body,
    color: colors.text,
    flex: 1,
  },
  optionTextCorrect: {
    fontWeight: '600',
  },
  optionTextWrong: {
    fontWeight: '600',
  },
  optionTextDisabled: {
    color: colors.textSubtle,
  },

  // Explanation
  explanationCard: {
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    marginTop: SPACING.lg,
  },
  explanationCorrect: {
    backgroundColor: colors.successLight,
  },
  explanationWrong: {
    backgroundColor: colors.errorLight,
  },
  explanationTitle: {
    ...TYPOGRAPHY.headline,
    marginBottom: SPACING.xs + 2,
  },
  explanationText: {
    ...TYPOGRAPHY.body,
    color: colors.text,
  },

  footer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    backgroundColor: colors.surface,
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
  },

  // Quit alert
  quitOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xxxl,
  },
  quitDialog: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    width: '100%',
    maxWidth: 300,
    overflow: 'hidden',
  },
  quitDialogBody: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.lg,
  },
  quitDialogTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    marginBottom: SPACING.xs,
    textAlign: 'center',
  },
  quitDialogText: {
    ...TYPOGRAPHY.footnote,
    color: colors.text,
    textAlign: 'center',
  },
  quitDialogButtons: {
    flexDirection: 'row',
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
  },
  quitDialogDivider: {
    width: HAIRLINE,
    backgroundColor: colors.border,
  },
  quitCancelButton: {
    flex: 1,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
  },
  quitCancelText: {
    ...TYPOGRAPHY.headline,
    color: colors.primary,
    textAlign: 'center',
  },
  quitConfirmButton: {
    flex: 1,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
  },
  quitConfirmText: {
    ...TYPOGRAPHY.body,
    color: colors.destructive,
    textAlign: 'center',
  },
});
