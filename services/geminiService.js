// Service for Google Gemini AI integration
import { GoogleGenerativeAI } from '@google/generative-ai';
import GEMINI_CONFIG, {
  validateConfig,
  GENERATION_CONFIG,
  SAFETY_SETTINGS,
} from '../config/gemini.config';
import i18n from '../locales/i18n';

const LANGUAGE_NAMES = {
  sq: 'Albanian (Shqip)',
  en: 'English',
  de: 'German (Deutsch)',
};

const getLanguageName = () => LANGUAGE_NAMES[i18n.language] || 'Albanian (Shqip)';

// Language-aware prompt for image analysis - uses English markers for reliable parsing
const getMathAnalysisPrompt = () => {
  const lang = getLanguageName();
  return `You are an expert math teacher who helps students solve math problems.

TASK: Analyze the given image containing a math problem and provide a complete solution in ${lang}.

RESPONSE FORMAT (VERY IMPORTANT - use these EXACT English markers):
1. ANSWER: Give the final answer clearly and concisely
2. STEPS: Show each solution step in detail (use numbers: Step 1, Step 2, etc.)
3. EXPLANATION: Give a complete explanation and reasoning why this is the correct solution

RULES:
- Respond in ${lang} (the actual content must be in ${lang}, but keep the markers ANSWER:, STEPS:, EXPLANATION: in English)
- Use correct mathematical symbols (×, ÷, =, ≠, ≤, ≥, π, √, ∫, Σ, etc.)
- Explain concepts in a simple and understandable way
- If the image does not contain a clear math problem, say so in ${lang}
- If the image is too unclear, say so in ${lang}

EXAMPLE FORMAT:

ANSWER: x = 5

STEPS:
Step 1: Start with equation 2x + 3 = 13
Step 2: Subtract 3 from both sides: 2x = 10
Step 3: Divide both sides by 2: x = 5

EXPLANATION: To solve a linear equation, we isolate variable x by performing the same operations on both sides of the equation.

Now, analyze the image and provide the solution:`;
};

// Language-aware prompt for text analysis
const getTextAnalysisPrompt = (problemText) => {
  const lang = getLanguageName();
  return `You are an expert math teacher who helps students solve math problems.

TASK: Analyze and solve the following math problem. Respond in ${lang}.

PROBLEM:
${problemText}

RESPONSE FORMAT (VERY IMPORTANT - use these EXACT English markers):
1. ANSWER: Give the final answer clearly and concisely
2. STEPS: Show each solution step in detail (use numbers: Step 1, Step 2, etc.)
3. EXPLANATION: Give a complete explanation and reasoning why this is the correct solution

RULES:
- Respond in ${lang} (the actual content must be in ${lang}, but keep the markers ANSWER:, STEPS:, EXPLANATION: in English)
- Use correct mathematical symbols (×, ÷, =, ≠, ≤, ≥, π, √, ∫, Σ, etc.)
- Explain concepts in a simple and understandable way
- If the text does not contain a clear math problem, say so in ${lang}

EXAMPLE FORMAT:

ANSWER: x = 5

STEPS:
Step 1: Start with equation 2x + 3 = 13
Step 2: Subtract 3 from both sides: 2x = 10
Step 3: Divide both sides by 2: x = 5

EXPLANATION: To solve a linear equation, we isolate variable x by performing the same operations on both sides of the equation.

Now, solve the problem:`;
};

let genAI = null;
let model = null;

/**
 * Initialize Gemini AI
 */
const initializeGemini = () => {
  try {
    validateConfig();

    if (!genAI) {
      genAI = new GoogleGenerativeAI(GEMINI_CONFIG.apiKey);
      model = genAI.getGenerativeModel({
        model: GEMINI_CONFIG.model,
        generationConfig: GENERATION_CONFIG,
        safetySettings: SAFETY_SETTINGS,
      });
    }

    return model;
  } catch (error) {
    console.error('Gemini initialization error:', error);
    throw new Error(i18n.t('gemini.initError'));
  }
};

/**
 * Analyze math problem from image
 * @param {string} imageBase64 - Image in base64 format
 * @param {string} mimeType - MIME type of the image
 * @returns {Promise<{answer: string, steps: string[], explanation: string}>}
 */
