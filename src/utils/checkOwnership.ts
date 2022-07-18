import { Cards, Credentials, Notes, Wifis } from "@prisma/client"

export default function checkOwnership(userId: number, result: Credentials | Notes | Cards | Wifis){
    if(result.userId !== userId){
        throw{
            status: 401,
            message: "This data is not yours!"
        }
    };
    return;
}