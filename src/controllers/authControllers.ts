import { Request, Response } from "express";
import { signUpService } from "../services/authServices";

export async function signUp(req: Request, res: Response) {
    await signUpService(req.body);
    res.sendStatus(201);
};