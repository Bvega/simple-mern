// server/models/task.js

const mongoose = require('mongoose'); // Only mongoose is needed

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
