const express = require('express');
const authMiddleware = require('../middleware/auth');
const purchaseController = require('../controllers/purchaseController');

const router = express.Router();

router.use(authMiddleware);

router.post('/verify', purchaseController.verifyPurchase);
router.post('/restore', purchaseController.restorePurchase);

module.exports = router;
