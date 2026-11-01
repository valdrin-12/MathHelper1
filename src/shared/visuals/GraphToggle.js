import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeContext';
import Visual from './Visual';

/**
 * "Show graph" button that opens an interactive visual underneath (quiz practice after answering,
 * Learn practice problems). Give it a key per question so it starts closed on the next one.
 */
export default function GraphToggle({ spec, color }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const tint = color || colors.primary;
  const hasSliders = !!(spec.sliders?.length || spec.type === 'unitCircle');
  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity
        onPress={() => setOpen((o) => !o)}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6,
          paddingVertical: 9, paddingHorizontal: 14, borderRadius: 12, backgroundColor: `${tint}1F`,
        }}
      >
        <Ionicons name={open ? 'chevron-up' : 'analytics-outline'} size={17} color={tint} />
        <Text style={{ color: tint, fontWeight: '700' }}>{open ? t('visuals.hideGraph') : t('visuals.showGraph')}</Text>
      </TouchableOpacity>
      {open && (
        <View>
          <Visual spec={spec} />
          {hasSliders && <Text style={{ color: colors.textSubtle, fontSize: 12, textAlign: 'center' }}>{t('visuals.tryIt')}</Text>}
        </View>
      )}
    </View>
  );
}
