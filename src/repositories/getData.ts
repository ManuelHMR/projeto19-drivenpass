import { prisma } from "../config/database";

export async function getDataByUserId(userId: number, table: "credentials" | "notes"){ 
    if(table === "credentials"){
        return await prisma.credentials.findMany({
            where:{
                userId
            }
        });
    };    
    if(table === "notes"){
        return await prisma.notes.findMany({
            where:{
                userId
            }
        });   
    };    
};

export async function getDataByCredentialId(id: number, table: "credentials" | "notes") {
    if(table === "credentials"){
        return await prisma.credentials.findUnique({
            where: {
                id
            }
        });
    }
    if(table === "notes"){
        return await prisma.notes.findUnique({
            where: {
                id
            }
        });
    }
};