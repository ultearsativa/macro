import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Isiartikel() {
  const [searchText, setSearchText] = useState("");
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const navigate = useNavigate();

  // Efek scroll untuk tombol "Scroll to Top"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  // Daftar trending links untuk demo
  const trendingLinks = [
    "Tips Menabung",
    "Investasi",
    "Menabung Efektif",
    "Strategi Investasi",
    "Cara Hemat",
    "Bagaimana Cara",
  ];

  // Filter trending links berdasarkan pencarian
  const filteredLinks = trendingLinks.filter((link) =>
    link.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <header>
      <link rel="stylesheet" href="assets/css/isiartikel.css" />
      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
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
                  <Link to ="/artikel" className="active"><a href="Artikel.html">Artikel</a></Link>
                  <Link to ="/profil"><a href="profil.html">
                  <button className="profile">Profile</button>
                  </a></Link>
              </nav>
       </header>
      <section className="trending">
        <h2>Trending:</h2>
        {filteredLinks.map((link, index) => (
          <Link
            key={index}
            to="#"
            className="trending-link"
          >
            {link}
          </Link>
        ))}
      </section>

      <div className="container">
        <span className="back-button" onClick={() => navigate(-1)}>
          ←
        </span>

        <div className="search-box">
          <input
            type="text"
            placeholder="Cari Artikel"
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        <div className="article-image">
          <img src="assets/img/artikel1.jpeg" alt="Gambar Artikel" />
        </div>

        <div className="article-content">
          <h1>Tips Menabung Cepat: 5 Langkah Efektif untuk Mencapai Target Finansial</h1>
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

      {showScrollToTop && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Isiartikel;
