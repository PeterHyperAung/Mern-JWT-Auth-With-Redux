"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = exports.getUserProfile = exports.logoutUser = exports.registerUser = exports.authUser = void 0;
const errorHandlers_1 = require("../utils/errorHandlers");
const authUser = (0, errorHandlers_1.catchAsyncErr)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "success" });
}));
exports.authUser = authUser;
const registerUser = (0, errorHandlers_1.catchAsyncErr)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "success" });
}));
exports.registerUser = registerUser;
const logoutUser = (0, errorHandlers_1.catchAsyncErr)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "success" });
}));
exports.logoutUser = logoutUser;
const getUserProfile = (0, errorHandlers_1.catchAsyncErr)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "success" });
}));
exports.getUserProfile = getUserProfile;
const updateUserProfile = (0, errorHandlers_1.catchAsyncErr)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "success" });
}));
exports.updateUserProfile = updateUserProfile;
