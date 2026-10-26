import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { getErrorMessage } from '../../shared/ui';
import GoogleButton from './GoogleButton';
import { useAuthStyles } from './authStyles';
import { openLegalPage } from './authUtils';

/**
 * "Continue with Google", its error, and the consent line under it.
 * @param {boolean} loading
 * @param {(idToken: string) => Promise<string|null>} onToken  resolves with an error message, or null on success
 */
export default function GoogleSection({ loading, onToken }) {
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  const styles = useAuthStyles();
  const [googleError, setGoogleError] = useState('');

  return (
    <>
      <GoogleButton
        onToken={async (idToken) => {
          setGoogleError('');
          const message = await onToken(idToken);
          if (message) setGoogleError(message);
        }}
        onError={(code) => setGoogleError(getErrorMessage(code, undefined, t))}
        disabled={loading}
      />
      {googleError ? (
        <View style={[styles.loginErrorBox, { marginTop: 12 }]}>
          <Ionicons name="alert-circle" size={16} color={colors.error} style={{ marginRight: 6 }} />
          <Text style={styles.loginErrorText}>{googleError}</Text>
        </View>
      ) : null}
      <Text style={styles.googleConsent}>
        {t('auth.googleConsentPrefix')}
        <Text style={styles.consentLink} onPress={() => openLegalPage('terms', i18n.language)}>{t('auth.googleConsentTerms')}</Text>
        {t('auth.googleConsentMiddle')}
        <Text style={styles.consentLink} onPress={() => openLegalPage('privacy', i18n.language)}>{t('auth.googleConsentPrivacy')}</Text>
        {t('auth.googleConsentSuffix')}
      </Text>
    </>
  );
}
