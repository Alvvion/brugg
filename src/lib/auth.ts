"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { decrypt, encrypt } from "./encypt";
import { FormFeild } from "@/components/projectForm/NewProjectForm";
import { BASE_URL } from "./env";
import { ProjectType } from "@/app/dashboard/page";

export const login = async (formData: FormData) => {
  const userCred = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const {
      data: { user },
    } = await axios.post(`${BASE_URL}/api/users/login`, userCred);
    console.log(user);

    const expires = new Date(Date.now() + 60000 * 30);
    const session = await encrypt({
      user,
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
  const sessionToken = cookies().get("session")?.value;
  const { user } = await decrypt(sessionToken!);
  return user;
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
    const { user } = await decrypt(sessionToken!);
    const { data } = await axios.post(`${BASE_URL}/api/users`, user);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function addProject(payload: FormFeild) {
  try {
    const sessionToken = cookies().get("session")?.value;
    const { user } = await decrypt(sessionToken!);
    payload.issuedBy = user;
    await axios.post(`${BASE_URL}/api/project/add`, payload);
  } catch (error) {
    console.log(error);
  }
}

export const signout = () => {
  cookies().delete("session");
};

export const getProject = async (id: string): Promise<ProjectType[]> => {
  const { data } = await axios.post(`${BASE_URL}/api/project`, { _id: id });
  const projects = await data;
  return projects;
};
