import {Router} from "express";
import AuthController from "../controllers/AuthController.js";
const router = Router();

// Auth Routes
router.post("/auth" , AuthController.login);
export default router;