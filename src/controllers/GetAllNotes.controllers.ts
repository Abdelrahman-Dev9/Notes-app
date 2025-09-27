import { Request, Response } from "express";
import { NoteModel } from "../models/Note";

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
