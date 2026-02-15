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
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import { useSavedItems } from '../context/SavedItemsContext';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

const formatDate = (dateString, t) => {
  if (!dateString) return '—';
  const date = new Date(dateString);
  const day = date.getDate();
  const month = t(`months.${date.getMonth()}`);
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export default function ProfileModal({ visible, onClose }) {
  const { user, logout, updateProfile } = useUser();
  const { completedCoursesCount, completedQuizzesCount } = useStats();
  const { savedItems } = useSavedItems();
  const [showEdit, setShowEdit] = useState(false);
  const { t } = useTranslation();

  // Edit form state
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user && showEdit) {
      setEditName(user.name || '');
      setEditEmail(user.email || '');
      setNewPassword('');
      setConfirmPassword('');
    }
  }, [user, showEdit]);

  // Reset to profile view when modal closes
  useEffect(() => {
    if (!visible) {
      setShowEdit(false);
    }
  }, [visible]);

  if (!user) return null;

  const initials = user.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  const handleEditProfile = () => {
    setShowEdit(true);
  };

  const handleBackFromEdit = () => {
    setShowEdit(false);
  };

  const handleSaveProfile = async () => {
    try {
      if (!editName.trim() || editName.trim().length < 2) {
        Alert.alert(t('common.error'), t('auth.validation.nameMinLength'));
        return;
      }

      if (!editEmail.trim() || !editEmail.includes('@')) {
        Alert.alert(t('common.error'), t('auth.validation.emailInvalidShort'));
        return;
      }

      if (newPassword || confirmPassword) {
        if (newPassword.length < 6) {
          Alert.alert(t('common.error'), t('editProfile.newPasswordMinLength'));
          return;
        }

        if (newPassword !== confirmPassword) {
          Alert.alert(t('common.error'), t('auth.validation.passwordsMismatch'));
          return;
        }
      }

      setSaving(true);

      const updates = {
        name: editName.trim(),
        email: editEmail.trim(),
      };

      if (newPassword) {
        updates.password = newPassword;
      }

      const result = await updateProfile(updates);

      if (result.success) {
        Alert.alert(t('common.success'), t('editProfile.profileUpdated'), [
          { text: t('common.ok'), onPress: () => setShowEdit(false) },
        ]);
      } else {
        Alert.alert(t('common.error'), result.error || t('auth.validation.profileUpdateError'));
      }
    } catch (error) {
      console.error('Profile update error:', error);
      Alert.alert(t('common.error'), t('auth.validation.somethingWrong'));
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm(t('profileModal.logoutConfirm'));
      if (confirmed) {
        await logout();
        onClose();
      }
    } else {
      Alert.alert(
        t('profileModal.logoutAction'),
        t('profileModal.logoutConfirm'),
        [
          { text: t('common.cancel'), style: 'cancel' },
          {
            text: t('profileModal.logoutAction'),
            style: 'destructive',
            onPress: async () => {
              await logout();
              onClose();
            },
          },
        ]
      );
    }
  };

  // ─── Edit Profile View ───
  const renderEditView = () => (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleBackFromEdit} style={styles.backButton}>
            <Ionicons name="chevron-back" size={22} color={COLORS.textSubtle} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>{t('editProfile.title')}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={editStyles.section}>
          <Text style={editStyles.sectionTitle}>{t('editProfile.personalInfo')}</Text>

          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('editProfile.fullName')}</Text>
            <TextInput
              style={editStyles.input}
              value={editName}
              onChangeText={setEditName}
              placeholder={t('editProfile.namePlaceholder')}
              placeholderTextColor={COLORS.textMuted}
            />
          </View>

          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('auth.email')}</Text>
            <TextInput
              style={editStyles.input}
              value={editEmail}
              onChangeText={setEditEmail}
              placeholder="email@example.com"
              placeholderTextColor={COLORS.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={editStyles.section}>
          <Text style={editStyles.sectionTitle}>{t('editProfile.changePassword')}</Text>

          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('editProfile.newPassword')}</Text>
            <TextInput
              style={editStyles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder={t('editProfile.newPasswordPlaceholder')}
              placeholderTextColor={COLORS.textMuted}
              secureTextEntry
            />
          </View>

          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('editProfile.confirmPassword')}</Text>
            <TextInput
              style={editStyles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder={t('editProfile.confirmPlaceholder')}
              placeholderTextColor={COLORS.textMuted}
              secureTextEntry
            />
          </View>

          <Text style={editStyles.hint}>
            {t('editProfile.passwordHint')}
          </Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={editStyles.footer}>
        <TouchableOpacity
          style={[editStyles.saveButton, saving && editStyles.saveButtonDisabled]}
          onPress={handleSaveProfile}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator color={COLORS.textLight} />
          ) : (
            <Text style={editStyles.saveButtonText}>{t('editProfile.saveChanges')}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={editStyles.cancelButton} onPress={handleBackFromEdit} disabled={saving}>
          <Text style={editStyles.cancelButtonText}>{t('common.cancel')}</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  // ─── Profile View ───
  const renderProfileView = () => (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <Ionicons name="chevron-back" size={22} color={COLORS.textSubtle} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>{t('profileModal.title')}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>{initials}</Text>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.memberSinceBadge}>
            <Text style={styles.memberSinceText}>
              {t('profileModal.memberSince', { date: formatDate(user.createdAt, t) })}
            </Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('profileModal.stats')}</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <View style={[styles.statIconBox, { backgroundColor: COLORS.primaryBg }]}>
                <Text style={styles.statEmoji}>✅</Text>
              </View>
              <Text style={styles.statNumber}>{savedItems.length}</Text>
              <Text style={styles.statLabel}>{t('profileModal.problemsSolved')}</Text>
            </View>
            <View style={styles.statCard}>
              <View style={[styles.statIconBox, { backgroundColor: COLORS.warningLight }]}>
                <Text style={styles.statEmoji}>🎯</Text>
              </View>
              <Text style={styles.statNumber}>{completedQuizzesCount}</Text>
              <Text style={styles.statLabel}>{t('profileModal.quizzesCompleted')}</Text>
            </View>
            <View style={styles.statCard}>
              <View style={[styles.statIconBox, { backgroundColor: COLORS.successLight }]}>
                <Text style={styles.statEmoji}>📚</Text>
              </View>
              <Text style={styles.statNumber}>{completedCoursesCount}</Text>
              <Text style={styles.statLabel}>{t('profileModal.coursesCompleted')}</Text>
            </View>
          </View>
        </View>

        {/* Actions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('profileModal.account')}</Text>
          <View style={styles.actionsCard}>
            <TouchableOpacity style={styles.actionRow} onPress={handleEditProfile}>
              <View style={styles.actionIconWrapper}>
                <Text style={styles.actionEmoji}>✏️</Text>
              </View>
              <View style={styles.actionTextWrapper}>
                <Text style={styles.actionTitle}>{t('profileModal.editProfile')}</Text>
                <Text style={styles.actionSubtitle}>{t('profileModal.editProfileSub')}</Text>
              </View>
              <Text style={styles.actionArrow}>›</Text>
            </TouchableOpacity>

            <View style={styles.actionDivider} />

            <TouchableOpacity style={styles.actionRow} onPress={handleLogout}>
              <View style={[styles.actionIconWrapper, styles.logoutIconWrapper]}>
                <Text style={styles.actionEmoji}>🚪</Text>
              </View>
              <View style={styles.actionTextWrapper}>
                <Text style={[styles.actionTitle, styles.logoutTitle]}>{t('profileModal.logoutAction')}</Text>
                <Text style={styles.actionSubtitle}>{t('profileModal.logoutSub')}</Text>
              </View>
              <Text style={[styles.actionArrow, styles.logoutArrow]}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={showEdit ? handleBackFromEdit : onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {showEdit ? renderEditView() : renderProfileView()}
        </View>
      </SafeAreaView>
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

  // Header
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
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

  // Content
  content: {
    flex: 1,
  },

  // Avatar
  avatarSection: {
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    paddingVertical: SPACING.xxxl,
    paddingHorizontal: SPACING.xxl,
    marginBottom: SPACING.lg,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  avatarInitials: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  userName: {
    fontSize: TYPOGRAPHY.h2.fontSize + 2,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 6,
  },
  userEmail: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSubtle,
    marginBottom: 14,
  },
  memberSinceBadge: {
    backgroundColor: COLORS.primaryBg,
    borderRadius: BORDER_RADIUS.xl,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 6,
  },
  memberSinceText: {
    ...TYPOGRAPHY.captionBold,
    color: COLORS.primary,
  },

  // Section
  section: {
    marginHorizontal: 18,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 14,
  },

  // Stats
  statsGrid: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: SPACING.lg,
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  statIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statEmoji: {
    fontSize: 20,
  },
  statNumber: {
    fontSize: TYPOGRAPHY.h2.fontSize,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  statLabel: {
    ...TYPOGRAPHY.small,
    color: COLORS.textSubtle,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Actions
  actionsCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    overflow: 'hidden',
    ...SHADOWS.soft,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  actionIconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: COLORS.primaryBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  logoutIconWrapper: {
    backgroundColor: '#FFF0F0',
  },
  actionEmoji: {
    fontSize: 20,
  },
  actionTextWrapper: {
    flex: 1,
  },
  actionTitle: {
    ...TYPOGRAPHY.bodyBold,
    color: COLORS.text,
    marginBottom: 2,
  },
  logoutTitle: {
    color: '#FF4B4B',
  },
  actionSubtitle: {
    ...TYPOGRAPHY.tabLabel,
    color: COLORS.textSubtle,
  },
  actionArrow: {
    fontSize: 22,
    color: COLORS.textPlaceholder,
    fontWeight: '300',
  },
  logoutArrow: {
    color: '#FF4B4B',
  },
  actionDivider: {
    height: 1,
    backgroundColor: COLORS.tabBg,
    marginHorizontal: 18,
  },
});

// Edit profile styles
const editStyles = StyleSheet.create({
  section: {
    marginBottom: 30,
    paddingHorizontal: SPACING.xl,
  },
  sectionTitle: {
    ...TYPOGRAPHY.bodyLargeBold,
    color: COLORS.text,
    marginBottom: SPACING.lg,
    marginTop: SPACING.xl,
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
});
