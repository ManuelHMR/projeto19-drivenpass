import { Credentials } from "@prisma/client";
import { prisma } from "../config/database";


export async function createCredential(data : Omit<Credentials, "id" | "userId">, userId: number) {
    return await prisma.credentials.create({
        data: {
            name: data.name,
            password: data.password,
            title: data.title,
            url: data.url,
            userId
        }
    })
}