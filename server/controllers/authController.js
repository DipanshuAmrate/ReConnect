const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ================= REGISTER =================

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

    // Create user
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
    });
  }
};

// ================= LOGIN =================

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

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

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userResponse,
    });

  } catch (error) {
    console.error("===== LOGIN ERROR =====");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};