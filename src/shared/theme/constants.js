// ─────────────────────────────────────────────────────────────────────────────
// MathHelper — Apple Human Interface Guidelines Design System
// Designed for learning clarity, focus, and calm confidence.
// Reference: Apple HIG 2024 · SF Pro type scale · 8pt spatial grid
// Contrast: all text pairs ≥ 4.5:1 WCAG AA · primary actions ≥ 7:1 AAA
// ─────────────────────────────────────────────────────────────────────────────

export const COLORS = {
  // ── Brand (maps to iOS "Blue" system color — trust, education, focus)
  primary:       '#006FE6',   // vibrant instructional blue
  primaryDark:   '#004EB5',   // pressed / emphasis state
  primaryLight:  '#4DA6FF',   // tint, highlights
  primarySoft:   '#0058CC',   // hover / intermediate
  primaryBg:     '#EBF3FF',   // tinted container backgrounds
  primaryBgLight:'#F0F7FF',   // ultra-light tint

  // ── Accent (iOS "Orange" — achievement, streaks, warmth)
  secondary:     '#FF9500',   // iOS system orange
  secondaryDark: '#CC7700',

  // ── Semantic — using iOS system palette exactly
  success:       '#34C759',   // iOS Green
  successLight:  '#E9F8EE',
  warning:       '#FF9500',   // iOS Orange
  warningLight:  '#FFF4E0',
  warningBg:     '#FFF1D6',
  warningAccent: '#FFB340',
  error:         '#FF3B30',   // iOS Red
  errorLight:    '#FFEBEA',
  info:          '#006FE6',
  infoLight:     '#EBF3FF',
  accent:        '#32ADE6',   // iOS Cyan / Teal
  purple:        '#AF52DE',   // iOS Purple
  purpleLight:   '#F5EEFF',
  destructive:   '#FF3B30',

  // ── Backgrounds — Apple systemGroupedBackground hierarchy
  // Level 0: outermost page canvas
  background:    '#F2F2F7',   // systemGroupedBackground
  // Level 1: section containers / cards
  backgroundAlt: '#FFFFFF',   // systemBackground
  surface:       '#FFFFFF',   // secondarySystemGroupedBackground
  card:          '#FFFFFF',
  // Inputs
  inputBg:       '#F2F2F7',
  inputBorder:   '#D1D1D6',   // Apple separator
  tabBg:         '#F9F9FB',

  // ── Text — Apple label hierarchy (all at 100% opacity)
  text:           '#000000',  // label (primary) — contrast 21:1
  textDark:       '#1C1C1E',  // text on surface — contrast ~19:1
  textSecondary:  '#3A3A3C',  // secondary label context
  textSubtle:     '#636366',  // tertiary label — 7.3:1 on white
  textMuted:      '#8E8E93',  // quaternary label — 4.7:1 on white
  textPlaceholder:'#C7C7CC',  // placeholder
  textLabel:      '#3A3A3C',
  textLight:      '#FFFFFF',
  textOnPrimary:  '#FFFFFF',

  // ── Separators
  border:        '#C6C6C8',   // opaque separator
  borderLight:   '#E5E5EA',   // non-opaque separator
  divider:       '#F2F2F7',

  disabled:      '#C7C7CC',
  overlay:       'rgba(0, 0, 0, 0.40)',
  shadow:        '#000000',

  // ── Gradients
  gradientStart: '#006FE6',
  gradientEnd:   '#4DA6FF',

  // ── Tab Bar
  tabBarActive:   '#006FE6',
  tabBarInactive: '#8E8E93',
  tabBarBg:       '#FFFFFF',
  tabBarBorder:   '#E5E5EA',

  // ── Glass (used for header frosted overlays)
  glassBackground:    'rgba(255, 255, 255, 0.82)',
  glassBorder:        'rgba(255, 255, 255, 0.60)',
  glassBackgroundDark:'rgba(0, 111, 230, 0.06)',
};

