import { Error } from "mongoose";
import AppError from "../utils/apiError";
import { Request, Response, NextFunction } from "express";
import {
  catchAsyncErr,
  sendErrorDev,
  sendErrorProd,
  handleCastErrorDB,
  handleDuplicateFieldsDB,
  handleValidationErrorDB,
} from "../utils/errorHandlers";

function notFound(req: Request, res: Response, next: NextFunction) {
  return next(new AppError("Route not found", 404));
}

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (err.name === "ValidationError") error = handleValidationErrorDB(error);
    sendErrorProd(error, res);
  }
}

export { notFound, errorHandler };
