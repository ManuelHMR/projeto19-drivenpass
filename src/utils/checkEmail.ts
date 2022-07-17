import { getUserByEmail } from "../repositories/authRepositories";

export async function checkIfEmailExists(email:string){
    const user = await getUserByEmail(email);
    if(user){
        throw{
            status: "409",
            message: "Email already in use!"
        }
    }
};