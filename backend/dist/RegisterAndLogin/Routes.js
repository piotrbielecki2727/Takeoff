"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAndLoginRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Controllers_1 = require("./Controllers");
exports.RegisterAndLoginRoutes = express_1.default.Router();
exports.RegisterAndLoginRoutes.post("/RegisterUser", Controllers_1.handleRegisterController);
exports.RegisterAndLoginRoutes.post("/LoginUser", Controllers_1.handleLoginController);
