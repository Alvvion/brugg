import connectDB from "@/lib/db";
import User from "@/models/UserSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const collectionExists = await User.exists({});
    if (!collectionExists) {
      await User.createCollection();
    }
    const data = await User.find();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { _id } = await req.json();
    await connectDB();
    const user = await User.findOne({ _id });
    if (!user) {
      throw new Error("No user exists");
    } else {
      const { _id, firstName, lastName, email, role, image } = user;
      return new NextResponse(
        JSON.stringify({ _id, firstName, lastName, email, role, image }),
        { status: 200 }
      );
    }
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
