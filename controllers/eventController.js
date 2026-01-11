const Event = require("../models/Event");
const Booking = require("../models/Booking");

exports.createEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    availableTickets: req.body.totalTickets,
    organizerId: req.user.id,
  });

  res.json(event);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  setImmediate(async () => {
    const bookings = await Booking.find({ eventId: event._id });

    bookings.forEach((b) => {
      console.log(
        `🔔 Notified user ${b.userId} about update in event "${event.title}"`
      );
    });
  });

  res.json(event);
};


exports.getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};
