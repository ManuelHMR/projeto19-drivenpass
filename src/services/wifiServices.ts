import { Wifis } from "@prisma/client";
import { deleteData } from "../repositories/deleteData";
import { getDataByCredentialId, getDataByUserId } from "../repositories/getData";
import { insertData } from "../repositories/insertData";
import checkOwnership from "../utils/checkOwnership";
import decryptData from "../utils/decrypt";
import encryptData from "../utils/encrypt";

export async function postWifiServices(body : Omit<Wifis, "id" | "userId">, userId: number ) {
    const data = {...body, userId, password: encryptData(body.password)};
    return await insertData(data, "wifis");
};

export async function getAllWifiService(userId : number) {
    const result = await getDataByUserId(userId, "wifis") as Wifis[];
    if(!result){
        throw{
            status: 404,
            message: "This user hasn`t registered any wifis yet!"
        }
    }
    result.map(credential => {
        credential.password = decryptData(credential.password)
    })
    return result;
};

export async function getWifiByIdService(userId : number, wifiId : number) {
    const result = await getDataByCredentialId(wifiId, "wifis") as Wifis;
    if(!result){
        throw{
            status: 404,
            message: "Could not find the wifi!"
        }
    }
    checkOwnership(userId, result);
    const decrypted = {...result, password: decryptData(result.password)}
    return decrypted;
};

export async function deleteWifiService(userId : number, wifiId : number) {
    const result = await getDataByCredentialId(wifiId, "wifis") as Wifis;
    if(!result){
        throw{
            status: 404,
            message: "Wifi not found!"
        }
    };
    checkOwnership(userId, result);
    await deleteData(wifiId, "wifis");
    return 
};