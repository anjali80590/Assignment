const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const BlacklistedToken = require("../models/BlacklistedToken");
const { v4: uuidv4 } = require("uuid");

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10);
const ACCESS_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES_IN || "15m";
const REFRESH_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";

function signAccess(user) {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_EXPIRES }
  );
}

function signRefresh(user, jti) {
  return jwt.sign({ id: user._id, jti }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_EXPIRES,
  });
}

exports.signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password)
      return res
        .status(400)
        .json({ message: "username, email, password required" });

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Email already used" });

    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      username,
      email,
      password: hash,
      role: role === "admin" ? "admin" : "user",
    });
    res
      .status(201)
      .json({
        message: "User created",
        user: { id: user._id, username: user.username, email: user.email },
      });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "email & password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = signAccess(user);
    const jti = uuidv4();
    const refreshToken = signRefresh(user, jti);

    // Keep jti for rotation/validation (optional)
    user.refreshJtis.push(jti);
    await user.save();

    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(400).json({ message: "refreshToken required" });

    // Check blacklist
    const black = await BlacklistedToken.findOne({ token: refreshToken });
    if (black)
      return res.status(401).json({ message: "Refresh token revoked" });

    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (e) {
      return res
        .status(401)
        .json({ message: "Invalid or expired refresh token" });
    }

    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    // Verify jti present in user's stored jtis (simple rotation)
    if (!user.refreshJtis.includes(payload.jti)) {
      return res.status(401).json({ message: "Refresh token not recognized" });
    }

    // Rotate refresh token: blacklist old refreshToken (optional) and issue new ones
    // Blacklist old refresh token (store until its expiry)
    const refreshExp = new Date(
      Date.now() +
        parseExpiryToMs(process.env.REFRESH_TOKEN_EXPIRES_IN || REFRESH_EXPIRES)
    );
    await BlacklistedToken.create({
      token: refreshToken,
      expiresAt: refreshExp,
      type: "refresh",
    });

    // Remove old jti, add new jti
    user.refreshJtis = user.refreshJtis.filter((j) => j !== payload.jti);
    const newJti = uuidv4();
    user.refreshJtis.push(newJti);
    await user.save();

    const newAccess = signAccess(user);
    const newRefresh = signRefresh(user, newJti);

    res.json({ accessToken: newAccess, refreshToken: newRefresh });
  } catch (err) {
    console.error("Refresh error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.body;
    // blacklist whichever provided
    const ops = [];
    if (accessToken) {
      const decoded = jwt.decode(accessToken);
      const exp =
        decoded && decoded.exp
          ? new Date(decoded.exp * 1000)
          : new Date(
              Date.now() +
                parseExpiryToMs(
                  process.env.ACCESS_TOKEN_EXPIRES_IN || ACCESS_EXPIRES
                )
            );
      ops.push(
        BlacklistedToken.create({
          token: accessToken,
          expiresAt: exp,
          type: "access",
        })
      );
    }
    if (refreshToken) {
      const decoded = jwt.decode(refreshToken);
      const exp =
        decoded && decoded.exp
          ? new Date(decoded.exp * 1000)
          : new Date(
              Date.now() +
                parseExpiryToMs(
                  process.env.REFRESH_TOKEN_EXPIRES_IN || REFRESH_EXPIRES
                )
            );
      ops.push(
        BlacklistedToken.create({
          token: refreshToken,
          expiresAt: exp,
          type: "refresh",
        })
      );

      // If we can parse user id and jti, remove jti from user.refreshJtis
      try {
        const payload = jwt.verify(
          refreshToken,
          process.env.JWT_REFRESH_SECRET
        );
        const user = await User.findById(payload.id);
        if (user) {
          user.refreshJtis = user.refreshJtis.filter((j) => j !== payload.jti);
          await user.save();
        }
      } catch (e) {
        // ignore
      }
    }
    await Promise.all(ops);
    res.json({ message: "Logged out, tokens blacklisted" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// helper to parse durations like "7d" or "15m"
function parseExpiryToMs(str) {
  if (!str) return 0;
  if (str.endsWith("ms")) return parseInt(str.slice(0, -2));
  if (str.endsWith("s")) return parseInt(str.slice(0, -1)) * 1000;
  if (str.endsWith("m")) return parseInt(str.slice(0, -1)) * 60 * 1000;
  if (str.endsWith("h")) return parseInt(str.slice(0, -1)) * 60 * 60 * 1000;
  if (str.endsWith("d"))
    return parseInt(str.slice(0, -1)) * 24 * 60 * 60 * 1000;
  return parseInt(str) * 1000;
}
