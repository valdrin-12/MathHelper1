import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import InfoModal from '../components/InfoModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { user, logout } = useUser();
  const { completedCoursesCount, completedQuizzesCount, streak, achievements } = useStats();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [infoModal, setInfoModal] = useState(null);

  const handleLogout = async () => {
    console.log('[SettingsScreen] handleLogout thirret');

    // Use window.confirm for web, Alert.alert for native
    if (Platform.OS === 'web') {
      const confirmed = window.confirm(t('settings.logoutConfirm'));
      console.log('[SettingsScreen] Web confirm result:', confirmed);
      if (confirmed) {
        console.log('[SettingsScreen] User konfirmoi logout - duke thirrur logout()...');
        await logout();
        console.log('[SettingsScreen] logout() u krye!');
      } else {
        console.log('[SettingsScreen] User anuloi logout');
      }
    } else {
      Alert.alert(
        t('settings.logoutConfirmTitle'),
        t('settings.logoutConfirm'),
        [
          {
            text: t('common.cancel'),
            style: 'cancel',
            onPress: () => console.log('[SettingsScreen] User anuloi logout')
          },
          {
            text: t('settings.logout'),
            style: 'destructive',
            onPress: async () => {
              console.log('[SettingsScreen] User konfirmoi logout - duke thirrur logout()...');
              await logout();
              console.log('[SettingsScreen] logout() u krye!');
            }
          },
        ]
      );
    }
  };

  const initials = user?.name
    ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('settings.title')}</Text>
        <Text style={styles.headerSubtitle}>{t('settings.subtitle')}</Text>
      </View>

      {/* Profili */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.profile')}</Text>
        <View style={styles.profileCard}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>{initials}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user?.name || t('settings.user')}</Text>
            <Text style={styles.profileEmail}>{user?.email || ''}</Text>
          </View>
        </View>
      </View>

      {/* Preferencat */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.preferences')}</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Text style={styles.settingIcon}>🔔</Text>
            <View>
              <Text style={styles.settingTitle}>{t('settings.notifications')}</Text>
              <Text style={styles.settingDescription}>{t('settings.notificationsDesc')}</Text>
            </View>
          </View>
          <Switch value={notifications} onValueChange={setNotifications}
            trackColor={{ false: COLORS.border, true: COLORS.primary }} thumbColor={COLORS.surface} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Text style={styles.settingIcon}>🌙</Text>
            <View>
              <Text style={styles.settingTitle}>{t('settings.darkMode')}</Text>
              <Text style={styles.settingDescription}>{t('settings.darkModeDesc')}</Text>
            </View>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode}
            trackColor={{ false: COLORS.border, true: COLORS.primary }} thumbColor={COLORS.surface} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Text style={styles.settingIcon}>🔊</Text>
            <View>
              <Text style={styles.settingTitle}>{t('settings.soundEffects')}</Text>
              <Text style={styles.settingDescription}>{t('settings.soundEffectsDesc')}</Text>
            </View>
          </View>
          <Switch value={soundEffects} onValueChange={setSoundEffects}
            trackColor={{ false: COLORS.border, true: COLORS.primary }} thumbColor={COLORS.surface} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Text style={styles.settingIcon}>🌐</Text>
            <View>
              <Text style={styles.settingTitle}>{t('settings.language')}</Text>
              <Text style={styles.settingDescription}>{t('settings.languageDesc')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.languageSwitcherRow}>
          <LanguageSwitcher />
        </View>
      </View>

      {/* Mësimi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.learning')}</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => setInfoModal('goals')}>
          <Text style={styles.menuIcon}>🎯</Text>
          <View style={styles.menuTextWrap}>
            <Text style={styles.menuText}>{t('settings.dailyGoals')}</Text>
            <Text style={styles.menuSubtext}>{streak > 0 ? t('settings.todayStreak', { streak }) : t('settings.startToday')}</Text>
          </View>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setInfoModal('stats')}>
          <Text style={styles.menuIcon}>📊</Text>
          <View style={styles.menuTextWrap}>
            <Text style={styles.menuText}>{t('settings.progressStats')}</Text>
            <Text style={styles.menuSubtext}>{t('settings.coursesQuizzes', { courses: completedCoursesCount, quizzes: completedQuizzesCount })}</Text>
          </View>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setInfoModal('achievements')}>
          <Text style={styles.menuIcon}>🏆</Text>
          <View style={styles.menuTextWrap}>
            <Text style={styles.menuText}>{t('settings.achievements')}</Text>
            <Text style={styles.menuSubtext}>{t('settings.achievementsCount', { count: achievements.length })}</Text>
          </View>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Të Tjera */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.other')}</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => setInfoModal('help')}>
          <Text style={styles.menuIcon}>❓</Text>
          <Text style={styles.menuText}>{t('settings.helpSupport')}</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setInfoModal('terms')}>
          <Text style={styles.menuIcon}>📄</Text>
          <Text style={styles.menuText}>{t('settings.termsOfService')}</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setInfoModal('privacy')}>
          <Text style={styles.menuIcon}>🔒</Text>
          <Text style={styles.menuText}>{t('settings.privacyPolicy')}</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => setInfoModal('about')}>
          <Text style={styles.menuIcon}>ℹ️</Text>
          <Text style={styles.menuText}>{t('settings.aboutApp')}</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Dalja */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>🚪 {t('settings.logout')}</Text>
        </TouchableOpacity>
      </View>

      {/* Versioni */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>{t('settings.version')}</Text>
      </View>

      {/* Info Modals */}
      <InfoModal
        visible={infoModal === 'help'}
        title={t('infoContent.help.title')}
        content={[
          { heading: `📧 ${t('infoContent.help.contact.heading')}`, text: t('infoContent.help.contact.text') },
          { heading: `❓ ${t('infoContent.help.faq.heading')}`, text: t('infoContent.help.faq.text') },
          { heading: `🐛 ${t('infoContent.help.bug.heading')}`, text: t('infoContent.help.bug.text') },
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
          { heading: t('infoContent.terms.liability.heading'), text: t('infoContent.terms.liability.text') },
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
          { heading: `📱 ${t('infoContent.about.app.heading')}`, text: t('infoContent.about.app.text') },
          { heading: `🎯 ${t('infoContent.about.mission.heading')}`, text: t('infoContent.about.mission.text') },
          { heading: `✨ ${t('infoContent.about.features.heading')}`, text: t('infoContent.about.features.text') },
          { heading: `👩‍💻 ${t('infoContent.about.developer.heading')}`, text: t('infoContent.about.developer.text') },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'goals'}
        title={t('infoContent.goals.title')}
        content={[
          { heading: `🎯 ${t('infoContent.goals.dailyGoal.heading')}`, text: t('infoContent.goals.dailyGoal.text') },
          { heading: '🔥 Streak', text: t('infoContent.goals.currentStreak', { streak }) },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'stats'}
        title={t('infoContent.stats.title')}
        content={[
          { heading: `📊 ${t('dashboard.yourStats')}`, text: t('infoContent.stats.yourStats', { courses: completedCoursesCount, quizzes: completedQuizzesCount, streak }) },
        ]}
        onClose={() => setInfoModal(null)}
      />
      <InfoModal
        visible={infoModal === 'achievements'}
        title={t('settings.achievements')}
        content={achievements.length > 0
          ? achievements.map(a => ({ heading: `${a.emoji} ${t(`achievements.${a.id}.title`)}`, text: t(`achievements.${a.id}.desc`) }))
          : [{ heading: `🎯 ${t('achievements.startEarning')}`, text: t('achievements.startEarningDesc') }]
        }
        onClose={() => setInfoModal(null)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.backgroundAlt },
  header: { padding: SPACING.xl, paddingTop: 60, backgroundColor: COLORS.primary },
  headerTitle: { ...TYPOGRAPHY.h1, color: COLORS.textOnPrimary, marginBottom: SPACING.xs + 1 },
  headerSubtitle: { fontSize: 14, color: COLORS.textOnPrimary, opacity: 0.9 },
  section: { padding: SPACING.xl },
  sectionTitle: { ...TYPOGRAPHY.h3, color: COLORS.textDark, marginBottom: 15 },
  profileCard: {
    backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.lg, padding: SPACING.xl,
    flexDirection: 'row', alignItems: 'center',
    ...SHADOWS.medium,
  },
  profileAvatar: {
    width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.primary,
    justifyContent: 'center', alignItems: 'center', marginRight: 15,
  },
  profileAvatarText: { fontSize: 24, fontWeight: 'bold', color: COLORS.textOnPrimary },
  profileInfo: { flex: 1 },
  profileName: { ...TYPOGRAPHY.h3, color: COLORS.textDark, marginBottom: SPACING.xs + 1 },
  profileEmail: { fontSize: 14, color: COLORS.textSecondary },
  settingItem: {
    backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.lg, padding: SPACING.xl,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: 10,
    ...SHADOWS.medium,
  },
  settingLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  settingIcon: { fontSize: 24, marginRight: 15 },
  settingTitle: { fontSize: 16, fontWeight: '600', color: COLORS.textDark, marginBottom: 3 },
  settingDescription: { ...TYPOGRAPHY.caption, color: COLORS.textMuted },
  languageSwitcherRow: {
    backgroundColor: COLORS.primary, borderRadius: BORDER_RADIUS.lg, padding: 14,
    marginBottom: 10, alignItems: 'center',
    ...SHADOWS.medium,
  },
  menuItem: {
    backgroundColor: COLORS.surface, borderRadius: BORDER_RADIUS.lg, padding: SPACING.xl,
    flexDirection: 'row', alignItems: 'center', marginBottom: 10,
    ...SHADOWS.medium,
  },
  menuIcon: { fontSize: 24, marginRight: 15 },
  menuTextWrap: { flex: 1 },
  menuText: { fontSize: 16, fontWeight: '500', color: COLORS.textDark },
  menuSubtext: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  menuArrow: { fontSize: 20, color: COLORS.primary },
  logoutButton: {
    backgroundColor: COLORS.destructive, borderRadius: BORDER_RADIUS.lg, padding: 18, alignItems: 'center',
    ...SHADOWS.medium,
  },
  logoutText: { fontSize: 16, fontWeight: 'bold', color: COLORS.textLight },
  versionContainer: { alignItems: 'center', paddingVertical: SPACING.xl },
  versionText: { ...TYPOGRAPHY.caption, color: COLORS.textMuted },
});
