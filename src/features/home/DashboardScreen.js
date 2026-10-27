import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../../shared/ui/LoadingOverlay';
import ResultsModal from '../solver/ResultsModal';
import GraphModal from '../graph/GraphModal';
import ToolsModal from '../tools/ToolsModal';
import { useSavedItems } from '../saved/SavedItemsContext';
import { useUser } from '../auth/UserContext';
import { useStats } from '../progress/StatsContext';
import { useTheme } from '../../shared/theme/ThemeContext';
import ProfileModal from '../profile/ProfileModal';
import SavedItemDetailModal from '../saved/SavedItemDetailModal';
import PremiumModal from '../premium/PremiumModal';
import { ScreenHeader, ListSection, ListRow, showAlert, confirmAction, getErrorMessage } from '../../shared/ui';
import WebContainer from '../../shared/ui/WebContainer';
import { useResponsive } from '../../shared/utils/responsive';
import { getGreeting } from './dashboardUtils';
import { pickFromGallery, takeWithCamera } from './imagePicking';
import useSolveFlow from './useSolveFlow';
import { useDashboardStyles } from './dashboardStyles';
import DailyGoalCard from './DailyGoalCard';
import { useProgress } from '../progress/progress';
import SolveCard from './SolveCard';
import StatsGrid from './StatsGrid';
import RecentActivity from './RecentActivity';
import LimitModal from './LimitModal';
import AccountPrompt from '../auth/AccountPrompt';

