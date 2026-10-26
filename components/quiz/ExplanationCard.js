import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { useQuizStyles } from './quizStyles';

// Feedback after a practice answer: right/wrong, the correct number, why the pick was wrong, the explanation.
export default function ExplanationCard({ question, isInput, isCorrect, correctValueText, whyWrongText, whyNotAnswer }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useQuizStyles();

  return (
    <View style={[
      styles.explanationCard,
      isCorrect ? styles.explanationCorrect : styles.explanationWrong,
    ]}>
      <Text style={[styles.explanationTitle, { color: isCorrect ? colors.success : colors.error }]}>
        {isCorrect ? `✓ ${t('activeQuiz.correct')}` : `✗ ${t('activeQuiz.wrong')}`}
      </Text>
      {isInput && !isCorrect && (
        <Text style={styles.correctValueText}>{t('activeQuiz.correctValue', { answer: correctValueText })}</Text>
      )}
      {!!whyWrongText && (
        <View style={styles.whyWrongBox}>
          <Text style={styles.whyWrongLabel}>{t('activeQuiz.whyNot', { answer: whyNotAnswer })}</Text>
          <Text style={styles.explanationText}>{whyWrongText}</Text>
        </View>
      )}
      <Text style={styles.explanationText}>{question.explanation}</Text>
    </View>
  );
}
