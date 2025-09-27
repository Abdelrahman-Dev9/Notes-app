import { Router, Request, Response } from "express";
import { createNote } from "../controllers/CreateNote.controllers";

const router = Router();

router.post("/createNote", createNote);
export default router;
