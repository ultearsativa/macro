import database from "../config/db.mjs";
import bcrypt from "bcrypt"; // Untuk hashing password (install dengan npm install bcrypt)

export const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  // Validasi input
  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: "Semua data wajib diisi!" });
  }

  try {
    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Query untuk memasukkan data ke tabel users
    const query = "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)";
    await database.execute(query, [name, username, email, hashedPassword]);

    // Kirim respons sukses
    return res.status(201).json({ message: "Registrasi berhasil!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan server." });
  }
};


