import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Card } from '../../shared/ui';
import { useLevelStyles } from './profileStyles';

// ─── Mastery per topic ───
export default function MasteryList({ mastery }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const levelStyles = useLevelStyles();
  const anyAttempted = mastery.some((m) => m.attempted > 0);
  return (
    <View style={levelStyles.masterySection}>
      <Text style={levelStyles.sectionTitle}>{t('progress.mastery')}</Text>
      <Card style={levelStyles.masteryCard}>
        {!anyAttempted && <Text style={levelStyles.note}>{t('progress.masteryEmpty')}</Text>}
        {mastery.map((m) => {
          const barColor = m.mastery >= 80 ? colors.success : m.mastery >= 50 ? colors.warning : m.mastery > 0 ? colors.error : colors.borderLight;
          return (
            <View
              key={m.key}
              style={levelStyles.masteryRow}
              accessible
              accessibilityLabel={`${m.category}, ${t('progress.masteryValue', { percent: m.mastery })}`}
            >
              <Text style={levelStyles.masteryIcon}>{m.icon}</Text>
              <View style={levelStyles.text}>
                <View style={levelStyles.masteryLabelRow}>
                  <Text style={levelStyles.masteryName} numberOfLines={1}>{m.category}</Text>
                  <Text style={levelStyles.masteryPercent}>{m.mastery}%</Text>
                </View>
                <View style={levelStyles.masteryBar}>
                  <View style={[levelStyles.barFillPlain, { width: `${m.mastery}%`, backgroundColor: barColor }]} />
                </View>
              </View>
            </View>
          );
        })}
      </Card>
      <Text style={levelStyles.footer}>{t('progress.masteryFooter')}</Text>
    </View>
  );
}
