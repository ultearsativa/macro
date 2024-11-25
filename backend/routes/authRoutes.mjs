import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.mjs";

const AuthRoutes = Router();

// Route untuk registrasi user
AuthRoutes.post("/signup", registerUser);

// Route untuk login user
AuthRoutes.post("/login", loginUser);

export default AuthRoutes;
