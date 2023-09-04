import { error } from "console";
import { Request, Response, NextFunction } from "express";
import AppError from "./apiError";
import { Error } from "mongoose";

function handleCastErrorDB(err: Error.CastError) {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
}

function handleDuplicateFieldsDB(err: Error.OverwriteModelError) {
  //   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  //   const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError("hello", 400);
}

function handleValidationErrorDB(err: Error.ValidationError) {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
}

const catchAsyncErr =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // 1) log error
    console.error("ERROR ", err);

    // 2) Send generic message
    res.status(err.statusCode).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

export {
  catchAsyncErr,
  sendErrorDev,
  sendErrorProd,
  handleCastErrorDB,
  handleDuplicateFieldsDB,
  handleValidationErrorDB,
};
