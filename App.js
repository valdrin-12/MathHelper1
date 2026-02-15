import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SavedItemsProvider } from './context/SavedItemsContext';
import { UserProvider, useUser } from './context/UserContext';
import { StatsProvider } from './context/StatsContext';
import { LanguageProvider } from './context/LanguageContext';
import { COLORS, SHADOWS, TYPOGRAPHY } from './theme/constants';
import './locales/i18n';

import DashboardScreen from './screens/DashboardScreen';
import SavedScreen from './screens/SavedScreen';
import LearnScreen from './screens/LearnScreen';
import QuizScreen from './screens/QuizScreen';
import SettingsScreen from './screens/SettingsScreen';
import AuthScreen from './screens/AuthScreen';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Dashboard: { active: 'home', inactive: 'home-outline' },
  Saved: { active: 'bookmark', inactive: 'bookmark-outline' },
  Learn: { active: 'book', inactive: 'book-outline' },
  Quiz: { active: 'help-circle', inactive: 'help-circle-outline' },
  Settings: { active: 'settings', inactive: 'settings-outline' },
};

function MainApp() {
  const { user, loading } = useUser();
  const { t } = useTranslation();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
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
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const icons = TAB_ICONS[route.name];
              const iconName = focused ? icons.active : icons.inactive;
              return (
                <View style={{ alignItems: 'center' }}>
                  {focused && (
                    <View style={{
                      width: 24,
                      height: 3,
                      borderRadius: 1.5,
                      backgroundColor: COLORS.primary,
                      marginBottom: 4,
                    }} />
                  )}
                  <Ionicons name={iconName} size={focused ? 24 : 22} color={color} />
                </View>
              );
            },
            tabBarActiveTintColor: COLORS.tabBarActive,
            tabBarInactiveTintColor: COLORS.tabBarInactive,
            tabBarStyle: {
              paddingBottom: Platform.OS === 'ios' ? 20 : 8,
              paddingTop: 8,
              height: Platform.OS === 'ios' ? 85 : 65,
              backgroundColor: COLORS.tabBarBg,
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
      <UserProvider>
        <MainApp />
      </UserProvider>
    </LanguageProvider>
  );
}
