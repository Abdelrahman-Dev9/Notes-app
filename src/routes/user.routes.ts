import { Router, Request, Response } from "express";
import { createNote } from "../controllers/CreateNote.controllers";
import { getAllNotes } from "../controllers/GetAllNotes.controllers";
import { getOneNote } from "../controllers/GetNoteById.controllers";
import { deleteNote } from "../controllers/DeleteNote.controllers";

const router = Router();

router.post("/createNote", createNote);
router.get("/getAllNotes", getAllNotes);
router.get("/getOneNote/:id", getOneNote);
router.delete("/deleteNote/:id", deleteNote);
export default router;
