// Styles of the profile sheet and its parts (chart, achievement badges, level and mastery), moved as one block.
import { useMemo } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../theme/constants';
import { useTheme } from '../../context/ThemeContext';

const { width } = Dimensions.get('window');
const HAIRLINE = StyleSheet.hairlineWidth;

// ─── Main Styles ───
export const makeStyles = (colors) => StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1 },
  content: { flex: 1 },

  // Sheet nav bar
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    minHeight: 52,
    backgroundColor: colors.background,
    borderBottomWidth: HAIRLINE,
    borderBottomColor: colors.border,
  },
  navButton: {
    width: 44, height: 44,
    justifyContent: 'center', alignItems: 'center',
  },
  navTitle: {
    flex: 1, ...TYPOGRAPHY.headline, color: colors.text, textAlign: 'center',
  },

  // Avatar + identity
  avatarContainer: {
    alignItems: 'center',
    paddingTop: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
  },
  avatarCircle: {
    width: 88, height: 88, borderRadius: 44,
    backgroundColor: colors.primary,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: SPACING.md,
  },
  avatarInitials: {
    ...TYPOGRAPHY.h1, fontSize: 34, color: '#FFFFFF',
  },
  userNameRow: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.xs,
  },
  userName: {
    ...TYPOGRAPHY.h2, color: colors.text,
  },
  userEmail: {
    ...TYPOGRAPHY.subhead, color: colors.textSubtle, marginBottom: SPACING.sm,
  },
  memberBadge: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.xs + 2,
  },
  memberText: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle,
  },

  // Circular Stats
  circularStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
  circularStatItem: {
    alignItems: 'center', gap: SPACING.sm,
  },
  circularStatValue: {
    ...TYPOGRAPHY.headline, fontSize: 18, color: colors.text,
  },
  circularStatLabel: {
    ...TYPOGRAPHY.small, color: colors.textSubtle, fontWeight: '500', textAlign: 'center',
    maxWidth: 80,
  },

  tightSection: {
    marginTop: SPACING.lg,
  },

  // Achievements
  achievementsSection: {
    marginHorizontal: SPACING.lg, marginTop: SPACING.xxl,
  },
  achievementsHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline',
    marginBottom: SPACING.md, paddingHorizontal: SPACING.xs,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3, fontWeight: '700', color: colors.text,
  },
  achievementCountText: {
    ...TYPOGRAPHY.subhead, color: colors.textSubtle,
  },
  achievementsGrid: {
    flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm,
  },

  // Edit form
  formSection: { marginTop: SPACING.xxl, paddingHorizontal: SPACING.lg },
  formSectionTitle: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle, textTransform: 'uppercase',
    marginLeft: SPACING.lg, marginBottom: SPACING.sm,
  },
  inputGroup: { marginBottom: SPACING.md },
  label: { ...TYPOGRAPHY.subhead, color: colors.textSubtle, marginBottom: SPACING.xs + 2, marginLeft: SPACING.xs },
  input: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    minHeight: 48,
    ...TYPOGRAPHY.body,
    color: colors.text,
  },
  hint: { ...TYPOGRAPHY.footnote, color: colors.textSubtle, marginTop: SPACING.xs, marginHorizontal: SPACING.lg },
  editErrorBox: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.xs + 2,
    marginHorizontal: SPACING.lg, marginTop: SPACING.lg,
    padding: SPACING.md, borderRadius: BORDER_RADIUS.md, backgroundColor: colors.errorLight,
  },
  editErrorText: { ...TYPOGRAPHY.footnote, color: colors.destructive, flex: 1 },
  footer: {
    padding: SPACING.lg, paddingBottom: SPACING.sm,
    backgroundColor: colors.background,
    borderTopWidth: HAIRLINE, borderTopColor: colors.border,
    gap: SPACING.xs,
  },

  // ─── Success popup (iOS alert style) ───
  successOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxxl,
    zIndex: 999,
  },
  successCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    paddingTop: SPACING.xxl,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    overflow: 'hidden',
  },
  successTitle: {
    ...TYPOGRAPHY.headline, color: colors.text,
    marginBottom: SPACING.xs, paddingHorizontal: SPACING.lg,
  },
  successMessage: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle,
    textAlign: 'center',
    marginBottom: SPACING.xl, paddingHorizontal: SPACING.lg,
  },
  successBtn: {
    alignSelf: 'stretch', minHeight: 44,
    justifyContent: 'center', alignItems: 'center',
    borderTopWidth: HAIRLINE, borderTopColor: colors.border,
  },
  successBtnText: {
    ...TYPOGRAPHY.headline, color: colors.primary,
  },
});

