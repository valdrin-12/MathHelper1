import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Modal, View, Animated, ScrollView, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Button } from '../../shared/ui';
import {
  gradeAnswer,
  parseNumericAnswer,
  findCommonMistake,
  formatNumber,
} from './quizAttempt';
import { hintCost } from '../progress/progress';
import { useQuizStyles } from './attempt/quizStyles';
import useQuizTimer from './attempt/useQuizTimer';
import QuizHeader from './attempt/QuizHeader';
import HintBlock from './attempt/HintBlock';
import ChoiceOptions from './attempt/ChoiceOptions';
import TrueFalseOptions from './attempt/TrueFalseOptions';
import NumericInput from './attempt/NumericInput';
import ExplanationCard from './attempt/ExplanationCard';
import QuitDialog from './attempt/QuitDialog';
import { haptic } from '../../shared/ui/haptics';

/**
 * Runs one quiz attempt. Question types: 'choice', 'input' (numeric), 'truefalse'.
 * quizSet.mode: 'practice' = immediate feedback, no timer; 'test' = countdown for the whole quiz,
 * feedback only on the result screen. quizSet.isPractice = "practise mistakes" attempt.
 * onComplete(answers, quizSet, { timedOut }) — answers: [{ questionId, correct, usedHint, given }]
 */
