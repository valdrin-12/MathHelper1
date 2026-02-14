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
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function AuthScreen() {
  const { login, register } = useUser();
  const { t } = useTranslation();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fushat e formularit
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Gabimet e validimit
  const [errors, setErrors] = useState({});

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
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
      const result = await register(name.trim(), email.trim(), password);
      if (!result.success) {
        Alert.alert(t('common.error'), result.error || t('auth.registerFailed'));
      }
    } finally {
      setLoading(false);
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
      console.log('[AuthScreen] Duke fshirë të gjitha të dhënat...');
      await AsyncStorage.clear();
      console.log('[AuthScreen] Të gjitha të dhënat u fshinë!');

      const successMessage = t('auth.clearAllSuccess');
      if (Platform.OS === 'web') {
        alert(successMessage);
        window.location.reload();
      } else {
        Alert.alert(t('common.success'), successMessage, [
          { text: 'OK', onPress: () => {
            // Force reload the app state
            clearForm();
          }}
        ]);
      }
    } catch (error) {
      console.error('[AuthScreen] Gabim gjatë fshirjes:', error);
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
        {/* Logo dhe Titulli */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoEmoji}>📐</Text>
          </View>
          <Text style={styles.appName}>MathHelper</Text>
          <Text style={styles.appTagline}>{t('auth.tagline')}</Text>
        </View>

        {/* Language Switcher */}
        <View style={styles.languageSwitcherContainer}>
          <LanguageSwitcher />
        </View>

        {/* Karta e Formularit */}
        <View style={styles.formCard}>
          {/* Tabela e ndërrimit Login/Register */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, isLogin && styles.activeTab]}
              onPress={() => { if (!isLogin) toggleMode(); }}
            >
              <Text style={[styles.tabText, isLogin && styles.activeTabText]}>{t('auth.login')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, !isLogin && styles.activeTab]}
              onPress={() => { if (isLogin) toggleMode(); }}
            >
              <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>{t('auth.register')}</Text>
            </TouchableOpacity>
          </View>

          {/* Formulari i Kyçjes */}
          {isLogin ? (
            <View style={styles.form}>
              <Text style={styles.formTitle}>{t('auth.welcomeBack')}</Text>
              <Text style={styles.formSubtitle}>{t('auth.loginSubtitle')}</Text>

              {/* Email */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.email')}</Text>
                <View style={[styles.inputWrapper, errors.email && styles.inputWrapperError]}>
                  <Text style={styles.inputIcon}>✉️</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.emailPlaceholder')}
                    placeholderTextColor="#B0B5C8"
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>

              {/* Fjalëkalimi */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.password')}</Text>
                <View style={[styles.inputWrapper, errors.password && styles.inputWrapperError]}>
                  <Text style={styles.inputIcon}>🔒</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.passwordPlaceholder')}
                    placeholderTextColor="#B0B5C8"
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      if (errors.password) setErrors({ ...errors, password: null });
                    }}
                    secureTextEntry
                  />
                </View>
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              {/* Butoni i Kyçjes */}
              <TouchableOpacity
                style={[styles.submitButton, loading && styles.submitButtonDisabled]}
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" size="small" />
                ) : (
                  <Text style={styles.submitButtonText}>{t('auth.login')}</Text>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.form}>
              <Text style={styles.formTitle}>{t('auth.createAccount')}</Text>
              <Text style={styles.formSubtitle}>{t('auth.registerSubtitle')}</Text>

              {/* Emri */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.name')}</Text>
                <View style={[styles.inputWrapper, errors.name && styles.inputWrapperError]}>
                  <Text style={styles.inputIcon}>👤</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.namePlaceholder')}
                    placeholderTextColor="#B0B5C8"
                    value={name}
                    onChangeText={(text) => {
                      setName(text);
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    autoCapitalize="words"
                  />
                </View>
                {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
              </View>

              {/* Email */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.email')}</Text>
                <View style={[styles.inputWrapper, errors.email && styles.inputWrapperError]}>
                  <Text style={styles.inputIcon}>✉️</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.emailPlaceholder')}
                    placeholderTextColor="#B0B5C8"
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>

              {/* Fjalëkalimi */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.password')}</Text>
                <View style={[styles.inputWrapper, errors.password && styles.inputWrapperError]}>
                  <Text style={styles.inputIcon}>🔒</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.minChars')}
                    placeholderTextColor="#B0B5C8"
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      if (errors.password) setErrors({ ...errors, password: null });
                    }}
                    secureTextEntry
                  />
                </View>
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              {/* Konfirmo Fjalëkalimin */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('auth.confirmPassword')}</Text>
                <View style={[styles.inputWrapper, errors.confirmPassword && styles.inputWrapperError]}>
                  <Text style={styles.inputIcon}>🔑</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={t('auth.confirmPasswordPlaceholder')}
                    placeholderTextColor="#B0B5C8"
                    value={confirmPassword}
                    onChangeText={(text) => {
                      setConfirmPassword(text);
                      if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                    }}
                    secureTextEntry
                  />
                </View>
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
              </View>

              {/* Butoni i Regjistrimit */}
              <TouchableOpacity
                style={[styles.submitButton, loading && styles.submitButtonDisabled]}
                onPress={handleRegister}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" size="small" />
                ) : (
                  <Text style={styles.submitButtonText}>{t('auth.register')}</Text>
                )}
              </TouchableOpacity>
            </View>
          )}

          {/* Ndarro */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{t('common.or')}</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Kalimi ndërmjet kyçjes dhe regjistrimit */}
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
        <Text style={styles.footerText}>
          {t('auth.footer')}
        </Text>

        {/* Clear Data Button (Development/Testing) */}
        <TouchableOpacity
          style={styles.clearDataButton}
          onPress={handleClearAllData}
        >
          <Text style={styles.clearDataText}>{`🗑️ ${t('auth.clearAllData')}`}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 60,
    paddingBottom: 30,
  },

  // Language Switcher
  languageSwitcherContainer: {
    marginBottom: 24,
  },

  // Logo dhe Titulli
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    width: 88,
    height: 88,
    borderRadius: 28,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  logoEmoji: {
    fontSize: 44,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A2E',
    marginBottom: 6,
  },
  appTagline: {
    fontSize: 15,
    color: '#8A8FA8',
    fontWeight: '400',
  },

  // Karta e Formularit
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },

  // Tabela
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F1F8',
    borderRadius: 14,
    padding: 4,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 11,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#8A8FA8',
  },
  activeTabText: {
    color: '#6C63FF',
  },

  // Formulari
  form: {
    marginBottom: 8,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A2E',
    marginBottom: 6,
  },
  formSubtitle: {
    fontSize: 14,
    color: '#8A8FA8',
    marginBottom: 24,
  },

  // Fushat e hyrjes
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3D3D5C',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FF',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E8EBFF',
    paddingHorizontal: 14,
    paddingVertical: 2,
  },
  inputWrapperError: {
    borderColor: '#FF6B6B',
    backgroundColor: '#FFF5F5',
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#1A1A2E',
    paddingVertical: 14,
  },
  errorText: {
    fontSize: 12,
    color: '#FF6B6B',
    marginTop: 5,
    marginLeft: 4,
  },

  // Butoni i Dorëzimit
  submitButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // Ndarro
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8EBFF',
  },
  dividerText: {
    fontSize: 13,
    color: '#B0B5C8',
    marginHorizontal: 12,
  },

  // Ndërrimi i modalitetit
  switchModeButton: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  switchModeText: {
    fontSize: 14,
    color: '#8A8FA8',
  },
  switchModeLink: {
    color: '#6C63FF',
    fontWeight: '700',
  },

  // Footer
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#B0B5C8',
    marginTop: 24,
  },

  // Clear Data Button
  clearDataButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  clearDataText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
