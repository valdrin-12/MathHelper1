const express = require('express');
const { body } = require('express-validator');
const { rateLimit, ipKeyGenerator } = require('express-rate-limit');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/auth');
const authController = require('../controllers/authController');

const router = express.Router();

// Rate limiters
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { success: false, error: 'Too many login attempts. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Google sign-in is a login: same kind of limit, a bit looser because one tap can mean sign-in or sign-up
const googleLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30,
  message: { success: false, error: 'Too many sign-in attempts. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, error: 'Too many accounts created. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { success: false, error: 'Too many password reset attempts. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Generous limit on token refresh (normal clients refresh at most every few minutes)
const refreshLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 60,
  message: { success: false, error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Second limiter for forgot/reset keyed by target email + client IP, so one IP cannot hammer one
// account and resets for one account are throttled independently of the per-IP limiter above
const passwordResetEmailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  keyGenerator: (req) => {
    const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    return `${email}|${ipKeyGenerator(req.ip || '')}`;
  },
  message: { success: false, error: 'Too many password reset attempts. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/register', registerLimiter, [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  validate,
], authController.register);

router.post('/google', googleLimiter, [
  body('idToken').isString().isLength({ min: 20, max: 4096 }).withMessage('Google token is required'),
  body('language').optional().isIn(['al', 'en', 'de']).withMessage('Unsupported language'),
  validate,
], authController.googleLogin);

router.post('/login', loginLimiter, [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  validate,
], authController.login);

router.post('/logout', authMiddleware, authController.logout);
router.get('/me', authMiddleware, authController.getMe);

router.put('/profile', authMiddleware, [
  body('name').optional().trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').optional().isEmail().withMessage('Valid email is required'),
  body('password').optional().isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('currentPassword').optional().isString().withMessage('Current password must be a string'),
  validate,
], authController.updateProfile);

router.post('/refresh', refreshLimiter, authController.refreshTokens);

router.post('/forgot-password', passwordResetLimiter, passwordResetEmailLimiter, [
  body('email').isEmail().withMessage('Valid email is required'),
  validate,
], authController.forgotPassword);

router.post('/reset-password', passwordResetLimiter, passwordResetEmailLimiter, [
  body('email').isEmail().withMessage('Valid email is required'),
  body('code').isString().matches(/^\d{6}$/).withMessage('6-digit code is required'),
  body('newPassword').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  validate,
], authController.resetPassword);

// Requires { password } in the body for re-authentication (checked in the controller)
router.delete('/account', authMiddleware, authController.deleteAccount);

module.exports = router;
