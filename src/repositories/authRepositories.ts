import { prisma } from "../config/database";
import bcrypt from "bcrypt";

export async function getUserByEmail(email: string) {
    return await prisma.users.findFirst({
        where:{
            email
        }
    })
};

export async function createUser(email: string, password: string) {
    const hashPassword = bcrypt.hashSync(password, 10)
    return await prisma.users.create({
        data:{
            email, password: hashPassword
        }
    })
};