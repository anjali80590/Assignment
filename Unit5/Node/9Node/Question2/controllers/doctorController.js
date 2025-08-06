const Doctor = require("../models/Doctor");
const Consultation = require("../models/Consultation");

exports.createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
};

exports.softDeleteDoctor = async (req, res) => {
  const { id } = req.params;
  await Doctor.findByIdAndUpdate(id, { isActive: false });
  await Consultation.updateMany({ doctorId: id }, { isActive: false });
  res.json({ message: "Doctor and consultations marked inactive" });
};

exports.getDoctorPatients = async (req, res) => {
  const { id } = req.params;
  const patients = await Consultation.find({ doctorId: id, isActive: true })
    .populate({
      path: "patientId",
      select: "name age gender",
      match: { isActive: true },
    })
    .sort({ consultedAt: -1 });

  res.json(patients.map((c) => c.patientId).filter((p) => p));
};

exports.getDoctorConsultationsCount = async (req, res) => {
  const { id } = req.params;
  const count = await Consultation.countDocuments({
    doctorId: id,
    isActive: true,
  });
  res.json({ consultationsCount: count });
};
