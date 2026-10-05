import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/apiClient';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  Platform,
  Linking,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import { useTheme } from '../context/ThemeContext';
import InfoModal from '../components/InfoModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { ScreenHeader, ListSection, ListRow, Button } from '../components/ui';
import WebContainer from '../components/WebContainer';
import { useResponsive } from '../utils/responsive';

export default function SettingsScreen() {
  const { isWeb } = useResponsive();
  const { t } = useTranslation();
  const { user, logout } = useUser();
  const { completedCoursesCount, completedQuizzesCount, streak, achievements } = useStats();
  const { isDark, toggleTheme, colors } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [infoModal, setInfoModal] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
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

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const [notif, emailNotif, pushNotif, sound] = await Promise.all([
          AsyncStorage.getItem('@mathhelper_notifications'),
          AsyncStorage.getItem('@mathhelper_email_notifications'),
          AsyncStorage.getItem('@mathhelper_push_notifications'),
          AsyncStorage.getItem('@mathhelper_sound'),
        ]);
        if (notif !== null) setNotifications(notif === 'true');
        if (emailNotif !== null) setEmailNotifications(emailNotif === 'true');
        if (pushNotif !== null) setPushNotifications(pushNotif === 'true');
        if (sound !== null) setSoundEffects(sound === 'true');
      } catch (e) {
        console.error('[SettingsScreen] Failed to load settings from storage:', e);
        // Defaults remain in place — non-critical, no user-visible error needed
      }
    };
    loadSettings();
  }, []);

  const handleNotificationsChange = async (value) => {
    setNotifications(value);
    // When master toggle is turned off, disable sub-notifications too
    if (!value) {
      setEmailNotifications(false);
      setPushNotifications(false);
      await AsyncStorage.multiSet([
        ['@mathhelper_notifications', 'false'],
        ['@mathhelper_email_notifications', 'false'],
        ['@mathhelper_push_notifications', 'false'],
      ]);
    } else {
      await AsyncStorage.setItem('@mathhelper_notifications', 'true');
    }
  };

  const handleEmailNotificationsChange = async (value) => {
    setEmailNotifications(value);
    if (value && !notifications) setNotifications(true);
    try {
      await AsyncStorage.setItem('@mathhelper_email_notifications', String(value));
    } catch (e) {
      console.error('[SettingsScreen] Failed to save email notifications setting:', e);
    }
  };

  const handlePushNotificationsChange = async (value) => {
    setPushNotifications(value);
    if (value && !notifications) setNotifications(true);
    try {
      await AsyncStorage.setItem('@mathhelper_push_notifications', String(value));
    } catch (e) {
      console.error('[SettingsScreen] Failed to save push notifications setting:', e);
    }
  };

  const handleSoundChange = async (value) => {
    setSoundEffects(value);
    try {
      await AsyncStorage.setItem('@mathhelper_sound', String(value));
    } catch (e) {
      console.error('[SettingsScreen] Failed to save sound setting:', e);
    }
  };

  const handleManageSubscription = async () => {
    setOpeningPortal(true);
    try {
      // Customer is resolved server-side from the session; we never send a customer ID
      const data = await api.post('/api/paddle/portal-session', {});
      if (Platform.OS === 'web') {
        window.location.href = data.url;
      } else {
        await Linking.openURL(data.url);
      }
    } catch (e) {
      console.error('[SettingsScreen] Failed to open billing portal:', e);
      Alert.alert(t('common.error'), t('settings.manageSubscriptionError'));
    } finally {
      setOpeningPortal(false);
    }
  };

  const handleDeleteAccount = () => setShowDeleteModal(true);

  const confirmDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      await api.delete('/api/auth/account');
      setShowDeleteModal(false);
      await logout();
    } catch (e) {
      setIsDeleting(false);
      setShowDeleteModal(false);
      Alert.alert(t('common.error'), t('settings.deleteAccountError'));
    }
  };

  const handleLogout = async () => {
    // Alert.alert buttons are a no-op on react-native-web
    if (Platform.OS === 'web') {
      if (window.confirm(t('settings.logoutConfirm'))) await logout();
      return;
    }
    Alert.alert(
      t('settings.logoutConfirmTitle'),
      t('settings.logoutConfirm'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('settings.logout'),
          style: 'destructive',
          onPress: async () => await logout(),
        },
      ]
    );
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
          icon="notifications"
          iconColor={colors.error}
          title={t('settings.notifications')}
          subtitle={t('settings.notificationsDesc')}
          switchValue={notifications}
          onSwitchChange={handleNotificationsChange}
        />
        <ListRow
          icon="moon"
          iconColor={colors.purple}
          title={t('settings.darkMode')}
          subtitle={t('settings.darkModeDesc')}
          switchValue={isDark}
          onSwitchChange={toggleTheme}
        />
        <ListRow
          icon="volume-high"
          iconColor={colors.secondary}
          title={t('settings.soundEffects')}
          subtitle={t('settings.soundEffectsDesc')}
          switchValue={soundEffects}
          onSwitchChange={handleSoundChange}
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
          value={String(achievements.length)}
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
        onRequestClose={() => !isDeleting && setShowDeleteModal(false)}
      >
        <View style={[styles.modalOverlay, { backgroundColor: colors.overlay }]}>
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

            <Button
              title={t('settings.deleteAccount')}
              tone="destructive"
              onPress={confirmDeleteAccount}
              loading={isDeleting}
              style={styles.modalButton}
            />
            <Button
              title={t('common.cancel')}
              variant="plain"
              onPress={() => setShowDeleteModal(false)}
              disabled={isDeleting}
              style={styles.modalButton}
            />
          </View>
        </View>
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
        visible={infoModal === 'privacy'}
        title={t('infoContent.privacy.title')}
        content={[
          { heading: t('infoContent.privacy.version.heading'), text: t('infoContent.privacy.version.text') },
          { heading: t('infoContent.privacy.dataCollected.heading'), text: t('infoContent.privacy.dataCollected.text') },
          { heading: t('infoContent.privacy.dataUsage.heading'), text: t('infoContent.privacy.dataUsage.text') },
          { heading: t('infoContent.privacy.security.heading'), text: t('infoContent.privacy.security.text') },
          { heading: t('infoContent.privacy.deletion.heading'), text: t('infoContent.privacy.deletion.text') },
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
          { heading: 'Streak', text: t('infoContent.goals.currentStreak', { streak }) },
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
        content={achievements.length > 0
          ? achievements.map(a => ({ heading: `${a.emoji} ${t(`achievements.${a.id}.title`)}`, text: t(`achievements.${a.id}.desc`) }))
          : [{ heading: t('achievements.startEarning'), text: t('achievements.startEarningDesc') }]
        }
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
    marginBottom: SPACING.xl,
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
