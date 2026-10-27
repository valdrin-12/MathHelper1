import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../shared/theme/ThemeContext';
import { haptic } from '../../../shared/ui/haptics';
import ChoiceOptions from '../../quiz/attempt/ChoiceOptions';
import TrueFalseOptions from '../../quiz/attempt/TrueFalseOptions';
import NumericInput from '../../quiz/attempt/NumericInput';
import { gradeAnswer, parseNumericAnswer } from '../../quiz/quizAttempt';
import { useLessonStyles } from './courseStyles';

/**
 * A short question between theory paragraphs ("check yourself"), with instant feedback.
 * onAnswered(correct) is called once, when the answer is given.
 */
export default function LessonCheck({ check, tint, onAnswered }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useLessonStyles();
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState('');
  const [inputError, setInputError] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  const finish = (given) => {
    const ok = gradeAnswer(check, given).correct;
    setCorrect(ok);
    setAnswered(true);
    haptic(ok ? 'success' : 'error');
    onAnswered?.(ok);
  };

  const onSelect = (value) => {
    if (answered) return;
    setSelected(value);
    finish(value);
  };

  const onCheck = () => {
    if (!Number.isFinite(parseNumericAnswer(text))) { setInputError(true); return; }
    setInputError(false);
    finish(text.trim());
  };

  const insertChar = (ch) => {
    if (answered) return;
    setInputError(false);
    if (ch === '−') setText((prev) => (/^\s*[-−]/.test(prev) ? prev.replace(/^\s*[-−]/, '') : `-${prev}`));
    else setText((prev) => prev + ch);
  };

  return (
    <View style={[styles.card, styles.checkCard, { borderColor: `${tint}55` }]}>
      <Text style={[styles.checkLabel, { color: tint }]}>{t('courseContent.quickCheck')}</Text>
      <Text style={styles.checkQuestion}>{check.question}</Text>
      {check.type === 'input' ? (
        <NumericInput
          question={check}
          color={tint}
          value={text}
          onChange={(v) => { setText(v); setInputError(false); }}
          onInsert={insertChar}
          status={answered ? (correct ? 'correct' : 'wrong') : inputError ? 'wrong' : null}
          error={inputError}
          answered={answered}
          isTest={false}
          onCheck={onCheck}
        />
      ) : check.type === 'truefalse' ? (
        <TrueFalseOptions question={check} selectedOption={selected} answered={answered} onSelect={onSelect} />
      ) : (
        <ChoiceOptions question={check} selectedOption={selected} answered={answered} isTest={false} onSelect={onSelect} />
      )}
      {answered && (
        <View style={[styles.checkFeedback, { backgroundColor: correct ? `${colors.success}1A` : `${colors.error}14` }]} accessibilityLiveRegion="polite">
          <Text style={[styles.checkFeedbackTitle, { color: correct ? colors.success : colors.error }]}>
            {correct ? `✓ ${t('activeQuiz.correct')}` : `✗ ${t('courseContent.notQuite')}`}
          </Text>
          <Text style={styles.checkFeedbackText}>{check.explanation}</Text>
        </View>
      )}
    </View>
  );
}
