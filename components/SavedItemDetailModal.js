import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { getLocale } from '../locales/i18n';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function SavedItemDetailModal({ visible, item, onClose, onDelete }) {
  const { t } = useTranslation();
  const { language } = useLanguage();

  if (!item) return null;

  const { imageUri, answer, steps, explanation, savedAt } = item;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(getLocale(language), {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
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
            <Text style={styles.headerTitle}>{t('savedItemDetail.title')}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>{'\u2715'}</Text>
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Image Preview */}
            {imageUri && (
              <View style={styles.imageSection}>
                <Image source={{ uri: imageUri }} style={styles.image} />
                <Text style={styles.imageDate}>{t('savedItemDetail.savedAt', { date: formatDate(savedAt) })}</Text>
              </View>
            )}

            {/* Answer */}
            {answer && (
              <View style={styles.answerSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>{'\u2705'}</Text>
                  <Text style={styles.sectionTitle}>{t('savedItemDetail.answer')}</Text>
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
                  <Text style={styles.sectionIcon}>{'\u{1F4DD}'}</Text>
                  <Text style={styles.sectionTitle}>{t('savedItemDetail.steps')}</Text>
                </View>
                {steps.map((step, index) => (
                  <View key={index} style={styles.stepCard}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.stepText}>{step}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Explanation */}
            {explanation && (
              <View style={styles.explanationSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>{'\u{1F4A1}'}</Text>
                  <Text style={styles.sectionTitle}>{t('savedItemDetail.explanation')}</Text>
                </View>
                <View style={styles.explanationCard}>
                  <Text style={styles.explanationText}>{explanation}</Text>
                </View>
              </View>
            )}

            <View style={{ height: 100 }} />
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.footerButton, styles.deleteButton]}
              onPress={onDelete}
            >
              <Text style={styles.footerButtonText}>{'\u{1F5D1}\uFE0F'} {t('savedItemDetail.deleteProblem')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={onClose}>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: COLORS.textSecondary,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: SPACING.xl,
  },
  imageSection: {
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    backgroundColor: COLORS.borderLight,
    marginBottom: 10,
  },
  imageDate: {
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
    marginTop: 10,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
    marginTop: 2,
  },
  stepNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
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
    fontSize: 16,
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
  deleteButton: {
    backgroundColor: COLORS.destructive,
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
});
