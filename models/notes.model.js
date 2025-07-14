const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  idea: { type: String, required: true },
});

const noteModel = mongoose.model('note', noteSchema);
module.exports = noteModel;
