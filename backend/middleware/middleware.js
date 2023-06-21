import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRouter from "../routes/signupRoutes.js";
import loginRouter from "../routes/loginRoutes.js";
import myListRouter from "../routes/myListRoutes.js";
import movieRouter from "../routes/movieRoutes.js";
import stripeRouter from "../routes/stripeRoutes.js";
import { hashPasswordMiddleware } from "../utils/auth.js";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/signup", signupRouter, hashPasswordMiddleware);
app.use("/api/login", loginRouter);
app.use("/api/my_list", myListRouter);
app.use("/api/movies", movieRouter);
app.use("/api/stripe/charge", stripeRouter);
export default app;
