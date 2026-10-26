import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { useAuthStyles } from './authStyles';
import { EMAIL_PATTERN, openLegalPage } from './authUtils';
import AuthField, { PasswordToggle } from './AuthField';
import SubmitButton from './SubmitButton';

/**
 * @param {boolean} loading
 * @param {(name: string, email: string, password: string) => Promise<string|null>} onSubmit  resolves with an error message, or null on success
 */
export default function RegisterForm({ loading, onSubmit }) {
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  const styles = useAuthStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [registerError, setRegisterError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = t('auth.validation.nameMinLength');
    }
    if (!email.trim()) {
      newErrors.email = t('auth.validation.emailRequired');
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      newErrors.email = t('auth.validation.emailInvalid');
    }
    if (!password) {
      newErrors.password = t('auth.validation.passwordRequired');
    } else if (password.length < 8) {
      newErrors.password = t('auth.validation.passwordMinLength');
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = t('auth.validation.confirmRequired');
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = t('auth.validation.passwordsMismatch');
    }
    if (!privacyConsent) {
      newErrors.privacyConsent = t('privacy.consentRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    const message = await onSubmit(name.trim(), email.trim(), password);
    if (message) setRegisterError(message);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>{t('auth.createAccount')}</Text>
      <Text style={styles.formSubtitle}>{t('auth.registerSubtitle')}</Text>

      <AuthField
        label={t('auth.name')}
        icon="person-outline"
        error={errors.name}
        placeholder={t('auth.namePlaceholder')}
        value={name}
        onChangeText={(text) => { setName(text); if (errors.name) setErrors({ ...errors, name: null }); }}
        autoCapitalize="words"
      />

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
        placeholder={t('auth.minChars')}
        value={password}
        onChangeText={(text) => { setPassword(text); if (errors.password) setErrors({ ...errors, password: null }); }}
        secureTextEntry={!showPassword}
        trailing={<PasswordToggle visible={showPassword} onToggle={() => setShowPassword(!showPassword)} />}
      />

      <AuthField
        label={t('auth.confirmPassword')}
        icon="shield-checkmark-outline"
        error={errors.confirmPassword}
        placeholder={t('auth.confirmPasswordPlaceholder')}
        value={confirmPassword}
        onChangeText={(text) => { setConfirmPassword(text); if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null }); }}
        secureTextEntry={!showConfirmPassword}
        trailing={<PasswordToggle visible={showConfirmPassword} onToggle={() => setShowConfirmPassword(!showConfirmPassword)} />}
      />

      {/* Privacy Consent */}
      <TouchableOpacity
        style={styles.consentRow}
        onPress={() => {
          setPrivacyConsent(!privacyConsent);
          if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: null });
        }}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, privacyConsent && styles.checkboxChecked, errors.privacyConsent && styles.checkboxError]}>
          {privacyConsent && <Ionicons name="checkmark" size={13} color="#FFFFFF" />}
        </View>
        <Text style={styles.consentText}>
          {t('privacy.consentText')}{' '}
          <Text style={styles.consentLink} onPress={() => openLegalPage('privacy', i18n.language)}>
            {t('privacy.consentLink')}
          </Text>
          {' '}{t('privacy.consentSuffix')}
        </Text>
      </TouchableOpacity>
      {errors.privacyConsent && (
        <Text style={styles.errorText}>{errors.privacyConsent}</Text>
      )}

      {/* Register error message */}
      {registerError ? (
        <View style={styles.loginErrorBox}>
          <Ionicons name="alert-circle" size={16} color={colors.error} style={{ marginRight: 6 }} />
          <Text style={styles.loginErrorText}>{registerError}</Text>
        </View>
      ) : null}

      <SubmitButton onPress={submit} loading={loading}>
        <Ionicons name="person-add-outline" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
        <Text style={styles.submitButtonText}>{t('auth.register')}</Text>
      </SubmitButton>
    </View>
  );
}
