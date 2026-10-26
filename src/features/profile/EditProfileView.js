import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../auth/UserContext';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Button, showAlert, getErrorMessage } from '../../shared/ui';
import { useProfileStyles } from './profileStyles';

// Edit name, email and password. The form starts from the current user every time the view opens.
export default function EditProfileView({ user, onBack, onSaved }) {
  const { t } = useTranslation();
  const { updateProfile } = useUser();
  const { colors } = useTheme();
  const styles = useProfileStyles();

  const [editName, setEditName] = useState(user.name || '');
  const [editEmail, setEditEmail] = useState(user.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [editError, setEditError] = useState('');
  const [saving, setSaving] = useState(false);

  // Changing the email or the password requires re-authentication with the current password
  const emailChanged = editEmail.trim().toLowerCase() !== (user.email || '').trim().toLowerCase();
  const passwordChanging = !!(newPassword || confirmPassword);
  // Accounts created with Google have no password to confirm; they can add one, but not change the email yet
  const hasPassword = user.hasPassword !== false;
  const needsCurrentPassword = hasPassword && (emailChanged || passwordChanging);

  const handleSaveProfile = async () => {
    setEditError('');
    if (!editName.trim() || editName.trim().length < 2) {
      showAlert(t('common.error'), t('auth.validation.nameMinLength'));
      return;
    }
    if (!editEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editEmail.trim())) {
      showAlert(t('common.error'), t('auth.validation.emailInvalidShort'));
      return;
    }
    if (passwordChanging) {
      if (newPassword.length < 8) {
        showAlert(t('common.error'), t('editProfile.newPasswordMinLength'));
        return;
      }
      if (newPassword !== confirmPassword) {
        showAlert(t('common.error'), t('auth.validation.passwordsMismatch'));
        return;
      }
    }
    if (needsCurrentPassword && !currentPassword) {
      setEditError(getErrorMessage('CURRENT_PASSWORD_REQUIRED', undefined, t));
      return;
    }

    setSaving(true);
    try {
      const updates = { name: editName.trim() };
      if (emailChanged) updates.email = editEmail.trim();
      if (newPassword) updates.password = newPassword;
      if (needsCurrentPassword) updates.currentPassword = currentPassword;

      const result = await updateProfile(updates);
      if (result.success) {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        onSaved();
      } else {
        setEditError(getErrorMessage(result.code, t('auth.validation.profileUpdateError'), t));
      }
    } catch (error) {
      console.error('Profile update error:', error?.code || error?.message);
      setEditError(t('auth.validation.somethingWrong'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onBack} style={styles.navButton} accessibilityRole="button" accessibilityLabel={t('a11y.back')}>
          <Ionicons name="chevron-back" size={26} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>{t('editProfile.title')}</Text>
        <View style={styles.navButton} />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formSection}>
          <Text style={styles.formSectionTitle}>{t('editProfile.personalInfo')}</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('editProfile.fullName')}</Text>
            <TextInput style={styles.input} value={editName} onChangeText={setEditName} placeholder={t('editProfile.namePlaceholder')} placeholderTextColor={colors.textMuted} accessibilityLabel={t('editProfile.fullName')} />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('auth.email')}</Text>
            <TextInput style={[styles.input, !hasPassword && { opacity: 0.6 }]} value={editEmail} onChangeText={(v) => { setEditEmail(v); setEditError(''); }} placeholder="email@example.com" placeholderTextColor={colors.textMuted} keyboardType="email-address" autoCapitalize="none" autoCorrect={false} editable={hasPassword} accessibilityLabel={t('auth.email')} />
            {!hasPassword && <Text style={styles.hint}>{t('editProfile.googleAccountHint')}</Text>}
          </View>
        </View>
        <View style={styles.formSection}>
          <Text style={styles.formSectionTitle}>{t('editProfile.changePassword')}</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('editProfile.newPassword')}</Text>
            <TextInput style={styles.input} value={newPassword} onChangeText={(v) => { setNewPassword(v); setEditError(''); }} placeholder={t('editProfile.newPasswordPlaceholder')} placeholderTextColor={colors.textMuted} secureTextEntry autoCapitalize="none" accessibilityLabel={t('editProfile.newPassword')} />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('editProfile.confirmPassword')}</Text>
            <TextInput style={styles.input} value={confirmPassword} onChangeText={(v) => { setConfirmPassword(v); setEditError(''); }} placeholder={t('editProfile.confirmPlaceholder')} placeholderTextColor={colors.textMuted} secureTextEntry autoCapitalize="none" accessibilityLabel={t('editProfile.confirmPassword')} />
          </View>
          <Text style={styles.hint}>{t('editProfile.passwordHint')}</Text>
        </View>
        {needsCurrentPassword && (
          <View style={styles.formSection}>
            <Text style={styles.formSectionTitle}>{t('editProfile.confirmIdentity')}</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>{t('editProfile.currentPassword')}</Text>
              <TextInput
                style={styles.input}
                value={currentPassword}
                onChangeText={(v) => { setCurrentPassword(v); setEditError(''); }}
                placeholder={t('editProfile.currentPasswordPlaceholder')}
                placeholderTextColor={colors.textMuted}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                autoComplete="current-password"
                accessibilityLabel={t('editProfile.currentPassword')}
              />
            </View>
            <Text style={styles.hint}>{t('editProfile.currentPasswordHint')}</Text>
          </View>
        )}
        {editError ? (
          <View style={styles.editErrorBox} accessibilityLiveRegion="polite">
            <Ionicons name="alert-circle" size={16} color={colors.destructive} />
            <Text style={styles.editErrorText}>{editError}</Text>
          </View>
        ) : null}
        <View style={{ height: 100 }} />
      </ScrollView>
      <View style={styles.footer}>
        <Button title={t('editProfile.saveChanges')} onPress={handleSaveProfile} loading={saving} />
        <Button title={t('common.cancel')} variant="plain" onPress={onBack} disabled={saving} />
      </View>
    </>
  );
}
