import api from './apiClient';

/**
 * Register new user
 * @param {Object} params - { name, email, password }
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null }>}
 */
export const registerUser = async ({ name, email, password, language }) => {
  try {
    const data = await api.post('/api/auth/register', { name, email, password, language });
    await api.storeTokens(data.accessToken, data.refreshToken);
    return { success: true, user: data.user, error: null };
  } catch (error) {
    return { success: false, user: null, error: error.message || 'Registration failed' };
  }
};

/**
 * Login with email and password
 * @param {Object} params - { email, password }
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null }>}
 */
export const loginUser = async ({ email, password }) => {
  try {
    const data = await api.post('/api/auth/login', { email, password });
    await api.storeTokens(data.accessToken, data.refreshToken);
    return { success: true, user: data.user, error: null };
  } catch (error) {
    return { success: false, user: null, error: error.message || 'Login failed', code: error.data?.code || null };
  }
};

/**
 * Get current user from backend
 * @returns {Promise<Object|null>}
 */
export const getCurrentUser = async () => {
  try {
    const hasToken = await api.hasTokens();
    if (!hasToken) return null;

    const data = await api.get('/api/auth/me');
    return data.user;
  } catch (error) {
    console.error('[authService] Error getting user:', error);
    await api.clearTokens();
    return null;
  }
};

/**
 * Logout - clear session
 * @returns {Promise<boolean>}
 */
export const logoutUser = async () => {
  try {
    await api.post('/api/auth/logout');
  } catch (error) {
    console.error('Logout API error:', error);
  }
  await api.clearTokens();
  return true;
};

/**
 * Update user profile
 * @param {Object} updates - Data to update
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null }>}
 */
export const updateUser = async (updates) => {
  try {
    const data = await api.put('/api/auth/profile', updates);
    return { success: true, user: data.user, error: null };
  } catch (error) {
    return { success: false, user: null, error: error.message || 'Update failed' };
  }
};

export default {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  updateUser,
};
