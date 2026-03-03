import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SHADOWS } from '../theme/constants';
import { useUser } from '../context/UserContext';
import * as purchaseService from '../services/purchaseService';
import api from '../services/apiClient';

export default function PremiumModal({ visible, onClose }) {
  const { t } = useTranslation();
  const { refresh } = useUser();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [restoring, setRestoring] = useState(false);

  const isWeb = Platform.OS === 'web';

  useEffect(() => {
    if (visible && !isWeb) {
      initStore();
    }
    return () => {
      if (!isWeb) purchaseService.removePurchaseListeners();
    };
  }, [visible]);

  const initStore = async () => {
    const connected = await purchaseService.initIAP();
    if (connected) {
      const prod = await purchaseService.fetchPremiumProduct();
      setProduct(prod);

      purchaseService.setupPurchaseListeners(
        handlePurchaseSuccess,
        handlePurchaseError
      );
    }
  };

  const handlePurchaseSuccess = async (purchase) => {
    try {
      setLoading(true);
      await purchaseService.validateAndUpgrade(purchase);
      await refresh();
      setLoading(false);
      onClose();
      setTimeout(() => {
        Alert.alert(t('premium.purchaseSuccess'), t('premium.purchaseSuccessDesc'));
      }, 300);
    } catch (error) {
      setLoading(false);
      Alert.alert(t('common.error'), t('premium.purchaseError'));
    }
  };

  const handlePurchaseError = (error) => {
    setLoading(false);
    console.error('Purchase error:', error);
    Alert.alert(t('common.error'), t('premium.purchaseError'));
  };

  const handleBuyPremium = async () => {
    if (isWeb) {
      // Web: redirect to Stripe Checkout
      try {
        setLoading(true);
        const response = await api.post('/api/purchases/create-checkout');
        if (response.data?.url) {
          window.location.href = response.data.url;
        } else {
          setLoading(false);
          Alert.alert(t('common.error'), response.data?.error || t('premium.purchaseError'));
        }
      } catch (error) {
        setLoading(false);
        Alert.alert(t('common.error'), t('premium.purchaseError'));
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
        Alert.alert(t('common.error'), t('premium.purchaseError'));
      }
    }
  };

  const handleRestore = async () => {
    try {
      setRestoring(true);
      const result = await purchaseService.restorePurchases();
      if (result.restored) {
        await refresh();
        onClose();
        setTimeout(() => {
          Alert.alert(t('common.success'), t('premium.restoreSuccess'));
        }, 300);
      } else {
        Alert.alert(t('common.attention'), t('premium.restoreNone'));
      }
    } catch (error) {
      Alert.alert(t('common.error'), t('premium.purchaseError'));
    } finally {
      setRestoring(false);
    }
  };

  const price = product?.localizedPrice || '€1.99';

  const freeBenefits = [
    { icon: 'camera-outline', text: t('premium.freeAnalyses') },
    { icon: 'book-outline', text: t('premium.freeCourses') },
    { icon: 'help-circle-outline', text: t('premium.freeQuizzes') },
  ];

  const premiumBenefits = [
    { icon: 'sparkles', text: t('premium.premiumAnalyses') },
    { icon: 'book', text: t('premium.premiumCourses') },
    { icon: 'help-circle', text: t('premium.premiumQuizzes') },
    { icon: 'star', text: t('premium.premiumPriority') },
  ];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <LinearGradient
            colors={['#F59E0B', '#D97706', '#B45309']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={22} color="rgba(255,255,255,0.9)" />
            </TouchableOpacity>

            <View style={styles.headerContent}>
              <View style={styles.crownBox}>
                <Ionicons name="star" size={40} color="#FDE68A" />
              </View>
              <Text style={styles.headerTitle}>{t('premium.title')}</Text>
              <Text style={styles.headerSubtitle}>{t('premium.subtitle')}</Text>
            </View>
          </LinearGradient>

          {/* Comparison Cards */}
          <View style={styles.cardsRow}>
            {/* Free Plan */}
            <View style={styles.planCard}>
              <View style={styles.planHeader}>
                <Ionicons name="person" size={18} color={COLORS.textSubtle} />
                <Text style={styles.planName}>{t('premium.freePlan')}</Text>
              </View>
              <View style={styles.planBenefits}>
                {freeBenefits.map((b, i) => (
                  <View key={i} style={styles.benefitRow}>
                    <Ionicons name={b.icon} size={16} color={COLORS.textSubtle} />
                    <Text style={styles.benefitText}>{b.text}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Premium Plan */}
            <View style={[styles.planCard, styles.premiumPlanCard]}>
              <LinearGradient
                colors={['#FFFBEB', '#FEF3C7']}
                style={styles.premiumPlanBg}
              >
                <View style={styles.planHeader}>
                  <Ionicons name="star" size={18} color="#D97706" />
                  <Text style={[styles.planName, styles.premiumPlanName]}>{t('premium.premiumPlan')}</Text>
                </View>
                <View style={styles.planBenefits}>
                  {premiumBenefits.map((b, i) => (
                    <View key={i} style={styles.benefitRow}>
                      <Ionicons name={b.icon} size={16} color="#D97706" />
                      <Text style={[styles.benefitText, styles.premiumBenefitText]}>{b.text}</Text>
                    </View>
                  ))}
                </View>
              </LinearGradient>
            </View>
          </View>

          {/* Price */}
          <View style={styles.priceSection}>
            <Text style={styles.priceLabel}>{t('premium.oneTimePurchase')}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.priceNote}>{t('premium.priceNote')}</Text>
          </View>

          {/* Buy Button */}
          <TouchableOpacity
            style={styles.buyButton}
            onPress={handleBuyPremium}
            disabled={loading}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={loading ? ['#D4D4D4', '#D4D4D4'] : ['#F59E0B', '#D97706']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buyGradient}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="star" size={20} color="#FFFFFF" />
                  <Text style={styles.buyText}>{t('premium.purchaseButton')}</Text>
                </>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Restore - mobile only */}
          {!isWeb && (
            <TouchableOpacity
              style={styles.restoreButton}
              onPress={handleRestore}
              disabled={restoring}
            >
              {restoring ? (
                <ActivityIndicator size="small" color={COLORS.textSubtle} />
              ) : (
                <Text style={styles.restoreText}>{t('premium.restorePurchases')}</Text>
              )}
            </TouchableOpacity>
          )}

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
  },

  // Header
  header: {
    paddingTop: Platform.OS === 'ios' ? 10 : 40,
    paddingBottom: 30,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 14 : 44,
    right: 18,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
  crownBox: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 40,
  },

  // Plan Comparison
  cardsRow: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    gap: 12,
    marginTop: -16,
  },
  planCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 16,
    ...SHADOWS.medium,
  },
  premiumPlanCard: {
    padding: 0,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FDE68A',
  },
  premiumPlanBg: {
    padding: 16,
    borderRadius: 16,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 14,
  },
  planName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textSubtle,
  },
  premiumPlanName: {
    color: '#92400E',
  },
  planBenefits: {
    gap: 10,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  benefitText: {
    fontSize: 12,
    color: COLORS.textSubtle,
    fontWeight: '500',
    flex: 1,
  },
  premiumBenefitText: {
    color: '#78350F',
    fontWeight: '600',
  },

  // Price
  priceSection: {
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 13,
    color: COLORS.textSubtle,
    fontWeight: '600',
    marginBottom: 6,
  },
  price: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: -1,
  },
  priceNote: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 4,
  },

  // Buy Button
  buyButton: {
    marginHorizontal: 18,
    borderRadius: 16,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  buyGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 10,
    borderRadius: 16,
  },
  buyText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // Restore
  restoreButton: {
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 8,
  },
  restoreText: {
    fontSize: 14,
    color: COLORS.textSubtle,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
