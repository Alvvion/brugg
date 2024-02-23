"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { decrypt, encrypt } from "./encypt";
import { FormFeild } from "@/components/projectForm/NewProjectForm";
import { BASE_URL } from "./env";
import { ProjectType } from "@/app/dashboard/page";
import { Payload } from "@/app/signup/page";
import { TimesheetFeild } from "@/components/projectForm/TimesheetForm";

export const login = async (formData: FormData) => {
  const userCred = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const {
      data: { user },
    } = await axios.post(`${BASE_URL}/api/users/login`, userCred);

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
  if (!sessionToken) return null;
  const { user } = await decrypt(sessionToken!);
  return user;
}

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/users`);
    return await data;
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

export async function addUser(payload: Payload) {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/users/signup`, payload);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export const signout = () => {
  cookies().delete("session");
};

export const getProjects = async (id: string): Promise<ProjectType[]> => {
  const { data } = await axios.post(`${BASE_URL}/api/project`, { _id: id });
  const projects = await data;
  return await projects;
};

export const getProject = async (projectCode: string) => {
  const { data } = await axios.post(`${BASE_URL}/api/project/get`, {
    projectCode,
  });
  return await data;
};

export const getUserById = async (userId: string) => {
  const { data } = await axios.post(`${BASE_URL}/api/users`, { _id: userId });
  return data;
};

export const getTimesheets = async (projectCode: string) => {
  const { data } = await axios.post(`${BASE_URL}/api/timesheet/get`, {
    projectCode,
  });
  return await data;
};

export async function addTimesheet(payload: TimesheetFeild) {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/timesheet`, payload);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
