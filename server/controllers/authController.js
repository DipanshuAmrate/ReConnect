const bcrypt = require("bcryptjs");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      role,
      department,
      graduationYear,
      company,
      experience,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      department,
      graduationYear,
      company,
      experience,
    });

    const userResponse = {
  id: user._id,
  fullName: user.fullName,
  email: user.email,
  role: user.role,
  department: user.department,
  graduationYear: user.graduationYear,
  company: user.company,
  experience: user.experience,
  isVerified: user.isVerified,
  profileImage: user.profileImage,
};

res.status(201).json({
  success: true,
  message: "User registered successfully",
  user: userResponse,
});

  } catch (error) {
  console.error("===== REGISTRATION ERROR =====");
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message,
    name: error.name,
  });
}
};

module.exports = {
  register,
};