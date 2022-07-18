import { Request, Response } from "express";
import { createNoteService, getAllNotesServices } from "../services/noteServices";

export async function createNote(req: Request, res: Response) {
    const { userId } = res.locals;
    await createNoteService(req.body, parseInt(userId));
    return res.sendStatus(201);
}

export async function getNotesController(req: Request, res: Response) {
    const { userId } = res.locals;
    const result = await getAllNotesServices(parseInt(userId));
    return res.send(result)
};

export async function getNoteByIdController(req: Request, res: Response) {
    // return res.send(result)
};

export async function deleteNoteController(req: Request, res: Response) {
    
    return res.sendStatus(200);
};