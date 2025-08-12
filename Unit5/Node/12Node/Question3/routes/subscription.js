const express = require("express");
const router = express.Router();
const authMw = require("../middleware/authMiddleware");
const subCtrl = require("../controllers/subscriptionController");

router.use(authMw);

router.post("/subscribe", subCtrl.subscribe);
router.get("/subscription-status", subCtrl.subscriptionStatus);
router.patch("/renew", subCtrl.renew);
router.post("/cancel-subscription", subCtrl.cancelSubscription);

module.exports = router;
