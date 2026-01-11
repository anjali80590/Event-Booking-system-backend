const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  totalTickets: Number,
  availableTickets: Number,
  organizerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Event", eventSchema);
