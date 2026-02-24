import api from './apiClient';
import i18n from '../locales/i18n';

/**
 * Analyze math problem from image via backend proxy
 * @param {string} imageBase64 - Image in base64 format
 * @param {string} mimeType - MIME type of the image
 * @returns {Promise<{answer: string, steps: string[], explanation: string}>}
 */
export const analyzeMathProblem = async (imageBase64, mimeType) => {
  try {
    const data = await api.post('/api/analyze/image', {
      imageBase64,
      mimeType,
      language: i18n.language,
    });
    return {
      answer: data.answer,
      steps: data.steps,
      explanation: data.explanation,
    };
  } catch (error) {
    console.error('Analysis error:', error);
    if (error.status === 429 || error.data?.error === 'DAILY_LIMIT_REACHED') {
      const err = new Error('DAILY_LIMIT_REACHED');
      err.tier = error.data?.tier;
      err.dailyLimit = error.data?.dailyLimit;
      throw err;
    }
    throw new Error(error.message || i18n.t('gemini.analysisError'));
  }
};

/**
 * Analyze math problem from text via backend proxy
 * @param {string} problemText - The math problem text
 * @returns {Promise<{answer: string, steps: string[], explanation: string}>}
 */
export const analyzeMathProblemFromText = async (problemText) => {
  try {
    const data = await api.post('/api/analyze/text', {
      problemText,
      language: i18n.language,
    });
    return {
      answer: data.answer,
      steps: data.steps,
      explanation: data.explanation,
    };
  } catch (error) {
    console.error('Text analysis error:', error);
    if (error.status === 429 || error.data?.error === 'DAILY_LIMIT_REACHED') {
      const err = new Error('DAILY_LIMIT_REACHED');
      err.tier = error.data?.tier;
      err.dailyLimit = error.data?.dailyLimit;
      throw err;
    }
    throw new Error(error.message || i18n.t('gemini.analysisError'));
  }
};

export default {
  analyzeMathProblem,
  analyzeMathProblemFromText,
};
