import { Notes } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { createNote } from "../repositories/createNote";
import { getDataByUserId } from "../repositories/getData";

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