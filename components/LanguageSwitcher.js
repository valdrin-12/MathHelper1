import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../locales/i18n';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <TouchableOpacity
            key={lang.code}
            style={[styles.pill, isActive && styles.pillActive]}
            onPress={() => setLanguage(lang.code)}
          >
            <Text style={styles.flag}>{lang.flag}</Text>
            <Text style={[styles.label, isActive && styles.labelActive]}>
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
    gap: SPACING.md,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: 'rgba(255,255,255,0.15)',
    gap: 6,
  },
  pillActive: {
    backgroundColor: COLORS.surface,
  },
  flag: {
    fontSize: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.8)',
  },
  labelActive: {
    color: COLORS.primary,
  },
});
