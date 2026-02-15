import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import * as ImagePicker from 'expo-image-picker';
import * as imageService from '../services/imageService';
import * as geminiService from '../services/geminiService';
import LoadingOverlay from '../components/LoadingOverlay';
import ResultsModal from '../components/ResultsModal';
import { useSavedItems } from '../context/SavedItemsContext';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import ProfileModal from '../components/ProfileModal';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

const { width } = Dimensions.get('window');

const getGreeting = (t) => {
  const hour = new Date().getHours();
  if (hour < 12) return t('dashboard.greetingMorning');
  if (hour < 18) return t('dashboard.greetingAfternoon');
  return t('dashboard.greetingEvening');
};

export default function DashboardScreen() {
  const { t } = useTranslation();
  const { addItem, savedItems } = useSavedItems();
  const { user } = useUser();
  const { todayProblems, completedCoursesCount, completedQuizzesCount, streak, recordProblemSolved } = useStats();
  const [inputMode, setInputMode] = useState('keyboard'); // 'keyboard' or 'camera'
  const [mathProblemText, setMathProblemText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lastBase64, setLastBase64] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const greeting = getGreeting(t);
  const displayName = user?.name ? user.name.split(' ')[0] : t('common.friend');

  const dailyGoal = 10;
  const dailyProgress = Math.min(todayProblems, dailyGoal);
  const progressPercent = (dailyProgress / dailyGoal) * 100;

  const recentItems = useMemo(() => savedItems.slice(0, 3), [savedItems]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(t('dashboard.permissionNeeded'), t('dashboard.galleryPermission'));
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(t('dashboard.permissionNeeded'), t('dashboard.cameraPermission'));
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setLastBase64(null);
  };

  const handleAnalyzeProblem = async () => {
    try {
      if (inputMode === 'keyboard') {
        if (!mathProblemText.trim()) {
          Alert.alert(t('common.attention'), t('dashboard.enterProblem'));
          return;
        }
        setIsAnalyzing(true);
        const result = await geminiService.analyzeMathProblemFromText(mathProblemText);
        setAnalysisResult(result);
        setShowResultModal(true);
      } else {
        if (!selectedImage) {
          Alert.alert(t('common.attention'), t('dashboard.selectPhoto'));
          return;
        }
        setIsAnalyzing(true);
        const { base64, mimeType } = await imageService.convertImageToBase64(selectedImage);
        setLastBase64(base64);
        const result = await geminiService.analyzeMathProblem(base64, mimeType);
        setAnalysisResult(result);
        setShowResultModal(true);
      }
    } catch (error) {
      console.error('Gabim gjatë analizës:', error);
      Alert.alert(t('common.error'), error.message || t('dashboard.analysisError'));
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSaveResult = async () => {
    try {
      if (!analysisResult) {
        throw new Error(t('dashboard.noResultsToSave'));
      }
      const savedItem = {
        imageData: inputMode === 'camera' ? lastBase64 : null,
        problemText: inputMode === 'keyboard' ? mathProblemText : null,
        answer: analysisResult.answer,
        steps: analysisResult.steps,
        explanation: analysisResult.explanation,
      };
      await addItem(savedItem);
      await recordProblemSolved();
    } catch (error) {
      console.error('Gabim gjatë ruajtjes:', error);
      throw error;
    }
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return t('dashboard.timeNow');
    if (diffMins < 60) return t('dashboard.timeMinutes', { count: diffMins });
    if (diffHours < 24) return t('dashboard.timeHours', { count: diffHours });
    return t('dashboard.timeDays', { count: diffDays });
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerGreeting}>{greeting}, {displayName}! 👋</Text>
            <Text style={styles.headerQuestion}>{t('dashboard.readyToLearn')}</Text>
          </View>
          <TouchableOpacity style={styles.avatarButton} onPress={() => setShowProfile(true)}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{user?.name ? user.name[0].toUpperCase() : '👤'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Scan Card */}
        <View style={styles.scanCard}>
          {/* Tab Switcher */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, inputMode === 'keyboard' && styles.tabActive]}
              onPress={() => setInputMode('keyboard')}
            >
              <Text style={[styles.tabText, inputMode === 'keyboard' && styles.tabTextActive]}>
                {`⌨️ ${t('dashboard.keyboard')}`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, inputMode === 'camera' && styles.tabActive]}
              onPress={() => setInputMode('camera')}
            >
              <Text style={[styles.tabText, inputMode === 'camera' && styles.tabTextActive]}>
                {`📷 ${t('dashboard.camera')}`}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Keyboard Mode */}
          {inputMode === 'keyboard' ? (
            <View style={styles.keyboardMode}>
              <TextInput
                style={styles.mathInput}
                placeholder={t('dashboard.inputPlaceholder')}
                placeholderTextColor={COLORS.textMuted}
                value={mathProblemText}
                onChangeText={setMathProblemText}
                multiline
                textAlignVertical="top"
              />
              <TouchableOpacity
                style={[styles.analyzeButtonFull, (!mathProblemText.trim() || isAnalyzing) && styles.analyzeButtonDisabled]}
                onPress={handleAnalyzeProblem}
                disabled={!mathProblemText.trim() || isAnalyzing}
              >
                <Text style={styles.analyzeButtonText}>
                  {isAnalyzing ? `⏳ ${t('dashboard.analyzing')}` : `🤖 ${t('dashboard.analyzeAI')}`}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            /* Camera Mode */
            <View style={styles.cameraMode}>
              {selectedImage ? (
                <View style={styles.imagePreviewWrapper}>
                  <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
                  <View style={styles.imageActions}>
                    <TouchableOpacity
                      style={[styles.actionBtn, styles.analyzeBtn]}
                      onPress={handleAnalyzeProblem}
                      disabled={isAnalyzing}
                    >
                      <Text style={styles.actionBtnText}>
                        {isAnalyzing ? `⏳ ${t('dashboard.analyzing')}` : `🤖 ${t('dashboard.analyzeAI')}`}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionBtn, styles.removeBtn]} onPress={removeImage}>
                      <Text style={styles.actionBtnText}>{`✕ ${t('dashboard.remove')}`}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={styles.uploadRow}>
                  <TouchableOpacity style={styles.uploadCard} onPress={pickImage}>
                    <View style={[styles.uploadIconBox, { backgroundColor: COLORS.primaryBg }]}>
                      <Text style={styles.uploadEmoji}>🖼️</Text>
                    </View>
                    <Text style={styles.uploadLabel}>{t('dashboard.uploadPhoto')}</Text>
                    <Text style={styles.uploadSub}>{t('dashboard.fromGallery')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.uploadCard} onPress={takePhoto}>
                    <View style={[styles.uploadIconBox, { backgroundColor: COLORS.successLight }]}>
                      <Text style={styles.uploadEmoji}>📸</Text>
                    </View>
                    <Text style={styles.uploadLabel}>{t('dashboard.takePhoto')}</Text>
                    <Text style={styles.uploadSub}>{t('dashboard.useCamera')}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>

        {/* Daily Goal */}
        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <Text style={styles.goalFlag}>🎯</Text>
            <Text style={styles.goalTitle}>{t('dashboard.dailyGoal')}</Text>
            <Text style={styles.goalCount}>{t('dashboard.problemsProgress', { done: dailyProgress, total: dailyGoal })}</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View
              style={[styles.progressBarFill, { width: `${progressPercent}%` }]}
            />
          </View>
          <Text style={styles.goalEncouragement}>
            {progressPercent >= 100
              ? `🎉 ${t('dashboard.goalReached')}`
              : progressPercent >= 50
              ? `💪 ${t('dashboard.keepGoing')}`
              : `🚀 ${t('dashboard.startSolving')}`}
          </Text>
        </View>

        {/* Statistics */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>{t('dashboard.yourStats')}</Text>
          <View style={styles.statsGrid}>
            <View style={[styles.statCard, { backgroundColor: COLORS.primaryBg }]}>
              <View style={[styles.statIconBox, { backgroundColor: COLORS.primary }]}>
                <Text style={styles.statIconEmoji}>✅</Text>
              </View>
              <Text style={styles.statNumber}>{savedItems.length}</Text>
              <Text style={styles.statLabel} numberOfLines={2} adjustsFontSizeToFit>{t('dashboard.problemsSolved')}</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: COLORS.warningLight }]}>
              <View style={[styles.statIconBox, { backgroundColor: COLORS.warning }]}>
                <Text style={styles.statIconEmoji}>🔥</Text>
              </View>
              <Text style={styles.statNumber}>{streak}</Text>
              <Text style={styles.statLabel} numberOfLines={2} adjustsFontSizeToFit>{t('dashboard.dayStreak')}</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: COLORS.successLight }]}>
              <View style={[styles.statIconBox, { backgroundColor: COLORS.success }]}>
                <Text style={styles.statIconEmoji}>📚</Text>
              </View>
              <Text style={styles.statNumber}>{completedCoursesCount}</Text>
              <Text style={styles.statLabel} numberOfLines={2} adjustsFontSizeToFit>{t('dashboard.coursesCompleted')}</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: COLORS.purpleLight }]}>
              <View style={[styles.statIconBox, { backgroundColor: COLORS.purple }]}>
                <Text style={styles.statIconEmoji}>🎯</Text>
              </View>
              <Text style={styles.statNumber}>{completedQuizzesCount}</Text>
              <Text style={styles.statLabel} numberOfLines={2} adjustsFontSizeToFit>{t('dashboard.quizzesCompleted')}</Text>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>{t('dashboard.recentActivity')}</Text>
          {recentItems.length === 0 ? (
            <View style={styles.emptyActivity}>
              <Text style={styles.emptyActivityIcon}>📝</Text>
              <Text style={styles.emptyActivityText}>
                {t('dashboard.noActivity')}
              </Text>
            </View>
          ) : (
            recentItems.map((item, index) => (
              <View key={item.id || index} style={styles.activityCard}>
                {item.imageData && (
                  <Image source={{ uri: `data:image/jpeg;base64,${item.imageData}` }} style={styles.activityThumb} />
                )}
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle} numberOfLines={1}>
                    {item.answer ? item.answer : t('dashboard.mathProblem')}
                  </Text>
                  <Text style={styles.activityTime}>{formatTimeAgo(item.savedAt)}</Text>
                </View>
                <View style={styles.activityBadge}>
                  <Text style={styles.activityBadgeText}>✓</Text>
                </View>
              </View>
            ))
          )}
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      <LoadingOverlay visible={isAnalyzing} />

      <ResultsModal
        visible={showResultModal}
        result={analysisResult}
        imageUri={selectedImage}
        onClose={() => setShowResultModal(false)}
        onSave={handleSaveResult}
      />

      <ProfileModal
        visible={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 56,
    paddingBottom: 20,
    backgroundColor: COLORS.surface,
  },
  headerLeft: {
    flex: 1,
  },
  headerGreeting: {
    fontSize: 16,
    color: COLORS.primarySoft,
    fontWeight: '600',
    marginBottom: 2,
  },
  headerQuestion: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  avatarButton: {
    marginLeft: 15,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.primaryBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primarySoft,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  // Scan Card
  scanCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    marginHorizontal: 18,
    marginTop: 18,
    padding: 20,
    shadowColor: COLORS.primarySoft,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  scanCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  scanIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.primaryBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  scanIconEmoji: {
    fontSize: 24,
  },
  scanCardText: {
    flex: 1,
  },
  scanCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 3,
  },
  scanCardSubtitle: {
    fontSize: 13,
    color: COLORS.textSubtle,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.tabBg,
    borderRadius: 12,
    padding: 4,
    marginBottom: 18,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: COLORS.primarySoft,
    shadowColor: COLORS.primarySoft,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textSubtle,
  },
  tabTextActive: {
    color: COLORS.surface,
  },
  keyboardMode: {
    gap: 12,
  },
  cameraMode: {
    // No extra styles needed, inherits from parent
  },
  mathInput: {
    backgroundColor: COLORS.inputBg,
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
    borderRadius: 14,
    padding: 16,
    fontSize: 15,
    color: COLORS.text,
    minHeight: 140,
    fontFamily: 'System',
  },
  analyzeButtonFull: {
    backgroundColor: COLORS.primarySoft,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: COLORS.primarySoft,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  analyzeButtonDisabled: {
    backgroundColor: COLORS.disabled,
    opacity: 0.6,
    shadowOpacity: 0,
  },
  analyzeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.surface,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: 14,
  },
  uploadCard: {
    flex: 1,
    backgroundColor: COLORS.inputBg,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
  },
  uploadIconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadEmoji: {
    fontSize: 28,
  },
  uploadLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 3,
  },
  uploadSub: {
    fontSize: 12,
    color: COLORS.textSubtle,
  },
  imagePreviewWrapper: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: 220,
    backgroundColor: COLORS.borderLight,
    borderRadius: 14,
    marginBottom: 12,
  },
  imageActions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  analyzeBtn: {
    flex: 2,
    backgroundColor: COLORS.primarySoft,
  },
  removeBtn: {
    flex: 1,
    backgroundColor: COLORS.destructive,
  },
  actionBtnText: {
    color: COLORS.surface,
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Daily Goal
  goalCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    marginHorizontal: 18,
    marginTop: 16,
    padding: 20,
    shadowColor: COLORS.primarySoft,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  goalFlag: {
    fontSize: 20,
    marginRight: 10,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    flex: 1,
  },
  goalCount: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primarySoft,
  },
  progressBarBg: {
    height: 10,
    backgroundColor: COLORS.primaryBg,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primarySoft,
    borderRadius: 5,
  },
  goalEncouragement: {
    fontSize: 13,
    color: COLORS.textSubtle,
    fontWeight: '500',
  },

  // Statistics
  statsSection: {
    marginHorizontal: 18,
    marginTop: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: (width - 18 * 2 - 12) / 2,
    borderRadius: 18,
    padding: 18,
  },
  statIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statIconEmoji: {
    fontSize: 20,
  },
  statNumber: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSubtle,
    fontWeight: '500',
  },

  // Recent Activity
  activitySection: {
    marginHorizontal: 18,
    marginTop: 22,
  },
  emptyActivity: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  emptyActivityIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  emptyActivityText: {
    fontSize: 14,
    color: COLORS.textSubtle,
    textAlign: 'center',
    lineHeight: 20,
  },
  activityCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    ...SHADOWS.soft,
  },
  activityThumb: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: COLORS.borderLight,
    marginRight: 14,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 12,
    color: COLORS.textSubtle,
  },
  activityBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: COLORS.successLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  activityBadgeText: {
    fontSize: 16,
    color: COLORS.success,
    fontWeight: 'bold',
  },
});
