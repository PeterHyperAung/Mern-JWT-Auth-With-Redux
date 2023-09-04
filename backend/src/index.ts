process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!  Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
import AppError from "./utils/apiError";

console.log("GET", JSON.stringify(app.get));
dotenv.config({ path: "./env" });

mongoose
  .connect("mongodb://localhost:27017/auth-test")
  .then(() => console.log("DB connection successful"));

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on("unhandledRejection", (err: AppError) => {
  console.log("UNHANDLED REJECTION!  Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
