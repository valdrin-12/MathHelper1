import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui';
import { useQuizStyles } from './quizStyles';

// Numeric answer field with the ± and / keys and (practice mode) the Check button.
// status: 'correct' | 'wrong' | null colours the field.
export default function NumericInput({ question, color, value, onChange, onInsert, status, error, answered, isTest, onCheck }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useQuizStyles();
  const tone = status === 'correct' ? styles.inputCorrect : status === 'wrong' ? styles.inputWrong : null;

  return (
    <View style={styles.inputBlock}>
      <View style={[styles.inputRow, tone]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={question.placeholder || t('activeQuiz.inputPlaceholder')}
          placeholderTextColor={colors.textMuted}
          keyboardType="decimal-pad"
          editable={!answered}
          returnKeyType="done"
          onSubmitEditing={() => (isTest ? null : onCheck())}
          autoCorrect={false}
          autoCapitalize="none"
          accessibilityLabel={t('activeQuiz.inputPlaceholder')}
        />
        {!!question.unit && <Text style={styles.unitText}>{question.unit}</Text>}
      </View>
      {!answered && (
        <View style={styles.keyRow}>
          {['−', '/'].map((ch) => (
            <TouchableOpacity
              key={ch}
              style={styles.keyChip}
              onPress={() => onInsert(ch)}
              activeOpacity={0.6}
              accessibilityRole="button"
              accessibilityLabel={ch === '−' ? t('activeQuiz.toggleMinus') : t('activeQuiz.insertFraction')}
            >
              <Text style={styles.keyChipText}>{ch === '−' ? '±' : ch}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.keyHelp} numberOfLines={2}>{t('activeQuiz.inputHelp')}</Text>
        </View>
      )}
      {error && (
        <Text style={styles.inputErrorText} accessibilityLiveRegion="polite">{t('activeQuiz.invalidNumber')}</Text>
      )}
      {!isTest && !answered && (
        <Button
          title={t('activeQuiz.check')}
          icon="checkmark"
          onPress={onCheck}
          disabled={!value.trim()}
          style={[styles.checkButton, { backgroundColor: color }]}
        />
      )}
    </View>
  );
}
