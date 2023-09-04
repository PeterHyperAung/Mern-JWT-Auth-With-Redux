"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION!  Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
});
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
console.log("GET", JSON.stringify(app_1.default.get));
dotenv_1.default.config({ path: "./env" });
mongoose_1.default
    .connect("mongodb://localhost:27017/auth-test")
    .then(() => console.log("DB connection successful"));
const port = process.env.PORT || 4000;
const server = app_1.default.listen(port, () => {
    console.log(`App running on port ${port}`);
});
process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION!  Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
