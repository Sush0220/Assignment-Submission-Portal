const express = require("express");
const {
  registerUser,
  loginUser,
  uploadAssignment,
  getAllAdmins,
} = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/upload", authenticate, authorize(["User"]), uploadAssignment);
router.get("/admins", authenticate, authorize(["User"]), getAllAdmins);

module.exports = router;
