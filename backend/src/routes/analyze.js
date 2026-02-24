const express = require('express');
const authMiddleware = require('../middleware/auth');
const rateLimitMiddleware = require('../middleware/rateLimit');
const analyzeController = require('../controllers/analyzeController');

const router = express.Router();

router.use(authMiddleware);
router.use(rateLimitMiddleware);

router.post('/image', analyzeController.analyzeImage);
router.post('/text', analyzeController.analyzeText);

module.exports = router;
