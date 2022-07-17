import express from "express";
import authRouters from "./authRouters";
import credentialsRouters from "./credentialsRouters";

const router =  express.Router();

router.use(authRouters);
router.use(credentialsRouters);

export default router;