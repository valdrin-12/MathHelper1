import { useRef, useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/ui';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ onComplete }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      icon: 'camera',
      secondaryIcon: 'scan',
      color: colors.primary,
      title: t('onboarding.slide1Title'),
      description: t('onboarding.slide1Desc'),
      features: [
        t('onboarding.slide1Feature1'),
        t('onboarding.slide1Feature2'),
        t('onboarding.slide1Feature3'),
      ],
    },
    {
      icon: 'school',
      secondaryIcon: 'book',
      color: colors.success,
      title: t('onboarding.slide2Title'),
      description: t('onboarding.slide2Desc'),
      features: [
        t('onboarding.slide2Feature1'),
        t('onboarding.slide2Feature2'),
        t('onboarding.slide2Feature3'),
      ],
    },
    {
      icon: 'trophy',
      secondaryIcon: 'flame',
      color: colors.secondary,
      title: t('onboarding.slide3Title'),
      description: t('onboarding.slide3Desc'),
      features: [
        t('onboarding.slide3Feature1'),
        t('onboarding.slide3Feature2'),
        t('onboarding.slide3Feature3'),
      ],
    },
    {
      icon: 'diamond',
      secondaryIcon: 'star',
      color: colors.purple,
      title: t('onboarding.slide4Title'),
      description: t('onboarding.slide4Desc'),
      features: [
        t('onboarding.slide4Feature1'),
        t('onboarding.slide4Feature2'),
        t('onboarding.slide4Feature3'),
      ],
    },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      onComplete();
    }
  };

  const renderSlide = ({ item }) => (
    <View style={styles.slide}>
      <View style={[styles.iconSquircle, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={52} color="#FFFFFF" />
      </View>
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideDescription}>{item.description}</Text>
      {item.features && (
        <View style={styles.featureList}>
          {item.features.map((feature, i) => (
            <View key={i} style={[styles.featureRow, i > 0 && styles.featureRowDivider]}>
              <Ionicons name="checkmark-circle" size={20} color={item.color} />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  const renderPagination = () => (
    <View style={styles.pagination}>
      {slides.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 28, 8],
          extrapolate: 'clamp',
        });
        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity: dotOpacity,
                backgroundColor: colors.primary,
              },
            ]}
          />
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={onComplete}
        accessibilityLabel={t('onboarding.skip')}
        accessibilityRole="button"
      >
        <Text style={styles.skipText}>{t('onboarding.skip')}</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        keyExtractor={(_, index) => index.toString()}
      />

      {renderPagination()}

      <View style={styles.bottomSection}>
        <Button
          title={currentIndex === slides.length - 1 ? t('onboarding.getStarted') : t('onboarding.next')}
          onPress={handleNext}
        />
      </View>
    </View>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  skipButton: {
    position: 'absolute',
    top: 56,
    right: SPACING.lg,
    zIndex: 10,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  skipText: {
    ...TYPOGRAPHY.body,
    color: colors.primary,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xxxl,
    paddingTop: height * 0.12,
  },
  iconSquircle: {
    width: 104,
    height: 104,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xxxl,
  },
  slideTitle: {
    ...TYPOGRAPHY.h1,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  slideDescription: {
    ...TYPOGRAPHY.body,
    color: colors.textSubtle,
    textAlign: 'center',
  },
  featureList: {
    marginTop: SPACING.xxl,
    width: '100%',
    maxWidth: 420,
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    paddingVertical: SPACING.md,
  },
  featureRowDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  featureText: {
    ...TYPOGRAPHY.subhead,
    color: colors.text,
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.xxl,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  bottomSection: {
    paddingHorizontal: SPACING.xxl,
    paddingBottom: SPACING.massive,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
});
