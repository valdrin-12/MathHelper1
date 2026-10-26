// Lets screens switch tabs in both layouts: the mobile bottom-tab navigator and the
// desktop-web sidebar layout (which renders screens without a tab navigator).
import { createContext, useContext, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const TabNavigationContext = createContext(null);

export const TabNavigationProvider = TabNavigationContext.Provider;

/** @returns {(tab: 'Dashboard'|'Saved'|'Learn'|'Quiz'|'Settings') => void} */
export function useTabNavigate() {
  const desktopNavigate = useContext(TabNavigationContext);
  const navigation = useNavigation();
  return useCallback((tab) => {
    if (desktopNavigate) {
      desktopNavigate(tab);
      return;
    }
    try {
      navigation.navigate(tab);
    } catch (e) {
      console.warn('[useTabNavigate] Could not navigate to', tab, e?.message);
    }
  }, [desktopNavigate, navigation]);
}

export default TabNavigationContext;
