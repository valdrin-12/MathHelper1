import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = 'math_helper_access_token';
const REFRESH_TOKEN_KEY = 'math_helper_refresh_token';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://mathhelper1-4zct.onrender.com';

export const DEFAULT_TIMEOUT_MS = 20000;
export const ANALYZE_TIMEOUT_MS = 60000;

// SecureStore is not available on web — fall back to AsyncStorage there
const secureGet = (key) =>
  Platform.OS === 'web' ? AsyncStorage.getItem(key) : SecureStore.getItemAsync(key);
const secureSet = (key, value) =>
  Platform.OS === 'web' ? AsyncStorage.setItem(key, value) : SecureStore.setItemAsync(key, value);
const secureDelete = (key) =>
  Platform.OS === 'web' ? AsyncStorage.removeItem(key) : SecureStore.deleteItemAsync(key);

// ---------------------------------------------------------------------------
// Error types
// ---------------------------------------------------------------------------

/** HTTP error returned by the server. `status`, `code` (server code if any) and `data` are set. */
export class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
    this.code = data?.code || (status >= 500 ? 'SERVER_ERROR' : null);
  }
}

/** The server could not be reached (offline, DNS, connection reset). Tokens are kept. */
export class NetworkError extends Error {
  constructor(message = 'Network request failed', cause = null) {
    super(message);
    this.name = 'NetworkError';
    this.code = 'NETWORK_ERROR';
    this.isNetworkError = true;
    this.cause = cause;
  }
}

/** The request did not complete within its timeout. Subclass of NetworkError. */
export class TimeoutError extends NetworkError {
  constructor(timeoutMs) {
    super(`Request timed out after ${timeoutMs}ms`);
    this.name = 'TimeoutError';
    this.code = 'TIMEOUT';
    this.isTimeout = true;
  }
}

/** The session is no longer valid (refresh token rejected). Tokens have been cleared. */
export class AuthLostError extends Error {
  constructor(message = 'Session expired') {
    super(message);
    this.name = 'AuthLostError';
    this.code = 'AUTH_LOST';
    this.status = 401;
    this.isAuthLost = true;
  }
}

/** True for errors where retrying later may succeed (offline, timeout, 5xx). */
export const isRecoverableError = (error) =>
  !!error && (error.isNetworkError === true || (typeof error.status === 'number' && error.status >= 500));

export const isNetworkError = (error) => !!error && error.isNetworkError === true;

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

async function getAccessToken() {
  return secureGet(ACCESS_TOKEN_KEY);
}

async function getRefreshToken() {
  return secureGet(REFRESH_TOKEN_KEY);
}

async function storeTokens(accessToken, refreshToken) {
  await Promise.all([
    secureSet(ACCESS_TOKEN_KEY, accessToken),
    secureSet(REFRESH_TOKEN_KEY, refreshToken),
  ]);
}

async function clearTokens() {
  await Promise.all([
    secureDelete(ACCESS_TOKEN_KEY),
    secureDelete(REFRESH_TOKEN_KEY),
  ]);
}

async function hasTokens() {
  const token = await getAccessToken();
  return !!token;
}

// ---------------------------------------------------------------------------
// Auth-lost notification
// ---------------------------------------------------------------------------

const authLostListeners = new Set();

/**
 * Register a callback invoked once the session is irrecoverably lost (refresh token rejected
 * or access token invalid). Tokens are already cleared when it fires.
 * @param {(error: AuthLostError) => void} callback
 * @returns {() => void} unsubscribe
 */
export function setOnAuthLost(callback) {
  authLostListeners.add(callback);
  return () => authLostListeners.delete(callback);
}

let authLostInFlight = null;

async function handleAuthLost(reason) {
  // Several requests may detect the lost session at the same time — notify only once.
  if (!authLostInFlight) {
    authLostInFlight = (async () => {
      await clearTokens().catch(() => {});
      const err = new AuthLostError(reason);
      authLostListeners.forEach((cb) => {
        try {
          cb(err);
        } catch (e) {
          console.error('[apiClient] onAuthLost listener failed:', e);
        }
      });
    })().finally(() => {
      authLostInFlight = null;
    });
  }
  await authLostInFlight;
  return new AuthLostError(reason);
}

// ---------------------------------------------------------------------------
// Fetch with timeout
// ---------------------------------------------------------------------------

const timeoutForPath = (path) =>
  path.startsWith('/api/analyze/') ? ANALYZE_TIMEOUT_MS : DEFAULT_TIMEOUT_MS;

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (timedOut) throw new TimeoutError(timeoutMs);
    throw new NetworkError(error?.message || 'Network request failed', error);
  } finally {
    clearTimeout(timer);
  }
}

