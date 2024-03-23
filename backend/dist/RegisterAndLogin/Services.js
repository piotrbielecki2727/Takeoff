"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.registerUserService = exports.getUserPasswordService = exports.checkEmailExistService = void 0;
const index_1 = require("../index");
const HashPassword_1 = require("./HashPassword");
const isPasswordMatch_1 = require("./isPasswordMatch");
const Queries_1 = __importDefault(require("./Queries"));
function checkEmailExistService(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            index_1.db.query(Queries_1.default.CHECK_EMAIL_EXIST, [email], (err, result) => {
                if (err) {
                    console.error("Error while checking if email exist", err);
                    reject(err);
                }
                else {
                    resolve(result && result.length > 0);
                }
            });
        });
    });
}
exports.checkEmailExistService = checkEmailExistService;
function getUserPasswordService(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            index_1.db.query(Queries_1.default.GET_USER_PASSWORD, [email], (err, result) => {
                if (err) {
                    console.error("Error while getting user password.", err);
                    reject(err);
                }
                else {
                    const password = result[0].password;
                    resolve(password);
                }
            });
        });
    });
}
exports.getUserPasswordService = getUserPasswordService;
function registerUserService(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield (0, HashPassword_1.HashPassword)(password);
        return new Promise((resolve, reject) => {
            index_1.db.query(Queries_1.default.REGISTER, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error("Error while adding data to database.", err);
                    reject(err);
                }
                else {
                    console.log("User successfully registered.");
                    resolve(result);
                }
            });
        });
    });
}
exports.registerUserService = registerUserService;
function loginUserService(formValues, dbPassword) {
    return new Promise((resolve, reject) => {
        index_1.db.query(Queries_1.default.LOGIN, [formValues.password, formValues.email], (err, result) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                reject("Error while logging in");
            }
            else {
                const checkIfMatch = yield (0, isPasswordMatch_1.isPasswordMatch)(formValues.password, dbPassword);
                if (!checkIfMatch) {
                    reject("Incorrect password!");
                }
                else {
                    resolve("Successfuly logged in!");
                }
            }
        }));
    });
}
exports.loginUserService = loginUserService;
