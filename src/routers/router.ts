import express from "express";
import authRouters from "./authRouters";

const router =  express.Router();

router.use(authRouters);

export default router;