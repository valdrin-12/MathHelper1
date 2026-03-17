import React, { useState, useEffect, useRef } from 'react';
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
  Animated,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import { useSavedItems } from '../context/SavedItemsContext';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

const { width } = Dimensions.get('window');

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
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute' }}>
        {/* Background circle */}
        <View style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: COLORS.inputBorder,
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
    <View style={chartStyles.container}>
      <Text style={chartStyles.title}>{t('profileModal.weeklyActivity')}</Text>
      <View style={chartStyles.chart}>
        {days.map((day, i) => (
          <View key={i} style={chartStyles.barColumn}>
            <View style={chartStyles.barTrack}>
              <LinearGradient
                colors={day.isToday ? [COLORS.primarySoft, COLORS.primaryLight] : [COLORS.primaryBg, COLORS.primaryBg]}
                style={[
                  chartStyles.bar,
                  { height: `${Math.max((day.value / maxValue) * 100, 8)}%` },
                  day.isToday && chartStyles.barToday,
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
    </View>
  );
}

// ─── Achievement Badge ───
function AchievementBadge({ achievement, earned }) {
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
    first_problem: COLORS.success,
    ten_problems: COLORS.secondary,
    fifty_problems: COLORS.purple,
    first_course: COLORS.primarySoft,
    five_courses: COLORS.info,
    first_quiz: COLORS.accent,
    five_quizzes: '#F59E0B',
    streak_3: '#F97316',
    streak_7: '#EF4444',
  };

  return (
    <View style={[badgeStyles.container, !earned && badgeStyles.locked]}>
      <View style={[badgeStyles.iconCircle, { backgroundColor: earned ? colorMap[achievement.id] + '20' : COLORS.borderLight }]}>
        <Ionicons
          name={iconMap[achievement.id] || 'medal'}
          size={22}
          color={earned ? colorMap[achievement.id] : COLORS.textMuted}
        />
      </View>
      <Text style={[badgeStyles.title, !earned && badgeStyles.lockedText]} numberOfLines={1}>
        {achievement.title}
      </Text>
      {earned && <Ionicons name="checkmark-circle" size={14} color={COLORS.success} />}
    </View>
  );
}

export default function ProfileModal({ visible, onClose, onUpgrade }) {
  const { user, logout, updateProfile } = useUser();
  const { completedCoursesCount, completedQuizzesCount, streak, longestStreak, achievements, stats } = useStats();
  const { savedItems } = useSavedItems();
  const [showEdit, setShowEdit] = useState(false);
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
      const updates = { name: editName.trim(), email: editEmail.trim() };
      if (newPassword) updates.password = newPassword;

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
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackFromEdit} style={styles.backButton}>
          <Ionicons name="chevron-back" size={22} color={COLORS.textSubtle} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('editProfile.title')}</Text>
        <View style={{ width: 36 }} />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={editStyles.section}>
          <Text style={editStyles.sectionTitle}>{t('editProfile.personalInfo')}</Text>
          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('editProfile.fullName')}</Text>
            <TextInput style={editStyles.input} value={editName} onChangeText={setEditName} placeholder={t('editProfile.namePlaceholder')} placeholderTextColor={COLORS.textMuted} />
          </View>
          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('auth.email')}</Text>
            <TextInput style={editStyles.input} value={editEmail} onChangeText={setEditEmail} placeholder="email@example.com" placeholderTextColor={COLORS.textMuted} keyboardType="email-address" autoCapitalize="none" />
          </View>
        </View>
        <View style={editStyles.section}>
          <Text style={editStyles.sectionTitle}>{t('editProfile.changePassword')}</Text>
          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('editProfile.newPassword')}</Text>
            <TextInput style={editStyles.input} value={newPassword} onChangeText={setNewPassword} placeholder={t('editProfile.newPasswordPlaceholder')} placeholderTextColor={COLORS.textMuted} secureTextEntry />
          </View>
          <View style={editStyles.inputGroup}>
            <Text style={editStyles.label}>{t('editProfile.confirmPassword')}</Text>
            <TextInput style={editStyles.input} value={confirmPassword} onChangeText={setConfirmPassword} placeholder={t('editProfile.confirmPlaceholder')} placeholderTextColor={COLORS.textMuted} secureTextEntry />
          </View>
          <Text style={editStyles.hint}>{t('editProfile.passwordHint')}</Text>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <View style={editStyles.footer}>
        <TouchableOpacity style={[editStyles.saveButton, saving && editStyles.saveButtonDisabled]} onPress={handleSaveProfile} disabled={saving}>
          {saving ? <ActivityIndicator color={COLORS.textLight} /> : <Text style={editStyles.saveButtonText}>{t('editProfile.saveChanges')}</Text>}
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
      {/* Gradient Header with Avatar */}
      <LinearGradient
        colors={[COLORS.primary, COLORS.primarySoft, COLORS.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.profileHeader}
      >
        <View style={styles.profileHeaderTop}>
          <TouchableOpacity onPress={onClose} style={styles.headerBackBtn}>
            <Ionicons name="chevron-back" size={22} color="rgba(255,255,255,0.9)" />
          </TouchableOpacity>
          <Text style={styles.profileHeaderTitle}>{t('profileModal.title')}</Text>
          <TouchableOpacity onPress={handleEditProfile} style={styles.headerEditBtn}>
            <Ionicons name="create-outline" size={20} color="rgba(255,255,255,0.9)" />
          </TouchableOpacity>
        </View>

        <Animated.View style={[styles.avatarContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.avatarRing}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarInitials}>{initials}</Text>
            </View>
          </View>
          <View style={styles.userNameRow}>
            <Text style={styles.userName}>{user.name}</Text>
            <View style={[styles.tierBadge, user.tier === 'premium' ? styles.tierPremium : styles.tierFree]}>
              <Ionicons name={user.tier === 'premium' ? 'star' : 'person'} size={10} color={user.tier === 'premium' ? '#92400E' : '#FFFFFF'} />
              <Text style={[styles.tierBadgeText, user.tier === 'premium' && styles.tierPremiumText]}>
                {user.tier === 'premium' ? 'Premium' : 'Free'}
              </Text>
            </View>
          </View>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.memberBadge}>
            <Ionicons name="calendar-outline" size={12} color="rgba(255,255,255,0.8)" />
            <Text style={styles.memberText}>
              {t('profileModal.memberSince', { date: formatDate(user.createdAt, t) })}
            </Text>
          </View>
        </Animated.View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Circular Stats */}
        <View style={styles.circularStatsRow}>
          <View style={styles.circularStatItem}>
            <CircularProgress size={72} strokeWidth={5} progress={dailyProgress} color={COLORS.primarySoft}>
              <Text style={styles.circularStatValue}>{savedItems.length}</Text>
            </CircularProgress>
            <Text style={styles.circularStatLabel}>{t('profileModal.problemsSolved')}</Text>
          </View>
          <View style={styles.circularStatItem}>
            <CircularProgress size={72} strokeWidth={5} progress={Math.min(completedQuizzesCount / 10, 1)} color={COLORS.secondary}>
              <Text style={styles.circularStatValue}>{completedQuizzesCount}</Text>
            </CircularProgress>
            <Text style={styles.circularStatLabel}>{t('profileModal.quizzesCompleted')}</Text>
          </View>
          <View style={styles.circularStatItem}>
            <CircularProgress size={72} strokeWidth={5} progress={Math.min(completedCoursesCount / 10, 1)} color={COLORS.success}>
              <Text style={styles.circularStatValue}>{completedCoursesCount}</Text>
            </CircularProgress>
            <Text style={styles.circularStatLabel}>{t('profileModal.coursesCompleted')}</Text>
          </View>
        </View>

        {/* Streak Card */}
        <View style={styles.streakCard}>
          <View style={styles.streakIconBox}>
            <Ionicons name="flame" size={28} color="#F97316" />
          </View>
          <View style={styles.streakInfo}>
            <Text style={styles.streakValue}>{t('profileModal.daysStreak', { count: streak })}</Text>
            <Text style={styles.streakBest}>{t('profileModal.longestStreak', { count: longestStreak })}</Text>
          </View>
        </View>

        {/* Premium Upgrade Card (only for free users) */}
        {user.tier !== 'premium' && (
          <TouchableOpacity
            style={styles.premiumCard}
            onPress={() => { onClose(); setTimeout(() => onUpgrade?.(), 400); }}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#F59E0B', '#D97706']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.premiumGradient}
            >
              <View style={styles.premiumLeft}>
                <View style={styles.premiumIconBox}>
                  <Ionicons name="star" size={24} color="#F59E0B" />
                </View>
                <View style={styles.premiumTextBox}>
                  <Text style={styles.premiumTitle}>{t('profileModal.upgradePremium')}</Text>
                  <Text style={styles.premiumDesc}>{t('profileModal.upgradePremiumDesc')}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.8)" />
            </LinearGradient>
          </TouchableOpacity>
        )}

        {/* Weekly Activity Chart */}
        <WeeklyChart dailyActivity={stats?.dailyActivity} />

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <View style={styles.achievementsHeader}>
            <Text style={styles.sectionTitle}>{t('profileModal.achievements')}</Text>
            <View style={styles.achievementCount}>
              <Text style={styles.achievementCountText}>{earnedAchievements.length}/{allAchievements.length}</Text>
            </View>
          </View>
          <View style={styles.achievementsGrid}>
            {allAchievements.map((a) => (
              <AchievementBadge key={a.id} achievement={a} earned={a.earned} />
            ))}
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.actionCard} onPress={handleEditProfile}>
            <View style={[styles.actionIconBox, { backgroundColor: COLORS.primaryBg }]}>
              <Ionicons name="person-outline" size={20} color={COLORS.primarySoft} />
            </View>
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>{t('profileModal.editProfile')}</Text>
              <Text style={styles.actionSub}>{t('profileModal.editProfileSub')}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={handleLogout}>
            <View style={[styles.actionIconBox, { backgroundColor: COLORS.errorLight }]}>
              <Ionicons name="log-out-outline" size={20} color={COLORS.error} />
            </View>
            <View style={styles.actionTextBox}>
              <Text style={[styles.actionTitle, { color: COLORS.error }]}>{t('profileModal.logoutAction')}</Text>
              <Text style={styles.actionSub}>{t('profileModal.logoutSub')}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>
        </View>

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
      </SafeAreaView>
    </Modal>
  );
}

