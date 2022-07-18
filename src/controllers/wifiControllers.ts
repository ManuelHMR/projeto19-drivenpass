import { Request, Response} from "express";
import { deleteWifiService, getAllWifiService, getWifiByIdService, postWifiServices } from "../services/wifiServices";

export async function postWifiController(req: Request, res: Response) {
    const userId = parseInt(res.locals.userId);
    await postWifiServices(req.body, userId);
    return res.sendStatus(201);
};

export async function getAllWifiController(req: Request, res: Response) {
    const userId = parseInt(res.locals.userId);
    const result  = await getAllWifiService(userId);
    return res.send(result);
};

export async function getWifiByIdController(req: Request, res: Response) {
    const userId = parseInt(res.locals.userId);
    const wifiId = parseInt(req.params.id);
    const result = await getWifiByIdService(userId, wifiId);
    return res.send(result);
};

export async function deleteWifiController(req: Request, res: Response) {
    const userId = parseInt(res.locals.userId);
    const wifiId = parseInt(req.params.id);
    await deleteWifiService(userId, wifiId);
    return res.sendStatus(200);
};