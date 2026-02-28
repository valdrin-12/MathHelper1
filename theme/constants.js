// MathHelper Design System - Blue & White Theme
// Primary: Deep Blue tones | Accent: Warm Orange/Amber | Surface: Clean Whites

export const COLORS = {
  // Primary Blue Palette
  primary: '#1E3A8A',
  primaryDark: '#1E2D6F',
  primaryLight: '#3B82F6',
  primarySoft: '#2563EB',
  primaryBg: '#EFF6FF',
  primaryBgLight: '#F0F7FF',

  // Secondary / Accent - Warm tones
  secondary: '#F59E0B',
  secondaryDark: '#D97706',

  // Semantic Colors
  success: '#10B981',
  successLight: '#ECFDF5',
  warning: '#F59E0B',
  warningLight: '#FFFBEB',
  warningBg: '#FEF3C7',
  warningAccent: '#FBBF24',
  error: '#EF4444',
  errorLight: '#FEF2F2',
  info: '#3B82F6',
  infoLight: '#EFF6FF',
  accent: '#06B6D4',
  purple: '#8B5CF6',
  purpleLight: '#F5F3FF',

  destructive: '#EF4444',

  // Backgrounds - Clean & Airy
  background: '#F0F4FF',
  backgroundAlt: '#F8FAFC',
  surface: '#FFFFFF',
  card: '#FFFFFF',
  inputBg: '#F8FAFF',
  inputBorder: '#DBEAFE',
  tabBg: '#EFF6FF',

  // Text - High contrast on white
  text: '#0F172A',
  textDark: '#1E293B',
  textSecondary: '#475569',
  textSubtle: '#64748B',
  textMuted: '#94A3B8',
  textPlaceholder: '#94A3B8',
  textLabel: '#334155',
  textLight: '#FFFFFF',
  textOnPrimary: '#FFFFFF',

  // Borders
  border: '#CBD5E1',
  borderLight: '#E2E8F0',
  divider: '#F1F5F9',

  disabled: '#94A3B8',

  overlay: 'rgba(15, 23, 42, 0.5)',
  shadow: '#1E3A8A',

  // Gradients
  gradientStart: '#1E3A8A',
  gradientEnd: '#3B82F6',

  // Tab Bar
  tabBarActive: '#1E3A8A',
  tabBarInactive: '#94A3B8',
  tabBarBg: '#FFFFFF',
  tabBarBorder: '#E2E8F0',

  // Glass effect colors (for glassmorphism)
  glassBackground: 'rgba(255, 255, 255, 0.72)',
  glassBorder: 'rgba(255, 255, 255, 0.5)',
  glassBackgroundDark: 'rgba(30, 58, 138, 0.08)',
};

export const DARK_COLORS = {
  // Primary Blue Palette - brighter in dark mode
  primary: '#3B82F6',
  primaryDark: '#2563EB',
  primaryLight: '#60A5FA',
  primarySoft: '#3B82F6',
  primaryBg: 'rgba(59, 130, 246, 0.12)',
  primaryBgLight: 'rgba(59, 130, 246, 0.08)',

  // Secondary / Accent
  secondary: '#FBBF24',
  secondaryDark: '#F59E0B',

  // Semantic Colors
  success: '#34D399',
  successLight: 'rgba(52, 211, 153, 0.12)',
  warning: '#FBBF24',
  warningLight: 'rgba(251, 191, 36, 0.12)',
  warningBg: 'rgba(251, 191, 36, 0.15)',
  warningAccent: '#FCD34D',
  error: '#F87171',
  errorLight: 'rgba(248, 113, 113, 0.12)',
  info: '#60A5FA',
  infoLight: 'rgba(96, 165, 250, 0.12)',
  accent: '#22D3EE',
  purple: '#A78BFA',
  purpleLight: 'rgba(167, 139, 250, 0.12)',

  destructive: '#F87171',

  // Backgrounds - Dark & Deep
  background: '#0F172A',
  backgroundAlt: '#1E293B',
  surface: '#1E293B',
  card: '#1E293B',
  inputBg: '#0F172A',
  inputBorder: 'rgba(59, 130, 246, 0.2)',
  tabBg: 'rgba(59, 130, 246, 0.1)',

  // Text - Light on dark
  text: '#F1F5F9',
  textDark: '#E2E8F0',
  textSecondary: '#94A3B8',
  textSubtle: '#64748B',
  textMuted: '#475569',
  textPlaceholder: '#475569',
  textLabel: '#CBD5E1',
  textLight: '#FFFFFF',
  textOnPrimary: '#FFFFFF',

  // Borders
  border: '#334155',
  borderLight: '#1E293B',
  divider: '#334155',

  disabled: '#475569',

  overlay: 'rgba(0, 0, 0, 0.7)',
  shadow: '#000000',

  // Gradients
  gradientStart: '#1E3A8A',
  gradientEnd: '#3B82F6',

  // Tab Bar
  tabBarActive: '#3B82F6',
  tabBarInactive: '#475569',
  tabBarBg: '#0F172A',
  tabBarBorder: '#1E293B',

  // Glass effect colors
  glassBackground: 'rgba(30, 41, 59, 0.8)',
  glassBorder: 'rgba(59, 130, 246, 0.15)',
  glassBackgroundDark: 'rgba(15, 23, 42, 0.5)',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BORDER_RADIUS = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 22,
  xxl: 28,
  round: 999,
};

export const TYPOGRAPHY = {
  h1: { fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  h2: { fontSize: 22, fontWeight: '700', letterSpacing: -0.3 },
  h3: { fontSize: 18, fontWeight: '600' },
  body: { fontSize: 15, fontWeight: '400' },
  bodyBold: { fontSize: 15, fontWeight: '600' },
  bodyLarge: { fontSize: 16, fontWeight: '400' },
  bodyLargeBold: { fontSize: 16, fontWeight: '700' },
  caption: { fontSize: 13, fontWeight: '400' },
  captionBold: { fontSize: 13, fontWeight: '600' },
  small: { fontSize: 11, fontWeight: '400' },
  button: { fontSize: 16, fontWeight: '700' },
  buttonLarge: { fontSize: 17, fontWeight: '800' },
  tabLabel: { fontSize: 12, fontWeight: '600' },
  label: { fontSize: 14, fontWeight: '600' },
};

export const SHADOWS = {
  small: {
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  large: {
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  primary: {
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 5,
  },
  soft: {
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  glass: {
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
};

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
};

export const WEB_CONTENT_MAX_WIDTH = 900;

export default { COLORS, DARK_COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS, BREAKPOINTS, WEB_CONTENT_MAX_WIDTH };
