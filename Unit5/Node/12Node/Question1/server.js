const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();

const User = require("./models/User");

const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.get("/auth/github", (req, res) => {
  const redirect_uri =
    "http://github.com/login/oauth/authorize" +
    `?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user:email`;
  res.redirect(redirect_uri);
});


app.get("/auth/github/callback", async (req, res) => {
  const code = req.query.code;

  try {
    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      { headers: { accept: "application/json" } }
    );

    const access_token = tokenResponse.data.access_token;

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `token ${access_token}` },
    });

    const { id: githubId, login: username } = userResponse.data;

    const emailResponse = await axios.get(
      "https://api.github.com/user/emails",
      {
        headers: { Authorization: `token ${access_token}` },
      }
    );

    const email = emailResponse.data.find((e) => e.primary).email;

    let user = await User.findOne({ githubId });
    if (!user) {
      user = await User.create({ githubId, username, email });
    }


    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "GitHub login failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
