// Styles shared by the sign-in screen and its parts (features/auth/*).
import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SHADOWS } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';

export const makeAuthStyles = (colors) => StyleSheet.create({
  // ─── Root ───────────────────────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 48,
  },

  // ─── Brand Area ─────────────────────────────────────────────────────────────
  // Apple sign-in pattern: clean background, centered app icon + name
  brandArea: {
    paddingTop: Platform.OS === 'ios' ? 72 : 56,
    paddingBottom: 28,
    alignItems: 'center',
  },
  languageSwitcherTop: {
    marginTop: 20,
    alignItems: 'center',
  },
  languageSwitcherContainer: { display: 'none' }, // legacy compat
  appIconSquircle: {
    width: 80,
    height: 80,
    borderRadius: 18,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: -0.38,
    marginBottom: 6,
  },
  appTagline: {
    fontSize: 15,
    color: colors.textSubtle,
    fontWeight: '400',
    letterSpacing: -0.24,
  },

  // ─── Form Card ──────────────────────────────────────────────────────────────
  formCard: {
    marginHorizontal: 16,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    paddingTop: 24,
  },

  // ─── Segmented Control ──────────────────────────────────────────────────────
  // Matches iOS UISegmentedControl exactly: grey pill, white selected chip
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(118,118,128,0.12)',
    borderRadius: 9,
    padding: 2,
    marginBottom: 28,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    gap: 5,
  },
  activeTab: {
    backgroundColor: colors.surface,
    ...SHADOWS.small,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: -0.08,
  },
  activeTabText: {
    color: colors.text,
    fontWeight: '600',
  },

  // ─── Form Content ────────────────────────────────────────────────────────────
  form: { marginBottom: 8 },
  formTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
    letterSpacing: -0.26,
  },
  formSubtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginBottom: 24,
    fontWeight: '400',
    letterSpacing: -0.24,
  },

  // ─── Input Fields ────────────────────────────────────────────────────────────
  // iOS inset-grouped style: subtle background, clean 1px border
  inputGroup: { marginBottom: 14 },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: 7,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
    paddingHorizontal: 14,
  },
  inputWrapperError: {
    borderColor: colors.error,
    backgroundColor: colors.errorLight,
  },
  inputIcon: { marginRight: 10 },
  textInput: {
    flex: 1,
    fontSize: 17,
    color: colors.text,
    paddingVertical: 15,
    letterSpacing: -0.43,
  },
  eyeButton: { padding: 8 },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginTop: 6,
    marginLeft: 2,
    fontWeight: '500',
    letterSpacing: -0.08,
  },

  // ─── Privacy Consent ────────────────────────────────────────────────────────
  consentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4,
    marginBottom: 4,
    gap: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    flexShrink: 0,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxError: {
    borderColor: colors.error,
    backgroundColor: colors.errorLight,
  },
  consentText: {
    flex: 1,
    fontSize: 13,
    color: colors.textSubtle,
    lineHeight: 20,
    letterSpacing: -0.08,
  },
  consentLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  guestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: `${colors.primary}14`,
  },
  guestButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: -0.2,
  },

  // ─── Error Banners ──────────────────────────────────────────────────────────
  loginErrorBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.errorLight,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    gap: 8,
  },
  loginErrorText: {
    flex: 1,
    fontSize: 13,
    color: colors.error,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.08,
  },

  // ─── Primary Button ─────────────────────────────────────────────────────────
  // Apple-style: full-width, prominent, 17pt semibold, 50pt tall
  submitButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
  },
  submitButtonDisabled: { opacity: 0.55 },
  submitGradient: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.primary,
    gap: 8,
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.43,
  },

  // ─── Forgot Password ────────────────────────────────────────────────────────
  forgotPasswordLink: {
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 4,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '500',
    letterSpacing: -0.24,
  },

  // ─── Divider ────────────────────────────────────────────────────────────────
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.border,
  },
  dividerText: {
    fontSize: 13,
    color: colors.textMuted,
    marginHorizontal: 12,
    fontWeight: '400',
    letterSpacing: -0.08,
  },

  googleConsent: {
    fontSize: 12,
    lineHeight: 17,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 12,
  },

  // ─── Mode Toggle ─────────────────────────────────────────────────────────────
  switchModeButton: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  switchModeText: {
    fontSize: 15,
    color: colors.textMuted,
    letterSpacing: -0.24,
  },
  switchModeLink: {
    color: colors.primary,
    fontWeight: '600',
  },

  // ─── Footer ──────────────────────────────────────────────────────────────────
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  footerText: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '400',
    letterSpacing: -0.08,
  },

  // ─── Destructive Action ──────────────────────────────────────────────────────
  clearDataButton: {
    flexDirection: 'row',
    backgroundColor: colors.error,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
    gap: 6,
    ...SHADOWS.small,
  },
  clearDataText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ─── Forgot Password Sheet ───────────────────────────────────────────────────
  // iOS bottom sheet pattern — slides up from the bottom
  forgotOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  forgotCard: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 40,
  },
  forgotHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotBackButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
    letterSpacing: -0.43,
  },
  forgotStepText: {
    fontSize: 15,
    color: colors.textSubtle,
    marginBottom: 20,
    lineHeight: 22,
    letterSpacing: -0.24,
  },
  forgotErrorContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.errorLight,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  forgotErrorText: {
    fontSize: 13,
    color: colors.error,
    fontWeight: '500',
    flex: 1,
    letterSpacing: -0.08,
  },
  forgotSuccessMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.successLight,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  forgotSuccessMessageText: {
    fontSize: 13,
    color: colors.success,
    fontWeight: '500',
    flex: 1,
    letterSpacing: -0.08,
  },
  forgotSuccessContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  forgotSuccessIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.successLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  forgotSuccessText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: -0.43,
  },
});

export const useAuthStyles = () => {
  const { colors } = useTheme();
  return useMemo(() => makeAuthStyles(colors), [colors]);
};
