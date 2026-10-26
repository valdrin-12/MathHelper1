import React, { useState, useEffect, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';
import { Button, SegmentedControl, showAlert } from '../../shared/ui';
import { useUser } from '../auth/UserContext';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import * as purchaseService from './purchaseService';
import * as paddleService from './paddleService';
import { PREMIUM_PLAN, BILLING_INTERVALS } from './plans';

export default function PremiumModal({ visible, onClose }) {
  const { t } = useTranslation();
  const { user, refreshUser } = useUser();
  const { language } = useLanguage();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [restoring, setRestoring] = useState(false);
  // Web (Paddle)
  const [billingInterval, setBillingInterval] = useState('month');
  const [webPrices, setWebPrices] = useState(null);
  const [priceError, setPriceError] = useState(false);

  const isWeb = Platform.OS === 'web';

  useEffect(() => {
    if (visible && isWeb) {
      loadWebPrices();
    }
    if (visible && !isWeb) {
      initStore();
    }
    return () => {
      if (!isWeb) purchaseService.removePurchaseListeners();
    };
  }, [visible]);

  const loadWebPrices = async () => {
    setPriceError(false);
    try {
      const prices = await paddleService.fetchPrices(
        BILLING_INTERVALS.map((i) => PREMIUM_PLAN.priceId[i])
      );
      setWebPrices(prices);
    } catch (error) {
      console.error('Paddle price preview error:', error);
      setPriceError(true);
    }
  };

  const initStore = async () => {
    const connected = await purchaseService.initIAP();
    if (connected) {
      const prod = await purchaseService.fetchPremiumProduct();
      setProduct(prod);

      purchaseService.setupPurchaseListeners(
        handlePurchaseSuccess,
        handlePurchaseError,
        handlePurchaseCancel,
      );
    }
  };

  const handlePurchaseSuccess = async (purchase) => {
    try {
      setLoading(true);
      await purchaseService.validateAndUpgrade(purchase);
      // Silent refresh: don't flash the app-wide loader
      await refreshUser({ silent: true });
      setLoading(false);
      onClose();
      setTimeout(() => {
        showAlert(t('premium.purchaseSuccess'), t('premium.purchaseSuccessDesc'));
      }, 300);
    } catch (error) {
      setLoading(false);
      showAlert(t('common.error'), t('premium.purchaseError'));
    }
  };

  const handlePurchaseError = (error) => {
    setLoading(false);
    console.error('Purchase error:', error?.code || error?.message);
    showAlert(t('common.error'), t('premium.purchaseError'));
  };

  // User dismissed the store sheet: just clear the spinner
  const handlePurchaseCancel = () => {
    setLoading(false);
  };

  const handleBuyPremium = async () => {
    if (isWeb) {
      // Web: Paddle overlay checkout. The webhook matches the payment to the user via user_id.
      if (!user?.id) {
        showAlert(t('common.attention'), t('premium.signInRequired'));
        return;
      }
      try {
        setLoading(true);
        await paddleService.openCheckout({
          priceId: PREMIUM_PLAN.priceId[billingInterval],
          email: user.email,
          userId: user.id,
          language,
        });
        // Checkout opened: close our modal so it doesn't sit on top of Paddle's overlay
        onClose();
      } catch (error) {
        // Keep the modal open so the user still has context (and can retry) after the alert
        console.error('Paddle checkout error:', error?.message);
        showAlert(t('common.error'), t('premium.purchaseError'));
      } finally {
        setLoading(false);
      }
      return;
    }

    // Mobile: native IAP
    try {
      setLoading(true);
      await purchaseService.purchasePremium();
      // Result comes through the listener
    } catch (error) {
      setLoading(false);
      if (!error.cancelled) {
        showAlert(t('common.error'), t('premium.purchaseError'));
      }
    }
  };

  const handleRestore = async () => {
    try {
      setRestoring(true);
      const result = await purchaseService.restorePurchases();
      if (result.restored) {
        await refreshUser({ silent: true });
        onClose();
        setTimeout(() => {
          showAlert(t('common.success'), t('premium.restoreSuccess'));
        }, 300);
      } else {
        showAlert(t('common.attention'), t('premium.restoreNone'));
      }
    } catch (error) {
      showAlert(t('common.error'), t('premium.purchaseError'));
    } finally {
      setRestoring(false);
    }
  };

  const selectedWebPrice = webPrices?.[PREMIUM_PLAN.priceId[billingInterval]];

  const freeBenefits = [
    { icon: 'camera-outline', text: t('premium.freeAnalyses') },
    { icon: 'book-outline', text: t('premium.freeCourses') },
    { icon: 'help-circle-outline', text: t('premium.freeQuizzes') },
  ];

  const premiumIcons = ['sparkles', 'book', 'help-circle', 'star'];
  const premiumBenefits = PREMIUM_PLAN.featureKeys.map((key, i) => ({
    icon: premiumIcons[i] || 'checkmark',
    text: t(key),
  }));

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Sheet nav bar: close only */}
        <View style={styles.navBar}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn} accessibilityRole="button" accessibilityLabel={t('a11y.close')}>
            <Ionicons name="close" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {/* Hero — the single subtle gradient, reserved for the Premium highlight */}
          <LinearGradient
            colors={[colors.warningLight, colors.surface]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.header}
          >
            <View style={styles.crownBox}>
              <Ionicons name="star" size={34} color="#FFFFFF" />
            </View>
            <Text style={styles.headerTitle}>{t('premium.title')}</Text>
            <Text style={styles.headerSubtitle}>{t('premium.subtitle')}</Text>
          </LinearGradient>

          {/* Comparison Cards */}
          <View style={styles.cardsRow}>
            {/* Free Plan */}
            <View style={styles.planCard}>
              <View style={styles.planHeader}>
                <Ionicons name="person" size={18} color={colors.textSubtle} />
                <Text style={styles.planName}>{t('premium.freePlan')}</Text>
              </View>
              <View style={styles.planBenefits}>
                {freeBenefits.map((b, i) => (
                  <View key={i} style={styles.benefitRow}>
                    <Ionicons name={b.icon} size={16} color={colors.textSubtle} />
                    <Text style={styles.benefitText}>{b.text}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Premium Plan */}
            <View style={[styles.planCard, styles.premiumPlanCard]}>
              <View style={styles.planHeader}>
                <Ionicons name="star" size={18} color={colors.secondary} />
                <Text style={[styles.planName, styles.premiumPlanName]}>{t('premium.premiumPlan')}</Text>
              </View>
              <View style={styles.planBenefits}>
                {premiumBenefits.map((b, i) => (
                  <View key={i} style={styles.benefitRow}>
                    <Ionicons name={b.icon} size={16} color={colors.secondary} />
                    <Text style={[styles.benefitText, styles.premiumBenefitText]}>{b.text}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Price */}
          {isWeb ? (
            <View style={styles.priceSection}>
              <SegmentedControl
                segments={BILLING_INTERVALS.map((i) => ({
                  value: i,
                  label: t(i === 'month' ? 'premium.monthly' : 'premium.yearly'),
                }))}
                value={billingInterval}
                onChange={setBillingInterval}
                style={styles.intervalControl}
              />

              {selectedWebPrice ? (
                <>
                  {selectedWebPrice.trialDays ? (
                    <Text style={styles.priceLabel}>
                      {t('premium.trialThen', { days: selectedWebPrice.trialDays })}
                    </Text>
                  ) : null}
                  <Text style={styles.price}>
                    {selectedWebPrice.total}
                    <Text style={styles.pricePeriod}>
                      {t(billingInterval === 'month' ? 'premium.perMonth' : 'premium.perYear')}
                    </Text>
                  </Text>
                  <Text style={styles.priceNote}>{t('premium.cancelAnytime')}</Text>
                </>
              ) : priceError ? (
                <TouchableOpacity onPress={loadWebPrices} style={styles.retryBtn}>
                  <Text style={styles.priceNote}>{t('premium.priceLoadError')}</Text>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator color={colors.textSubtle} />
              )}
            </View>
          ) : (
            product?.price ? (
              <View style={styles.priceSection}>
                <Text style={styles.price}>{product.price}</Text>
              </View>
            ) : (
              <View style={{ height: 28 }} />
            )
          )}

          {/* Buy Button */}
          <Button
            title={t('premium.purchaseButton')}
            icon="star"
            tone="warning"
            onPress={handleBuyPremium}
            loading={loading}
            disabled={isWeb && !selectedWebPrice}
            style={styles.buyButton}
          />

          {/* Restore - mobile only */}
          {!isWeb && (
            <Button
              title={t('premium.restorePurchases')}
              variant="plain"
              onPress={handleRestore}
              loading={restoring}
              style={styles.restoreButton}
            />
          )}

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },

  // Sheet nav bar
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: SPACING.sm,
    paddingTop: Platform.OS === 'android' ? SPACING.xxl : 0,
  },
  closeBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Hero (Premium highlight)
  header: {
    marginHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  crownBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  headerTitle: {
    ...TYPOGRAPHY.h1,
    color: colors.text,
    textAlign: 'center',
    marginBottom: SPACING.xs + 2,
  },
  headerSubtitle: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },

  // Plan Comparison
  cardsRow: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
    marginTop: SPACING.lg,
  },
  planCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
  },
  premiumPlanCard: {
    borderWidth: 1.5,
    borderColor: colors.secondary,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs + 2,
    marginBottom: SPACING.md,
  },
  planName: {
    ...TYPOGRAPHY.subheadBold,
    color: colors.textSubtle,
  },
  premiumPlanName: {
    color: colors.secondary,
  },
  planBenefits: {
    gap: SPACING.sm + 2,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  benefitText: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    flex: 1,
  },
  premiumBenefitText: {
    color: colors.text,
    fontWeight: '500',
  },

  // Price
  priceSection: {
    alignItems: 'center',
    marginTop: SPACING.xxl,
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  intervalControl: {
    alignSelf: 'stretch',
    marginBottom: SPACING.lg,
  },
  priceLabel: {
    ...TYPOGRAPHY.footnote,
    color: colors.textSubtle,
    fontWeight: '600',
    marginBottom: SPACING.xs + 2,
  },
  price: {
    ...TYPOGRAPHY.largeTitle,
    color: colors.text,
  },
  pricePeriod: {
    ...TYPOGRAPHY.callout,
    fontWeight: '600',
    color: colors.textSubtle,
    letterSpacing: 0,
  },
  priceNote: {
    ...TYPOGRAPHY.footnote,
    color: colors.textMuted,
    marginTop: SPACING.xs,
    textAlign: 'center',
  },
  retryBtn: {
    minHeight: 44,
    justifyContent: 'center',
  },

  // Actions
  buyButton: {
    marginHorizontal: SPACING.lg,
  },
  restoreButton: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
  },
});
