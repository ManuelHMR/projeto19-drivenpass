import { Cards } from "@prisma/client";
import { getDataByUserId } from "../repositories/getData";

export async function createCardServices(body : Omit<Cards, "id" | "userId">,userId: number) {
    
};

export async function getAllCardsServices(userId: number) {
    const result = await getDataByUserId(userId, "cards") as Cards[];
    if(!result){
        throw{
            status: 404,
            message: "This user hasn`t registered any notes yet!"
        }
    }
    return result;
};

export async function getCardByIdService(userId: number, noteId: number) {
    
};

export async function deleteCardService(userId: number, noteId: number) {
    
};