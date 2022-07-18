import { Cards } from "@prisma/client";
import { deleteCredential } from "../repositories/deleteCredential";
import { getDataByCredentialId, getDataByUserId } from "../repositories/getData";
import checkOwnership from "../utils/checkOwnership";

export async function createCardServices(body : Omit<Cards, "id" | "userId">,userId: number) {
    
};

export async function getAllCardsServices(userId: number) {
    const result = await getDataByUserId(userId, "cards") as Cards[];
    if(!result){
        throw{
            status: 404,
            message: "This user hasn`t registered any cards yet!"
        }
    }
    return result;
};

export async function getCardByIdService(userId: number, noteId: number) {
    const result = await getDataByCredentialId(userId, "notes") as Cards;
    if(!result){
        throw{
            status: 404,
            message: "Could not find the card!"
        }
    }
    checkOwnership(userId, result);
    return result;
};

export async function deleteCardService(userId: number, noteId: number) {
    const result = await getDataByCredentialId(userId, "cards") as Cards;
    if(!result){
        throw{
            status: 404,
            message: "Could not find the note!"
        }
    };
    checkOwnership(userId, result);
    await deleteCredential(noteId,"cards");
    return;
};