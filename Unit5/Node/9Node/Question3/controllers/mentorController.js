const Mentor = require("../models/Mentor");
const Session = require("../models/Session");

exports.createMentor = async (req, res) => {
  const mentor = await Mentor.create(req.body);
  res.json(mentor);
};

exports.softDeleteMentor = async (req, res) => {
  await Mentor.findByIdAndUpdate(req.params.id, { isActive: false });
  await Session.updateMany({ mentorId: req.params.id }, { isArchived: true });
  res.json({ message: "Mentor soft-deleted and sessions archived" });
};

exports.mentorsWithNoActiveSessions = async (req, res) => {
  const mentors = await Mentor.find({ isActive: true });
  const result = [];

  for (const mentor of mentors) {
    const sessionCount = await Session.countDocuments({
      mentorId: mentor._id,
      isArchived: false,
    });
    if (sessionCount === 0) result.push(mentor);
  }

  res.json(result);
};
