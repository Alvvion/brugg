import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Users from "@/models/UserSchema";
import { comparePassword } from "@/lib/encypt";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    await connectDB();
    const { email, password } = body;
    const user = await Users.findOne({ email });
    if (!user) {
      throw new Error("Email doesn't exist. Please sign in and try again");
    }
    if (await comparePassword(password, user.password)) {
      return new NextResponse(
        JSON.stringify({
          message: "Authenticated",
          user: {
            email: user.email,
          },
        }),
        {
          status: 200,
        }
      );
    } else {
      console.log("Wrong password");
      throw new Error("Password doesn't match");
    }
  } catch (err) {
    return new NextResponse(err as string, { status: 404 });
  }
};

// export const GET = async () => {
//   const cookieStore = cookies();
//   const token = cookieStore.get("OutSiteJWT");

//   if (!token) {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//   }
//   const secret = process.env.PASSWORD || "";
//   try {
//     const user = verify(token.value, secret);
//     return new NextResponse(JSON.stringify(user), { status: 200 });
//   } catch (err) {
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 400 }
//     );
//   }
// };
