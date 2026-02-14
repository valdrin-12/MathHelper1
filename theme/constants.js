export const COLORS = {
  primary: '#6C63FF',
  primaryDark: '#5A52D5',
  primaryLight: '#8B85FF',
  primarySoft: '#7C6FF7',
  primaryBg: '#EEF2FF',
  primaryBgLight: '#F0EEFF',

  secondary: '#FF6584',
  secondaryDark: '#E0506E',

  success: '#22C55E',
  successLight: '#F0FFF4',
  warning: '#F97316',
  warningLight: '#FFF7ED',
  warningBg: '#FFF4E6',
  warningAccent: '#FFB84D',
  error: '#F44336',
  errorLight: '#FFEBEE',
  info: '#2196F3',
  infoLight: '#E3F2FD',
  accent: '#4ECDC4',
  purple: '#A855F7',
  purpleLight: '#FDF4FF',

  destructive: '#FF6B6B',

  background: '#F5F7FF',
  backgroundAlt: '#F8F9FA',
  surface: '#FFFFFF',
  card: '#FFFFFF',
  inputBg: '#F8F9FF',
  inputBorder: '#E8EBFF',
  tabBg: '#F0F1F8',

  text: '#1A1A2E',
  textDark: '#2C3E50',
  textSecondary: '#666666',
  textSubtle: '#8A8FA8',
  textMuted: '#999999',
  textPlaceholder: '#B0B5C8',
  textLabel: '#3D3D5C',
  textLight: '#FFFFFF',
  textOnPrimary: '#FFFFFF',

  border: '#E0E0E0',
  borderLight: '#F0F0F0',
  divider: '#EEEEEE',

  disabled: '#BCBACB',

  overlay: 'rgba(0,0,0,0.5)',
  shadow: '#000000',

  gradientStart: '#6C63FF',
  gradientEnd: '#8B85FF',

  tabBarActive: '#6C63FF',
  tabBarInactive: '#999999',
  tabBarBg: '#FFFFFF',
  tabBarBorder: '#E0E0E0',
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
  xs: 5,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  round: 999,
};

export const TYPOGRAPHY = {
  h1: { fontSize: 28, fontWeight: '700' },
  h2: { fontSize: 22, fontWeight: '700' },
  h3: { fontSize: 18, fontWeight: '600' },
  body: { fontSize: 15, fontWeight: '400' },
  bodyBold: { fontSize: 15, fontWeight: '600' },
  bodyLarge: { fontSize: 16, fontWeight: '400' },
  bodyLargeBold: { fontSize: 16, fontWeight: '700' },
  caption: { fontSize: 13, fontWeight: '400' },
  captionBold: { fontSize: 13, fontWeight: '600' },
  small: { fontSize: 11, fontWeight: '400' },
  button: { fontSize: 16, fontWeight: '600' },
  buttonLarge: { fontSize: 17, fontWeight: '700' },
  tabLabel: { fontSize: 12, fontWeight: '600' },
  label: { fontSize: 14, fontWeight: '600' },
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  primary: {
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  soft: {
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
};

export default { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS };
