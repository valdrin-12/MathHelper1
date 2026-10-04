/**
 * Decide what a Paddle subscription means for the user's access.
 * rateLimit.js stays the only place that enforces access (users.tier + users.premium_expires_at);
 * this helper only computes the values the webhook writes there.
 *
 * Returns { tier, expiresAt } where null means "leave the current value unchanged".
 */
function accessForSubscription(status, currentPeriodEndsAt, now = new Date()) {
  switch (status) {
    case 'active':
    case 'trialing':
      // A scheduled cancel/pause does not revoke access: the status stays active until it takes effect
      return { tier: 'premium', expiresAt: currentPeriodEndsAt || null };
    case 'past_due':
      // Paddle is retrying payment: keep whatever access is left, don't extend it
      return { tier: null, expiresAt: null };
    case 'paused':
    case 'canceled':
      return { tier: 'free', expiresAt: now.toISOString() };
    default:
      return { tier: null, expiresAt: null };
  }
}

/** Whether a mirrored subscription status currently grants Premium. */
function grantsAccess(status, currentPeriodEndsAt, now = new Date()) {
  if (status !== 'active' && status !== 'trialing') return false;
  return !currentPeriodEndsAt || new Date(currentPeriodEndsAt) > now;
}

module.exports = { accessForSubscription, grantsAccess };
