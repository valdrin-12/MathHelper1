const express = require('express');
const authMiddleware = require('../middleware/auth');
const rateLimitMiddleware = require('../middleware/rateLimit');
const analyzeController = require('../controllers/analyzeController');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// OCR-only endpoint (does NOT count against daily limit)
router.post('/ocr', analyzeController.extractTextFromImage);

// Wolfram Alpha endpoint (does NOT count against Gemini daily limit)
router.post('/wolfram', analyzeController.analyzeWithWolfram);

// Gemini AI endpoints (count against daily limit)
router.use(rateLimitMiddleware);
router.post('/image', analyzeController.analyzeImage);
router.post('/text', analyzeController.analyzeText);

module.exports = router;
