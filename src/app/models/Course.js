const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  followed: Number,
  image: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", Course);
