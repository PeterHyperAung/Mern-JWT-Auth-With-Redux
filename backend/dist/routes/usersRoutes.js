"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post("/", userController_1.registerUser);
router.post("/auth", userController_1.authUser);
router.post("/logout", userController_1.logoutUser);
router.route("/profile").get(userController_1.getUserProfile).put(userController_1.updateUserProfile);
exports.default = router;