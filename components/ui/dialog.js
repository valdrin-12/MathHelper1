// ─────────────────────────────────────────────────────────────────────────────
// Cross-platform alert / confirm dialogs.
// Alert.alert is a no-op on react-native-web, so on web we fall back to the
// browser's window.alert / window.confirm. Always use these helpers instead of
// calling Alert.alert directly.
// ─────────────────────────────────────────────────────────────────────────────
import { Alert, Platform } from 'react-native';
import i18n from '../../locales/i18n';

const isWeb = Platform.OS === 'web';

const joinText = (title, message) => [title, message].filter(Boolean).join('\n\n');

/**
 * Show an informational alert with a single OK button.
 * @param {string} title
 * @param {string} [message]
 * @returns {Promise<void>} resolves once the alert is dismissed
 */
export function showAlert(title, message) {
  if (isWeb) {
    if (typeof window !== 'undefined' && typeof window.alert === 'function') {
      window.alert(joinText(title, message));
    }
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [{ text: i18n.t('common.ok'), onPress: () => resolve() }],
      { cancelable: true, onDismiss: () => resolve() },
    );
  });
}

/**
 * Ask the user to confirm an action.
 * @param {{ title: string, message?: string, confirmText?: string, cancelText?: string, destructive?: boolean }} options
 * @returns {Promise<boolean>} true when the user confirmed
 */
export function confirmAction({ title, message, confirmText, cancelText, destructive = false } = {}) {
  if (isWeb) {
    if (typeof window === 'undefined' || typeof window.confirm !== 'function') return Promise.resolve(false);
    return Promise.resolve(window.confirm(joinText(title, message)));
  }
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        { text: cancelText || i18n.t('common.cancel'), style: 'cancel', onPress: () => resolve(false) },
        {
          text: confirmText || i18n.t('common.ok'),
          style: destructive ? 'destructive' : 'default',
          onPress: () => resolve(true),
        },
      ],
      { cancelable: true, onDismiss: () => resolve(false) },
    );
  });
}

export default { showAlert, confirmAction };
