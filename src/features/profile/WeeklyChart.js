import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Card } from '../../shared/ui';
import { useChartStyles } from './profileStyles';

// ─── Weekly Activity Bar Chart ───
export default function WeeklyChart({ dailyActivity }) {
  const { t } = useTranslation();
  const chartStyles = useChartStyles();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const activity = dailyActivity?.[key];
    const total = (activity?.problems || 0) + (activity?.courses || 0) + (activity?.quizzes || 0);
    // Localized short weekday names, keyed by Date.getDay() (0 = Sunday)
    days.push({ label: t(`weekdaysShort.${d.getDay()}`), value: total, isToday: i === 0 });
  }

  const maxValue = Math.max(...days.map(d => d.value), 1);

  return (
    <Card style={chartStyles.container}>
      <Text style={chartStyles.title}>{t('profileModal.weeklyActivity')}</Text>
      <View style={chartStyles.chart}>
        {days.map((day, i) => (
          <View key={i} style={chartStyles.barColumn}>
            <View style={chartStyles.barTrack}>
              <View
                style={[
                  chartStyles.bar,
                  { height: `${Math.max((day.value / maxValue) * 100, 8)}%` },
                  !day.isToday && chartStyles.barInactive,
                ]}
              />
            </View>
            {day.value > 0 && (
              <Text style={[chartStyles.barValue, day.isToday && chartStyles.barValueToday]}>{day.value}</Text>
            )}
            <Text style={[chartStyles.barLabel, day.isToday && chartStyles.barLabelToday]}>{day.label}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}
