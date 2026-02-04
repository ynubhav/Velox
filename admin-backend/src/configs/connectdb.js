import mongoose from "mongoose";
import { config } from "dotenv"
import logger from "node-color-log";

config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    logger.color('green').log("✅ connected to database");
  } catch (err) {
    logger.color('red').log("could not establish a connection:", err.message);
  }
};

export { connectdb }