import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import al from './al/ui.json';
import en from './en/ui.json';
import de from './de/ui.json';

const LANGUAGE_KEY = '@math_helper_language';

const resources = {
  al: { translation: al },
  en: { translation: en },
  de: { translation: de },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'al',
  fallbackLng: 'al',
  interpolation: { escapeValue: false },
  compatibilityJSON: 'v4',
});

export const loadSavedLanguage = async () => {
  try {
    // On web: check URL ?lang= parameter first (set by landing page)
    if (typeof window !== 'undefined' && window.location?.search) {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang && resources[urlLang]) {
        await AsyncStorage.setItem(LANGUAGE_KEY, urlLang);
        await i18n.changeLanguage(urlLang);
        return urlLang;
      }
    }

    const saved = await AsyncStorage.getItem(LANGUAGE_KEY);
    if (saved && resources[saved]) {
      await i18n.changeLanguage(saved);
      return saved;
    }
    return 'al';
  } catch (e) {
    console.warn('Failed to load saved language:', e);
    return 'al';
  }
};

export const saveLanguage = async (lang) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
    await i18n.changeLanguage(lang);
  } catch (e) {
    console.warn('Failed to save language:', e);
  }
};

export const SUPPORTED_LANGUAGES = [
  { code: 'al', name: 'Shqip', flag: '\u{1F1E6}\u{1F1F1}', nativeName: 'Shqip' },
  { code: 'en', name: 'English', flag: '\u{1F1EC}\u{1F1E7}', nativeName: 'English' },
  { code: 'de', name: 'Deutsch', flag: '\u{1F1E9}\u{1F1EA}', nativeName: 'Deutsch' },
];

export const getLocale = (lang) => {
  const localeMap = { al: 'sq-AL', en: 'en-US', de: 'de-DE' };
  return localeMap[lang] || 'sq-AL';
};

export default i18n;
