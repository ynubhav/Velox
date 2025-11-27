import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectdb } from "./configs/connectdb.js";
import { appRouter } from "./routes/index.js";
import { gatewayRouter } from "./routes/gateway.route.js";
import create_routes_cache from "./cache/create-routes-cache.js";

config();

const app = express();

await connectdb();
await create_routes_cache();

app.use(cors());
app.use(express.json());
app.use("/api", appRouter); // this backend's apis
app.use("/r", gatewayRouter); // gateway for apis

app.use(async (req, res) => {
  res.json({ message: "hello from api server" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`✅ server running on port ${process.env.SERVER_PORT}`);
});
