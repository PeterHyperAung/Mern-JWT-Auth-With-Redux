"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorController_1 = require("../controllers/errorController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use(errorController_1.notFound);
exports.default = router;
