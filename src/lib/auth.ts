"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { encrypt } from "./encypt";
import { SignupFeild } from "@/app/signup/page";

export const login = async (formData: FormData) => {
  const userCred = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/users/login",
      userCred
    );
    const user = data.user;
    const expires = new Date(Date.now() + 60000 * 30);
    const session = await encrypt({ user, expires });
    cookies().set("session", session, { expires, httpOnly: true });
    return true;
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
    return false;
  }
};

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return session;
}

export async function createUser(payload: SignupFeild) {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/users/signup",
      payload
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
