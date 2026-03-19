import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';
import MathText from './MathText';

export default function ResultsModal({ visible, result, onClose, onSave, imageUri }) {
  const { t } = useTranslation();
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(false);

  if (!result) return null;

  const { answer, steps, explanation, solverType } = result;

  const handleSave = async () => {
    if (!onSave) return;

    try {
      setIsSaving(true);
      setSaveError(false);
      await onSave();
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      setSaveError(true);
      setTimeout(() => setSaveError(false), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{t('results.title')}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color={COLORS.textSecondary} />
            </TouchableOpacity>
          </View>

          {/* Solver Type Badge */}
          {solverType && (
            <View style={styles.badgeContainer}>
              <View style={[
                styles.badge,
                solverType === 'local' ? styles.badgeLocal :
                solverType === 'wolfram' ? styles.badgeWolfram :
                styles.badgeAI
              ]}>
                <Ionicons
                  name={solverType === 'local' ? 'calculator' : solverType === 'wolfram' ? 'globe-outline' : 'sparkles'}
                  size={14}
                  color={solverType === 'local' ? '#2563EB' : solverType === 'wolfram' ? '#D97706' : COLORS.primary}
                />
                <Text style={[
                  styles.badgeText,
                  solverType === 'local' ? styles.badgeTextLocal :
                  solverType === 'wolfram' ? styles.badgeTextWolfram :
                  styles.badgeTextAI
                ]}>
                  {solverType === 'local' ? t('dashboard.calculatedLocally') :
                   solverType === 'wolfram' ? t('dashboard.calculatedWithWolfram') :
                   t('dashboard.analyzedWithAI')}
                </Text>
              </View>
            </View>
          )}

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Answer */}
            {answer && (
              <View style={styles.answerSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>✅</Text>
                  <Text style={styles.sectionTitle}>{t('results.answer')}</Text>
                </View>
                <View style={styles.answerCard}>
                  <MathText
                    fontSize={22}
                    color={COLORS.surface}
                    background={COLORS.primary}
                    minHeight={36}
                  >
                    {answer}
                  </MathText>
                </View>
              </View>
            )}

            {/* Steps */}
            {steps && steps.length > 0 && (
              <View style={styles.stepsSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>📝</Text>
                  <Text style={styles.sectionTitle}>{t('results.steps')}</Text>
                </View>
                {steps.map((step, index) => (
                  <View key={index} style={styles.stepCard}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepNumberText}>{index + 1}</Text>
                    </View>
                    <MathText
                      fontSize={15}
                      color={COLORS.textDark}
                      minHeight={24}
                    >
                      {step}
                    </MathText>
                  </View>
                ))}
              </View>
            )}

            {/* Explanation */}
            {explanation && (
              <View style={styles.explanationSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>💡</Text>
                  <Text style={styles.sectionTitle}>{t('results.explanation')}</Text>
                </View>
                <View style={styles.explanationCard}>
                  <MathText
                    fontSize={15}
                    color={COLORS.textSecondary}
                    minHeight={40}
                  >
                    {explanation}
                  </MathText>
                </View>
              </View>
            )}

            <View style={{ height: 100 }} />
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            {saveSuccess && (
              <View style={styles.successBanner}>
                <Text style={styles.successBannerText}>✅ {t('results.savedSuccess')}</Text>
              </View>
            )}
            {saveError && (
              <View style={styles.errorBanner}>
                <Text style={styles.errorBannerText}>❌ {t('results.savedError')}</Text>
              </View>
            )}
            <TouchableOpacity
              style={[styles.footerButton, saveSuccess ? styles.savedButton : styles.saveButton]}
              onPress={handleSave}
              disabled={isSaving || saveSuccess}
            >
              <Text style={styles.footerButtonText}>
                {isSaving ? `⏳ ${t('results.saving')}` : saveSuccess ? `✅ ${t('results.saved')}` : `💾 ${t('results.saveProblem')}`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.footerButton, styles.closeButtonFooter]}
              onPress={onClose}
            >
              <Text style={styles.footerButtonText}>{t('common.close')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.xl,
    paddingTop: 10,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textDark,
  },
  badgeContainer: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.md,
    backgroundColor: COLORS.surface,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.md,
    gap: 6,
  },
  badgeLocal: {
    backgroundColor: '#EFF6FF',
  },
  badgeAI: {
    backgroundColor: COLORS.primaryBg,
  },
  badgeWolfram: {
    backgroundColor: '#FEF3C7',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  badgeTextLocal: {
    color: '#2563EB',
  },
  badgeTextAI: {
    color: COLORS.primary,
  },
  badgeTextWolfram: {
    color: '#D97706',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: BORDER_RADIUS.md,
    marginTop: 10,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textDark,
  },
  answerSection: {
    marginBottom: 25,
  },
  answerCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    padding: SPACING.xl,
    ...SHADOWS.medium,
  },
  answerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textLight,
    textAlign: 'center',
  },
  stepsSection: {
    marginBottom: 25,
  },
  stepCard: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    ...SHADOWS.small,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: BORDER_RADIUS.md,
    marginTop: 2,
  },
  stepNumberText: {
    ...TYPOGRAPHY.bodyLargeBold,
    color: COLORS.textLight,
  },
  stepText: {
    flex: 1,
    ...TYPOGRAPHY.bodyLarge,
    color: COLORS.textDark,
    lineHeight: 24,
  },
  explanationSection: {
    marginBottom: 25,
  },
  explanationCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 15,
    padding: SPACING.xl,
    ...SHADOWS.medium,
  },
  explanationText: {
    ...TYPOGRAPHY.bodyLarge,
    color: COLORS.textSecondary,
    lineHeight: 26,
  },
  footer: {
    padding: SPACING.xl,
    paddingBottom: 10,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    gap: 10,
  },
  footerButton: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  saveButton: {
    backgroundColor: COLORS.accent,
  },
  savedButton: {
    backgroundColor: COLORS.success,
  },
  successBanner: {
    backgroundColor: COLORS.successLight,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: SPACING.lg,
    borderWidth: 1,
    borderColor: '#86EFAC',
    marginBottom: 4,
  },
  successBannerText: {
    ...TYPOGRAPHY.body,
    color: '#166534',
    fontWeight: '600',
    textAlign: 'center',
  },
  errorBanner: {
    backgroundColor: '#FFF0F0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: SPACING.lg,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    marginBottom: 4,
  },
  errorBannerText: {
    ...TYPOGRAPHY.body,
    color: '#991B1B',
    fontWeight: '600',
    textAlign: 'center',
  },
  closeButtonFooter: {
    backgroundColor: '#95A5A6',
  },
  footerButtonText: {
    ...TYPOGRAPHY.h3,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
});
