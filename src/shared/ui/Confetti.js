import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View, useWindowDimensions } from 'react-native';
import { haptic } from './haptics';

const COLORS = ['#0A84FF', '#30D158', '#FF9F0A', '#FF375F', '#BF5AF2', '#FFD60A'];
const PIECES = 40;
const DURATION = 1900;

/**
 * A short burst of confetti over its parent (place it last inside a screen or modal).
 * Fires every time `trigger` changes to a new truthy value; never blocks touches.
 */
export default function Confetti({ trigger }) {
  const { width, height } = useWindowDimensions();
  const progress = useRef(new Animated.Value(0)).current;
  const [running, setRunning] = useState(false);
  const last = useRef(trigger);

  const pieces = useMemo(() => Array.from({ length: PIECES }, (_, i) => ({
    key: i,
    x: Math.random() * width,
    drift: (Math.random() - 0.5) * 120,
    delay: Math.random() * 0.25,
    size: 6 + Math.random() * 6,
    color: COLORS[i % COLORS.length],
    spin: (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 540),
    round: Math.random() < 0.3,
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })), [width, running]);

  useEffect(() => {
    if (!trigger || trigger === last.current) { last.current = trigger; return; }
    last.current = trigger;
    haptic('success');
    progress.setValue(0);
    setRunning(true);
    Animated.timing(progress, { toValue: 1, duration: DURATION, easing: Easing.out(Easing.quad), useNativeDriver: true })
      .start(() => setRunning(false));
  }, [trigger, progress]);

  if (!running) return null;
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {pieces.map((p) => {
        const t = progress.interpolate({ inputRange: [0, p.delay, 1], outputRange: [0, 0, 1], extrapolate: 'clamp' });
        return (
          <Animated.View
            key={p.key}
            style={{
              position: 'absolute',
              left: p.x,
              top: -20,
              width: p.size,
              height: p.round ? p.size : p.size * 1.6,
              borderRadius: p.round ? p.size / 2 : 2,
              backgroundColor: p.color,
              opacity: progress.interpolate({ inputRange: [0, 0.8, 1], outputRange: [1, 1, 0] }),
              transform: [
                { translateY: t.interpolate({ inputRange: [0, 1], outputRange: [0, height + 40] }) },
                { translateX: t.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, p.drift, p.drift * 0.4] }) },
                { rotate: t.interpolate({ inputRange: [0, 1], outputRange: ['0deg', `${p.spin}deg`] }) },
              ],
            }}
          />
        );
      })}
    </View>
  );
}
