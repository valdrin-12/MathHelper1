import { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { getLocale } from '../locales/i18n';
import { useSavedItems } from '../context/SavedItemsContext';
import SavedItemDetailModal from '../components/SavedItemDetailModal';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme/constants';

export default function SavedScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { language } = useLanguage();
  const { savedItems, removeItem, refresh } = useSavedItems();
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
      {/* Header with Gradient */}
      <LinearGradient
        colors={[COLORS.primary, COLORS.primarySoft, COLORS.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerTitle}>{t('saved.title')}</Text>
            <Text style={styles.headerSubtitle}>
              {t('saved.itemCount', { count: savedItems.length })}
            </Text>
          </View>
          <View style={styles.headerIconBox}>
            <Ionicons name="bookmark" size={26} color="rgba(255,255,255,0.9)" />
          </View>
        </View>

        {/* Glass stats */}
        <View style={styles.glassStatsRow}>
          <View style={styles.glassStatCard}>
            <Ionicons name="camera-outline" size={18} color="rgba(255,255,255,0.9)" />
            <Text style={styles.glassStatValue}>
              {savedItems.filter(i => i.imageData).length}
            </Text>
            <Text style={styles.glassStatLabel}>{t('saved.photoItem')}</Text>
          </View>
          <View style={styles.glassStatCard}>
            <Ionicons name="keypad-outline" size={18} color="rgba(255,255,255,0.9)" />
            <Text style={styles.glassStatValue}>
              {savedItems.filter(i => i.problemText).length}
            </Text>
            <Text style={styles.glassStatLabel}>{t('saved.textItem')}</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Content */}
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {savedItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <View style={styles.illustrationContainer}>
              <View style={styles.illustrationBgCircle}>
                <View style={styles.emptyIconBox}>
                  <Ionicons name="bookmarks-outline" size={36} color={COLORS.primaryLight} />
                </View>
              </View>
              <View style={[styles.floatingBubble, styles.floatingTopRight]}>
                <Ionicons name="bookmark" size={16} color={COLORS.primarySoft} />
              </View>
              <View style={[styles.floatingBubble, styles.floatingBottomLeft]}>
                <Ionicons name="star" size={14} color={COLORS.secondary} />
              </View>
            </View>
            <Text style={styles.emptyTitle}>{t('saved.noSavedItems')}</Text>
            <Text style={styles.emptyText}>
              {t('saved.savedItemsHint')}
            </Text>
            <TouchableOpacity style={styles.emptyHintButton} onPress={() => navigation.navigate('Dashboard')}>
              <Ionicons name="arrow-forward-circle" size={18} color={COLORS.primarySoft} />
              <Text style={styles.emptyHint}>
                {t('saved.goToDashboard')}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.itemsList}>
            {savedItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.glassItemCard}
                onPress={() => handleViewItem(item)}
                activeOpacity={0.85}
              >
                {/* Glass layer */}
                <View style={styles.glassLayer} />

                {/* Image or Text Preview */}
                {item.imageData ? (
                  <Image source={{ uri: `data:image/jpeg;base64,${item.imageData}` }} style={styles.itemImage} />
                ) : item.problemText ? (
                  <View style={styles.textPreviewBox}>
                    <Ionicons name="keypad" size={22} color={COLORS.primarySoft} style={{ marginBottom: 8 }} />
                    <Text style={styles.textPreviewText} numberOfLines={3}>
                      {item.problemText}
                    </Text>
                  </View>
                ) : null}

                {/* Content */}
                <View style={styles.itemContent}>
                  <View style={styles.itemHeader}>
                    <View style={styles.itemTypeRow}>
                      <Ionicons
                        name={item.imageData ? 'camera' : 'keypad'}
                        size={16}
                        color={COLORS.primarySoft}
                      />
                      <Text style={styles.itemTitle} numberOfLines={1}>
                        {item.imageData ? t('saved.photoItem') : t('saved.textItem')}
                      </Text>
                    </View>
                    <Text style={styles.itemDate}>{formatDate(item.savedAt)}</Text>
                  </View>

                  {item.answer && (
                    <View style={styles.answerPreview}>
                      <View style={styles.answerLabelRow}>
                        <Ionicons name="checkmark-circle" size={14} color={COLORS.primarySoft} />
                        <Text style={styles.answerLabel}>{t('saved.answer')}</Text>
                      </View>
                      <Text style={styles.answerPreviewText}>
                        {getPreviewText(item.answer)}
                      </Text>
                    </View>
                  )}

                  {item.steps && item.steps.length > 0 && (
                    <View style={styles.stepsInfo}>
                      <Ionicons name="list" size={14} color={COLORS.textSubtle} />
                      <Text style={styles.stepsCount}>
                        {t('saved.stepsCount', { count: item.steps.length })}
                      </Text>
                    </View>
                  )}

                  <View style={styles.itemFooter}>
                    <Text style={styles.viewButtonText}>{t('saved.viewDetails')}</Text>
                    <Ionicons name="arrow-forward" size={16} color={COLORS.primarySoft} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}

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
    backgroundColor: COLORS.background,
  },

  // Header Gradient
  headerGradient: {
    paddingHorizontal: SPACING.xl,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  headerIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },

  // Glass Stats
  glassStatsRow: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  glassStatCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    gap: 4,
  },
  glassStatValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  glassStatLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '600',
  },

  contentContainer: {
    flex: 1,
  },
  itemsList: {
    padding: SPACING.xl,
  },

  // Glassmorphism Item Card
  glassItemCard: {
    borderRadius: 22,
    marginBottom: SPACING.lg,
    overflow: 'hidden',
    backgroundColor: COLORS.glassBackground,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    ...SHADOWS.glass,
  },
  glassLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.glassBackgroundDark,
    borderRadius: 22,
  },
  itemImage: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.borderLight,
  },
  textPreviewBox: {
    width: '100%',
    minHeight: 100,
    backgroundColor: COLORS.glassBackgroundDark,
    padding: SPACING.lg,
  },
  textPreviewText: {
    fontSize: 14,
    color: COLORS.textSubtle,
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
  itemTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  itemDate: {
    fontSize: 13,
    color: COLORS.textMuted,
    fontWeight: '500',
  },
  answerPreview: {
    backgroundColor: COLORS.glassBackgroundDark,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primarySoft,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.md,
  },
  answerLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  answerLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primarySoft,
  },
  answerPreviewText: {
    fontSize: 15,
    color: COLORS.text,
    lineHeight: 22,
  },
  stepsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: SPACING.md,
  },
  stepsCount: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSubtle,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: COLORS.glassBorder,
    paddingTop: SPACING.md,
    gap: 4,
  },
  viewButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primarySoft,
  },

  // Empty State
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 60,
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
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: COLORS.textSubtle,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: SPACING.lg,
  },
  emptyHintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  emptyHint: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primarySoft,
  },
});
