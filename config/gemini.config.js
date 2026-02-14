// Konfigurimi i Google Gemini AI

const GEMINI_CONFIG = {
  apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
  model: process.env.EXPO_PUBLIC_GEMINI_MODEL || 'gemini-1.5-flash',
  maxImageSizeMB: parseInt(process.env.EXPO_PUBLIC_MAX_IMAGE_SIZE_MB || '4', 10),
};

// Validimi i konfigurimit
export const validateConfig = () => {
  if (!GEMINI_CONFIG.apiKey) {
    throw new Error(
      'API key-i i Gemini nuk u gjet. Ju lutemi kontrolloni skedarin .env'
    );
  }

  if (!GEMINI_CONFIG.apiKey.startsWith('AIzaSy')) {
    console.warn('⚠️ API key nuk duket si një çelës i vlefshëm i Google Gemini');
  }

  return true;
};

// Konfigurimi i generation parameters
export const GENERATION_CONFIG = {
  temperature: 0.4, // Më i ulët për më shumë saktësi në matematikë
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
};

// Safety settings për të lejuar përmbajtje edukative
export const SAFETY_SETTINGS = [
  {
    category: 'HARM_CATEGORY_HARASSMENT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_HATE_SPEECH',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
  {
    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  },
];

export default GEMINI_CONFIG;
