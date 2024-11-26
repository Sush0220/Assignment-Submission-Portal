const Assignment = require("../models/assignmentModel");

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user._id })
      .populate("userId", "name")
      .populate("admin", "name");
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.acceptAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment)
      return res.status(404).json({ error: "Assignment not found" });
    assignment.status = "Accepted";
    await assignment.save();
    res.status(200).json({ message: "Assignment accepted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.rejectAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment)
      return res.status(404).json({ error: "Assignment not found" });
    assignment.status = "Rejected";
    await assignment.save();
    res.status(200).json({ message: "Assignment rejected" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
