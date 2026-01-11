const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const {
  createEvent,
  updateEvent,
  getEvents,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.post("/", auth, role("ORGANIZER"), createEvent);
router.put("/:id", auth, role("ORGANIZER"), updateEvent);

module.exports = router;