export const analyzeMathProblem = async (imageBase64, mimeType) => {
  try {
    const activeModel = model || initializeGemini();

    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType: mimeType,
      },
    };

    const result = await activeModel.generateContent([
      getMathAnalysisPrompt(),
      imagePart,
    ]);

    const response = await result.response;
    const text = response.text();

    return parseGeminiResponse(text);
  } catch (error) {
    console.error('Analysis error:', error);

    if (error.message?.includes('API key')) {
      throw new Error(i18n.t('gemini.apiKeyInvalid'));
    }

    if (error.message?.includes('quota') || error.message?.includes('limit')) {
      throw new Error(i18n.t('gemini.quotaExceeded'));
    }

    if (error.message?.includes('network') || error.message?.includes('fetch')) {
      throw new Error(i18n.t('gemini.noConnection'));
    }

    throw new Error(i18n.t('gemini.analysisError'));
  }
};

/**
 * Analyze math problem from text
 * @param {string} problemText - The math problem text
 * @returns {Promise<{answer: string, steps: string[], explanation: string}>}
 */
export const analyzeMathProblemFromText = async (problemText) => {
  try {
    const activeModel = model || initializeGemini();

    const result = await activeModel.generateContent(getTextAnalysisPrompt(problemText));
    const response = await result.response;
    const text = response.text();

    return parseGeminiResponse(text);
  } catch (error) {
    console.error('Text analysis error:', error);

    if (error.message?.includes('API key')) {
      throw new Error(i18n.t('gemini.apiKeyInvalid'));
    }

    if (error.message?.includes('quota') || error.message?.includes('limit')) {
      throw new Error(i18n.t('gemini.quotaExceeded'));
    }

    if (error.message?.includes('network') || error.message?.includes('fetch')) {
      throw new Error(i18n.t('gemini.noConnection'));
    }

    throw new Error(i18n.t('gemini.analysisError'));
  }
};

/**
 * Parse Gemini response into structured format
 * Uses English markers (ANSWER:, STEPS:, EXPLANATION:) for reliable parsing
 * @param {string} text - Response from Gemini
 * @returns {{answer: string, steps: string[], explanation: string}}
 */
const parseGeminiResponse = (text) => {
  try {
    let answer = '';
    let steps = [];
    let explanation = '';

    // Extract answer (English markers)
    const answerMatch = text.match(/ANSWER:\s*(.+?)(?=\n\nSTEPS:|$)/s);
    if (answerMatch) {
      answer = answerMatch[1].trim();
    }

    // Extract steps (English markers)
    const stepsMatch = text.match(/STEPS:\s*(.+?)(?=\n\nEXPLANATION:|$)/s);
    if (stepsMatch) {
      const stepsText = stepsMatch[1].trim();
      steps = stepsText
        .split(/Step \d+:/)
        .filter(step => step.trim())
        .map(step => step.trim());
    }

    // Extract explanation (English markers)
    const explanationMatch = text.match(/EXPLANATION:\s*(.+)/s);
    if (explanationMatch) {
      explanation = explanationMatch[1].trim();
    }

    // Fallback: try Albanian markers for backwards compatibility
    if (!answer && !steps.length && !explanation) {
      const answerMatchSq = text.match(/PËRGJIGJA:\s*(.+?)(?=\n\nHAPAT:|$)/s);
      if (answerMatchSq) answer = answerMatchSq[1].trim();

      const stepsMatchSq = text.match(/HAPAT:\s*(.+?)(?=\n\nSHPJEGIMI:|$)/s);
      if (stepsMatchSq) {
        const stepsText = stepsMatchSq[1].trim();
        steps = stepsText
          .split(/Hapi \d+:/)
          .filter(step => step.trim())
          .map(step => step.trim());
      }

      const explanationMatchSq = text.match(/SHPJEGIMI:\s*(.+)/s);
      if (explanationMatchSq) explanation = explanationMatchSq[1].trim();
    }

    // Final fallback if all parsing fails
    if (!answer && !steps.length && !explanation) {
      return {
        answer: i18n.t('gemini.fallbackAnswer'),
        steps: [text],
        explanation: i18n.t('gemini.fallbackExplanation'),
      };
    }

    return { answer, steps, explanation };
  } catch (error) {
    console.error('Response parsing error:', error);
    return {
      answer: i18n.t('gemini.fallbackShort'),
      steps: [text],
      explanation: '',
    };
  }
};

export default {
  analyzeMathProblem,
  analyzeMathProblemFromText,
  initializeGemini,
};
