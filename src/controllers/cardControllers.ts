import { Request, Response } from "express";
import { createCardServices, deleteCardService, getAllCardsServices, getCardByIdService } from "../services/cardServices";

export async function createCArdController(req: Request, res: Response){
    const { userId } = res.locals;
    await createCardServices(req.body, parseInt(userId));
    return res.sendStatus(201);
};

export async function getAllCardsCOntroller(req: Request, res: Response){
    const { userId } = res.locals;
    const result = await getAllCardsServices(parseInt(userId));
    return res.send(result);
};

export async function getCardByIdController(req: Request, res: Response){
    const { userId } = res.locals;
    const cardId = req.params.id;    
    const result = await getCardByIdService(parseInt(userId), parseInt(cardId));
    return res.send(result);
};

export async function deleteCardController(req: Request, res: Response){
    const { userId } = res.locals;
    const cardId = req.params.id;
    await deleteCardService(parseInt(userId), parseInt(cardId));
    return res.sendStatus(200);
};