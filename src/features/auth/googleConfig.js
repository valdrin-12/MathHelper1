// OAuth client IDs of the MathHelper Google Cloud project. They are public identifiers, not secrets.
// Web   → Sign in with Google on mathhelper.online, and the audience the server checks tokens against
// iOS   → native sign-in on iOS (its reversed form is the URL scheme in app.json)
// Android → registered in Google Cloud with the package name and the SHA-1 of the signing key; the app
//           only needs the web ID there
export const GOOGLE_WEB_CLIENT_ID = '1093248250108-kmbb8k5qm4jovumlhcf10atb8qu5og9r.apps.googleusercontent.com';
export const GOOGLE_IOS_CLIENT_ID = '1093248250108-902qh26np2qkjprg89592tf76p4ch95d.apps.googleusercontent.com';
export const GOOGLE_ANDROID_CLIENT_ID = '1093248250108-u4egnr06n2etplhnmt0e1fvkenho9mei.apps.googleusercontent.com';
