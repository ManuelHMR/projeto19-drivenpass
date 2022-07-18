import { prisma } from "../config/database";

export async function getDataByUserId(userId: number, table: "credentials" | "notes" | "cards" | "wifis"){ 
        return await prisma[table as any].findMany({
            where:{
                userId
            }
        });
};    

export async function getDataByCredentialId(id: number, table: "credentials" | "notes" | "cards" | "wifis") {
    return await prisma[table as any].findUnique({
        where: {
            id
        }
    });
};