const Patient = require("../models/Patient");
const Consultation = require("../models/Consultation");

exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
};

exports.softDeletePatient = async (req, res) => {
  const { id } = req.params;
  await Patient.findByIdAndUpdate(id, { isActive: false });
  await Consultation.updateMany({ patientId: id }, { isActive: false });
  res.json({ message: "Patient and consultations marked inactive" });
};

exports.getPatientDoctors = async (req, res) => {
  const { id } = req.params;
  const doctors = await Consultation.find({
    patientId: id,
    isActive: true,
  }).populate({
    path: "doctorId",
    select: "name specialization",
    match: { isActive: true },
  });

  res.json(doctors.map((c) => c.doctorId).filter((d) => d));
};

exports.getMalePatients = async (req, res) => {
  const gender = req.query.gender;
  const patients = await Patient.find({ gender, isActive: true });
  res.json(patients);
};