// ─── Chart Styles ───
export const makeChartStyles = (colors) => StyleSheet.create({
  container: {
    marginHorizontal: SPACING.lg, marginTop: SPACING.lg,
  },
  title: {
    ...TYPOGRAPHY.headline, color: colors.text, marginBottom: SPACING.lg,
  },
  chart: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 100, gap: SPACING.xs + 2,
  },
  barColumn: {
    flex: 1, alignItems: 'center', gap: SPACING.xs,
  },
  barTrack: {
    width: '100%', height: 80, justifyContent: 'flex-end', borderRadius: 6, overflow: 'hidden',
    backgroundColor: colors.inputBg,
  },
  bar: {
    width: '100%', borderRadius: 6, minHeight: 6, backgroundColor: colors.primary,
  },
  barInactive: {
    opacity: 0.35,
  },
  barValue: {
    ...TYPOGRAPHY.small, fontSize: 10, fontWeight: '600', color: colors.textSubtle,
  },
  barValueToday: {
    color: colors.primary,
  },
  barLabel: {
    ...TYPOGRAPHY.small, fontWeight: '500', color: colors.textMuted,
  },
  barLabelToday: {
    color: colors.primary, fontWeight: '700',
  },
});

// ─── Badge Styles ───
export const makeBadgeStyles = (colors) => StyleSheet.create({
  container: {
    width: (width - SPACING.lg * 2 - SPACING.sm * 2) / 3,
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    gap: SPACING.xs + 2,
  },
  locked: {
    opacity: 0.5,
  },
  iconCircle: {
    width: 42, height: 42, borderRadius: 21,
    justifyContent: 'center', alignItems: 'center',
  },
  title: {
    ...TYPOGRAPHY.small, fontSize: 10, fontWeight: '600', color: colors.text, textAlign: 'center',
  },
  lockedText: {
    color: colors.textMuted,
  },
  lockBadge: {
    position: 'absolute', right: -2, bottom: -2,
    width: 18, height: 18, borderRadius: 9,
    alignItems: 'center', justifyContent: 'center',
  },
  progressText: {
    ...TYPOGRAPHY.small, fontSize: 10, color: colors.textMuted,
  },
});

// ─── Level + Mastery Styles ───
export const makeLevelStyles = (colors) => StyleSheet.create({
  card: {
    marginHorizontal: SPACING.lg, marginTop: SPACING.xxl, gap: SPACING.sm,
  },
  row: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.md,
  },
  badge: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: colors.primary,
    justifyContent: 'center', alignItems: 'center',
  },
  badgeLevel: {
    ...TYPOGRAPHY.headline, fontSize: 18, color: '#FFFFFF',
  },
  text: { flex: 1 },
  eyebrow: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle, textTransform: 'uppercase',
  },
  name: {
    ...TYPOGRAPHY.headline, color: colors.text,
  },
  xp: {
    ...TYPOGRAPHY.subheadBold, color: colors.primary,
  },
  bar: {
    height: 8, borderRadius: 4, overflow: 'hidden', backgroundColor: colors.borderLight, marginTop: SPACING.xs,
  },
  barFill: {
    height: '100%', borderRadius: 4, backgroundColor: colors.primary,
  },
  barFillPlain: {
    height: '100%', borderRadius: 3,
  },
  note: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle,
  },
  masterySection: {
    marginHorizontal: SPACING.lg, marginTop: SPACING.xxl,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3, fontWeight: '700', color: colors.text,
    marginBottom: SPACING.md, paddingHorizontal: SPACING.xs,
  },
  masteryCard: {
    gap: SPACING.md,
  },
  masteryRow: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.md,
  },
  masteryIcon: {
    fontSize: 20, width: 28, textAlign: 'center',
  },
  masteryLabelRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4, gap: SPACING.sm,
  },
  masteryName: {
    ...TYPOGRAPHY.subheadBold, color: colors.text, flex: 1,
  },
  masteryPercent: {
    ...TYPOGRAPHY.footnote, fontWeight: '600', color: colors.textSubtle,
  },
  masteryBar: {
    height: 6, borderRadius: 3, overflow: 'hidden', backgroundColor: colors.inputBg,
  },
  footer: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle, marginTop: SPACING.sm, marginHorizontal: SPACING.lg,
  },
});

const useStyles = (make) => {
  const { colors } = useTheme();
  return useMemo(() => make(colors), [colors]);
};
export const useProfileStyles = () => useStyles(makeStyles);
export const useChartStyles = () => useStyles(makeChartStyles);
export const useBadgeStyles = () => useStyles(makeBadgeStyles);
export const useLevelStyles = () => useStyles(makeLevelStyles);
