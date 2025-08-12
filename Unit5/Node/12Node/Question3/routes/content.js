const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const contentCtrl = require("../controllers/contentController");

router.get("/free", auth, contentCtrl.getFree);
router.get("/premium", auth, contentCtrl.getPremium);

// Admin only content management
router.post("/", auth, role("admin"), contentCtrl.createContent);
router.delete("/:id", auth, role("admin"), contentCtrl.deleteContent);

module.exports = router;
