import mongoose, { Document, model } from "mongoose";

export interface INote extends Document {
  title: string;
  description: string;
}

const noteModle = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const NoteModel = model<INote>("Note", noteModle);
