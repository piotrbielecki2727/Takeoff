import { Request, Response } from "express";
import { FormValues } from "./RegisterAndLoginTypes";

export function handleRegister(req: Request, res: Response) {
    const formValues: FormValues = req.body;
    console.log("dostalem", formValues);
}
