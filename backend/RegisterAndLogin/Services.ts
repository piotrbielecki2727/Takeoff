import { db } from '../index';
import { HashPassword } from "./HashPassword";
import { isPasswordMatch } from "./isPasswordMatch";
import Queries from "./Queries";
import { FormValues } from './Types';

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
                console.error("Error while getting user password.", err);
                reject(err);
            } else {
                const password = result[0].password;
                resolve(password);
            }
        });
    });
}

export async function registerUserService(name: string, email: string, password: string): Promise<any> {
    const hashedPassword = await HashPassword(password);
    return new Promise((resolve, reject) => {
        db.query(Queries.REGISTER, [name, email, hashedPassword], (err, result) => {
            if (err) {
                console.error("Error while adding data to database.", err);
                reject(err);
            } else {
                console.log("User successfully registered.");
                resolve(result);
            }
        });
    });
}


export function loginUserService(formValues: FormValues, dbPassword: string): Promise<string> {
    return new Promise((resolve, reject) => {
        db.query(Queries.LOGIN, [formValues.password, formValues.email], async (err, result) => {
            if (err) {
                reject("Error while logging in");
            } else {
                const checkIfMatch = await isPasswordMatch(formValues.password, dbPassword);
                if (!checkIfMatch) {
                    reject("Incorrect password!");
                } else {
                    resolve("Successfuly logged in!");
                }
            }
        });
    })
}

