import { Credentials } from "@prisma/client"

export default function checkOwnership(userId: number, result: Credentials){
    if(result.userId !== userId){
        throw{
            status: 401,
            message: "Credential is not yours!"
        }
    };
    return;
}