const User = require("../models/userModel");
const Assignment = require("../models/assignmentModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "config/.env") });

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role)
      return res.status(400).json({ error: "All fields are required" });
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "All fields are required" });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not registered" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.header("x-access-token", token).status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadAssignment = async (req, res) => {
  try {
    const { task, admin } = req.body;
    if (!admin || !task)
      return res.status(400).json({ error: "Task and Admin are required" });

    const assignment = new Assignment({
      userId: req.user._id,
      task,
      admin,
    });
    await assignment.save();
    res.status(201).json({ message: "Assignment uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "Admin" }, "name email");
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
