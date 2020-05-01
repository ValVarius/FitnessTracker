const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
  title: String,
  body: String
});

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;
