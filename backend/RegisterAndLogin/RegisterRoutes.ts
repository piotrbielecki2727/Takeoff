import express, { Express, Request, Response } from "express";
import { handleRegister } from "./Register";

export const RegisterRouter = express.Router();

RegisterRouter.post("/RegisterUser", handleRegister);
