const User = require("../models/User");

exports.addUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.addProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { profileName, url } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.profiles.some((p) => p.profileName === profileName))
      return res.status(400).json({ message: "Profile already exists" });

    user.profiles.push({ profileName, url });
    await user.save();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const { profile } = req.query;

    let users;
    if (profile) {
      users = await User.find({ "profiles.profileName": profile });
    } else {
      users = await User.find();
    }

    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.search = async (req, res, next) => {
  try {
    const { name, profile } = req.query;

    const user = await User.findOne({ name });

    if (!user) return res.status(404).json({ message: "User not found" });

    const foundProfile = user.profiles.find((p) => p.profileName === profile);

    if (foundProfile) {
      return res.json({ user: user.name, profile: foundProfile });
    } else {
      return res.status(404).json({
        message: "User found, but profile not found",
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const { userId, profileName } = req.params;
    const { url } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const profile = user.profiles.find((p) => p.profileName === profileName);
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    profile.url = url;
    await user.save();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.deleteProfile = async (req, res, next) => {
  try {
    const { userId, profileName } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profiles = user.profiles.filter((p) => p.profileName !== profileName);
    await user.save();
    res.json({ message: "Profile deleted", user });
  } catch (err) {
    next(err);
  }
};
// This controller handles User operations with embedded profiles:
// - addUser: Creates a new user.
// - addProfile: Adds a new embedded profile to a user if not already existing.
// - getUsers: Retrieves all users or filters users by profile name.
// - search: Finds a user by name and checks for a specific profile.
// - updateProfile: Updates the URL of a specific embedded profile.
// - deleteProfile: Deletes an embedded profile from a user.
