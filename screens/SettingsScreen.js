import { useState } from 'react';
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
import { useTheme } from '../context/ThemeContext';
import InfoModal from '../components/InfoModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';
import WebContainer from '../components/WebContainer';
import { useResponsive } from '../utils/responsive';

export default function SettingsScreen() {
  const { isWeb } = useResponsive();
  const { t } = useTranslation();
  const { user, logout } = useUser();
  const { completedCoursesCount, completedQuizzesCount, streak, achievements } = useStats();
  const { isDark, toggleTheme, colors } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [infoModal, setInfoModal] = useState(null);

  const handleLogout = async () => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm(t('settings.logoutConfirm'));
      if (confirmed) await logout();
    } else {
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
    }
  };

  const initials = user?.name
    ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  const SettingToggle = ({ icon, iconColor, iconBg, title, description, value, onValueChange }) => (
    <View style={[styles.settingCard, { backgroundColor: colors.surface }]}>
      <View style={[styles.settingIconBox, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <View style={styles.settingTextWrap}>
        <Text style={[styles.settingTitle, { color: colors.text }]} numberOfLines={1}>{title}</Text>
        {description && <Text style={[styles.settingDesc, { color: colors.textMuted }]} numberOfLines={2}>{description}</Text>}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.border, true: colors.primary + '60' }}
        thumbColor={value ? colors.primary : colors.surface}
        ios_backgroundColor={colors.border}
      />
    </View>
  );

  const MenuItem = ({ icon, iconColor, iconBg, title, subtitle, onPress }) => (
    <TouchableOpacity
      style={[styles.menuCard, { backgroundColor: colors.surface }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.settingIconBox, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <View style={styles.menuTextWrap}>
        <Text style={[styles.menuTitle, { color: colors.text }]}>{title}</Text>
        {subtitle && <Text style={[styles.menuSubtitle, { color: colors.textMuted }]}>{subtitle}</Text>}
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={[colors.primary || COLORS.primary, colors.primarySoft || COLORS.primarySoft, colors.primaryLight || COLORS.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.headerGradient, isWeb && { paddingTop: 20 }]}
      >
        <Text style={styles.headerTitle}>{t('settings.title')}</Text>
        <Text style={styles.headerSubtitle}>{t('settings.subtitle')}</Text>

        {/* Profile Card inside header */}
        <View style={styles.glassProfileCard}>
          <LinearGradient
            colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0.1)']}
            style={styles.profileAvatar}
          >
            <Text style={styles.profileAvatarText}>{initials}</Text>
          </LinearGradient>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user?.name || t('settings.user')}</Text>
            <Text style={styles.profileEmail}>{user?.email || ''}</Text>
          </View>
          <View style={styles.profileStats}>
            <View style={styles.profileStatItem}>
              <Ionicons name="flame" size={14} color="rgba(255,255,255,0.8)" />
              <Text style={styles.profileStatText}>{streak}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <WebContainer maxWidth={600}>
      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('settings.preferences')}</Text>

        <SettingToggle
          icon="notifications"
          iconColor="#3B82F6"
          iconBg={colors.primaryBg}
          title={t('settings.notifications')}
          description={t('settings.notificationsDesc')}
          value={notifications}
          onValueChange={setNotifications}
        />

        <SettingToggle
          icon="moon"
          iconColor="#8B5CF6"
          iconBg={colors.purpleLight}
          title={t('settings.darkMode')}
          description={t('settings.darkModeDesc')}
          value={isDark}
          onValueChange={toggleTheme}
        />

        <SettingToggle
          icon="volume-high"
          iconColor="#F59E0B"
          iconBg={isDark ? 'rgba(245,158,11,0.12)' : '#FFF7ED'}
          title={t('settings.soundEffects')}
          description={t('settings.soundEffectsDesc')}
          value={soundEffects}
          onValueChange={setSoundEffects}
        />

        <View style={[styles.settingCard, { backgroundColor: colors.surface }]}>
          <View style={[styles.settingIconBox, { backgroundColor: isDark ? 'rgba(6,182,212,0.12)' : '#ECFEFF' }]}>
            <Ionicons name="globe" size={20} color="#06B6D4" />
          </View>
          <View style={styles.settingTextWrap}>
            <Text style={[styles.settingTitle, { color: colors.text }]} numberOfLines={1}>{t('settings.language')}</Text>
            <Text style={[styles.settingDesc, { color: colors.textMuted }]} numberOfLines={2}>{t('settings.languageDesc')}</Text>
          </View>
        </View>
        <View style={[styles.languageRow, { backgroundColor: colors.primary || COLORS.primary }]}>
          <LanguageSwitcher />
        </View>
      </View>

      {/* Learning Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('settings.learning')}</Text>

        <MenuItem
          icon="flag"
          iconColor="#F59E0B"
          iconBg={isDark ? 'rgba(245,158,11,0.12)' : '#FFF7ED'}
          title={t('settings.dailyGoals')}
          subtitle={streak > 0 ? t('settings.todayStreak', { streak }) : t('settings.startToday')}
          onPress={() => setInfoModal('goals')}
        />
        <MenuItem
          icon="bar-chart"
          iconColor="#3B82F6"
          iconBg={colors.primaryBg}
          title={t('settings.progressStats')}
          subtitle={t('settings.coursesQuizzes', { courses: completedCoursesCount, quizzes: completedQuizzesCount })}
          onPress={() => setInfoModal('stats')}
        />
        <MenuItem
          icon="trophy"
          iconColor="#F59E0B"
          iconBg={isDark ? 'rgba(245,158,11,0.12)' : '#FFF7ED'}
          title={t('settings.achievements')}
          subtitle={t('settings.achievementsCount', { count: achievements.length })}
          onPress={() => setInfoModal('achievements')}
        />
      </View>

      {/* Other Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('settings.other')}</Text>

        <MenuItem
          icon="help-circle"
          iconColor="#10B981"
          iconBg={isDark ? 'rgba(16,185,129,0.12)' : '#ECFDF5'}
          title={t('settings.helpSupport')}
          onPress={() => setInfoModal('help')}
        />
        <MenuItem
          icon="document-text"
          iconColor="#64748B"
          iconBg={isDark ? 'rgba(100,116,139,0.12)' : '#F1F5F9'}
          title={t('settings.termsOfService')}
          onPress={() => setInfoModal('terms')}
        />
        <MenuItem
          icon="shield-checkmark"
          iconColor="#8B5CF6"
          iconBg={colors.purpleLight}
          title={t('settings.privacyPolicy')}
          onPress={() => setInfoModal('privacy')}
        />
        <MenuItem
          icon="information-circle"
          iconColor="#3B82F6"
          iconBg={colors.primaryBg}
          title={t('settings.aboutApp')}
          onPress={() => setInfoModal('about')}
        />
      </View>

      {/* Logout */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Ionicons name="log-out-outline" size={20} color="#FFFFFF" />
          <Text style={styles.logoutText}>{t('settings.logout')}</Text>
        </TouchableOpacity>
      </View>

      {/* Version */}
      <View style={styles.versionContainer}>
        <Text style={[styles.versionText, { color: colors.textMuted }]}>{t('settings.version')}</Text>
      </View>

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

  // Header
  headerGradient: {
    paddingHorizontal: SPACING.xl,
    paddingTop: 60,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    marginBottom: 20,
  },

  // Glass Profile Card
  glassProfileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  profileAvatar: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  profileAvatarText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  profileStats: {
    flexDirection: 'row',
    gap: 8,
  },
  profileStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  profileStatText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // Sections
  section: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginBottom: 14,
  },

  // Setting Toggle Card
  settingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
    ...SHADOWS.soft,
  },
  settingIconBox: {
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  settingTextWrap: {
    flex: 1,
    marginRight: 10,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingDesc: {
    fontSize: 12,
    lineHeight: 16,
  },

  // Language
  languageRow: {
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    alignItems: 'center',
    ...SHADOWS.medium,
  },

  // Menu Item
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
    ...SHADOWS.soft,
  },
  menuTextWrap: {
    flex: 1,
    marginRight: 10,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
  },

  // Logout
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF4444',
    borderRadius: 18,
    padding: 18,
    gap: 8,
    ...SHADOWS.medium,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // Version
  versionContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  versionText: {
    fontSize: 13,
  },
});
