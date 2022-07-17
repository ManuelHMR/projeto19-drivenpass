import { Request, Response } from "express";
import { signInService, signUpService } from "../services/authServices";

export async function signUp(req: Request, res: Response) {
    await signUpService(req.body);
    res.sendStatus(201);
};

export async function signIn(req: Request, res: Response) {
    const token = await signInService(req.body);
    res.send(token);
};