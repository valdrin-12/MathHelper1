// Context për menaxhimin e gjendjes së autentifikimit
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authService from './authService';
import { setOnAuthLost, isRecoverableError } from '../../shared/api/apiClient';
import { setCurrentUserId, clearUserLocalData, CACHED_USER_KEY } from './userStorage';

const UserContext = createContext();

// Retry delays while the server is unreachable (ms); the last value repeats.
const OFFLINE_RETRY_DELAYS = [15000, 30000, 60000, 120000, 300000];

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser duhet të përdoret brenda UserProvider');
  }
  return context;
};

const readCachedUser = async () => {
  try {
    const raw = await AsyncStorage.getItem(CACHED_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const writeCachedUser = async (user) => {
  try {
    if (user) await AsyncStorage.setItem(CACHED_USER_KEY, JSON.stringify(user));
    else await AsyncStorage.removeItem(CACHED_USER_KEY);
  } catch {
    // cache is best-effort
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);
  // true while we run on the cached profile because the server could not be reached
  const [offline, setOffline] = useState(false);
  // last session-check error code (NETWORK_ERROR / TIMEOUT / SERVER_ERROR) or null
  const [authError, setAuthError] = useState(null);

  const retryTimer = useRef(null);
  const retryAttempt = useRef(0);
  const mounted = useRef(true);

  // Keep userStorage's current id in sync synchronously so userKey() is correct on first render.
  const setUser = useCallback((next) => {
    setCurrentUserId(next?.id ?? null);
    setUserState(next);
    writeCachedUser(next);
  }, []);

  const clearRetry = () => {
    if (retryTimer.current) {
      clearTimeout(retryTimer.current);
      retryTimer.current = null;
    }
  };

  const resetSession = useCallback(async () => {
    clearRetry();
    retryAttempt.current = 0;
    setOffline(false);
    setAuthError(null);
    setUser(null);
    await clearUserLocalData();
  }, [setUser]);

  /**
   * Check the session with the server.
   * @param {{ silent?: boolean }} [opts] - silent: do not toggle the global `loading` flag
   *   (App.js unmounts the whole tree while `loading` is true).
   * @returns {Promise<Object|null>} the user (possibly cached when offline)
   */
  const checkCurrentUser = useCallback(async ({ silent = false } = {}) => {
    if (!silent) setLoading(true);
    try {
      const currentUser = await authService.getCurrentUser();
      if (!mounted.current) return currentUser;
      clearRetry();
      retryAttempt.current = 0;
      setOffline(false);
      setAuthError(null);
      if (currentUser) {
        setUser(currentUser);
      } else {
        // No session or server rejected it
        setUser(null);
        await clearUserLocalData();
      }
      return currentUser;
    } catch (error) {
      if (isRecoverableError(error)) {
        // Server unreachable: stay logged in with the last known profile and retry later.
        const cached = await readCachedUser();
        if (!mounted.current) return cached;
        setAuthError(error.code || 'NETWORK_ERROR');
        setOffline(true);
        setUserState((prev) => {
          const next = prev || cached || null;
          setCurrentUserId(next?.id ?? null);
          return next;
        });
        scheduleRetry();
        return cached;
      }
      console.error('Gabim gjatë kontrollimit të përdoruesit:', error);
      setAuthError(error?.code || 'UNKNOWN_ERROR');
      return null;
    } finally {
      if (!silent && mounted.current) setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUser]);

  const scheduleRetry = () => {
    clearRetry();
    const delay = OFFLINE_RETRY_DELAYS[Math.min(retryAttempt.current, OFFLINE_RETRY_DELAYS.length - 1)];
    retryAttempt.current += 1;
    retryTimer.current = setTimeout(() => {
      retryTimer.current = null;
      checkCurrentUser({ silent: true });
    }, delay);
  };

  /**
   * Re-fetch the user without touching the global loading flag (by default).
   * @param {{ silent?: boolean }} [opts] - default { silent: true }
   */
  const refreshUser = useCallback(
    ({ silent = true } = {}) => checkCurrentUser({ silent }),
    [checkCurrentUser],
  );

  // Initial session check
  useEffect(() => {
    mounted.current = true;
    checkCurrentUser();
    return () => {
      mounted.current = false;
      clearRetry();
    };
  }, [checkCurrentUser]);

  // Session lost (refresh token rejected) → log out locally
  useEffect(() => {
    const unsubscribe = setOnAuthLost(() => {
      resetSession();
    });
    return unsubscribe;
  }, [resetSession]);

  // When offline, retry as soon as the app comes back to the foreground
  useEffect(() => {
    if (!offline) return undefined;
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') checkCurrentUser({ silent: true });
    });
    return () => sub.remove();
  }, [offline, checkCurrentUser]);

  /**
   * Kyçu me email dhe fjalëkalim
   * @returns {Promise<{ success: boolean, error: string|null, code: string|null }>}
   */
  const login = async (email, password) => {
    try {
      const result = await authService.loginUser({ email, password });
      if (result.success) {
        // Make sure nothing from a previous account survives on this device
        await clearUserLocalData();
        setOffline(false);
        setAuthError(null);
        setUser(result.user);
      }
      return { success: result.success, error: result.error, code: result.code };
    } catch (error) {
      console.error('Gabim gjatë kyçjes:', error);
      return { success: false, error: 'UNEXPECTED_ERROR', code: 'UNEXPECTED_ERROR' };
    }
  };

  /**
   * Hyr ose regjistrohu me Google (serveri e verifikon tokenin)
   * @returns {Promise<{ success: boolean, error: string|null, code: string|null, isNewUser?: boolean, linkedExisting?: boolean }>}
   */
  const loginWithGoogle = async (idToken, language) => {
    try {
      const result = await authService.loginWithGoogle({ idToken, language });
      if (result.success) {
        await clearUserLocalData();
        setOffline(false);
        setAuthError(null);
        setUser(result.user);
      }
      return { success: result.success, error: result.error, code: result.code, isNewUser: result.isNewUser, linkedExisting: result.linkedExisting };
    } catch (error) {
      console.error('Gabim gjatë hyrjes me Google:', error);
      return { success: false, error: 'UNEXPECTED_ERROR', code: 'UNEXPECTED_ERROR' };
    }
  };

  /**
   * Regjistro përdorues të ri
   * @returns {Promise<{ success: boolean, error: string|null, code: string|null }>}
   */
  const register = async (name, email, password, language) => {
    try {
      const result = await authService.registerUser({ name, email, password, language });
      if (result.success) {
        await clearUserLocalData();
        setOffline(false);
        setAuthError(null);
        setUser(result.user);
      }
      return { success: result.success, error: result.error, code: result.code };
    } catch (error) {
      console.error('Gabim gjatë regjistrimit:', error);
      return { success: false, error: 'UNEXPECTED_ERROR', code: 'UNEXPECTED_ERROR' };
    }
  };

  /**
   * Çkyçu nga llogaria (pastron edhe të dhënat lokale të përdoruesit)
   */
  const logout = async () => {
    try {
      await authService.logoutUser();
    } catch (error) {
      console.error('[UserContext] Gabim gjatë çkyçjes:', error);
    } finally {
      // Çkyçu lokalisht edhe nëse serveri dështon
      await resetSession();
    }
  };

  /**
   * Fshi llogarinë përgjithmonë.
   * @param {string|{ idToken: string }} credential  password, or `{ idToken }` for an account created with Google
   * @returns {Promise<{ success: boolean, error: string|null, code: string|null }>}
   *   codes: PASSWORD_REQUIRED, INVALID_PASSWORD, GOOGLE_REAUTH_REQUIRED, INVALID_GOOGLE_TOKEN,
   *   SUBSCRIPTION_CANCEL_FAILED, NETWORK_ERROR, TIMEOUT, SERVER_ERROR, DELETE_FAILED, UNEXPECTED_ERROR
   */
  const deleteAccount = async (credential) => {
    try {
      const result = await authService.deleteAccount(credential);
      if (result.success) {
        await resetSession();
      }
      return result;
    } catch (error) {
      console.error('Gabim gjatë fshirjes së llogarisë:', error);
      return { success: false, error: 'UNEXPECTED_ERROR', code: 'UNEXPECTED_ERROR' };
    }
  };

  /**
   * Përditëso të dhënat e profilit.
   * Për ndryshim email-i/fjalëkalimi duhet `currentPassword` në `updates`.
   * @param {Object} updates
   * @returns {Promise<{ success: boolean, error: string|null, code: string|null }>}
   */
  const updateProfile = async (updates) => {
    try {
      const result = await authService.updateUser(updates);
      if (result.success) {
        setUser(result.user);
      }
      return { success: result.success, error: result.error, code: result.code };
    } catch (error) {
      console.error('Gabim gjatë përditësimit:', error);
      return { success: false, error: 'UNEXPECTED_ERROR', code: 'UNEXPECTED_ERROR' };
    }
  };

  const value = {
    user,
    loading,
    offline,
    authError,
    login,
    register,
    logout,
    loginWithGoogle,
    deleteAccount,
    updateProfile,
    refreshUser,
    // Backward compatible: `refresh()` is now silent (does not unmount the app via `loading`).
    refresh: refreshUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
