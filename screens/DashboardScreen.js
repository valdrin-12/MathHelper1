import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  TextInput,
  Platform,
  Animated,
  Keyboard,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as imageService from '../services/imageService';
import * as geminiService from '../services/geminiService';
import * as mathCalculatorService from '../services/mathCalculatorService';
import { isPlottableFunction } from '../services/graphService';
import LoadingOverlay from '../components/LoadingOverlay';
import ResultsModal from '../components/ResultsModal';
import GraphModal from '../components/GraphModal';
import MathKeyboard from '../components/MathKeyboard';
import { useSavedItems } from '../context/SavedItemsContext';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';

function isNetworkError(err) {
  if (!err || !err.message) return false;
  const msg = err.message.toLowerCase();
  return (
    msg.includes('network request failed') ||
    msg.includes('failed to fetch') ||
    msg.includes('networkerror') ||
    msg.includes('econnrefused') ||
    msg.includes('timeout') ||
    msg.includes('internet')
  );
}
import ProfileModal from '../components/ProfileModal';
import PremiumModal from '../components/PremiumModal';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { ScreenHeader, Card, SectionTitle, ListSection, ListRow, IconBadge, Button, SegmentedControl } from '../components/ui';
import WebContainer from '../components/WebContainer';
import { useResponsive } from '../utils/responsive';

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
  const { todayProblems, completedCoursesCount, completedQuizzesCount, streak, recordProblemSolved, refresh } = useStats();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  const [inputMode, setInputMode] = useState('keyboard');
  const [mathProblemText, setMathProblemText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lastBase64, setLastBase64] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [limitType, setLimitType] = useState('free'); // 'free' or 'daily'
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showGraphModal, setShowGraphModal] = useState(false);

  const navigation = useNavigation();
  const [greeting, setGreeting] = useState(() => getGreeting(t));

  // Refresh greeting every minute so it updates if the app stays open past a time boundary
  useEffect(() => {
    const id = setInterval(() => setGreeting(getGreeting(t)), 60_000);
    return () => clearInterval(id);
  }, [t]);

  // Dismiss keyboard when leaving this tab
  useEffect(() => {
    const unsub = navigation.addListener('blur', () => Keyboard.dismiss());
    return unsub;
  }, [navigation]);

  const displayName = user?.name ? user.name.split(' ')[0] : t('common.friend');

  const dailyGoal = 10;
  const dailyProgress = Math.min(todayProblems, dailyGoal);
  const progressPercent = (dailyProgress / dailyGoal) * 100;

  const recentItems = useMemo(() => savedItems.slice(0, 3), [savedItems]);

  // ── Micro-animations ─────────────────────────────────────────────────────────
  const galleryAnim = useRef(new Animated.Value(1)).current;
  const cameraAnim  = useRef(new Animated.Value(1)).current;

  const pressIn  = (a) => Animated.spring(a, { toValue: 0.95, useNativeDriver: true, friction: 20, tension: 350 }).start();
  const pressOut = (a) => Animated.spring(a, { toValue: 1,    useNativeDriver: true, friction: 20, tension: 350 }).start();

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

  // Calculate locally (try calculator first, fallback to AI if needed)
  const handleCalculate = async () => {
    setAnalysisResult(null); // reset so modal never shows stale data
    try {
      let problemText = mathProblemText;
      let imageBase64 = null; // Store base64 for AI fallback
      let imageMimeType = 'image/jpeg';

      // Get input (keyboard or image)
      if (inputMode === 'keyboard') {
        if (!problemText.trim()) {
          Alert.alert(t('common.attention'), t('dashboard.enterProblem'));
          return;
        }
      } else {
        if (!selectedImage) {
          Alert.alert(t('common.attention'), t('dashboard.selectPhoto'));
          return;
        }
        // For images, use OCR-only to extract text (doesn't count against daily limit!)
        setIsAnalyzing(true);
        const { base64, mimeType } = await imageService.convertImageToBase64(selectedImage);
        setLastBase64(base64);

        // Store for AI fallback (don't rely on state which is async)
        imageBase64 = base64;
        imageMimeType = mimeType;

        try {
          problemText = await geminiService.extractTextFromImage(base64, mimeType);
        } catch (ocrError) {
          throw new Error(t('dashboard.ocrFailed'));
        }
      }

      setIsAnalyzing(true);

      const localResult = await mathCalculatorService.solveMathProblem(
        problemText,
        t('common.locale')
      );

      if (localResult.success) {
        // Count 1 analysis for local solve
        await geminiService.recordAnalysis();
        setAnalysisResult({ ...localResult, solverType: 'local' });
        setShowResultModal(true);
      } else {
        // Count 1 analysis ONCE before the wolfram→AI chain
        await geminiService.recordAnalysis();

        // Try wolfram (no additional counting)
        let wolframSucceeded = false;
        try {
          const wolframResult = await geminiService.analyzeWithWolfram(problemText);
          setAnalysisResult({ ...wolframResult, solverType: 'wolfram' });
          setShowResultModal(true);
          wolframSucceeded = true;
        } catch (wolframError) {
          // Wolfram failed, fall back to AI (no additional counting)
        }

        if (!wolframSucceeded) {
          const aiResult = inputMode === 'keyboard'
            ? await geminiService.analyzeMathProblemFromText(problemText)
            : await geminiService.analyzeMathProblem(imageBase64, imageMimeType);

          setAnalysisResult({ ...aiResult, solverType: 'ai' });
          setShowResultModal(true);
        }
      }
    } catch (error) {
      if (error.message === 'DAILY_LIMIT_REACHED' || error.message === 'FREE_LIMIT_REACHED') {
        setLimitType(error.message === 'FREE_LIMIT_REACHED' ? 'free' : 'daily');
        setShowLimitModal(true);
      } else if (isNetworkError(error)) {
        Alert.alert(t('common.noInternet'), t('common.noInternetDesc'), [
          { text: t('common.retry'), onPress: handleCalculate },
          { text: t('common.ok') },
        ]);
      } else {
        Alert.alert(t('common.error'), error.message || t('dashboard.analysisError'));
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Analyze with AI (always use AI, no local calculator)
  const handleAnalyzeWithAI = async () => {
    setAnalysisResult(null); // reset so modal never shows stale data
    try {
      if (inputMode === 'keyboard') {
        if (!mathProblemText.trim()) {
          Alert.alert(t('common.attention'), t('dashboard.enterProblem'));
          return;
        }
        setIsAnalyzing(true);
        // Count 1 analysis before calling AI
        await geminiService.recordAnalysis();
        const result = await geminiService.analyzeMathProblemFromText(mathProblemText);
        setAnalysisResult({ ...result, solverType: 'ai' });
        setShowResultModal(true);
      } else {
        if (!selectedImage) {
          Alert.alert(t('common.attention'), t('dashboard.selectPhoto'));
          return;
        }
        setIsAnalyzing(true);
        const { base64, mimeType } = await imageService.convertImageToBase64(selectedImage);
        setLastBase64(base64);
        // Count 1 analysis before calling AI
        await geminiService.recordAnalysis();
        const result = await geminiService.analyzeMathProblem(base64, mimeType);
        setAnalysisResult({ ...result, solverType: 'ai' });
        setShowResultModal(true);
      }
    } catch (error) {
      if (error.message === 'FREE_LIMIT_REACHED' || error.message === 'DAILY_LIMIT_REACHED') {
        setShowLimitModal(true);
      } else if (isNetworkError(error)) {
        Alert.alert(t('common.noInternet'), t('common.noInternetDesc'), [
          { text: t('common.retry'), onPress: handleAnalyzeWithAI },
          { text: t('common.ok') },
        ]);
      } else {
        Alert.alert(t('common.error'), error.message || t('dashboard.analysisError'));
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Keep old function name for backward compatibility (redirect to AI)
  const handleAnalyzeProblem = handleAnalyzeWithAI;

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
      console.error('Gabim gjate ruajtjes:', error);
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

  const { isWeb, isDesktop } = useResponsive();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const canSubmit = !!mathProblemText.trim() && !isAnalyzing;
  const goalDone = progressPercent >= 100;

  const stats = [
    { icon: 'checkmark-done', color: colors.primary, value: savedItems.length, label: t('dashboard.problemsSolved') },
    { icon: 'flame', color: colors.secondary, value: streak, label: t('dashboard.dayStreak') },
    { icon: 'book', color: colors.success, value: completedCoursesCount, label: t('dashboard.coursesCompleted') },
    { icon: 'trophy', color: colors.purple, value: completedQuizzesCount, label: t('dashboard.quizzesCompleted') },
  ];

  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <WebContainer>
        <ScreenHeader
          eyebrow={`${greeting}, ${displayName}!`}
          title={t('dashboard.readyToLearn')}
          right={
            <TouchableOpacity style={styles.avatar} onPress={() => setShowProfile(true)} activeOpacity={0.7}>
              <Text style={styles.avatarText}>{user?.name ? user.name[0].toUpperCase() : '?'}</Text>
            </TouchableOpacity>
          }
        />

        <View style={styles.content}>
          {/* Daily Goal */}
          <Card style={styles.block}>
            <View style={styles.goalHeader}>
              <IconBadge name={goalDone ? 'trophy' : 'flag'} color={goalDone ? colors.success : colors.secondary} />
              <Text style={styles.goalTitle}>{t('dashboard.dailyGoal')}</Text>
              <Text style={[styles.goalCount, goalDone && { color: colors.success }]}>
                {t('dashboard.problemsProgress', { done: dailyProgress, total: dailyGoal })}
              </Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${Math.max(progressPercent, 2)}%`, backgroundColor: goalDone ? colors.success : colors.primary },
                ]}
              />
            </View>
            <Text style={styles.goalEncouragement}>
              {goalDone
                ? t('dashboard.goalReached')
                : progressPercent >= 50
                ? t('dashboard.keepGoing')
                : t('dashboard.startSolving')}
            </Text>
          </Card>

          {/* Solve */}
          <Card style={styles.block}>
            <SegmentedControl
              style={styles.segmented}
              value={inputMode}
              onChange={setInputMode}
              segments={[
                { value: 'keyboard', icon: 'keypad', label: t('dashboard.keyboard') },
                { value: 'camera', icon: 'camera', label: t('dashboard.camera') },
              ]}
            />

            {inputMode === 'keyboard' ? (
              <View>
                <TextInput
                  style={styles.mathTextInput}
                  value={mathProblemText}
                  onChangeText={setMathProblemText}
                  placeholder={t('dashboard.inputPlaceholder')}
                  placeholderTextColor={colors.textMuted}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />

                <View style={styles.actionRow}>
                  <Button
                    style={styles.actionButton}
                    icon={isAnalyzing ? 'hourglass' : 'calculator'}
                    title={t('dashboard.calculate')}
                    onPress={handleCalculate}
                    disabled={!canSubmit}
                  />
                  <Button
                    style={styles.actionButton}
                    variant="tinted"
                    icon={isAnalyzing ? 'hourglass' : 'sparkles'}
                    title={t('dashboard.analyzeAI')}
                    onPress={handleAnalyzeWithAI}
                    disabled={!canSubmit}
                  />
                </View>

                {/* Graph — shown only when input contains a plottable function */}
                {isPlottableFunction(mathProblemText) && (
                  <Button
                    style={styles.graphButton}
                    variant="tinted"
                    tone="warning"
                    icon="stats-chart"
                    title={t('dashboard.graphButton')}
                    onPress={() => setShowGraphModal(true)}
                  />
                )}

                <MathKeyboard
                  onKeyPress={(value) => setMathProblemText((prev) => prev + value)}
                  onBackspace={() => setMathProblemText((prev) => prev.slice(0, -1))}
                  onClear={() => setMathProblemText('')}
                />
              </View>
            ) : selectedImage ? (
              <View>
                <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
                <View style={styles.actionRow}>
                  <Button
                    style={styles.actionButton}
                    icon={isAnalyzing ? 'hourglass' : 'calculator'}
                    title={t('dashboard.calculate')}
                    onPress={handleCalculate}
                    disabled={isAnalyzing}
                  />
                  <Button
                    style={styles.actionButton}
                    variant="tinted"
                    icon={isAnalyzing ? 'hourglass' : 'sparkles'}
                    title={t('dashboard.analyzeAI')}
                    onPress={handleAnalyzeWithAI}
                    disabled={isAnalyzing}
                  />
                </View>
                <Button
                  variant="plain"
                  tone="destructive"
                  icon="close"
                  title={t('dashboard.remove')}
                  onPress={removeImage}
                />
              </View>
            ) : (
              <View style={styles.uploadRow}>
                {[
                  { onPress: pickImage, anim: galleryAnim, icon: 'images', color: colors.primary, label: t('dashboard.uploadPhoto'), sub: t('dashboard.fromGallery') },
                  { onPress: takePhoto, anim: cameraAnim, icon: 'camera', color: colors.success, label: t('dashboard.takePhoto'), sub: t('dashboard.useCamera') },
                ].map((tile) => (
                  <TouchableOpacity
                    key={tile.icon}
                    style={styles.uploadTile}
                    onPress={tile.onPress}
                    onPressIn={() => pressIn(tile.anim)}
                    onPressOut={() => pressOut(tile.anim)}
                    activeOpacity={1}
                  >
                    <Animated.View style={[styles.uploadTileInner, { transform: [{ scale: tile.anim }] }]}>
                      <Ionicons name={tile.icon} size={30} color={tile.color} />
                      <Text style={styles.uploadLabel}>{tile.label}</Text>
                      <Text style={styles.uploadSub}>{tile.sub}</Text>
                    </Animated.View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </Card>

          {/* Statistics */}
          <View style={styles.sectionBlock}>
            <SectionTitle>{t('dashboard.yourStats')}</SectionTitle>
            <View style={styles.statsGrid}>
              {stats.map((stat) => (
                <Card key={stat.icon} style={[styles.statCard, isDesktop && styles.statCardDesktop]}>
                  <View style={styles.statTop}>
                    <Ionicons name={stat.icon} size={18} color={stat.color} />
                    <Text style={styles.statNumber}>{stat.value}</Text>
                  </View>
                  <Text style={styles.statLabel} numberOfLines={2}>{stat.label}</Text>
                </Card>
              ))}
            </View>
          </View>

          {/* Recent Activity */}
          <View style={styles.sectionBlock}>
            <SectionTitle>{t('dashboard.recentActivity')}</SectionTitle>
            {recentItems.length === 0 ? (
              <Card style={styles.emptyActivity}>
                <View style={styles.emptyIcon}>
                  <Ionicons name="document-text-outline" size={28} color={colors.primary} />
                </View>
                <Text style={styles.emptyActivityText}>{t('dashboard.noActivity')}</Text>
              </Card>
            ) : (
              <ListSection style={styles.activityList}>
                {recentItems.map((item, index) => (
                  <ListRow
                    key={item.id || index}
                    leading={item.imageData ? (
                      <Image source={{ uri: `data:image/jpeg;base64,${item.imageData}` }} style={styles.activityThumb} />
                    ) : (
                      <IconBadge name="checkmark" color={colors.success} />
                    )}
                    title={item.answer ? item.answer : t('dashboard.mathProblem')}
                    subtitle={formatTimeAgo(item.savedAt)}
                  />
                ))}
              </ListSection>
            )}
          </View>

          <View style={{ height: isWeb ? 30 : 100 }} />
        </View>
        </WebContainer>
      </ScrollView>

      <LoadingOverlay visible={isAnalyzing} />

      <ResultsModal
        visible={showResultModal}
        result={analysisResult}
        imageUri={selectedImage}
        onClose={() => setShowResultModal(false)}
        onSave={handleSaveResult}
      />

      <GraphModal
        visible={showGraphModal}
        functionText={mathProblemText}
        onClose={() => setShowGraphModal(false)}
      />

      <ProfileModal
        visible={showProfile}
        onClose={() => setShowProfile(false)}
        onUpgrade={() => setShowPremiumModal(true)}
      />

      {/* Daily Limit Modal */}
      <Modal
        visible={showLimitModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLimitModal(false)}
      >
        <View style={styles.limitOverlay}>
          <View style={styles.limitModal}>
            <View style={styles.limitIconBox}>
              <Ionicons name="lock-closed" size={28} color={colors.secondary} />
            </View>
            <Text style={styles.limitTitle}>
              {limitType === 'free' ? t('rateLimit.freeTitle') : t('rateLimit.title')}
            </Text>
            <Text style={styles.limitMessage}>
              {limitType === 'free' ? t('rateLimit.freeMessage') : t('rateLimit.message')}
            </Text>

            <View style={styles.limitPremiumBox}>
              <View style={styles.limitPremiumHeader}>
                <Ionicons name="star" size={16} color={colors.secondary} />
                <Text style={styles.limitPremiumTitle}>{t('rateLimit.premiumTitle')}</Text>
              </View>
              <Text style={styles.limitPremiumDesc}>{t('rateLimit.premiumDesc')}</Text>
            </View>

            <Button
              style={styles.limitButton}
              tone="warning"
              icon="star"
              title={t('rateLimit.upgradePremium')}
              onPress={() => {
                setShowLimitModal(false);
                setTimeout(() => setShowPremiumModal(true), 300);
              }}
            />
            <Button
              style={styles.limitButton}
              variant="plain"
              title={limitType === 'daily' ? t('rateLimit.tryTomorrow') : t('rateLimit.close')}
              onPress={() => setShowLimitModal(false)}
            />
          </View>
        </View>
      </Modal>

      <PremiumModal
        visible={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
      />
    </>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: SPACING.lg,
  },
  block: {
    marginTop: SPACING.lg,
  },
  sectionBlock: {
    marginTop: SPACING.xxxl,
  },

  // Header avatar
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    ...TYPOGRAPHY.headline,
    color: '#FFFFFF',
  },

  // Daily Goal
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  goalTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    flex: 1,
    marginLeft: SPACING.md,
  },
  goalCount: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.primary,
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.borderLight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  goalEncouragement: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: SPACING.sm + 2,
  },

  // Solve
  segmented: {
    marginBottom: SPACING.lg,
  },
  mathTextInput: {
    ...TYPOGRAPHY.body,
    fontSize: 18,
    lineHeight: 26,
    color: colors.text,
    backgroundColor: colors.inputBg,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    minHeight: 112,
    maxHeight: 160,
    outlineStyle: 'none', // Remove focus outline on web
  },
  actionRow: {
    flexDirection: 'row',
    gap: SPACING.sm + 2,
    marginVertical: SPACING.md,
  },
  actionButton: {
    flex: 1,
  },
  graphButton: {
    marginBottom: SPACING.md,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  uploadTile: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.md,
  },
  uploadTileInner: {
    alignItems: 'center',
  },
  uploadLabel: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
    marginTop: SPACING.sm + 2,
    textAlign: 'center',
  },
  uploadSub: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    marginTop: 2,
    textAlign: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 220,
    backgroundColor: colors.inputBg,
    borderRadius: BORDER_RADIUS.md,
  },

  // Statistics
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  statCard: {
    flexBasis: '46%',
    flexGrow: 1,
    padding: SPACING.lg,
  },
  statCardDesktop: {
    flexBasis: '22%',
  },
  statTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  statNumber: {
    ...TYPOGRAPHY.h1,
    color: colors.text,
  },
  statLabel: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },

  // Recent Activity
  activityList: {
    marginHorizontal: 0,
    marginTop: 0,
  },
  activityThumb: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: colors.inputBg,
  },
  emptyActivity: {
    alignItems: 'center',
    paddingVertical: SPACING.xxxl,
  },
  emptyIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  emptyActivityText: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },

  // Daily Limit Modal
  limitOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxl,
  },
  limitModal: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xxl,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  limitIconBox: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.warningLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  limitTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs + 2,
  },
  limitMessage: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  limitPremiumBox: {
    backgroundColor: colors.warningLight,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md + 2,
    width: '100%',
    marginBottom: SPACING.lg,
  },
  limitPremiumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs + 2,
    marginBottom: SPACING.xs,
  },
  limitPremiumTitle: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
  },
  limitPremiumDesc: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },
  limitButton: {
    alignSelf: 'stretch',
    marginTop: SPACING.xs,
  },
});
