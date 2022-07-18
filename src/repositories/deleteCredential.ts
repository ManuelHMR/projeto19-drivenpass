import { prisma } from "../config/database";

export async function deleteCredential(id : number, table : "credentials" | "notes") {
    if(table === "credentials"){
        await prisma.credentials.delete({
            where: {
                id
            }
        })
        return;
    }
    if(table === "notes"){
        await prisma.notes.delete({
            where: {
                id
            }
        })
        return;
    }    
};