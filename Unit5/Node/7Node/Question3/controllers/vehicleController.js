const Vehicle = require("../models/Vehicle");

exports.createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.getAllVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.updateVehicle = async (req, res, next) => {
  try {
    const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Vehicle not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteVehicle = async (req, res, next) => {
  try {
    const deleted = await Vehicle.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Vehicle not found" });
    res.json({ message: "Vehicle deleted" });
  } catch (err) {
    next(err);
  }
};

// Trip operations
exports.addTrip = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    vehicle.trips.push(req.body);
    await vehicle.save();
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.updateTrip = async (req, res, next) => {
  try {
    const { id, tripIndex } = req.params;
    const vehicle = await Vehicle.findById(id);
    if (!vehicle || !vehicle.trips[tripIndex])
      return res.status(404).json({ message: "Trip or vehicle not found" });

    Object.assign(vehicle.trips[tripIndex], req.body);
    await vehicle.save();
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    const { id, tripIndex } = req.params;
    const vehicle = await Vehicle.findById(id);
    if (!vehicle || !vehicle.trips[tripIndex])
      return res.status(404).json({ message: "Trip or vehicle not found" });

    vehicle.trips.splice(tripIndex, 1);
    await vehicle.save();
    res.json({ message: "Trip deleted", vehicle });
  } catch (err) {
    next(err);
  }
};

// Queries
exports.tripsOver200 = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ "trips.distance": { $gt: 200 } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.tripsFromCities = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({
      "trips.startLocation": { $in: ["Delhi", "Mumbai", "Bangalore"] },
    });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.tripsAfterDate = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({
      "trips.startTime": { $gte: new Date("2024-01-01") },
    });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.carsOrTrucks = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ type: { $in: ["car", "truck"] } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getTotalDistance = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    res.json({ totalDistance: vehicle.totalDistance() });
  } catch (err) {
    next(err);
  }
};
