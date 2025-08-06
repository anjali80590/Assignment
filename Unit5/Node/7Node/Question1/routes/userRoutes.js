const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.post("/:userId/address", userController.addAddress);
router.get("/summary", userController.getUserSummary);
router.get("/:userId", userController.getUserDetails);
router.delete("/:userId/address/:addressId", userController.deleteAddress); // bonus

module.exports = router;
