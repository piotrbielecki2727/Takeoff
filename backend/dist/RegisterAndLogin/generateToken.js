"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function GenerateToken(userId, isAdmin) {
    const payload = {
        userId: userId,
        isAdmin: isAdmin
    };
    return jsonwebtoken_1.default.sign(payload, 'superSecretPrivateKey', { expiresIn: '1h' });
}
exports.GenerateToken = GenerateToken;
