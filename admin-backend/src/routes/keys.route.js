import express from "express";
import authUser from "../middlewares/authUser.middleware.js";
import { generateApiKey } from "../utils/generateApiKey.js";
import { APIKey } from "../models/Apikey.model.js";
import { APIProject } from "../models/Project.model.js";

const apikeyRouter = express.Router();

//generate a new apikey
apikeyRouter.post("/generate/:projectId", authUser, async (req, res) => {
  try {
    const userId = req.user._id;
    const projectId = req.params.projectId;
    const { label } = req.body; //label for the key
    const isProject = await APIProject.findOne({ projectId });
    if (!isProject) {
      return res.status(404).json({ message: "Project Not Found" });
    }
    const isusedlabel = await APIKey.findOne({ label });
    if (isusedlabel) {
      return res.status(403).json({ message: "Label already in use" });
    }
    const key = generateApiKey(userId, projectId);
    const createApikey = await APIKey.create({ key, projectId, label });
    res.status(201).json({
      message: "Key Generated",
      key_Info: {
        apikey: key,
        projectId: createApikey.projectId,
        label: createApikey.label,
        keystatus: createApikey.keystatus,
        lastused: createApikey.lastUsed,
        createdAt: createApikey.createdAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

//get apikeys of a project with labels
apikeyRouter.get("/project/:projectId", authUser, async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const isProject = await APIProject.findOne({ projectId });
    if (!isProject) {
      return res.status(404).json({ message: "Project Not Found" });
    }
    const keys = await APIKey.find({ projectId, keystatus: { $ne: "deleted" } });
    res
      .status(200)
      .json({ message: `api keys for the projectId ${projectId}`, keys: keys });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

//delete an apikey
apikeyRouter.delete("/:keyId", authUser, async (req, res) => {
  try {
    const { keyId } = req.params;
    const findkey = await APIKey.findOne({ _id: keyId });
    if (!findkey || findkey.keystatus == "deleted") {
      return res.status(404).json({ message: "Key not found" });
    }
    const deletekey = await APIKey.findByIdAndUpdate(keyId, {
      keystatus: "deleted",
    });
    res.status(200).json({ message: "KEY DELETE" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

//enable / disable a apikey
apikeyRouter.patch("/:keyId/toggle", authUser, async (req, res) => {
  try {
    const { keyId } = req.params;
    let currstatus = "";
    const findkey = await APIKey.findOne({ _id: keyId });
    if (!findkey || findkey.keystatus == "deleted") {
      return res.status(404).json({ message: "Key not found" });
    }
    if (findkey.keystatus === "disabled") {
      const togglekey = await APIKey.findByIdAndUpdate(keyId, {
        keystatus: "active",
      });
      currstatus = "active";
    }
    if (findkey.keystatus == "active") {
      const togglekey = await APIKey.findByIdAndUpdate(keyId, {
        keystatus: "disabled",
      });
      currstatus = "disabled";
    }
    res
      .status(200)
      .json({ message: `${findkey.label} status changed to ${currstatus}`, key_Status: currstatus });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

apikeyRouter.get("/:keyId/usage", authUser, async (req, res) => {
  try {
    const { keyId } = req.params;
    const findkey = await APIKey.findOne({ _id: keyId });
    if (!findkey || findkey.keystatus == "deleted") {
      return res.status(404).json({ message: "Key not found" });
    }
    const usageLogs = await RequestLog.find({ apiKey: findkey.key }).sort({
      timestamp: -1,
    });
    //modify for better output
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
}); //get usage stats for that key

export { apikeyRouter };
