const statsModel = require('../models/statsModel');

async function getStats(req, res) {
  try {
    const stats = await statsModel.getStats(req.userId);
    res.json({ success: true, stats });
  } catch (err) {
    console.error('GetStats error:', err);
    res.status(500).json({ success: false, error: 'Failed to get stats' });
  }
}

async function problemSolved(req, res) {
  try {
    await statsModel.recordProblemSolved(req.userId);
    res.json({ success: true });
  } catch (err) {
    console.error('ProblemSolved error:', err);
    res.status(500).json({ success: false, error: 'Failed to record problem' });
  }
}

async function courseCompleted(req, res) {
  try {
    const { courseId, title } = req.body;
    if (!courseId || !title) {
      return res.status(400).json({ success: false, error: 'courseId and title are required' });
    }
    await statsModel.recordCourseCompleted(req.userId, courseId, title);
    res.json({ success: true });
  } catch (err) {
    console.error('CourseCompleted error:', err);
    res.status(500).json({ success: false, error: 'Failed to record course' });
  }
}

async function quizCompleted(req, res) {
  try {
    const { quizId, title, score, total } = req.body;
    if (!quizId || !title || score === undefined || !total) {
      return res.status(400).json({ success: false, error: 'quizId, title, score, and total are required' });
    }
    await statsModel.recordQuizCompleted(req.userId, quizId, title, score, total);
    res.json({ success: true });
  } catch (err) {
    console.error('QuizCompleted error:', err);
    res.status(500).json({ success: false, error: 'Failed to record quiz' });
  }
}

module.exports = { getStats, problemSolved, courseCompleted, quizCompleted };
