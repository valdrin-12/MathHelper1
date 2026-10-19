const express = require('express');
const rateLimit = require('express-rate-limit');
const authMiddleware = require('../middleware/auth');
const rateLimitMiddleware = require('../middleware/rateLimit');
const { requireTicketOrCredit } = require('../middleware/rateLimit');
const analyzeController = require('../controllers/analyzeController');

const router = express.Router();

// OCR is free, but still costs a Gemini call: cap it per user
const ocrLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 20,
  keyGenerator: (req) => req.userId,
  message: { success: false, error: 'Too many text extraction requests. Please try again later.', code: 'OCR_RATE_LIMITED' },
  standardHeaders: true,
  legacyHeaders: false,
});

// All routes require authentication
router.use(authMiddleware);

// OCR-only endpoint (never counts against the analysis limit)
router.post('/ocr', ocrLimiter, analyzeController.extractTextFromImage);

// /record: called ONCE per "Llogarit" click. Atomically consumes one credit and
// returns an analysis ticket (send it as X-Analysis-Ticket to the solver endpoints).
router.post('/record', rateLimitMiddleware, analyzeController.recordAnalysis);

// Give the credit back when the ticket never produced a result
router.post('/refund', analyzeController.refundAnalysis);

// Solver endpoints: use the ticket from /record, or (no ticket header, older apps) consume a credit per call
router.post('/wolfram', requireTicketOrCredit, analyzeController.analyzeWithWolfram);
router.post('/image', requireTicketOrCredit, analyzeController.analyzeImage);
router.post('/text', requireTicketOrCredit, analyzeController.analyzeText);

module.exports = router;
