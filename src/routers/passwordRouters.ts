import { Router } from "express";
import { credentialController } from "../controllers/passwordControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import credentialSchema from "../schemas/credentialSchema";
const passwordRouters = Router();

passwordRouters.post("/credentials", validateSchema(credentialSchema), validateToken, credentialController);

export default passwordRouters;