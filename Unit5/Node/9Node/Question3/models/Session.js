const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
  topic: String,
  time: Date,
  isArchived: { type: Boolean, default: false },
  learners: [
    {
      learnerId: { type: mongoose.Schema.Types.ObjectId, ref: "Learner" },
      attendance: {
        type: String,
        enum: ["present", "cancelled"],
        default: "present",
      },
      feedback: String,
    },
  ],
});

module.exports = mongoose.model("Session", sessionSchema);
