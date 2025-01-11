const express = require('express');
const { addContribution, updateContribution, deleteContribution } = require('../controllers/contributionController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/:id/contributions', protect, addContribution);
router.put('/:id/contributions/:contributionId', protect, updateContribution);
router.delete('/:id/contributions/:contributionId', protect, deleteContribution);

module.exports = router;
