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

/**
 * Combined access over ALL of a user's mirrored Paddle subscriptions, so cancelling one of
 * two subscriptions does not revoke the other's premium.
 * rows: [{ status, current_period_ends_at }]
 * Returns { tier, expiresAt } with the same null = "leave unchanged" convention as accessForSubscription.
 */
function accessForSubscriptions(rows, now = new Date()) {
  let premium = false;
  let latestEnd = null;
  let hasOpenPeriod = false;
  let pastDue = false;

  for (const row of rows || []) {
    const { tier, expiresAt } = accessForSubscription(row.status, row.current_period_ends_at, now);
    if (tier === 'premium') {
      premium = true;
      if (!expiresAt) {
        hasOpenPeriod = true;
      } else if (!latestEnd || new Date(expiresAt) > latestEnd) {
        latestEnd = new Date(expiresAt);
      }
    } else if (row.status === 'past_due') {
      pastDue = true;
    }
  }

  if (premium) {
    // An active subscription without a known period end: grant premium, keep the current expiry
    if (hasOpenPeriod && !latestEnd) return { tier: 'premium', expiresAt: null };
    return { tier: 'premium', expiresAt: latestEnd.toISOString() };
  }
  if (pastDue) return { tier: null, expiresAt: null };
  if ((rows || []).length === 0) return { tier: null, expiresAt: null };
  return { tier: 'free', expiresAt: now.toISOString() };
}

module.exports = { accessForSubscription, accessForSubscriptions, grantsAccess };
