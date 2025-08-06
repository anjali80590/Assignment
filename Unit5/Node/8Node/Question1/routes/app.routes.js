const express = require("express");
const { addUser } = require("../controllers/user.controller");
const {
  addProfile,
  getAllProfiles,
} = require("../controllers/profile.controller");

const router = express.Router();

router.post("/add-user", addUser);
router.post("/add-profile", addProfile);
router.get("/profiles", getAllProfiles);

module.exports = router;
