const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],
  contributors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  versions: [
    {
      content: String,
      createdAt: { type: Date, default: Date.now },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Story', storySchema);
