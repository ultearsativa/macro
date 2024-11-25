import database from "../config/db.mjs";
import bcrypt from "bcrypt"; // Untuk hashing password (install dengan npm install bcrypt)
import jwt from 'jsonwebtoken';

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

export const loginUser = async (req, res) => {
  console.log(req.body); // Debug log untuk memeriksa body yang diterima

  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    return res.status(400).json({ message: "Email/Username dan Password wajib diisi!" });
  }

  try {
    const query = "SELECT * FROM users WHERE email = ? OR username = ?";
    const [rows] = await database.execute(query, [emailOrUsername, emailOrUsername]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Password salah!" });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "Login berhasil!", token });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};