// ─── Main Styles ───
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1 },
  content: { flex: 1 },

  // Header (edit mode)
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
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: COLORS.tabBg,
    justifyContent: 'center', alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20, fontWeight: '700', color: COLORS.text,
  },

  // Profile Header
  profileHeader: {
    paddingTop: 14,
    paddingBottom: 30,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  profileHeaderTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 16,
  },
  headerBackBtn: {
    width: 38, height: 38, borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)',
  },
  profileHeaderTitle: {
    fontSize: 18, fontWeight: '700', color: '#FFFFFF',
  },
  headerEditBtn: {
    width: 38, height: 38, borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatarRing: {
    width: 100, height: 100, borderRadius: 50,
    borderWidth: 3, borderColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 14,
  },
  avatarCircle: {
    width: 88, height: 88, borderRadius: 44,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center', alignItems: 'center',
  },
  avatarInitials: {
    fontSize: 36, fontWeight: '800', color: '#FFFFFF',
  },
  userNameRow: {
    flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4,
  },
  userName: {
    fontSize: 24, fontWeight: '800', color: '#FFFFFF',
  },
  tierBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12,
  },
  tierFree: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  tierPremium: {
    backgroundColor: '#FDE68A',
  },
  tierBadgeText: {
    fontSize: 11, fontWeight: '700', color: '#FFFFFF',
  },
  tierPremiumText: {
    color: '#92400E',
  },
  userEmail: {
    fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: '500', marginBottom: 12,
  },
  memberBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)',
  },
  memberText: {
    fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: '600',
  },

  // Circular Stats
  circularStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginHorizontal: 18,
    marginTop: -16,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    ...SHADOWS.medium,
  },
  circularStatItem: {
    alignItems: 'center', gap: 8,
  },
  circularStatValue: {
    fontSize: 18, fontWeight: '800', color: COLORS.text,
  },
  circularStatLabel: {
    fontSize: 11, color: COLORS.textSubtle, fontWeight: '600', textAlign: 'center',
    maxWidth: 80,
  },

  // Streak
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 18,
    gap: 14,
    ...SHADOWS.soft,
  },
  streakIconBox: {
    width: 52, height: 52, borderRadius: 16,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center', alignItems: 'center',
  },
  streakInfo: { flex: 1 },
  streakValue: {
    fontSize: 18, fontWeight: '800', color: COLORS.text, marginBottom: 2,
  },
  streakBest: {
    fontSize: 13, color: COLORS.textSubtle, fontWeight: '500',
  },

  // Premium Card
  premiumCard: {
    marginHorizontal: 18, marginTop: 16, borderRadius: 18, overflow: 'hidden',
    ...SHADOWS.medium,
  },
  premiumGradient: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: 18, borderRadius: 18,
  },
  premiumLeft: {
    flexDirection: 'row', alignItems: 'center', gap: 14, flex: 1,
  },
  premiumIconBox: {
    width: 48, height: 48, borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center', alignItems: 'center',
  },
  premiumTextBox: { flex: 1 },
  premiumTitle: {
    fontSize: 16, fontWeight: '800', color: '#FFFFFF', marginBottom: 2,
  },
  premiumDesc: {
    fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: '500',
  },

  // Achievements
  achievementsSection: {
    marginHorizontal: 18, marginTop: 20,
  },
  achievementsHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18, fontWeight: '800', color: COLORS.text, letterSpacing: -0.3,
  },
  achievementCount: {
    backgroundColor: COLORS.primaryBg, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12,
  },
  achievementCountText: {
    fontSize: 13, fontWeight: '700', color: COLORS.primarySoft,
  },
  achievementsGrid: {
    flexDirection: 'row', flexWrap: 'wrap', gap: 10,
  },

  // Actions
  actionsSection: {
    marginHorizontal: 18, marginTop: 20, gap: 10,
  },
  actionCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: COLORS.surface, borderRadius: 16, padding: 16, gap: 14,
    ...SHADOWS.soft,
  },
  actionIconBox: {
    width: 44, height: 44, borderRadius: 14,
    justifyContent: 'center', alignItems: 'center',
  },
  actionTextBox: { flex: 1 },
  actionTitle: {
    fontSize: 15, fontWeight: '700', color: COLORS.text, marginBottom: 2,
  },
  actionSub: {
    fontSize: 12, color: COLORS.textSubtle, fontWeight: '500',
  },
});

