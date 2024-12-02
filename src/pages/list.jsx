import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function List() { 
  return (
    <Fragment>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tabungan Pribadi</title>
        <link rel="stylesheet" href="assets/css/list.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <header>
          <img src="assets/img/logo.png" alt="Logo" className="logo" />
          <nav className="navigation">
                <Link to ="/home"><a href="home.html">
                  Home
                </a></Link>
                <a
                  href="#"
                  className="navigation-link dropdown-toggle active"
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
    <section className="tabungan-container">
      <h1>Tabungan Mandiri</h1>
      <div className="tabungan-select">
        <button>
          <span>🗂️ Pilih Jenis Tabungan</span>
          <span className="tabungan-jenis">Pribadi</span>
        </button>
      </div>
      <div className="tabungan-card">
        <div className="tabungan-item">
        <div class="card">
    <div class="card-header">
      <i class="star-icon">★</i>
      <span>Macbook</span>
      <i class="edit-icon">✏️</i>
    </div>
    <img
      src="assets/img/macbook.jpg"
      alt="Holiday Beach"
      class="card-image"
    />
  </div>
          <div className="tabungan-info">
            <div>
              Target <span>Rp 30.000.000</span>
            </div>
            <div>
              Nominal Setor <span>Rp 200.000</span>
            </div>
            <div>
              Tanggal Awal Setor <span>24/10/2024</span>
            </div>
            <div>
              Tanggal Akhir Setor <span>24/12/2024</span>
            </div>
            <div>
              Nominal Saat Ini <span>Rp 15.000.000</span>
            </div>
          </div>
        </div>
        </div>
        <div className="tabungan-card">
        <div className="tabungan-item">
        <div class="card">
    <div class="card-header">
      <i class="star-icon">★</i>
      <span>Skincare</span>
      <i class="edit-icon">✏️</i>
    </div>
    <img
      src="assets/img/skincare.jpeg"
      alt="Holiday Beach"
      class="card-image"
    />
  </div>
          <div className="tabungan-info">
            <div>
              Target <span>Rp 1.000.000</span>
            </div>
            <div>
              Nominal Setor <span>Rp 50.000</span>
            </div>
            <div>
              Tanggal Awal Setor <span>25/12/2024</span>
            </div>
            <div>
              Tanggal Akhir Setor <span>25/1/2024</span>
            </div>
            <div>
              Nominal Saat Ini <span>Rp 300.000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
      </>
    </Fragment>
    
  );
}

export default List;