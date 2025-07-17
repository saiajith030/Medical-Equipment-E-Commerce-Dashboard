const express = require("express");
const router = express.Router();

// Import controller functions
const { getUsers, registerUser, authUser } = require("../controllers/userController");

// Public Routes
router.post("/register", registerUser);
router.post("/login", authUser);

// Protected/Admin Route Example (you can add middleware here later)
router.get("/", getUsers);

module.exports = router;
