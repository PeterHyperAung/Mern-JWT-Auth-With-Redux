"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
const apiError_1 = __importDefault(require("../utils/apiError"));
const errorHandlers_1 = require("../utils/errorHandlers");
function notFound(req, res, next) {
    return next(new apiError_1.default("Route not found", 404));
}
exports.notFound = notFound;
function errorHandler(err, req, res, next) {
    console.log(err.stack);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (process.env.NODE_ENV === "development") {
        (0, errorHandlers_1.sendErrorDev)(err, res);
    }
    else if (process.env.NODE_ENV === "production") {
        let error = Object.assign({}, err);
        if (error.name === "CastError")
            error = (0, errorHandlers_1.handleCastErrorDB)(error);
        if (error.code === 11000)
            error = (0, errorHandlers_1.handleDuplicateFieldsDB)(error);
        if (err.name === "ValidationError")
            error = (0, errorHandlers_1.handleValidationErrorDB)(error);
        (0, errorHandlers_1.sendErrorProd)(error, res);
    }
}
exports.errorHandler = errorHandler;
