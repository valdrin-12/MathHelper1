import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  Platform,
  Animated,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import { useSavedItems } from '../context/SavedItemsContext';
import { useTheme } from '../context/ThemeContext';
import { isPremiumActive } from '../utils/isPremium';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { ListSection, ListRow, Card, Pill, Button } from './ui';

const { width } = Dimensions.get('window');
const HAIRLINE = StyleSheet.hairlineWidth;

const formatDate = (dateString, t) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  const day = date.getDate();
  const month = t(`months.${date.getMonth()}`);
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

// ─── Circular Progress Ring ───
function CircularProgress({ size = 80, strokeWidth = 6, progress, color, children }) {
  const { colors } = useTheme();

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute' }}>
        {/* Background circle */}
        <View style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: colors.borderLight,
        }} />
      </View>
      <View style={{ position: 'absolute' }}>
        {/* Progress circle - simulated with border */}
        <View style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: 'transparent',
          borderTopColor: color,
          borderRightColor: progress > 0.25 ? color : 'transparent',
          borderBottomColor: progress > 0.5 ? color : 'transparent',
          borderLeftColor: progress > 0.75 ? color : 'transparent',
          transform: [{ rotate: '-90deg' }],
        }} />
      </View>
      {children}
    </View>
  );
}

// ─── Weekly Activity Bar Chart ───
function WeeklyChart({ dailyActivity }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const chartStyles = useMemo(() => makeChartStyles(colors), [colors]);
  const days = [];
  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const activity = dailyActivity?.[key];
    const total = (activity?.problems || 0) + (activity?.courses || 0) + (activity?.quizzes || 0);
    days.push({ label: dayLabels[d.getDay() === 0 ? 6 : d.getDay() - 1], value: total, isToday: i === 0 });
  }

  const maxValue = Math.max(...days.map(d => d.value), 1);

  return (
    <Card style={chartStyles.container}>
      <Text style={chartStyles.title}>{t('profileModal.weeklyActivity')}</Text>
      <View style={chartStyles.chart}>
        {days.map((day, i) => (
          <View key={i} style={chartStyles.barColumn}>
            <View style={chartStyles.barTrack}>
              <View
                style={[
                  chartStyles.bar,
                  { height: `${Math.max((day.value / maxValue) * 100, 8)}%` },
                  !day.isToday && chartStyles.barInactive,
                ]}
              />
            </View>
            {day.value > 0 && (
              <Text style={[chartStyles.barValue, day.isToday && chartStyles.barValueToday]}>{day.value}</Text>
            )}
            <Text style={[chartStyles.barLabel, day.isToday && chartStyles.barLabelToday]}>{day.label}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}

// ─── Achievement Badge ───
function AchievementBadge({ achievement, earned }) {
  const { colors } = useTheme();
  const badgeStyles = useMemo(() => makeBadgeStyles(colors), [colors]);
  const iconMap = {
    first_problem: 'checkmark-circle',
    ten_problems: 'star',
    fifty_problems: 'ribbon',
    first_course: 'book',
    five_courses: 'library',
    first_quiz: 'help-circle',
    five_quizzes: 'trophy',
    streak_3: 'flame',
    streak_7: 'bonfire',
  };
  const colorMap = {
    first_problem: colors.success,
    ten_problems: colors.secondary,
    fifty_problems: colors.purple,
    first_course: colors.primary,
    five_courses: colors.info,
    first_quiz: colors.accent,
    five_quizzes: colors.warningAccent,
    streak_3: colors.secondary,
    streak_7: colors.error,
  };
  const tint = colorMap[achievement.id] || colors.primary;

  return (
    <View style={[badgeStyles.container, !earned && badgeStyles.locked]}>
      <View style={[badgeStyles.iconCircle, { backgroundColor: earned ? tint + '20' : colors.borderLight }]}>
        <Ionicons
          name={iconMap[achievement.id] || 'medal'}
          size={22}
          color={earned ? tint : colors.textMuted}
        />
      </View>
      <Text style={[badgeStyles.title, !earned && badgeStyles.lockedText]} numberOfLines={1}>
        {achievement.title}
      </Text>
      {earned && <Ionicons name="checkmark-circle" size={14} color={colors.success} />}
    </View>
  );
}

export default function ProfileModal({ visible, onClose, onUpgrade }) {
  const { user, logout, updateProfile } = useUser();
  const { completedCoursesCount, completedQuizzesCount, streak, longestStreak, achievements, stats } = useStats();
  const { savedItems } = useSavedItems();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const isPremium = isPremiumActive(user);
  const [showEdit, setShowEdit] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const { t } = useTranslation();

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, friction: 6, tension: 80, useNativeDriver: true }),
      ]).start();
    } else {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.9);
    }
  }, [visible, fadeAnim, scaleAnim]);

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

  useEffect(() => {
    if (!visible) setShowEdit(false);
  }, [visible]);

  if (!user) return null;

  const initials = user.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  const handleEditProfile = () => setShowEdit(true);
  const handleBackFromEdit = () => setShowEdit(false);

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
        if (newPassword.length < 8) {
          Alert.alert(t('common.error'), t('editProfile.newPasswordMinLength'));
          return;
        }
        if (newPassword !== confirmPassword) {
          Alert.alert(t('common.error'), t('auth.validation.passwordsMismatch'));
          return;
        }
      }

      setSaving(true);
      const updates = { name: editName.trim(), email: editEmail.trim() };
      if (newPassword) updates.password = newPassword;

      const result = await updateProfile(updates);
      if (result.success) {
        setShowSuccessPopup(true);
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
      if (confirmed) { await logout(); onClose(); }
    } else {
      Alert.alert(
        t('profileModal.logoutAction'),
        t('profileModal.logoutConfirm'),
        [
          { text: t('common.cancel'), style: 'cancel' },
          { text: t('profileModal.logoutAction'), style: 'destructive', onPress: async () => { await logout(); onClose(); } },
        ]
      );
    }
  };

  // Achievement data
  const earnedAchievements = achievements.filter(a => a.earned);
  const allAchievements = achievements;

  // Progress calculations
  const dailyGoal = 10;
  const todayKey = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })();
  const todayProblems = stats?.dailyActivity?.[todayKey]?.problems || 0;
  const dailyProgress = Math.min(todayProblems / dailyGoal, 1);

  // ─── Edit Profile View ───
  const renderEditView = () => (
    <>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={handleBackFromEdit} style={styles.navButton}>
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
            <TextInput style={styles.input} value={editName} onChangeText={setEditName} placeholder={t('editProfile.namePlaceholder')} placeholderTextColor={colors.textMuted} />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('auth.email')}</Text>
            <TextInput style={styles.input} value={editEmail} onChangeText={setEditEmail} placeholder="email@example.com" placeholderTextColor={colors.textMuted} keyboardType="email-address" autoCapitalize="none" />
          </View>
        </View>
        <View style={styles.formSection}>
          <Text style={styles.formSectionTitle}>{t('editProfile.changePassword')}</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('editProfile.newPassword')}</Text>
            <TextInput style={styles.input} value={newPassword} onChangeText={setNewPassword} placeholder={t('editProfile.newPasswordPlaceholder')} placeholderTextColor={colors.textMuted} secureTextEntry />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{t('editProfile.confirmPassword')}</Text>
            <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} placeholder={t('editProfile.confirmPlaceholder')} placeholderTextColor={colors.textMuted} secureTextEntry />
          </View>
          <Text style={styles.hint}>{t('editProfile.passwordHint')}</Text>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <View style={styles.footer}>
        <Button title={t('editProfile.saveChanges')} onPress={handleSaveProfile} loading={saving} />
        <Button title={t('common.cancel')} variant="plain" onPress={handleBackFromEdit} disabled={saving} />
      </View>
    </>
  );

  // ─── Profile View ───
  const renderProfileView = () => (
    <>
      {/* Sheet nav bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onClose} style={styles.navButton}>
          <Ionicons name="chevron-back" size={26} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>{t('profileModal.title')}</Text>
        <TouchableOpacity onPress={handleEditProfile} style={styles.navButton}>
          <Ionicons name="create-outline" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar + identity */}
        <Animated.View style={[styles.avatarContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>{initials}</Text>
          </View>
          <View style={styles.userNameRow}>
            <Text style={styles.userName}>{user.name}</Text>
            <Pill
              label={isPremium ? 'Premium' : 'Free'}
              icon={isPremium ? 'star' : 'person'}
              color={isPremium ? colors.secondary : colors.textSubtle}
            />
          </View>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.memberBadge}>
            <Ionicons name="calendar-outline" size={12} color={colors.textSubtle} />
            <Text style={styles.memberText}>
              {t('profileModal.memberSince', { date: formatDate(user.createdAt, t) })}
            </Text>
          </View>
        </Animated.View>

        {/* Circular Stats */}
        <Card style={styles.circularStatsRow}>
          <View style={styles.circularStatItem}>
            <CircularProgress size={72} strokeWidth={5} progress={dailyProgress} color={colors.primary}>
              <Text style={styles.circularStatValue}>{savedItems.length}</Text>
            </CircularProgress>
            <Text style={styles.circularStatLabel}>{t('profileModal.problemsSolved')}</Text>
          </View>
          <View style={styles.circularStatItem}>
            <CircularProgress size={72} strokeWidth={5} progress={Math.min(completedQuizzesCount / 10, 1)} color={colors.secondary}>
              <Text style={styles.circularStatValue}>{completedQuizzesCount}</Text>
            </CircularProgress>
            <Text style={styles.circularStatLabel}>{t('profileModal.quizzesCompleted')}</Text>
          </View>
          <View style={styles.circularStatItem}>
            <CircularProgress size={72} strokeWidth={5} progress={Math.min(completedCoursesCount / 10, 1)} color={colors.success}>
              <Text style={styles.circularStatValue}>{completedCoursesCount}</Text>
            </CircularProgress>
            <Text style={styles.circularStatLabel}>{t('profileModal.coursesCompleted')}</Text>
          </View>
        </Card>

        {/* Streak */}
        <ListSection style={styles.tightSection}>
          <ListRow
            icon="flame"
            iconColor={colors.secondary}
            title={t('profileModal.daysStreak', { count: streak })}
            subtitle={t('profileModal.longestStreak', { count: longestStreak })}
          />
        </ListSection>

        {/* Premium Upgrade (only for free users) */}
        {!isPremium && (
          <ListSection style={styles.tightSection}>
            <ListRow
              icon="star"
              iconColor={colors.secondary}
              title={t('profileModal.upgradePremium')}
              subtitle={t('profileModal.upgradePremiumDesc')}
              onPress={() => { onClose(); setTimeout(() => onUpgrade?.(), 400); }}
            />
          </ListSection>
        )}

        {/* Weekly Activity Chart */}
        <WeeklyChart dailyActivity={stats?.dailyActivity} />

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <View style={styles.achievementsHeader}>
            <Text style={styles.sectionTitle}>{t('profileModal.achievements')}</Text>
            <Text style={styles.achievementCountText}>{earnedAchievements.length}/{allAchievements.length}</Text>
          </View>
          <View style={styles.achievementsGrid}>
            {allAchievements.map((a) => (
              <AchievementBadge key={a.id} achievement={a} earned={a.earned} />
            ))}
          </View>
        </View>

        {/* Actions */}
        <ListSection>
          <ListRow
            icon="person"
            iconColor={colors.primary}
            title={t('profileModal.editProfile')}
            subtitle={t('profileModal.editProfileSub')}
            onPress={handleEditProfile}
          />
          <ListRow
            icon="log-out"
            iconColor={colors.destructive}
            title={t('profileModal.logoutAction')}
            subtitle={t('profileModal.logoutSub')}
            destructive
            onPress={handleLogout}
          />
        </ListSection>

        <View style={{ height: 40 }} />
      </ScrollView>
    </>
  );

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={showEdit ? handleBackFromEdit : onClose}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {showEdit ? renderEditView() : renderProfileView()}
        </View>

        {/* Success popup — absolute overlay inside the modal */}
        {showSuccessPopup && (
          <View style={styles.successOverlay}>
            <View style={styles.successCard}>
              <Ionicons name="checkmark-circle" size={52} color={colors.primary} style={{ marginBottom: SPACING.md }} />
              <Text style={styles.successTitle}>{t('common.success')}</Text>
              <Text style={styles.successMessage}>{t('editProfile.profileUpdated')}</Text>
              <TouchableOpacity
                style={styles.successBtn}
                onPress={() => { setShowSuccessPopup(false); setShowEdit(false); }}
              >
                <Text style={styles.successBtnText}>{t('common.ok')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
}

// ─── Main Styles ───
const makeStyles = (colors) => StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1 },
  content: { flex: 1 },

  // Sheet nav bar
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    minHeight: 52,
    backgroundColor: colors.background,
    borderBottomWidth: HAIRLINE,
    borderBottomColor: colors.border,
  },
  navButton: {
    width: 44, height: 44,
    justifyContent: 'center', alignItems: 'center',
  },
  navTitle: {
    flex: 1, ...TYPOGRAPHY.headline, color: colors.text, textAlign: 'center',
  },

  // Avatar + identity
  avatarContainer: {
    alignItems: 'center',
    paddingTop: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
  },
  avatarCircle: {
    width: 88, height: 88, borderRadius: 44,
    backgroundColor: colors.primary,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: SPACING.md,
  },
  avatarInitials: {
    ...TYPOGRAPHY.h1, fontSize: 34, color: '#FFFFFF',
  },
  userNameRow: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.xs,
  },
  userName: {
    ...TYPOGRAPHY.h2, color: colors.text,
  },
  userEmail: {
    ...TYPOGRAPHY.subhead, color: colors.textSubtle, marginBottom: SPACING.sm,
  },
  memberBadge: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.xs + 2,
  },
  memberText: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle,
  },

  // Circular Stats
  circularStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.xxl,
  },
  circularStatItem: {
    alignItems: 'center', gap: SPACING.sm,
  },
  circularStatValue: {
    ...TYPOGRAPHY.headline, fontSize: 18, color: colors.text,
  },
  circularStatLabel: {
    ...TYPOGRAPHY.small, color: colors.textSubtle, fontWeight: '500', textAlign: 'center',
    maxWidth: 80,
  },

  tightSection: {
    marginTop: SPACING.lg,
  },

  // Achievements
  achievementsSection: {
    marginHorizontal: SPACING.lg, marginTop: SPACING.xxl,
  },
  achievementsHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline',
    marginBottom: SPACING.md, paddingHorizontal: SPACING.xs,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3, fontWeight: '700', color: colors.text,
  },
  achievementCountText: {
    ...TYPOGRAPHY.subhead, color: colors.textSubtle,
  },
  achievementsGrid: {
    flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm,
  },

  // Edit form
  formSection: { marginTop: SPACING.xxl, paddingHorizontal: SPACING.lg },
  formSectionTitle: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle, textTransform: 'uppercase',
    marginLeft: SPACING.lg, marginBottom: SPACING.sm,
  },
  inputGroup: { marginBottom: SPACING.md },
  label: { ...TYPOGRAPHY.subhead, color: colors.textSubtle, marginBottom: SPACING.xs + 2, marginLeft: SPACING.xs },
  input: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    minHeight: 48,
    ...TYPOGRAPHY.body,
    color: colors.text,
  },
  hint: { ...TYPOGRAPHY.footnote, color: colors.textSubtle, marginTop: SPACING.xs, marginHorizontal: SPACING.lg },
  footer: {
    padding: SPACING.lg, paddingBottom: SPACING.sm,
    backgroundColor: colors.background,
    borderTopWidth: HAIRLINE, borderTopColor: colors.border,
    gap: SPACING.xs,
  },

  // ─── Success popup (iOS alert style) ───
  successOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxxl,
    zIndex: 999,
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
  successTitle: {
    ...TYPOGRAPHY.headline, color: colors.text,
    marginBottom: SPACING.xs, paddingHorizontal: SPACING.lg,
  },
  successMessage: {
    ...TYPOGRAPHY.footnote, color: colors.textSubtle,
    textAlign: 'center',
    marginBottom: SPACING.xl, paddingHorizontal: SPACING.lg,
  },
  successBtn: {
    alignSelf: 'stretch', minHeight: 44,
    justifyContent: 'center', alignItems: 'center',
    borderTopWidth: HAIRLINE, borderTopColor: colors.border,
  },
  successBtnText: {
    ...TYPOGRAPHY.headline, color: colors.primary,
  },
});

