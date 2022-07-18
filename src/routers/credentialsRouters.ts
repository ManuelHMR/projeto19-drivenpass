import { Router } from "express";
import { credentialController, deleteCredential, getCredentialByIdController, getCredentialsController } from "../controllers/credentialsControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import credentialSchema from "../schemas/credentialSchema";
const credentialsRouters = Router();

credentialsRouters.post("/credentials", validateSchema(credentialSchema), validateToken, credentialController);
credentialsRouters.get("/credential/:id", validateToken, getCredentialByIdController);
credentialsRouters.get("/credentials", validateToken, getCredentialsController);
credentialsRouters.delete("/credential/:id", validateToken, deleteCredential);

export default credentialsRouters;