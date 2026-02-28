import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Platform, Animated } from 'react-native';
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

function MainApp() {
  const { user, loading } = useUser();
  const { t } = useTranslation();
  const { colors, isDark } = useTheme();
  const [showSplash, setShowSplash] = useState(true);

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
