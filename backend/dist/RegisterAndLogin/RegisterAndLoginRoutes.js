"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAndLoginRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Register_1 = require("./Register");
const Login_1 = require("./Login");
exports.RegisterAndLoginRoutes = express_1.default.Router();
exports.RegisterAndLoginRoutes.post("/RegisterUser", Register_1.handleRegister);
exports.RegisterAndLoginRoutes.post("/LoginUser", Login_1.handleLogin);
