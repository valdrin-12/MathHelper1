import React, { useState, useEffect } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../context/UserContext';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function EditProfileModal({ visible, onClose }) {
  const { t } = useTranslation();
  const { user, updateProfile } = useUser();
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
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.backButton}>
              <Ionicons name="close" size={22} color={COLORS.textSubtle} />
            </TouchableOpacity>
            <Text style={styles.headerTitle} numberOfLines={1}>{t('editProfile.title')}</Text>
            <View style={styles.placeholder} />
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
                  placeholderTextColor={COLORS.textMuted}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>{t('auth.email')}</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="email@example.com"
                  placeholderTextColor={COLORS.textMuted}
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
                  placeholderTextColor={COLORS.textMuted}
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
                  placeholderTextColor={COLORS.textMuted}
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
            <TouchableOpacity
              style={[styles.saveButton, loading && styles.saveButtonDisabled]}
              onPress={handleSave}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={COLORS.textLight} />
              ) : (
                <Text style={styles.saveButtonText}>💾 {t('editProfile.saveChanges')}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onClose} disabled={loading}>
              <Text style={styles.cancelButtonText}>{t('common.cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Success popup */}
      <Modal
        visible={showSuccess}
        transparent
        animationType="fade"
        onRequestClose={() => { setShowSuccess(false); onClose(); }}
      >
        <View style={styles.successOverlay}>
          <View style={styles.successCard}>
            <View style={styles.successIconWrap}>
              <Ionicons name="checkmark-circle" size={48} color={COLORS.primary} />
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.xl,
    paddingTop: 10,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputBorder,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.tabBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: TYPOGRAPHY.h2.fontSize,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  placeholder: {
    width: 36,
  },
  content: {
    flex: 1,
    padding: SPACING.xl,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    ...TYPOGRAPHY.bodyLargeBold,
    color: COLORS.text,
    marginBottom: SPACING.lg,
  },
  inputGroup: {
    marginBottom: SPACING.lg,
  },
  label: {
    ...TYPOGRAPHY.label,
    color: '#4B5563',
    marginBottom: SPACING.sm,
  },
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
    borderRadius: BORDER_RADIUS.md,
    padding: 14,
    ...TYPOGRAPHY.body,
    color: COLORS.text,
  },
  hint: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSubtle,
    marginTop: SPACING.sm,
    lineHeight: 18,
  },
  footer: {
    padding: SPACING.xl,
    paddingBottom: 10,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.inputBorder,
    gap: 10,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    ...TYPOGRAPHY.bodyLargeBold,
    color: COLORS.textLight,
  },
  cancelButton: {
    backgroundColor: COLORS.tabBg,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
  },
  cancelButtonText: {
    ...TYPOGRAPHY.button,
    color: COLORS.primary,
  },

  // ─── Success popup ───────────────────────────────────────────────────────────
  successOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  successCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    ...SHADOWS.large,
  },
  successIconWrap: {
    marginBottom: 14,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  successMessage: {
    fontSize: 15,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    letterSpacing: -0.2,
  },
  successBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: COLORS.borderLight,
  },
  successBtnText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.primary,
    letterSpacing: -0.3,
  },
});
