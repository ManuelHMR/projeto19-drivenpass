import { Notes } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { createNote } from "../repositories/createNote";

export async function createNoteService(body: Omit<Notes, "id" | "userId"> , userId: number) {
    await checkIfTitleAlreadyInUse(body.title, userId, "notes");
    return await createNote(body, userId);
};