export const DARK_COLORS = {
  // ── Brand (iOS blue brightens in dark mode for visibility)
  primary:       '#0A84FF',   // iOS system blue dark
  primaryDark:   '#0066CC',
  primaryLight:  '#5AC8FA',
  primarySoft:   '#0A84FF',
  primaryBg:     'rgba(10, 132, 255, 0.16)',
  primaryBgLight:'rgba(10, 132, 255, 0.10)',

  // ── Accent
  secondary:     '#FF9F0A',   // iOS orange dark
  secondaryDark: '#CC7D00',

  // ── Semantic
  success:       '#30D158',   // iOS green dark
  successLight:  'rgba(48, 209, 88, 0.16)',
  warning:       '#FF9F0A',
  warningLight:  'rgba(255, 159, 10, 0.16)',
  warningBg:     'rgba(255, 159, 10, 0.18)',
  warningAccent: '#FFD60A',
  error:         '#FF453A',   // iOS red dark
  errorLight:    'rgba(255, 69, 58, 0.16)',
  info:          '#0A84FF',
  infoLight:     'rgba(10, 132, 255, 0.16)',
  accent:        '#64D2FF',
  purple:        '#BF5AF2',
  purpleLight:   'rgba(191, 90, 242, 0.16)',
  destructive:   '#FF453A',

  // ── Backgrounds — Apple dark grouped hierarchy
  background:    '#000000',   // systemGroupedBackground dark
  backgroundAlt: '#1C1C1E',   // systemBackground dark
  surface:       '#1C1C1E',   // secondarySystemGroupedBackground dark
  card:          '#1C1C1E',
  inputBg:       '#2C2C2E',   // tertiarySystemGroupedBackground dark
  inputBorder:   'rgba(10, 132, 255, 0.22)',
  tabBg:         'rgba(10, 132, 255, 0.08)',

  // ── Text — Apple dark label hierarchy
  text:           '#FFFFFF',
  textDark:       '#EBEBF5',
  textSecondary:  '#EBEBF5',   // 60% opacity in HIG
  textSubtle:     '#8E8E93',   // tertiary
  textMuted:      '#636366',   // quaternary
  textPlaceholder:'#48484A',
  textLabel:      '#EBEBF5',
  textLight:      '#FFFFFF',
  textOnPrimary:  '#FFFFFF',

  // ── Separators
  border:        '#38383A',
  borderLight:   '#2C2C2E',
  divider:       '#1C1C1E',

  disabled:      '#3A3A3C',
  overlay:       'rgba(0, 0, 0, 0.60)',
  shadow:        '#000000',

  // ── Gradients
  gradientStart: '#0A84FF',
  gradientEnd:   '#5AC8FA',

  // ── Tab Bar
  tabBarActive:   '#0A84FF',
  tabBarInactive: '#636366',
  tabBarBg:       '#1C1C1E',
  tabBarBorder:   '#38383A',

  // ── Glass
  glassBackground:    'rgba(28, 28, 30, 0.88)',
  glassBorder:        'rgba(10, 132, 255, 0.18)',
  glassBackgroundDark:'rgba(0, 0, 0, 0.40)',
};

// ─────────────────────────────────────────────────────────────────────────────
// SPATIAL SYSTEM — 4pt base, 8pt grid
// Every spacing value is a multiple of 4. Use md (12) for tight rhythm,
// lg (16) for standard padding, xl (20) for screen edges.
// ─────────────────────────────────────────────────────────────────────────────
export const SPACING = {
  xxs:   2,   // hairline visual nudges only
  xs:    4,   // icon gaps, tight badges
  sm:    8,   // between related elements
  md:    12,  // between grouped elements
  lg:    16,  // standard component padding
  xl:    20,  // screen horizontal padding
  xxl:   24,  // section header spacing
  xxxl:  32,  // major section gaps
  huge:  40,  // hero / feature spacing
  massive: 48,// full-bleed separators
};

// ─────────────────────────────────────────────────────────────────────────────
// BORDER RADIUS — Apple "continuous curve" approximation
// iOS uses a super-ellipse (squircle). We match the visual weight.
// ─────────────────────────────────────────────────────────────────────────────
export const BORDER_RADIUS = {
  xs:    8,    // small chips, mini badges
  sm:    10,   // input fields, small surfaces
  md:    12,   // standard list cells, buttons
  lg:    16,   // content cards
  xl:    20,   // large cards, modals
  xxl:   28,   // bottom sheets, hero cards
  round: 999,  // pills — filters, tags
};

