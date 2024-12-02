import React, { useState } from "react";
import { Link } from "react-router-dom";

function TabunganPribadi() {
  const [activeFrequency, setActiveFrequency] = useState("Mingguan");

  const handleBack = () => {
    window.history.back();
  };

  const handleFrequencyClick = (frequency) => {
    setActiveFrequency(frequency);
  };

  const handleCancel = () => {
    if (window.confirm("Apakah Anda yakin ingin membatalkan perubahan?")) {
      window.history.back();
    }
  };

  const handleSave = () => {
    alert("Data berhasil disimpan!");
  };

  const handleViewSaving = () => {
    alert("Lihat detail tabungan belum tersedia.");
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edit Tabungan</title>
      <link rel="stylesheet" href="assets/css/tabunganp.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home">
            Home
          </Link>
          <a href="#" className="navigation-link dropdown-toggle active">
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
          <h1>Macbook</h1>
          <div className="form-container">
            <div className="image-section">
              <img
                src="assets/img/macbook.jpg"
                alt="Macbook"
                className="tabungan-image"
              />
              <Link to="/list2">
                <button className="lihat-tabungan" onClick={handleViewSaving}>
                  Lihat Tabungan
                </button>
              </Link>
            </div>
            <div className="form-section">
              <div className="form-group">
                <label>Judul</label>
                <input type="text" defaultValue="Macbook" />
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
                {["Harian", "Mingguan", "Bulanan"].map((frequency) => (
                  <button
                    key={frequency}
                    className={`frekuensi-btn ${
                      activeFrequency === frequency ? "active" : ""
                    }`}
                    onClick={() => handleFrequencyClick(frequency)}
                  >
                    {frequency}
                  </button>
                ))}
              </div>
              <div className="form-group">
                <label>Tanggal Akhir Setor</label>
                <input type="date" defaultValue="2030-05-30" />
              </div>
              <div className="form-group">
                <label>Unggah Gambar</label>
                <input type="file" />
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

export default TabunganPribadi;
