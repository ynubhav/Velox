import mongoose from "mongoose";

const APIKeySchema = new mongoose.Schema({
  projectId: { type: String, required: true },
  key: { type: String, required: true, unique: true }, // should be hashed
  label: { type: String }, // e.g. "Production", "Testing"
  keystatus: {
    type: String,
    enum: ["active", "disabled", "deleted"],
    default: "active",
  },
  lastUsed: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const APIKey = mongoose.model("APIKey", APIKeySchema);

export { APIKey };
