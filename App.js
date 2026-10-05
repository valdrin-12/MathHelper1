import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import { SavedItemsProvider } from './context/SavedItemsContext';
import { UserProvider, useUser } from './context/UserContext';
import { StatsProvider } from './context/StatsContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { TYPOGRAPHY } from './theme/constants';
import './locales/i18n';

import DashboardScreen from './screens/DashboardScreen';
import SavedScreen from './screens/SavedScreen';
import LearnScreen from './screens/LearnScreen';
import QuizScreen from './screens/QuizScreen';
import SettingsScreen from './screens/SettingsScreen';
import AuthScreen from './screens/AuthScreen';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoadingOverlay from './components/LoadingOverlay';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Dashboard: { active: 'home', inactive: 'home-outline' },
  Saved: { active: 'bookmark', inactive: 'bookmark-outline' },
  Learn: { active: 'book', inactive: 'book-outline' },
  Quiz: { active: 'help-circle', inactive: 'help-circle-outline' },
  Settings: { active: 'settings', inactive: 'settings-outline' },
};

const SIDEBAR_WIDTH = 220;

// URL <-> Tab mapping for web deep linking
const TAB_PATHS = {
  Dashboard: '/dashboard',
  Saved: '/saved',
  Learn: '/learn',
  Quiz: '/quiz',
  Settings: '/settings',
};

function getTabFromPath(pathname) {
  const path = pathname.toLowerCase().replace(/\/+$/, '');
  for (const [tab, tabPath] of Object.entries(TAB_PATHS)) {
    if (path === tabPath) return tab;
  }
  // /app or unknown paths default to Dashboard
  return 'Dashboard';
}

// React Navigation linking config for mobile web
const linking = {
  prefixes: [],
  config: {
    screens: {
      Dashboard: 'dashboard',
      Saved: 'saved',
      Learn: 'learn',
      Quiz: 'quiz',
      Settings: 'settings',
    },
  },
};

function TabBarBackground() {
  const { isDark } = useTheme();
  return (
    <BlurView
      intensity={80}
      tint={isDark ? 'dark' : 'light'}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
}

function AnimatedTabIcon({ focused, color, route }) {
  const icons = TAB_ICONS[route.name];
  return <Ionicons name={focused ? icons.active : icons.inactive} size={24} color={color} />;
}

// Desktop sidebar navigation for web (iPadOS sidebar style)
function SidebarNav({ activeTab, setActiveTab, t }) {
  const { colors } = useTheme();
  const tabs = [
    { key: 'Dashboard', label: t('navigation.dashboard') },
    { key: 'Saved', label: t('navigation.saved') },
    { key: 'Learn', label: t('navigation.learn') },
    { key: 'Quiz', label: t('navigation.quiz') },
    { key: 'Settings', label: t('navigation.settings') },
  ];

  return (
    <View style={{
      width: SIDEBAR_WIDTH,
      backgroundColor: colors.surface,
      borderRightWidth: StyleSheet.hairlineWidth,
      borderRightColor: colors.border,
      paddingTop: 24,
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 100,
    }}>
      {/* App Logo */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20, paddingBottom: 24 }}>
        <View style={{
          width: 36, height: 36, borderRadius: 9,
          backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center',
        }}>
          <Ionicons name="calculator" size={20} color="#FFFFFF" />
        </View>
        <Text style={{ ...TYPOGRAPHY.h3, fontWeight: '700', color: colors.text }}>
          MathHelper
        </Text>
      </View>

      {/* Nav Items */}
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        const icons = TAB_ICONS[tab.key];

        return (
          <SidebarItem
            key={tab.key}
            isActive={isActive}
            iconName={isActive ? icons.active : icons.inactive}
            label={tab.label}
            onPress={() => setActiveTab(tab.key)}
          />
        );
      })}
    </View>
  );
}

function SidebarItem({ isActive, iconName, label, onPress }) {
  const { colors } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 10,
        marginBottom: 2,
        borderRadius: 10,
        backgroundColor: isActive ? colors.primaryBg : hovered ? colors.background : 'transparent',
        transitionDuration: '150ms',
        cursor: 'pointer',
      }}
    >
      <Ionicons name={iconName} size={21} color={isActive ? colors.primary : colors.textSubtle} />
      <Text style={{
        ...TYPOGRAPHY.body,
        marginLeft: 12,
        fontWeight: isActive ? '600' : '400',
        color: isActive ? colors.primary : colors.text,
      }}>
        {label}
      </Text>
    </Pressable>
  );
}

