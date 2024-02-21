"use server";

import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { decrypt, encrypt } from "./encypt";
import { Payload } from "@/app/signup/page";
import { FormFeild } from "@/components/projectForm/NewProjectForm";
import { BASE_URL } from "./env";
import { ProjectType } from "@/app/dashboard/page";

export const login = async (formData: FormData) => {
  const userCred = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const { data } = await axios.post(`${BASE_URL}/api/users/login`, userCred);
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

export async function getUsers() {
  try {
    await axios.get(`${BASE_URL}/api/users/signup`);
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  try {
    const sessionToken = cookies().get("session")?.value;
    const { email } = await decrypt(sessionToken!);
    const { data } = await axios.post(`${BASE_URL}/api/users`, {
      email,
    });
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function addProject(payload: FormFeild) {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/project`, payload);
  } catch (error) {
    console.log(error);
  }
}

export const signout = () => {
  cookies().delete("session");
};

export const getProject = async (): Promise<ProjectType[]> => {
  const data = await fetch(`${BASE_URL}/api/project`, {
    method: "GET",
    cache: "no-store",
  });
  const projects = await data.json();
  return projects;
};
