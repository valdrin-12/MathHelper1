import React, { useState, useEffect, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { Button } from './ui';

export default function EditProfileModal({ visible, onClose }) {
  const { t } = useTranslation();
  const { user, updateProfile } = useUser();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (user && visible) {
      setName(user.name || '');
      setEmail(user.email || '');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  }, [user, visible]);

  const handleSave = async () => {
    try {
      if (!name.trim() || name.trim().length < 2) {
        Alert.alert(t('common.error'), t('auth.validation.nameMinLength'));
        return;
      }

      if (!email.trim() || !email.includes('@')) {
        Alert.alert(t('common.error'), t('auth.validation.emailInvalidShort'));
        return;
      }

      if (newPassword || confirmPassword) {
        if (newPassword.length < 8) {
          Alert.alert(t('common.error'), t('editProfile.newPasswordMinLength'));
          return;
        }
        if (newPassword !== confirmPassword) {
          Alert.alert(t('common.error'), t('auth.validation.passwordsMismatch'));
          return;
        }
      }

      setLoading(true);

      const updates = { name: name.trim(), email: email.trim() };
      if (newPassword) updates.password = newPassword;

      const result = await updateProfile(updates);

      if (result.success) {
        setShowSuccess(true);
      } else {
        Alert.alert(t('common.error'), result.error || t('auth.validation.profileUpdateError'));
      }
    } catch (error) {
      console.error('Profile update error:', error);
      Alert.alert(t('common.error'), t('auth.validation.somethingWrong'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Sheet nav bar */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.navButton}>
              <Ionicons name="close" size={24} color={colors.primary} />
            </TouchableOpacity>
            <Text style={styles.headerTitle} numberOfLines={1}>{t('editProfile.title')}</Text>
            <View style={styles.navButton} />
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('editProfile.personalInfo')}</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>{t('editProfile.fullName')}</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder={t('editProfile.namePlaceholder')}
                  placeholderTextColor={colors.textMuted}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>{t('auth.email')}</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="email@example.com"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('editProfile.changePassword')}</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>{t('editProfile.newPassword')}</Text>
                <TextInput
                  style={styles.input}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder={t('editProfile.newPasswordPlaceholder')}
                  placeholderTextColor={colors.textMuted}
                  secureTextEntry
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>{t('editProfile.confirmPassword')}</Text>
                <TextInput
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder={t('editProfile.confirmPlaceholder')}
                  placeholderTextColor={colors.textMuted}
                  secureTextEntry
                />
              </View>

              <Text style={styles.hint}>
                💡 {t('editProfile.passwordHint')}
              </Text>
            </View>

            <View style={{ height: 100 }} />
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <Button title={`💾 ${t('editProfile.saveChanges')}`} onPress={handleSave} loading={loading} />
            <Button title={t('common.cancel')} variant="plain" onPress={onClose} disabled={loading} />
          </View>
        </View>
      </SafeAreaView>

      {/* Success popup (iOS alert style) */}
      <Modal
        visible={showSuccess}
        transparent
        animationType="fade"
        onRequestClose={() => { setShowSuccess(false); onClose(); }}
      >
        <View style={styles.successOverlay}>
          <View style={styles.successCard}>
            <View style={styles.successIconWrap}>
              <Ionicons name="checkmark-circle" size={48} color={colors.primary} />
            </View>
            <Text style={styles.successTitle}>{t('common.success')}</Text>
            <Text style={styles.successMessage}>{t('editProfile.profileUpdated')}</Text>
            <TouchableOpacity
              style={styles.successBtn}
              onPress={() => { setShowSuccess(false); onClose(); }}
            >
              <Text style={styles.successBtnText}>{t('common.ok')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Modal>
  );
}

const HAIRLINE = StyleSheet.hairlineWidth;

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },

  // Sheet nav bar
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    minHeight: 52,
    backgroundColor: colors.background,
    borderBottomWidth: HAIRLINE,
    borderBottomColor: colors.border,
  },
  navButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    ...TYPOGRAPHY.headline,
    color: colors.text,
    textAlign: 'center',
  },

  // Form
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
  section: {
    marginTop: SPACING.xxl,
  },
  sectionTitle: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textTransform: 'uppercase',
    marginLeft: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  inputGroup: {
    marginBottom: SPACING.md,
  },
  label: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    marginBottom: SPACING.xs + 2,
    marginLeft: SPACING.xs,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    minHeight: 48,
    ...TYPOGRAPHY.body,
    color: colors.text,
  },
  hint: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: SPACING.xs,
    marginHorizontal: SPACING.lg,
  },
  footer: {
    padding: SPACING.lg,
    paddingBottom: SPACING.sm,
    backgroundColor: colors.background,
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
    gap: SPACING.xs,
  },

  // ─── Success popup ───────────────────────────────────────────────────────────
  successOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxxl,
  },
  successCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    paddingTop: SPACING.xxl,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    overflow: 'hidden',
  },
  successIconWrap: {
    marginBottom: SPACING.md,
  },
  successTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    marginBottom: SPACING.xs,
    paddingHorizontal: SPACING.lg,
  },
  successMessage: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textAlign: 'center',
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  successBtn: {
    alignSelf: 'stretch',
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
  },
  successBtnText: {
    ...TYPOGRAPHY.headline,
    color: colors.primary,
  },
});
