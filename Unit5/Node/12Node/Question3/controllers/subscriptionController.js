const User = require("../models/User");

const SUB_DAYS = parseInt(process.env.SUBSCRIPTION_DURATION_DAYS || "30", 10);

exports.subscribe = async (req, res) => {
  try {
    const user = req.user;
    const { plan } = req.body;
    if (!["premium", "pro"].includes(plan))
      return res.status(400).json({ message: "Invalid plan" });

    const now = new Date();
    const expiresAt = new Date(now.getTime() + SUB_DAYS * 24 * 60 * 60 * 1000);

    user.subscription = { plan, startAt: now, expiresAt };
    await user.save();

    res.json({ message: "Subscribed", subscription: user.subscription });
  } catch (err) {
    console.error("Subscribe error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.subscriptionStatus = async (req, res) => {
  try {
    const user = req.user;
    const sub = user.subscription || { plan: "free" };
    let isValid = false;
    if (sub.plan !== "free" && sub.expiresAt) {
      isValid = new Date() < new Date(sub.expiresAt);
    }
    res.json({ subscription: sub, valid: isValid });
  } catch (err) {
    console.error("Status error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.renew = async (req, res) => {
  try {
    const user = req.user;
    const { plan } = req.body; // optional: allow renewing same plan only
    const sub = user.subscription || { plan: "free" };

    if (sub.plan === "free")
      return res
        .status(400)
        .json({
          message: "No active paid subscription to renew; subscribe instead",
        });

    // allow renew only before expiry - requirement says "Users can renew before expiry"
    if (new Date() > new Date(sub.expiresAt)) {
      return res
        .status(400)
        .json({
          message: "Subscription already expired; please subscribe again",
        });
    }

    // extend expiry by SUB_DAYS from current expiry (not from now)
    const newExpires = new Date(
      new Date(sub.expiresAt).getTime() + SUB_DAYS * 24 * 60 * 60 * 1000
    );
    user.subscription.expiresAt = newExpires;
    await user.save();

    res.json({
      message: "Subscription renewed",
      subscription: user.subscription,
    });
  } catch (err) {
    console.error("Renew error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.cancelSubscription = async (req, res) => {
  try {
    const user = req.user;
    user.subscription = { plan: "free" };
    await user.save();
    res.json({ message: "Subscription cancelled, downgraded to free" });
  } catch (err) {
    console.error("Cancel error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
