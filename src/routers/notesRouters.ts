import { Router } from "express";
import { createNote, deleteNoteController, getNoteByIdController, getNotesController } from "../controllers/noteControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import noteSchema from "../schemas/noteSchema";
const noteRouters = Router();

noteRouters.post("/note", validateSchema(noteSchema), validateToken, createNote);
noteRouters.get("/notes", validateToken, getNotesController);
noteRouters.get("/note/:id", validateToken, getNoteByIdController);
noteRouters.delete("/note/:id", validateToken, deleteNoteController);

export default noteRouters;