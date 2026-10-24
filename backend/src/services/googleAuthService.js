// Verifies Google ID tokens (the "credential" from Sign in with Google) on the server.
const { OAuth2Client } = require('google-auth-library');

// OAuth client IDs of the MathHelper Google Cloud project. They are public identifiers, not secrets.
// The token's audience must be one of them; GOOGLE_CLIENT_IDS (comma separated) overrides the list.
const DEFAULT_CLIENT_IDS = [
  '1093248250108-kmbb8k5qm4jovumlhcf10atb8qu5og9r.apps.googleusercontent.com', // Web
  '1093248250108-902qh26np2qkjprg89592tf76p4ch95d.apps.googleusercontent.com', // iOS
  '1093248250108-u4egnr06n2etplhnmt0e1fvkenho9mei.apps.googleusercontent.com', // Android
];

function allowedClientIds() {
  const fromEnv = (process.env.GOOGLE_CLIENT_IDS || '').split(',').map((s) => s.trim()).filter(Boolean);
  return fromEnv.length ? fromEnv : DEFAULT_CLIENT_IDS;
}

const client = new OAuth2Client();

/**
 * @param {string} idToken
 * @returns {Promise<{ sub: string, email: string|null, emailVerified: boolean, name: string|null }>}
 * @throws when the signature, issuer, audience or expiry is not valid
 */
async function verifyGoogleIdToken(idToken) {
  const ticket = await client.verifyIdToken({ idToken, audience: allowedClientIds() });
  const payload = ticket.getPayload();
  if (!payload || !payload.sub) throw new Error('Google token has no subject');
  return {
    sub: String(payload.sub),
    email: payload.email ? String(payload.email) : null,
    emailVerified: payload.email_verified === true || payload.email_verified === 'true',
    name: payload.name ? String(payload.name) : null,
  };
}

module.exports = { verifyGoogleIdToken, allowedClientIds };
