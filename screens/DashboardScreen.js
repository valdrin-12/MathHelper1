import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  Modal,
  TextInput,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as imageService from '../services/imageService';
import * as geminiService from '../services/geminiService';
import * as mathCalculatorService from '../services/mathCalculatorService';
import LoadingOverlay from '../components/LoadingOverlay';
import ResultsModal from '../components/ResultsModal';
import MathKeyboard from '../components/MathKeyboard';
import { useSavedItems } from '../context/SavedItemsContext';
import { useUser } from '../context/UserContext';
import { useStats } from '../context/StatsContext';
import ProfileModal from '../components/ProfileModal';
import PremiumModal from '../components/PremiumModal';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../theme/constants';
import WebContainer from '../components/WebContainer';
import { useResponsive } from '../utils/responsive';

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
  const [showPremiumModal, setShowPremiumModal] = useState(false);

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

  // Calculate locally (try calculator first, fallback to AI if needed)
  const handleCalculate = async () => {
    try {
      let problemText = mathProblemText;
      let imageBase64 = null; // Store base64 for AI fallback
      let imageMimeType = 'image/jpeg';

      console.log('🔵 [Calculate] Starting calculation...');
      console.log('🔵 [Calculate] Input mode:', inputMode);

      // Get input (keyboard or image)
      if (inputMode === 'keyboard') {
        if (!problemText.trim()) {
          Alert.alert(t('common.attention'), t('dashboard.enterProblem'));
          return;
        }
        console.log('⌨️  [Keyboard] Problem text:', problemText);
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
          // Use OCR-only endpoint - just extracts text, doesn't solve
          console.log('📷 [Camera] Extracting text from image...');
          problemText = await geminiService.extractTextFromImage(base64, mimeType);
          console.log('✅ [OCR] Extracted text:', problemText);
        } catch (ocrError) {
          console.error('❌ [OCR] Failed to extract text:', ocrError);
          // If OCR fails, show error and don't continue
          throw new Error(t('dashboard.ocrFailed'));
        }
      }

      setIsAnalyzing(true);

      // Try local calculator first
      console.log('🧮 [Calculator] Trying local solver for:', problemText);
      const localResult = await mathCalculatorService.solveMathProblem(
        problemText,
        t('common.locale')
      );

      if (localResult.success) {
        // ✅ Local calculator succeeded - 0 API calls!
        console.log('✅ [Calculator] Local solver succeeded!');
        console.log('✅ [Calculator] Answer:', localResult.answer);
        setAnalysisResult({ ...localResult, solverType: 'local' });
        setShowResultModal(true);
      } else {
        // Try Wolfram Alpha (does NOT count against Gemini daily limit)
        console.log('⚠️  [Calculator] Local solver failed:', localResult.reason);
        console.log('🐺 [Wolfram] Trying Wolfram Alpha...');

        let wolframSucceeded = false;
        try {
          const wolframResult = await geminiService.analyzeWithWolfram(problemText);
          console.log('✅ [Wolfram] Answer:', wolframResult.answer);
          setAnalysisResult({ ...wolframResult, solverType: 'wolfram' });
          setShowResultModal(true);
          wolframSucceeded = true;
        } catch (wolframError) {
          console.log('⚠️  [Wolfram] Failed:', wolframError.message);
          console.log('🤖 [AI] Falling back to Gemini AI...');
        }

        if (!wolframSucceeded) {
          // Last resort: Gemini AI (counts against daily limit)
          const aiResult = inputMode === 'keyboard'
            ? await geminiService.analyzeMathProblemFromText(problemText)
            : await geminiService.analyzeMathProblem(imageBase64, imageMimeType);

          console.log('✅ [AI] Analysis complete:', aiResult.answer);
          setAnalysisResult({ ...aiResult, solverType: 'ai' });
          setShowResultModal(true);
        }
      }
    } catch (error) {
      console.error('Gabim gjate analizes:', error);
      if (error.message === 'DAILY_LIMIT_REACHED') {
        setShowLimitModal(true);
      } else {
        Alert.alert(t('common.error'), error.message || t('dashboard.analysisError'));
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Analyze with AI (always use AI, no local calculator)
  const handleAnalyzeWithAI = async () => {
    try {
      if (inputMode === 'keyboard') {
        if (!mathProblemText.trim()) {
          Alert.alert(t('common.attention'), t('dashboard.enterProblem'));
          return;
        }
        setIsAnalyzing(true);
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
        const result = await geminiService.analyzeMathProblem(base64, mimeType);
        setAnalysisResult({ ...result, solverType: 'ai' });
        setShowResultModal(true);
      }
    } catch (error) {
      console.error('Gabim gjate analizes:', error);
      if (error.message === 'DAILY_LIMIT_REACHED') {
        setShowLimitModal(true);
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

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header with Gradient */}
        <LinearGradient
          colors={[COLORS.primary, COLORS.primarySoft, COLORS.primaryLight]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.headerGradient, isWeb && { paddingTop: 20 }]}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.headerGreeting}>{greeting}, {displayName}!</Text>
              <Text style={styles.headerQuestion}>{t('dashboard.readyToLearn')}</Text>
            </View>
            <TouchableOpacity style={styles.avatarButton} onPress={() => setShowProfile(true)}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{user?.name ? user.name[0].toUpperCase() : '?'}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Quick Stats inside header */}
          <View style={styles.quickStats}>
            <View style={styles.quickStatItem}>
              <Ionicons name="checkmark-done" size={18} color="rgba(255,255,255,0.8)" />
              <Text style={styles.quickStatNumber}>{savedItems.length}</Text>
              <Text style={styles.quickStatLabel}>{t('dashboard.problemsSolved')}</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatItem}>
              <Ionicons name="flame" size={18} color="rgba(255,255,255,0.8)" />
              <Text style={styles.quickStatNumber}>{streak}</Text>
              <Text style={styles.quickStatLabel}>{t('dashboard.dayStreak')}</Text>
            </View>
            <View style={styles.quickStatDivider} />
            <View style={styles.quickStatItem}>
              <Ionicons name="trophy" size={18} color="rgba(255,255,255,0.8)" />
              <Text style={styles.quickStatNumber}>{completedQuizzesCount}</Text>
              <Text style={styles.quickStatLabel}>{t('dashboard.quizzesCompleted')}</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Main Content */}
        <WebContainer>
        <View style={styles.content}>
          {/* Daily Goal Card */}
          <View style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <View style={styles.goalIconBox}>
                <Ionicons name="flag" size={22} color="#F59E0B" />
              </View>
              <View style={styles.goalTextContainer}>
                <Text style={styles.goalTitle}>{t('dashboard.dailyGoal')}</Text>
                <Text style={styles.goalCount}>
                  {t('dashboard.problemsProgress', { done: dailyProgress, total: dailyGoal })}
                </Text>
              </View>
              {progressPercent >= 100 && (
                <View style={styles.goalCompleteBadge}>
                  <Ionicons name="trophy" size={22} color="#10B981" />
                </View>
              )}
            </View>
            <View style={styles.progressBarBg}>
              <LinearGradient
                colors={progressPercent >= 100 ? ['#10B981', '#059669'] : [COLORS.primarySoft, COLORS.primaryLight]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.progressBarFill, { width: `${Math.max(progressPercent, 2)}%` }]}
              />
            </View>
            <View style={styles.goalEncouragementRow}>
              <Ionicons
                name={progressPercent >= 100 ? 'sparkles' : progressPercent >= 50 ? 'fitness' : 'rocket'}
                size={16}
                color={COLORS.textSubtle}
              />
              <Text style={styles.goalEncouragement}>
                {progressPercent >= 100
                  ? t('dashboard.goalReached')
                  : progressPercent >= 50
                  ? t('dashboard.keepGoing')
                  : t('dashboard.startSolving')}
              </Text>
            </View>
          </View>

          {/* Scan / Input Card */}
          <View style={styles.scanCard}>
            {/* Tab Switcher */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, inputMode === 'keyboard' && styles.tabActive]}
                onPress={() => setInputMode('keyboard')}
              >
                <View style={styles.tabInner}>
                  <Ionicons
                    name="keypad"
                    size={16}
                    color={inputMode === 'keyboard' ? '#FFFFFF' : COLORS.textSubtle}
                  />
                  <Text style={[styles.tabText, inputMode === 'keyboard' && styles.tabTextActive]}>
                    {t('dashboard.keyboard')}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, inputMode === 'camera' && styles.tabActive]}
                onPress={() => setInputMode('camera')}
              >
                <View style={styles.tabInner}>
                  <Ionicons
                    name="camera"
                    size={16}
                    color={inputMode === 'camera' ? '#FFFFFF' : COLORS.textSubtle}
                  />
                  <Text style={[styles.tabText, inputMode === 'camera' && styles.tabTextActive]}>
                    {t('dashboard.camera')}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Keyboard Mode */}
            {inputMode === 'keyboard' ? (
              <View style={styles.keyboardMode}>
                {/* Math Display Area */}
                <View style={styles.mathDisplayArea}>
                  <TextInput
                    style={styles.mathTextInput}
                    value={mathProblemText}
                    onChangeText={setMathProblemText}
                    placeholder={t('dashboard.inputPlaceholder')}
                    placeholderTextColor={COLORS.textMuted}
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                  />
                </View>

                {/* Action Buttons Row - Two Buttons */}
                <View style={styles.mathActionRow}>
                  {/* Calculate Button (Local) */}
                  <TouchableOpacity
                    style={[styles.halfButton, (!mathProblemText.trim() || isAnalyzing) && styles.halfButtonDisabled]}
                    onPress={handleCalculate}
                    disabled={!mathProblemText.trim() || isAnalyzing}
                  >
                    <LinearGradient
                      colors={(!mathProblemText.trim() || isAnalyzing) ? [COLORS.disabled, COLORS.disabled] : ['#3B82F6', '#2563EB']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.buttonGradient}
                    >
                      <View style={styles.buttonInner}>
                        <Ionicons
                          name={isAnalyzing ? 'hourglass' : 'calculator'}
                          size={16}
                          color="#FFFFFF"
                        />
                        <Text style={styles.buttonText}>
                          {t('dashboard.calculate')}
                        </Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>

                  {/* Analyze with AI Button */}
                  <TouchableOpacity
                    style={[styles.halfButton, (!mathProblemText.trim() || isAnalyzing) && styles.halfButtonDisabled]}
                    onPress={handleAnalyzeWithAI}
                    disabled={!mathProblemText.trim() || isAnalyzing}
                  >
                    <LinearGradient
                      colors={(!mathProblemText.trim() || isAnalyzing) ? [COLORS.disabled, COLORS.disabled] : [COLORS.primarySoft, COLORS.primary]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.buttonGradient}
                    >
                      <View style={styles.buttonInner}>
                        <Ionicons
                          name={isAnalyzing ? 'hourglass' : 'sparkles'}
                          size={16}
                          color="#FFFFFF"
                        />
                        <Text style={styles.buttonText}>
                          {t('dashboard.analyzeAI')}
                        </Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

                {/* Math Keyboard */}
                <MathKeyboard
                  onKeyPress={(value) => setMathProblemText((prev) => prev + value)}
                  onBackspace={() => setMathProblemText((prev) => prev.slice(0, -1))}
                  onClear={() => setMathProblemText('')}
                />
              </View>
            ) : (
              /* Camera Mode */
              <View style={styles.cameraMode}>
                {selectedImage ? (
                  <View style={styles.imagePreviewWrapper}>
                    <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
                    <View style={styles.imageActions}>
                      <TouchableOpacity
                        style={[styles.actionBtn, styles.calculateBtn]}
                        onPress={handleCalculate}
                        disabled={isAnalyzing}
                      >
                        <View style={styles.actionBtnInner}>
                          <Ionicons name={isAnalyzing ? 'hourglass' : 'calculator'} size={16} color="#FFFFFF" />
                          <Text style={styles.actionBtnText}>
                            {t('dashboard.calculate')}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.actionBtn, styles.analyzeBtn]}
                        onPress={handleAnalyzeWithAI}
                        disabled={isAnalyzing}
                      >
                        <View style={styles.actionBtnInner}>
                          <Ionicons name={isAnalyzing ? 'hourglass' : 'sparkles'} size={16} color="#FFFFFF" />
                          <Text style={styles.actionBtnText}>
                            {t('dashboard.analyzeAI')}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.actionBtn, styles.removeBtn]} onPress={removeImage}>
                        <View style={styles.actionBtnInner}>
                          <Ionicons name="close" size={16} color="#FFFFFF" />
                          <Text style={styles.actionBtnText}>{t('dashboard.remove')}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={styles.uploadRow}>
                    <TouchableOpacity style={styles.uploadCard} onPress={pickImage}>
                      <View style={[styles.uploadIconBox, { backgroundColor: COLORS.primaryBg }]}>
                        <Ionicons name="images" size={28} color={COLORS.primarySoft} />
                      </View>
                      <Text style={styles.uploadLabel}>{t('dashboard.uploadPhoto')}</Text>
                      <Text style={styles.uploadSub}>{t('dashboard.fromGallery')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadCard} onPress={takePhoto}>
                      <View style={[styles.uploadIconBox, { backgroundColor: COLORS.successLight }]}>
                        <Ionicons name="camera" size={28} color={COLORS.success} />
                      </View>
                      <Text style={styles.uploadLabel}>{t('dashboard.takePhoto')}</Text>
                      <Text style={styles.uploadSub}>{t('dashboard.useCamera')}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </View>

          {/* Statistics Grid */}
          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>{t('dashboard.yourStats')}</Text>
            <View style={[styles.statsGrid, isDesktop && { gap: 14 }]}>
              <View style={[styles.statCard, { backgroundColor: COLORS.primaryBg }, isDesktop && styles.statCardDesktop]}>
                <View style={[styles.statIconBox, { backgroundColor: COLORS.primarySoft }]}>
                  <Ionicons name="checkmark-done" size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.statNumber}>{savedItems.length}</Text>
                <Text style={styles.statLabel} numberOfLines={2} adjustsFontSizeToFit>{t('dashboard.problemsSolved')}</Text>
              </View>
              <View style={[styles.statCard, { backgroundColor: '#FFF7ED' }, isDesktop && styles.statCardDesktop]}>
                <View style={[styles.statIconBox, { backgroundColor: '#F59E0B' }]}>
                  <Ionicons name="flame" size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.statNumber}>{streak}</Text>
                <Text style={styles.statLabel} numberOfLines={2} adjustsFontSizeToFit>{t('dashboard.dayStreak')}</Text>
              </View>
              <View style={[styles.statCard, { backgroundColor: COLORS.successLight }, isDesktop && styles.statCardDesktop]}>
                <View style={[styles.statIconBox, { backgroundColor: COLORS.success }]}>
                  <Ionicons name="book" size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.statNumber}>{completedCoursesCount}</Text>
                <Text style={styles.statLabel} numberOfLines={2} adjustsFontSizeToFit>{t('dashboard.coursesCompleted')}</Text>
              </View>
              <View style={[styles.statCard, { backgroundColor: COLORS.purpleLight }, isDesktop && styles.statCardDesktop]}>
                <View style={[styles.statIconBox, { backgroundColor: COLORS.purple }]}>
                  <Ionicons name="trophy" size={20} color="#FFFFFF" />
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
                <View style={styles.illustrationContainer}>
                  <View style={styles.illustrationBgCircle}>
                    <View style={styles.emptyIconBox}>
                      <Ionicons name="document-text-outline" size={36} color={COLORS.primaryLight} />
                    </View>
                  </View>
                  <View style={[styles.floatingBubble, styles.floatingTopRight]}>
                    <Ionicons name="sparkles" size={16} color={COLORS.secondary} />
                  </View>
                  <View style={[styles.floatingBubble, styles.floatingBottomLeft]}>
                    <Ionicons name="pencil" size={14} color={COLORS.primarySoft} />
                  </View>
                </View>
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
                    <Ionicons name="checkmark" size={18} color={COLORS.success} />
                  </View>
                </View>
              ))
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
              <Ionicons name="lock-closed" size={36} color="#F59E0B" />
            </View>
            <Text style={styles.limitTitle}>{t('rateLimit.title')}</Text>
            <Text style={styles.limitMessage}>{t('rateLimit.message')}</Text>

            <View style={styles.limitDivider} />

            <View style={styles.limitPremiumBox}>
              <View style={styles.limitPremiumHeader}>
                <Ionicons name="star" size={20} color="#F59E0B" />
                <Text style={styles.limitPremiumTitle}>{t('rateLimit.premiumTitle')}</Text>
              </View>
              <Text style={styles.limitPremiumDesc}>{t('rateLimit.premiumDesc')}</Text>
            </View>

            <TouchableOpacity
              style={styles.limitPremiumButton}
              onPress={() => {
                setShowLimitModal(false);
                setTimeout(() => setShowPremiumModal(true), 300);
              }}
            >
              <LinearGradient
                colors={['#F59E0B', '#D97706']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.limitPremiumGradient}
              >
                <Ionicons name="star" size={18} color="#FFFFFF" />
                <Text style={styles.limitPremiumButtonText}>{t('rateLimit.upgradePremium')}</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.limitCloseButton}
              onPress={() => setShowLimitModal(false)}
            >
              <Text style={styles.limitCloseText}>{t('rateLimit.tryTomorrow')}</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Header Gradient
  headerGradient: {
    paddingTop: 56,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerGreeting: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '600',
    marginBottom: 4,
  },
  headerQuestion: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  avatarButton: {
    marginLeft: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  avatarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // Quick Stats in Header
  quickStats: {
    flexDirection: 'row',
    marginHorizontal: 22,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  quickStatItem: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  quickStatNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  quickStatLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
    textAlign: 'center',
  },
  quickStatDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 4,
  },

  // Main Content
  content: {
    marginTop: -4,
  },

  // Scan Card
  scanCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 22,
    marginHorizontal: 18,
    marginTop: 16,
    padding: 20,
    ...SHADOWS.medium,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.tabBg,
    borderRadius: 14,
    padding: 4,
    marginBottom: 18,
  },
  tab: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: COLORS.primarySoft,
    ...SHADOWS.small,
  },
  tabInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textSubtle,
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  keyboardMode: {
    gap: 0,
  },
  cameraMode: {},
  mathDisplayArea: {
    backgroundColor: COLORS.inputBg,
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
    borderRadius: 16,
    minHeight: 120,
    maxHeight: 160,
  },
  mathTextInput: {
    fontSize: 18,
    color: COLORS.text,
    fontFamily: 'System',
    lineHeight: 26,
    padding: 16,
    minHeight: 120,
    maxHeight: 160,
    outlineStyle: 'none', // Remove focus outline on web
  },
  mathDisplayScroll: {
    flex: 1,
  },
  mathDisplayText: {
    fontSize: 20,
    color: COLORS.text,
    fontFamily: 'System',
    lineHeight: 28,
  },
  mathDisplayPlaceholder: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 22,
  },
  mathActionRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 12,
  },
  halfButton: {
    flex: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  halfButtonDisabled: {
    opacity: 0.5,
  },
  buttonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 14,
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  analyzeButtonFull: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  analyzeGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 14,
  },
  analyzeButtonDisabled: {
    opacity: 0.5,
  },
  analyzeButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  analyzeButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: 14,
  },
  uploadCard: {
    flex: 1,
    backgroundColor: COLORS.inputBg,
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
    borderStyle: 'dashed',
  },
  uploadIconBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
    borderRadius: 16,
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: 220,
    backgroundColor: COLORS.borderLight,
    borderRadius: 16,
    marginBottom: 12,
  },
  imageActions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  calculateBtn: {
    flex: 1,
    backgroundColor: '#3B82F6',
  },
  analyzeBtn: {
    flex: 1,
    backgroundColor: COLORS.primarySoft,
  },
  removeBtn: {
    flex: 1,
    backgroundColor: COLORS.destructive,
  },
  actionBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Daily Goal
  goalCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 22,
    marginHorizontal: 18,
    marginTop: 16,
    padding: 20,
    ...SHADOWS.medium,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  goalIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  goalTextContainer: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
  },
  goalCount: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primarySoft,
    marginTop: 2,
  },
  goalCompleteBadge: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarBg: {
    height: 10,
    backgroundColor: COLORS.primaryBg,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  goalEncouragementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  goalEncouragement: {
    fontSize: 13,
    color: COLORS.textSubtle,
    fontWeight: '600',
  },

  // Statistics
  statsSection: {
    marginHorizontal: 18,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: (width - 18 * 2 - 12) / 2,
    borderRadius: 20,
    padding: 18,
  },
  statCardDesktop: {
    width: 'auto',
    flexBasis: '22%',
    flexGrow: 1,
  },
  statIconBox: {
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSubtle,
    fontWeight: '500',
  },

  // Recent Activity
  activitySection: {
    marginHorizontal: 18,
    marginTop: 24,
  },
  emptyActivity: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  illustrationContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  illustrationBgCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.inputBorder,
  },
  emptyIconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  floatingBubble: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  floatingTopRight: {
    top: 2,
    right: 0,
  },
  floatingBottomLeft: {
    bottom: 2,
    left: 0,
  },
  emptyActivityText: {
    fontSize: 14,
    color: COLORS.textSubtle,
    textAlign: 'center',
    lineHeight: 20,
  },
  activityCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    ...SHADOWS.soft,
  },
  activityThumb: {
    width: 52,
    height: 52,
    borderRadius: 14,
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
    color: COLORS.textMuted,
  },
  activityBadge: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: COLORS.successLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  // Daily Limit Modal
  limitOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  limitModal: {
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 28,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    ...SHADOWS.large,
  },
  limitIconBox: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  limitTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  limitMessage: {
    fontSize: 14,
    color: COLORS.textSubtle,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  limitDivider: {
    height: 1,
    backgroundColor: COLORS.borderLight,
    width: '100%',
    marginBottom: 20,
  },
  limitPremiumBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 16,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  limitPremiumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  limitPremiumTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#92400E',
  },
  limitPremiumDesc: {
    fontSize: 13,
    color: '#A16207',
    lineHeight: 18,
  },
  limitPremiumButton: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 12,
  },
  limitPremiumGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 8,
    borderRadius: 14,
  },
  limitPremiumButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  limitCloseButton: {
    paddingVertical: 10,
  },
  limitCloseText: {
    fontSize: 14,
    color: COLORS.textSubtle,
    fontWeight: '600',
  },
});
