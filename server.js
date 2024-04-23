const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, enum: ["admin", "user"] }, // Add userType field
});

const User = mongoose.model("User", userSchema);

// Admin Signup Route
app.post("/api/admin/signup", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const newUser = new User({ username, password, userType: "admin" }); // Set userType to 'admin'
  try {
    await newUser.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create admin" });
  }
});

// Admin Login Route
app.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;

  const admin = await User.findOne({ username, userType: "admin" }); // Find admin user

  if (!admin || admin.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign(
    { id: admin.id, username: admin.username, userType: "admin" },
    process.env.JWT_SECRET
  );
  res.json({ token });
});

// Regular User Signup Route
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const newUser = new User({ username, password, userType: "user" }); // Set userType to 'user'
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create user" });
  }
});

// Regular User Login Route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, userType: "user" }); // Find regular user

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, userType: "user" },
    process.env.JWT_SECRET
  );
  res.json({ token });
});
// Protected Route (same as before)
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route" });
});

// Authentication Middleware (same as before)
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
