import { Credentials } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { createCredential } from "../repositories/createCredential";
import { getCredentialsByUserId } from "../repositories/getCredentials";
import decryptData from "../utils/decrypt";
import encryptData from "../utils/encrypt";


export async function createCredentialsServices(body : Omit<Credentials, "id"|"userId">, userId : number) {
    await checkIfTitleAlreadyInUse(body.title, userId);
    const passwordHash = encryptData(body.password);
    body = {...body, password: passwordHash};
    return await createCredential(body, userId);
};

export async function getCredentialsServices(id: number) {
    const result = await getCredentialsByUserId(id);
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
    
};