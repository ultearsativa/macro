import multer from 'multer';
import path from 'path';

// Tentukan tempat penyimpanan file dan nama file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder tempat gambar diupload
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Mengambil ekstensi file
    const filename = Date.now() + ext; // Nama file yang unik menggunakan timestamp
    cb(null, filename); // Menyimpan file dengan nama baru
  }
});

// Middleware untuk menangani upload file gambar
const savingsUpload = multer({ storage });

export { savingsUpload };
