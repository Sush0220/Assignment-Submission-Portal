const express = require("express");
const {
  getAssignments,
  acceptAssignment,
  rejectAssignment,
} = require("../controllers/adminController");
const { authenticate, authorize } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/assignments", authenticate, authorize(["Admin"]), getAssignments);
router.put(
  "/assignments/:id/accept",
  authenticate,
  authorize(["Admin"]),
  acceptAssignment
);
router.put(
  "/assignments/:id/reject",
  authenticate,
  authorize(["Admin"]),
  rejectAssignment
);

module.exports = router;
