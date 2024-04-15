import express, { Express } from "express";
import cors from "cors";
import { RegisterAndLoginRoutes } from "./RegisterAndLogin/Routes";
import mysql from "mysql";
import cookieParser from "cookie-parser";



const port = 3001;
const app: Express = express();


 export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Takeoff",
});


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/', RegisterAndLoginRoutes);

app.listen(port, () => {
    console.log("Server is running...")
})