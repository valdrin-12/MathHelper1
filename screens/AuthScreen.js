import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import WebContainer from '../components/WebContainer';
import { getErrorMessage, showAlert } from '../components/ui';
import { useAuthStyles } from './auth/authStyles';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import GoogleSection from './auth/GoogleSection';
import ForgotPasswordOverlay from './auth/ForgotPasswordOverlay';

// Sign-in screen: brand header, Log In / Sign Up tabs, the form, Google, and the password-reset overlay.
// Each form keeps its own fields, so switching tabs (or finishing a reset) starts it from a clean state.
export default function AuthScreen() {
  const { login, register, loginWithGoogle } = useUser();
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  const styles = useAuthStyles();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formKey, setFormKey] = useState(0); // changing it remounts the form = clears it
  const [forgot, setForgot] = useState(null); // { email } while the password reset is open

  const toggleMode = () => setIsLogin(!isLogin);

  // The handlers below return an error message to show under the form, or null on success.
  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const result = await login(email, password);
      // Unknown email and wrong password share one generic code (no account enumeration)
      return result.success ? null : getErrorMessage(result.code, t('auth.loginFailed'), t);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (name, email, password) => {
    setLoading(true);
    try {
      const result = await register(name, email, password, i18n.language);
      if (result.success) return null;
      const raw = typeof result.error === 'string' ? result.error : '';
      if (result.code === 'EMAIL_EXISTS' || raw === 'EMAIL_EXISTS' || raw.toLowerCase().includes('already')) {
        return t('auth.emailAlreadyExists');
      }
      return getErrorMessage(result.code, t('auth.registerFailed'), t);
    } finally {
      setLoading(false);
    }
  };

  // Sign in / sign up with Google: the server verifies the token and creates or links the account
  const handleGoogleToken = async (idToken) => {
    setLoading(true);
    try {
      const result = await loginWithGoogle(idToken, i18n.language);
      if (!result.success) return getErrorMessage(result.code, t('errors.GOOGLE_AUTH_FAILED'), t);
      if (result.linkedExisting) showAlert(t('auth.googleLinkedTitle'), t('auth.googleLinkedMessage'));
      return null;
    } finally {
      setLoading(false);
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
        {/* Brand Area — full blue gradient header */}
        <View style={styles.brandArea}>
          <View style={styles.appIconSquircle}>
            <Ionicons name="calculator" size={38} color="#FFFFFF" />
          </View>
          <Text style={styles.appName}>MathHelper</Text>
          <Text style={styles.appTagline}>{t('auth.tagline')}</Text>
          <View style={styles.languageSwitcherTop}>
            <LanguageSwitcher variant="light" />
          </View>
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
                color={isLogin ? colors.primary : colors.textMuted}
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
                color={!isLogin ? colors.primary : colors.textMuted}
                style={{ marginRight: 6 }}
              />
              <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>{t('auth.register')}</Text>
            </TouchableOpacity>
          </View>

          {isLogin ? (
            <LoginForm
              key={formKey}
              loading={loading}
              onSubmit={handleLogin}
              onForgotPassword={(email) => setForgot({ email })}
            />
          ) : (
            <RegisterForm key={formKey} loading={loading} onSubmit={handleRegister} />
          )}

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{t('common.or')}</Text>
            <View style={styles.dividerLine} />
          </View>

          <GoogleSection loading={loading} onToken={handleGoogleToken} />

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
          <Ionicons name="globe-outline" size={14} color={colors.textMuted} style={{ marginRight: 6 }} />
          <Text style={styles.footerText}>{t('auth.footer')}</Text>
        </View>

        </WebContainer>

        {/* Forgot Password Overlay */}
        {forgot && (
          <ForgotPasswordOverlay
            initialEmail={forgot.email}
            onClose={() => setForgot(null)}
            onFinished={() => { setForgot(null); setFormKey((k) => k + 1); }}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
