import express from "express";
import User from "../models/user.js";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

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
    const newUser = new User({ name, email, password: hashedPassword });

    // saving to MongoDB
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully." }); // status 201 -> it means data is created successfully
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

router.post("/login" , async (req,res)=>{
  const {email,password} = req.body;
  if(!email || !password ){
    return res.status(400).json({error: "All fields are required."});
  }
  
  try{
    const existingUser = await User.findOne({ email });
    if (!existingUser){
         return res.status(404).json({ error: "User not found." });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
     if (!isMatch){
        return res.status(401).json({ error: "Invalid credentials." });
     }
    else {
       res.status(200).json({ message: "Login successful", user: { name: existingUser.name, email: existingUser.email } });
    }
  }
    catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
