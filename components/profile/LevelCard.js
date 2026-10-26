import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Card } from '../ui';
import { useLevelStyles } from './profileStyles';

// ─── Level + XP card ───
export default function LevelCard({ level, xp }) {
  const { t } = useTranslation();
  const levelStyles = useLevelStyles();
  return (
    <Card style={levelStyles.card}>
      <View
        style={levelStyles.row}
        accessible
        accessibilityLabel={`${t('progress.levelN', { level: level.level })}, ${t(level.nameKey)}, ${xp} XP`}
      >
        <View style={levelStyles.badge}>
          <Text style={levelStyles.badgeLevel}>{level.level}</Text>
        </View>
        <View style={levelStyles.text}>
          <Text style={levelStyles.eyebrow}>{t('progress.levelN', { level: level.level })}</Text>
          <Text style={levelStyles.name} numberOfLines={1}>{t(level.nameKey)}</Text>
        </View>
        <Text style={levelStyles.xp}>{xp} XP</Text>
      </View>
      <View style={levelStyles.bar}>
        <View style={[levelStyles.barFill, { width: `${Math.round(level.progress * 100)}%` }]} />
      </View>
      <Text style={levelStyles.note}>{t('progress.xpToNext', { xp: level.nextLevelAt - level.xp, level: level.level + 1 })}</Text>
    </Card>
  );
}
