import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = '@math_helper_access_token';
const REFRESH_TOKEN_KEY = '@math_helper_refresh_token';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://mathhelper1-4zct.onrender.com';

let isRefreshing = false;
let refreshQueue = [];

async function getAccessToken() {
  return AsyncStorage.getItem(ACCESS_TOKEN_KEY);
}

async function getRefreshToken() {
  return AsyncStorage.getItem(REFRESH_TOKEN_KEY);
}

async function storeTokens(accessToken, refreshToken) {
  await AsyncStorage.multiSet([
    [ACCESS_TOKEN_KEY, accessToken],
    [REFRESH_TOKEN_KEY, refreshToken],
  ]);
}

async function clearTokens() {
  await AsyncStorage.multiRemove([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY]);
}

async function hasTokens() {
  const token = await getAccessToken();
  return !!token;
}

async function refreshTokens() {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token');
  }

  const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  const data = await response.json();
  if (!response.ok || !data.success) {
    await clearTokens();
    throw new Error('Token refresh failed');
  }

  await storeTokens(data.accessToken, data.refreshToken);
  return data.accessToken;
}

async function request(method, path, body = null) {
  const accessToken = await getAccessToken();

  const headers = { 'Content-Type': 'application/json' };
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const options = { method, headers };
  if (body) {
    options.body = JSON.stringify(body);
  }

  let response = await fetch(`${BASE_URL}${path}`, options);

  // Handle token expiry with auto-refresh
  if (response.status === 401) {
    const errorData = await response.json();

    if (errorData.code === 'TOKEN_EXPIRED') {
      // Use mutex to prevent concurrent refresh calls
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          refreshQueue.push({ resolve, reject });
        }).then(async (newToken) => {
          headers['Authorization'] = `Bearer ${newToken}`;
          return fetch(`${BASE_URL}${path}`, { ...options, headers }).then(r => r.json());
        });
      }

      isRefreshing = true;
      try {
        const newToken = await refreshTokens();
        isRefreshing = false;

        // Resolve queued requests
        refreshQueue.forEach(({ resolve }) => resolve(newToken));
        refreshQueue = [];

        headers['Authorization'] = `Bearer ${newToken}`;
        response = await fetch(`${BASE_URL}${path}`, { ...options, headers });
        // Fall through to parse the new response below
      } catch (err) {
        isRefreshing = false;
        refreshQueue.forEach(({ reject }) => reject(err));
        refreshQueue = [];
        throw err;
      }
    } else {
      // 401 but NOT a token issue (e.g. USER_NOT_FOUND, wrong password)
      // Body is already consumed — throw the error directly
      const error = new Error(errorData.error || 'Unauthorized');
      error.status = 401;
      error.data = errorData;
      throw error;
    }
  }

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    const error = new Error('Server error. Please try again later.');
    error.status = response.status;
    throw error;
  }

  if (!response.ok) {
    const error = new Error(data.error || 'Request failed');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export const api = {
  get: (path) => request('GET', path),
  post: (path, body) => request('POST', path, body),
  put: (path, body) => request('PUT', path, body),
  delete: (path) => request('DELETE', path),
  storeTokens,
  clearTokens,
  hasTokens,
};

export default api;