// ─── Chart Styles ───
const makeChartStyles = (colors) => StyleSheet.create({
  container: {
    marginHorizontal: SPACING.lg, marginTop: SPACING.lg,
  },
  title: {
    ...TYPOGRAPHY.headline, color: colors.text, marginBottom: SPACING.lg,
  },
  chart: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 100, gap: SPACING.xs + 2,
  },
  barColumn: {
    flex: 1, alignItems: 'center', gap: SPACING.xs,
  },
  barTrack: {
    width: '100%', height: 80, justifyContent: 'flex-end', borderRadius: 6, overflow: 'hidden',
    backgroundColor: colors.inputBg,
  },
  bar: {
    width: '100%', borderRadius: 6, minHeight: 6, backgroundColor: colors.primary,
  },
  barInactive: {
    opacity: 0.35,
  },
  barValue: {
    ...TYPOGRAPHY.small, fontSize: 10, fontWeight: '600', color: colors.textSubtle,
  },
  barValueToday: {
    color: colors.primary,
  },
  barLabel: {
    ...TYPOGRAPHY.small, fontWeight: '500', color: colors.textMuted,
  },
  barLabelToday: {
    color: colors.primary, fontWeight: '700',
  },
});

// ─── Badge Styles ───
const makeBadgeStyles = (colors) => StyleSheet.create({
  container: {
    width: (width - SPACING.lg * 2 - SPACING.sm * 2) / 3,
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    gap: SPACING.xs + 2,
  },
  locked: {
    opacity: 0.5,
  },
  iconCircle: {
    width: 42, height: 42, borderRadius: 21,
    justifyContent: 'center', alignItems: 'center',
  },
  title: {
    ...TYPOGRAPHY.small, fontSize: 10, fontWeight: '600', color: colors.text, textAlign: 'center',
  },
  lockedText: {
    color: colors.textMuted,
  },
});
