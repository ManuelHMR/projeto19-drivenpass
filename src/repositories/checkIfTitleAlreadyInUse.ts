import { prisma } from "../config/database";

export async function checkIfTitleAlreadyInUse(title: string, userId: number, table: "credentials" | "notes" | "cards"){
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
    if(table === "cards"){
        result = await prisma.cards.findFirst({
            where:{
                title,
                userId
            }
        })
    }
    if(result){
        throw{
            status: 409,
            message: "Title already in Use"
        };
    };
    return;
};