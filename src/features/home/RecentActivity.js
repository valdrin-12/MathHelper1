import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Card, SectionTitle, ListSection, ListRow, IconBadge } from '../../shared/ui';
import { formatTimeAgo } from './dashboardUtils';
import { useDashboardStyles } from './dashboardStyles';

// The last three saved problems, or an empty state.
export default function RecentActivity({ items, onOpen }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useDashboardStyles();

  return (
    <View style={styles.sectionBlock}>
      <SectionTitle>{t('dashboard.recentActivity')}</SectionTitle>
      {items.length === 0 ? (
        <Card style={styles.emptyActivity}>
          <View style={styles.emptyIcon}>
            <Ionicons name="document-text-outline" size={28} color={colors.primary} />
          </View>
          <Text style={styles.emptyActivityText}>{t('dashboard.noActivity')}</Text>
        </Card>
      ) : (
        <ListSection style={styles.activityList}>
          {items.map((item, index) => (
            <ListRow
              key={item.id || index}
              leading={item.hasImage ? (
                <IconBadge name="image" color={colors.success} />
              ) : (
                <IconBadge name="checkmark" color={colors.success} />
              )}
              title={item.answer ? item.answer : t('dashboard.mathProblem')}
              subtitle={formatTimeAgo(item.savedAt, t)}
              onPress={() => onOpen(item)}
            />
          ))}
        </ListSection>
      )}
    </View>
  );
}
