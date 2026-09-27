// Premium plan shown in PremiumModal (web checkout via Paddle).
// Price IDs come from env so sandbox and live builds can point at different Paddle accounts.
export const PREMIUM_PLAN = {
  featureKeys: [
    'premium.premiumAnalyses',
    'premium.premiumCourses',
    'premium.premiumQuizzes',
    'premium.premiumPriority',
  ],
  priceId: {
    month: process.env.EXPO_PUBLIC_PADDLE_PRICE_MONTHLY,
    year: process.env.EXPO_PUBLIC_PADDLE_PRICE_YEARLY,
  },
};

export const BILLING_INTERVALS = ['month', 'year'];