export default function ActiveQuizModal({ visible, quizSet, onClose, onComplete }) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'al').slice(0, 2);
  const [currentIndex, setCurrentIndex] = useState(0);
  // choice: option index · truefalse: boolean · input: unused (inputText)
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const answersRef = useRef([]);
  const completedRef = useRef(false);
  const liveRef = useRef({});
  const styles = useQuizStyles();

  const isTest = quizSet?.mode === 'test';

  useEffect(() => {
    if (visible) {
      setCurrentIndex(0);
      setSelectedOption(null);
      setInputText('');
      setInputError(false);
      setShowExplanation(false);
      setAnswers([]);
      answersRef.current = [];
      completedRef.current = false;
      setShowQuitConfirm(false);
      setShowHint(false);
      // Reset fade animation so content is visible for the new quiz
      fadeAnim.setValue(1);
    }
    // quizSet is part of the deps: every attempt (retry, practise mistakes) starts from question 1
  }, [visible, quizSet, fadeAnim]);

  // Latest state for the timer callback
  liveRef.current = { currentIndex, selectedOption, inputText, showHint };

  const finish = useCallback((finalAnswers, extra = {}) => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete(finalAnswers, quizSet, extra);
  }, [onComplete, quizSet]);

  // Time is up: grade what was picked on the current question, every other unanswered question is wrong
  const handleTimeUp = useCallback(() => {
    if (!quizSet || completedRef.current) return;
    const { currentIndex: idx, selectedOption: sel, inputText: text, showHint: hint } = liveRef.current;
    const done = [...answersRef.current];
    const start = done.length; // questions before this one are already graded
    quizSet.questions.forEach((q, i) => {
      if (i < start) return;
      if (i === idx) {
        const given = q.type === 'input' ? (Number.isFinite(parseNumericAnswer(text, q.unit)) ? text.trim() : null) : sel;
        done.push(gradeAnswer(q, given, hint));
      } else {
        done.push(gradeAnswer(q, null, false));
      }
    });
    finish(done, { timedOut: true });
  }, [quizSet, finish]);

  const remaining = useQuizTimer(visible, quizSet, handleTimeUp);

  if (!quizSet) return null;

  const currentQuestion = quizSet.questions[currentIndex];
  // A new, shorter attempt can render once before the reset effect runs
  if (!currentQuestion) return null;
  const type = currentQuestion.type || 'choice';
  const totalQuestions = quizSet.questions.length;
  const isLast = currentIndex + 1 >= totalQuestions;
  const mode = quizSet.isPractice || !isTest ? 'practice' : 'test';

  const parsedInput = type === 'input' ? parseNumericAnswer(inputText, currentQuestion.unit) : NaN;
  const givenNow = type === 'input' ? (inputText.trim() || null) : selectedOption;
  const hasAnswer = givenNow !== null && givenNow !== undefined;
  const answered = showExplanation; // practice mode: answer has been checked

  const handleOptionSelect = (value) => {
    if (answered) return;
    setSelectedOption(value);
    // Practice: immediate feedback (also felt: success / error haptic). Test: just remember the choice
    if (!isTest) {
      setShowExplanation(true);
      haptic(gradeAnswer(currentQuestion, value, showHint).correct ? 'success' : 'error');
    } else {
      haptic('light');
    }
  };

  const handleCheckInput = () => {
    if (!Number.isFinite(parsedInput)) {
      setInputError(true);
      return;
    }
    setInputError(false);
    setShowExplanation(true);
    haptic(gradeAnswer(currentQuestion, inputText.trim(), showHint).correct ? 'success' : 'error');
  };

  const handleNext = () => {
    if (completedRef.current) return;
    if (type === 'input' && hasAnswer && !Number.isFinite(parsedInput)) {
      setInputError(true);
      return;
    }
    const record = gradeAnswer(currentQuestion, givenNow, showHint);
    const newAnswers = [...answers, record];
    answersRef.current = newAnswers;

    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      if (isLast) {
        finish(newAnswers);
      } else {
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
        setInputText('');
        setInputError(false);
        setShowExplanation(false);
        setShowHint(false);
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
      }
    });
  };

  const handleQuit = () => {
    setShowQuitConfirm(true);
  };

  // ─── Feedback (practice mode) ───
  const result = answered ? gradeAnswer(currentQuestion, givenNow, showHint) : null;
  const isAnswerCorrect = !!result?.correct;
  const matchedMistake = answered && type === 'input' && !isAnswerCorrect ? findCommonMistake(currentQuestion, parsedInput) : null;
  const tfLabel = (v) => (v ? t('activeQuiz.trueLabel') : t('activeQuiz.falseLabel'));
  const unitSuffix = currentQuestion.unit ? ` ${currentQuestion.unit}` : '';
  let whyWrongText = null;
  let whyNotAnswer = '';
  if (answered && !isAnswerCorrect) {
    if (type === 'choice') {
      whyWrongText = currentQuestion.whyWrong?.[selectedOption];
      whyNotAnswer = currentQuestion.options[selectedOption];
    } else if (type === 'truefalse') {
      whyWrongText = currentQuestion.whyWrong;
      whyNotAnswer = tfLabel(selectedOption);
    } else {
      whyWrongText = matchedMistake?.why;
      whyNotAnswer = `${formatNumber(parsedInput, lang)}${unitSuffix}`;
    }
  }
  const correctValueText = type === 'input' ? `${formatNumber(currentQuestion.answer?.value, lang)}${unitSuffix}` : '';

  // ─── Numeric input ───
  const insertChar = (ch) => {
    if (answered) return;
    setInputError(false);
    if (ch === '−') {
      setInputText((prev) => (/^\s*[-−]/.test(prev) ? prev.replace(/^\s*[-−]/, '') : `-${prev}`));
    } else {
      setInputText((prev) => prev + ch);
    }
  };
  const inputStatus = answered ? (isAnswerCorrect ? 'correct' : 'wrong') : inputError ? 'wrong' : null;

  const footerVisible = isTest || answered;
  const footerTitle = isLast
    ? (isTest ? t('activeQuiz.finishTest') : `🏆 ${t('activeQuiz.viewResult')}`)
    : isTest && !hasAnswer ? t('activeQuiz.skip') : t('activeQuiz.nextQuestion');

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={handleQuit}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <QuizHeader
          quizSet={quizSet}
          isTest={isTest}
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          remaining={remaining}
          onQuit={handleQuit}
        />

        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            {/* Question */}
            <View style={styles.questionCard}>
              <Text style={[styles.questionNumber, { color: quizSet.color }]}>
                {t('activeQuiz.questionLabel', { number: currentIndex + 1 })}
                {type === 'truefalse' ? ` · ${t('activeQuiz.trueOrFalse')}` : ''}
              </Text>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>

            {!!currentQuestion.hint && !answered && (
              <HintBlock
                hint={currentQuestion.hint}
                shown={showHint}
                cost={hintCost(mode)}
                onShow={() => setShowHint(true)}
              />
            )}

            {type === 'input' ? (
              <NumericInput
                question={currentQuestion}
                color={quizSet.color}
                value={inputText}
                onChange={(v) => { setInputText(v); setInputError(false); }}
                onInsert={insertChar}
                status={inputStatus}
                error={inputError}
                answered={answered}
                isTest={isTest}
                onCheck={handleCheckInput}
              />
            ) : type === 'truefalse' ? (
              <TrueFalseOptions
                question={currentQuestion}
                selectedOption={selectedOption}
                answered={answered}
                onSelect={handleOptionSelect}
              />
            ) : (
              <ChoiceOptions
                question={currentQuestion}
                selectedOption={selectedOption}
                answered={answered}
                isTest={isTest}
                onSelect={handleOptionSelect}
              />
            )}

            {/* Explanation (practice mode only) */}
            {answered && (
              <ExplanationCard
                question={currentQuestion}
                isInput={type === 'input'}
                isCorrect={isAnswerCorrect}
                correctValueText={correctValueText}
                whyWrongText={whyWrongText}
                whyNotAnswer={whyNotAnswer}
              />
            )}

            {isTest && (
              <Text style={styles.testNote}>{t('activeQuiz.testNote')}</Text>
            )}

            <View style={{ height: 100 }} />
          </ScrollView>
        </Animated.View>

        {/* Next Button */}
        {footerVisible && (
          <View style={styles.footer}>
            <Button
              title={footerTitle}
              variant={isTest && !hasAnswer ? 'tinted' : 'filled'}
              onPress={handleNext}
              style={isTest && !hasAnswer ? undefined : { backgroundColor: quizSet.color }}
            />
          </View>
        )}
        </KeyboardAvoidingView>

        {showQuitConfirm && (
          <QuitDialog onCancel={() => setShowQuitConfirm(false)} onQuit={onClose} />
        )}
      </SafeAreaView>
    </Modal>
  );
}
