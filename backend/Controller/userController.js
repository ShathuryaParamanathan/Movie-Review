const User = require("../Model/UserModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Check if the email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Create a new user instance
    const user = new User({ name, email, password:hashedPassword });

    // Save the new user to the database
    const createdUser = await user.save();

    // Send a success response
    res.status(200).json({ userId: createdUser._id });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
};

const authentication = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid user" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password incorrect" });
    }

    // Successful login
    res.status(200).json({ message: "Successful login" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  authentication,
};
