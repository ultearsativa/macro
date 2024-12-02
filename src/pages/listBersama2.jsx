import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListBersama2() {
  const navigate = useNavigate();
  
  // State untuk data tabungan
  const [totalAmount] = useState(30000000); // Target tabungan
  const [collectedAmount, setCollectedAmount] = useState(100000); // Jumlah terkumpul
  const [progressPercent, setProgressPercent] = useState(0); // Persentase progress
  const [transactions, setTransactions] = useState([
    {
      date: "30 Oktober 2024 - 12:00",
      day: "Rabu, 30 Oktober 2024",
      amount: "+ Rp 100.000",
    },
  ]); // Riwayat transaksi

  // Hitung progress saat komponen dimuat
  useEffect(() => {
    const progress = ((collectedAmount / totalAmount) * 100).toFixed(2);
    setProgressPercent(progress);
  }, [collectedAmount, totalAmount]);

  // Fungsi untuk menambahkan transaksi baru
  const addTransaction = () => {
    const newTransaction = {
      date: "17 November 2024 - 09:30",
      day: "Senin, 17 November 2024",
      amount: "+ Rp 150.000",
    };

    setTransactions((prev) => [...prev, newTransaction]);
    setCollectedAmount((prev) => prev + 150000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Detail Tabungan</title>
      <link rel="stylesheet" href="assets/css/listBersama2.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home">Home</Link>
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
        <section className="detail-tabungan-container">
          <div className="back-button" onClick={handleBack}>
            ⬅️
          </div>
          <h1>Holiday</h1>
          <div className="tabungan-detail">
            <div className="tabungan-image-section">
              <img
                src="assets/img/holiday.jpg"
                alt="Holiday"
                className="tabungan-image"
              />
            </div>
            <div className="tabungan-info">
              <h2>Rp {totalAmount.toLocaleString()}</h2>
              <p>Rp 100.000 Perminggu</p>
              <div className="progress">
                <span>{progressPercent}%</span>
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
                <p>Rp {collectedAmount.toLocaleString()}</p>
              </div>
              <div>
                <p>Kekurangan</p>
                <p>Rp {(totalAmount - collectedAmount).toLocaleString()}</p>
              </div>
            </div>
            <div className="tabungan-history">
              {transactions.map((transaction, index) => (
                <div key={index}>
                  <p>{transaction.date}</p>
                  <p>{transaction.day}</p>
                  <p>{transaction.amount}</p>
                </div>
              ))}
            </div>
            <button className="add-transaction" onClick={addTransaction}>
              Tambah Transaksi
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListBersama2;
