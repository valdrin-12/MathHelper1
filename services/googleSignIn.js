// Native Google sign-in (iOS / Android). The web version is components/GoogleButton.web.js.
// getGoogleIdToken() → { idToken } | { cancelled: true } | { error: <code under errors.* in the locales> }
import { Platform } from 'react-native';
import {
  GoogleSignin,
  isSuccessResponse,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../config/google';

let configured = false;
const configure = () => {
  if (configured) return;
  // The web client ID makes Google issue an ID token whose audience the server accepts
  GoogleSignin.configure({ webClientId: GOOGLE_WEB_CLIENT_ID, iosClientId: GOOGLE_IOS_CLIENT_ID });
  configured = true;
};

export async function getGoogleIdToken() {
  try {
    configure();
    if (Platform.OS === 'android') await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const response = await GoogleSignin.signIn();
    if (!isSuccessResponse(response)) return { cancelled: true };
    const idToken = response.data?.idToken;
    // Forget the device-side Google session, so the next sign-in offers the account picker again
    GoogleSignin.signOut().catch(() => {});
    return idToken ? { idToken } : { error: 'GOOGLE_AUTH_FAILED' };
  } catch (error) {
    if (isErrorWithCode(error)) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED || error.code === statusCodes.IN_PROGRESS) return { cancelled: true };
      if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) return { error: 'GOOGLE_PLAY_SERVICES_UNAVAILABLE' };
    }
    return { error: 'GOOGLE_AUTH_FAILED' };
  }
}
