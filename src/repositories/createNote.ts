import { Notes } from "@prisma/client";
import { prisma } from "../config/database";

export async function createNote(body: Omit <Notes, "id" | "userId">, userId : number){
    await prisma.notes.create({
        data:{
            content: body.content,
            title: body.title,
            userId
        }
    });
};