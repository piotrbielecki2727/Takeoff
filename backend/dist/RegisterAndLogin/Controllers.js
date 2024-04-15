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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersController = exports.handleLoginController = exports.handleRegisterController = void 0;
const Services_1 = require("./Services");
function handleRegisterController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const formValues = req.body;
        try {
            const emailExists = yield (0, Services_1.checkEmailExistService)(formValues.email);
            if (emailExists) {
                return res.json({ Error: "Email already exists." });
            }
            else {
                const result = yield (0, Services_1.registerUserService)(formValues.name, formValues.email, formValues.password, formValues.role);
                return res.json({ Success: "User successfully registered." });
            }
        }
        catch (error) {
            console.error("Error during registration:", error);
            return res.json({ Error: "Error during registration." });
        }
    });
}
exports.handleRegisterController = handleRegisterController;
function handleLoginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const formValues = req.body;
        try {
            const emailExists = yield (0, Services_1.checkEmailExistService)(formValues.email);
            if (!emailExists) {
                return res.json({ Error: "Email doesn't exist", errorType: "email" });
            }
            const receivedPassword = yield (0, Services_1.getUserPasswordService)(formValues.email);
            const result = yield (0, Services_1.loginUserService)(req.body, receivedPassword);
            const userDetails = yield (0, Services_1.getUserDetails)(formValues.email);
            const token = yield (0, Services_1.generateJWTToken)(userDetails.Id, userDetails.Role);
            return res.json({ Success: "Logged in!", token: token });
        }
        catch (error) {
            if (error === "Incorrect password!") {
                return res.json({ Error: "Incorrect password!", errorType: "password" });
            }
            else {
                console.error("Error during logging in:", error);
                return res.json({ Error: "Error during logging in.", error });
            }
        }
    });
}
exports.handleLoginController = handleLoginController;
function getUsersController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, Services_1.getUsers)();
            return res.json({ Success: "User list retrieved successfully.", result });
        }
        catch (error) {
            console.error("Error while getting users:", error);
            return res.status(500).json({ Error: "Internal server error." });
        }
    });
}
exports.getUsersController = getUsersController;
