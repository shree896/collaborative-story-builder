const express = require('express');
const { getStoryAnalytics, getUserAnalytics } = require('../controllers/analyticsController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/stories', protect, getStoryAnalytics);
router.get('/users', protect, getUserAnalytics);

module.exports = router;
