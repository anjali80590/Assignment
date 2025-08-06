const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

router.post("/", patientController.createPatient);
router.delete("/:id", patientController.softDeletePatient);
router.get("/:id/doctors", patientController.getPatientDoctors);
router.get("/", patientController.getMalePatients);

module.exports = router;
