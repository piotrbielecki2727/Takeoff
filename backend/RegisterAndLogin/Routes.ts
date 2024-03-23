import express, { Express, Request, Response } from "express";
import { handleRegisterController, handleLoginController } from "./Controllers";


export const RegisterAndLoginRoutes = express.Router();

RegisterAndLoginRoutes.post("/RegisterUser", handleRegisterController);
RegisterAndLoginRoutes.post("/LoginUser", handleLoginController)
