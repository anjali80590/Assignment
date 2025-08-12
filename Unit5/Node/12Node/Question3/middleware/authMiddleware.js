const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const BlacklistedToken = require("../models/BlacklistedToken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    if (!token)
      return res.status(401).json({ message: "Access token required" });

    // Check blacklist
    const black = await BlacklistedToken.findOne({ token });
    if (black) return res.status(401).json({ message: "Token revoked" });

    // Verify
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
      return res
        .status(401)
        .json({ message: "Invalid or expired access token" });
    }

    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    // Auto-downgrade: if subscription expired, set to free
    if (user.subscription && user.subscription.expiresAt) {
      if (new Date() > new Date(user.subscription.expiresAt)) {
        // Expired: auto downgrade to free if not already free
        if (user.subscription.plan !== "free") {
          user.subscription = { plan: "free" }; // reset
          await user.save();
        }
      }
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
