const Profile = require("../models/profile.model");
const User = require("../models/user.model");

const addProfile = async (req, res) => {
  try {
    const { user } = req.body;
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingProfile = await Profile.findOne({ user });
    if (existingProfile) {
      return res
        .status(409)
        .json({ message: "Profile already exists for this user" });
    }

    const profile = await Profile.create(req.body);
    res.status(201).json({ message: "Profile created successfully", profile });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all profiles with populated user name
const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", "name email");
    res.status(200).json({ profiles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addProfile, getAllProfiles };


// This controller handles Profile-related operations with referenced users:
// - addProfile: Creates a profile for a user if not already existing.
// - getAllProfiles: Retrieves all profiles with populated user name and email.

