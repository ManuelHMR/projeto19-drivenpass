import { prisma } from "../config/database";

export async function deleteCredential(id : number) {
    await prisma.credentials.delete({
        where: {
            id
        }
    })
    return;
};