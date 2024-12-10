import { Router } from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  updateProfilePhoto,
  addBersamaSavings,
  getBersamaSavings,
  getBersamaSavingDetails,   
  updateBersamaSaving,  
  getHistoryBersama,
  createRiwayat,
  updateBersama, 
} from "../controllers/authController.mjs";
import authenticate from "../middleware/authenticate.mjs"; // Middleware autentikasi
import upload from "../middleware/multerConfig.mjs";

const AuthRoutes = Router();

AuthRoutes.post("/signup", registerUser); // Registrasi
AuthRoutes.post("/login", loginUser);    // Login

// Rute yang memerlukan autentikasi
AuthRoutes.get("/profile", authenticate, getUserProfile);         // Membaca profil
AuthRoutes.put("/profile", authenticate, updateUserProfile);      // Memperbarui profil
AuthRoutes.delete("/profile", authenticate, deleteUser);          // Menghapus pengguna
AuthRoutes.put("/profile-photo", authenticate, updateProfilePhoto); // Memperbarui foto profil

// Rute untuk tabungan bersama
AuthRoutes.post("/bersama", authenticate, upload.single('unggah_gambar'), addBersamaSavings); // Menambahkan tabungan bersama
AuthRoutes.get("/bersama", authenticate, getBersamaSavings);       // Membaca tabungan bersama
AuthRoutes.get("/bersama/:id", authenticate, getBersamaSavingDetails); // Mengambil detail tabungan bersama berdasarkan ID
AuthRoutes.put("/bersama/:id", authenticate, upload.single('unggah_gambar'), updateBersama); // Memperbarui tabungan bersama
AuthRoutes.get("/bersama/history/:id", authenticate, getHistoryBersama); // Rute terpisah untuk riwayat tabungan bersama
AuthRoutes.post("/riwayat", authenticate,upload.none(), createRiwayat);

export default AuthRoutes;
