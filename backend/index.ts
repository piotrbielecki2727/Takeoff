import express, { Express } from "express";
import cors from "cors";
import { RegisterAndLoginRoutes } from "./RegisterAndLogin/Routes";
import mysql from "mysql";


const port = 3001;
const app: Express = express();

 export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Takeoff",
});



app.use(cors());
app.use(express.json());

app.use('/', RegisterAndLoginRoutes);

app.listen(port, () => {
    console.log("Server is running...")
})