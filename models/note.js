// load the things we need
var mongoose = require('mongoose');

// define the schema for our  model
var notesSchema = mongoose.Schema({
  description: String,
  date: String,
  author: String,
});

module.exports = mongoose.model('Notes', notesSchema);