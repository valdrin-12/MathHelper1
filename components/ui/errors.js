// Map stable error codes (from services / contexts / the API) to translated messages.
import i18n from '../../locales/i18n';

/** Every code with a translation under `errors.<CODE>` in locales/<lang>/ui.json. */
export const KNOWN_ERROR_CODES = [
  'NETWORK_ERROR', 'TIMEOUT', 'SERVER_ERROR', 'AUTH_LOST', 'UNEXPECTED_ERROR', 'UNKNOWN_ERROR',
  'LOGIN_FAILED', 'REGISTRATION_FAILED', 'UPDATE_FAILED', 'DELETE_FAILED', 'INVALID_CREDENTIALS',
  'CURRENT_PASSWORD_REQUIRED', 'INVALID_CURRENT_PASSWORD', 'PASSWORD_REQUIRED', 'INVALID_PASSWORD',
  'SUBSCRIPTION_CANCEL_FAILED', 'STATS_LOAD_FAILED', 'SAVED_ITEMS_LOAD_FAILED', 'IMAGE_NOT_FOUND',
  'IMAGE_READ_FAILED', 'IMAGE_TOO_LARGE', 'OCR_RATE_LIMITED', 'INVALID_TICKET', 'USAGE_CHECK_FAILED',
  'SAVED_LIMIT', 'INVALID_CODE',
];

/** Extract a code from an Error, a `{ code }` result object, or a plain string. */
export const getErrorCodeOf = (errOrCode) => {
  if (!errOrCode) return null;
  if (typeof errOrCode === 'string') return errOrCode;
  if (errOrCode.isTimeout) return 'TIMEOUT';
  if (errOrCode.isNetworkError) return 'NETWORK_ERROR';
  return errOrCode.code || errOrCode.data?.code || (errOrCode.status >= 500 ? 'SERVER_ERROR' : null);
};

/**
 * Translate an error code (or error object) into a user-facing message.
 * @param {string|Error|{code?: string}|null} errOrCode
 * @param {string} [fallback] - message to use when the code is unknown (defaults to errors.UNKNOWN_ERROR)
 * @param {Function} [t] - translate function (defaults to the global i18n instance)
 */
export function getErrorMessage(errOrCode, fallback, t = i18n.t.bind(i18n)) {
  const code = getErrorCodeOf(errOrCode);
  if (code === 'IMAGE_TOO_LARGE') {
    const details = typeof errOrCode === 'object' ? errOrCode?.details : null;
    if (details?.maxMB) {
      return t('errors.IMAGE_TOO_LARGE_DETAILS', { sizeMB: details.sizeMB, maxMB: details.maxMB });
    }
  }
  if (code && KNOWN_ERROR_CODES.includes(code)) return t(`errors.${code}`);
  return fallback || t('errors.UNKNOWN_ERROR');
}

export default getErrorMessage;
