/**
 * Per-user AsyncStorage keys.
 *
 * Local-only progress (course progress, daily challenge flags) must not leak between accounts
 * on a shared device. Use `getUserScopedKey(baseKey, user.id)` (or `userKey(baseKey)`, which uses
 * the id of the currently logged-in user as tracked by UserContext) for every such key.
 *
 *   getUserScopedKey('@mathhelper_course_progress', 42)
 *     -> '@mathhelper_course_progress::user:42'
 *   getUserScopedKey(`@mathhelper_challenge_${dateKey}`, 42)
 *     -> '@mathhelper_challenge_2026-10-19::user:42'
 *
 * `clearUserLocalData()` removes every user-scoped key (for all users) plus the legacy unscoped
 * keys and the cached profile. UserContext calls it on logout, account deletion and when the
 * session is lost (refresh token rejected).
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const COURSE_PROGRESS_KEY = '@mathhelper_course_progress';
export const CHALLENGE_KEY_PREFIX = '@mathhelper_challenge_';
export const CACHED_USER_KEY = '@mathhelper_cached_user';

/** Any key starting with one of these prefixes is per-user data and is wiped on logout. */
// Local XP record for practice attempts and hint costs (see features/progress/progress.js XP_LEDGER_KEY)
const XP_LEDGER_KEY = '@mathhelper_xp_ledger';

export const USER_SCOPED_PREFIXES = [COURSE_PROGRESS_KEY, CHALLENGE_KEY_PREFIX, CACHED_USER_KEY, XP_LEDGER_KEY];

let currentUserId = null;

/** Called by UserContext whenever the logged-in user changes. */
export const setCurrentUserId = (userId) => {
  currentUserId = userId === undefined || userId === null ? null : String(userId);
};

export const getCurrentUserId = () => currentUserId;

/**
 * @param {string} baseKey - e.g. '@mathhelper_course_progress' or `@mathhelper_challenge_${date}`
 * @param {string|number|null} [userId] - defaults to the current user id; 'anonymous' when none
 * @returns {string}
 */
export const getUserScopedKey = (baseKey, userId = currentUserId) => {
  const id = userId === undefined || userId === null || userId === '' ? 'anonymous' : String(userId);
  return `${baseKey}::user:${id}`;
};

/** Shorthand for getUserScopedKey(baseKey, <current user id>). */
export const userKey = (baseKey) => getUserScopedKey(baseKey, currentUserId);

/**
 * Remove all per-user local data (scoped and legacy unscoped keys) from AsyncStorage.
 * Never throws; returns the number of keys removed.
 * @returns {Promise<number>}
 */
export const clearUserLocalData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const toRemove = keys.filter((k) => USER_SCOPED_PREFIXES.some((p) => k.startsWith(p)));
    if (toRemove.length > 0) {
      await AsyncStorage.multiRemove(toRemove);
    }
    return toRemove.length;
  } catch (error) {
    console.warn('[userStorage] Failed to clear user data:', error?.message);
    return 0;
  }
};

export default {
  COURSE_PROGRESS_KEY,
  CHALLENGE_KEY_PREFIX,
  CACHED_USER_KEY,
  USER_SCOPED_PREFIXES,
  setCurrentUserId,
  getCurrentUserId,
  getUserScopedKey,
  userKey,
  clearUserLocalData,
};
