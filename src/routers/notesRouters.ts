import { Router } from "express";
import { createNote } from "../controllers/noteControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import noteSchema from "../schemas/noteSchema";
const noteRouters = Router();

noteRouters.post("/note", validateSchema(noteSchema), validateToken, createNote);


export default noteRouters;