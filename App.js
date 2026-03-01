import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, Animated, Pressable, useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SavedItemsProvider } from './context/SavedItemsContext';
import { UserProvider, useUser } from './context/UserContext';
import { StatsProvider } from './context/StatsContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { SHADOWS, TYPOGRAPHY } from './theme/constants';
import './locales/i18n';

import DashboardScreen from './screens/DashboardScreen';
import SavedScreen from './screens/SavedScreen';
import LearnScreen from './screens/LearnScreen';
import QuizScreen from './screens/QuizScreen';
import SettingsScreen from './screens/SettingsScreen';
import AuthScreen from './screens/AuthScreen';
import SplashScreen from './screens/SplashScreen';
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
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.15 : 1,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }, [focused, scaleAnim]);

  const icons = TAB_ICONS[route.name];
  const iconName = focused ? icons.active : icons.inactive;

  return (
    <Animated.View style={{ alignItems: 'center', transform: [{ scale: scaleAnim }] }}>
      {focused && (
        <View style={{
          width: 24,
          height: 3,
          borderRadius: 1.5,
          backgroundColor: color,
          marginBottom: 4,
        }} />
      )}
      <Ionicons name={iconName} size={focused ? 24 : 22} color={color} />
    </Animated.View>
  );
}

// Desktop sidebar navigation for web
function SidebarNav({ activeTab, setActiveTab, isDark, t }) {
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
      backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
      borderRightWidth: 1,
      borderRightColor: isDark ? '#1E293B' : '#E2E8F0',
      paddingTop: 24,
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 100,
    }}>
      {/* App Logo */}
      <View style={{ paddingHorizontal: 20, paddingBottom: 28, borderBottomWidth: 1, borderBottomColor: isDark ? '#1E293B' : '#F1F5F9', marginBottom: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{
            width: 40, height: 40, borderRadius: 12,
            backgroundColor: '#1E3A8A', justifyContent: 'center', alignItems: 'center',
          }}>
            <Ionicons name="calculator" size={22} color="#FFFFFF" />
          </View>
          <Text style={{ fontSize: 20, fontWeight: '800', color: isDark ? '#F1F5F9' : '#0F172A', letterSpacing: -0.5 }}>
            MathHelper
          </Text>
        </View>
      </View>

      {/* Nav Items */}
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        const icons = TAB_ICONS[tab.key];
        const iconName = isActive ? icons.active : icons.inactive;

        return (
          <SidebarItem
            key={tab.key}
            isActive={isActive}
            iconName={iconName}
            label={tab.label}
            onPress={() => setActiveTab(tab.key)}
            isDark={isDark}
          />
        );
      })}
    </View>
  );
}

function SidebarItem({ isActive, iconName, label, onPress, isDark }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginBottom: 2,
        borderRadius: 12,
        backgroundColor: isActive
          ? (isDark ? 'rgba(59,130,246,0.15)' : '#EFF6FF')
          : hovered
            ? (isDark ? 'rgba(255,255,255,0.05)' : '#F8FAFC')
            : 'transparent',
        transitionDuration: '150ms',
        cursor: 'pointer',
      }}
    >
      <Ionicons
        name={iconName}
        size={22}
        color={isActive ? (isDark ? '#60A5FA' : '#1E3A8A') : (isDark ? '#64748B' : '#94A3B8')}
      />
      <Text style={{
        marginLeft: 12,
        fontSize: 15,
        fontWeight: isActive ? '700' : '500',
        color: isActive ? (isDark ? '#F1F5F9' : '#0F172A') : (isDark ? '#94A3B8' : '#64748B'),
      }}>
        {label}
      </Text>
      {isActive && (
        <View style={{
          position: 'absolute',
          left: 0,
          top: 8,
          bottom: 8,
          width: 3,
          borderRadius: 2,
          backgroundColor: isDark ? '#3B82F6' : '#1E3A8A',
        }} />
      )}
    </Pressable>
  );
}

// Desktop layout: sidebar + content
function DesktopLayout({ colors, isDark, t }) {
  const [activeTab, setActiveTab] = useState('Dashboard');

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
      <SidebarNav activeTab={activeTab} setActiveTab={setActiveTab} isDark={isDark} t={t} />
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
  const [showSplash, setShowSplash] = useState(isWeb ? false : true);

  useEffect(() => {
    // One-time force logout to start fresh at auth screen
    const forceLogoutOnce = async () => {
      const didForceLogout = await AsyncStorage.getItem('@mathhelper_force_logout_v1');
      if (!didForceLogout) {
        await AsyncStorage.multiRemove(['@math_helper_access_token', '@math_helper_refresh_token']);
        await AsyncStorage.setItem('@mathhelper_force_logout_v1', 'true');
      }
    };
    forceLogoutOnce();

  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <LoadingOverlay visible={true} />
      </View>
    );
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
        <StatusBar style={isDark ? 'light' : 'light'} />
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
      <NavigationContainer>
        <StatusBar style={isDark ? 'light' : 'light'} />
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
              paddingBottom: Platform.OS === 'ios' ? 20 : 8,
              paddingTop: 8,
              height: Platform.OS === 'ios' ? 85 : 65,
              backgroundColor: Platform.OS === 'ios'
                ? (isDark ? 'rgba(15,23,42,0.85)' : 'rgba(255,255,255,0.85)')
                : colors.tabBarBg,
              borderTopWidth: 0,
              ...SHADOWS.medium,
            },
            tabBarLabelStyle: {
              ...TYPOGRAPHY.tabLabel,
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
