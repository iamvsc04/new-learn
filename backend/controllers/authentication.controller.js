import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
//import bcrypt from "bcrypt";
import cookie from "cookie";


export async function userSignUp(req, res) {
  try {
    const { username, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Already exists" });
    }
    //const newpassword = await bcrypt.hash(password, 10);
    const newuser = new User({ username, email, password });
    newuser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    // const isMatch = await bcrypt.compare(password, user.password);
    //if (!isMatch) {
    // return res.status(400).json({ message: "Invalid password" });
    //}
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).json({ message: "Login successful", token });
    console.log(token);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export function userLogout(req, res) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.status(200).json({ message: "Logout successful" });
}
