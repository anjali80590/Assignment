const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

router.post("/", sessionController.createSession);
router.get("/recent", sessionController.getRecentSessions);
router.get("/mentor/:id", sessionController.getActiveSessionsByMentor);
router.get("/learner/:id", sessionController.getActiveSessionsByLearner);
router.get(
  "/mentor/:id/count-learners",
  sessionController.countLearnersForMentor
);
router.get("/learner/:id/mentors", sessionController.getMentorsForLearner);
router.get("/:id/learners", sessionController.getLearnersInSession);

module.exports = router;
