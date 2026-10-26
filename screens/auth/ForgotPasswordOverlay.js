import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import api from '../../services/apiClient';
import { useTheme } from '../../context/ThemeContext';
import { getErrorMessage } from '../../components/ui';
import { useAuthStyles } from './authStyles';
import { EMAIL_PATTERN } from './authUtils';
import AuthField from './AuthField';
import SubmitButton from './SubmitButton';

/**
 * Password reset in four steps: email → 6-digit code → new password → done.
 * Mount it to start the flow; all of its state is dropped when it unmounts.
 * @param {string} initialEmail  prefilled from the login form
 * @param {() => void} onClose   back arrow
 * @param {() => void} onFinished  "Back to login" after a successful reset
 */
export default function ForgotPasswordOverlay({ initialEmail, onClose, onFinished }) {
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  const styles = useAuthStyles();

  const [step, setStep] = useState('email'); // 'email' | 'code' | 'newPassword' | 'success'
  const [resetEmail, setResetEmail] = useState(initialEmail || '');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendCode = async () => {
    if (!resetEmail.trim() || !EMAIL_PATTERN.test(resetEmail.trim())) {
      setError(t('auth.validation.emailInvalid'));
      return;
    }
    setLoading(true);
    setError('');
    try {
      // The server answers the same way whether or not the email is registered
      await api.post('/api/auth/forgot-password', { email: resetEmail.trim(), language: i18n.language });
      setSuccess(t('forgotPassword.codeSentSuccess'));
      setError('');
      setStep('code');
    } catch (err) {
      setSuccess('');
      setError(getErrorMessage(err, t('auth.validation.somethingWrong'), t));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = () => {
    if (!resetCode || resetCode.length !== 6) {
      setError(t('forgotPassword.invalidCode'));
      return;
    }
    setError('');
    setStep('newPassword');
  };

  const handleResetPassword = async () => {
    if (!newPassword || newPassword.length < 8) {
      setError(t('auth.validation.passwordMinLength'));
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError(t('forgotPassword.passwordMismatch'));
      return;
    }
    setLoading(true);
    setError('');
    try {
      await api.post('/api/auth/reset-password', {
        email: resetEmail.trim(),
        code: resetCode,
        newPassword,
      });
      setStep('success');
    } catch (err) {
      const code = err?.data?.code || err?.code;
      if (code === 'INVALID_CODE') {
        // Invalid, expired or used up: send the user back to re-enter / request a code
        setSuccess('');
        setResetCode('');
        setStep('code');
        setError(t('forgotPassword.invalidCode'));
      } else {
        setError(getErrorMessage(err, t('auth.validation.somethingWrong'), t));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.forgotOverlay}>
      <View style={styles.forgotCard}>
        {/* Header */}
        <View style={styles.forgotHeader}>
          <TouchableOpacity onPress={onClose} style={styles.forgotBackButton} accessibilityRole="button" accessibilityLabel={t('a11y.back')}>
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.forgotTitle}>{t('forgotPassword.title')}</Text>
          <View style={{ width: 34 }} />
        </View>

        {error ? (
          <View style={styles.forgotErrorContainer}>
            <Ionicons name="alert-circle" size={16} color={colors.error} style={{ marginRight: 6 }} />
            <Text style={styles.forgotErrorText}>{error}</Text>
          </View>
        ) : null}

        {success ? (
          <View style={styles.forgotSuccessMessageContainer}>
            <Ionicons name="checkmark-circle" size={16} color={colors.success} style={{ marginRight: 6 }} />
            <Text style={styles.forgotSuccessMessageText}>{success}</Text>
          </View>
        ) : null}

        {/* Step 1: Email */}
        {step === 'email' && (
          <View>
            <Text style={styles.forgotStepText}>{t('forgotPassword.emailInstruction')}</Text>
            <AuthField
              icon="mail-outline"
              placeholder={t('forgotPassword.emailPlaceholder')}
              value={resetEmail}
              onChangeText={(text) => { setResetEmail(text); setError(''); }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoFocus
            />
            <SubmitButton onPress={handleSendCode} loading={loading}>
              <Text style={styles.submitButtonText}>{t('forgotPassword.sendCode')}</Text>
            </SubmitButton>
          </View>
        )}

        {/* Step 2: Code */}
        {step === 'code' && (
          <View>
            <Text style={styles.forgotStepText}>{t('forgotPassword.codeSent')}</Text>
            <AuthField
              icon="keypad-outline"
              inputStyle={{ letterSpacing: 4, fontSize: 20, textAlign: 'center' }}
              placeholder={t('forgotPassword.codePlaceholder')}
              value={resetCode}
              onChangeText={(text) => { setResetCode(text.replace(/[^0-9]/g, '').slice(0, 6)); setError(''); }}
              keyboardType="number-pad"
              maxLength={6}
              autoFocus
            />
            <SubmitButton onPress={handleVerifyCode}>
              <Text style={styles.submitButtonText}>{t('forgotPassword.verifyCode')}</Text>
            </SubmitButton>
          </View>
        )}

        {/* Step 3: New Password */}
        {step === 'newPassword' && (
          <View>
            <AuthField
              label={t('forgotPassword.newPassword')}
              icon="lock-closed-outline"
              placeholder={t('auth.minChars')}
              value={newPassword}
              onChangeText={(text) => { setNewPassword(text); setError(''); }}
              secureTextEntry
              autoFocus
            />
            <AuthField
              label={t('forgotPassword.confirmPassword')}
              icon="shield-checkmark-outline"
              placeholder={t('forgotPassword.confirmPassword')}
              value={confirmNewPassword}
              onChangeText={(text) => { setConfirmNewPassword(text); setError(''); }}
              secureTextEntry
            />
            <SubmitButton onPress={handleResetPassword} loading={loading}>
              <Text style={styles.submitButtonText}>{t('forgotPassword.resetButton')}</Text>
            </SubmitButton>
          </View>
        )}

        {/* Success */}
        {step === 'success' && (
          <View style={styles.forgotSuccessContainer}>
            <View style={styles.forgotSuccessIcon}>
              <Ionicons name="checkmark-circle" size={44} color={colors.success} />
            </View>
            <Text style={styles.forgotSuccessText}>{t('forgotPassword.success')}</Text>
            <SubmitButton onPress={onFinished}>
              <Text style={styles.submitButtonText}>{t('forgotPassword.backToLogin')}</Text>
            </SubmitButton>
          </View>
        )}
      </View>
    </View>
  );
}
