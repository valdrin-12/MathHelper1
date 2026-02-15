import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { loadSavedLanguage, saveLanguage, SUPPORTED_LANGUAGES } from '../locales/i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language || 'al');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadSavedLanguage().then((lang) => {
      setLanguageState(lang);
      setReady(true);
    });
  }, []);

  const setLanguage = async (lang) => {
    await saveLanguage(lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, ready, SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
