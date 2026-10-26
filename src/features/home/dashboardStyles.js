// Styles of the Home tab (goal, solve card, stats, recent activity, limit dialog), moved as one block.
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';

export const makeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: SPACING.lg,
  },
  block: {
    marginTop: SPACING.lg,
  },
  sectionBlock: {
    marginTop: SPACING.xxxl,
  },
  toolsSection: {
    marginHorizontal: 0,
    marginTop: SPACING.lg,
  },

  // Header avatar
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    ...TYPOGRAPHY.headline,
    color: '#FFFFFF',
  },

  // Daily Goal
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  goalTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    flex: 1,
    marginLeft: SPACING.md,
  },
  goalCount: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.primary,
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.borderLight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  goalEncouragement: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: SPACING.sm + 2,
  },

  // Solve
  segmented: {
    marginBottom: SPACING.lg,
  },
  mathTextInput: {
    ...TYPOGRAPHY.body,
    fontSize: 18,
    lineHeight: 26,
    color: colors.text,
    backgroundColor: colors.inputBg,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    minHeight: 112,
    maxHeight: 160,
    outlineStyle: 'none', // Remove focus outline on web
  },
  actionRow: {
    flexDirection: 'row',
    gap: SPACING.sm + 2,
    marginVertical: SPACING.md,
  },
  actionButton: {
    flex: 1,
  },
  graphButton: {
    marginBottom: SPACING.md,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  uploadTile: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.md,
  },
  uploadTileInner: {
    alignItems: 'center',
  },
  uploadLabel: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
    marginTop: SPACING.sm + 2,
    textAlign: 'center',
  },
  uploadSub: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: 2,
    textAlign: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 220,
    backgroundColor: colors.inputBg,
    borderRadius: BORDER_RADIUS.md,
  },

  // Statistics
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  statCard: {
    flexBasis: '46%',
    flexGrow: 1,
    padding: SPACING.lg,
  },
  statCardDesktop: {
    flexBasis: '22%',
  },
  statTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  statNumber: {
    ...TYPOGRAPHY.h1,
    color: colors.text,
  },
  statLabel: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },

  // Recent Activity
  activityList: {
    marginHorizontal: 0,
    marginTop: 0,
  },
  emptyActivity: {
    alignItems: 'center',
    paddingVertical: SPACING.xxxl,
  },
  emptyIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  emptyActivityText: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },

  // Daily Limit Modal
  limitOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxl,
  },
  limitModal: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xxl,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  limitIconBox: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.warningLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  limitTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs + 2,
  },
  limitMessage: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  limitPremiumBox: {
    backgroundColor: colors.warningLight,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md + 2,
    width: '100%',
    marginBottom: SPACING.lg,
  },
  limitPremiumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs + 2,
    marginBottom: SPACING.xs,
  },
  limitPremiumTitle: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
  },
  limitPremiumDesc: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },
  limitButton: {
    alignSelf: 'stretch',
    marginTop: SPACING.xs,
  },
});

export const useDashboardStyles = () => {
  const { colors } = useTheme();
  return useMemo(() => makeStyles(colors), [colors]);
};
