import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../theme/constants';

export default function SplashScreen({ onFinish }) {
  const iconScale = useRef(new Animated.Value(0.72)).current;
  const iconOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const [typedText, setTypedText] = useState('');
  const fullText = 'MathHelper';

  useEffect(() => {
    // Phase 1: Icon springs in
    Animated.parallel([
      Animated.spring(iconScale, {
        toValue: 1,
        friction: 18,
        tension: 280,
        useNativeDriver: true,
      }),
      Animated.timing(iconOpacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();

    // Phase 2: App name types in after icon settles
    const typingDelay = setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      let charIndex = 0;
      const typingTimer = setInterval(() => {
        if (charIndex < fullText.length) {
          setTypedText(fullText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingTimer);
        }
      }, 90);

      return () => clearInterval(typingTimer);
    }, 300);

    // Phase 3: Subtitle fades in
    const subtitleTimer = setTimeout(() => {
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, 1200);

    // Phase 4: Done
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2400);

    return () => {
      clearTimeout(typingDelay);
      clearTimeout(subtitleTimer);
      clearTimeout(finishTimer);
    };
  }, [iconScale, iconOpacity, textOpacity, subtitleOpacity, onFinish]);

  return (
    <View style={styles.container}>
      {/* App Icon — squircle matching AuthScreen */}
      <Animated.View
        style={[
          styles.iconWrapper,
          { opacity: iconOpacity, transform: [{ scale: iconScale }] },
        ]}
      >
        <LinearGradient
          colors={[COLORS.primary, COLORS.primarySoft]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.squircle}
        >
          <Ionicons name="calculator" size={52} color="#FFFFFF" />
        </LinearGradient>
      </Animated.View>

      {/* App Name */}
      <Animated.View style={[styles.nameRow, { opacity: textOpacity }]}>
        <Text style={styles.appName}>
          {typedText}
          <Text style={styles.cursor}>|</Text>
        </Text>
      </Animated.View>

      {/* Tagline */}
      <Animated.View style={{ opacity: subtitleOpacity }}>
        <Text style={styles.tagline}>Your AI Math Assistant</Text>
      </Animated.View>

      {/* Bottom indicator */}
      <Animated.View style={[styles.indicator, { opacity: subtitleOpacity }]}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ── App Icon ─────────────────────────────────────────────────────────────────
  iconWrapper: {
    marginBottom: 28,
    ...SHADOWS.large,
  },
  squircle: {
    width: 112,
    height: 112,
    borderRadius: Platform.OS === 'ios' ? 28 : 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ── Typography ───────────────────────────────────────────────────────────────
  nameRow: {
    marginBottom: 8,
    minHeight: 44,
    justifyContent: 'center',
  },
  appName: {
    fontSize: 34,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: 0.37,
  },
  cursor: {
    fontSize: 34,
    fontWeight: '200',
    color: COLORS.textMuted,
  },
  tagline: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.textSubtle,
    letterSpacing: -0.24,
  },

  // ── Bottom Progress Dots ─────────────────────────────────────────────────────
  indicator: {
    position: 'absolute',
    bottom: 56,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    width: 20,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
  },
});
