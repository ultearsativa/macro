import { Router } from "express";
import { registerUser } from "../controllers/authController.mjs";

const AuthRoutes = Router();

// Route untuk registrasi user
AuthRoutes.post("/signup", registerUser);
export default AuthRoutes;
