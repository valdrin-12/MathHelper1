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
  Dimensions,
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

const { width } = Dimensions.get('window');

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

  // Forgot password state
  const [forgotMode, setForgotMode] = useState(false); // false | 'email' | 'code' | 'newPassword' | 'success'
  const [resetEmail, setResetEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');

  const [errors, setErrors] = useState({});

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
    setShowPassword(false);
    setShowConfirmPassword(false);
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateLogin()) return;
    setLoading(true);
    try {
      const result = await login(email.trim(), password);
      if (!result.success) {
        Alert.alert(t('common.error'), result.error || t('auth.loginFailed'));
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
        Alert.alert(t('common.error'), result.error || t('auth.registerFailed'));
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
      setForgotMode('code');
    } catch (err) {
      setForgotError(err.message || t('common.error'));
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
          { text: 'OK', onPress: () => clearForm() }
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
        {/* Gradient Header */}
        <LinearGradient
          colors={[COLORS.primary, COLORS.primarySoft, COLORS.primaryLight]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          {/* Decorative circles - hidden on web */}
          {Platform.OS !== 'web' && <View style={styles.decorCircle1} />}
          {Platform.OS !== 'web' && <View style={styles.decorCircle2} />}

          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoOuter}>
              <View style={styles.logoInner}>
                <Ionicons name="calculator" size={36} color="#FFFFFF" />
              </View>
            </View>
          </View>

          <Text style={styles.appName}>MathHelper</Text>
          <Text style={styles.appTagline}>{t('auth.tagline')}</Text>

          {/* Language Switcher */}
          <View style={styles.languageSwitcherContainer}>
            <LanguageSwitcher />
          </View>
        </LinearGradient>

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

        {/* Clear Data Button (Testing) */}
        <TouchableOpacity
          style={styles.clearDataButton}
          onPress={handleClearAllData}
        >
          <Ionicons name="trash-outline" size={14} color="#FFFFFF" style={{ marginRight: 6 }} />
          <Text style={styles.clearDataText}>{t('auth.clearAllData')}</Text>
        </TouchableOpacity>

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

              {/* Step 1: Email */}
              {forgotMode === 'email' && (
                <View>
                  <Text style={styles.forgotStepText}>{t('forgotPassword.codeSent').split('!')[0]}</Text>
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
                    <Ionicons name="checkmark-circle" size={56} color={COLORS.success} />
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
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  // Header Gradient
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 36,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
  decorCircle1: {
    position: 'absolute',
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    top: -width * 0.15,
    right: -width * 0.2,
  },
  decorCircle2: {
    position: 'absolute',
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    bottom: -width * 0.1,
    left: -width * 0.15,
  },
  logoContainer: {
    marginBottom: 16,
  },
  logoOuter: {
    width: 88,
    height: 88,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  logoInner: {
    width: 66,
    height: 66,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  appTagline: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    marginBottom: 20,
  },
  languageSwitcherContainer: {
    marginTop: 4,
  },

  // Form Card
  formCard: {
    marginHorizontal: 20,
    marginTop: -16,
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 24,
    ...SHADOWS.large,
  },

  // Tabs
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBg,
    borderRadius: 14,
    padding: 4,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
  },
  activeTab: {
    backgroundColor: COLORS.surface,
    ...SHADOWS.small,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textMuted,
  },
  activeTabText: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  // Form
  form: {
    marginBottom: 8,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  formSubtitle: {
    fontSize: 14,
    color: COLORS.textSubtle,
    marginBottom: 24,
    fontWeight: '500',
  },

  // Inputs
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textLabel,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBg,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
    paddingHorizontal: 14,
  },
  inputWrapperError: {
    borderColor: COLORS.error,
    backgroundColor: COLORS.errorLight,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
    paddingVertical: 14,
  },
  eyeButton: {
    padding: 6,
  },
  errorText: {
    fontSize: 12,
    color: COLORS.error,
    marginTop: 5,
    marginLeft: 4,
    fontWeight: '500',
  },

  // Submit Button
  submitButton: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 8,
    ...SHADOWS.primary,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitGradient: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

  // Divider
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.inputBorder,
  },
  dividerText: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginHorizontal: 12,
    fontWeight: '500',
  },

  // Switch mode
  switchModeButton: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  switchModeText: {
    fontSize: 14,
    color: COLORS.textSubtle,
  },
  switchModeLink: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  // Footer
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 13,
    color: COLORS.textMuted,
    fontWeight: '500',
  },

  // Clear Data Button
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
    ...SHADOWS.small,
  },
  clearDataText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // Forgot Password
  forgotPasswordLink: {
    alignItems: 'center',
    marginTop: 14,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  forgotOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  forgotCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    ...SHADOWS.large,
  },
  forgotHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotBackButton: {
    padding: 6,
  },
  forgotTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: -0.3,
  },
  forgotStepText: {
    fontSize: 14,
    color: COLORS.textSubtle,
    marginBottom: 16,
    lineHeight: 20,
  },
  forgotErrorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.errorLight,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  forgotErrorText: {
    fontSize: 13,
    color: COLORS.error,
    fontWeight: '500',
    flex: 1,
  },
  forgotSuccessContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  forgotSuccessIcon: {
    marginBottom: 16,
  },
  forgotSuccessText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.success,
    marginBottom: 24,
    textAlign: 'center',
  },
});
