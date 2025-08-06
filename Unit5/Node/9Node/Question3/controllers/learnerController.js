const Learner = require("../models/Learner");
const Session = require("../models/Session");

exports.createLearner = async (req, res) => {
  const learner = await Learner.create(req.body);
  res.json(learner);
};

exports.softDeleteLearner = async (req, res) => {
  await Learner.findByIdAndUpdate(req.params.id, { isActive: false });
  await Session.updateMany(
    { "learners.learnerId": req.params.id },
    { $set: { "learners.$[elem].attendance": "cancelled" } },
    { arrayFilters: [{ "elem.learnerId": req.params.id }] }
  );
  res.json({ message: "Learner soft-deleted and attendance cancelled" });
};

exports.learnersWithMoreThanThreeSessions = async (req, res) => {
  const sessions = await Session.find({ isArchived: false });
  const learnerMap = {};

  sessions.forEach((session) => {
    session.learners.forEach((l) => {
      if (l.attendance === "present") {
        const id = l.learnerId.toString();
        learnerMap[id] = (learnerMap[id] || 0) + 1;
      }
    });
  });

  const qualifiedLearners = [];
  for (const [learnerId, count] of Object.entries(learnerMap)) {
    if (count > 3) {
      const learner = await Learner.findById(learnerId);
      if (learner && learner.isActive) qualifiedLearners.push(learner);
    }
  }

  res.json(qualifiedLearners);
};
