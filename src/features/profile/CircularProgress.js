import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../shared/theme/ThemeContext';

// ─── Circular Progress Ring ───
export default function CircularProgress({ size = 80, strokeWidth = 6, progress, color, children }) {
  const { colors } = useTheme();

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute' }}>
        {/* Background circle */}
        <View style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: colors.borderLight,
        }} />
      </View>
      <View style={{ position: 'absolute' }}>
        {/* Progress circle - simulated with border */}
        <View style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: 'transparent',
          borderTopColor: color,
          borderRightColor: progress > 0.25 ? color : 'transparent',
          borderBottomColor: progress > 0.5 ? color : 'transparent',
          borderLeftColor: progress > 0.75 ? color : 'transparent',
          transform: [{ rotate: '-90deg' }],
        }} />
      </View>
      {children}
    </View>
  );
}
