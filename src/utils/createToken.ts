import jwt from "jsonwebtoken";

export default function createToken(id: number){
    const key = process.env.TOKEN_KEY as string;
    const token = jwt.sign(`${id}`, key);
    return token;
};