// ─── Chart Styles ───
const chartStyles = StyleSheet.create({
  container: {
    marginHorizontal: 18, marginTop: 16,
    backgroundColor: COLORS.surface, borderRadius: 20, padding: 20,
    ...SHADOWS.soft,
  },
  title: {
    fontSize: 16, fontWeight: '700', color: COLORS.text, marginBottom: 16,
  },
  chart: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 100, gap: 6,
  },
  barColumn: {
    flex: 1, alignItems: 'center', gap: 4,
  },
  barTrack: {
    width: '100%', height: 80, justifyContent: 'flex-end', borderRadius: 6, overflow: 'hidden',
    backgroundColor: COLORS.inputBg,
  },
  bar: {
    width: '100%', borderRadius: 6, minHeight: 6,
  },
  barToday: {
    ...SHADOWS.small,
  },
  barValue: {
    fontSize: 10, fontWeight: '700', color: COLORS.textSubtle,
  },
  barValueToday: {
    color: COLORS.primarySoft,
  },
  barLabel: {
    fontSize: 11, fontWeight: '600', color: COLORS.textMuted,
  },
  barLabelToday: {
    color: COLORS.primarySoft, fontWeight: '800',
  },
});

// ─── Badge Styles ───
const badgeStyles = StyleSheet.create({
  container: {
    width: (width - 36 - 30) / 3,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
  },
  locked: {
    opacity: 0.5,
  },
  iconCircle: {
    width: 42, height: 42, borderRadius: 21,
    justifyContent: 'center', alignItems: 'center',
  },
  title: {
    fontSize: 10, fontWeight: '700', color: COLORS.text, textAlign: 'center',
  },
  lockedText: {
    color: COLORS.textMuted,
  },
});

