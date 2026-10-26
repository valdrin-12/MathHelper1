import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import { getLocale } from '../../shared/i18n/i18n';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';
import { useSavedItems } from './SavedItemsContext';
import { Button, getErrorMessage } from '../../shared/ui';

const toImageUri = (imageData) =>
  imageData.startsWith('data:') ? imageData : `data:image/jpeg;base64,${imageData}`;

export default function SavedItemDetailModal({ visible, item, onClose, onDelete }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const { getItem } = useSavedItems();
  // getItem is recreated on every provider render; keep it in a ref so it doesn't retrigger loads
  const getItemRef = useRef(getItem);
  getItemRef.current = getItem;
  const inlineImageRef = useRef(null);
  inlineImageRef.current = item?.imageData || null;
  const requestId = useRef(0);

  // List items only carry `hasImage`; the full item (with imageData) is fetched on open
  const [imageData, setImageData] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(null);

  const itemId = item?.id;
  const needsImage = !!item && (item.hasImage || !!item.imageData);

  const loadImage = useCallback(async () => {
    if (!itemId) return;
    if (inlineImageRef.current) {
      setImageData(inlineImageRef.current);
      return;
    }
    const id = ++requestId.current;
    setImageLoading(true);
    setImageError(null);
    try {
      const full = await getItemRef.current(itemId);
      if (id === requestId.current) setImageData(full?.imageData || null);
    } catch (e) {
      if (id === requestId.current) setImageError(getErrorMessage(e, t('savedItemDetail.imageLoadError'), t));
    } finally {
      if (id === requestId.current) setImageLoading(false);
    }
  }, [itemId, t]);

  useEffect(() => {
    requestId.current += 1; // ignore responses for a previously shown item
    setImageData(null);
    setImageError(null);
    setImageLoading(false);
    if (visible && needsImage) loadImage();
  }, [visible, itemId, needsImage, loadImage]);

  if (!item) return null;

  const { answer, steps, explanation, savedAt } = item;

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
          {/* Navigation bar: centered title, close on the right */}
          <View style={styles.header}>
            <View style={styles.headerSide} />
            <Text style={styles.headerTitle} numberOfLines={1}>{t('savedItemDetail.title')}</Text>
            <View style={[styles.headerSide, styles.headerSideRight]}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton} hitSlop={8} activeOpacity={0.6} accessibilityRole="button" accessibilityLabel={t('a11y.close')}>
                <Ionicons name="close" size={18} color={colors.textSubtle} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Content */}
          <ScrollView style={styles.content} contentContainerStyle={styles.contentInner} showsVerticalScrollIndicator={false}>
            {/* Image Preview */}
            {needsImage && (
              <View style={styles.imageSection}>
                {imageData ? (
                  <Image source={{ uri: toImageUri(imageData) }} style={styles.image} accessibilityIgnoresInvertColors />
                ) : (
                  <View style={[styles.image, styles.imagePlaceholder]}>
                    {imageLoading ? (
                      <ActivityIndicator color={colors.textMuted} />
                    ) : imageError ? (
                      <>
                        <Ionicons name="image-outline" size={32} color={colors.textMuted} />
                        <Text style={styles.imageErrorText}>{imageError}</Text>
                        <Button title={t('common.retry')} variant="plain" onPress={loadImage} />
                      </>
                    ) : (
                      <Ionicons name="image-outline" size={32} color={colors.textMuted} />
                    )}
                  </View>
                )}
                <Text style={styles.imageDate}>{t('savedItemDetail.savedAt', { date: formatDate(savedAt) })}</Text>
              </View>
            )}

            {/* Answer */}
            {answer && (
              <View style={styles.answerSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>{'✅'}</Text>
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
                  <Text style={styles.sectionIcon}>{'\u{1F4A1}'}</Text>
                  <Text style={styles.sectionTitle}>{t('savedItemDetail.explanation')}</Text>
                </View>
                <View style={styles.explanationCard}>
                  <Text style={styles.explanationText}>{explanation}</Text>
                </View>
              </View>
            )}

            <View style={{ height: 40 }} />
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <Button
              title={`\u{1F5D1}️ ${t('savedItemDetail.deleteProblem')}`}
              variant="tinted"
              tone="destructive"
              onPress={onDelete}
            />
            <Button title={t('common.close')} onPress={onClose} />
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

  // Image
  imageSection: {
    marginBottom: SPACING.xl,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: colors.surface,
    marginBottom: SPACING.sm,
  },
  imagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    padding: SPACING.lg,
  },
  imageErrorText: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textAlign: 'center',
  },
  imageDate: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textAlign: 'center',
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
});
