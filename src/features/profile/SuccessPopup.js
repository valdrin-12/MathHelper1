import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../shared/theme/ThemeContext';
import { SPACING } from '../../shared/theme/constants';
import { useProfileStyles } from './profileStyles';

// "Profile updated" — absolute overlay inside the sheet.
export default function SuccessPopup({ onOk }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useProfileStyles();

  return (
    <View style={styles.successOverlay}>
      <View style={styles.successCard}>
        <Ionicons name="checkmark-circle" size={52} color={colors.primary} style={{ marginBottom: SPACING.md }} />
        <Text style={styles.successTitle}>{t('common.success')}</Text>
        <Text style={styles.successMessage}>{t('editProfile.profileUpdated')}</Text>
        <TouchableOpacity
          style={styles.successBtn}
          onPress={onOk}
        >
          <Text style={styles.successBtnText}>{t('common.ok')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
