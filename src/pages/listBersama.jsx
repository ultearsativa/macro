import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ListBersama() { 
  return (
    <Fragment>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tabungan Bersama</title>
  <link rel="stylesheet" href="assetscss/listBersama.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <header>
    <img src="assetsimg/logo.png" alt="Logo" className="logo" />
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
      <h1>Tabungan Bersama</h1>
      <div className="tabungan-select">
        <button>
          <span>🗂️ Pilih Jenis Tabungan</span>
          <span className="tabungan-jenis">Pribadi</span>
        </button>
      </div>
      <div className="tabungan-card">
        <div className="tabungan-item">
          <div className="tabungan-header">
            <span className="star">⭐</span>
            <h2>Holiday</h2>
            <span className="edit">✏️</span>
          </div>
          <img src="assets/img/holiday.jpg" alt="Macbook" className="item-image" />
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
        <div className="tabungan-item">
          <div className="tabungan-header">
            <span className="star">⭐</span>
            <h2>Birthday Party</h2>
            <span className="edit">✏️</span>
          </div>
          <img src="assets/img/b'day.jpg" alt="Skincare" className="item-image" />
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

export default ListBersama;