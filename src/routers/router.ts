import express from "express";
import authRouters from "./authRouters";
import passwordRouters from "./passwordRouters";

const router =  express.Router();

router.use(authRouters);
router.use(passwordRouters);

export default router;