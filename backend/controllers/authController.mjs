import multer from 'multer';
import path from 'path';
import fs from 'fs';
import database from "../config/db.mjs";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads'; // Pastikan folder uploads ada
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Menggunakan nama file unik berdasarkan waktu dan nama asli
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Menyimpan file dengan ekstensi aslinya
  }
});

// Setup multer middleware
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Hanya izinkan file dengan ekstensi .jpg, .jpeg, .png
    const fileTypes = /jpg|jpeg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      return cb(null, true);
    }
    cb(new Error('Hanya file gambar yang diizinkan.'));
  },
});


export const updateProfilePhoto = [
  upload.single('profile_picture'), // Middleware multer untuk menangani file upload
  async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Token tidak tersedia!" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { file } = req;
      if (!file) {
        return res.status(400).json({ message: "File foto profil tidak ditemukan." });
      }

      const profilePicturePath = file.path; // Path file yang diupload

      // Update kolom profile_picture di database
      const query = "UPDATE users SET profile_picture = ? WHERE id = ?";
      await database.execute(query, [profilePicturePath, decoded.userId]);

      return res.status(200).json({ message: "Foto profil berhasil diperbarui!", profile_picture: profilePicturePath });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Terjadi kesalahan saat memperbarui foto profil." });
    }
  }
];

export const getUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token tidak tersedia!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const query = "SELECT id, name, username, email, profile_picture FROM users WHERE id = ?";
    const [rows] = await database.execute(query, [decoded.userId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Terjadi kesalahan server." });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token tidak tersedia!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, username, email, password } = req.body;

    // Menambahkan log untuk memeriksa nilai yang diterima dari frontend
    console.log("Received data:", { name, username, email, password });

    // Ambil nilai username yang sudah ada di database
    const queryGetUser = "SELECT username FROM users WHERE id = ?";
    const [userRows] = await database.execute(queryGetUser, [decoded.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
    }

    const currentUsername = userRows[0].username;

    // Hash password jika diperbarui
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Jika tidak ada password, pastikan hashedPassword diatur ke null
    if (!password) {
      hashedPassword = null;
    }

    // Memastikan hanya nilai yang berubah yang diupdate
    const query = `
      UPDATE users 
      SET 
        name = ?, 
        username = ?, 
        email = ?, 
        password = IF(? IS NOT NULL, ?, password)
      WHERE id = ?`;

    // Jika username tidak berubah, tetap gunakan username lama
    await database.execute(query, [
      name || null,          // Jika `name` tidak ada, set ke `null`
      username || currentUsername,  // Jika `username` kosong, gunakan yang lama
      email || null,         // Jika `email` tidak ada, set ke `null`
      hashedPassword,        // `hashedPassword` sudah diatur sebelumnya
      hashedPassword,        // `hashedPassword` digunakan jika ada perubahan
      decoded.userId,        // ID pengguna dari token
    ]);

    return res.status(200).json({ message: "Profil berhasil diperbarui!" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Terjadi kesalahan server." });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token tidak tersedia!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const query = "DELETE FROM users WHERE id = ?";
    await database.execute(query, [decoded.userId]);

    return res.status(200).json({ message: "Akun berhasil dihapus!" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Terjadi kesalahan server." });
  }
};


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
