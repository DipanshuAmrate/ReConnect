const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  requestMentorship,
} = require("../controllers/mentorshipController");

const router = express.Router();

router.post("/request", protect, requestMentorship);

module.exports = router;