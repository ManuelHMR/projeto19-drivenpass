import Cryptr from "cryptr";
const key = process.env.CRYPT_KEY as string;
const cryptr = new Cryptr(key);

export default function encryptData(param: string){
    return cryptr.encrypt(param);
};