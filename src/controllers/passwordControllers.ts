import { Request, Response } from "express";
import { credentialsServices } from "../services/credentialServices";

export async function credentialController(req: Request, res: Response) {
    const { userId } = res.locals; 
    await credentialsServices(req.body, parseInt(userId));
    res.sendStatus(201);
};