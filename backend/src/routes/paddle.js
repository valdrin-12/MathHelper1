const express = require('express');
const authMiddleware = require('../middleware/auth');
const paddlePortalController = require('../controllers/paddlePortalController');

const router = express.Router();

// The webhook (POST /api/paddle/webhook) is mounted separately in app.js with express.raw()

router.post('/portal-session', authMiddleware, paddlePortalController.createPortalSession);

module.exports = router;
