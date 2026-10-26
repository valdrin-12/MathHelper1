import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { useAuthStyles } from './authStyles';

/**
 * Label + icon + text input (+ optional trailing element) + error text.
 * `error` turns the border and icon red and shows the message under the field.
 */
export default function AuthField({ label, icon, error, inputStyle, trailing, ...inputProps }) {
  const { colors } = useTheme();
  const styles = useAuthStyles();
  return (
    <View style={styles.inputGroup}>
      {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
      <View style={[styles.inputWrapper, error && styles.inputWrapperError]}>
        <Ionicons name={icon} size={18} color={error ? colors.error : colors.textMuted} style={styles.inputIcon} />
        <TextInput
          style={inputStyle ? [styles.textInput, inputStyle] : styles.textInput}
          placeholderTextColor={colors.textPlaceholder}
          {...inputProps}
        />
        {trailing}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

// Eye button that shows or hides a password
export function PasswordToggle({ visible, onToggle }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useAuthStyles();
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={styles.eyeButton}
      accessibilityRole="button"
      accessibilityLabel={visible ? t('a11y.hidePassword') : t('a11y.showPassword')}
    >
      <Ionicons name={visible ? 'eye-off-outline' : 'eye-outline'} size={18} color={colors.textMuted} />
    </TouchableOpacity>
  );
}
