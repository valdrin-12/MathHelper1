import React, { useRef, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const THUMB = 26;

/**
 * Horizontal slider (PanResponder, so it works the same on web, iOS and Android without a native module).
 * onSlidingStart / onSlidingComplete let a parent ScrollView stop scrolling while dragging.
 */
export default function Slider({
  value, min = 0, max = 1, step = 0.1, onValueChange, onSlidingStart, onSlidingComplete, color, accessibilityLabel, style,
}) {
  const { colors } = useTheme();
  const tint = color || colors.primary;
  const [width, setWidth] = useState(0);
  const widthRef = useRef(0);
  const startRef = useRef(0);
  const valueRef = useRef(value);
  valueRef.current = value;
  const cbRef = useRef({});
  cbRef.current = { onValueChange, onSlidingStart, onSlidingComplete };

  const clamp = (v) => {
    const snapped = Math.round((v - min) / step) * step + min;
    return Math.min(max, Math.max(min, Number(snapped.toFixed(6))));
  };
  const toX = (v) => ((v - min) / (max - min)) * widthRef.current;
  const fromX = (x) => clamp(min + (x / Math.max(1, widthRef.current)) * (max - min));

  const pan = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderTerminationRequest: () => false,
    onPanResponderGrant: (e) => {
      cbRef.current.onSlidingStart?.();
      // tap anywhere on the track jumps there
      const x = e.nativeEvent.locationX;
      startRef.current = Number.isFinite(x) ? x : toX(valueRef.current);
      const v = fromX(startRef.current);
      if (v !== valueRef.current) cbRef.current.onValueChange?.(v);
    },
    onPanResponderMove: (_, g) => {
      const v = fromX(startRef.current + g.dx);
      if (v !== valueRef.current) cbRef.current.onValueChange?.(v);
    },
    onPanResponderRelease: () => cbRef.current.onSlidingComplete?.(valueRef.current),
    onPanResponderTerminate: () => cbRef.current.onSlidingComplete?.(valueRef.current),
  })).current;

  const x = width ? toX(value) : 0;
  return (
    <View
      style={[styles.wrap, style]}
      onLayout={(e) => { widthRef.current = e.nativeEvent.layout.width; setWidth(e.nativeEvent.layout.width); }}
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min, max, now: value }}
      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
      onAccessibilityAction={(e) => {
        const v = clamp(value + (e.nativeEvent.actionName === 'increment' ? step * 5 : -step * 5));
        onValueChange?.(v);
        onSlidingComplete?.(v);
      }}
      {...pan.panHandlers}
    >
      <View pointerEvents="none" style={[styles.track, { backgroundColor: colors.border }]} />
      <View pointerEvents="none" style={[styles.fill, { width: x, backgroundColor: tint }]} />
      <View pointerEvents="none" style={[styles.thumb, { left: x - THUMB / 2, borderColor: tint, backgroundColor: colors.surface }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { height: 36, justifyContent: 'center' },
  track: { position: 'absolute', left: 0, right: 0, height: 4, borderRadius: 2 },
  fill: { position: 'absolute', left: 0, height: 4, borderRadius: 2 },
  thumb: { position: 'absolute', width: THUMB, height: THUMB, borderRadius: THUMB / 2, borderWidth: 3, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3, shadowOffset: { width: 0, height: 1 }, elevation: 2 },
});
