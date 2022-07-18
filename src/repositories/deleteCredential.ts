import { prisma } from "../config/database";

export async function deleteCredential(id : number, table : "credentials" | "notes" | "cards") {
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
    if(table === "cards"){
        await prisma.cards.delete({
            where: {
                id
            }
        })
        return;
    }  
};