// Desktop layout: sidebar + content with URL sync
function DesktopLayout({ colors, isDark, t }) {
  const [activeTab, setActiveTab] = useState(() => {
    if (Platform.OS === 'web') {
      return getTabFromPath(window.location.pathname);
    }
    return 'Dashboard';
  });

  // Update URL when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (Platform.OS === 'web') {
      const newPath = TAB_PATHS[tab] || '/dashboard';
      if (window.location.pathname !== newPath) {
        window.history.pushState({ tab }, '', newPath);
      }
    }
  };

  // Listen for browser back/forward
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const onPopState = (e) => {
      const tab = e.state?.tab || getTabFromPath(window.location.pathname);
      setActiveTab(tab);
    };
    window.addEventListener('popstate', onPopState);
    // Set initial history state
    window.history.replaceState({ tab: activeTab }, '', TAB_PATHS[activeTab] || '/dashboard');
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const screens = {
    Dashboard: DashboardScreen,
    Saved: SavedScreen,
    Learn: LearnScreen,
    Quiz: QuizScreen,
    Settings: SettingsScreen,
  };

  const ActiveScreen = screens[activeTab];

  return (
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: colors.background }}>
      <SidebarNav activeTab={activeTab} setActiveTab={handleTabChange} t={t} />
      <View style={{ flex: 1, marginLeft: SIDEBAR_WIDTH }}>
        <ActiveScreen />
      </View>
    </View>
  );
}

function MainApp() {
  const { user, loading } = useUser();
  const { t } = useTranslation();
  const { colors, isDark } = useTheme();
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const showSidebar = isWeb && width > 768;
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    AsyncStorage.removeItem('@mathhelper_force_logout_v1').catch(() => {});
  }, []);

  useEffect(() => {
    // Show onboarding only for first-time users (not logged in yet)
    if (!loading && !user) {
      AsyncStorage.getItem('@mathhelper_onboarding_done').then((val) => {
        if (!val) setShowOnboarding(true);
      });
    }
  }, [loading, user]);

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem('@mathhelper_onboarding_done', 'true');
    setShowOnboarding(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }} />
    );
  }

  if (!user && showOnboarding) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  if (!user) {
    return <AuthScreen />;
  }

  // Desktop web: sidebar navigation
  if (showSidebar) {
    return (
      <NavigationContainer>
      <StatsProvider>
      <SavedItemsProvider>
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <DesktopLayout colors={colors} isDark={isDark} t={t} />
      </SavedItemsProvider>
      </StatsProvider>
      </NavigationContainer>
    );
  }

  // Mobile / mobile web: bottom tab navigation
  return (
    <StatsProvider>
    <SavedItemsProvider>
      <NavigationContainer
        linking={isWeb ? linking : undefined}
        documentTitle={{ formatter: () => 'MathHelper' }}
      >
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => (
              <AnimatedTabIcon focused={focused} color={color} route={route} />
            ),
            tabBarActiveTintColor: colors.tabBarActive,
            tabBarInactiveTintColor: colors.tabBarInactive,
            tabBarBackground: () => <TabBarBackground />,
            tabBarStyle: {
              position: 'absolute',
              paddingBottom: Platform.OS === 'ios' ? 20 : 10,
              paddingTop: 6,
              height: Platform.OS === 'ios' ? 85 : 68,
              backgroundColor: Platform.OS === 'ios'
                ? (isDark ? 'rgba(28,28,30,0.88)' : 'rgba(249,249,249,0.88)')
                : colors.tabBarBg,
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: colors.tabBarBorder,
            },
            tabBarLabelStyle: {
              ...TYPOGRAPHY.tabLabel,
              lineHeight: 13,
              marginTop: 2,
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ tabBarLabel: t('navigation.dashboard') }} />
          <Tab.Screen name="Saved" component={SavedScreen} options={{ tabBarLabel: t('navigation.saved') }} />
          <Tab.Screen name="Learn" component={LearnScreen} options={{ tabBarLabel: t('navigation.learn') }} />
          <Tab.Screen name="Quiz" component={QuizScreen} options={{ tabBarLabel: t('navigation.quiz') }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: t('navigation.settings') }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SavedItemsProvider>
    </StatsProvider>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Load Ionicons font for all platforms including web
    Font.loadAsync({ ...Ionicons.font })
      .then(() => {
        console.log('Fonts loaded successfully');
        setFontsLoaded(true);
      })
      .catch((err) => {
        console.error('Font loading error:', err);
        setFontsLoaded(true); // Continue anyway to avoid blocking
      });
  }, []);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: '#0F172A' }} />; // Show loading with dark bg
  }

  return (
    <LanguageProvider>
      <ThemeProvider>
        <UserProvider>
          <MainApp />
        </UserProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
