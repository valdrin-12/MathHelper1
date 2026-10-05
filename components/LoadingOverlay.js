import { useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';

export default function LoadingOverlay({ visible }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.textSecondary} style={styles.spinner} />
          <Text style={styles.title}>{t('loading.analyzingProblem')}</Text>
          <Text style={styles.subtitle}>{t('loading.mayTakeSeconds')}</Text>
        </View>
      </View>
    </Modal>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxxl,
  },
  container: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
    minWidth: 200,
    maxWidth: 280,
  },
  spinner: {
    marginBottom: SPACING.lg,
  },
  title: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  subtitle: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    textAlign: 'center',
  },
});
