import api from './apiClient';
import i18n from '../locales/i18n';

const LIMIT_CODES = ['FREE_LIMIT_REACHED', 'DAILY_LIMIT_REACHED'];

/**
 * Wrap an API error into an Error whose `message` is user-facing and whose `code`/`status` stay
 * inspectable. Limit errors keep their historical message ('FREE_LIMIT_REACHED' /
 * 'DAILY_LIMIT_REACHED') so existing UI checks on `error.message` keep working.
 */
function toServiceError(error, fallbackKey, { any429IsLimit = false } = {}) {
  const serverCode = error?.data?.error || error?.data?.code;
  if (error?.status === 429 && (LIMIT_CODES.includes(serverCode) || any429IsLimit)) {
    const code = LIMIT_CODES.includes(serverCode) ? serverCode : 'DAILY_LIMIT_REACHED';
    const err = new Error(code);
    err.code = code;
    err.status = 429;
    return err;
  }
  let message;
  if (error?.isNetworkError) {
    message = i18n.t('gemini.noConnection');
  } else {
    message = error?.message || i18n.t(fallbackKey);
  }
  const err = new Error(message);
  err.code = error?.code || error?.data?.code || null;
  err.status = error?.status;
  err.data = error?.data;
  return err;
}

const ticketHeaders = (ticket) => (ticket ? { headers: { 'X-Analysis-Ticket': ticket } } : undefined);

/**
 * @param {string} imageBase64
 * @param {string} mimeType
 * @param {string} [ticket] - from recordAnalysis(); sent as X-Analysis-Ticket
 */
export const analyzeMathProblem = async (imageBase64, mimeType, ticket) => {
  try {
    const data = await api.post(
      '/api/analyze/image',
      { imageBase64, mimeType, language: i18n.language },
      ticketHeaders(ticket),
    );
    return { answer: data.answer, steps: data.steps, explanation: data.explanation };
  } catch (error) {
    throw toServiceError(error, 'gemini.analysisError');
  }
};

/**
 * @param {string} problemText
 * @param {string} [ticket] - from recordAnalysis(); sent as X-Analysis-Ticket
 */
export const analyzeMathProblemFromText = async (problemText, ticket) => {
  try {
    const data = await api.post(
      '/api/analyze/text',
      { problemText, language: i18n.language },
      ticketHeaders(ticket),
    );
    return { answer: data.answer, steps: data.steps, explanation: data.explanation };
  } catch (error) {
    throw toServiceError(error, 'gemini.analysisError');
  }
};

/**
 * @param {string} problemText
 * @param {string} [ticket] - from recordAnalysis(); sent as X-Analysis-Ticket
 */
export const analyzeWithWolfram = async (problemText, ticket) => {
  try {
    const data = await api.post('/api/analyze/wolfram', { problemText }, ticketHeaders(ticket));
    return { answer: data.answer, steps: data.steps, explanation: data.explanation, source: 'wolfram' };
  } catch (error) {
    throw toServiceError(error, 'gemini.wolframError');
  }
};

/**
 * Count one analysis against the user's limit and obtain a ticket for the analyze calls.
 * @returns {Promise<string|null>} the analysis ticket (null if the server did not return one)
 * @throws Error with message/code FREE_LIMIT_REACHED | DAILY_LIMIT_REACHED, or a network/server error
 */
export const recordAnalysis = async () => {
  try {
    const data = await api.post('/api/analyze/record', {});
    return data?.ticket || null;
  } catch (error) {
    // Historical behaviour: any 429 from /record is a usage-limit error
    throw toServiceError(error, 'gemini.recordError', { any429IsLimit: true });
  }
};

/**
 * Give back the analysis counted by `recordAnalysis` when the whole solve chain failed.
 * Best-effort: never throws.
 * @param {string} ticket
 * @returns {Promise<boolean>} true if the server confirmed the refund
 */
export const refundAnalysis = async (ticket) => {
  if (!ticket) return false;
  try {
    const data = await api.post('/api/analyze/refund', { ticket });
    return data?.refunded === true || data?.success === true;
  } catch (error) {
    console.warn('[geminiService] Refund failed:', error?.code || error?.message);
    return false;
  }
};

export const extractTextFromImage = async (imageBase64, mimeType) => {
  try {
    const data = await api.post('/api/analyze/ocr', { imageBase64, mimeType });
    return data.text;
  } catch (error) {
    throw toServiceError(error, 'gemini.ocrError');
  }
};

export default {
  analyzeMathProblem,
  analyzeMathProblemFromText,
  analyzeWithWolfram,
  recordAnalysis,
  refundAnalysis,
  extractTextFromImage,
};
