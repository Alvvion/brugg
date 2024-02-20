import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Users from "@/models/UserSchema";
import { hashPassword } from "@/lib/encypt";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    await connectDB();
    const { email, password } = body;
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    body.password = hashedPassword;
    const newUser = new Users(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ status: 201, message: "User created", user: newUser }),
      { status: 201 }
    );
  } catch (err) {
    return new NextResponse(err as string, { status: 500 });
  }
};
