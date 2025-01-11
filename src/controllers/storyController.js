const Story = require('../models/storyModel');

const createStory = async (req, res) => {
  try {
    const { title, description, tags } = req.body;

    const story = await Story.create({
      title,
      description,
      tags,
      contributors: [req.user._id],
      versions: [{ content: description }],
    });

    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ message: 'Error creating story' });
  }
};

const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stories' });
  }
};

const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('contributors', 'name email');
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching story' });
  }
};

module.exports = { createStory, getAllStories, getStoryById };
