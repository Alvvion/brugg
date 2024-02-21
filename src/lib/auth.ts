"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { decrypt, encrypt } from "./encypt";
import { SignupFeild } from "@/app/signup/page";
import { UserSessionType } from "@/app/dashboard/layout";

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
    const { email }: { email: string } = data.user;

    const expires = new Date(Date.now() + 60000 * 30);
    const session = await encrypt({
      email,
      expires,
    });
    cookies().set("session", session, { expires, httpOnly: true });

    return true;
  } catch (error) {
    console.log(error);
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

export async function getUsers() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/users/signup");
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  try {
    const sessionToken = cookies().get("session")?.value;
    const { email } = await decrypt(sessionToken!);
    const { data } = await axios.post("http://localhost:3000/api/users", {
      email,
    });
    return data;
  } catch (error) {
    console.warn(error);
  }
}
