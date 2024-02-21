import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import Project from "@/models/ProjectSchema";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
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

export const GET = async () => {
  try {
    await connectDB();
    const collectionExists = await Project.exists({});

    // If the collection doesn't exist, create an empty collection
    if (!collectionExists) {
      await Project.createCollection();
    }
    const data = await Project.find();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
