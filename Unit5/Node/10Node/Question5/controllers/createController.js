const Movie = require("../models/movieModel");
const User = require("../models/userModel");
const Booking = require("../models/bookingModel");

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const { userId, movieId } = req.body;

    const user = await User.findById(userId);
    const movie = await Movie.findById(movieId);

    if (!user || !movie) {
      return res.status(400).json({ error: "Invalid user or movie ID" });
    }

    const booking = await Booking.create(req.body);
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
