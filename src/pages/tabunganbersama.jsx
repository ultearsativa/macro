import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Tabunganbersama() {
  const [frequency, setFrequency] = useState("Mingguan");
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleFrequencyChange = (newFrequency) => {
    setFrequency(newFrequency);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]?.name || "Tidak ada file dipilih";
    setFileName(file);
    alert(`File dipilih: ${file}`);
  };

  const handleViewSaving = () => {
    alert("Detail tabungan akan segera tersedia!");
  };

  const handleSave = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menyimpan perubahan?");
    if (isConfirmed) {
      alert("Data berhasil disimpan!");
    }
  };

  const handleCancel = () => {
    const isCancelled = window.confirm("Apakah Anda yakin ingin membatalkan perubahan?");
    if (isCancelled) {
      window.location.reload();
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edit Tabungan</title>
      <link rel="stylesheet" href="assets/css/tabunganbersama.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/profil" >
            Home
          </Link>
          <a href="#" className="navigation-link dropdown-toggle active ">
            Tabungan
          </a>
          <div className="dropdown-menu fade-up m-0">
            <Link to="/formbersama" className="dropdown-item">
              Tabungan Bersama
            </Link>
            <Link to="/formpribadi" className="dropdown-item">
              Tabungan Mandiri
            </Link>
          </div>
          <Link to="/keuangan">Keuangan</Link>
          <Link to="/artikel">Artikel</Link>
          <Link to="/profil">
            <button className="profile">Profile</button>
          </Link>
        </nav>
      </header>

      <main>
        <section className="edit-tabungan-container">
          <div className="back-button" onClick={handleBack}>
            ⬅️
          </div>
          <h1>Holiday</h1>
          <div className="form-container">
            <div className="image-section">
              <img
                src="assets/img/holiday.jpg"
                alt="Holiday"
                className="tabungan-image"
              />
              <Link to="/listBersama2">
                <button className="lihat-tabungan" onClick={handleViewSaving}>
                  Lihat Tabungan
                </button>
              </Link>
            </div>
            <div className="form-section">
              <div className="form-group">
                <label>Judul</label>
                <input type="text" defaultValue="Holiday" />
              </div>
              <div className="form-group">
                <label>Target</label>
                <input type="text" defaultValue="Rp 30.000.000" />
              </div>
              <div className="form-group">
                <label>Nominal Setor</label>
                <input type="text" defaultValue="Rp 100.000" />
              </div>
              <div className="form-group">
                <label>Tanggal Awal Setor</label>
                <input type="date" defaultValue="2024-10-30" />
              </div>
              <div className="form-group frekuensi">
                {["Harian", "Mingguan", "Bulanan"].map((freq) => (
                  <button
                    key={freq}
                    className={`frekuensi-btn ${freq === frequency ? "active" : ""}`}
                    onClick={() => handleFrequencyChange(freq)}
                  >
                    {freq}
                  </button>
                ))}
              </div>
              <div className="form-group">
                <label>Tanggal Akhir Setor</label>
                <input type="date" defaultValue="2030-05-30" />
              </div>
              <div className="form-group">
                <label>Unggah Gambar</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="form-actions">
                <button className="btn batal" onClick={handleCancel}>
                  Batal
                </button>
                <button className="btn simpan" onClick={handleSave}>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Tabunganbersama;
