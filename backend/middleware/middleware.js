import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRouter from "../routes/signupRoutes.js";
import loginRouter from "../routes/loginRoutes.js";
import myListRouter from "../routes/myListRoutes.js";
import { hashPasswordMiddleware } from "../auth.js";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/signup", signupRouter, hashPasswordMiddleware);
app.use("/api/login", loginRouter);
app.use("/api/my_list", myListRouter);
export default app;
