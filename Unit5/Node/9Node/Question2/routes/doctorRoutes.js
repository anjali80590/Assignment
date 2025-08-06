const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.post("/", doctorController.createDoctor);
router.delete("/:id", doctorController.softDeleteDoctor);
router.get("/:id/patients", doctorController.getDoctorPatients);
router.get(
  "/:id/consultations/count",
  doctorController.getDoctorConsultationsCount
);

module.exports = router;
