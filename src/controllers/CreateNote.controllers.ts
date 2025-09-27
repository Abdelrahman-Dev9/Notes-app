import { Request, Response } from "express";
import { NoteModel } from "../models/Note";

export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const note = new NoteModel({ title, description });
    await note.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};
