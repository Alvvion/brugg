import User from "@/models/UserSchema";
import connectDB from "./db";
import { cookies } from "next/headers";
import { decrypt } from "./encypt";

const getUser = async () => {
  try {
    const sessionToken = cookies().get("session")?.value;
    const email = await decrypt(sessionToken!);
    await connectDB();
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      throw new Error("No user exists");
    } else {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUser;
