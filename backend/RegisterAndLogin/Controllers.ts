import { Request, Response } from "express";
import { FormValues } from "./Types";
import { registerUserService, loginUserService, checkEmailExistService, getUserPasswordService } from "./Services";

export async function handleRegisterController(req: Request, res: Response) {
    const formValues: FormValues = req.body;

    try {
        const emailExists = await checkEmailExistService(formValues.email);
        if (emailExists) {
            return res.json({ Error: "Email already exists." });
        } else {
            const result = await registerUserService(formValues.name, formValues.email, formValues.password);
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
            return res.json({ Error: "Email doesn't exist" });
        } else {
            const receivedPassword = await getUserPasswordService(formValues.email)
            try {
                const result = await loginUserService(req.body, receivedPassword);
                return res.json({ Success: result });
            } catch (error) {
                if (error === "Incorrect password!") {
                    return res.json({ Error: "Incorrect password!" });
                } else {
                    console.error("Error during logging in:", error);
                    return res.json({ Error: "Error during logging in.", error });
                }
            }
        }
    } catch (error) {
        console.error("Error during logging in:", error);
        return res.json({ Error: "Error during logging in.", error });
    }
}


