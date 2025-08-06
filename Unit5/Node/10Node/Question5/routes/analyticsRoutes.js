const express = require("express");
const router = express.Router();
const {
  movieBookings,
  userBookings,
  topUsers,
  genreWiseBookings,
  activeBookings,
} = require("../controllers/analyticsController");

router.get("/movie-bookings", movieBookings);
router.get("/user-bookings", userBookings);
router.get("/top-users", topUsers);
router.get("/genre-wise-bookings", genreWiseBookings);
router.get("/active-bookings", activeBookings);

module.exports = router;
