// Light haptic feedback (Duolingo-style): success for a right answer, error for a wrong one.
// No-op on the web and wherever haptics are unavailable.
import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

export const haptic = (kind = 'light') => {
  if (Platform.OS === 'web') return;
  try {
    if (kind === 'success') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    else if (kind === 'error') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    else Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
  } catch {
    // haptics are a nicety, never an error
  }
};
