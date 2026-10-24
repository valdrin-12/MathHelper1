import { useState, useEffect } from 'react';
import api from '../services/apiClient';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Platform,
  Linking,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useTranslation } from 'react-i18next';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import { useTheme } from '../context/ThemeContext';
import InfoModal from '../components/InfoModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { ScreenHeader, ListSection, ListRow, Button, showAlert, confirmAction, getErrorMessage } from '../components/ui';
import WebContainer from '../components/WebContainer';
import GoogleButton from '../components/GoogleButton';
import { useResponsive } from '../utils/responsive';

export default function SettingsScreen() {
  const { isWeb } = useResponsive();
  const { t } = useTranslation();
  const { user, logout, deleteAccount } = useUser();
  const { completedCoursesCount, completedQuizzesCount, streak, achievements, earnedAchievementsCount } = useStats();
  const { isDark, toggleTheme, colors } = useTheme();
  const [infoModal, setInfoModal] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [hasPaddleSubscription, setHasPaddleSubscription] = useState(!!user?.hasPaddleSubscription);
  const [openingPortal, setOpeningPortal] = useState(false);

  // Login doesn't return hasPaddleSubscription, so ask /me directly (refresh() would flash the loader)
  useEffect(() => {
    if (user?.tier !== 'premium') {
      setHasPaddleSubscription(false);
      return;
    }
    api.get('/api/auth/me')
      .then((data) => setHasPaddleSubscription(!!data.user?.hasPaddleSubscription))
      .catch((e) => console.error('[SettingsScreen] Failed to load subscription status:', e));
  }, [user?.id, user?.tier]);

  const handleManageSubscription = async () => {
    setOpeningPortal(true);
    // The Paddle portal has no way back to the app, so never replace the app with it:
    // web gets a new tab (opened now, while still inside the click, so popup blockers allow it),
    // native gets an in-app browser sheet that the user closes with "Done".
    const portalTab = Platform.OS === 'web' ? window.open('', '_blank') : null;
    if (portalTab) portalTab.opener = null;
    try {
      // Customer is resolved server-side from the session; we never send a customer ID
      const data = await api.post('/api/paddle/portal-session', {});
      if (Platform.OS === 'web') {
        if (portalTab) portalTab.location.href = data.url;
        else window.location.href = data.url; // popups blocked entirely: fall back to same tab
      } else {
        await WebBrowser.openBrowserAsync(data.url);
      }
    } catch (e) {
      console.error('[SettingsScreen] Failed to open billing portal:', e);
      portalTab?.close();
      showAlert(t('common.error'), t('settings.manageSubscriptionError'));
    } finally {
      setOpeningPortal(false);
    }
  };

  const handleDeleteAccount = () => {
    setDeletePassword('');
    setDeleteError('');
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    if (isDeleting) return;
    setShowDeleteModal(false);
    setDeletePassword('');
    setDeleteError('');
  };

  const confirmDeleteAccount = async () => {
    if (!deletePassword) {
      setDeleteError(getErrorMessage('PASSWORD_REQUIRED', undefined, t));
      return;
    }
    setDeleteError('');
    setIsDeleting(true);
    // On success UserContext clears the session, which unmounts this screen
    const result = await deleteAccount(deletePassword);
    if (result?.success) return;
    setIsDeleting(false);
    setDeleteError(getErrorMessage(result?.code, t('settings.deleteAccountError'), t));
  };

  // Accounts created with Google have no password: they confirm the deletion with Google instead
  const hasPassword = user?.hasPassword !== false;

  const confirmDeleteWithGoogle = async (idToken) => {
    setDeleteError('');
    setIsDeleting(true);
    const result = await deleteAccount({ idToken });
    if (result?.success) return;
    setIsDeleting(false);
    setDeleteError(getErrorMessage(result?.code, t('settings.deleteAccountError'), t));
  };

  const handleLogout = async () => {
    const confirmed = await confirmAction({
      title: t('settings.logoutConfirmTitle'),
      message: t('settings.logoutConfirm'),
      confirmText: t('settings.logout'),
      cancelText: t('common.cancel'),
      destructive: true,
    });
    if (confirmed) await logout();
  };

  const initials = user?.name
    ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  const openPrivacy = () => {
    if (Platform.OS === 'web') {
      window.open('/privacy', '_blank');
    } else {
      Linking.openURL('https://mathhelper.online/privacy');
    }
  };

  const openAbout = () => {
    if (Platform.OS === 'web') {
      window.open('/about', '_blank');
    } else {
      setInfoModal('about');
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <WebContainer maxWidth={600}>
      <ScreenHeader title={t('settings.title')} subtitle={t('settings.subtitle')} />

      {/* Profile */}
      <ListSection style={styles.firstSection}>
        <ListRow
          leading={
            <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
          }
          title={user?.name || t('settings.user')}
          subtitle={user?.email || ''}
          right={
            <View style={[styles.streakChip, { backgroundColor: colors.warningLight }]}>
              <Ionicons name="flame" size={14} color={colors.secondary} />
              <Text style={[styles.streakText, { color: colors.secondary }]}>{streak}</Text>
            </View>
          }
        />
      </ListSection>

      {/* Preferences */}
      <ListSection title={t('settings.preferences')}>
        <ListRow
          icon="moon"
          iconColor={colors.purple}
          title={t('settings.darkMode')}
          subtitle={t('settings.darkModeDesc')}
          switchValue={isDark}
          onSwitchChange={toggleTheme}
        />
        <ListRow
          icon="globe"
          iconColor={colors.accent}
          title={t('settings.language')}
          subtitle={t('settings.languageDesc')}
          showDivider={false}
        />
        <View style={styles.languageRow}>
          <LanguageSwitcher variant="light" />
        </View>
      </ListSection>

      {/* Learning */}
      <ListSection title={t('settings.learning')}>
        <ListRow
          icon="flag"
          iconColor={colors.secondary}
          title={t('settings.dailyGoals')}
          subtitle={streak > 0 ? t('settings.todayStreak', { streak }) : t('settings.startToday')}
          onPress={() => setInfoModal('goals')}
        />
        <ListRow
          icon="bar-chart"
          iconColor={colors.primary}
          title={t('settings.progressStats')}
          subtitle={t('settings.coursesQuizzes', { courses: completedCoursesCount, quizzes: completedQuizzesCount })}
          onPress={() => setInfoModal('stats')}
        />
        <ListRow
          icon="trophy"
          iconColor={colors.warningAccent}
          title={t('settings.achievements')}
          value={`${earnedAchievementsCount}/${achievements.length}`}
          onPress={() => setInfoModal('achievements')}
        />
      </ListSection>

      {/* Subscription (Paddle subscribers only) */}
      {user?.tier === 'premium' && hasPaddleSubscription && (
        <ListSection title={t('settings.subscription')}>
          <ListRow
            icon="card"
            iconColor={colors.success}
            title={t('settings.manageSubscription')}
            subtitle={openingPortal ? t('settings.manageSubscriptionOpening') : t('settings.manageSubscriptionDesc')}
            loading={openingPortal}
            onPress={handleManageSubscription}
          />
        </ListSection>
      )}

      {/* Other */}
      <ListSection title={t('settings.other')}>
        <ListRow icon="help-circle" iconColor={colors.success} title={t('settings.helpSupport')} onPress={() => setInfoModal('help')} />
        <ListRow icon="document-text" iconColor={colors.textMuted} title={t('settings.termsOfService')} onPress={() => setInfoModal('terms')} />
        <ListRow icon="shield-checkmark" iconColor={colors.primary} title={t('settings.privacyPolicy')} onPress={openPrivacy} />
        <ListRow icon="information-circle" iconColor={colors.textMuted} title={t('settings.aboutApp')} onPress={openAbout} />
      </ListSection>

      {/* Account */}
      <ListSection>
        <ListRow title={t('settings.logout')} centered onPress={handleLogout} />
      </ListSection>
      <ListSection style={styles.tightSection}>
        <ListRow title={t('settings.deleteAccount')} destructive centered onPress={handleDeleteAccount} />
      </ListSection>

      {/* Delete Account Modal */}
      <Modal
        visible={showDeleteModal}
        transparent
        animationType="fade"
        onRequestClose={closeDeleteModal}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={[styles.modalOverlay, { backgroundColor: colors.overlay }]}
        >
          <View style={[styles.deleteModalCard, { backgroundColor: colors.surface }]}>
            <View style={[styles.deleteModalIconWrap, { backgroundColor: colors.errorLight }]}>
              <Ionicons name="person-remove" size={28} color={colors.destructive} />
            </View>

            <Text style={[styles.deleteModalTitle, { color: colors.text }]}>{t('settings.deleteAccountConfirmTitle')}</Text>
            <Text style={[styles.deleteModalSubtitle, { color: colors.textSubtle }]}>{t('settings.deleteAccountConfirm')}</Text>

            {/* What gets deleted */}
            <View style={[styles.deleteModalList, { backgroundColor: colors.background }]}>
              {[
                { icon: 'bookmark-outline', label: t('settings.deleteWillRemove1') },
                { icon: 'bar-chart-outline', label: t('settings.deleteWillRemove2') },
                { icon: 'school-outline', label: t('settings.deleteWillRemove3') },
              ].map((item, i) => (
                <View key={i} style={styles.deleteModalListRow}>
                  <Ionicons name={item.icon} size={16} color={colors.destructive} />
                  <Text style={[styles.deleteModalListText, { color: colors.text }]}>{item.label}</Text>
                </View>
              ))}
            </View>

            {/* Re-authentication: the current password, or Google for an account that has none */}
            {!hasPassword && (
              <>
                <Text style={[styles.deletePasswordLabel, { color: colors.textSubtle }]}>{t('settings.deleteAccountGoogleConfirm')}</Text>
                <GoogleButton
                  onToken={confirmDeleteWithGoogle}
                  onError={(code) => setDeleteError(getErrorMessage(code, undefined, t))}
                  disabled={isDeleting}
                />
              </>
            )}
            {hasPassword && <Text style={[styles.deletePasswordLabel, { color: colors.textSubtle }]}>{t('settings.deletePasswordLabel')}</Text>}
            {hasPassword && <TextInput
              style={[
                styles.deletePasswordInput,
                { backgroundColor: colors.background, color: colors.text, borderColor: deleteError ? colors.destructive : 'transparent' },
              ]}
              value={deletePassword}
              onChangeText={(v) => { setDeletePassword(v); if (deleteError) setDeleteError(''); }}
              placeholder={t('settings.deletePasswordPlaceholder')}
              placeholderTextColor={colors.textMuted}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="current-password"
              textContentType="password"
              editable={!isDeleting}
              onSubmitEditing={confirmDeleteAccount}
              accessibilityLabel={t('settings.deletePasswordLabel')}
            />}
            {deleteError ? (
              <Text style={[styles.deleteErrorText, { color: colors.destructive }]} accessibilityLiveRegion="polite">{deleteError}</Text>
            ) : null}

            {hasPassword && (
              <Button
                title={t('settings.deleteAccount')}
                tone="destructive"
                onPress={confirmDeleteAccount}
                loading={isDeleting}
                disabled={!deletePassword}
                style={[styles.modalButton, { marginTop: SPACING.lg }]}
              />
            )}
            <Button
              title={t('common.cancel')}
              variant="plain"
              onPress={closeDeleteModal}
              disabled={isDeleting}
              style={styles.modalButton}
            />
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Version */}
      <Text style={[styles.versionText, { color: colors.textMuted }]}>{t('settings.version')}</Text>

      <View style={{ height: isWeb ? 20 : 100 }} />
      </WebContainer>

      {/* Info Modals */}
      <InfoModal
        visible={infoModal === 'help'}
        title={t('infoContent.help.title')}
        content={[
          { heading: t('infoContent.help.contact.heading'), text: t('infoContent.help.contact.text') },
          { heading: t('infoContent.help.faq.heading'), text: t('infoContent.help.faq.text') },
          { heading: t('infoContent.help.bug.heading'), text: t('infoContent.help.bug.text') },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'terms'}
        title={t('infoContent.terms.title')}
        content={[
          { heading: t('infoContent.terms.version.heading'), text: t('infoContent.terms.version.text') },
          { heading: t('infoContent.terms.acceptance.heading'), text: t('infoContent.terms.acceptance.text') },
          { heading: t('infoContent.terms.service.heading'), text: t('infoContent.terms.service.text') },
          { heading: t('infoContent.terms.accounts.heading'), text: t('infoContent.terms.accounts.text') },
          { heading: t('infoContent.terms.ip.heading'), text: t('infoContent.terms.ip.text') },
          { heading: t('infoContent.terms.ugc.heading'), text: t('infoContent.terms.ugc.text') },
          { heading: t('infoContent.terms.premium.heading'), text: t('infoContent.terms.premium.text') },
          { heading: t('infoContent.terms.liability.heading'), text: t('infoContent.terms.liability.text') },
          { heading: t('infoContent.terms.prohibited.heading'), text: t('infoContent.terms.prohibited.text') },
          { heading: t('infoContent.terms.changes.heading'), text: t('infoContent.terms.changes.text') },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'about'}
        title={t('infoContent.about.title')}
        content={[
          { heading: t('infoContent.about.app.heading'), text: t('infoContent.about.app.text') },
          { heading: t('infoContent.about.mission.heading'), text: t('infoContent.about.mission.text') },
          { heading: t('infoContent.about.features.heading'), text: t('infoContent.about.features.text') },
          { heading: t('infoContent.about.developer.heading'), text: t('infoContent.about.developer.text') },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'goals'}
        title={t('infoContent.goals.title')}
        content={[
          { heading: t('infoContent.goals.dailyGoal.heading'), text: t('infoContent.goals.dailyGoal.text') },
          { heading: t('settings.streak'), text: t('infoContent.goals.currentStreak', { streak }) },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'stats'}
        title={t('infoContent.stats.title')}
        content={[
          { heading: t('dashboard.yourStats'), text: t('infoContent.stats.yourStats', { courses: completedCoursesCount, quizzes: completedQuizzesCount, streak }) },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'achievements'}
        title={t('settings.achievements')}
        content={[
          ...(earnedAchievementsCount === 0
            ? [{ heading: t('achievements.startEarning'), text: t('achievements.startEarningDesc') }]
            : []),
          // Full catalogue; locked items are dimmed AND marked with a lock icon + progress text
          ...achievements.map((a) => ({
            heading: `${a.emoji} ${t(`achievements.${a.id}.title`)}`,
            text: `${t(`achievements.${a.id}.desc`)}\n${a.earned
              ? t('achievements.earned')
              : t('achievements.lockedProgress', { progress: Math.min(a.progress ?? 0, a.threshold), threshold: a.threshold })}`,
            icon: a.earned ? 'checkmark-circle' : 'lock-closed',
            iconColor: a.earned ? colors.success : colors.textMuted,
            muted: !a.earned,
          })),
        ]}
        onClose={() => setInfoModal(null)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstSection: {
    marginTop: SPACING.lg,
  },
  tightSection: {
    marginTop: SPACING.md,
  },

  // Profile
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    ...TYPOGRAPHY.h3,
    color: '#FFFFFF',
  },
  streakChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 1,
    borderRadius: BORDER_RADIUS.round,
    marginLeft: SPACING.sm,
  },
  streakText: {
    ...TYPOGRAPHY.subheadBold,
  },

  // Language
  languageRow: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
    alignItems: 'center',
  },

  // Delete Account Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxl,
  },
  deleteModalCard: {
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xxl,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  deleteModalIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  deleteModalTitle: {
    ...TYPOGRAPHY.headline,
    textAlign: 'center',
    marginBottom: SPACING.xs + 2,
  },
  deleteModalSubtitle: {
    ...TYPOGRAPHY.footnote,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  deleteModalList: {
    width: '100%',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md + 2,
    gap: SPACING.sm + 2,
    marginBottom: SPACING.lg,
  },
  deleteModalListRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm + 2,
  },
  deleteModalListText: {
    ...TYPOGRAPHY.footnote,
    flex: 1,
  },
  deletePasswordLabel: {
    ...TYPOGRAPHY.footnote,
    alignSelf: 'stretch',
    marginBottom: SPACING.xs + 2,
  },
  deletePasswordInput: {
    alignSelf: 'stretch',
    minHeight: 44,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    paddingHorizontal: SPACING.md,
    ...TYPOGRAPHY.body,
  },
  deleteErrorText: {
    ...TYPOGRAPHY.footnote,
    alignSelf: 'stretch',
    marginTop: SPACING.xs + 2,
  },
  modalButton: {
    alignSelf: 'stretch',
    marginTop: SPACING.xs,
  },

  // Version
  versionText: {
    ...TYPOGRAPHY.footnote,
    textAlign: 'center',
    paddingVertical: SPACING.xxl,
  },
});
