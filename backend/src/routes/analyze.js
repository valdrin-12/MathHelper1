const express = require('express');
const authMiddleware = require('../middleware/auth');
const analyzeController = require('../controllers/analyzeController');

const router = express.Router();

router.use(authMiddleware);

router.post('/image', analyzeController.analyzeImage);
router.post('/text', analyzeController.analyzeText);

module.exports = router;
