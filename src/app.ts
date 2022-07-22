import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import router from "./routers/router";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler)

export default app;