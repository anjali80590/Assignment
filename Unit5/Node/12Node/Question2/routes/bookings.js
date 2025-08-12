const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

// all routes protected
router.use(auth);

// Create booking (users)
router.post("/", bookingController.createBooking);

// Get bookings: users get own, admin gets all
router.get("/", bookingController.getBookings);

// Update booking (user can update own pending; admin can update any)
router.put("/:id", bookingController.updateBooking);

// Cancel booking (user cancels own pending; admin can cancel any)
router.delete("/:id", bookingController.cancelBooking);

// Admin approve/reject/delete
router.patch("/:id/approve", bookingController.approveBooking);
router.patch("/:id/reject", bookingController.rejectBooking);
router.delete("/:id/admin", bookingController.deleteBookingByAdmin); // admin-only deletion

module.exports = router;
