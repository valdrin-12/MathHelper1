import { useState, useMemo, useCallback, memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import { getLocale } from '../../shared/i18n/i18n';
import { useSavedItems } from './SavedItemsContext';
import { useUser } from '../auth/UserContext';
import * as storageService from '../../shared/api/storageService';
import SavedItemDetailModal from './SavedItemDetailModal';
import { useTabNavigate } from '../../shared/navigation/TabNavigationContext';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';
import {
  ScreenHeader, ListRow, Button, EmptyState, SearchField, showAlert, confirmAction, getErrorMessage,
} from '../../shared/ui';
import { useResponsive } from '../../shared/utils/responsive';

const WEB_MAX_WIDTH = 900;

// Lower-case without accents (ë → e, ç → c), so typing without them still finds the problem
const fold = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const matches = (item, q) => fold([item.problemText, item.answer, item.explanation, ...(item.steps || [])].join(' ')).includes(q);

// One row of the grouped list. Thumbnails are never decoded in the list: items only carry
// `hasImage`, the photo itself is loaded by the detail modal.
const SavedRow = memo(function SavedRow({
  item, isFirst, isLast, selectionMode, selected, meta, title, colors, styles, onPress, onLongPress, t,
}) {
  return (
    <View
      style={[
        styles.rowWrap,
        isFirst && styles.rowWrapFirst,
        isLast && styles.rowWrapLast,
      ]}
    >
      <ListRow
        leadingWidth={52}
        leading={(
          <View style={item.hasImage ? styles.photoThumb : styles.textThumb}>
            <Ionicons name={item.hasImage ? 'image' : 'keypad'} size={20} color={item.hasImage ? colors.success : colors.primary} />
          </View>
        )}
        title={title}
        subtitle={meta}
        selected={selectionMode ? selected : undefined}
        accessibilityHint={selectionMode ? undefined : t('saved.viewDetails')}
        right={selectionMode ? (
          <Ionicons
            name={selected ? 'checkmark-circle' : 'ellipse-outline'}
            size={24}
            color={selected ? colors.primary : colors.textPlaceholder}
            style={styles.check}
          />
        ) : null}
        onPress={() => onPress(item)}
        onLongPress={() => onLongPress(item)}
        showDivider={!isLast}
      />
    </View>
  );
});

export default function SavedScreen() {
  const { isWeb } = useResponsive();
  const { t } = useTranslation();
  const navigateToTab = useTabNavigate();
  const { language } = useLanguage();
  const { savedItems, removeItem, refresh, loading, error, retry } = useSavedItems();
  const { isGuest, exitGuest } = useUser();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [query, setQuery] = useState('');

  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const toggleSelectionMode = () => {
    setSelectionMode(prev => !prev);
    setSelectedIds(new Set());
  };

  const toggleSelectItem = useCallback((id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  // what the list shows: everything, or the items matching the search
  const q = fold(query.trim());
  const visibleItems = useMemo(() => (q ? savedItems.filter((i) => matches(i, q)) : savedItems), [savedItems, q]);

  const selectAll = () =>
    setSelectedIds(new Set(visibleItems.map(i => i.id)));

  const handleBulkDelete = async () => {
    if (selectedIds.size === 0 || deleting) return;
    const confirmed = await confirmAction({
      title: t('saved.confirmDelete'),
      message: t('saved.confirmBulkDelete', { count: selectedIds.size }),
      confirmText: t('common.delete'),
      cancelText: t('common.cancel'),
      destructive: true,
    });
    if (!confirmed) return;

    setDeleting(true);
    // Delete directly through the storage service and refresh the list ONCE afterwards
    // (the context's removeItem refetches after every single delete).
    // allSettled ensures every deletion is attempted even if one fails.
    const results = await Promise.allSettled(
      [...selectedIds].map(id => storageService.deleteItem(id))
    );
    await refresh();
    setDeleting(false);
    const failed = results.filter(r => r.status === 'rejected');
    setSelectionMode(false);
    setSelectedIds(new Set());
    if (failed.length > 0) {
      showAlert(t('common.error'), getErrorMessage(failed[0].reason, t('saved.deleteError'), t));
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const handleRetry = async () => {
    setRetrying(true);
    await retry();
    setRetrying(false);
  };

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setShowDetailModal(true);
  };

  const handleRowPress = useCallback((item) => {
    if (selectionMode) toggleSelectItem(item.id);
    else handleViewItem(item);
  }, [selectionMode, toggleSelectItem]);

  const handleRowLongPress = useCallback((item) => {
    if (!selectionMode) {
      setSelectionMode(true);
      toggleSelectItem(item.id);
    }
  }, [selectionMode, toggleSelectItem]);

  const handleDeleteItem = async () => {
    if (!selectedItem) return;
    const confirmed = await confirmAction({
      title: t('saved.confirmDelete'),
      message: t('saved.confirmDeleteMessage'),
      confirmText: t('common.delete'),
      cancelText: t('common.cancel'),
      destructive: true,
    });
    if (!confirmed) return;

    try {
      await removeItem(selectedItem.id);
      setShowDetailModal(false);
      setSelectedItem(null);
      showAlert(t('common.success'), t('saved.deleteSuccess'));
    } catch (e) {
      showAlert(t('common.error'), getErrorMessage(e, t('saved.deleteError'), t));
    }
  };

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(getLocale(language), {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }, [language]);

  const getPreviewText = (answer) => {
    if (!answer) return t('saved.noAnswer');
    return answer.length > 50 ? answer.substring(0, 50) + '...' : answer;
  };

  const showErrorState = !!error && savedItems.length === 0;
  const showInitialLoading = loading && savedItems.length === 0 && !error && !refreshing;

  const header = (
    <>
      <ScreenHeader
        title={t('saved.title')}
        subtitle={t('saved.itemCount', { count: savedItems.length })}
        right={savedItems.length > 0 ? (
          <TouchableOpacity
            onPress={toggleSelectionMode}
            style={styles.headerButton}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={selectionMode ? t('a11y.cancelSelection') : t('a11y.select')}
            accessibilityState={{ selected: selectionMode }}
          >
            <Ionicons name={selectionMode ? 'close' : 'checkmark-done'} size={20} color={colors.primary} />
          </TouchableOpacity>
        ) : null}
      />
      {selectionMode && savedItems.length > 0 && (
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
            loading={deleting}
            style={styles.selectionButton}
          />
        </View>
      )}
      {savedItems.length > 0 && (
        <SearchField
          style={styles.search}
          value={query}
          onChangeText={setQuery}
          placeholder={t('saved.searchPlaceholder')}
        />
      )}
      {savedItems.length > 0 ? <View style={styles.listTopSpacer} /> : null}
    </>
  );

  const emptyComponent = q && savedItems.length > 0 ? (
    <EmptyState icon="search-outline" title={t('saved.noResultsTitle')} message={t('saved.noResults', { query: query.trim() })} />
  ) : isGuest ? (
    <View>
      <EmptyState icon="person-add-outline" title={t('saved.guestTitle')} message={t('saved.guestHint')} />
      <Button style={styles.emptyButton} icon="person-add" title={t('accountPrompt.create')} onPress={() => exitGuest('register')} />
      <Button style={styles.emptyButton} variant="plain" title={t('accountPrompt.signIn')} onPress={() => exitGuest('login')} />
    </View>
  ) : showInitialLoading ? (
    <View style={styles.loadingBox}>
      <ActivityIndicator color={colors.textMuted} />
    </View>
  ) : showErrorState ? (
    <View>
      <EmptyState
        icon="cloud-offline-outline"
        title={t('saved.loadErrorTitle')}
        message={getErrorMessage(error?.code, t('errors.SAVED_ITEMS_LOAD_FAILED'), t)}
      />
      <Button
        style={styles.emptyButton}
        variant="tinted"
        icon="refresh"
        title={t('common.retry')}
        onPress={handleRetry}
        loading={retrying}
      />
    </View>
  ) : (
    <View>
      <EmptyState icon="bookmarks-outline" title={t('saved.noSavedItems')} message={t('saved.savedItemsHint')} />
      <Button
        style={styles.emptyButton}
        variant="tinted"
        title={t('saved.goToDashboard')}
        onPress={() => navigateToTab('Dashboard')}
      />
    </View>
  );

  const lastIndex = visibleItems.length - 1;

  const renderItem = ({ item, index }) => {
    const meta = [
      item.hasImage ? t('saved.photoItem') : t('saved.textItem'),
      formatDate(item.savedAt),
      item.steps?.length ? t('saved.stepsCount', { count: item.steps.length }) : null,
    ].filter(Boolean).join('  ·  ');
    return (
      <SavedRow
        item={item}
        isFirst={index === 0}
        isLast={index === lastIndex}
        selectionMode={selectionMode}
        selected={selectedIds.has(item.id)}
        meta={meta}
        title={item.answer ? getPreviewText(item.answer) : item.problemText || t('saved.noAnswer')}
        colors={colors}
        styles={styles}
        onPress={handleRowPress}
        onLongPress={handleRowLongPress}
        t={t}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentContainer}
        contentContainerStyle={Platform.OS === 'web' ? styles.webContent : null}
        data={visibleItems}
        keyExtractor={(item, index) => String(item.id ?? index)}
        renderItem={renderItem}
        extraData={{ selectionMode, selectedIds, colors }}
        ListHeaderComponent={header}
        ListEmptyComponent={emptyComponent}
        ListFooterComponent={<View style={{ height: isWeb ? 20 : 100 }} />}
        showsVerticalScrollIndicator={false}
        initialNumToRender={12}
        windowSize={7}
        removeClippedSubviews={Platform.OS === 'android'}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />

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
  webContent: {
    width: '100%',
    maxWidth: WEB_MAX_WIDTH,
    alignSelf: 'center',
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
  loadingBox: {
    paddingVertical: SPACING.massive,
    alignItems: 'center',
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
  search: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
  },
  listTopSpacer: {
    height: SPACING.md,
  },
  // Inset grouped list built row-by-row (FlatList can't wrap rows in one rounded section)
  rowWrap: {
    marginHorizontal: SPACING.lg,
    backgroundColor: colors.surface,
    overflow: 'hidden',
  },
  rowWrapFirst: {
    borderTopLeftRadius: BORDER_RADIUS.md,
    borderTopRightRadius: BORDER_RADIUS.md,
  },
  rowWrapLast: {
    borderBottomLeftRadius: BORDER_RADIUS.md,
    borderBottomRightRadius: BORDER_RADIUS.md,
  },
  photoThumb: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: colors.successLight,
    alignItems: 'center',
    justifyContent: 'center',
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
