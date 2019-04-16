const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostManagerSchema = new Schema({
  post_id: {
    type: String,
    require: true
  },
  post_medium_name: {
    type: String,
    require: true
  },
  post_medium_alias: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = PostManager = mongoose.model("post_managers", PostManagerSchema);