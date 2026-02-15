import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import { useSavedItems } from '../context/SavedItemsContext';
import EditProfileModal from './EditProfileModal';
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
  const { user, logout } = useUser();
  const { completedCoursesCount, completedQuizzesCount } = useStats();
  const { savedItems } = useSavedItems();
  const [showEditModal, setShowEditModal] = useState(false);
  const { t } = useTranslation();

  if (!user) return null;

  const initials = user.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleLogout = async () => {
    console.log('[ProfileModal] handleLogout thirret');

    // Use window.confirm for web, Alert.alert for native
    if (Platform.OS === 'web') {
      const confirmed = window.confirm(t('profileModal.logoutConfirm'));
      console.log('[ProfileModal] Web confirm result:', confirmed);
      if (confirmed) {
        console.log('[ProfileModal] User konfirmoi logout - duke thirrur logout()...');
        await logout();
        console.log('[ProfileModal] logout() u krye, duke mbyllur modal...');
        onClose();
      } else {
        console.log('[ProfileModal] User anuloi logout');
      }
    } else {
      Alert.alert(
        t('profileModal.logoutAction'),
        t('profileModal.logoutConfirm'),
        [
          {
            text: t('common.cancel'),
            style: 'cancel',
            onPress: () => console.log('[ProfileModal] User anuloi logout')
          },
          {
            text: t('profileModal.logoutAction'),
            style: 'destructive',
            onPress: async () => {
              console.log('[ProfileModal] User konfirmoi logout - duke thirrur logout()...');
              await logout();
              console.log('[ProfileModal] logout() u krye, duke mbyllur modal...');
              onClose();
            },
          },
        ]
      );
    }
  };

  return (
    <>
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={onClose}
      >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Titulli */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={onClose} style={styles.backButton}>
                <Ionicons name="chevron-back" size={22} color={COLORS.textSubtle} />
              </TouchableOpacity>
              <Text style={styles.headerTitle} numberOfLines={1}>{t('profileModal.title')}</Text>
            </View>
          </View>

          {/* Përmbajtja */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Seksioni i Avatarit */}
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

            {/* Seksioni i Statistikave */}
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

            {/* Seksioni i Veprimeve */}
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
        </View>
      </SafeAreaView>
    </Modal>

    <EditProfileModal
      visible={showEditModal}
      onClose={() => setShowEditModal(false)}
    />
    </>
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

  // Titulli
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

  // Përmbajtja
  content: {
    flex: 1,
  },

  // Avatari
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

  // Seksioni
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

  // Statistikat
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

  // Veprimet
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