// Home tab: greeting, daily goal, the solve card, tools, statistics and recent activity.
export default function DashboardScreen() {
  const { t } = useTranslation();
  const { addItem, savedItems, removeItem } = useSavedItems();
  const { user } = useUser();
  const { todayProblems, totalProblems, completedCoursesCount, completedQuizzesCount, streak, refresh, stats } = useStats();
  const { xp, level } = useProgress(stats, user?.id);
  const { colors } = useTheme();
  const { isWeb } = useResponsive();
  const styles = useDashboardStyles();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  const [inputMode, setInputMode] = useState('keyboard');
  const [mathProblemText, setMathProblemText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  // Picker asset dimensions, passed to the image service so it can skip an extra decode
  const [selectedImageSize, setSelectedImageSize] = useState(null);
  const [activityItem, setActivityItem] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showGraphModal, setShowGraphModal] = useState(false);
  const [showTools, setShowTools] = useState(false);
  // The graph opened from Tools starts empty; the Graph button uses the typed problem
  const [graphFromTools, setGraphFromTools] = useState(false);
  // guest: 'save' | 'profile' while the "create an account" prompt is open
  const [guestPrompt, setGuestPrompt] = useState(null);

  const solve = useSolveFlow({ inputMode, mathProblemText, selectedImage, selectedImageSize });

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
  const recentItems = useMemo(() => savedItems.slice(0, 3), [savedItems]);

  const selectAsset = (asset) => {
    setSelectedImage(asset.uri);
    setSelectedImageSize(asset.width && asset.height ? { width: asset.width, height: asset.height } : null);
    solve.forgetImage();
  };

  const pickImage = async () => {
    const asset = await pickFromGallery(t);
    if (asset) selectAsset(asset);
  };

  const takePhoto = async () => {
    const asset = await takeWithCamera(t);
    if (asset) selectAsset(asset);
  };

  const removeImage = () => {
    setSelectedImage(null);
    setSelectedImageSize(null);
    solve.forgetImage();
  };

  const handleSaveResult = async () => {
    try {
      if (!solve.analysisResult) {
        throw new Error(t('dashboard.noResultsToSave'));
      }
      const savedItem = {
        imageData: inputMode === 'camera' ? solve.lastBase64 : null,
        problemText: inputMode === 'keyboard' ? mathProblemText : null,
        answer: solve.analysisResult.answer,
        steps: solve.analysisResult.steps,
        explanation: solve.analysisResult.explanation,
      };
      await addItem(savedItem); // the problem was already counted as solved when the result appeared
    } catch (error) {
      console.error('Gabim gjate ruajtjes:', error);
      throw error;
    }
  };

  const handleDeleteActivityItem = async () => {
    if (!activityItem) return;
    const confirmed = await confirmAction({
      title: t('saved.confirmDelete'),
      message: t('saved.confirmDeleteMessage'),
      confirmText: t('common.delete'),
      cancelText: t('common.cancel'),
      destructive: true,
    });
    if (!confirmed) return;
    try {
      await removeItem(activityItem.id);
      setActivityItem(null);
    } catch (e) {
      showAlert(t('common.error'), getErrorMessage(e, t('saved.deleteError'), t));
    }
  };

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
            <TouchableOpacity
              style={styles.avatar}
              onPress={() => (user ? setShowProfile(true) : setGuestPrompt('profile'))}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel={t('a11y.profile')}
            >
              <Text style={styles.avatarText}>{user?.name ? user.name[0].toUpperCase() : '?'}</Text>
            </TouchableOpacity>
          }
        />

        <View style={styles.content}>
          <DailyGoalCard
            todayProblems={todayProblems}
            streak={streak}
            level={level}
            xp={xp.total}
            onPress={() => (user ? setShowProfile(true) : setGuestPrompt('profile'))}
          />

          <SolveCard
            inputMode={inputMode}
            onChangeMode={setInputMode}
            text={mathProblemText}
            onChangeText={setMathProblemText}
            image={selectedImage}
            isAnalyzing={solve.isAnalyzing}
            onCalculate={solve.handleCalculate}
            onAnalyzeAI={solve.handleAnalyzeWithAI}
            onOpenGraph={() => setShowGraphModal(true)}
            onPickImage={pickImage}
            onTakePhoto={takePhoto}
            onRemoveImage={removeImage}
          />

          {/* Offline tools & formula sheet */}
          <ListSection style={styles.toolsSection}>
            <ListRow
              icon="construct"
              iconColor={colors.purple}
              title={t('tools.openTools')}
              subtitle={t('tools.openToolsDesc')}
              onPress={() => setShowTools(true)}
            />
          </ListSection>

          <StatsGrid
            problems={totalProblems}
            streak={streak}
            courses={completedCoursesCount}
            quizzes={completedQuizzesCount}
          />

          <RecentActivity items={recentItems} onOpen={setActivityItem} />

          <View style={{ height: isWeb ? 30 : 100 }} />
        </View>
        </WebContainer>
      </ScrollView>

      <LoadingOverlay visible={solve.isAnalyzing} />

      <ResultsModal
        visible={solve.showResultModal}
        result={solve.analysisResult}
        imageUri={selectedImage}
        onClose={solve.closeResult}
        onSave={user ? handleSaveResult : () => {
          // one modal at a time: close the result, then ask for an account
          solve.closeResult();
          setTimeout(() => setGuestPrompt('save'), 400);
          return new Promise(() => {}); // the result screen is closing, keep its button idle
        }}
      />

      <AccountPrompt
        visible={!!(solve.accountPrompt || guestPrompt)}
        reason={solve.accountPrompt || guestPrompt || 'profile'}
        onClose={() => { solve.closeAccountPrompt(); setGuestPrompt(null); }}
      />

      <GraphModal
        visible={showGraphModal}
        functionText={graphFromTools ? '' : mathProblemText}
        onClose={() => { setShowGraphModal(false); setGraphFromTools(false); }}
      />

      <ToolsModal
        visible={showTools}
        onClose={() => setShowTools(false)}
        // Wait for the tools sheet to close before presenting the graph (one modal at a time on iOS)
        onOpenGraph={() => { setGraphFromTools(true); setTimeout(() => setShowGraphModal(true), 400); }}
      />

      <SavedItemDetailModal
        visible={!!activityItem}
        item={activityItem}
        onClose={() => setActivityItem(null)}
        onDelete={handleDeleteActivityItem}
      />

      <ProfileModal
        visible={showProfile}
        onClose={() => setShowProfile(false)}
        onUpgrade={() => setShowPremiumModal(true)}
      />

      <LimitModal
        visible={solve.showLimitModal}
        type={solve.limitType}
        onClose={solve.closeLimit}
        onUpgrade={() => {
          solve.closeLimit();
          setTimeout(() => setShowPremiumModal(true), 300);
        }}
      />

      <PremiumModal
        visible={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
      />
    </>
  );
}
