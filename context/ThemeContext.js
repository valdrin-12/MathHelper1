import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, DARK_COLORS } from '../theme/constants';

const ThemeContext = createContext();

const THEME_KEY = '@mathhelper_theme';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((value) => {
      if (value === 'dark') setIsDark(true);
      setLoaded(true);
    });
  }, []);

  const toggleTheme = async () => {
    const newValue = !isDark;
    setIsDark(newValue);
    await AsyncStorage.setItem(THEME_KEY, newValue ? 'dark' : 'light');
  };

  const colors = isDark ? DARK_COLORS : COLORS;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors, loaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return { isDark: false, toggleTheme: () => {}, colors: COLORS, loaded: true };
  }
  return ctx;
}
