import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { Button } from '../../shared/ui';
import { useUser } from './UserContext';

/**
 * Shown to a guest who reaches something that needs an account.
 * reason: 'ai' | 'aiFallback' | 'photo' | 'save' | 'premium' | 'profile'
 */
export default function AccountPrompt({ visible, reason = 'profile', onClose }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { exitGuest } = useUser();

  const go = (mode) => {
    onClose?.();
    exitGuest(mode);
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={[styles.overlay, { backgroundColor: colors.overlay }]}>
        <View style={[styles.card, { backgroundColor: colors.surface }]}>
          <View style={[styles.icon, { backgroundColor: `${colors.primary}1F` }]}>
            <Ionicons name="person-add" size={26} color={colors.primary} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>{t('accountPrompt.title')}</Text>
          <Text style={[styles.message, { color: colors.textSubtle }]}>{t(`accountPrompt.${reason}`)}</Text>
          <Button title={t('accountPrompt.create')} icon="person-add" onPress={() => go('register')} style={styles.button} />
          <Button title={t('accountPrompt.signIn')} variant="tinted" onPress={() => go('login')} style={styles.button} />
          <Button title={t('accountPrompt.later')} variant="plain" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: SPACING.lg },
  card: { width: '100%', maxWidth: 380, borderRadius: BORDER_RADIUS.xl, padding: SPACING.xl, alignItems: 'stretch' },
  icon: { alignSelf: 'center', width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.md },
  title: { ...TYPOGRAPHY.h3, textAlign: 'center', marginBottom: SPACING.sm },
  message: { ...TYPOGRAPHY.subhead, textAlign: 'center', marginBottom: SPACING.lg },
  button: { marginBottom: SPACING.sm },
});
