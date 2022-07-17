import { Credentials } from "@prisma/client";
import { checkIfTitleAlreadyInUse } from "../repositories/checkIfTitleAlreadyInUse";
import { createCredential } from "../repositories/createCredential";
import encryptData from "../utils/encrypt";


export async function credentialsServices(body : Omit<Credentials, "id"|"userId">, userId : number) {
    await checkIfTitleAlreadyInUse(body.title, userId);
    const passwordHash = encryptData(body.password);
    body = {...body, password: passwordHash};
    return await createCredential(body, userId);
};