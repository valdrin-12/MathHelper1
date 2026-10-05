// ─────────────────────────────────────────────────────────────────────────────
// Shared iOS-style building blocks. Every screen should compose these instead of
// styling its own headers, cards, list rows and buttons. All are theme-aware.
// ─────────────────────────────────────────────────────────────────────────────
import React, { Children, isValidElement, cloneElement, useContext } from 'react';
import { View, Text, TouchableOpacity, Switch, ActivityIndicator, TextInput, StyleSheet, Platform } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../theme/constants';

const HAIRLINE = StyleSheet.hairlineWidth;

// Large-title navigation header (UINavigationBar prefersLargeTitles)
export function ScreenHeader({ title, subtitle, eyebrow, right, style }) {
  const { colors } = useTheme();
  // Desktop web renders screens outside the tab navigator, so there may be no SafeAreaProvider
  const insets = useContext(SafeAreaInsetsContext);
  const paddingTop = Platform.OS === 'web' ? SPACING.xl : (insets?.top ?? 0) + SPACING.md;

  return (
    <View style={[styles.header, { paddingTop }, style]}>
      <View style={styles.headerText}>
        {eyebrow ? <Text style={[styles.headerEyebrow, { color: colors.textSubtle }]} numberOfLines={1}>{eyebrow}</Text> : null}
        <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={2}>{title}</Text>
        {subtitle ? <Text style={[styles.headerSubtitle, { color: colors.textSubtle }]}>{subtitle}</Text> : null}
      </View>
      {right ? <View style={styles.headerRight}>{right}</View> : null}
    </View>
  );
}

// Rounded-square glyph used at the start of list rows (iOS Settings style)
export function IconBadge({ name, color, size = 30 }) {
  return (
    <View style={[styles.iconBadge, { width: size, height: size, borderRadius: size * 0.24, backgroundColor: color }]}>
      <Ionicons name={name} size={size * 0.58} color="#FFFFFF" />
    </View>
  );
}

// Inset grouped section: optional header/footer, rows separated by inset hairlines
export function ListSection({ title, footer, children, style }) {
  const { colors } = useTheme();
  const rows = Children.toArray(children).filter(isValidElement);

  return (
    <View style={[styles.section, style]}>
      {title ? <Text style={[styles.sectionHeader, { color: colors.textSubtle }]}>{title}</Text> : null}
      <View style={[styles.sectionBody, { backgroundColor: colors.surface }]}>
        {rows.map((row, i) => cloneElement(row, { showDivider: row.props.showDivider ?? i < rows.length - 1 }))}
      </View>
      {footer ? <Text style={[styles.sectionFooter, { color: colors.textSubtle }]}>{footer}</Text> : null}
    </View>
  );
}

// A single row. Trailing accessory: `value` text, `switchValue`, custom `right`, or a chevron when tappable.
export function ListRow({
  icon, iconColor, leading, title, subtitle, value, right,
  switchValue, onSwitchChange, onPress, onLongPress, destructive, centered, loading, showDivider, leadingWidth = 30,
}) {
  const { colors } = useTheme();
  const hasSwitch = typeof switchValue === 'boolean';
  const showChevron = !!onPress && !hasSwitch && !right && !destructive && !centered;
  const titleColor = destructive ? colors.destructive : centered ? colors.primary : colors.text;
  const insetLeft = icon || leading ? SPACING.lg + leadingWidth + SPACING.md : SPACING.lg;

  const content = (
    <View style={styles.row}>
      {leading || (icon ? <IconBadge name={icon} color={iconColor || colors.primary} /> : null)}
      <View style={[styles.rowText, (icon || leading) && { marginLeft: SPACING.md }, centered && styles.rowTextCentered]}>
        <Text style={[styles.rowTitle, { color: titleColor }]} numberOfLines={1}>{title}</Text>
        {subtitle ? <Text style={[styles.rowSubtitle, { color: colors.textSubtle }]} numberOfLines={2}>{subtitle}</Text> : null}
      </View>
      {loading ? <ActivityIndicator size="small" color={colors.textMuted} style={styles.rowAccessory} /> : null}
      {value != null && !loading ? <Text style={[styles.rowValue, { color: colors.textSubtle }]} numberOfLines={1}>{value}</Text> : null}
      {right}
      {hasSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: colors.borderLight, true: colors.primary }}
          thumbColor="#FFFFFF"
          activeThumbColor="#FFFFFF"
          ios_backgroundColor={colors.borderLight}
        />
      ) : null}
      {showChevron ? <Ionicons name="chevron-forward" size={18} color={colors.textPlaceholder} style={styles.rowAccessory} /> : null}
    </View>
  );

  return (
    <View>
      {onPress ? (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} activeOpacity={0.6} disabled={loading}>{content}</TouchableOpacity>
      ) : content}
      {showDivider ? <View style={[styles.divider, { marginLeft: insetLeft, backgroundColor: colors.border }]} /> : null}
    </View>
  );
}

