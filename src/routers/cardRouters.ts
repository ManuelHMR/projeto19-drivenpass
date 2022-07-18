import { Router } from "express";
import { createCArdController, deleteCardController, getAllCardsCOntroller, getCardByIdController } from "../controllers/cardControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import cardSchema from "../schemas/cardSchema";
const cardRouter = Router();

cardRouter.post("/card", validateSchema(cardSchema), validateToken, createCArdController);
cardRouter.get("/cards", validateToken, getAllCardsCOntroller);
cardRouter.get("/card/:id", validateToken, getCardByIdController);
cardRouter.delete("/card/:id", validateToken, deleteCardController);

export default cardRouter;