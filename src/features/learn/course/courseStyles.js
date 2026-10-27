// Styles of the course screens: the overview ("detail") and the lesson viewer.
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../../shared/theme/constants';
import { useTheme } from '../../../shared/theme/ThemeContext';

export const makeDetailStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },

  // Sheet nav bar
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingHorizontal: SPACING.xs,
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...TYPOGRAPHY.headline,
    flex: 1,
    textAlign: 'center',
    color: colors.text,
  },
  headerSpacer: {
    width: 44,
  },
  content: {
    flex: 1,
  },
  contentInner: {
    paddingHorizontal: SPACING.lg,
  },

  // Hero
  courseHeader: {
    alignItems: 'center',
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  categoryIconBox: {
    width: 72,
    height: 72,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  categoryIcon: {
    fontSize: 36,
  },
  courseTitle: {
    ...TYPOGRAPHY.h2,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  categoryName: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },

  // Meta card: three columns split by hairlines
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
  },
  metaItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SPACING.xs,
  },
  metaDivider: {
    width: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    backgroundColor: colors.border,
  },
  metaIcon: {
    fontSize: 22,
    marginBottom: SPACING.xs,
  },
  metaLabel: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginBottom: 2,
  },
  metaValue: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
  },

  // Sections
  section: {
    marginTop: SPACING.xxl,
  },
  sectionTitle: {
    marginLeft: SPACING.xs,
    marginBottom: SPACING.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
  },
  descriptionText: {
    ...TYPOGRAPHY.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },
  listCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: 44,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  listDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginLeft: SPACING.lg + 24,
  },
  topicBullet: {
    width: 24,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '700',
  },
  outcomeIcon: {
    width: 24,
    ...TYPOGRAPHY.bodyBold,
    color: colors.success,
  },
  listItemText: {
    flex: 1,
    ...TYPOGRAPHY.body,
    color: colors.text,
  },
  prerequisitesCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.warningLight,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  prerequisitesIcon: {
    fontSize: 18,
    marginRight: SPACING.md,
  },
  prerequisitesText: {
    flex: 1,
    ...TYPOGRAPHY.subhead,
    color: colors.text,
  },

  // Footer
  footer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    backgroundColor: colors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
});

export const makeLessonStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Nav bar
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingHorizontal: SPACING.xs,
    paddingRight: SPACING.lg,
    backgroundColor: colors.surface,
    gap: SPACING.xs,
  },
  closeButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  headerMeta: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: 1,
  },
  lessonCounter: {
    minWidth: 44,
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.round,
  },
  lessonCounterText: {
    ...TYPOGRAPHY.captionBold,
    color: colors.textSubtle,
  },

  // Resume banner
  resumeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.warningLight,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm + 2,
    gap: SPACING.sm,
  },
  resumeBannerText: {
    flex: 1,
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.text,
  },

  // Lesson tabs
  lessonNav: {
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingBottom: SPACING.sm + 2,
  },
  lessonNavContent: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },
  lessonTab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonTabNum: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.textSubtle,
  },
  lessonTabNumActive: {
    color: '#FFFFFF',
  },

  // Lesson body
  content: {
    flex: 1,
  },
  lessonHeader: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xs,
  },
  lessonNumber: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.textSubtle,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: SPACING.xs,
  },
  lessonTitle: {
    ...TYPOGRAPHY.h2,
    color: colors.text,
  },
  section: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
    paddingHorizontal: SPACING.xs,
  },
  sectionIcon: {
    fontSize: 17,
  },
  sectionTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
  },
  cardSpaced: {
    marginBottom: SPACING.md,
  },
  // ── step-by-step theory and questions between paragraphs
  theoryParagraph: {
    marginBottom: SPACING.md,
  },
  checkCard: {
    marginBottom: SPACING.md,
    borderWidth: 1.5,
  },
  checkLabel: {
    ...TYPOGRAPHY.captionBold,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: SPACING.xs,
  },
  checkQuestion: {
    ...TYPOGRAPHY.bodyBold,
    color: colors.text,
    marginBottom: SPACING.md,
    lineHeight: 23,
  },
  checkFeedback: {
    marginTop: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    padding: SPACING.md,
  },
  checkFeedbackTitle: {
    ...TYPOGRAPHY.subheadBold,
    marginBottom: 4,
  },
  checkFeedbackText: {
    ...TYPOGRAPHY.subhead,
    color: colors.text,
    lineHeight: 21,
  },
  continueBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.md,
  },
  continueText: {
    ...TYPOGRAPHY.headline,
    color: '#FFFFFF',
  },
  showAllLink: {
    ...TYPOGRAPHY.subhead,
    fontWeight: '600',
  },
  theoryText: {
    ...TYPOGRAPHY.body,
    lineHeight: 25,
    color: colors.text,
  },
  keyPointsCard: {
    gap: SPACING.md,
  },
  keyPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.md,
  },
  keyPointDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginTop: 7,
  },
  keyPointText: {
    flex: 1,
    ...TYPOGRAPHY.subhead,
    color: colors.text,
  },
  exampleHeader: {
    marginBottom: SPACING.xs,
  },
  exampleLabel: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    color: colors.textSubtle,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    marginBottom: SPACING.xs,
  },
  exampleProblem: {
    ...TYPOGRAPHY.body,
    fontWeight: '500',
    color: colors.text,
    marginBottom: SPACING.md,
  },
  exampleDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginBottom: SPACING.md,
  },
  exampleSolution: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    color: colors.success,
  },
  practiceProblem: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    color: colors.text,
    marginBottom: SPACING.md,
  },
  showSolutionBtn: {
    minHeight: 44,
    borderRadius: BORDER_RADIUS.sm,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  showSolutionText: {
    ...TYPOGRAPHY.subheadBold,
  },
  solutionContainer: {
    marginTop: SPACING.md,
    backgroundColor: colors.successLight,
    borderRadius: BORDER_RADIUS.sm,
    padding: SPACING.md + 2,
  },
  solutionAnswer: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.success,
    marginBottom: SPACING.sm,
  },
  stepRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.xs + 2,
  },
  stepNumber: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.success,
    minWidth: 18,
  },
  stepText: {
    flex: 1,
    ...TYPOGRAPHY.subhead,
    color: colors.textSecondary,
  },

  // Empty state
  noContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.huge,
  },
  noContentIcon: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  noContentTitle: {
    ...TYPOGRAPHY.h3,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  noContentText: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },

  // Bottom toolbar
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: colors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    gap: SPACING.md,
  },
  navButton: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: colors.inputBg,
  },
  navButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  navButtonDisabled: {
    opacity: 0.4,
  },
  navButtonText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
  },
  navButtonTextDisabled: {
    color: colors.textMuted,
  },
  navButtonNext: {
    paddingHorizontal: SPACING.xl,
  },
  completeButton: {
    backgroundColor: colors.success,
  },
  navButtonNextText: {
    ...TYPOGRAPHY.subheadBold,
    color: '#FFFFFF',
  },
  progressDots: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.xs + 2,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  dotActive: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },
});

export const useDetailStyles = () => {
  const { colors } = useTheme();
  return useMemo(() => makeDetailStyles(colors), [colors]);
};

export const useLessonStyles = () => {
  const { colors } = useTheme();
  return useMemo(() => makeLessonStyles(colors), [colors]);
};
