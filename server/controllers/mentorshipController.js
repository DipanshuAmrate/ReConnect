const Mentorship = require("../models/Mentorship");

const requestMentorship = async (req, res) => {
  try {
    const { alumniId, message } = req.body;

    const request = await Mentorship.create({
      student: req.user.id,
      alumni: alumniId,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Mentorship request sent",
      request,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  requestMentorship,
};