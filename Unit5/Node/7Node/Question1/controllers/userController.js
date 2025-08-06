const User = require("../models/User");
const Address = require("../models/Address");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addAddress = async (req, res) => {
  try {
    const { userId } = req.params;
    const address = await Address.create(req.body);
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { addresses: address._id } },
      { new: true }
    );
    res.status(200).json({ message: "Address added", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("addresses");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserSummary = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAddresses = await Address.countDocuments();
    const users = await User.find()
      .select("name addresses")
      .populate("addresses");
    const userList = users.map((u) => ({
      name: u.name,
      addressCount: u.addresses.length,
    }));

    res.json({
      totalUsers,
      totalAddresses,
      userList,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;

    await User.findByIdAndUpdate(userId, { $pull: { addresses: addressId } });
    await Address.findByIdAndDelete(addressId);

    res.json({ message: "Address deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
