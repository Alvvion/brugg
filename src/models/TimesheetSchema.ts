import { Document, model, models } from "mongoose";
import { Schema } from "mongoose";

interface Timesheet extends Document {
  projectCode: string;
  jointer: string;
  date: string;
  startTime: string;
  endTime: string;
  actions: string;
  complaints?: string;
  delay?: string;
  image?: string;
}

const timesheetSchema = new Schema<Timesheet>({
  projectCode: {
    type: String,
    required: true,
  },
  jointer: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  complaints: {
    type: String,
    required: false,
  },
  delay: {
    type: String,
    required: false,
  },
  actions: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

export default models.Sheet || model<Timesheet>("Sheet", timesheetSchema);
