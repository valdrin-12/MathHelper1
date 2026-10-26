import { Linking } from 'react-native';

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Terms and Privacy Policy live on the website, in the language of the app
export const openLegalPage = (page, language) => {
  const SUPPORTED = ['al', 'en', 'de'];
  const lang = SUPPORTED.includes(language) ? language : 'al';
  Linking.openURL(`https://mathhelper.online/${page}?lang=${lang}`);
};
