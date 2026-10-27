import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { verifyAnswer } from '../solver/verifyAnswer';
import * as imageService from '../solver/imageService';
import * as geminiService from '../solver/geminiService';
import * as mathCalculatorService from '../solver/mathCalculatorService';
import { useLanguage } from '../../shared/i18n/LanguageContext';
import { useStats } from '../progress/StatsContext';
import { useUser } from '../auth/UserContext';
import { showAlert, confirmAction, getErrorMessage, getErrorCodeOf } from '../../shared/ui';
import { getLimitCode, isConnectivityError } from './dashboardUtils';

/**
 * The two solve buttons and everything they lead to: the result, the usage-limit dialog, errors.
 * input: { inputMode: 'keyboard' | 'camera', mathProblemText, selectedImage, selectedImageSize }
 */
export default function useSolveFlow({ inputMode, mathProblemText, selectedImage, selectedImageSize }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [lastBase64, setLastBase64] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [limitType, setLimitType] = useState('free'); // 'free' or 'daily'
  const { recordProblemSolved } = useStats();
  const { user } = useUser();
  // Guests get the offline solver; anything that needs the server asks them to create an account
  const [accountPrompt, setAccountPrompt] = useState(null); // 'ai' | 'aiFallback' | 'photo' | null
  const lastCountedRef = useRef(null);

  // Validate the current input; returns false (and tells the user) when there is nothing to solve
  const validateInput = () => {
    if (inputMode === 'keyboard' && !mathProblemText.trim()) {
      showAlert(t('common.attention'), t('dashboard.enterProblem'));
      return false;
    }
    if (inputMode === 'camera' && !selectedImage) {
      showAlert(t('common.attention'), t('dashboard.selectPhoto'));
      return false;
    }
    return true;
  };

  const showResult = (result, solverType) => {
    setAnalysisResult({ ...result, solverType });
    setShowResultModal(true);
    // Every solved problem counts towards the daily goal, streak and achievements (saved or not).
    // Solving the same input again right away is not counted twice.
    const key = inputMode === 'camera' ? selectedImage : mathProblemText.trim();
    if (key && key !== lastCountedRef.current) {
      lastCountedRef.current = key;
      recordProblemSolved(); // never throws; the stats refresh in the background
    }
  };

  // AI / Wolfram answers are re-checked with mathjs when the problem text is known (typed or read from a photo)
  const showCheckedResult = (result, solverType, problemText) => {
    const verification = problemText
      ? verifyAnswer({ problem: problemText, answer: result?.answer, lang: language })
      : undefined;
    showResult(verification ? { ...result, verification } : result, solverType);
  };

  // Read + downscale the selected photo (never counted against the analysis limit)
  const readSelectedImage = async () => {
    const image = await imageService.convertImageToBase64(selectedImage, selectedImageSize || undefined);
    setLastBase64(image.base64);
    return image;
  };

  // Shared error handling for both solve flows
  const reportError = async (error, retry) => {
    const limitCode = getLimitCode(error);
    if (limitCode) {
      setLimitType(limitCode === 'FREE_LIMIT_REACHED' ? 'free' : 'daily');
      setShowLimitModal(true);
      return;
    }
    if (isConnectivityError(error)) {
      const shouldRetry = await confirmAction({
        title: t('common.noInternet'),
        message: getErrorCodeOf(error) === 'TIMEOUT' ? t('errors.TIMEOUT') : t('common.noInternetDesc'),
        confirmText: t('common.retry'),
        cancelText: t('common.ok'),
      });
      if (shouldRetry) retry();
      return;
    }
    showAlert(t('common.error'), getErrorMessage(error, error?.message || t('dashboard.analysisError'), t));
  };

  // "Calculate": local calculator first (free, not counted). Only if it can't solve the problem is
  // ONE analysis recorded; Wolfram and then AI run with that ticket, and the analysis is refunded
  // if the whole chain fails.
  const handleCalculate = async () => {
    setAnalysisResult(null); // reset so modal never shows stale data
    if (!validateInput()) return;
    if (!user && inputMode === 'camera') { setAccountPrompt('photo'); return; }
    setIsAnalyzing(true);
    let ticket = null;
    try {
      let problemText = mathProblemText;
      let image = null;

      if (inputMode === 'camera') {
        image = await readSelectedImage();
        // OCR-only text extraction (doesn't count against the daily limit)
        try {
          problemText = await geminiService.extractTextFromImage(image.base64, image.mimeType);
        } catch (ocrError) {
          if (isConnectivityError(ocrError) || getErrorCodeOf(ocrError) === 'OCR_RATE_LIMITED') throw ocrError;
          throw new Error(t('dashboard.ocrFailed'));
        }
      }

      // 1) Local calculator — free
      if (problemText && problemText.trim()) {
        let localResult = null;
        try {
          localResult = await mathCalculatorService.solveMathProblem(problemText, language);
        } catch (localError) {
          localResult = null;
        }
        if (localResult?.success) {
          showResult(localResult, 'local');
          return;
        }
      }

      // 2) Counted chain: Wolfram → AI, one ticket for the whole chain (needs an account)
      if (!user) { setAccountPrompt('aiFallback'); return; }
      ticket = await geminiService.recordAnalysis();
      let lastError = null;

      if (problemText && problemText.trim()) {
        try {
          const wolframResult = await geminiService.analyzeWithWolfram(problemText, ticket);
          showCheckedResult(wolframResult, 'wolfram', problemText);
          return;
        } catch (wolframError) {
          lastError = wolframError; // fall back to AI with the same ticket
        }
      }

      try {
        const aiResult = image
          ? await geminiService.analyzeMathProblem(image.base64, image.mimeType, ticket)
          : await geminiService.analyzeMathProblemFromText(problemText, ticket);
        showCheckedResult(aiResult, 'ai', problemText);
        return;
      } catch (aiError) {
        lastError = aiError;
      }

      // Everything failed: give the analysis back
      await geminiService.refundAnalysis(ticket);
      throw lastError;
    } catch (error) {
      reportError(error, handleCalculate); // not awaited: a retry must start after this run finishes
    } finally {
      setIsAnalyzing(false);
    }
  };

  // "Analyze with AI": always AI. One analysis is recorded up front and refunded on failure.
  const handleAnalyzeWithAI = async () => {
    setAnalysisResult(null); // reset so modal never shows stale data
    if (!validateInput()) return;
    if (!user) { setAccountPrompt('ai'); return; }
    setIsAnalyzing(true);
    try {
      // Read the photo before recording so image errors never consume an analysis
      const image = inputMode === 'camera' ? await readSelectedImage() : null;
      const ticket = await geminiService.recordAnalysis();
      let result;
      try {
        result = image
          ? await geminiService.analyzeMathProblem(image.base64, image.mimeType, ticket)
          : await geminiService.analyzeMathProblemFromText(mathProblemText, ticket);
      } catch (aiError) {
        await geminiService.refundAnalysis(ticket);
        throw aiError;
      }
      showCheckedResult(result, 'ai', image ? null : mathProblemText);
    } catch (error) {
      reportError(error, handleAnalyzeWithAI); // not awaited: a retry must start after this run finishes
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    isAnalyzing,
    analysisResult,
    lastBase64,
    forgetImage: () => setLastBase64(null), // a new or removed photo has not been read yet
    showResultModal,
    closeResult: () => setShowResultModal(false),
    showLimitModal,
    limitType,
    closeLimit: () => setShowLimitModal(false),
    handleCalculate,
    handleAnalyzeWithAI,
    accountPrompt,
    closeAccountPrompt: () => setAccountPrompt(null),
  };
}
