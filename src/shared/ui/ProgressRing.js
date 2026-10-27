import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from '../theme/ThemeContext';

/**
 * Circular progress drawn as a real arc (0…1), with optional content in the middle.
 * Replaces the old border trick that could only show quarters (69% looked like 50%).
 */
export default function ProgressRing({ progress = 0, size = 44, strokeWidth = 4, color, trackColor, children, style }) {
  const { colors } = useTheme();
  const p = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0));
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const tint = color || colors.primary;
  return (
    <View style={[{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width={size} height={size} style={{ position: 'absolute', transform: [{ rotate: '-90deg' }] }}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={trackColor || `${tint}26`} strokeWidth={strokeWidth} fill="none" />
        {p > 0 && (
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={tint}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${c} ${c}`}
            strokeDashoffset={c * (1 - p)}
          />
        )}
      </Svg>
      {children}
    </View>
  );
}
