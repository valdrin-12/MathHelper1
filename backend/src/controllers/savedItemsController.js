const savedItemModel = require('../models/savedItemModel');

async function getAll(req, res) {
  try {
    const items = await savedItemModel.getByUserId(req.userId);
    res.json({ success: true, items });
  } catch (err) {
    console.error('GetAll saved items error:', err);
    res.status(500).json({ success: false, error: 'Failed to get saved items' });
  }
}

async function create(req, res) {
  try {
    const { imageData, problemText, answer, steps, explanation } = req.body;

    if (!answer) {
      return res.status(400).json({ success: false, error: 'Answer is required' });
    }

    const item = await savedItemModel.create(req.userId, {
      imageData,
      problemText,
      answer,
      steps,
      explanation,
    });

    res.status(201).json({ success: true, item });
  } catch (err) {
    console.error('Create saved item error:', err);
    res.status(500).json({ success: false, error: 'Failed to save item' });
  }
}

async function remove(req, res) {
  try {
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

module.exports = { getAll, create, remove };
