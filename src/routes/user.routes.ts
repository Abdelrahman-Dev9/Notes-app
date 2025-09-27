import { Router, Request, Response } from "express";
import { createNote } from "../controllers/CreateNote.controllers";
import { getAllNotes } from "../controllers/GetAllNotes.controllers";

const router = Router();

router.post("/createNote", createNote);
router.get("/getAllNotes", getAllNotes);
export default router;
