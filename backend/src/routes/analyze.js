const express = require('express');
const authMiddleware = require('../middleware/auth');
const rateLimitMiddleware = require('../middleware/rateLimit');
const analyzeController = require('../controllers/analyzeController');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// OCR-only endpoint (does NOT count against daily limit)
// Just extracts text, doesn't solve the problem
router.post('/ocr', analyzeController.extractTextFromImage);

// Analysis endpoints (count against daily limit)
router.use(rateLimitMiddleware);
router.post('/image', analyzeController.analyzeImage);
router.post('/text', analyzeController.analyzeText);

module.exports = router;
