const express = require('express');
const authMiddleware = require('../middleware/auth');
const purchaseController = require('../controllers/purchaseController');

const router = express.Router();

// Authenticated routes
router.use(authMiddleware);

// Mobile IAP
router.post('/verify', purchaseController.verifyPurchase);
router.post('/restore', purchaseController.restorePurchase);

// Stripe Web
router.post('/create-checkout', purchaseController.createCheckout);
router.get('/check-session', purchaseController.checkSession);

module.exports = router;
