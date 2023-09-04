import { catchAsyncErr } from "../utils/errorHandlers";
import { Request, Response, NextFunction } from "express";

const authUser = catchAsyncErr(
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "success" });
  }
);

const registerUser = catchAsyncErr(
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "success" });
  }
);

const logoutUser = catchAsyncErr(
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "success" });
  }
);

const getUserProfile = catchAsyncErr(
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "success" });
  }
);

const updateUserProfile = catchAsyncErr(
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "success" });
  }
);

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
