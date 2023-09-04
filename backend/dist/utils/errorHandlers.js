"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationErrorDB = exports.handleDuplicateFieldsDB = exports.handleCastErrorDB = exports.sendErrorProd = exports.sendErrorDev = exports.catchAsyncErr = void 0;
const apiError_1 = __importDefault(require("./apiError"));
function handleCastErrorDB(err) {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new apiError_1.default(message, 400);
}
exports.handleCastErrorDB = handleCastErrorDB;
function handleDuplicateFieldsDB(err) {
    //   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    //   const message = `Duplicate field value: ${value}. Please use another value!`;
    return new apiError_1.default("hello", 400);
}
exports.handleDuplicateFieldsDB = handleDuplicateFieldsDB;
function handleValidationErrorDB(err) {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data. ${errors.join(". ")}`;
    return new apiError_1.default(message, 400);
}
exports.handleValidationErrorDB = handleValidationErrorDB;
const catchAsyncErr = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
};
exports.catchAsyncErr = catchAsyncErr;
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
        stack: err.stack,
    });
};
exports.sendErrorDev = sendErrorDev;
const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    else {
        // 1) log error
        console.error("ERROR ", err);
        // 2) Send generic message
        res.status(err.statusCode).json({
            status: "error",
            message: "Something went very wrong!",
        });
    }
};
exports.sendErrorProd = sendErrorProd;
