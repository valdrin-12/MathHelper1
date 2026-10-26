/**
 * Returns true if the user has an active premium subscription.
 * Single source of truth — used in LearnScreen, QuizScreen, and anywhere
 * else that needs a premium gate.
 */
export const isPremiumActive = (user) =>
  user?.tier === 'premium' &&
  !!user?.premiumExpiresAt &&
  new Date(user.premiumExpiresAt) > new Date();
