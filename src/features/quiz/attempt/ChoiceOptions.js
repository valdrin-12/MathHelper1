import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useQuizStyles } from './quizStyles';

// Multiple-choice answers A–D. After answering: the right one turns green, a wrong pick red, the rest fade.
export default function ChoiceOptions({ question, selectedOption, answered, isTest, onSelect }) {
  const styles = useQuizStyles();

  const getOptionStyle = (index) => {
    if (!answered) return [styles.optionButton, isTest && selectedOption === index && styles.optionSelected];
    if (index === question.correct) return [styles.optionButton, styles.optionCorrect];
    if (index === selectedOption && index !== question.correct) return [styles.optionButton, styles.optionWrong];
    return [styles.optionButton, styles.optionDisabled];
  };

  const getOptionTextStyle = (index) => {
    if (!answered) return styles.optionText;
    if (index === question.correct) return [styles.optionText, styles.optionTextCorrect];
    if (index === selectedOption && index !== question.correct) return [styles.optionText, styles.optionTextWrong];
    return [styles.optionText, styles.optionTextDisabled];
  };

  const getOptionIcon = (index) => {
    if (!answered) return null;
    if (index === question.correct) return '✓';
    if (index === selectedOption && index !== question.correct) return '✗';
    return null;
  };

  return (
    <View style={styles.optionsContainer}>
      {question.options.map((option, index) => {
        const picked = isTest && !answered && selectedOption === index;
        return (
          <TouchableOpacity
            key={index}
            style={getOptionStyle(index)}
            onPress={() => onSelect(index)}
            disabled={answered}
            activeOpacity={0.6}
            accessibilityRole="button"
            accessibilityState={{ selected: selectedOption === index, disabled: answered }}
          >
            <View style={styles.optionContent}>
              <View style={[
                styles.optionLetter,
                picked && styles.optionLetterSelected,
                answered && index === question.correct && styles.optionLetterCorrect,
                answered && index === selectedOption && index !== question.correct && styles.optionLetterWrong,
              ]}>
                <Text style={[
                  styles.optionLetterText,
                  (picked || (answered && (index === question.correct || index === selectedOption))) && styles.optionLetterTextOnColor,
                ]}>
                  {getOptionIcon(index) || ['A', 'B', 'C', 'D'][index]}
                </Text>
              </View>
              <Text style={getOptionTextStyle(index)}>{option}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
