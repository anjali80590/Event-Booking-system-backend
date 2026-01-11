const mongoose = require("mongoose");
const Event = require("../models/Event");
const Booking = require("../models/Booking");

exports.bookEvent = async (req, res) => {
  const { eventId } = req.body;
  const tickets = Number(req.body.tickets);

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    return res.status(400).json({ message: "Invalid eventId" });
  }

  const event = await Event.findById(eventId);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  if (event.availableTickets < tickets) {
    return res.status(400).json({ message: "Tickets not available" });
  }

  event.availableTickets -= tickets;
  await event.save();

  const booking = await Booking.create({
    eventId,
    userId: req.user.id,
    ticketsBooked: tickets,
  });

  setImmediate(() => {
    console.log(
      `📧 Booking confirmation email sent to ${req.user.email} for event "${event.title}"`
    );
  });

  res.status(201).json({ message: "Booking successful", booking });
};
