import { Request, Response } from "express";
import { createCredentialsServices, deleteCredentialService, getCredentialsServices, getCrendentialByIdServices } from "../services/credentialServices";

export async function credentialController(req: Request, res: Response) {
    const { userId } = res.locals; 
    await createCredentialsServices(req.body, parseInt(userId));
    res.sendStatus(201);
};

export async function getCredentialsController(req: Request, res: Response) {
    const { userId } = res.locals;
    const result =  await getCredentialsServices(parseInt(userId));
    return res.send(result);
};

export async function getCredentialByIdController(req: Request, res: Response) {
    const { userId } = res.locals;
    const credentialId = req.params.id;
    const result = await getCrendentialByIdServices(parseInt(userId), parseInt(credentialId));
    return res.send(result);
};

export async function deleteCredential(req: Request, res: Response) {
    const { userId } = res.locals;
    const credentialId = req.params.id;
    await deleteCredentialService(parseInt(userId), parseInt(credentialId));
    return res.sendStatus(200);
};