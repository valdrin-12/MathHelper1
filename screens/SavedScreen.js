import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { getLocale } from '../locales/i18n';
import { useSavedItems } from '../context/SavedItemsContext';
import SavedItemDetailModal from '../components/SavedItemDetailModal';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function SavedScreen() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { savedItems, loading, removeItem, refresh } = useSavedItems();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setShowDetailModal(true);
  };

  const handleDeleteItem = async () => {
    if (!selectedItem) return;

    Alert.alert(
      t('saved.confirmDelete'),
      t('saved.confirmDeleteMessage'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: async () => {
            try {
              await removeItem(selectedItem.id);
              setShowDetailModal(false);
              setSelectedItem(null);
              Alert.alert(t('common.success'), t('saved.deleteSuccess'));
            } catch (error) {
              Alert.alert(t('common.error'), t('saved.deleteError'));
            }
          },
        },
      ]
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(getLocale(language), {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getPreviewText = (answer) => {
    if (!answer) return t('saved.noAnswer');
    return answer.length > 50 ? answer.substring(0, 50) + '...' : answer;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('saved.title')}</Text>
        <Text style={styles.headerSubtitle}>
          {t('saved.itemCount', { count: savedItems.length })}
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {savedItems.length === 0 ? (
          // Empty State
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyTitle}>{t('saved.noSavedItems')}</Text>
            <Text style={styles.emptyText}>
              {t('saved.savedItemsHint')}
            </Text>
            <Text style={styles.emptyHint}>
              {t('saved.goToDashboard')} 🚀
            </Text>
          </View>
        ) : (
          // List of Saved Items
          <View style={styles.itemsList}>
            {savedItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemCard}
                onPress={() => handleViewItem(item)}
              >
                {/* Image or Text Preview */}
                {item.imageUri ? (
                  <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
                ) : item.problemText ? (
                  <View style={styles.textPreviewBox}>
                    <Text style={styles.textPreviewIcon}>⌨️</Text>
                    <Text style={styles.textPreviewText} numberOfLines={3}>
                      {item.problemText}
                    </Text>
                  </View>
                ) : null}

                {/* Content */}
                <View style={styles.itemContent}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemTitle}>
                      {item.imageUri ? `📷 ${t('saved.photoItem')}` : `⌨️ ${t('saved.textItem')}`}
                    </Text>
                    <Text style={styles.itemDate}>{formatDate(item.savedAt)}</Text>
                  </View>

                  {item.answer && (
                    <View style={styles.answerPreview}>
                      <Text style={styles.answerLabel}>{t('saved.answer')}</Text>
                      <Text style={styles.answerPreviewText}>
                        {getPreviewText(item.answer)}
                      </Text>
                    </View>
                  )}

                  {item.steps && item.steps.length > 0 && (
                    <View style={styles.stepsInfo}>
                      <Text style={styles.stepsCount}>
                        📝 {t('saved.stepsCount', { count: item.steps.length })}
                      </Text>
                    </View>
                  )}

                  <View style={styles.itemFooter}>
                    <Text style={styles.viewButtonText}>{t('saved.viewDetails')}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/* Bottom Spacing */}
            <View style={{ height: SPACING.xl }} />
          </View>
        )}
      </ScrollView>

      {/* Detail Modal */}
      <SavedItemDetailModal
        visible={showDetailModal}
        item={selectedItem}
        onClose={() => {
          setShowDetailModal(false);
          setSelectedItem(null);
        }}
        onDelete={handleDeleteItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundAlt,
  },
  header: {
    padding: SPACING.xl,
    paddingTop: 60,
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    ...TYPOGRAPHY.h1,
    color: COLORS.textOnPrimary,
    marginBottom: SPACING.xs,
  },
  headerSubtitle: {
    ...TYPOGRAPHY.label,
    color: COLORS.textOnPrimary,
    opacity: 0.9,
  },
  contentContainer: {
    flex: 1,
  },
  itemsList: {
    padding: SPACING.xl,
  },
  itemCard: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.lg,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  itemImage: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.borderLight,
  },
  textPreviewBox: {
    width: '100%',
    minHeight: 120,
    backgroundColor: COLORS.inputBg,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: COLORS.inputBorder,
  },
  textPreviewIcon: {
    fontSize: 24,
    marginBottom: SPACING.sm,
  },
  textPreviewText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    fontFamily: 'System',
  },
  itemContent: {
    padding: SPACING.lg,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  itemTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textDark,
  },
  itemDate: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
  },
  answerPreview: {
    backgroundColor: COLORS.backgroundAlt,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.md,
  },
  answerLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  answerPreviewText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textDark,
    lineHeight: 22,
  },
  stepsInfo: {
    marginBottom: SPACING.md,
  },
  stepsCount: {
    ...TYPOGRAPHY.label,
    color: COLORS.textSecondary,
  },
  itemFooter: {
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    paddingTop: SPACING.md,
    alignItems: 'flex-end',
  },
  viewButtonText: {
    ...TYPOGRAPHY.bodyBold,
    color: COLORS.primary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 80,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: SPACING.xl,
  },
  emptyTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textDark,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  emptyText: {
    ...TYPOGRAPHY.bodyLarge,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: SPACING.lg,
  },
  emptyHint: {
    ...TYPOGRAPHY.label,
    color: COLORS.primary,
    textAlign: 'center',
  },
});
