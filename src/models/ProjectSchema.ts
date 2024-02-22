import { Document, Schema, model, models } from "mongoose";
import UserSchema from "./UserSchema";
import type { User } from "./UserSchema";

interface Project extends Document {
  projectName: string;
  projectCode: string;
  startDate: string;
  deadline: string;
  location: string;
  issuedBy: {
    _id: string;
    email: string;
    role: string;
  };
  jointers: User["_id"][];
}

const IssuedBySchema = new Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

const projectSchema = new Schema<Project>({
  projectName: {
    type: String,
    required: true,
  },
  projectCode: {
    type: String,
    required: true,
    unique: true,
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
  issuedBy: {
    type: IssuedBySchema,
    required: true,
  },
  jointers: [
    {
      _id: Schema.Types.ObjectId,
    },
  ],
});

export default models.projects || model<Project>("projects", projectSchema);
