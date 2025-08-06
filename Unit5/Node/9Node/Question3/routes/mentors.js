const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");

router.post("/", mentorController.createMentor);
router.delete("/:id", mentorController.softDeleteMentor);
router.get("/inactive", mentorController.mentorsWithNoActiveSessions);

module.exports = router;
