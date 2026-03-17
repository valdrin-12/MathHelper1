import { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../theme/constants';

const { width, height } = Dimensions.get('window');

function IllustrationCircle({ icon, color, secondaryIcon }) {
  return (
    <View style={illustStyles.container}>
      {/* Outer ring */}
      <View style={[illustStyles.outerRing, { borderColor: color + '25' }]}>
        {/* Middle ring */}
        <View style={[illustStyles.middleRing, { borderColor: color + '15' }]}>
          {/* Inner circle */}
          <LinearGradient
            colors={[color, color + 'CC']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={illustStyles.innerCircle}
          >
            <Ionicons name={icon} size={56} color="#FFFFFF" />
          </LinearGradient>
        </View>
      </View>
      {/* Floating accent icons */}
      <View style={[illustStyles.floatingIcon, illustStyles.floatingTopRight]}>
        <View style={[illustStyles.floatingBubble, { backgroundColor: color + '20' }]}>
          <Ionicons name={secondaryIcon || 'sparkles'} size={20} color={color} />
        </View>
      </View>
      <View style={[illustStyles.floatingIcon, illustStyles.floatingBottomLeft]}>
        <View style={[illustStyles.floatingBubble, { backgroundColor: color + '15' }]}>
          <Ionicons name="star" size={16} color={color} />
        </View>
      </View>
    </View>
  );
}

const illustStyles = StyleSheet.create({
  container: {
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  outerRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleRing: {
    width: 168,
    height: 168,
    borderRadius: 84,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingIcon: {
    position: 'absolute',
  },
  floatingTopRight: {
    top: 10,
    right: 5,
  },
  floatingBottomLeft: {
    bottom: 15,
    left: 10,
  },
  floatingBubble: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function OnboardingScreen({ onComplete }) {
  const { t } = useTranslation();
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      icon: 'camera',
      secondaryIcon: 'scan',
      color: '#2563EB',
      title: t('onboarding.slide1Title'),
      description: t('onboarding.slide1Desc'),
    },
    {
      icon: 'school',
      secondaryIcon: 'book',
      color: '#10B981',
      title: t('onboarding.slide2Title'),
      description: t('onboarding.slide2Desc'),
    },
    {
      icon: 'trophy',
      secondaryIcon: 'flame',
      color: '#F59E0B',
      title: t('onboarding.slide3Title'),
      description: t('onboarding.slide3Desc'),
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
      <IllustrationCircle
        icon={item.icon}
        color={item.color}
        secondaryIcon={item.secondaryIcon}
      />
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideDescription}>{item.description}</Text>
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
                backgroundColor: slides[currentIndex].color,
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
        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: slides[currentIndex].color }]}
          onPress={handleNext}
          activeOpacity={0.85}
        >
          <Text style={styles.nextButtonText}>
            {currentIndex === slides.length - 1
              ? t('onboarding.getStarted')
              : t('onboarding.next')}
          </Text>
          <Ionicons
            name={currentIndex === slides.length - 1 ? 'rocket' : 'arrow-forward'}
            size={20}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skipButton: {
    position: 'absolute',
    top: 56,
    right: 24,
    zIndex: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  skipText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textMuted,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingTop: height * 0.15,
  },
  slideTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 14,
    letterSpacing: -0.5,
  },
  slideDescription: {
    fontSize: 16,
    color: COLORS.textSubtle,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 30,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  bottomSection: {
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    gap: 8,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
