import express, { Express, Request, Response } from "express";
import { handleRegisterController, handleLoginController, getUsersController } from "./Controllers";
import jwt from 'jsonwebtoken';


export const RegisterAndLoginRoutes = express.Router();

RegisterAndLoginRoutes.post("/RegisterUser", handleRegisterController);
RegisterAndLoginRoutes.post("/LoginUser", handleLoginController)

