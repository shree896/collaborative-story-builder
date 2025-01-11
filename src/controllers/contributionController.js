const Contribution = require('../models/contributionModel');
const Story = require('../models/storyModel');

const addContribution = async (req, res) => {
  try {
    const { content } = req.body;
    const { id: storyId } = req.params;

    const contribution = await Contribution.create({
      story: storyId,
      contributor: req.user._id,
      content,
    });

    await Story.findByIdAndUpdate(
      storyId,
      { $push: { contributors: req.user._id } },
      { new: true }
    );

    res.status(201).json(contribution);
  } catch (error) {
    res.status(500).json({ message: 'Error adding contribution' });
  }
};

const updateContribution = async (req, res) => {
  try {
    const { content } = req.body;
    const { contributionId } = req.params;

    const contribution = await Contribution.findByIdAndUpdate(
      contributionId,
      { content },
      { new: true }
    );

    res.json(contribution);
  } catch (error) {
    res.status(500).json({ message: 'Error updating contribution' });
  }
};

const deleteContribution = async (req, res) => {
  try {
    const { contributionId } = req.params;

    await Contribution.findByIdAndDelete(contributionId);

    res.json({ message: 'Contribution deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contribution' });
  }
};

module.exports = { addContribution, updateContribution, deleteContribution };
