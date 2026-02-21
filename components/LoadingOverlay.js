import { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, BORDER_RADIUS } from '../theme/constants';

function SpinnerRing() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    animate.start();
    return () => animate.stop();
  }, [rotation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={spinnerStyles.container}>
      {/* Outer ring */}
      <Animated.View style={[spinnerStyles.ring, { transform: [{ rotate: spin }] }]}>
        <LinearGradient
          colors={[COLORS.primaryLight, COLORS.primarySoft, 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={spinnerStyles.ringGradient}
        />
      </Animated.View>
      {/* Inner circle */}
      <View style={spinnerStyles.innerCircle}>
        <Ionicons name="sparkles" size={28} color={COLORS.primarySoft} />
      </View>
    </View>
  );
}

function PulsingDots() {
  const dot1 = useRef(new Animated.Value(0.3)).current;
  const dot2 = useRef(new Animated.Value(0.3)).current;
  const dot3 = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const createPulse = (dot, delay) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(dot, {
            toValue: 1,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0.3,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
        ])
      );

    const a1 = createPulse(dot1, 0);
    const a2 = createPulse(dot2, 200);
    const a3 = createPulse(dot3, 400);
    a1.start();
    a2.start();
    a3.start();

    return () => {
      a1.stop();
      a2.stop();
      a3.stop();
    };
  }, [dot1, dot2, dot3]);

  return (
    <View style={spinnerStyles.dotsRow}>
      <Animated.View style={[spinnerStyles.dot, { opacity: dot1, backgroundColor: COLORS.primaryLight }]} />
      <Animated.View style={[spinnerStyles.dot, { opacity: dot2, backgroundColor: COLORS.primarySoft }]} />
      <Animated.View style={[spinnerStyles.dot, { opacity: dot3, backgroundColor: COLORS.primary }]} />
    </View>
  );
}

export default function LoadingOverlay({ visible }) {
  const { t } = useTranslation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, fadeAnim, scaleAnim]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <SpinnerRing />
          <Text style={styles.title}>{t('loading.analyzingProblem')}</Text>
          <PulsingDots />
          <Text style={styles.subtitle}>{t('loading.mayTakeSeconds')}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
}

const spinnerStyles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  ring: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'transparent',
    borderTopColor: COLORS.primarySoft,
    borderRightColor: COLORS.primaryLight,
  },
  ringGradient: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 40,
    opacity: 0.15,
  },
  innerCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primaryBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: SPACING.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.xxl,
    padding: 36,
    alignItems: 'center',
    minWidth: 260,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    ...(Platform.OS === 'web'
      ? { boxShadow: '0px 8px 32px rgba(30, 58, 138, 0.2)' }
      : {
          shadowColor: COLORS.primary,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.2,
          shadowRadius: 24,
          elevation: 12,
        }),
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
