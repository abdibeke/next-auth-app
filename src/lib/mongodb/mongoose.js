import mongoose from "mongoose";

let initialized = false;
export const connect = async () => {
  mongoose.set("strictQuery", false);
  if (initialized) return;
  console.log("MongoDB already connected");
  return;
};
try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "next-auth-app",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  initialized = true;
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("MongoDB connection error:", error);
}
