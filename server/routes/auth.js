import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // 2 step validation i have alredly handled  this logic in login/sign page  
  if (!name || !email || !password) { 
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists." });
    }

    // for a new user
    const newUser = new User({ name, email, password });

    // saving to MongoDB
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully." }); // status 201 -> it means data is created successfully
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
