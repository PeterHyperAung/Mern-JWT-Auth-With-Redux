import { notFound } from "../controllers/errorController";
import { Router } from "express";

const router = Router();

router.use(notFound);

export default router;
