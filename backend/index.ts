import express, { Express } from "express";
import cors from "cors";
import { RegisterRouter } from "./RegisterAndLogin/RegisterRoutes";

const port = 3001;
const app: Express = express();

app.use(cors());
app.use(express.json());


app.use('/', RegisterRouter);


app.listen(port, () => {
    console.log("Server is running...")
})