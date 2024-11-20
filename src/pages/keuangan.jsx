import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Keuangan() { 
  return (
    <Fragment>
        <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Financial Management</title>
          <link rel="stylesheet" href="assets/css/keuangan.css" />
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
                  <Link to ="/keuangan"><a href="keuangan.html" className="active">Keuangan</a></Link>
                  <Link to ="/artikel"><a href="Artikel.html">Artikel</a></Link>
                  <Link to ="/profil"><a href="profil.html">
                  <button className="profile">Profile</button>
                  </a></Link>
              </nav>
          </header>
          <section className="banner">
            <div className="banner-text">
              <h1>Kelola Keuangan Kamu Sekarang!</h1>
              <p>
                Di sini, kamu bisa mengalokasikan dana sesuai kebutuhan, mencatat setiap
                pemasukan dan pengeluaran, serta membuat grafik perkembangan keuanganmu.
              </p>
              <button className="expand-btn">▼</button>
            </div>
            <img
              src="assets/img/keuangan.jpeg"
              alt="Finance Management Image"
              className="banner-img"
            />
          </section>
          <section className="manage-finance">
            <h2>Ayo kelola keuanganmu!</h2>
            <div className="finance-overview">
              <div className="income">
                <label>Penghasilan</label>
                <input type="text" defaultValue="Rp 5.250.000" readOnly="" />
              </div>
              <div className="actions">
                <button className="edit-btn">Edit</button>
                <button className="save-btn">Simpan</button>
              </div>
            </div>
            <form className="finance-form">
              <label>Tanggal</label>
              <input type="date" defaultValue="2024-09-01" />
              <label>Belanja Bulanan</label>
              <input type="text" placeholder="Rp 2.000.000" />
              <label>Transportasi</label>
              <input type="text" placeholder="Rp 500.000" />
              <label>Kebutuhan Pribadi</label>
              <input type="text" placeholder="Rp masukkan nominal" />
              <button type="submit" className="submit-btn">
                Simpan
              </button>
            </form>
          </section>
          <section className="summary">
            <h3>Pengeluaran dan Penghasilan</h3>
            <div className="summary-cards">
              <div className="card">
                <p>Total Penghasilan</p>
                <p>Rp 5.000.000</p>
              </div>
              <div className="card">
                <p>Total Pengeluaran</p>
                <p>Rp 3.500.000</p>
              </div>
              <div className="card">
                <p>Sisa Dana</p>
                <p>Rp 1.750.000</p>
              </div>
            </div>
          </section>
          <section className="transactions">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Tanggal</th>
                  <th>Kategori</th>
                  <th>Jumlah</th>
                  <th>Catatan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>01-09-2024</td>
                  <td>Belanja Bulanan</td>
                  <td>-Rp 2.000.000</td>
                  <td>makanan dan minuman</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>01-09-2024</td>
                  <td>Transportasi</td>
                  <td>-Rp 500.000</td>
                  <td>busway dan gojek</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <div className="container">
              <div className="title">Grafik Pemasukkan dan Pengeluaran</div>
              <div className="chart">
                <div className="bar">
                  <div className="income">Pemasukkan</div>
                  <div className="expense">Pengeluaran</div>
                  <p>April</p>
                </div>
                <div className="bar">
                  <div className="income" style={{ height: "40%" }}>
                    Pemasukkan
                  </div>
                  <div className="expense" style={{ height: "60%" }}>
                    Pengeluaran
                  </div>
                  <p>Mei</p>
                </div>
                <div className="bar">
                  <div className="income" style={{ height: "25%" }}>
                    Pemasukkan
                  </div>
                  <div className="expense" style={{ height: "75%" }}>
                    Pengeluaran
                  </div>
                  <p>Juni</p>
                </div>
                <div className="bar">
                  <div className="income" style={{ height: "50%" }}>
                    Pemasukkan
                  </div>
                  <div className="expense" style={{ height: "50%" }}>
                    Pengeluaran
                  </div>
                  <p>Juli</p>
                </div>
                <div className="bar">
                  <div className="income" style={{ height: "20%" }}>
                    Pemasukkan
                  </div>
                  <div className="expense" style={{ height: "80%" }}>
                    Pengeluaran
                  </div>
                  <p>Agustus</p>
                </div>
                <div className="bar">
                  <div className="income" style={{ height: "45%" }}>
                    Pemasukkan
                  </div>
                  <div className="expense" style={{ height: "55%" }}>
                    Pengeluaran
                  </div>
                  <p>September</p>
                </div>
              </div>
              <div className="legend">
                <div className="income-legend">
                  <span />: Pemasukkan
                </div>
                <div className="expense-legend">
                  <span />: Pengeluaran
                </div>
              </div>
            </div>
          </section>
          <section>
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
          </section>
        </>
    </Fragment>
    
  );
}

export default Keuangan;