async function readBody(response) {
  let text = '';
  try {
    text = await response.text();
  } catch {
    return { data: null, parsed: false };
  }
  if (!text) return { data: {}, parsed: true };
  try {
    return { data: JSON.parse(text), parsed: true };
  } catch {
    return { data: null, parsed: false };
  }
}

// ---------------------------------------------------------------------------
// Token refresh (single shared in-flight promise)
// ---------------------------------------------------------------------------

let refreshPromise = null;

async function doRefresh() {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) {
    throw await handleAuthLost('No refresh token');
  }

  // Network errors / timeouts propagate as NetworkError and keep the tokens.
  const response = await fetchWithTimeout(
    `${BASE_URL}/api/auth/refresh`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    },
    DEFAULT_TIMEOUT_MS,
  );
  const { data } = await readBody(response);

  if (response.status >= 500 || response.status === 429) {
    // Server trouble — the refresh token may still be valid, keep it.
    throw new ApiError(data?.error || 'Server error', response.status, data);
  }
  if (!response.ok || !data?.success || !data.accessToken) {
    throw await handleAuthLost('Token refresh failed');
  }

  await storeTokens(data.accessToken, data.refreshToken || refreshToken);
  return data.accessToken;
}

/**
 * Refresh the access token. Concurrent callers share one request.
 * Resolves with the new access token; rejects with AuthLostError (tokens cleared, onAuthLost
 * fired), NetworkError/TimeoutError or ApiError (5xx) — the latter two keep the tokens.
 */
function refreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = doRefresh().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

// ---------------------------------------------------------------------------
// Request
// ---------------------------------------------------------------------------

const SESSION_INVALID_CODES = ['INVALID_TOKEN', 'NO_TOKEN', 'TOKEN_EXPIRED'];

/**
 * @param {string} method
 * @param {string} path
 * @param {object|null} body
 * @param {{ headers?: object, timeoutMs?: number }} [opts]
 */
async function request(method, path, body = null, opts = {}) {
  const timeoutMs = opts.timeoutMs ?? timeoutForPath(path);

  const send = async () => {
    const accessToken = await getAccessToken();
    const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
    if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
    const options = { method, headers };
    if (body !== null && body !== undefined) options.body = JSON.stringify(body);
    const response = await fetchWithTimeout(`${BASE_URL}${path}`, options, timeoutMs);
    return { response, usedToken: accessToken };
  };

  let { response, usedToken } = await send();

  if (response.status === 401) {
    const { data } = await readBody(response);
    const code = data?.code;

    if (code === 'TOKEN_EXPIRED' && usedToken) {
      // Another request may already have refreshed while this one was in flight.
      const current = await getAccessToken();
      if (!current || current === usedToken) {
        await refreshAccessToken();
      }
      // Retry exactly once; the retried response goes through the normal handling below.
      ({ response } = await send());
      if (response.status === 401) {
        const retry = await readBody(response);
        if (SESSION_INVALID_CODES.includes(retry.data?.code)) {
          throw await handleAuthLost('Session rejected after refresh');
        }
        throw new ApiError(retry.data?.error || 'Unauthorized', 401, retry.data);
      }
    } else if (usedToken && (code === 'INVALID_TOKEN' || code === 'NO_TOKEN')) {
      throw await handleAuthLost('Invalid access token');
    } else {
      // 401 that is not a session problem (e.g. INVALID_CREDENTIALS, INVALID_CURRENT_PASSWORD)
      throw new ApiError(data?.error || 'Unauthorized', 401, data);
    }
  }

  const { data, parsed } = await readBody(response);

  if (!response.ok) {
    throw new ApiError(
      (parsed && data?.error) || (response.status >= 500 ? 'Server error. Please try again later.' : 'Request failed'),
      response.status,
      parsed ? data : null,
    );
  }
  if (!parsed) {
    throw new ApiError('Server error. Please try again later.', response.status, null);
  }

  return data;
}

export const api = {
  get: (path, opts) => request('GET', path, null, opts),
  post: (path, body, opts) => request('POST', path, body, opts),
  put: (path, body, opts) => request('PUT', path, body, opts),
  /** DELETE accepts an optional JSON body (e.g. { password } for account deletion). */
  delete: (path, body = null, opts) => request('DELETE', path, body, opts),
  storeTokens,
  clearTokens,
  hasTokens,
  refreshAccessToken,
  setOnAuthLost,
};

export default api;
