import mongoose from "mongoose";
import { MONGO_URL } from "./env";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL || MONGO_URL, {
      dbName: "Users",
      bufferCommands: false,
    });
    console.log("Connected");
  } catch (err) {
    let message;
    if (err instanceof Error) {
      message = err.message;
    } else {
      message = "";
    }
    throw new Error("Couldn't connect to Mongo " + message);
  }
};

export default connectDB;
