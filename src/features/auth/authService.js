import api, { isRecoverableError } from '../../shared/api/apiClient';

/**
 * Extract a stable error code for the UI to translate.
 * Server codes (INVALID_CREDENTIALS, CURRENT_PASSWORD_REQUIRED, ...) win; otherwise
 * NETWORK_ERROR / TIMEOUT / SERVER_ERROR / AUTH_LOST, falling back to `fallback`.
 */
export const getErrorCode = (error, fallback = 'UNKNOWN_ERROR') =>
  error?.data?.code || error?.code || (error?.status >= 500 ? 'SERVER_ERROR' : fallback);

const failure = (error, fallbackCode) => {
  const code = getErrorCode(error, fallbackCode);
  return { success: false, user: null, error: error?.data?.error || error?.message || code, code };
};

/**
 * Register new user
 * @param {Object} params - { name, email, password, language }
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null, code?: string }>}
 */
export const registerUser = async ({ name, email, password, language }) => {
  try {
    const data = await api.post('/api/auth/register', { name, email, password, language });
    await api.storeTokens(data.accessToken, data.refreshToken);
    return { success: true, user: data.user, error: null, code: null };
  } catch (error) {
    return failure(error, 'REGISTRATION_FAILED');
  }
};

/**
 * Sign in or sign up with a Google ID token (verified by the server).
 * @returns {Promise<{ success: boolean, user: Object|null, isNewUser?: boolean, linkedExisting?: boolean, error: string|null, code: string|null }>}
 */
export const loginWithGoogle = async ({ idToken, language }) => {
  try {
    const data = await api.post('/api/auth/google', { idToken, language });
    await api.storeTokens(data.accessToken, data.refreshToken);
    return { success: true, user: data.user, isNewUser: !!data.isNewUser, linkedExisting: !!data.linkedExisting, error: null, code: null };
  } catch (error) {
    return failure(error, 'GOOGLE_AUTH_FAILED');
  }
};

/**
 * Login with email and password.
 * Wrong email and wrong password both yield code 'INVALID_CREDENTIALS'.
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null, code: string|null }>}
 */
export const loginUser = async ({ email, password }) => {
  try {
    const data = await api.post('/api/auth/login', { email, password });
    await api.storeTokens(data.accessToken, data.refreshToken);
    return { success: true, user: data.user, error: null, code: null };
  } catch (error) {
    return failure(error, 'LOGIN_FAILED');
  }
};

/**
 * Get current user from backend.
 *
 * - Resolves with the user when the session is valid.
 * - Resolves with null when there is no session or the server rejected it (tokens cleared).
 * - REJECTS with a recoverable error (NetworkError / TimeoutError / 5xx ApiError, all with
 *   `isRecoverableError(err) === true`) when the server could not be reached. Tokens are KEPT
 *   so the caller can stay logged in offline and retry later.
 * @returns {Promise<Object|null>}
 */
export const getCurrentUser = async () => {
  const hasToken = await api.hasTokens();
  if (!hasToken) return null;

  try {
    const data = await api.get('/api/auth/me');
    return data.user || null;
  } catch (error) {
    if (isRecoverableError(error)) {
      throw error;
    }
    // 401 (session lost — apiClient already cleared tokens) or 404 (user deleted)
    console.warn('[authService] Session invalid:', error?.code || error?.status);
    await api.clearTokens();
    return null;
  }
};

/**
 * Logout - clear session
 * @returns {Promise<boolean>}
 */
const LOGOUT_TIMEOUT_MS = 5000;

export const logoutUser = async () => {
  try {
    // Revoking refresh tokens is best-effort: don't keep the user waiting on a slow/cold server
    await api.post('/api/auth/logout', null, { timeoutMs: LOGOUT_TIMEOUT_MS });
  } catch (error) {
    console.warn('Logout API error:', error?.code || error?.message);
  }
  await api.clearTokens();
  return true;
};

/**
 * Update user profile.
 * Changing `email` or `password` requires `currentPassword` in `updates`.
 * When the server rotates tokens (email/password change) they are stored automatically.
 * Error codes: CURRENT_PASSWORD_REQUIRED, INVALID_CURRENT_PASSWORD, NETWORK_ERROR, TIMEOUT,
 * SERVER_ERROR, UPDATE_FAILED (+ any other server `code`).
 * @param {Object} updates - e.g. { name } or { email, currentPassword } or { password, currentPassword }
 * @returns {Promise<{ success: boolean, user: Object|null, error: string|null, code: string|null }>}
 */
export const updateUser = async (updates) => {
  try {
    const data = await api.put('/api/auth/profile', updates);
    if (data.accessToken && data.refreshToken) {
      await api.storeTokens(data.accessToken, data.refreshToken);
    }
    return { success: true, user: data.user, error: null, code: null };
  } catch (error) {
    return failure(error, 'UPDATE_FAILED');
  }
};

/**
 * Permanently delete the account. Requires the user's password, or for an account created with Google
 * (no password) a fresh Google ID token: pass `{ idToken }`.
 * Error codes: PASSWORD_REQUIRED, INVALID_PASSWORD, GOOGLE_REAUTH_REQUIRED, INVALID_GOOGLE_TOKEN,
 * SUBSCRIPTION_CANCEL_FAILED, NETWORK_ERROR, TIMEOUT, SERVER_ERROR, DELETE_FAILED.
 * @param {string|{ idToken: string }} credential
 * @returns {Promise<{ success: boolean, error: string|null, code: string|null }>}
 */
export const deleteAccount = async (credential) => {
  try {
    await api.delete('/api/auth/account', typeof credential === 'string' ? { password: credential } : { idToken: credential?.idToken });
    await api.clearTokens();
    return { success: true, error: null, code: null };
  } catch (error) {
    const { error: message, code } = failure(error, 'DELETE_FAILED');
    return { success: false, error: message, code };
  }
};

export default {
  registerUser,
  loginUser,
  loginWithGoogle,
  getCurrentUser,
  logoutUser,
  updateUser,
  deleteAccount,
  getErrorCode,
};
