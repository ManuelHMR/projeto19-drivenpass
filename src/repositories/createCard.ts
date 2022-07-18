import { Cards } from "@prisma/client";
import { prisma } from "../config/database";

export async function createCard(body: Omit <Cards, "id" | "userId">, userId : number, passwordHash: string, cvcHash: string) {
    return await prisma.cards.create({
        data: {
            cvc: cvcHash,
            expirationDate: body.expirationDate,
            isVirtual: body.isVirtual,
            name: body.name,
            number: body.number,
            password: passwordHash,
            title: body.title,
            type: body.type,
            userId
        }
    });
};