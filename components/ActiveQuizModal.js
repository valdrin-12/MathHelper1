import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui';
import {
  gradeAnswer,
  parseNumericAnswer,
  findCommonMistake,
  formatNumber,
  parseDurationSeconds,
} from '../utils/quizAttempt';
import { hintCost } from '../utils/progress';

const formatClock = (secs) => {
  const s = Math.max(0, Math.ceil(secs));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

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
  const [remaining, setRemaining] = useState(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const answersRef = useRef([]);
  const completedRef = useRef(false);
  const liveRef = useRef({});
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

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

  // Countdown for test mode (wall-clock based so it stays correct if the app was in the background)
  useEffect(() => {
    if (!visible || !quizSet || quizSet.mode !== 'test') {
      setRemaining(null);
      return undefined;
    }
    const total = parseDurationSeconds(quizSet.duration, quizSet.questions.length);
    const endAt = Date.now() + total * 1000;
    setRemaining(total);
    const id = setInterval(() => {
      const left = (endAt - Date.now()) / 1000;
      setRemaining(Math.max(0, left));
      if (left <= 0) {
        clearInterval(id);
        handleTimeUp();
      }
    }, 500);
    return () => clearInterval(id);
  }, [visible, quizSet, handleTimeUp]);

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
    // Practice: immediate feedback. Test: just remember the choice (can still change it)
    if (!isTest) setShowExplanation(true);
  };

  const handleCheckInput = () => {
    if (!Number.isFinite(parsedInput)) {
      setInputError(true);
      return;
    }
    setInputError(false);
    setShowExplanation(true);
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

  // ─── Choice options ───
  const getOptionStyle = (index) => {
    if (!answered) return [styles.optionButton, isTest && selectedOption === index && styles.optionSelected];
    if (index === currentQuestion.correct) return [styles.optionButton, styles.optionCorrect];
    if (index === selectedOption && index !== currentQuestion.correct) return [styles.optionButton, styles.optionWrong];
    return [styles.optionButton, styles.optionDisabled];
  };

  const getOptionTextStyle = (index) => {
    if (!answered) return styles.optionText;
    if (index === currentQuestion.correct) return [styles.optionText, styles.optionTextCorrect];
    if (index === selectedOption && index !== currentQuestion.correct) return [styles.optionText, styles.optionTextWrong];
    return [styles.optionText, styles.optionTextDisabled];
  };

  const getOptionIcon = (index) => {
    if (!answered) return null;
    if (index === currentQuestion.correct) return '✓';
    if (index === selectedOption && index !== currentQuestion.correct) return '✗';
    return null;
  };

  const renderChoice = () => (
    <View style={styles.optionsContainer}>
      {currentQuestion.options.map((option, index) => {
        const picked = isTest && !answered && selectedOption === index;
        return (
          <TouchableOpacity
            key={index}
            style={getOptionStyle(index)}
            onPress={() => handleOptionSelect(index)}
            disabled={answered}
            activeOpacity={0.6}
            accessibilityRole="button"
            accessibilityState={{ selected: selectedOption === index, disabled: answered }}
          >
            <View style={styles.optionContent}>
              <View style={[
                styles.optionLetter,
                picked && styles.optionLetterSelected,
                answered && index === currentQuestion.correct && styles.optionLetterCorrect,
                answered && index === selectedOption && index !== currentQuestion.correct && styles.optionLetterWrong,
              ]}>
                <Text style={[
                  styles.optionLetterText,
                  (picked || (answered && (index === currentQuestion.correct || index === selectedOption))) && styles.optionLetterTextOnColor,
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

  // ─── True / false ───
  const renderTrueFalse = () => (
    <View style={styles.tfRow}>
      {[true, false].map((value) => {
        const picked = selectedOption === value;
        const isRight = value === currentQuestion.correct;
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
            onPress={() => handleOptionSelect(value)}
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

  const inputTone = answered ? (isAnswerCorrect ? styles.inputCorrect : styles.inputWrong) : inputError ? styles.inputWrong : null;

  const renderInput = () => (
    <View style={styles.inputBlock}>
      <View style={[styles.inputRow, inputTone]}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={(v) => { setInputText(v); setInputError(false); }}
          placeholder={currentQuestion.placeholder || t('activeQuiz.inputPlaceholder')}
          placeholderTextColor={colors.textMuted}
          keyboardType="decimal-pad"
          editable={!answered}
          returnKeyType="done"
          onSubmitEditing={() => (isTest ? null : handleCheckInput())}
          autoCorrect={false}
          autoCapitalize="none"
          accessibilityLabel={t('activeQuiz.inputPlaceholder')}
        />
        {!!currentQuestion.unit && <Text style={styles.unitText}>{currentQuestion.unit}</Text>}
      </View>
      {!answered && (
        <View style={styles.keyRow}>
          {['−', '/'].map((ch) => (
            <TouchableOpacity
              key={ch}
              style={styles.keyChip}
              onPress={() => insertChar(ch)}
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
      {inputError && (
        <Text style={styles.inputErrorText} accessibilityLiveRegion="polite">{t('activeQuiz.invalidNumber')}</Text>
      )}
      {!isTest && !answered && (
        <Button
          title={t('activeQuiz.check')}
          icon="checkmark"
          onPress={handleCheckInput}
          disabled={!inputText.trim()}
          style={[styles.checkButton, { backgroundColor: quizSet.color }]}
        />
      )}
    </View>
  );

  const footerVisible = isTest || answered;
  const footerTitle = isLast
    ? (isTest ? t('activeQuiz.finishTest') : `🏆 ${t('activeQuiz.viewResult')}`)
    : isTest && !hasAnswer ? t('activeQuiz.skip') : t('activeQuiz.nextQuestion');
  const lowTime = remaining !== null && remaining <= 60;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={handleQuit}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {/* Navigation bar: close · centered title · quiz glyph or timer */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleQuit} style={styles.quitButton} hitSlop={8} activeOpacity={0.6} accessibilityRole="button" accessibilityLabel={t('activeQuiz.quitTitle')}>
            <Ionicons name="close" size={18} color={colors.textSubtle} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle} numberOfLines={1}>{quizSet.title}</Text>
            <Text style={styles.headerProgress}>
              {quizSet.isPractice ? `${t('activeQuiz.practiceMode')} · ` : isTest ? `${t('activeQuiz.testMode')} · ` : ''}{currentIndex + 1} / {totalQuestions}
            </Text>
          </View>
          {remaining !== null ? (
            <View
              style={[styles.timerPill, lowTime && styles.timerPillLow]}
              accessible
              accessibilityLabel={t('activeQuiz.timeLeft', { time: formatClock(remaining) })}
            >
              <Ionicons name="timer-outline" size={14} color={lowTime ? colors.error : colors.primary} />
              <Text style={[styles.timerText, lowTime && styles.timerTextLow]}>{formatClock(remaining)}</Text>
            </View>
          ) : (
            <View style={styles.difficultyBadge}>
              <Text style={styles.difficultyText}>{quizSet.icon}</Text>
            </View>
          )}
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
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            {/* Question */}
            <View style={styles.questionCard}>
              <Text style={[styles.questionNumber, { color: quizSet.color }]}>
                {t('activeQuiz.questionLabel', { number: currentIndex + 1 })}
                {type === 'truefalse' ? ` · ${t('activeQuiz.trueOrFalse')}` : ''}
              </Text>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>

            {/* Hint: one nudge towards the method, only before answering; costs a little XP */}
            {!!currentQuestion.hint && !answered && (
              showHint ? (
                <View style={styles.hintCard}>
                  <Ionicons name="bulb" size={18} color={colors.secondary} />
                  <Text style={styles.hintText}>{currentQuestion.hint}</Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.hintButton}
                  onPress={() => setShowHint(true)}
                  activeOpacity={0.6}
                  accessibilityRole="button"
                >
                  <Ionicons name="bulb-outline" size={16} color={colors.secondary} />
                  <Text style={styles.hintButtonText}>{t('activeQuiz.showHintCost', { xp: hintCost(mode) })}</Text>
                </TouchableOpacity>
              )
            )}

            {type === 'input' ? renderInput() : type === 'truefalse' ? renderTrueFalse() : renderChoice()}

            {/* Explanation (practice mode only) */}
            {answered && (
              <View style={[
                styles.explanationCard,
                isAnswerCorrect ? styles.explanationCorrect : styles.explanationWrong,
              ]}>
                <Text style={[styles.explanationTitle, { color: isAnswerCorrect ? colors.success : colors.error }]}>
                  {isAnswerCorrect ? `✓ ${t('activeQuiz.correct')}` : `✗ ${t('activeQuiz.wrong')}`}
                </Text>
                {type === 'input' && !isAnswerCorrect && (
                  <Text style={styles.correctValueText}>{t('activeQuiz.correctValue', { answer: correctValueText })}</Text>
                )}
                {!!whyWrongText && (
                  <View style={styles.whyWrongBox}>
                    <Text style={styles.whyWrongLabel}>{t('activeQuiz.whyNot', { answer: whyNotAnswer })}</Text>
                    <Text style={styles.explanationText}>{whyWrongText}</Text>
                  </View>
                )}
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
              </View>
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
  flex: {
    flex: 1,
  },
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    minHeight: 30,
    paddingHorizontal: SPACING.sm + 2,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: colors.primaryBg,
  },
  timerPillLow: {
    backgroundColor: colors.errorLight,
  },
  timerText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.primary,
    fontVariant: ['tabular-nums'],
  },
  timerTextLow: {
    color: colors.error,
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

  // Hint
  hintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: SPACING.xs + 2,
    minHeight: 36,
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.md,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: colors.warningLight,
  },
  hintButtonText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.secondary,
  },
  hintCard: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginTop: SPACING.md,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: colors.warningLight,
  },
  hintText: {
    ...TYPOGRAPHY.subhead,
    color: colors.text,
    flex: 1,
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
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryBg,
  },
  optionLetterSelected: {
    backgroundColor: colors.primary,
  },

  // True / false
  tfRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginTop: SPACING.lg,
  },
  tfButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    minHeight: 96,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.sm,
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  tfText: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    textAlign: 'center',
  },

  // Numeric input
  inputBlock: {
    marginTop: SPACING.lg,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1.5,
    borderColor: 'transparent',
    paddingHorizontal: SPACING.lg,
    minHeight: 56,
  },
  inputCorrect: {
    borderColor: colors.success,
    backgroundColor: colors.successLight,
  },
  inputWrong: {
    borderColor: colors.error,
    backgroundColor: colors.errorLight,
  },
  input: {
    flex: 1,
    ...TYPOGRAPHY.h2,
    color: colors.text,
    paddingVertical: SPACING.md,
  },
  unitText: {
    ...TYPOGRAPHY.headline,
    color: colors.textSubtle,
    marginLeft: SPACING.sm,
  },
  keyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginTop: SPACING.sm,
  },
  keyChip: {
    minWidth: 44,
    minHeight: 36,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyChipText: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  keyHelp: {
    ...TYPOGRAPHY.caption,
    color: colors.textSubtle,
    flex: 1,
  },
  inputErrorText: {
    ...TYPOGRAPHY.footnote,
    color: colors.error,
    marginTop: SPACING.sm,
  },
  checkButton: {
    marginTop: SPACING.md,
  },
  correctValueText: {
    ...TYPOGRAPHY.bodyBold,
    color: colors.text,
    marginBottom: SPACING.sm,
  },
  testNote: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textAlign: 'center',
    marginTop: SPACING.lg,
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
  whyWrongBox: {
    marginBottom: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: HAIRLINE,
    borderBottomColor: colors.border,
  },
  whyWrongLabel: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.error,
    marginBottom: 2,
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
