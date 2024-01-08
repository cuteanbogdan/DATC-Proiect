const mongoose = require("mongoose");

const ReportedProblemsSchema = new mongoose.Schema({
  coord: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  numarRaportari: {
    type: Number,
    required: true,
    default: 0,
  },
  categorie: {
    type: String,
    required: true,
    enum: [
      "Groapa",
      "Accident",
      "Copac cazut",
      "Animale agresive",
      "Degradare infrastructura",
    ],
  },
});

module.exports = ReportedProblems = mongoose.model(
  "reportedproblems",
  ReportedProblemsSchema
);
