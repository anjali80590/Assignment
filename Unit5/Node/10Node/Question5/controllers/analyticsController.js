const Booking = require("../models/bookingModel");

exports.movieBookings = async (req, res) => {
  try {
    const result = await Booking.aggregate([
      {
        $group: {
          _id: "$movieId",
          totalBookings: { $sum: 1 },
          totalSeats: { $sum: "$seats" },
        },
      },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.userBookings = async (req, res) => {
  try {
    const result = await Booking.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "_id",
          as: "movie",
        },
      },
      { $unwind: "$movie" },
      {
        $group: {
          _id: "$user._id",
          name: { $first: "$user.name" },
          bookings: {
            $push: {
              movieTitle: "$movie.title",
              seats: "$seats",
              date: "$bookingDate",
            },
          },
        },
      },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.topUsers = async (req, res) => {
  try {
    const result = await Booking.aggregate([
      {
        $group: {
          _id: "$userId",
          totalBookings: { $sum: 1 },
        },
      },
      { $match: { totalBookings: { $gt: 2 } } },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          _id: 0,
          userName: "$user.name",
          totalBookings: 1,
        },
      },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.genreWiseBookings = async (req, res) => {
  try {
    const result = await Booking.aggregate([
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "_id",
          as: "movie",
        },
      },
      { $unwind: "$movie" },
      {
        $group: {
          _id: "$movie.genre",
          totalSeats: { $sum: "$seats" },
        },
      },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.activeBookings = async (req, res) => {
  try {
    const result = await Booking.aggregate([
      { $match: { status: "Booked" } },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "_id",
          as: "movie",
        },
      },
      { $unwind: "$movie" },
      {
        $project: {
          userName: "$user.name",
          userEmail: "$user.email",
          movieTitle: "$movie.title",
          seats: 1,
          bookingDate: 1,
        },
      },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
