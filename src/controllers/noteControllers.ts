import { Request, Response } from "express";
import { createNoteService, getAllNotesServices, getNoteByIdService } from "../services/noteServices";

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
    const { userId } = res.locals;
    const noteId = req.params.id;
    const result = await getNoteByIdService(parseInt(userId), parseInt(noteId));
    return res.send(result)
};

export async function deleteNoteController(req: Request, res: Response) {
    
    return res.sendStatus(200);
};