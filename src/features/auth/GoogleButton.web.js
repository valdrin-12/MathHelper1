// "Continue with Google" on the web: Google's own button (Google Identity Services), which hands back an ID token.
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { GOOGLE_WEB_CLIENT_ID } from './googleConfig';

const GIS_SRC = 'https://accounts.google.com/gsi/client';
const LOCALE = { al: 'sq', en: 'en', de: 'de' };

let scriptPromise = null;
const loadGis = () => {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'));
  if (window.google?.accounts?.id) return Promise.resolve(window.google);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = GIS_SRC;
      s.async = true;
      s.defer = true;
      s.onload = () => resolve(window.google);
      s.onerror = () => { scriptPromise = null; reject(new Error('Google sign-in script failed to load')); };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
};

let initialized = false;
// Google's script keeps one callback, so the button that is on screen registers itself here
let activeHandler = null;

/**
 * @param {(idToken: string) => void|Promise<void>} onToken
 * @param {(code: string) => void} [onError]
 * @param {boolean} [disabled]
 */
export default function GoogleButton({ onToken, onError, disabled }) {
  const { i18n } = useTranslation();
  const { isDark } = useTheme();
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Always call the latest props from the one callback Google holds on to
  const latest = useRef({});
  latest.current = { onToken, onError };

  useEffect(() => {
    const handler = (credential) => {
      if (credential) latest.current.onToken(credential);
      else latest.current.onError?.('GOOGLE_AUTH_FAILED');
    };
    activeHandler = handler;
    return () => { if (activeHandler === handler) activeHandler = null; };
  }, []);

  useEffect(() => {
    if (width < 200) return undefined;
    let cancelled = false;
    loadGis().then((google) => {
      if (cancelled || !boxRef.current) return;
      if (!initialized) {
        google.accounts.id.initialize({
          client_id: GOOGLE_WEB_CLIENT_ID,
          callback: (response) => activeHandler && activeHandler(response.credential),
          auto_select: false,
          cancel_on_tap_outside: true,
        });
        initialized = true;
      }
      const el = boxRef.current;
      el.innerHTML = '';
      google.accounts.id.renderButton(el, {
        type: 'standard',
        theme: isDark ? 'filled_black' : 'outline',
        size: 'large',
        text: 'continue_with',
        shape: 'rectangular',
        logo_alignment: 'left',
        width,
        locale: LOCALE[i18n.language] || 'en',
      });
    }).catch(() => { if (!cancelled) latest.current.onError?.('GOOGLE_AUTH_FAILED'); });
    return () => { cancelled = true; };
  }, [width, isDark, i18n.language]);

  return (
    <View
      style={{ alignItems: 'center', minHeight: 44, opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
      onLayout={(e) => setWidth(Math.min(400, Math.floor(e.nativeEvent.layout.width)))}
    >
      <View ref={boxRef} />
    </View>
  );
}
