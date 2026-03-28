const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        status: "fail",
        message: "Name and email are required",
      });
    }

    const newUser = await User.insertUser(name, email, phone, address);

    res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    console.error("Error creating user:", err.message);

    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
