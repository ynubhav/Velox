import express from "express";
import { User } from "../models/User.model.js";
import { generateToken } from "../utils/createJWT.js";
import { hashpassword, verifyhash } from "../utils/bcrypt-hasher.js";

const authRouter = express.Router();

//user register
authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedpass = await hashpassword(password);
    const userexist = await User.findOne({ email });
    if (!userexist)
      return res.status(403).json({ message: "Email already registered" });
    const newUser = await User.create({
      name,
      email,
      password: hashedpass,
    });
    await User.findByIdAndUpdate(newUser._id, { lastLogin: Date.now() });
    return res.json({ message: "User Registered", data: newUser });
  } catch (err) {
    return res.status(500).json({ message: "Couldnot Register User" ,error:err.message});
  }
});

authRouter.post("/admin_register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedpass = await hashpassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedpass,
      usertype: "Admin",
    }).select("_id name email userType");
    await User.findByIdAndUpdate(newUser._id, { lastLogin: Date.now() });
    res.json({ message: "Admin Registered", data: newUser });
  } catch (err) {
    res.status(500).json({ message: "Couldnot Register Admin" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const IsUserRegistered = await User.findOne({ email }).select(
      "_id name email password usertype"
    );
    console.log(IsUserRegistered);
    const matchpassword = await verifyhash(password, IsUserRegistered.password);
    if (IsUserRegistered && matchpassword) {
      const userId = IsUserRegistered._id;
      const token = generateToken(userId);
      await User.findByIdAndUpdate(userId, { lastLogin: Date.now() });
      res.status(200).json({
        message: "Login Succesfull",
        user: {
          id: userId,
          name: IsUserRegistered.name,
          email: IsUserRegistered.email,
          usertype: IsUserRegistered.usertype,
        },
        token,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "User email/Password incorrect" });
  }
});

authRouter.post("/google_auth", async (req, res) => {
  //checks the user exist or not if not creates user
  try {
    const data = req.body;
    const IsUserRegistered = await User.findOne({ googleId: data.providerId });
    if (!IsUserRegistered) {
      // register them with googleproviderId if email in it already exist attach it to them
      const emailRegistered = await User.findOne({ email: data.email });
      if (!emailRegistered) {
        //normal creation
        const createdUser = await User.create({
          name: data.name,
          email: data.email,
          googleId: data.providerId,
        });
        await User.findByIdAndUpdate(createdUser._id, {
          lastLogin: Date.now(),
        });
        return res.status(201).json({
          message: "new signup successfull",
          user: {
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            role: createdUser.usertype,
          },
        });
      }
      //id name email role
      const updatedUser = await User.findOneAndUpdate(
        { email: data.email },
        { googleId: data.providerId }
      );
      await User.findByIdAndUpdate(updatedUser._id, { lastLogin: Date.now() });
      return res.status(201).json({
        message: "provider added successfull",
        user: {
          id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.usertype,
        },
      });
    }
    await User.findByIdAndUpdate(IsUserRegistered._id, {
      lastLogin: Date.now(),
    });
    return res.status(200).json({
      message: "alright sign him in",
      user: {
        id: IsUserRegistered._id,
        name: IsUserRegistered.name,
        email: IsUserRegistered.email,
        role: IsUserRegistered.usertype,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "khh" });
  }
});

authRouter.post("/github_auth", async (req, res) => {
  try {
    const data = req.body;
    const IsUserRegistered = await User.findOne({ githubId: data.providerId });
    if (!IsUserRegistered) {
      // register them with githubproviderId if email in it already exist attach it to them
      const emailRegistered = await User.findOne({ email: data.email });
      if (!emailRegistered) {
        //normal creation
        const createdUser = await User.create({
          name: data.name,
          email: data.email,
          githubId: data.providerId,
        });
        await User.findByIdAndUpdate(createdUser._id, {
          lastLogin: Date.now(),
        });
        return res.status(201).json({
          message: "new signup successfull",
          user: {
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            role: createdUser.usertype,
          },
        });
      }
      //id name email role
      const updatedUser = await User.findOneAndUpdate(
        { email: data.email },
        { githubId: data.providerId }
      );
      await User.findByIdAndUpdate(updatedUser._id, { lastLogin: Date.now() });
      return res.status(201).json({
        message: "provider added successfull",
        user: {
          id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.usertype,
        },
      });
    }
    await User.findByIdAndUpdate(IsUserRegistered._id, {
      lastLogin: Date.now(),
    });
    return res.status(200).json({
      message: "alright sign him in",
      user: {
        id: IsUserRegistered._id,
        name: IsUserRegistered.name,
        email: IsUserRegistered.email,
        role: IsUserRegistered.usertype,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "khh" });
  }
});

authRouter.post("/refresh", (req, res) => {});
authRouter.post("/logout", (req, res) => {});

export { authRouter };
