import { Credentials } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { createCredential } from "../repositories/createCredential";
import { deleteCredential } from "../repositories/deleteCredential";
import { getDataByCredentialId, getDataByUserId } from "../repositories/getData";
import checkOwnership from "../utils/checkOwnership";
import decryptData from "../utils/decrypt";
import encryptData from "../utils/encrypt";


export async function createCredentialsServices(body : Omit<Credentials, "id"|"userId">, userId : number) {
    await checkIfTitleAlreadyInUse(body.title, userId, "credentials");
    const passwordHash = encryptData(body.password);
    body = {...body, password: passwordHash};
    return await createCredential(body, userId);
};

export async function getCredentialsServices(id: number) {
    const result = await getDataByUserId(id, "credentials") as Credentials[];
    if(!result){
        throw{
            status: 404,
            message: "This user hasn`t registered any credential yet!"
        }
    }
    result.map(credential => {
        credential.password = decryptData(credential.password)
    })
    return result;
};

export async function getCrendentialByIdServices(userId: number, credentialId: number) {
    const result = await getDataByCredentialId(credentialId, "credentials") as Credentials;
    if(!result){
        throw{
            status: 404,
            message: "Credential not found!"
        }
    };
    checkOwnership(userId, result);
    const decrypted = {...result, password: decryptData(result.password)}
    return decrypted;
};

export async function deleteCredentialService(userId: number, credentialId: number) {
    const result = await getDataByCredentialId(credentialId, "credentials") as Credentials;
    if(!result){
        throw{
            status: 404,
            message: "Credential not found!"
        }
    };
    checkOwnership(userId, result);
    await deleteCredential(credentialId, "credentials");
    return 
}