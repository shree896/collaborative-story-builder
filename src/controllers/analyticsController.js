const Story = require('../models/storyModel');
const Contribution = require('../models/contributionModel');
const User = require('../models/userModel');

const getStoryAnalytics = async (req, res) => {
  try {
    const stories = await Story.aggregate([
      { $project: { title: 1, contributorsCount: { $size: "$contributors" }, totalVersions: { $size: "$versions" } } },
    ]);
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching story analytics' });
  }
};

