import Project from "@/models/ProjectSchema";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose, { ObjectId } from "mongoose";
import { FormFeild } from "@/components/projectForm/NewProjectForm";

export const POST = async (req: Request) => {
  try {
    const body: FormFeild = await req.json();
    await connectDB();
    const { projectCode } = body;
    const existingProject = await Project.findOne({ projectCode });
    if (existingProject) {
      throw new Error("Project should be unique");
    }
    const newProject = new Project(body);
    await newProject.save();
    return new NextResponse(
      JSON.stringify({ status: 201, message: "Project Created" }),
      { status: 201 }
    );
  } catch (err) {
    return new NextResponse(err as string, { status: 404 });
  }
};
