import { genSalt, hash, compare } from "bcrypt-ts";
import { Secret, sign, verify } from "jsonwebtoken";
import { SignJWT, jwtVerify } from "jose";
import { JWT_SECRET } from "./env";

const secret = process.env.JWT_SECRET || JWT_SECRET;
const key = new TextEncoder().encode(secret);

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

export const comparePassword = async (password: string, hash: string) => {
  try {
    return await compare(password, hash);
  } catch (err) {
    console.log(err);
  }
};

export const encrypt = async (payload: any) =>
  await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 minutes")
    .sign(key);

export const decrypt = async (session: string): Promise<any> => {
  const { payload } = await jwtVerify(session, key, { algorithms: ["HS256"] });
  return payload;
};

export const verifyToken = async (session: string): Promise<any> => {
  try {
    await jwtVerify(session, key, { algorithms: ["HS256"] });
    return true;
  } catch (err) {
    return false;
  }
};
