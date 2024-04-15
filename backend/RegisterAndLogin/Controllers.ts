import { Request, Response } from "express";
import { FormValues } from "./Types";
import { registerUserService, loginUserService, checkEmailExistService, getUserPasswordService, getUserDetails, getUsers, generateJWTToken } from "./Services";
import jwt from 'jsonwebtoken';

export async function handleRegisterController(req: Request, res: Response) {
    const formValues: FormValues = req.body;

    try {
        const emailExists = await checkEmailExistService(formValues.email);
        if (emailExists) {
            return res.json({ Error: "Email already exists." });
        } else {
            const result = await registerUserService(formValues.name, formValues.email, formValues.password, formValues.role);
            return res.json({ Success: "User successfully registered." });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return res.json({ Error: "Error during registration." });
    }
}

export async function handleLoginController(req: Request, res: Response) {
    const formValues: FormValues = req.body;
    try {
        const emailExists = await checkEmailExistService(formValues.email)
        if (!emailExists) {
            return res.json({ Error: "Email doesn't exist", errorType: "email" });
        }
        const receivedPassword = await getUserPasswordService(formValues.email)
        const result = await loginUserService(req.body, receivedPassword);
        const userDetails = await getUserDetails(formValues.email);
        const token = await generateJWTToken(userDetails.Id, userDetails.Role);
        return res.json({ Success: "Logged in!", token: token});
    } catch (error) {
        if (error === "Incorrect password!") {
            return res.json({ Error: "Incorrect password!", errorType: "password" });
        } else {
            console.error("Error during logging in:", error);
            return res.json({ Error: "Error during logging in.", error });
        }
    }
}

export async function getUsersController(req: Request, res: Response) {
    try {

        const result = await getUsers();
        return res.json({ Success: "User list retrieved successfully.", result });
    }
    catch (error) {
        console.error("Error while getting users:", error);
        return res.status(500).json({ Error: "Internal server error." });
    }
}



