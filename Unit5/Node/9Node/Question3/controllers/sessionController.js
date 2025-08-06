const Session = require("../models/Session");
const Mentor = require("../models/Mentor");
const Learner = require("../models/Learner");

exports.createSession = async (req, res) => {
  const { mentorId, learners, topic, time } = req.body;

  const mentor = await Mentor.findById(mentorId);
  if (!mentor || !mentor.isActive)
    return res.status(400).json({ error: "Invalid or inactive mentor" });

  const validLearners = [];
  for (const l of learners) {
    const learner = await Learner.findById(l.learnerId);
    if (learner && learner.isActive)
      validLearners.push({ learnerId: learner._id });
  }

  const session = await Session.create({
    mentorId,
    learners: validLearners,
    topic,
    time,
  });
  res.json(session);
};

exports.getRecentSessions = async (req, res) => {
  const sessions = await Session.find({ isArchived: false })
    .sort({ time: -1 })
    .limit(5)
    .populate("mentorId")
    .populate("learners.learnerId");

  res.json(sessions);
};

exports.getActiveSessionsByMentor = async (req, res) => {
  const sessions = await Session.find({
    mentorId: req.params.id,
    isArchived: false,
  });
  res.json(sessions);
};

exports.getActiveSessionsByLearner = async (req, res) => {
  const sessions = await Session.find({
    isArchived: false,
    "learners.learnerId": req.params.id,
  });
  res.json(sessions);
};

exports.countLearnersForMentor = async (req, res) => {
  const sessions = await Session.find({
    mentorId: req.params.id,
    isArchived: false,
  });
  const learners = new Set();

  sessions.forEach((session) => {
    session.learners.forEach((l) => {
      if (l.attendance === "present") learners.add(l.learnerId.toString());
    });
  });

  res.json({ totalLearners: learners.size });
};

exports.getMentorsForLearner = async (req, res) => {
  const sessions = await Session.find({
    "learners.learnerId": req.params.id,
    isArchived: false,
  }).populate("mentorId");
  const uniqueMentors = new Set();

  sessions.forEach((session) => {
    if (session.mentorId && session.mentorId.isActive)
      uniqueMentors.add(session.mentorId._id.toString());
  });

  const mentorIds = Array.from(uniqueMentors);
  const mentors = await Mentor.find({ _id: { $in: mentorIds } });

  res.json(mentors);
};

exports.getLearnersInSession = async (req, res) => {
  const session = await Session.findById(req.params.id).populate(
    "learners.learnerId"
  );
  res.json(session.learners.map((l) => l.learnerId));
};
