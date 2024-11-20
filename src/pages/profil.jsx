import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function profil() { 
  return (
    <Fragment>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profile &amp; Pengaturan</title>
  <link rel="stylesheet" href="assets/css/profil.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <header>
    <img src="assets/img/logo.png" alt="Logo" className="logo" />
    <nav className="navigation">
      <a href="home.html" className="active">
        Home
      </a>
      <a
        href="#"
        className="navigation-link dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        Tabungan
      </a>
      <div className="dropdown-menu fade-up m-0">
        <a href="formbersama.html" className="dropdown-item">
          Tabungan Bersama
        </a>
        <a href="formpribadi.html" className="dropdown-item">
          Tabungan Mandiri
        </a>
      </div>
      <a href="keuangan.html">Keuangan</a>
      <a href="Artikel.html">Artikel</a>
      <a href="profil.html">
        <button className="profile">Profile</button>
      </a>
    </nav>
  </header>
  <main className="profile-container">
    <div className="profile-card">
      <div className="profile-image">
        <img src="assets/img/profile.jpg" alt="Profile" />
        <button className="edit-button">Ubah</button>
      </div>
      <div className="profile-info">
        <h2>Profile &amp; Pengaturan</h2>
        <form>
          <label htmlFor="name">Nama</label>
          <input type="text" id="name" placeholder="zeal" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="zealjynia@gmail.com" />
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            defaultValue="********"
            readOnly=""
          />
          <label htmlFor="language">Bahasa</label>
          <input
            type="text"
            id="language"
            placeholder="Bahasa Indonesia"
            readOnly=""
          />
          <div className="button-group">
            <button type="button" className="cancel-button">
              Batal
            </button>
            <button type="submit" className="save-button">
              Simpan
            </button>
          </div>
        </form>
      </div>
      <div className="account-buttons">
        <button className="logout-button">Log Out</button>
        <button className="delete-button">Delete Account</button>
      </div>
    </div>
  </main>
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <p>© 2024 Tabungin Inc.</p>
        <a href="#">Terms &amp; conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">Contact us</a>
      </div>
      <div className="footer-right">
        <a href="#">
          <img src="assets/img/f1.jpg" alt="Instagram" />
        </a>
        <a href="#">
          <img src="assets/img/f2.jpg" alt="Facebook" />
        </a>
        <a href="#">
          <img src="assets/img/f3.jpg" alt="YouTube" />
        </a>
        <a href="#">
          <img src="assets/img/f4.jpg" alt="LinkedIn" />
        </a>
        <a href="#">
          <img src="assets/img/f5.jfif" alt="Twitter" />
        </a>
      </div>
    </div>
  </footer>
</>

    </Fragment>
    
  );
}

export default profil;