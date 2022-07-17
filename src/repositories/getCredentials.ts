import { prisma } from "../config/database";

export async function getCredentialsByUserId(userId: number){ 
    return prisma.credentials.findMany({
        where:{
            userId
        }
    });  
};