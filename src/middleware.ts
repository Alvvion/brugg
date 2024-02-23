import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/encypt";

export async function middleware(req: NextRequest) {
  const session = cookies().get("session")?.value;
  const isToken = await verifyToken(session!);
  if (req.nextUrl.pathname.includes("/dashboard")) {
    if (!isToken) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (req.nextUrl.pathname === "/") {
    if (isToken) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }
}
