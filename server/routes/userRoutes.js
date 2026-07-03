const express = require("express");
const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

// Logged-in user's profile
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

// Get all alumni
router.get("/alumni", protect, async (req, res) => {
  try {
    const alumni = await User.find(
      { role: "alumni" },
      "-password"
    );

    res.json({
      success: true,
      alumni,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;