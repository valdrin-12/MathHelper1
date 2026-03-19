import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import api from '../services/apiClient';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme/constants';
import WebContainer from '../components/WebContainer';


export default function AuthScreen() {
  const { login, register } = useUser();
  const { t, i18n } = useTranslation();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  // Forgot password state
  const [forgotMode, setForgotMode] = useState(false); // false | 'email' | 'code' | 'newPassword' | 'success'
  const [resetEmail, setResetEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');

  const [errors, setErrors] = useState({});

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPrivacyConsent(false);
    setErrors({});
    setShowPassword(false);
    setShowConfirmPassword(false);
    setRegisterError('');
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    clearForm();
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = t('auth.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = t('auth.validation.emailInvalid');
    }
    if (!password) {
      newErrors.password = t('auth.validation.passwordRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = t('auth.validation.nameMinLength');
    }
    if (!email.trim()) {
      newErrors.email = t('auth.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = t('auth.validation.emailInvalid');
    }
    if (!password) {
      newErrors.password = t('auth.validation.passwordRequired');
    } else if (password.length < 6) {
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

  const handleLogin = async () => {
    if (!validateLogin()) return;
    setLoginError('');
    setLoading(true);
    try {
      const result = await login(email.trim(), password);
      if (!result.success) {
        const msg = result.error === 'USER_NOT_FOUND'
          ? t('auth.userNotFound')
          : t('auth.loginFailed');
        setLoginError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!validateRegister()) return;
    setLoading(true);
    try {
      const result = await register(name.trim(), email.trim(), password, i18n.language);
      if (!result.success) {
        if (result.error && (result.error.toLowerCase().includes('already') || result.error === 'EMAIL_EXISTS')) {
          setRegisterError(t('auth.emailAlreadyExists'));
        } else {
          setRegisterError(result.error || t('auth.registerFailed'));
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const openForgotPassword = () => {
    setForgotMode('email');
    setResetEmail(email || '');
    setResetCode('');
    setNewPassword('');
    setConfirmNewPassword('');
    setForgotError('');
  };

  const closeForgotPassword = () => {
    setForgotMode(false);
    setForgotError('');
  };

  const handleSendCode = async () => {
    if (!resetEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail.trim())) {
      setForgotError(t('auth.validation.emailInvalid'));
      return;
    }
    setForgotLoading(true);
    setForgotError('');
    try {
      await api.post('/api/auth/forgot-password', { email: resetEmail.trim(), language: i18n.language });
      setForgotSuccess(t('forgotPassword.codeSentSuccess'));
      setForgotError('');
      setForgotMode('code');
    } catch (err) {
      setForgotSuccess('');
      // Check if error is about email not found
      if (err.status === 404 || (err.data?.error && err.data.error.includes('not found'))) {
        setForgotError(t('forgotPassword.noAccountFound'));
      } else {
        setForgotError(err.message || t('common.error'));
      }
    } finally {
      setForgotLoading(false);
    }
  };

  const handleVerifyCode = () => {
    if (!resetCode || resetCode.length !== 6) {
      setForgotError(t('forgotPassword.invalidCode'));
      return;
    }
    setForgotError('');
    setForgotMode('newPassword');
  };

  const handleResetPassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setForgotError(t('auth.validation.passwordMinLength'));
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setForgotError(t('forgotPassword.passwordMismatch'));
      return;
    }
    setForgotLoading(true);
    setForgotError('');
    try {
      await api.post('/api/auth/reset-password', {
        email: resetEmail.trim(),
        code: resetCode,
        newPassword,
      });
      setForgotMode('success');
    } catch (err) {
      const msg = err.data?.error || err.message;
      if (msg.includes('expired')) {
        setForgotError(t('forgotPassword.codeExpired'));
      } else if (msg.includes('Invalid')) {
        setForgotError(t('forgotPassword.invalidCode'));
      } else {
        setForgotError(msg || t('common.error'));
      }
    } finally {
      setForgotLoading(false);
    }
  };

  const handleClearAllData = async () => {
    const confirmMessage = t('auth.clearAllConfirm');
    const confirmed = Platform.OS === 'web'
      ? window.confirm(confirmMessage)
      : await new Promise(resolve => {
          Alert.alert(
            t('auth.clearAllTitle'),
            confirmMessage,
            [
              { text: t('common.cancel'), style: 'cancel', onPress: () => resolve(false) },
              { text: t('common.delete'), style: 'destructive', onPress: () => resolve(true) }
            ]
          );
        });

    if (!confirmed) return;

    try {
      await AsyncStorage.clear();
      const successMessage = t('auth.clearAllSuccess');
      if (Platform.OS === 'web') {
        alert(successMessage);
        window.location.reload();
      } else {
        Alert.alert(t('common.success'), successMessage, [
          { text: t('common.ok'), onPress: () => clearForm() }
        ]);
      }
    } catch (error) {
      console.error('[AuthScreen] Error clearing data:', error);
      Alert.alert(t('common.error'), t('auth.clearAllError'));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Brand Area — clean, no gradient background */}
        <View style={styles.brandArea}>
          <View style={styles.languageSwitcherTop}>
            <LanguageSwitcher variant="light" />
          </View>
          <LinearGradient
            colors={[COLORS.primary, COLORS.primarySoft]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.appIconSquircle}
          >
            <Ionicons name="calculator" size={38} color="#FFFFFF" />
          </LinearGradient>
          <Text style={styles.appName}>MathHelper</Text>
          <Text style={styles.appTagline}>{t('auth.tagline')}</Text>
        </View>

        {/* Form Card */}
        <WebContainer maxWidth={480}>
        <View style={styles.formCard}>
          {/* Tab Switcher */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, isLogin && styles.activeTab]}
              onPress={() => { if (!isLogin) toggleMode(); }}
            >
              <Ionicons
                name="log-in-outline"
                size={16}
                color={isLogin ? COLORS.primary : COLORS.textMuted}
                style={{ marginRight: 6 }}
              />
              <Text style={[styles.tabText, isLogin && styles.activeTabText]}>{t('auth.login')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, !isLogin && styles.activeTab]}
              onPress={() => { if (isLogin) toggleMode(); }}
            >
              <Ionicons
                name="person-add-outline"
                size={16}
                color={!isLogin ? COLORS.primary : COLORS.textMuted}
                style={{ marginRight: 6 }}
              />
              <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>{t('auth.register')}</Text>
            </TouchableOpacity>
          </View>

          {/* Login Form */}
          {isLogin ? (
            <View style={styles.form}>
              <Text style={styles.formTitle}>{t('auth.welcomeBack')}</Text>
              <Text style={styles.formSubtitle}>{t('auth.loginSubtitle')}</Text>

              {/* Email */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.email')}</Text>
                <View style={[styles.inputWrapper, errors.email && styles.inputWrapperError]}>
                  <Ionicons name="mail-outline" size={18} color={errors.email ? COLORS.error : COLORS.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.emailPlaceholder')}
                    placeholderTextColor={COLORS.textPlaceholder}
                    value={email}
                    onChangeText={(text) => { setEmail(text); if (errors.email) setErrors({ ...errors, email: null }); }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>

              {/* Password */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.password')}</Text>
                <View style={[styles.inputWrapper, errors.password && styles.inputWrapperError]}>
                  <Ionicons name="lock-closed-outline" size={18} color={errors.password ? COLORS.error : COLORS.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.passwordPlaceholder')}
                    placeholderTextColor={COLORS.textPlaceholder}
                    value={password}
                    onChangeText={(text) => { setPassword(text); if (errors.password) setErrors({ ...errors, password: null }); }}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={18} color={COLORS.textMuted} />
                  </TouchableOpacity>
                </View>
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              {/* Login error message */}
              {loginError ? (
                <View style={styles.loginErrorBox}>
                  <Ionicons name="alert-circle" size={16} color="#DC2626" style={{ marginRight: 6 }} />
                  <Text style={styles.loginErrorText}>{loginError}</Text>
                </View>
              ) : null}

              {/* Submit */}
              <TouchableOpacity
                style={[styles.submitButton, loading && styles.submitButtonDisabled]}
                onPress={handleLogin}
                disabled={loading}
              >
                <LinearGradient
                  colors={[COLORS.primary, COLORS.primarySoft]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.submitGradient}
                >
                  {loading ? (
                    <ActivityIndicator color="#FFFFFF" size="small" />
                  ) : (
                    <>
                      <Ionicons name="log-in-outline" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
                      <Text style={styles.submitButtonText}>{t('auth.login')}</Text>
                    </>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              {/* Forgot Password Link */}
              <TouchableOpacity onPress={openForgotPassword} style={styles.forgotPasswordLink}>
                <Text style={styles.forgotPasswordText}>{t('forgotPassword.link')}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.form}>
              <Text style={styles.formTitle}>{t('auth.createAccount')}</Text>
              <Text style={styles.formSubtitle}>{t('auth.registerSubtitle')}</Text>

              {/* Name */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.name')}</Text>
                <View style={[styles.inputWrapper, errors.name && styles.inputWrapperError]}>
                  <Ionicons name="person-outline" size={18} color={errors.name ? COLORS.error : COLORS.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.namePlaceholder')}
                    placeholderTextColor={COLORS.textPlaceholder}
                    value={name}
                    onChangeText={(text) => { setName(text); if (errors.name) setErrors({ ...errors, name: null }); }}
                    autoCapitalize="words"
                  />
                </View>
                {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
              </View>

              {/* Email */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.email')}</Text>
                <View style={[styles.inputWrapper, errors.email && styles.inputWrapperError]}>
                  <Ionicons name="mail-outline" size={18} color={errors.email ? COLORS.error : COLORS.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.emailPlaceholder')}
                    placeholderTextColor={COLORS.textPlaceholder}
                    value={email}
                    onChangeText={(text) => { setEmail(text); if (errors.email) setErrors({ ...errors, email: null }); }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>

              {/* Password */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.password')}</Text>
                <View style={[styles.inputWrapper, errors.password && styles.inputWrapperError]}>
                  <Ionicons name="lock-closed-outline" size={18} color={errors.password ? COLORS.error : COLORS.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.minChars')}
                    placeholderTextColor={COLORS.textPlaceholder}
                    value={password}
                    onChangeText={(text) => { setPassword(text); if (errors.password) setErrors({ ...errors, password: null }); }}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={18} color={COLORS.textMuted} />
                  </TouchableOpacity>
                </View>
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              {/* Confirm Password */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.confirmPassword')}</Text>
                <View style={[styles.inputWrapper, errors.confirmPassword && styles.inputWrapperError]}>
                  <Ionicons name="shield-checkmark-outline" size={18} color={errors.confirmPassword ? COLORS.error : COLORS.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.confirmPasswordPlaceholder')}
                    placeholderTextColor={COLORS.textPlaceholder}
                    value={confirmPassword}
                    onChangeText={(text) => { setConfirmPassword(text); if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null }); }}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeButton}>
                    <Ionicons name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} size={18} color={COLORS.textMuted} />
                  </TouchableOpacity>
                </View>
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
              </View>

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
                  <Text
                    style={styles.consentLink}
                    onPress={() => {
                      const SUPPORTED = ['al', 'en', 'de'];
                      const lang = SUPPORTED.includes(i18n.language) ? i18n.language : 'al';
                      Linking.openURL(`https://mathhelper.online/privacy?lang=${lang}`);
                    }}
                  >
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
                  <Ionicons name="alert-circle" size={16} color="#DC2626" style={{ marginRight: 6 }} />
                  <Text style={styles.loginErrorText}>{registerError}</Text>
                </View>
              ) : null}

              {/* Submit */}
              <TouchableOpacity
                style={[styles.submitButton, loading && styles.submitButtonDisabled]}
                onPress={handleRegister}
                disabled={loading}
              >
                <LinearGradient
                  colors={[COLORS.primary, COLORS.primarySoft]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.submitGradient}
                >
                  {loading ? (
                    <ActivityIndicator color="#FFFFFF" size="small" />
                  ) : (
                    <>
                      <Ionicons name="person-add-outline" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
                      <Text style={styles.submitButtonText}>{t('auth.register')}</Text>
                    </>
                  )}
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{t('common.or')}</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Switch mode */}
          <TouchableOpacity onPress={toggleMode} style={styles.switchModeButton}>
            <Text style={styles.switchModeText}>
              {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
              <Text style={styles.switchModeLink}>
                {isLogin ? t('auth.register') : t('auth.login')}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Ionicons name="globe-outline" size={14} color={COLORS.textMuted} style={{ marginRight: 6 }} />
          <Text style={styles.footerText}>{t('auth.footer')}</Text>
        </View>

        </WebContainer>

        {/* Forgot Password Overlay */}
        {forgotMode && (
          <View style={styles.forgotOverlay}>
            <View style={styles.forgotCard}>
              {/* Header */}
              <View style={styles.forgotHeader}>
                <TouchableOpacity onPress={closeForgotPassword} style={styles.forgotBackButton}>
                  <Ionicons name="arrow-back" size={22} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.forgotTitle}>{t('forgotPassword.title')}</Text>
                <View style={{ width: 34 }} />
              </View>

              {forgotError ? (
                <View style={styles.forgotErrorContainer}>
                  <Ionicons name="alert-circle" size={16} color={COLORS.error} style={{ marginRight: 6 }} />
                  <Text style={styles.forgotErrorText}>{forgotError}</Text>
                </View>
              ) : null}

              {forgotSuccess ? (
                <View style={styles.forgotSuccessMessageContainer}>
                  <Ionicons name="checkmark-circle" size={16} color={COLORS.success} style={{ marginRight: 6 }} />
                  <Text style={styles.forgotSuccessMessageText}>{forgotSuccess}</Text>
                </View>
              ) : null}

              {/* Step 1: Email */}
              {forgotMode === 'email' && (
                <View>
                  <Text style={styles.forgotStepText}>{t('forgotPassword.emailInstruction')}</Text>
                  <View style={styles.inputGroup}>
                    <View style={styles.inputWrapper}>
                      <Ionicons name="mail-outline" size={18} color={COLORS.textMuted} style={styles.inputIcon} />
                      <TextInput
                        style={styles.textInput}
                        placeholder={t('forgotPassword.emailPlaceholder')}
                        placeholderTextColor={COLORS.textPlaceholder}
                        value={resetEmail}
                        onChangeText={(text) => { setResetEmail(text); setForgotError(''); }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoFocus
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[styles.submitButton, forgotLoading && styles.submitButtonDisabled]}
                    onPress={handleSendCode}
                    disabled={forgotLoading}
                  >
                    <LinearGradient
                      colors={[COLORS.primary, COLORS.primarySoft]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.submitGradient}
                    >
                      {forgotLoading ? (
                        <ActivityIndicator color="#FFFFFF" size="small" />
                      ) : (
                        <Text style={styles.submitButtonText}>{t('forgotPassword.sendCode')}</Text>
                      )}
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}

              {/* Step 2: Code */}
              {forgotMode === 'code' && (
                <View>
                  <Text style={styles.forgotStepText}>{t('forgotPassword.codeSent')}</Text>
                  <View style={styles.inputGroup}>
                    <View style={styles.inputWrapper}>
                      <Ionicons name="keypad-outline" size={18} color={COLORS.textMuted} style={styles.inputIcon} />
                      <TextInput
                        style={[styles.textInput, { letterSpacing: 4, fontSize: 20, textAlign: 'center' }]}
                        placeholder={t('forgotPassword.codePlaceholder')}
                        placeholderTextColor={COLORS.textPlaceholder}
                        value={resetCode}
                        onChangeText={(text) => { setResetCode(text.replace(/[^0-9]/g, '').slice(0, 6)); setForgotError(''); }}
                        keyboardType="number-pad"
                        maxLength={6}
                        autoFocus
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleVerifyCode}
                  >
                    <LinearGradient
                      colors={[COLORS.primary, COLORS.primarySoft]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.submitGradient}
                    >
                      <Text style={styles.submitButtonText}>{t('forgotPassword.verifyCode')}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}

              {/* Step 3: New Password */}
              {forgotMode === 'newPassword' && (
                <View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>{t('forgotPassword.newPassword')}</Text>
                    <View style={styles.inputWrapper}>
                      <Ionicons name="lock-closed-outline" size={18} color={COLORS.textMuted} style={styles.inputIcon} />
                      <TextInput
                        style={styles.textInput}
                        placeholder={t('auth.minChars')}
                        placeholderTextColor={COLORS.textPlaceholder}
                        value={newPassword}
                        onChangeText={(text) => { setNewPassword(text); setForgotError(''); }}
                        secureTextEntry
                        autoFocus
                      />
                    </View>
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>{t('forgotPassword.confirmPassword')}</Text>
                    <View style={styles.inputWrapper}>
                      <Ionicons name="shield-checkmark-outline" size={18} color={COLORS.textMuted} style={styles.inputIcon} />
                      <TextInput
                        style={styles.textInput}
                        placeholder={t('forgotPassword.confirmPassword')}
                        placeholderTextColor={COLORS.textPlaceholder}
                        value={confirmNewPassword}
                        onChangeText={(text) => { setConfirmNewPassword(text); setForgotError(''); }}
                        secureTextEntry
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[styles.submitButton, forgotLoading && styles.submitButtonDisabled]}
                    onPress={handleResetPassword}
                    disabled={forgotLoading}
                  >
                    <LinearGradient
                      colors={[COLORS.primary, COLORS.primarySoft]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.submitGradient}
                    >
                      {forgotLoading ? (
                        <ActivityIndicator color="#FFFFFF" size="small" />
                      ) : (
                        <Text style={styles.submitButtonText}>{t('forgotPassword.resetButton')}</Text>
                      )}
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}

              {/* Success */}
              {forgotMode === 'success' && (
                <View style={styles.forgotSuccessContainer}>
                  <View style={styles.forgotSuccessIcon}>
                    <Ionicons name="checkmark-circle" size={44} color={COLORS.success} />
                  </View>
                  <Text style={styles.forgotSuccessText}>{t('forgotPassword.success')}</Text>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => { closeForgotPassword(); clearForm(); }}
                  >
                    <LinearGradient
                      colors={[COLORS.primary, COLORS.primarySoft]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.submitGradient}
                    >
                      <Text style={styles.submitButtonText}>{t('forgotPassword.backToLogin')}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  // ─── Root ───────────────────────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 48,
  },

  // ─── Brand Area ─────────────────────────────────────────────────────────────
  // Apple sign-in pattern: clean background, centered app icon + name
  brandArea: {
    paddingTop: Platform.OS === 'ios' ? 64 : 52,
    paddingBottom: 36,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  languageSwitcherTop: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 58 : 46,
    right: 20,
  },
  languageSwitcherContainer: { display: 'none' }, // legacy compat
  // App icon squircle — single clean container (no double-nesting)
  appIconSquircle: {
    width: 80,
    height: 80,
    borderRadius: 20,          // Apple continuous curve squircle
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    ...SHADOWS.primary,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: -0.38,
    marginBottom: 6,
  },
  appTagline: {
    fontSize: 15,
    color: COLORS.textMuted,
    fontWeight: '400',
    letterSpacing: -0.24,
  },

  // ─── Form Card ──────────────────────────────────────────────────────────────
  formCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    paddingTop: 24,
    ...SHADOWS.medium,
  },

  // ─── Segmented Control ──────────────────────────────────────────────────────
  // Matches iOS UISegmentedControl exactly: grey pill, white selected chip
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.inputBg,
    borderRadius: 9,
    padding: 2,
    marginBottom: 28,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    gap: 5,
  },
  activeTab: {
    backgroundColor: COLORS.surface,
    ...SHADOWS.small,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMuted,
    letterSpacing: -0.08,
  },
  activeTabText: {
    color: COLORS.text,
    fontWeight: '600',
  },

  // ─── Form Content ────────────────────────────────────────────────────────────
  form: { marginBottom: 8 },
  formTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
    letterSpacing: -0.26,
  },
  formSubtitle: {
    fontSize: 15,
    color: COLORS.textMuted,
    marginBottom: 24,
    fontWeight: '400',
    letterSpacing: -0.24,
  },

  // ─── Input Fields ────────────────────────────────────────────────────────────
  // iOS inset-grouped style: subtle background, clean 1px border
  inputGroup: { marginBottom: 14 },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMuted,
    marginBottom: 7,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    paddingHorizontal: 14,
  },
  inputWrapperError: {
    borderColor: COLORS.error,
    backgroundColor: COLORS.errorLight,
  },
  inputIcon: { marginRight: 10 },
  textInput: {
    flex: 1,
    fontSize: 17,
    color: COLORS.text,
    paddingVertical: 15,
    letterSpacing: -0.43,
  },
  eyeButton: { padding: 8 },
  errorText: {
    fontSize: 12,
    color: COLORS.error,
    marginTop: 6,
    marginLeft: 2,
    fontWeight: '500',
    letterSpacing: -0.08,
  },

  // ─── Privacy Consent ────────────────────────────────────────────────────────
  consentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4,
    marginBottom: 4,
    gap: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    flexShrink: 0,
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkboxError: {
    borderColor: COLORS.error,
    backgroundColor: COLORS.errorLight,
  },
  consentText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.textSubtle,
    lineHeight: 20,
    letterSpacing: -0.08,
  },
  consentLink: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  // ─── Error Banners ──────────────────────────────────────────────────────────
  loginErrorBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.errorLight,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    gap: 8,
  },
  loginErrorText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.error,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.08,
  },

  // ─── Primary Button ─────────────────────────────────────────────────────────
  // Apple-style: full-width, prominent, 17pt semibold, 50pt tall
  submitButton: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 8,
    ...SHADOWS.primary,
  },
  submitButtonDisabled: { opacity: 0.55 },
  submitGradient: {
    flexDirection: 'row',
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    gap: 8,
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.43,
  },

  // ─── Forgot Password ────────────────────────────────────────────────────────
  forgotPasswordLink: {
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 4,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: '500',
    letterSpacing: -0.24,
  },

  // ─── Divider ────────────────────────────────────────────────────────────────
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginHorizontal: 12,
    fontWeight: '400',
    letterSpacing: -0.08,
  },

  // ─── Mode Toggle ─────────────────────────────────────────────────────────────
  switchModeButton: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  switchModeText: {
    fontSize: 15,
    color: COLORS.textMuted,
    letterSpacing: -0.24,
  },
  switchModeLink: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  // ─── Footer ──────────────────────────────────────────────────────────────────
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  footerText: {
    fontSize: 13,
    color: COLORS.textMuted,
    fontWeight: '400',
    letterSpacing: -0.08,
  },

  // ─── Destructive Action ──────────────────────────────────────────────────────
  clearDataButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.error,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
    gap: 6,
    ...SHADOWS.small,
  },
  clearDataText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ─── Forgot Password Sheet ───────────────────────────────────────────────────
  // iOS bottom sheet pattern — slides up from the bottom
  forgotOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.40)',
    justifyContent: 'flex-end',
  },
  forgotCard: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 40,
    ...SHADOWS.large,
  },
  forgotHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotBackButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
    letterSpacing: -0.43,
  },
  forgotStepText: {
    fontSize: 15,
    color: COLORS.textSubtle,
    marginBottom: 20,
    lineHeight: 22,
    letterSpacing: -0.24,
  },
  forgotErrorContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.errorLight,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  forgotErrorText: {
    fontSize: 13,
    color: COLORS.error,
    fontWeight: '500',
    flex: 1,
    letterSpacing: -0.08,
  },
  forgotSuccessMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.successLight,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  forgotSuccessMessageText: {
    fontSize: 13,
    color: COLORS.success,
    fontWeight: '500',
    flex: 1,
    letterSpacing: -0.08,
  },
  forgotSuccessContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  forgotSuccessIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.successLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  forgotSuccessText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: -0.43,
  },
});
