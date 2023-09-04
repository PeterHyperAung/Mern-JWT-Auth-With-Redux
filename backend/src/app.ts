import express, { Application, Express } from "express";
import usersRouter from "./routes/usersRoutes";

const app: Application = express();

app.use(express.json());

app.use("/api/users", usersRouter);

export default app;
