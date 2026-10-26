import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../shared/theme/ThemeContext';
import { useQuizStyles } from './quizStyles';

// The two big True / False buttons.
export default function TrueFalseOptions({ question, selectedOption, answered, onSelect }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useQuizStyles();
  const tfLabel = (v) => (v ? t('activeQuiz.trueLabel') : t('activeQuiz.falseLabel'));

  return (
    <View style={styles.tfRow}>
      {[true, false].map((value) => {
        const picked = selectedOption === value;
        const isRight = value === question.correct;
        let tone = null;
        if (answered && isRight) tone = 'correct';
        else if (answered && picked) tone = 'wrong';
        else if (!answered && picked) tone = 'selected';
        const iconColor = tone === 'correct' ? colors.success : tone === 'wrong' ? colors.error : tone === 'selected' ? colors.primary : colors.textSubtle;
        // Before answering the icon shows the option (✓ true / ✗ false); afterwards it shows the
        // result, so a green button never carries a ✗ and a red one never carries a ✓
        const iconName = tone === 'correct' ? 'checkmark-circle'
          : tone === 'wrong' ? 'close-circle'
            : value ? 'checkmark-circle-outline' : 'close-circle-outline';
        return (
          <TouchableOpacity
            key={String(value)}
            style={[
              styles.tfButton,
              tone === 'selected' && styles.optionSelected,
              tone === 'correct' && styles.optionCorrect,
              tone === 'wrong' && styles.optionWrong,
              answered && !tone && styles.optionDisabled,
            ]}
            onPress={() => onSelect(value)}
            disabled={answered}
            activeOpacity={0.6}
            accessibilityRole="button"
            accessibilityLabel={tfLabel(value)}
            accessibilityState={{ selected: picked, disabled: answered }}
          >
            <Ionicons name={iconName} size={30} color={iconColor} />
            <Text style={[styles.tfText, tone && tone !== 'selected' && styles.optionTextCorrect]}>{tfLabel(value)}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
