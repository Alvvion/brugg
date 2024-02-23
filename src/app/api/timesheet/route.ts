import connectDB from "@/lib/db";
import TimesheetSchema from "@/models/TimesheetSchema";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    await connectDB();
    const { projectCode } = body;
    const existingProject = await TimesheetSchema.findOne({ projectCode });
    if (existingProject) {
      throw new Error("Timesheet already exists");
    }
    const newProject = new TimesheetSchema(body);
    await newProject.save();
    return new NextResponse(
      JSON.stringify({ status: 201, message: "Timesheet Created" }),
      { status: 201 }
    );
  } catch (err) {
    return new NextResponse(err as string, { status: 404 });
  }
};
