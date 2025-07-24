// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const taskRoutes = require('./routes/tasks'); // ✅ fixed path

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Database Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
  });
