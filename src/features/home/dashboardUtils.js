import { isNetworkError as isApiNetworkError } from '../../shared/api/apiClient';
import { getErrorCodeOf } from '../../shared/ui';

const LIMIT_CODES = ['FREE_LIMIT_REACHED', 'DAILY_LIMIT_REACHED'];

export const getLimitCode = (error) => {
  if (LIMIT_CODES.includes(error?.code)) return error.code;
  if (LIMIT_CODES.includes(error?.message)) return error.message;
  return null;
};

// Offline / timeout (services wrap network errors and keep the code)
export const isConnectivityError = (error) =>
  isApiNetworkError(error) || ['NETWORK_ERROR', 'TIMEOUT'].includes(getErrorCodeOf(error));

export const getGreeting = (t) => {
  const hour = new Date().getHours();
  if (hour < 12) return t('dashboard.greetingMorning');
  if (hour < 18) return t('dashboard.greetingAfternoon');
  return t('dashboard.greetingEvening');
};

export const formatTimeAgo = (dateString, t) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return t('dashboard.timeNow');
  if (diffMins < 60) return t('dashboard.timeMinutes', { count: diffMins });
  if (diffHours < 24) return t('dashboard.timeHours', { count: diffHours });
  return t('dashboard.timeDays', { count: diffDays });
};