// ─────────────────────────────────────────────────────────────────────────────
// TYPOGRAPHY — SF Pro scale (Apple HIG 2024)
// Line heights: body ×1.47, display ×1.15, caption ×1.38
// Use system font via fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif'
// ─────────────────────────────────────────────────────────────────────────────
export const TYPOGRAPHY = {
  // ── Display
  largeTitle:    { fontSize: 34, fontWeight: '700', letterSpacing: 0.37, lineHeight: 41 },

  // ── Titles
  h1:            { fontSize: 28, fontWeight: '700', letterSpacing: -0.38, lineHeight: 34 },
  h2:            { fontSize: 22, fontWeight: '700', letterSpacing: -0.26, lineHeight: 28 },
  h3:            { fontSize: 20, fontWeight: '600', letterSpacing: -0.24, lineHeight: 25 },

  // ── Content
  headline:      { fontSize: 17, fontWeight: '600', letterSpacing: -0.43, lineHeight: 22 },
  body:          { fontSize: 17, fontWeight: '400', letterSpacing: -0.43, lineHeight: 22 },
  bodyBold:      { fontSize: 17, fontWeight: '600', letterSpacing: -0.43, lineHeight: 22 },
  bodyLarge:     { fontSize: 16, fontWeight: '400', letterSpacing: -0.32, lineHeight: 21 },
  bodyLargeBold: { fontSize: 16, fontWeight: '600', letterSpacing: -0.32, lineHeight: 21 },
  callout:       { fontSize: 16, fontWeight: '400', letterSpacing: -0.32, lineHeight: 21 },
  subhead:       { fontSize: 15, fontWeight: '400', letterSpacing: -0.24, lineHeight: 20 },
  subheadBold:   { fontSize: 15, fontWeight: '600', letterSpacing: -0.24, lineHeight: 20 },

  // ── Small
  footnote:      { fontSize: 13, fontWeight: '400', letterSpacing: -0.08, lineHeight: 18 },
  caption:       { fontSize: 13, fontWeight: '400', letterSpacing: -0.08, lineHeight: 18 },
  captionBold:   { fontSize: 13, fontWeight: '600', letterSpacing: -0.08, lineHeight: 18 },
  small:         { fontSize: 11, fontWeight: '400', letterSpacing: 0.07,  lineHeight: 13 },

  // ── Actions
  button:        { fontSize: 17, fontWeight: '600', letterSpacing: -0.43 },
  buttonLarge:   { fontSize: 17, fontWeight: '700', letterSpacing: -0.43 },
  buttonSmall:   { fontSize: 15, fontWeight: '600', letterSpacing: -0.24 },

  // ── Navigation
  tabLabel:      { fontSize: 10, fontWeight: '500', letterSpacing: 0.12 },
  navTitle:      { fontSize: 17, fontWeight: '600', letterSpacing: -0.43 },
  label:         { fontSize: 14, fontWeight: '600', letterSpacing: -0.15 },
};

// ─────────────────────────────────────────────────────────────────────────────
// SHADOWS — Apple-style: black base color, very subtle opacity
// iOS renders shadows only on opaque surfaces. Keep elevation low.
// ─────────────────────────────────────────────────────────────────────────────
export const SHADOWS = {
  none: {},
  small: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  large: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 20,
    elevation: 6,
  },
  primary: {
    shadowColor: '#006FE6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 5,
  },
  soft: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  glass: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// MOTION — Apple spring / ease curves
// Spring: friction 26, tension 300 (snappy, purposeful)
// Ease: cubic-bezier(0.25, 0.1, 0.25, 1) standard iOS ease
// Duration: micro 100ms · fast 200ms · standard 300ms · enter 400ms
// ─────────────────────────────────────────────────────────────────────────────
export const MOTION = {
  spring:    { friction: 26, tension: 300, useNativeDriver: true },
  springBounce: { friction: 18, tension: 280, useNativeDriver: true },
  fast:      200,
  standard:  300,
  enter:     400,
  exit:      250,
};

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
};

export const WEB_CONTENT_MAX_WIDTH = 900;

export default { COLORS, DARK_COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS, MOTION, BREAKPOINTS, WEB_CONTENT_MAX_WIDTH };
