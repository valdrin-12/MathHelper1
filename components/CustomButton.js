import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

const VARIANT_STYLES = {
  primary: {
    button: { backgroundColor: COLORS.primary, ...SHADOWS.medium },
    text: { color: COLORS.textOnPrimary },
  },
  secondary: {
    button: { backgroundColor: COLORS.backgroundAlt, borderWidth: 1.5, borderColor: COLORS.border },
    text: { color: COLORS.textDark },
  },
  outline: {
    button: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: COLORS.primary },
    text: { color: COLORS.primary },
  },
  destructive: {
    button: { backgroundColor: COLORS.destructive, ...SHADOWS.medium },
    text: { color: COLORS.textLight },
  },
  ghost: {
    button: { backgroundColor: 'transparent' },
    text: { color: COLORS.primary },
  },
};

export default function CustomButton({ title, onPress, style, textStyle, variant = 'primary', disabled }) {
  const variantStyle = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

  return (
    <TouchableOpacity
      style={[styles.button, variantStyle.button, disabled && styles.disabled, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, variantStyle.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...TYPOGRAPHY.button,
  },
  disabled: {
    opacity: 0.5,
  },
});
