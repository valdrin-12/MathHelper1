const savedItemModel = require('../models/savedItemModel');

const MAX_SAVED_ITEMS = 500;
const MAX_IMAGE_DATA_LENGTH = 6 * 1000 * 1000; // base64 chars (≈4.5 MB decoded); app.js caps this route's body at 6mb
const MAX_STEPS = 100;
const MAX_STEP_LENGTH = 5000;
const MAX_ANSWER_LENGTH = 10000;
const MAX_PROBLEM_TEXT_LENGTH = 5000;
const MAX_EXPLANATION_LENGTH = 20000;

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isOptionalString(value, max) {
  return value === undefined || value === null || (typeof value === 'string' && value.length <= max);
}

async function getAll(req, res) {
  try {
    const items = await savedItemModel.getByUserId(req.userId);
    res.json({ success: true, items });
  } catch (err) {
    console.error('GetAll saved items error:', err);
    res.status(500).json({ success: false, error: 'Failed to get saved items' });
  }
}

async function getOne(req, res) {
  try {
    if (!UUID_RE.test(req.params.id)) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }
    const item = await savedItemModel.findById(req.params.id, req.userId);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }
    res.json({ success: true, item });
  } catch (err) {
    console.error('Get saved item error:', err);
    res.status(500).json({ success: false, error: 'Failed to get saved item' });
  }
}

async function create(req, res) {
  try {
    const { imageData, problemText, answer, steps, explanation } = req.body;

    if (!answer) {
      return res.status(400).json({ success: false, error: 'Answer is required' });
    }
    if (typeof answer !== 'string' || answer.length > MAX_ANSWER_LENGTH) {
      return res.status(400).json({ success: false, error: `Answer must be text (max ${MAX_ANSWER_LENGTH} characters)` });
    }
    if (!isOptionalString(problemText, MAX_PROBLEM_TEXT_LENGTH) || !isOptionalString(explanation, MAX_EXPLANATION_LENGTH)) {
      return res.status(400).json({ success: false, error: 'problemText or explanation is invalid or too long' });
    }
    if (imageData !== undefined && imageData !== null && typeof imageData !== 'string') {
      return res.status(400).json({ success: false, error: 'imageData must be a base64 string' });
    }
    if (imageData && imageData.length > MAX_IMAGE_DATA_LENGTH) {
      return res.status(413).json({ success: false, error: 'Image too large', code: 'IMAGE_TOO_LARGE' });
    }
    if (steps !== undefined && steps !== null && (
      !Array.isArray(steps)
      || steps.length > MAX_STEPS
      || steps.some((s) => typeof s !== 'string' || s.length > MAX_STEP_LENGTH)
    )) {
      return res.status(400).json({
        success: false,
        error: `steps must be an array of at most ${MAX_STEPS} strings (max ${MAX_STEP_LENGTH} characters each)`,
        code: 'INVALID_STEPS',
      });
    }

    const item = await savedItemModel.create(req.userId, {
      imageData,
      problemText,
      answer,
      steps,
      explanation,
    }, MAX_SAVED_ITEMS);

    if (!item) {
      return res.status(409).json({
        success: false,
        error: `You can save up to ${MAX_SAVED_ITEMS} items. Delete some to save new ones.`,
        code: 'SAVED_LIMIT',
        limit: MAX_SAVED_ITEMS,
      });
    }

    res.status(201).json({ success: true, item });
  } catch (err) {
    console.error('Create saved item error:', err);
    res.status(500).json({ success: false, error: 'Failed to save item' });
  }
}

async function remove(req, res) {
  try {
    if (!UUID_RE.test(req.params.id)) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }
    const deleted = await savedItemModel.deleteById(req.params.id, req.userId);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Delete saved item error:', err);
    res.status(500).json({ success: false, error: 'Failed to delete item' });
  }
}

module.exports = { getAll, getOne, create, remove };
