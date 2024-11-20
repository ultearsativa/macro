import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function List2() { 
  return (
    <Fragment>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Detail Tabungan</title>
  <link rel="stylesheet" href="assets/css/listT.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <header>
    <img src="assets/img/logo.png" alt="Logo" className="logo" />
    <nav className="navigation">
                <Link to ="/home"><a href="home.html" className="active">
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
                  <Link to ="/formbersama"><a href="formbersama.html" className="dropdown-item">
                    Tabungan Bersama
                  </a></Link>
                  <Link to ="/formpribadi"><a href="formpribadi.html" className="dropdown-item">
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
    <section className="detail-tabungan-container">
      <div className="back-button">⬅️</div>
      <h1>Macbook</h1>
      <div className="tabungan-detail">
        <div className="tabungan-image-section">
          <img src="assets/img/macbook.jpg" alt="Macbook" className="tabungan-image" />
        </div>
        <div className="tabungan-info">
          <h2>Rp 30.000.000</h2>
          <p>Rp 100.000 Perminggu</p>
          <div className="progress">
            <span>10%</span>
          </div>
        </div>
        <div className="tabungan-dates">
          <div>
            <p>Tanggal Dibuat</p>
            <p>30/10/2024</p>
          </div>
          <div>
            <p>Estimasi Tanggal Ketercapaian</p>
            <p>30/05/2030</p>
          </div>
        </div>
        <div className="tabungan-summary">
          <div>
            <p>Terkumpul</p>
            <p>Rp 100.000</p>
          </div>
          <div>
            <p>Kekurangan</p>
            <p>Rp 29.900.000</p>
          </div>
        </div>
        <div className="tabungan-history">
          <p>30 Oktober 2024 - 12:00</p>
          <p>Rabu, 30 Oktober 2024</p>
          <p>+ Rp 100.000</p>
        </div>
      </div>
    </section>
  </main>
</>
    </Fragment>
    
  );
}

export default List2;