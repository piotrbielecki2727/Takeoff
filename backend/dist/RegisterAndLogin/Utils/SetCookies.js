"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCookies = void 0;
function SetCookies(token, res) {
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        expires: new Date(Date.now() + 3600000),
        secure: true
    });
}
exports.SetCookies = SetCookies;
