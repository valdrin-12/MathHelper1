// Styles of the quiz screen (question, options, input, feedback, header, quit dialog), moved as one block.
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../../shared/theme/constants';
import { useTheme } from '../../../shared/theme/ThemeContext';

const HAIRLINE = StyleSheet.hairlineWidth;

export const makeStyles = (colors) => StyleSheet.create({
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
  backButton: {
    marginRight: SPACING.sm,
  },
  backButtonHidden: {
    opacity: 0,
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

export const useQuizStyles = () => {
  const { colors } = useTheme();
  return useMemo(() => makeStyles(colors), [colors]);
};
