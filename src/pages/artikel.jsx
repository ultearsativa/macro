import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Artikel() { 
  return (
    <Fragment>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tabung &amp; Bijak - Artikel</title>
  <link rel="stylesheet" href="assets/css/Artikel.css" />
  <header>
    <img src="assets/img/logo.png" alt="Logo" className="logo" />
    <nav className="navigation">
                <Link to ="/home"><a href="home.html">
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
                  <Link to ="/artikel"><a href="Artikel.html" className="active">Artikel</a></Link>
                  <Link to ="/profil"><a href="profil.html">
                  <button className="profile">Profile</button>
                  </a></Link>
              </nav>
  </header>
  <section className="banner">
    <div className="overlay" />
    <div className="banner-content">
      <h2>Mengatasi Tantangan Menabung</h2>
      <a href="isiartikel.html" className="btn-primary">
        Baca Selengkapnya
      </a>
    </div>
  </section>
  <section className="trending">
    <h3>Trending :</h3>
    <a href="isiartikel.html">Tips Menabung</a>
    <a href="isiartikel.html">Investasi</a>
    <a href="isiartikel.html">Menabung Efektif</a>
    <a href="isiartikel.html">Strategi Investasi</a>
    <a href="isiartikel.html">Cara Hemat</a>
    <a href="isiartikel.html">Bagaimana Cara</a>
  </section>
  <div className="container">
    <div className="articles">
      <div className="card">
        <img src="assets/img/artikel1.jpeg" alt="Gambar Artikel" />
        <h4>Tips Menabung Cepat</h4>
        <p>Menabung adalah langkah penting dalam perencanaan finansial...</p>
        <a href="isiartikel.html" className="btn-secondary">
          Baca Selengkapnya
        </a>
      </div>
      <div className="card">
        <img src="assets/img/artikel2.jpg" alt="Gambar Artikel" />
        <h4>Menabung dengan Bijak</h4>
        <p>Menabung dengan bijak adalah keterampilan penting...</p>
        <a href="isiartikel.html" className="btn-secondary">
          Baca Selengkapnya
        </a>
      </div>
      <div className="card">
        <img src="assets/img/artikel3.jpg" alt="Gambar Artikel" />
        <h4>Menabung dengan Bijak</h4>
        <p>Menabung dengan bijak adalah keterampilan penting...</p>
        <a href="#" className="btn-secondary">
          Baca Selengkapnya
        </a>
      </div>
      <div className="card">
        <img src="assets/img/artikel4.png" alt="Gambar Artikel" />
        <h4>Menabung dengan Bijak</h4>
        <p>Menabung dengan bijak adalah keterampilan penting...</p>
        <a href="isiartikel.html" className="btn-secondary">
          Baca Selengkapnya
        </a>
      </div>
      <div className="card">
        <img src="assets/img/artikel5.jpeg" alt="Gambar Artikel" />
        <h4>Menabung dengan Bijak</h4>
        <p>Menabung dengan bijak adalah keterampilan penting...</p>
        <a href="isiartikel.html" className="btn-secondary">
          Baca Selengkapnya
        </a>
      </div>
      <div className="card">
        <img src="assets/img/artikel6.jpg" alt="Gambar Artikel" />
        <h4>Menabung dengan Bijak</h4>
        <p>Menabung dengan bijak adalah keterampilan penting...</p>
        <a href="isiartikel.html" className="btn-secondary">
          Baca Selengkapnya
        </a>
      </div>
    </div>
    <aside className="sidebar">
      <input type="text" placeholder="Cari Artikel" />
      <h3>Artikel Populer</h3>
      <ul>
        <li>
          <a href="#">Rahasia Menabung di Tengah...</a>
        </li>
        <li>
          <a href="#">Cara Menabung Tanpa Meng...</a>
        </li>
        <li>
          <a href="#">5 Strategi Menabung Cerdas</a>
        </li>
        <li>
          <a href="#">Menabung di Era Digital</a>
        </li>
        <li>
          <a href="#">Menabung untuk Liburan</a>
        </li>
      </ul>
    </aside>
  </div>
</>

    </Fragment>
    
  );
}

export default Artikel;