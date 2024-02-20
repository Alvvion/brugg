import { Document, Schema, model, models } from "mongoose";
import UserSchema from "./UserSchema";
import type { User } from "./UserSchema";

interface Project extends Document {
  projectName: string;
  projectCode: string;
  startDate: string;
  deadline: string;
  location: string;
  jointers: User["_id"][];
}

const projectSchema = new Schema<Project>({
  projectName: {
    type: String,
    required: true,
  },
  projectCode: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jointers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});

export default models.Projects || model<Project>("Projects", projectSchema);
