import { Router } from "express";
import { deleteWifiController, getAllWifiController, getWifiByIdController, postWifiController } from "../controllers/wifiControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import wifiSchema from "../schemas/wifiSchema";
const wifiRouters = Router();

wifiRouters.post("/wifi", validateSchema(wifiSchema), validateToken, postWifiController);
wifiRouters.get("/wifis", validateToken, getAllWifiController);
wifiRouters.get("/wifi/:id", validateToken, getWifiByIdController);
wifiRouters.delete("/wifi/:id", validateToken, deleteWifiController);

export default wifiRouters;