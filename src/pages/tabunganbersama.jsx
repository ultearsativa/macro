import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Tabunganbersama() { 
  return (
    <Fragment>
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
                <Link to ="/profil"><a href="home.html" className="active">
                  Home
                </a></Link>
                <a
                  href="#"
                  className="navigation-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Tabungan
                </a>
                <div className="dropdown-menu fade-up m-0">
                  <Link to ="/profil"><a href="formbersama.html" className="dropdown-item">
                    Tabungan Bersama
                  </a></Link>
                  <Link to ="/profil"><a href="formpribadi.html" className="dropdown-item">
                    Tabungan Mandiri
                  </a></Link>
                </div>
                  <Link to ="/keuangan"><a href="keuangan.html">Keuangan</a></Link>
                  <Link to ="/artikel"><a href="Artikel.html">Artikel</a></Link>
                  <Link to ="/profil"><a href="profil.html">
                  <button className="profile">Profile</button>
                  </a></Link>
              </nav>
  </header>
  <main>
    <section className="edit-tabungan-container">
      <div className="back-button" href="#">
        ⬅️
      </div>
      <h1>Macbook</h1>
      <div className="form-container">
        <div className="image-section">
          <img src="assets/img/holiday.jpg" alt="Macbook" className="tabungan-image" />
          <a href="lisBersama2.html">
            <button className="lihat-tabungan">Lihat Tabungan</button>
          </a>
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
            <button className="frekuensi-btn">Harian</button>
            <button className="frekuensi-btn active">Mingguan</button>
            <button className="frekuensi-btn">Bulanan</button>
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
            <button className="btn batal">Batal</button>
            <button className="btn simpan">Simpan</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</>

    </Fragment>
    
  );
}

export default Tabunganbersama;