import { TimesheetFeild } from "@/components/projectForm/TimesheetForm";
import connectDB from "@/lib/db";
import TimesheetSchema from "@/models/TimesheetSchema";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDB();
    const { projectCode } = await req.json();

    const timesheets: TimesheetFeild[] | null = await TimesheetSchema.find({
      projectCode,
    });

    return new NextResponse(JSON.stringify(timesheets!), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
