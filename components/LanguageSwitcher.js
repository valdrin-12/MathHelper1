import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SUPPORTED_LANGUAGES } from '../locales/i18n';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

// variant: 'dark' (default, for use on coloured/dark backgrounds)
//          'light' (for use on light/white backgrounds like AuthScreen)
export default function LanguageSwitcher({ variant = 'dark' }) {
  const { language, setLanguage } = useLanguage();
  const { colors } = useTheme();
  const isLight = variant === 'light';

  return (
    <View style={styles.container}>
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.pill,
              isLight ? styles.pillLight : styles.pillDark,
              isLight && { backgroundColor: colors.inputBg },
              isActive && (isLight ? [styles.pillActiveLightBg, { backgroundColor: colors.surface, borderColor: colors.primary }] : styles.pillActive),
            ]}
            onPress={() => setLanguage(lang.code)}
          >
            <Text style={styles.flag}>{lang.flag}</Text>
            <Text style={[
              styles.label,
              isLight ? [styles.labelLight, { color: colors.textSecondary }] : styles.labelDark,
              isActive && [styles.labelActive, isLight && { color: colors.primary }],
            ]}>
              {lang.code.toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.sm,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs + 2,
    borderRadius: BORDER_RADIUS.round,
    gap: 6,
  },
  pillDark: {
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  pillLight: {
    backgroundColor: COLORS.borderLight,
  },
  pillActive: {
    backgroundColor: COLORS.surface,
  },
  pillActiveLightBg: {
    backgroundColor: COLORS.surface,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  flag: {
    fontSize: 15,
  },
  labelDark: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
  },
  labelLight: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
  labelActive: {
    color: COLORS.primary,
  },
});
