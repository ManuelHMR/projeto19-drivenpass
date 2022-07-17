import { prisma } from "../config/database";

export async function getCredentialsByUserId(userId: number){ 
    return await prisma.credentials.findMany({
        where:{
            userId
        }
    });  
};

export async function getCredentialByCredentialId(id: number) {
    return await prisma.credentials.findUnique({
        where: {
            id
        }
    });
};