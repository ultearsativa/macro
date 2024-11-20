import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Formpribadi() { 
  return (
    <Fragment>
        <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Tabungan Form</title>
          <link rel="stylesheet" href="assets/css/formpribadi.css" />
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
          <section>
            <div className="main-container">
              <div className="form-container">
                <h2>Ayoo buat tabungan untuk dirimu dimasa depan!</h2>
                <form className="savings-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Judul</label>
                      <input type="text" placeholder="Ketik judul di sini yaa" />
                    </div>
                    <div className="form-group">
                      <label>Target</label>
                      <input type="text" placeholder="Rp" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Jenis Tabungan</label>
                    <div className="select-box">Bersama</div>
                  </div>
                  <div className="form-group">
                    <label>Tanggal Awal Setor</label>
                    <input type="date" defaultValue="2024-10-24" />
                  </div>
                  <div className="form-group frequency">
                    <label>Frekuensi Setor</label>
                    <div className="frequency-options">
                      <button type="button">Harian</button>
                      <button type="button" className="active">
                        Mingguan
                      </button>
                      <button type="button">Bulanan</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tanggal Akhir Setor</label>
                    <input type="date" defaultValue="2024-10-24" />
                  </div>
                  <div className="form-group">
                    <label>Nominal Setor</label>
                    <input type="text" placeholder="Rp." />
                  </div>
                  <div className="form-group">
                    <label>Unggah Gambar</label>
                    <button className="upload-btn">Pilih File</button>
                  </div>
                  <div className="form-group">
                    <label>Undang Teman</label>
                    <input type="text" placeholder="Ketik username di sini yaa" />
                  </div>
                  <div className="form-actions">
                    <button type="button" className="cancel">
                      Batal
                    </button>
                    <Link to ="/isiartikel"><a href="list.html">
                      <button type="submit" className="save">
                        Simpan
                      </button>
                    </a></Link>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
    </Fragment>
    
  );
}

export default Formpribadi;