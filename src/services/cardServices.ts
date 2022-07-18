import { Cards } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { createCard } from "../repositories/createCard";
import { deleteCredential } from "../repositories/deleteCredential";
import { getDataByCredentialId, getDataByUserId } from "../repositories/getData";
import checkOwnership from "../utils/checkOwnership";
import decryptData from "../utils/decrypt";
import encryptData from "../utils/encrypt";

export async function createCardServices(body : Omit<Cards, "id" | "userId">,userId: number) {
    await checkIfTitleAlreadyInUse(body.title, userId, "cards");
    const passHash = encryptData(body.password);
    const cvcHash = encryptData(body.cvc);
    return await createCard(body, userId, passHash, cvcHash);
};

export async function getAllCardsServices(userId: number) {
    const result = await getDataByUserId(userId, "cards") as Cards[];
    if(!result){
        throw{
            status: 404,
            message: "This user hasn`t registered any cards yet!"
        }
    }
    result.map(credential => {
        credential.password = decryptData(credential.password)
        credential.cvc = decryptData(credential.cvc)
    })
    return result;
};

export async function getCardByIdService(userId: number, cardId: number) {
    const result = await getDataByCredentialId(cardId, "cards") as Cards;
    if(!result){
        throw{
            status: 404,
            message: "Could not find the card!"
        }
    }
    checkOwnership(userId, result);
    const decrypted = {...result, password: decryptData(result.password), cvc: decryptData(result.cvc)}
    return decrypted;
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