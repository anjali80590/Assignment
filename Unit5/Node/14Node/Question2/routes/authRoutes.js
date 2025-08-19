const r = require("express").Router();
const { signup, login } = require("../controllers/authController");
r.post("/signup", signup);
r.post("/login", login);
module.exports = r;
