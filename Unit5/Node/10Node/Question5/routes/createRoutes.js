const express = require("express");
const router = express.Router();
const {
  createMovie,
  createUser,
  createBooking,
} = require("../controllers/createController");

router.post("/movies", createMovie);
router.post("/users", createUser);
router.post("/bookings", createBooking);

module.exports = router;
