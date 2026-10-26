import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../../components/ui';
import { useDashboardStyles } from './dashboardStyles';

// Shown when the free analyses (type 'free') or today's Premium analyses (type 'daily') are used up.
export default function LimitModal({ visible, type, onClose, onUpgrade }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useDashboardStyles();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.limitOverlay}>
        <View style={styles.limitModal}>
          <View style={styles.limitIconBox}>
            <Ionicons name="lock-closed" size={28} color={colors.secondary} />
          </View>
          <Text style={styles.limitTitle}>
            {type === 'free' ? t('rateLimit.freeTitle') : t('rateLimit.title')}
          </Text>
          <Text style={styles.limitMessage}>
            {type === 'free' ? t('rateLimit.freeMessage') : t('rateLimit.message')}
          </Text>

          <View style={styles.limitPremiumBox}>
            <View style={styles.limitPremiumHeader}>
              <Ionicons name="star" size={16} color={colors.secondary} />
              <Text style={styles.limitPremiumTitle}>{t('rateLimit.premiumTitle')}</Text>
            </View>
            <Text style={styles.limitPremiumDesc}>{t('rateLimit.premiumDesc')}</Text>
          </View>

          <Button
            style={styles.limitButton}
            tone="warning"
            icon="star"
            title={t('rateLimit.upgradePremium')}
            onPress={onUpgrade}
          />
          <Button
            style={styles.limitButton}
            variant="plain"
            title={type === 'daily' ? t('rateLimit.tryTomorrow') : t('rateLimit.close')}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
}