// ─── Edit Styles ───
const editStyles = StyleSheet.create({
  section: { marginBottom: 30, paddingHorizontal: SPACING.xl },
  sectionTitle: { ...TYPOGRAPHY.bodyLargeBold, color: COLORS.text, marginBottom: SPACING.lg, marginTop: SPACING.xl },
  inputGroup: { marginBottom: SPACING.lg },
  label: { ...TYPOGRAPHY.label, color: '#4B5563', marginBottom: SPACING.sm },
  input: {
    backgroundColor: COLORS.surface, borderWidth: 1.5, borderColor: COLORS.inputBorder,
    borderRadius: BORDER_RADIUS.md, padding: 14, ...TYPOGRAPHY.body, color: COLORS.text,
  },
  hint: { ...TYPOGRAPHY.caption, color: COLORS.textSubtle, marginTop: SPACING.sm, lineHeight: 18 },
  footer: {
    padding: SPACING.xl, paddingBottom: 10, backgroundColor: COLORS.surface,
    borderTopWidth: 1, borderTopColor: COLORS.inputBorder, gap: 10,
  },
  saveButton: {
    backgroundColor: COLORS.primary, borderRadius: BORDER_RADIUS.md, paddingVertical: SPACING.lg,
    alignItems: 'center', ...SHADOWS.primary,
  },
  saveButtonDisabled: { opacity: 0.6 },
  saveButtonText: { ...TYPOGRAPHY.bodyLargeBold, color: COLORS.textLight },
  cancelButton: {
    backgroundColor: COLORS.tabBg, borderRadius: BORDER_RADIUS.md, paddingVertical: SPACING.lg,
    alignItems: 'center',
  },
  cancelButtonText: { ...TYPOGRAPHY.button, color: COLORS.primary },
});
