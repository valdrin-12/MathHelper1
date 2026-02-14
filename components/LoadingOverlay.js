import React from 'react';
import {
  Modal,
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function LoadingOverlay({ visible }) {
  const { t } = useTranslation();

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.title}>{t('loading.analyzingProblem')}</Text>
          <Text style={styles.subtitle}>{t('loading.mayTakeSeconds')}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.xl,
    padding: 30,
    alignItems: 'center',
    minWidth: 250,
    ...(Platform.OS === 'web'
      ? { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }
      : {
          shadowColor: COLORS.shadow,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 10,
        }),
  },
  title: {
    marginTop: SPACING.xl,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: SPACING.sm,
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
