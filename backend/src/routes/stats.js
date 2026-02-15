const express = require('express');
const authMiddleware = require('../middleware/auth');
const statsController = require('../controllers/statsController');

const router = express.Router();

router.use(authMiddleware);

router.get('/', statsController.getStats);
router.post('/problem-solved', statsController.problemSolved);
router.post('/course-completed', statsController.courseCompleted);
router.post('/quiz-completed', statsController.quizCompleted);

module.exports = router;
