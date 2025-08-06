const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehicleController");

router.post("/", controller.createVehicle);
router.get("/", controller.getAllVehicles);
router.put("/:id", controller.updateVehicle);
router.delete("/:id", controller.deleteVehicle);

router.post("/:id/trips", controller.addTrip);
router.put("/:id/trips/:tripIndex", controller.updateTrip);
router.delete("/:id/trips/:tripIndex", controller.deleteTrip);

router.get("/query/trips-over-200", controller.tripsOver200);
router.get("/query/from-cities", controller.tripsFromCities);
router.get("/query/trips-after-jan2024", controller.tripsAfterDate);
router.get("/query/cars-or-trucks", controller.carsOrTrucks);
router.get("/:id/total-distance", controller.getTotalDistance);

module.exports = router;
