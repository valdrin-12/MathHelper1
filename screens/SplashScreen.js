import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }) {
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const ringScale = useRef(new Animated.Value(0.5)).current;
  const ringOpacity = useRef(new Animated.Value(0)).current;
  const [typedText, setTypedText] = useState('');
  const fullText = 'MathHelper';

  useEffect(() => {
    // Phase 1: Logo fade in + scale
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 5,
        tension: 60,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(ringOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(ringScale, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    // Phase 2: Typing effect
    let charIndex = 0;
    const typingTimer = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 120);

    // Phase 3: Subtitle fade in
    const subtitleTimer = setTimeout(() => {
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 1400);

    // Phase 4: Finish
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2500);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(finishTimer);
    };
  }, [logoScale, logoOpacity, textOpacity, subtitleOpacity, ringScale, ringOpacity, onFinish]);

  return (
    <LinearGradient
      colors={['#1E3A8A', '#2563EB', '#3B82F6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Decorative circles */}
      <Animated.View style={[styles.decorCircle1, { opacity: ringOpacity, transform: [{ scale: ringScale }] }]} />
      <Animated.View style={[styles.decorCircle2, { opacity: ringOpacity, transform: [{ scale: ringScale }] }]} />

      {/* Logo */}
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}>
        <View style={styles.logoOuter}>
          <View style={styles.logoInner}>
            <Ionicons name="calculator" size={48} color="#FFFFFF" />
          </View>
        </View>
      </Animated.View>

      {/* App Name with typing effect */}
      <View style={styles.textContainer}>
        <Text style={styles.appName}>{typedText}<Text style={styles.cursor}>|</Text></Text>
      </View>

      {/* Subtitle */}
      <Animated.View style={{ opacity: subtitleOpacity }}>
        <Text style={styles.subtitle}>Your AI Math Assistant</Text>
      </Animated.View>

      {/* Bottom dots */}
      <Animated.View style={[styles.dotsContainer, { opacity: subtitleOpacity }]}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorCircle1: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    top: height * 0.1,
    left: -width * 0.2,
  },
  decorCircle2: {
    position: 'absolute',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    bottom: height * 0.1,
    right: -width * 0.15,
  },
  logoContainer: {
    marginBottom: 28,
  },
  logoOuter: {
    width: 120,
    height: 120,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  logoInner: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 10,
    minHeight: 44,
  },
  appName: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: -1,
  },
  cursor: {
    fontSize: 36,
    fontWeight: '200',
    color: 'rgba(255,255,255,0.6)',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  dotActive: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: 24,
    borderRadius: 4,
  },
});
