import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import Project from "@/models/ProjectSchema";
import { FormFeild } from "@/components/projectForm/NewProjectForm";

export const POST = async (req: Request) => {
  try {
    await connectDB();
    const body = await req.json();

    const projects: FormFeild[] = await Project.find();
    projects.filter(
      (project) =>
        project.issuedBy._id === body._id ||
        project.jointers.some((jointer) => jointer._id === body._id)
    );
    return new NextResponse(JSON.stringify(projects), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
