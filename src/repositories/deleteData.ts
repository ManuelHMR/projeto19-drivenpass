import { prisma } from "../config/database";

export async function deleteData(id : number, table : "credentials" | "notes" | "cards" | "wifis") {
    await prisma[table as any].delete({
        where: {
            id
        }
    })
    return; 
};