const Booking = require("../models/Booking");
const User = require("../models/User");

exports.createBooking = async (req, res) => {
  try {
    const { serviceName, requestedAt, notes } = req.body;
    if (!serviceName || !requestedAt)
      return res
        .status(400)
        .json({ message: "serviceName and requestedAt required" });

    const requestedDate = new Date(requestedAt);
    if (isNaN(requestedDate.getTime()))
      return res.status(400).json({ message: "Invalid requestedAt date" });

    const booking = await Booking.create({
      serviceName,
      requestedAt: requestedDate,
      notes,
      createdBy: req.user._id,
      status: "pending",
    });

    res.status(201).json({ message: "Booking created", booking });
  } catch (err) {
    console.error("Create booking error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getBookings = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      const bookings = await Booking.find()
        .populate("createdBy", "username email")
        .sort({ requestedAt: -1 });
      return res.json(bookings);
    } else {
      const bookings = await Booking.find({ createdBy: req.user._id }).sort({
        requestedAt: -1,
      });
      return res.json(bookings);
    }
  } catch (err) {
    console.error("Get bookings error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { serviceName, requestedAt, notes } = req.body;

    // user can update only own booking and only if pending
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    if (req.user.role !== "admin") {
      if (!booking.createdBy.equals(req.user._id))
        return res.status(403).json({ message: "Not allowed" });
      if (booking.status !== "pending")
        return res
          .status(400)
          .json({ message: "Only pending bookings can be updated" });
    }

    if (serviceName) booking.serviceName = serviceName;
    if (requestedAt) {
      const d = new Date(requestedAt);
      if (isNaN(d.getTime()))
        return res.status(400).json({ message: "Invalid requestedAt" });
      booking.requestedAt = d;
    }
    if (notes !== undefined) booking.notes = notes;

    await booking.save();
    res.json({ message: "Booking updated", booking });
  } catch (err) {
    console.error("Update booking error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // users can cancel own booking only if pending
    if (req.user.role !== "admin") {
      if (!booking.createdBy.equals(req.user._id))
        return res.status(403).json({ message: "Not allowed" });
      if (booking.status !== "pending")
        return res
          .status(400)
          .json({ message: "Only pending bookings can be cancelled" });
      booking.status = "cancelled";
      await booking.save();
      return res.json({ message: "Booking cancelled", booking });
    } else {
      // admin cancel: allow deletion or set cancelled
      booking.status = "cancelled";
      await booking.save();
      return res.json({ message: "Booking cancelled by admin", booking });
    }
  } catch (err) {
    console.error("Cancel booking error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.approveBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Admins only" });

    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = "approved";
    await booking.save();
    res.json({ message: "Booking approved", booking });
  } catch (err) {
    console.error("Approve error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.rejectBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Admins only" });

    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = "rejected";
    await booking.save();
    res.json({ message: "Booking rejected", booking });
  } catch (err) {
    console.error("Reject error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteBookingByAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Admins only" });

    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Booking not found" });

    res.json({ message: "Booking deleted" });
  } catch (err) {
    console.error("Delete booking error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
