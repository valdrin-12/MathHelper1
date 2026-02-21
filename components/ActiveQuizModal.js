import React, { useState, useRef, useEffect } from 'react';
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
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function ActiveQuizModal({ visible, quizSet, onClose, onComplete }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

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

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={handleQuit}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleQuit} style={styles.quitButton}>
            <Ionicons name="close" size={22} color={COLORS.textSecondary} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle} numberOfLines={1}>{quizSet.title}</Text>
            <Text style={styles.headerProgress}>{currentIndex + 1} / {totalQuestions}</Text>
          </View>
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{quizSet.icon}</Text>
          </View>
        </View>

        {/* Progress Bar */}
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
            <View style={[styles.questionCard, { borderTopColor: quizSet.color }]}>
              <Text style={styles.questionNumber}>{t('activeQuiz.questionLabel', { number: currentIndex + 1 })}</Text>
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
                >
                  <View style={styles.optionContent}>
                    <View style={[
                      styles.optionLetter,
                      selectedOption !== null && index === currentQuestion.correct && styles.optionLetterCorrect,
                      selectedOption !== null && index === selectedOption && index !== currentQuestion.correct && styles.optionLetterWrong,
                    ]}>
                      <Text style={styles.optionLetterText}>
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
                selectedOption === currentQuestion.correct ? styles.explanationCorrect : styles.explanationWrong,
              ]}>
                <Text style={styles.explanationTitle}>
                  {selectedOption === currentQuestion.correct ? `✓ ${t('activeQuiz.correct')}` : `✗ ${t('activeQuiz.wrong')}`}
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
            <TouchableOpacity
              style={[styles.nextButton, { backgroundColor: quizSet.color }]}
              onPress={handleNext}
            >
              <Text style={styles.nextButtonText}>
                {currentIndex + 1 >= totalQuestions ? `🏆 ${t('activeQuiz.viewResult')}` : t('activeQuiz.nextQuestion')}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Quit Confirmation Overlay */}
        {showQuitConfirm && (
          <View style={styles.quitOverlay}>
            <View style={styles.quitDialog}>
              <Text style={styles.quitDialogTitle}>{t('activeQuiz.quitTitle')}</Text>
              <Text style={styles.quitDialogText}>{t('activeQuiz.quitMessage')}</Text>
              <View style={styles.quitDialogButtons}>
                <TouchableOpacity style={styles.quitCancelButton} onPress={() => setShowQuitConfirm(false)}>
                  <Text style={styles.quitCancelText}>{t('activeQuiz.continueQuiz')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quitConfirmButton} onPress={onClose}>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.xl,
    paddingVertical: 15,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  quitButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  headerProgress: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  difficultyBadge: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyText: {
    fontSize: 22,
  },
  progressContainer: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: 10,
    backgroundColor: COLORS.surface,
  },
  progressBar: {
    height: 6,
    backgroundColor: COLORS.borderLight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
  },
  questionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 15,
    padding: 25,
    marginTop: SPACING.xl,
    borderTopWidth: 4,
    ...SHADOWS.medium,
  },
  questionNumber: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    fontWeight: '600',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
    lineHeight: 30,
  },
  optionsContainer: {
    marginTop: SPACING.xl,
    gap: BORDER_RADIUS.md,
  },
  optionButton: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    ...SHADOWS.small,
  },
  optionCorrect: {
    borderColor: COLORS.success,
    backgroundColor: '#F1FFF1',
  },
  optionWrong: {
    borderColor: COLORS.destructive,
    backgroundColor: '#FFF1F1',
  },
  optionDisabled: {
    borderColor: COLORS.divider,
    backgroundColor: '#FAFAFA',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.lg,
    gap: 14,
  },
  optionLetter: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionLetterCorrect: {
    backgroundColor: COLORS.success,
  },
  optionLetterWrong: {
    backgroundColor: COLORS.destructive,
  },
  optionLetterText: {
    ...TYPOGRAPHY.label,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  optionText: {
    ...TYPOGRAPHY.bodyLarge,
    color: COLORS.textDark,
    fontWeight: '500',
    flex: 1,
  },
  optionTextCorrect: {
    color: '#2E7D32',
    fontWeight: '600',
  },
  optionTextWrong: {
    color: '#C62828',
    fontWeight: '600',
  },
  optionTextDisabled: {
    color: '#BDBDBD',
  },
  explanationCard: {
    borderRadius: BORDER_RADIUS.md,
    padding: 18,
    marginTop: SPACING.xl,
    borderLeftWidth: 4,
  },
  explanationCorrect: {
    backgroundColor: '#F1FFF1',
    borderLeftColor: COLORS.success,
  },
  explanationWrong: {
    backgroundColor: '#FFF1F1',
    borderLeftColor: COLORS.destructive,
  },
  explanationTitle: {
    ...TYPOGRAPHY.bodyLargeBold,
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },
  explanationText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  footer: {
    padding: SPACING.xl,
    paddingBottom: 10,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
  },
  nextButton: {
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
  },
  nextButtonText: {
    ...TYPOGRAPHY.buttonLarge,
    color: COLORS.textLight,
  },
  quitOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  quitDialog: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: SPACING.xxl,
    width: '100%',
    ...SHADOWS.large,
  },
  quitDialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 10,
    textAlign: 'center',
  },
  quitDialogText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: SPACING.xxl,
  },
  quitDialogButtons: {
    flexDirection: 'row',
    gap: BORDER_RADIUS.md,
  },
  quitCancelButton: {
    flex: 1,
    backgroundColor: COLORS.tabBg,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  quitCancelText: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.primary,
  },
  quitConfirmButton: {
    flex: 1,
    backgroundColor: '#FF4B4B',
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  quitConfirmText: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.textLight,
  },
});
