import express from "express";
import authRouters from "./authRouters";
import cardRouter from "./cardRouters";
import credentialsRouters from "./credentialsRouters";
import noteRouters from "./notesRouters";
import wifiRouters from "./wifiRouters";

const router =  express.Router();

router.use(authRouters);
router.use(credentialsRouters);
router.use(noteRouters);
router.use(cardRouter);
router.use(wifiRouters);

export default router;