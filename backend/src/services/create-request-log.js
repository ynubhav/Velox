import { RequestLog } from "../models/Apilogs.model.js";

export const createRequestLog = async (RequestInfo) => {
  try {
    await RequestLog.create({...RequestInfo});
  } catch (error) {
    console.error("Error creating request log:", error);
  }
};
