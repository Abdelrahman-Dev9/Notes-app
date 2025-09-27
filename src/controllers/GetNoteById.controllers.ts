import { Request, Response } from "express";
import { NoteModel } from "../models/Note";

export const getOneNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await NoteModel.findById(id);
    if (!note) return res.status(500).json({ message: "note not found" });
    res.status(200).json(note);
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};
