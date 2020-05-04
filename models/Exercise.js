const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  title: String,
  body: String,
  type: String,
  weight: Number,
  sets: Number,
  duration: String

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
