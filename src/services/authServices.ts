import { createUser } from "../repositories/authRepositories";
import { checkIfEmailExists } from "../utils/checkEmail";

export async function signUpService({email, password} : {email: string, password: string}) {
    await checkIfEmailExists(email);
    await createUser(email, password);
    return
};