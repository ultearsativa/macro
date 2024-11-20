import React, { Fragment } from "react";

function Isiartikel() { 
  return (
    <Fragment>
      <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Artikel Menabung</title>
          <link rel="stylesheet" href="assets/css/isiartikel.css" />
          <style dangerouslySetInnerHTML={{ __html: "\n\n    " }} />
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
          <section className="trending">
            <h2>Trending:</h2>
            <a href="#">Tips Menabung</a>
            <a href="#">Investasi</a>
            <a href="#">Menabung Efektif</a>
            <a href="#">Strategi Investasi</a>
            <a href="#">Cara Hemat</a>
            <a href="#">Bagaimana Cara &gt;</a>
          </section>
          <div className="container">
            <span className="back-button">←</span>
            <div className="search-box">
              <input type="text" placeholder="Cari Artikel" />
            </div>
            <div className="article-image">
              <img src="assets/img/artikel1.jpeg" alt="Gambar Artikel" />
            </div>
            <div className="article-content">
              <h1>
                Tips Menabung Cepat: 5 Langkah Efektif untuk Mencapai Target Finansial
              </h1>
              <p>
                Menabung dengan cepat bisa menjadi tantangan, tetapi dengan strategi
                yang tepat, tujuan finansialmu bisa tercapai lebih mudah. Berikut 5 tips
                penting untuk menabung dengan cepat dan efektif:
              </p>
              <p>
                <strong>1. Tentukan Tujuan Tabungan yang Spesifik:</strong> Miliki
                tujuan tabungan yang jelas dan spesifik, seperti menabung untuk dana
                darurat atau liburan. Tentukan jumlah yang ingin kamu capai dan waktu
                yang dibutuhkan. Dengan tujuan yang konkret, kamu akan lebih termotivasi
                dan terarah dalam menabung.
              </p>
              <p>
                <strong>2. Buat Rencana Anggaran dan Kontrol Pengeluaran:</strong> Susun
                anggaran bulanan yang memisahkan antara kebutuhan dan keinginan. Batasi
                pengeluaran yang tidak penting dan alokasikan sebagian dari penghasilan
                untuk ditabung sejak awal.
              </p>
              <p>
                <strong>3. Kurangi Pengeluaran Kecil yang Tidak Perlu:</strong> Evaluasi
                pengeluaran harian dan bulanan, seperti langganan yang jarang digunakan
                atau kebiasaan membeli kopi setiap hari.
              </p>
            </div>
          </div>
        </>
    </Fragment>
    
  );
}

export default Isiartikel;