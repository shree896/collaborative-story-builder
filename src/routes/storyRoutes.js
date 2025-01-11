const express = require('express');
const { createStory, getAllStories, getStoryById } = require('../controllers/storyController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createStory).get(getAllStories);
router.route('/:id').get(protect, getStoryById);

module.exports = router;
