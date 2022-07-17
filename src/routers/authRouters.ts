import { Router } from "express";
import { signUp } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/validateSchema";
import signSchema from "../schemas/signSchema";
const authRouters = Router();

authRouters.post("/signup", validateSchema(signSchema), signUp);

export default authRouters;