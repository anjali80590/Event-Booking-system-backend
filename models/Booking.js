const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  eventId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  ticketsBooked: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);
