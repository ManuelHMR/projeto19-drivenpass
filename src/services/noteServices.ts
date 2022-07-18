import { Notes } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { deleteData } from "../repositories/deleteData";
import { getDataByCredentialId, getDataByUserId } from "../repositories/getData";
import { insertData } from "../repositories/insertData";
import checkOwnership from "../utils/checkOwnership";

export async function createNoteService(body: Omit<Notes, "id" | "userId"> , userId: number) {
    await checkIfTitleAlreadyInUse(body.title, userId, "notes");
    const data = {...body, userId}
    return await insertData(data, "notes");
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
    const result = await getDataByCredentialId(noteId, "notes") as Notes;
    if(!result){
        throw{
            status: 404,
            message: "Could not find the note!"
        }
    }
    checkOwnership(userId, result);
    return result;
};

export async function deleteNoteService(userId: number, noteId: number){
    const result = await getDataByCredentialId(userId, "notes") as Notes;
    if(!result){
        throw{
            status: 404,
            message: "Could not find the note!"
        }
    };
    checkOwnership(userId, result);
    await deleteData(noteId,"notes");
    return;
};