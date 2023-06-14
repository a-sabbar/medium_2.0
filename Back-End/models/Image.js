const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  originalName: String,
  mimeType: String,
  filename: String,
  path: String
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;