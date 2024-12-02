import { Router } from "express";
import { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser, updateProfilePhoto } from "../controllers/authController.mjs";
import authenticate from "../middleware/authenticate.mjs";  // Import middleware authenticate

const AuthRoutes = Router();

AuthRoutes.post("/signup", registerUser); // Registrasi
AuthRoutes.post("/login", loginUser);    // Login

// Rute yang memerlukan autentikasi
AuthRoutes.get("/profile", authenticate, getUserProfile);         // Membaca profil
AuthRoutes.put("/profile", authenticate, updateUserProfile);      // Memperbarui profil
AuthRoutes.delete("/profile", authenticate, deleteUser);          // Menghapus pengguna
AuthRoutes.put("/profile-photo", updateProfilePhoto);

export default AuthRoutes;
