import { prisma } from "../config/database";

export async function checkIfTitleAlreadyInUse(title: string, userId: number){
    const result = await prisma.credentials.findFirst({
        where:{
            title,
            userId
        }
    })
    if(result){
        throw{
            status: 409,
            message: "Title Already in Use"
        };
    };
    return;
};