"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Routes_1 = require("./RegisterAndLogin/Routes");
const mysql_1 = __importDefault(require("mysql"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const port = 3001;
const app = (0, express_1.default)();
exports.db = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Takeoff",
});
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use('/', Routes_1.RegisterAndLoginRoutes);
app.listen(port, () => {
    console.log("Server is running...");
});
