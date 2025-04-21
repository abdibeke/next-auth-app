import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-auth-app",
    });

    console.log("✅ MongoDB connected");
    initialized = true;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
