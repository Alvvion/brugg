import { sign, verify } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.PASSWORD || "";

export const generateToken = (user: string) => {
  const MAX_AGE = 60 * 60;
  const token = sign({ user }, secret, {
    expiresIn: "1h",
  });
  const serialized = serialize("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 10,
    path: "/",
  });
  return { serialized, token };
};
