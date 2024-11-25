import express from 'express';  // Menggunakan 'import' untuk ES Modules
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.mjs'; // Pastikan menggunakan ekstensi .mjs

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Inisialisasi Express app
const app = express();

// Mendapatkan PORT dari environment variables atau menggunakan default 5000
const PORT = process.env.PORT || 5000;

// Middleware untuk parsing body JSON
app.use(express.json()); // Gunakan express built-in JSON middleware

// Menggunakan route auth
app.use("/api/auth", authRoutes); // Pastikan route auth diatur dengan benar

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
