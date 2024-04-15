import { db } from '../index';
import jwt from 'jsonwebtoken';
import { HashPassword } from "./Utils/HashPassword";
import { PasswordMatch } from "./Utils/PasswordMatch";
import Queries from "./Queries";
import { FormValues } from './Types';
import { Response } from 'express';


export async function getUserDetails(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
        db.query(Queries.GET_USER_DETAILS, [email], (err, result) => {
            if (err) {
                console.error("Error while retrieving user details", err);
                reject(err);
            } else {
                const userDetails = result[0];
                resolve(userDetails);
            }
        });
    });
}


export async function checkEmailExistService(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        db.query(Queries.CHECK_EMAIL_EXIST, [email], (err, result) => {
            if (err) {
                console.error("Error while checking if email exist", err);
                reject(err);
            } else {
                resolve(result && result.length > 0);
            }
        });
    });
}

export async function getUserPasswordService(email: string): Promise<string> {
    return new Promise((resolve, reject) => {
        db.query(Queries.GET_USER_PASSWORD, [email], (err, result) => {
            if (err) {
                console.error("Error while retrieving user password.", err);
                reject(err);
            } else {
                const password = result[0].password;
                resolve(password);
            }
        });
    });
}

export async function registerUserService(name: string, email: string, password: string, role: string): Promise<any> {
    const hashedPassword = await HashPassword(password);
    return new Promise((resolve, reject) => {
        db.query(Queries.REGISTER, [name, email, hashedPassword, role], (err, result) => {
            if (err) {
                console.error("Error while adding data to database.", err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}


export function loginUserService(formValues: FormValues, dbPassword: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
        const checkIfMatch = await PasswordMatch(formValues.password, dbPassword);
        if (!checkIfMatch) {
            reject("Incorrect password!");
        } else {
            resolve("Successfully logged in!");
        }
    });
}

export function logoutUserService(res: Response): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            res.clearCookie('token');
        }
        catch (error) {
            reject(error);
        }
    });
}


export function getUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
        db.query(Queries.GET_USERS, async (err, result) => {
            if (err) {
                reject("Error while logging in");
            } else {
                resolve(result);
            }
        }
        );
    })
}

export async function generateJWTToken(userId: string, role: string): Promise<any> {
    return new Promise((resolve, reject) => {
        jwt.sign({ userId, role }, 'VerySecretKey', { expiresIn: '1h' }, (err, token) => {
            if (err) {
                console.error("Error while generating JWT token", err);
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}



