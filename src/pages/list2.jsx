import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List2() {
  const [progress, setProgress] = useState(10);
  const [terkumpul, setTerkumpul] = useState(100000);
  const [target] = useState(30000000);
  const [kekurangan, setKekurangan] = useState(target - terkumpul);
  const [estimasiTanggal, setEstimasiTanggal] = useState("30/05/2030");

  useEffect(() => {
    // Update progress after 3 seconds
    const progressTimer = setTimeout(() => {
      setProgress(20);
    }, 3000);

    // Update estimasi tanggal after 5 seconds
    const tanggalTimer = setTimeout(() => {
      setEstimasiTanggal("01/06/2030");
    }, 5000);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(tanggalTimer);
    };
  }, []);

  useEffect(() => {
    setKekurangan(target - terkumpul);
  }, [terkumpul, target]);

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleProfileClick = () => {
    alert("Navigasi ke halaman Profile!");
  };

  return (
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
            <button className="profile" onClick={handleProfileClick}>
              Profile
            </button>
          </Link>
        </nav>
      </header>

      <main>
        <section className="detail-tabungan-container">
          <div className="back-button" onClick={handleBack}>
            ⬅️
          </div>
          <h1 className="detail-tabungan-container h1">Macbook</h1>
          <div className="tabungan-detail">
            <div className="tabungan-image-section">
              <img
                src="assets/img/macbook.jpg"
                alt="Macbook"
                className="tabungan-image"
              />
            </div>
            <div className="tabungan-info">
              <h2>{formatRupiah(target)}</h2>
              <p>{formatRupiah(100000)} Perminggu</p>
              <div className="progress">
                <span
                  style={{
                    color: progress >= 100 ? "green" : "#4a60d3",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  {progress}%
                </span>
              </div>
            </div>
            <div className="tabungan-dates">
              <div>
                <p>Tanggal Dibuat</p>
                <p>30/10/2024</p>
              </div>
              <div>
                <p>Estimasi Tanggal Ketercapaian</p>
                <p>{estimasiTanggal}</p>
              </div>
            </div>
            <div className="tabungan-summary">
              <div>
                <p>Terkumpul</p>
                <p>{formatRupiah(terkumpul)}</p>
              </div>
              <div>
                <p>Kekurangan</p>
                <p>{formatRupiah(kekurangan)}</p>
              </div>
            </div>
            <div className="tabungan-history">
              <p>30 Oktober 2024 - 12:00</p>
              <p>Rabu, 30 Oktober 2024</p>
              <p>+ {formatRupiah(100000)}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default List2;
