import api from './apiClient';
import i18n from '../locales/i18n';

function throwLimitError(error) {
  if (error.status === 429) {
    const errCode = error.data?.error;
    if (errCode === 'FREE_LIMIT_REACHED') {
      throw new Error('FREE_LIMIT_REACHED');
    }
    throw new Error('DAILY_LIMIT_REACHED');
  }
}

export const analyzeMathProblem = async (imageBase64, mimeType) => {
  try {
    const data = await api.post('/api/analyze/image', {
      imageBase64,
      mimeType,
      language: i18n.language,
    });
    return { answer: data.answer, steps: data.steps, explanation: data.explanation };
  } catch (error) {
    throwLimitError(error);
    throw new Error(error.message || i18n.t('gemini.analysisError'));
  }
};

export const analyzeMathProblemFromText = async (problemText) => {
  try {
    const data = await api.post('/api/analyze/text', {
      problemText,
      language: i18n.language,
    });
    return { answer: data.answer, steps: data.steps, explanation: data.explanation };
  } catch (error) {
    throwLimitError(error);
    throw new Error(error.message || i18n.t('gemini.analysisError'));
  }
};

export const analyzeWithWolfram = async (problemText) => {
  try {
    const data = await api.post('/api/analyze/wolfram', { problemText });
    return { answer: data.answer, steps: data.steps, explanation: data.explanation, source: 'wolfram' };
  } catch (error) {
    throw new Error(error.message || 'Wolfram could not solve this problem');
  }
};

/**
 * Record a local solve attempt against the user's limit.
 * Calls /api/analyze/record which goes through rate limit middleware.
 */
export const recordAnalysis = async () => {
  try {
    await api.post('/api/analyze/record', {});
  } catch (error) {
    throwLimitError(error);
    // If record fails for non-limit reason, ignore silently
  }
};

export const extractTextFromImage = async (imageBase64, mimeType) => {
  try {
    const data = await api.post('/api/analyze/ocr', { imageBase64, mimeType });
    return data.text;
  } catch (error) {
    throw new Error(error.message || i18n.t('gemini.ocrError'));
  }
};

export default {
  analyzeMathProblem,
  analyzeMathProblemFromText,
  analyzeWithWolfram,
  recordAnalysis,
  extractTextFromImage,
};
