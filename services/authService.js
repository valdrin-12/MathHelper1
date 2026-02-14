// Authentication service (local, no backend)
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../locales/i18n';

const USER_KEY = '@math_helper_user'; // Stores actual user account data
const SESSION_KEY = '@math_helper_session'; // Stores current session (who's logged in)

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Register new user
 * @param {Object} params - { name, email, password }
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null }>}
 */
export const registerUser = async ({ name, email, password }) => {
  try {
    if (!name || name.trim().length < 2) {
      return { success: false, user: null, error: i18n.t('auth.validation.nameMinLength') };
    }

    if (!email || !isValidEmail(email.trim())) {
      return { success: false, user: null, error: i18n.t('auth.validation.emailInvalid') };
    }

    if (!password || password.length < 6) {
      return { success: false, user: null, error: i18n.t('auth.validation.passwordMinLength') };
    }

    const existingData = await AsyncStorage.getItem(USER_KEY);
    if (existingData) {
      const existingUser = JSON.parse(existingData);
      if (existingUser.email.toLowerCase() === email.trim().toLowerCase()) {
        return { success: false, user: null, error: i18n.t('auth.validation.emailExists') };
      }
    }

    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await AsyncStorage.setItem(USER_KEY, JSON.stringify(newUser));
    await AsyncStorage.setItem(SESSION_KEY, newUser.id);

    const { password: _, ...userWithoutPassword } = newUser;
    return { success: true, user: userWithoutPassword, error: null };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, user: null, error: i18n.t('auth.validation.registerError') };
  }
};

/**
 * Login with email and password
 * @param {Object} params - { email, password }
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null }>}
 */
export const loginUser = async ({ email, password }) => {
  try {
    if (!email || !password) {
      return { success: false, user: null, error: i18n.t('auth.validation.fillAllFields') };
    }

    const savedData = await AsyncStorage.getItem(USER_KEY);
    if (!savedData) {
      return { success: false, user: null, error: i18n.t('auth.validation.noAccount') };
    }

    const savedUser = JSON.parse(savedData);

    if (savedUser.email.toLowerCase() !== email.trim().toLowerCase()) {
      return { success: false, user: null, error: i18n.t('auth.validation.wrongCredentials') };
    }

    if (savedUser.password !== password) {
      return { success: false, user: null, error: i18n.t('auth.validation.wrongCredentials') };
    }

    await AsyncStorage.setItem(SESSION_KEY, savedUser.id);

    const { password: _, ...userWithoutPassword } = savedUser;
    return { success: true, user: userWithoutPassword, error: null };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, user: null, error: i18n.t('auth.validation.loginError') };
  }
};

/**
 * Get current user from storage
 * @returns {Promise<Object|null>}
 */
export const getCurrentUser = async () => {
  try {
    const sessionId = await AsyncStorage.getItem(SESSION_KEY);
    console.log('[authService] getCurrentUser - sessionId:', sessionId);
    if (!sessionId) {
      console.log('[authService] No active session - returning null');
      return null;
    }

    const savedData = await AsyncStorage.getItem(USER_KEY);
    if (!savedData) {
      console.log('[authService] No user data - returning null');
      return null;
    }

    const user = JSON.parse(savedData);
    if (user.id !== sessionId) {
      console.log('[authService] Session does not match user ID - returning null');
      return null;
    }

    console.log('[authService] User found:', user.email);
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    console.error('[authService] Error getting user:', error);
    return null;
  }
};

/**
 * Logout - clear session data
 * Note: This only removes the session, not the account
 * @returns {Promise<boolean>}
 */
export const logoutUser = async () => {
  try {
    console.log('[authService] Logout started...');
    const sessionBefore = await AsyncStorage.getItem(SESSION_KEY);
    console.log('[authService] Session before logout:', sessionBefore);

    await AsyncStorage.removeItem(SESSION_KEY);

    const sessionAfter = await AsyncStorage.getItem(SESSION_KEY);
    console.log('[authService] Session after logout:', sessionAfter);
    console.log('[authService] Logout completed successfully!');
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    return false;
  }
};

/**
 * Update user profile
 * @param {Object} updates - Data to update
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null }>}
 */
export const updateUser = async (updates) => {
  try {
    const savedData = await AsyncStorage.getItem(USER_KEY);
    if (!savedData) {
      return { success: false, user: null, error: i18n.t('auth.validation.accountNotFound') };
    }

    const existingUser = JSON.parse(savedData);

    if (updates.email && !isValidEmail(updates.email.trim())) {
      return { success: false, user: null, error: i18n.t('auth.validation.emailInvalid') };
    }

    if (updates.name && updates.name.trim().length < 2) {
      return { success: false, user: null, error: i18n.t('auth.validation.nameMinLength') };
    }

    if (updates.password && updates.password.length < 6) {
      return { success: false, user: null, error: i18n.t('auth.validation.passwordMinLength') };
    }

    const updatedUser = {
      ...existingUser,
      ...updates,
      email: updates.email ? updates.email.trim().toLowerCase() : existingUser.email,
      name: updates.name ? updates.name.trim() : existingUser.name,
      updatedAt: new Date().toISOString(),
    };

    await AsyncStorage.setItem(USER_KEY, JSON.stringify(updatedUser));

    const { password: _, ...userWithoutPassword } = updatedUser;
    return { success: true, user: userWithoutPassword, error: null };
  } catch (error) {
    console.error('Profile update error:', error);
    return { success: false, user: null, error: i18n.t('auth.validation.updateError') };
  }
};

export default {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  updateUser,
};
