import connectDB from "@/lib/db";
import Project from "@/models/ProjectSchema";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { projectCode } = await req.json();
    await connectDB();
    const project = await Project.findOne({ projectCode });
    if (!project) {
      throw new Error("No user exists");
    } else {
      return new NextResponse(JSON.stringify(project), { status: 200 });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
