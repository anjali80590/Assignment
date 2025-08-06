const Consultation = require("../models/Consultation");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

exports.createConsultation = async (req, res) => {
  const { doctorId, patientId, notes } = req.body;

  const doctor = await Doctor.findById(doctorId);
  const patient = await Patient.findById(patientId);

  if (!doctor || !doctor.isActive)
    return res.status(400).json({ error: "Invalid or inactive doctor" });

  if (!patient || !patient.isActive)
    return res.status(400).json({ error: "Invalid or inactive patient" });

  const consultation = await Consultation.create({
    doctorId,
    patientId,
    notes,
  });
  res.json(consultation);
};

exports.getRecentConsultations = async (req, res) => {
  const consultations = await Consultation.find({ isActive: true })
    .sort({ consultedAt: -1 })
    .limit(5)
    .populate("doctorId patientId");

  res.json(consultations);
};
