import express from "express";
import authRouters from "./authRouters";
import cardRouter from "./cardRouters";
import credentialsRouters from "./credentialsRouters";
import noteRouters from "./notesRouters";

const router =  express.Router();

router.use(authRouters);
router.use(credentialsRouters);
router.use(noteRouters);
router.use(cardRouter);

export default router;