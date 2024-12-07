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
} from "../controllers/authController.mjs";
import authenticate from "../middleware/authenticate.mjs"; // Middleware autentikasi
import { savingsUpload } from "../middleware/multerConfig.mjs"; // Pastikan path sesuai

const AuthRoutes = Router();

AuthRoutes.post("/signup", registerUser); // Registrasi
AuthRoutes.post("/login", loginUser);    // Login

// Rute yang memerlukan autentikasi
AuthRoutes.get("/profile", authenticate, getUserProfile);         // Membaca profil
AuthRoutes.put("/profile", authenticate, updateUserProfile);      // Memperbarui profil
AuthRoutes.delete("/profile", authenticate, deleteUser);          // Menghapus pengguna
AuthRoutes.put("/profile-photo", authenticate, updateProfilePhoto); // Memperbarui foto profil

// Rute untuk tabungan bersama
AuthRoutes.post("/bersama", authenticate, savingsUpload.single('unggah_gambar'), addBersamaSavings); // Menambahkan tabungan bersama
AuthRoutes.get("/bersama", authenticate, getBersamaSavings);       // Membaca tabungan bersama
AuthRoutes.get("/bersama/:id", authenticate, getBersamaSavingDetails); // Mengambil detail tabungan bersama berdasarkan ID
AuthRoutes.put("/bersama/:id", authenticate, savingsUpload.single('unggah_gambar'), updateBersamaSaving); // Memperbarui tabungan bersama
AuthRoutes.put("/bersama/:id", authenticate, updateBersamaSaving); // Update tabungan bersama
AuthRoutes.get("/bersama/:id", authenticate, getHistoryBersama); // Rute terpisah untuk riwayat tabungan bersama

export default AuthRoutes;
