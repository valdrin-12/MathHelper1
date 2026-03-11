const express = require('express');
const authMiddleware = require('../middleware/auth');
const rateLimitMiddleware = require('../middleware/rateLimit');
const analyzeController = require('../controllers/analyzeController');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// OCR-only endpoint (never counts against any limit)
router.post('/ocr', analyzeController.extractTextFromImage);

// All solve endpoints count against limits (free: 2 lifetime, premium: 10/day)
router.use(rateLimitMiddleware);
router.post('/record', analyzeController.recordAnalysis);    // local solve
router.post('/wolfram', analyzeController.analyzeWithWolfram);
router.post('/image', analyzeController.analyzeImage);
router.post('/text', analyzeController.analyzeText);

module.exports = router;
