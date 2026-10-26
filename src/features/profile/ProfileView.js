import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../auth/UserContext';
import { useStats } from '../progress/StatsContext';
import { useSavedItems } from '../saved/SavedItemsContext';
import { useTheme } from '../../shared/theme/ThemeContext';
import { isPremiumActive } from '../premium/isPremium';
import { useProgress } from '../progress/progress';
import { useLocalizedQuizzes } from '../../content/useLocalizedData';
import { ListSection, ListRow, Card, Pill, confirmAction } from '../../shared/ui';
import { useProfileStyles } from './profileStyles';
import CircularProgress from './CircularProgress';
import WeeklyChart from './WeeklyChart';
import AchievementBadge from './AchievementBadge';
import LevelCard from './LevelCard';
import MasteryList from './MasteryList';

const formatDate = (dateString, t) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  const day = date.getDate();
  const month = t(`months.${date.getMonth()}`);
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

// The profile page: identity, level, stats, streak, weekly chart, mastery, achievements and account actions.
// fadeAnim / scaleAnim belong to the sheet so the avatar animates only when the sheet opens.
export default function ProfileView({ fadeAnim, scaleAnim, onClose, onEdit, onUpgrade }) {
  const { t } = useTranslation();
  const { user, logout } = useUser();
  const {
    completedCoursesCount, completedQuizzesCount, streak, longestStreak, achievements, earnedAchievementsCount, stats, todayKey,
  } = useStats();
  const { savedItems } = useSavedItems();
  const { colors } = useTheme();
  const styles = useProfileStyles();
  const isPremium = isPremiumActive(user);
  const { quizSets } = useLocalizedQuizzes();
  const { xp, level, mastery } = useProgress(stats, user?.id, quizSets);

  const initials = user.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  const handleLogout = async () => {
    const confirmed = await confirmAction({
      title: t('profileModal.logoutAction'),
      message: t('profileModal.logoutConfirm'),
      confirmText: t('profileModal.logoutAction'),
      cancelText: t('common.cancel'),
      destructive: true,
    });
    if (confirmed) {
      await logout();
      onClose();
    }
  };

  // Progress calculations
  const dailyGoal = 10;
  const todayProblems = stats?.dailyActivity?.[todayKey]?.problems || 0;
  const dailyProgress = Math.min(todayProblems / dailyGoal, 1);

  return (
    <>
      {/* Sheet nav bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onClose} style={styles.navButton} accessibilityRole="button" accessibilityLabel={t('a11y.close')}>
          <Ionicons name="chevron-back" size={26} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>{t('profileModal.title')}</Text>
        <TouchableOpacity onPress={onEdit} style={styles.navButton} accessibilityRole="button" accessibilityLabel={t('profileModal.editProfile')}>
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
              label={isPremium ? t('profileModal.premiumBadge') : t('profileModal.freeBadge')}
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

        {/* Level + XP */}
        <LevelCard level={level} xp={xp.total} />

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

        {/* Mastery per topic */}
        <MasteryList mastery={mastery} />

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <View style={styles.achievementsHeader}>
            <Text style={styles.sectionTitle}>{t('profileModal.achievements')}</Text>
            <Text style={styles.achievementCountText}>{earnedAchievementsCount}/{achievements.length}</Text>
          </View>
          <View style={styles.achievementsGrid}>
            {achievements.map((a) => (
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
            onPress={onEdit}
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
}
