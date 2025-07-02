const express = require('express');
const router = express.Router();
const lembreteController = require('../controllers/lembreteController');

router.get('/:userId', lembreteController.listLembrete);
router.post('/', lembreteController.createLembrete);
router.get('/:userId', lembreteController.getLembrete);
router.put('/:id', lembreteController.updateLembrete);
router.delete('/:id', lembreteController.deleteLembrete);

module.exports = router;
