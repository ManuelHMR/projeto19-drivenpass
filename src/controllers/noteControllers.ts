import { Request, Response } from "express";
import { createNoteService } from "../services/noteServices";

export async function createNote(req: Request, res: Response) {
    const { userId } = res.locals;
    await createNoteService(req.body, parseInt(userId));
    return res.sendStatus(201);
}