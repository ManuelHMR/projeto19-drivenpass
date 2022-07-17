import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/validateSchema";
import signSchema from "../schemas/signSchema";
const authRouters = Router();

authRouters.post("/signup", validateSchema(signSchema), signUp);
authRouters.post("/signin", validateSchema(signSchema), signIn);

export default authRouters;