// Plain grouped card
export function Card({ children, style }) {
  const { colors } = useTheme();
  return <View style={[styles.card, { backgroundColor: colors.surface }, style]}>{children}</View>;
}

// Small uppercase-free section title used above cards (iOS "title3")
export function SectionTitle({ children, style }) {
  const { colors } = useTheme();
  return <Text style={[styles.sectionTitle, { color: colors.text }, style]}>{children}</Text>;
}

// Buttons: filled (primary action), tinted (secondary), plain (text only)
export function Button({ title, icon, onPress, variant = 'filled', tone = 'primary', disabled, loading, style }) {
  const { colors } = useTheme();
  const toneColor = {
    primary: colors.primary,
    destructive: colors.destructive,
    warning: colors.secondary,
    success: colors.success,
  }[tone] || colors.primary;
  const toneBg = {
    primary: colors.primaryBg,
    destructive: colors.errorLight,
    warning: colors.warningLight,
    success: colors.successLight,
  }[tone] || colors.primaryBg;

  const bg = variant === 'filled' ? toneColor : variant === 'tinted' ? toneBg : 'transparent';
  const fg = variant === 'filled' ? '#FFFFFF' : toneColor;
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bg }, isDisabled && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator size="small" color={fg} />
      ) : (
        <View style={styles.buttonInner}>
          {icon ? <Ionicons name={icon} size={17} color={fg} /> : null}
          <Text style={[styles.buttonText, { color: fg }]} numberOfLines={2}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

// UISegmentedControl
export function SegmentedControl({ segments, value, onChange, style }) {
  const { colors, isDark } = useTheme();
  return (
    <View style={[styles.segmented, { backgroundColor: isDark ? colors.inputBg : 'rgba(118,118,128,0.12)' }, style]}>
      {segments.map((seg) => {
        const active = seg.value === value;
        return (
          <TouchableOpacity
            key={seg.value}
            style={[styles.segment, active && [styles.segmentActive, { backgroundColor: isDark ? '#636366' : '#FFFFFF' }]]}
            onPress={() => onChange(seg.value)}
            activeOpacity={0.7}
          >
            {seg.icon ? <Ionicons name={seg.icon} size={15} color={colors.text} /> : null}
            <Text style={[styles.segmentText, { color: colors.text }, active && styles.segmentTextActive]}>{seg.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// UISearchBar-style field
export function SearchField({ value, onChangeText, placeholder, style }) {
  const { colors, isDark } = useTheme();
  return (
    <View style={[styles.search, { backgroundColor: isDark ? colors.inputBg : 'rgba(118,118,128,0.12)' }, style]}>
      <Ionicons name="search" size={17} color={colors.textMuted} />
      <TextInput
        style={[styles.searchInput, { color: colors.text }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        returnKeyType="search"
      />
      {value ? (
        <TouchableOpacity onPress={() => onChangeText('')} hitSlop={8}>
          <Ionicons name="close-circle" size={17} color={colors.textMuted} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

// Compact filter chip for horizontal scrolling filter rows
export function Chip({ label, icon, emoji, active, color, onPress }) {
  const { colors } = useTheme();
  const activeColor = color || colors.primary;
  return (
    <TouchableOpacity
      style={[styles.chip, { backgroundColor: active ? activeColor : colors.surface }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {emoji ? <Text style={styles.chipEmoji}>{emoji}</Text> : null}
      {icon ? <Ionicons name={icon} size={13} color={active ? '#FFFFFF' : colors.textSubtle} /> : null}
      <Text style={[styles.chipText, { color: active ? '#FFFFFF' : colors.text }]} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}

// Small status capsule (e.g. "Completed", "PRO")
export function Pill({ label, icon, color, filled }) {
  return (
    <View style={[styles.pill, { backgroundColor: filled ? color : color + '1F' }]}>
      {icon ? <Ionicons name={icon} size={11} color={filled ? '#FFFFFF' : color} /> : null}
      <Text style={[styles.pillText, { color: filled ? '#FFFFFF' : color }]} numberOfLines={1}>{label}</Text>
    </View>
  );
}

// Centered empty state
export function EmptyState({ icon, title, message, style }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.empty, style]}>
      <Ionicons name={icon} size={44} color={colors.textPlaceholder} />
      {title ? <Text style={[styles.emptyTitle, { color: colors.text }]}>{title}</Text> : null}
      {message ? <Text style={[styles.emptyMessage, { color: colors.textSubtle }]}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs + 2,
    borderRadius: 10,
    paddingHorizontal: SPACING.sm,
    height: 36,
  },
  searchInput: { flex: 1, ...TYPOGRAPHY.body, paddingVertical: 0, outlineStyle: 'none' },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: SPACING.md,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.round,
    marginRight: SPACING.sm - 2,
  },
  chipEmoji: { fontSize: 12 },
  chipText: { ...TYPOGRAPHY.footnote, fontWeight: '500' },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: BORDER_RADIUS.round,
    alignSelf: 'flex-start',
  },
  pillText: { ...TYPOGRAPHY.small, fontWeight: '600' },

  empty: { alignItems: 'center', paddingVertical: SPACING.massive, paddingHorizontal: SPACING.xxxl },
  emptyTitle: { ...TYPOGRAPHY.h3, marginTop: SPACING.md, textAlign: 'center' },
  emptyMessage: { ...TYPOGRAPHY.subhead, marginTop: SPACING.xs, textAlign: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.sm,
  },
  headerText: { flex: 1 },
  headerEyebrow: { ...TYPOGRAPHY.subheadBold, marginBottom: 2 },
  headerTitle: { ...TYPOGRAPHY.largeTitle },
  headerSubtitle: { ...TYPOGRAPHY.subhead, marginTop: SPACING.xs },
  headerRight: { marginLeft: SPACING.md, marginBottom: SPACING.xs },

  iconBadge: { alignItems: 'center', justifyContent: 'center' },

  section: { marginHorizontal: SPACING.lg, marginTop: SPACING.xxl },
  sectionHeader: {
    ...TYPOGRAPHY.footnote,
    textTransform: 'uppercase',
    marginLeft: SPACING.lg,
    marginBottom: SPACING.sm - 2,
  },
  sectionBody: { borderRadius: BORDER_RADIUS.md, overflow: 'hidden' },
  sectionFooter: { ...TYPOGRAPHY.footnote, marginHorizontal: SPACING.lg, marginTop: SPACING.sm - 2 },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm + 2,
  },
  rowText: { flex: 1, justifyContent: 'center' },
  rowTextCentered: { alignItems: 'center', marginLeft: 0 },
  rowTitle: { ...TYPOGRAPHY.body },
  rowSubtitle: { ...TYPOGRAPHY.footnote, marginTop: 1 },
  rowValue: { ...TYPOGRAPHY.body, marginLeft: SPACING.sm, maxWidth: '45%' },
  rowAccessory: { marginLeft: SPACING.sm },
  divider: { height: HAIRLINE },

  card: { borderRadius: BORDER_RADIUS.lg, padding: SPACING.lg },
  sectionTitle: { ...TYPOGRAPHY.h3, fontWeight: '700', marginBottom: SPACING.md },

  button: {
    minHeight: 50,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: { opacity: 0.4 },
  buttonInner: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm - 2 },
  buttonText: { ...TYPOGRAPHY.button, textAlign: 'center', flexShrink: 1 },

  segmented: { flexDirection: 'row', borderRadius: 9, padding: 2 },
  segment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.xs + 2,
    paddingVertical: 7,
    borderRadius: 7,
  },
  segmentActive: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  segmentText: { ...TYPOGRAPHY.footnote, fontWeight: '500' },
  segmentTextActive: { fontWeight: '600' },
});
