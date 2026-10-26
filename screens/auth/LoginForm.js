import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { useAuthStyles } from './authStyles';
import { EMAIL_PATTERN } from './authUtils';
import AuthField, { PasswordToggle } from './AuthField';
import SubmitButton from './SubmitButton';

/**
 * @param {boolean} loading
 * @param {(email: string, password: string) => Promise<string|null>} onSubmit  resolves with an error message, or null on success
 * @param {(email: string) => void} onForgotPassword
 */
export default function LoginForm({ loading, onSubmit, onForgotPassword }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useAuthStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = t('auth.validation.emailRequired');
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      newErrors.email = t('auth.validation.emailInvalid');
    }
    if (!password) {
      newErrors.password = t('auth.validation.passwordRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setLoginError('');
    const message = await onSubmit(email.trim(), password);
    if (message) setLoginError(message);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>{t('auth.welcomeBack')}</Text>
      <Text style={styles.formSubtitle}>{t('auth.loginSubtitle')}</Text>

      <AuthField
        label={t('auth.email')}
        icon="mail-outline"
        error={errors.email}
        placeholder={t('auth.emailPlaceholder')}
        value={email}
        onChangeText={(text) => { setEmail(text); if (errors.email) setErrors({ ...errors, email: null }); }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <AuthField
        label={t('auth.password')}
        icon="lock-closed-outline"
        error={errors.password}
        placeholder={t('auth.passwordPlaceholder')}
        value={password}
        onChangeText={(text) => { setPassword(text); if (errors.password) setErrors({ ...errors, password: null }); }}
        secureTextEntry={!showPassword}
        trailing={<PasswordToggle visible={showPassword} onToggle={() => setShowPassword(!showPassword)} />}
      />

      {/* Login error message */}
      {loginError ? (
        <View style={styles.loginErrorBox}>
          <Ionicons name="alert-circle" size={16} color={colors.error} style={{ marginRight: 6 }} />
          <Text style={styles.loginErrorText}>{loginError}</Text>
        </View>
      ) : null}

      <SubmitButton onPress={submit} loading={loading}>
        <Ionicons name="log-in-outline" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
        <Text style={styles.submitButtonText}>{t('auth.login')}</Text>
      </SubmitButton>

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => onForgotPassword(email)} style={styles.forgotPasswordLink}>
        <Text style={styles.forgotPasswordText}>{t('forgotPassword.link')}</Text>
      </TouchableOpacity>
    </View>
  );
}
