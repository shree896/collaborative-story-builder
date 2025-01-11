const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');
const { PORT } = require('./config/env');

connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

module.exports = app;
