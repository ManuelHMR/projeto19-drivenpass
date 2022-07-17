import { getUserByEmail } from "../repositories/authRepositories";

export async function checkIfEmailExists(email:string, action : "signin" | "signup"){
    const user = await getUserByEmail(email);
    if(user && action === "signup"){
        throw{
            status: 409,
            message: "Email already in use!"
        };
    };
    if(!user && action === "signin"){
        throw{
            status: 404,
            message: "Email not found!"
        };
    };
    return user;
};