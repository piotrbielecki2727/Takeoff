"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCookies = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
function SetCookies(isAdmin, userId, loggedIn, token) {
    js_cookie_1.default.set('token', token, { expires: 7, secure: true });
    js_cookie_1.default.set('userId', userId, { expires: 7, secure: true });
    js_cookie_1.default.set('isAdmin', isAdmin, { expires: 7, secure: true });
    js_cookie_1.default.set('loggedIn', 'true', { expires: 7, secure: true });
}
exports.SetCookies = SetCookies;
