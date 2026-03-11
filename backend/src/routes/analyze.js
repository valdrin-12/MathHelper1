const express = require('express');
const authMiddleware = require('../middleware/auth');
const rateLimitMiddleware = require('../middleware/rateLimit');
const analyzeController = require('../controllers/analyzeController');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// OCR-only endpoint (never counts against any limit)
router.post('/ocr', analyzeController.extractTextFromImage);

// /record: called ONCE per "Llogarit" click to pre-count the analysis
// Rate limit is checked and decremented here.
router.post('/record', rateLimitMiddleware, analyzeController.recordAnalysis);

// Wolfram and AI endpoints do NOT independently count.
// The counting was already done via /record before these are called.
router.post('/wolfram', analyzeController.analyzeWithWolfram);
router.post('/image', analyzeController.analyzeImage);
router.post('/text', analyzeController.analyzeText);

module.exports = router;
