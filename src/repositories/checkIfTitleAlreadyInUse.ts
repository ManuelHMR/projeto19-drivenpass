import { prisma } from "../config/database";

export async function checkIfTitleAlreadyInUse(title: string, userId: number, table: "credentials" | "notes"){
    let result;
    if(table === "credentials"){
        result = await prisma.credentials.findFirst({
            where:{
                title,
                userId
            }
        })
    };
    if(table === "notes"){
        result = await prisma.notes.findFirst({
            where:{
                title,
                userId
            }
        })
    }
    if(result){
        throw{
            status: 409,
            message: "Title Already in Use"
        };
    };
    return;
};