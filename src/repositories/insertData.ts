import {  Cards, Credentials, Notes, Wifis } from "@prisma/client";
import { prisma } from "../config/database";

export async function insertData(data: Omit<Wifis | Notes | Credentials | Cards, "id">, table : "credentials" | "notes" | "cards" | "wifis"){
    return await prisma[table as any].create({
            data
    });
};
