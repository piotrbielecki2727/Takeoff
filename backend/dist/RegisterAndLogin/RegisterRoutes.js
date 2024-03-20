"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRouter = void 0;
const express_1 = __importDefault(require("express"));
const Register_1 = require("./Register");
exports.RegisterRouter = express_1.default.Router();
exports.RegisterRouter.post("/RegisterUser", Register_1.handleRegister);
