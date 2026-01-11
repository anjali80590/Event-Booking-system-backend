const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const { bookEvent } = require("../controllers/bookingController");

router.post("/", auth, role("CUSTOMER"), bookEvent);

module.exports = router;
