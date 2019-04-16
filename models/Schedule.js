const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ScheduleSchema = new Schema({
  post_id: {
    type: String,
    require: true
  },
  schedule_time: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Schedule = mongoose.model("schedules", ScheduleSchema);