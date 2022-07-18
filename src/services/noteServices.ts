import { Notes } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { createNote } from "../repositories/createNote";
import { getDataByCredentialId, getDataByUserId } from "../repositories/getData";
import checkOwnership from "../utils/checkOwnership";

export async function createNoteService(body: Omit<Notes, "id" | "userId"> , userId: number) {
    await checkIfTitleAlreadyInUse(body.title, userId, "notes");
    return await createNote(body, userId);
};

export async function getAllNotesServices(userId: number) {
    const result = await getDataByUserId(userId, "notes") as Notes[];
    if(!result){
        throw{
            status: 404,
            message: "This user hasn`t registered any notes yet!"
        }
    }
    return result;
}; 

export async function getNoteByIdService(userId: number, noteId: number) {
    const result = await getDataByCredentialId(userId, "notes") as Notes;
    if(!result){
        throw{
            status: 404,
            message: "Could not find the note!"
        }
    }
    checkOwnership(userId, result);
    return result;
}