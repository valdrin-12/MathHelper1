import { useState, useMemo } from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import { SPACING, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { ScreenHeader, ListSection, ListRow, Button, EmptyState } from '../components/ui';
import WebContainer from '../components/WebContainer';
import { useResponsive } from '../utils/responsive';

export default function SavedScreen() {
  const { isWeb, isDesktop } = useResponsive();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { language } = useLanguage();
  const { savedItems, removeItem, refresh } = useSavedItems();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState(new Set());

  const toggleSelectionMode = () => {
    setSelectionMode(prev => !prev);
    setSelectedIds(new Set());
  };

  const toggleSelectItem = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = () =>
    setSelectedIds(new Set(savedItems.map(i => i.id)));

  const handleBulkDelete = () => {
    if (selectedIds.size === 0) return;
    Alert.alert(
      t('saved.confirmDelete'),
      t('saved.confirmBulkDelete', { count: selectedIds.size }),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: async () => {
            // allSettled ensures every deletion is attempted even if one fails
            const results = await Promise.allSettled(
              [...selectedIds].map(id => removeItem(id))
            );
            const failed = results.filter(r => r.status === 'rejected').length;
            setSelectionMode(false);
            setSelectedIds(new Set());
            if (failed > 0) {
              Alert.alert(t('common.error'), t('saved.deleteError'));
            }
          },
        },
      ]
    );
  };

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

  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <WebContainer>
        <ScreenHeader
          title={t('saved.title')}
          subtitle={t('saved.itemCount', { count: savedItems.length })}
          right={savedItems.length > 0 ? (
            <TouchableOpacity onPress={toggleSelectionMode} style={styles.headerButton} activeOpacity={0.7}>
              <Ionicons name={selectionMode ? 'close' : 'checkmark-done'} size={20} color={colors.primary} />
            </TouchableOpacity>
          ) : null}
        />

        {savedItems.length === 0 ? (
          <View>
            <EmptyState icon="bookmarks-outline" title={t('saved.noSavedItems')} message={t('saved.savedItemsHint')} />
            <Button
              style={styles.emptyButton}
              variant="tinted"
              title={t('saved.goToDashboard')}
              onPress={() => navigation.navigate('Dashboard')}
            />
          </View>
        ) : (
          <>
          {selectionMode && (
            <View style={styles.selectionBar}>
              <Button variant="plain" icon="checkmark-done" title={t('saved.selectAll')} onPress={selectAll} style={styles.selectionButton} />
              <Text style={styles.selectionCount}>{t('saved.selectedCount', { count: selectedIds.size })}</Text>
              <Button
                variant="tinted"
                tone="destructive"
                icon="trash"
                title={t('common.delete')}
                onPress={handleBulkDelete}
                disabled={selectedIds.size === 0}
                style={styles.selectionButton}
              />
            </View>
          )}
          <ListSection style={styles.list}>
            {savedItems.map((item) => {
              const selected = selectedIds.has(item.id);
              const meta = [
                item.imageData ? t('saved.photoItem') : t('saved.textItem'),
                formatDate(item.savedAt),
                item.steps?.length ? t('saved.stepsCount', { count: item.steps.length }) : null,
              ].filter(Boolean).join('  ·  ');
              return (
                <ListRow
                  key={item.id}
                  leadingWidth={52}
                  leading={item.imageData ? (
                    <Image source={{ uri: `data:image/jpeg;base64,${item.imageData}` }} style={styles.thumb} />
                  ) : (
                    <View style={styles.textThumb}>
                      <Ionicons name="keypad" size={20} color={colors.primary} />
                    </View>
                  )}
                  title={item.answer ? getPreviewText(item.answer) : item.problemText || t('saved.noAnswer')}
                  subtitle={meta}
                  right={selectionMode ? (
                    <Ionicons
                      name={selected ? 'checkmark-circle' : 'ellipse-outline'}
                      size={24}
                      color={selected ? colors.primary : colors.textPlaceholder}
                      style={styles.check}
                    />
                  ) : null}
                  onPress={() => selectionMode ? toggleSelectItem(item.id) : handleViewItem(item)}
                  onLongPress={() => { if (!selectionMode) { setSelectionMode(true); toggleSelectItem(item.id); } }}
                />
              );
            })}
          </ListSection>
          </>
        )}

        <View style={{ height: isWeb ? 20 : 100 }} />
        </WebContainer>
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

const makeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
  },
  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyButton: {
    marginHorizontal: SPACING.xl,
  },
  selectionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
  },
  selectionButton: {
    minHeight: 36,
    paddingHorizontal: SPACING.md,
  },
  selectionCount: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
  },
  list: {
    marginTop: SPACING.md,
  },
  thumb: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: colors.inputBg,
  },
  textThumb: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    marginLeft: SPACING.sm,
  },
});
