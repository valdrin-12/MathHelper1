import React, { useState, useMemo } from 'react';
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
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { Button, Pill } from './ui';

export default function ResultsModal({ visible, result, onClose, onSave, imageUri }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
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

  // Solver badge tint: local = blue, Wolfram = orange, AI = purple
  const solverColor = solverType === 'local' ? colors.primary : solverType === 'wolfram' ? colors.secondary : colors.purple;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Navigation bar: centered title, close on the right */}
          <View style={styles.header}>
            <View style={styles.headerSide} />
            <Text style={styles.headerTitle} numberOfLines={1}>{t('results.title')}</Text>
            <View style={[styles.headerSide, styles.headerSideRight]}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton} hitSlop={8} activeOpacity={0.6}>
                <Ionicons name="close" size={18} color={colors.textSubtle} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.content} contentContainerStyle={styles.contentInner} showsVerticalScrollIndicator={false}>
            {/* Solver Type Badge */}
            {solverType && (
              <View style={styles.badgeContainer}>
                <Pill
                  icon={solverType === 'local' ? 'calculator' : solverType === 'wolfram' ? 'globe-outline' : 'sparkles'}
                  color={solverColor}
                  label={solverType === 'local' ? t('dashboard.calculatedLocally') :
                    solverType === 'wolfram' ? t('dashboard.calculatedWithWolfram') :
                    t('dashboard.analyzedWithAI')}
                />
              </View>
            )}

            {/* Answer */}
            {answer && (
              <View style={styles.answerSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>✅</Text>
                  <Text style={styles.sectionTitle}>{t('results.answer')}</Text>
                </View>
                <View style={styles.answerCard}>
                  <Text style={styles.answerText}>{answer}</Text>
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
                <View style={styles.stepsCard}>
                  {steps.map((step, index) => (
                    <View key={index}>
                      <View style={styles.stepCard}>
                        <View style={styles.stepNumber}>
                          <Text style={styles.stepNumberText}>{index + 1}</Text>
                        </View>
                        <Text style={styles.stepText}>{step}</Text>
                      </View>
                      {index < steps.length - 1 ? <View style={styles.stepDivider} /> : null}
                    </View>
                  ))}
                </View>
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
                  <Text style={styles.explanationText}>{explanation}</Text>
                </View>
              </View>
            )}

            <View style={{ height: 40 }} />
          </ScrollView>

          {/* AI Disclaimer — shown for AI and Wolfram results */}
          {(solverType === 'ai' || solverType === 'wolfram') && (
            <View style={styles.aiDisclaimer}>
              <Text style={styles.aiDisclaimerText}>{t('results.aiDisclaimer')}</Text>
            </View>
          )}

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
            <Button
              title={isSaving ? `⏳ ${t('results.saving')}` : saveSuccess ? `✅ ${t('results.saved')}` : `💾 ${t('results.saveProblem')}`}
              tone={saveSuccess ? 'success' : 'primary'}
              onPress={handleSave}
              disabled={isSaving || saveSuccess}
              style={saveSuccess ? styles.savedButton : null}
            />
            <Button
              title={t('common.close')}
              variant="tinted"
              onPress={onClose}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const HAIRLINE = StyleSheet.hairlineWidth;

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: colors.background,
    borderBottomWidth: HAIRLINE,
    borderBottomColor: colors.border,
  },
  headerSide: {
    width: 44,
  },
  headerSideRight: {
    alignItems: 'flex-end',
  },
  headerTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    flex: 1,
    textAlign: 'center',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
  },
  contentInner: {
    padding: SPACING.lg,
  },
  badgeContainer: {
    marginBottom: SPACING.md,
  },

  // Sections
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    marginTop: SPACING.sm,
  },
  sectionIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    fontWeight: '700',
    color: colors.text,
  },
  answerSection: {
    marginBottom: SPACING.xl,
  },
  answerCard: {
    backgroundColor: colors.primary,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.xl,
  },
  answerText: {
    ...TYPOGRAPHY.h2,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Steps: one grouped card with inset hairlines
  stepsSection: {
    marginBottom: SPACING.xl,
  },
  stepsCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md + 2,
  },
  stepDivider: {
    height: HAIRLINE,
    backgroundColor: colors.border,
    marginLeft: SPACING.lg + 28 + SPACING.md,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primaryBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  stepNumberText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.primary,
  },
  stepText: {
    flex: 1,
    ...TYPOGRAPHY.body,
    lineHeight: 24,
    color: colors.text,
    paddingTop: 2,
  },

  explanationSection: {
    marginBottom: SPACING.xl,
  },
  explanationCard: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
  },
  explanationText: {
    ...TYPOGRAPHY.body,
    lineHeight: 24,
    color: colors.textSecondary,
  },

  // Footer
  footer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    backgroundColor: colors.surface,
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
    gap: SPACING.sm + 2,
  },
  // Keep the "saved" state fully opaque instead of dimmed-disabled
  savedButton: {
    opacity: 1,
  },
  aiDisclaimer: {
    backgroundColor: colors.warningLight,
    borderTopWidth: HAIRLINE,
    borderTopColor: colors.border,
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.xl,
  },
  aiDisclaimerText: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  successBanner: {
    backgroundColor: colors.successLight,
    borderRadius: BORDER_RADIUS.sm,
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.lg,
  },
  successBannerText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
    textAlign: 'center',
  },
  errorBanner: {
    backgroundColor: colors.errorLight,
    borderRadius: BORDER_RADIUS.sm,
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.lg,
  },
  errorBannerText: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.text,
    textAlign: 'center',
  },
});
