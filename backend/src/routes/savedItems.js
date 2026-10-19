const express = require('express');
const authMiddleware = require('../middleware/auth');
const savedItemsController = require('../controllers/savedItemsController');

const router = express.Router();

router.use(authMiddleware);

router.get('/', savedItemsController.getAll);
router.get('/:id', savedItemsController.getOne);
router.post('/', savedItemsController.create);
router.delete('/:id', savedItemsController.remove);

module.exports = router;
