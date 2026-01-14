import express from "express";
import { User } from "../models/User.model.js";
import { generateTokens } from "../utils/createJWT.js";
import { hashpassword, verifyhash } from "../utils/bcrypt-hasher.js";
import authUser from "../middlewares/authUser.middleware.js";

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
    return res
      .status(500)
      .json({ message: "Could not Register User", error: err.message });
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
      const { token, reftoken } = generateTokens(userId);
      await User.findByIdAndUpdate(userId, {
        refreshToken: reftoken,
        lastLogin: Date.now(),
      });
      res.status(200).json({
        message: "Login Succesfull",
        user: {
          id: userId,
          name: IsUserRegistered.name,
          email: IsUserRegistered.email,
          usertype: IsUserRegistered.usertype,
        },
        token,
        refreshToken: reftoken,
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
        const { token, reftoken } = generateTokens(createdUser._id);
        await User.findByIdAndUpdate(createdUser._id, {
          refreshToken: reftoken,
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
          token,
          refreshToken: reftoken,
        });
      }
      //id name email role
      const updatedUser = await User.findOneAndUpdate(
        { email: data.email },
        { googleId: data.providerId }
      );
      const { token, reftoken } = generateTokens(updatedUser._id);
      await User.findByIdAndUpdate(updatedUser._id, {
        refreshToken: reftoken,
        lastLogin: Date.now(),
      });
      return res.status(201).json({
        message: "provider added successfull",
        user: {
          id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.usertype,
        },
        token,
        refreshToken: reftoken,
      });
    }
    const { token, reftoken } = generateTokens(IsUserRegistered._id);
    await User.findByIdAndUpdate(IsUserRegistered._id, {
      refreshToken: reftoken,
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
      token,
      refreshToken: reftoken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "khh" });
  }
});

authRouter.post("/github_auth", async (req, res) => {
  //checks the user exist or not if not creates user
  try {
    const data = req.body;
    const IsUserRegistered = await User.findOne({ githubId: data.providerId });
    if (!IsUserRegistered) {
      // register them with github providerId if email in it already exist attach it to them
      const emailRegistered = await User.findOne({ email: data.email });
      if (!emailRegistered) {
        //normal creation
        const createdUser = await User.create({
          name: data.name,
          email: data.email,
          githubId: data.providerId,
        });
        const { token, reftoken } = generateTokens(createdUser._id);
        await User.findByIdAndUpdate(createdUser._id, {
          refreshToken: reftoken,
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
          token,
          refreshToken: reftoken,
        });
      }
      //id name email role
      const updatedUser = await User.findOneAndUpdate(
        { email: data.email },
        { githubId: data.providerId }
      );
      const { token, reftoken } = generateTokens(updatedUser._id);
      await User.findByIdAndUpdate(updatedUser._id, {
        refreshToken: reftoken,
        lastLogin: Date.now(),
      });
      return res.status(201).json({
        message: "provider added successfull",
        user: {
          id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.usertype,
        },
        token,
        refreshToken: reftoken,
      });
    }
    const { token, reftoken } = generateTokens(IsUserRegistered._id);
    console.log(token, reftoken);
    await User.findByIdAndUpdate(IsUserRegistered._id, {
      refreshToken: reftoken,
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
      token: token,
      refreshToken: reftoken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "khh" });
  }
});

authRouter.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;
  const { userId } = returnRefTokenid(refreshToken);
  const IsvalidUser = await User.findOne({ _id: userId });
  if (!IsvalidUser) return res.status(402).json({ message: "Not a user" });
  const { token, reftoken } = generateTokens(userId);
  return res.status(200).json({
    message: "success",
    user: {
      id: IsvalidUser._id,
      name: IsvalidUser.name,
      email: IsvalidUser.email,
      role: IsvalidUser.usertype,
    },
    token,
    refreshToken: reftoken,
  });
});

authRouter.post("/logout", authUser, async (req, res) => {
  // validate user
  try {
    const userId = req.user._id;
    const Invalidatetoken = await User.findOneAndUpdate(
      { _id: userId },
      { refreshToken: null }
    );
    if (!Invalidatetoken)
      return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});

export { authRouter };
