import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Formbersama() {
  const [formData, setFormData] = useState({
    title: "",
    target: "",
    startDate: "2024-10-24",
    endDate: "2024-10-24",
    amount: "",
    invite: "",
    uploadFileName: "Pilih File",
    frequency: "Mingguan", 
  });

  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFrequencyChange = (freq) => {
    setFormData((prevData) => ({ ...prevData, frequency: freq }));
  };

  const handleUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = () => {
      if (fileInput.files.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          uploadFileName: fileInput.files[0].name,
        }));
      }
    };

    fileInput.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "uploadFileName") {
        newErrors[key] = "Harap isi field ini!";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Harap isi semua data pada formulir!");
    } else {
      setErrors({});
      alert("Formulir berhasil dikirim!");
      navigate("/listBersama"); 
    }
  };
  return (
      <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Tabungan Form</title>
          <link rel="stylesheet" href="assets/css/bersama.css" />
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
          <section>
        <div className="main-container">
          <div className="form-container">
            <h2>Ayoo buat tabungan dengan teman atau keluargamu!</h2>
            <form className="savings-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Judul</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Ketik judul di sini yaa"
                    onChange={handleInputChange}
                    style={{
                      border: errors.title ? "2px solid red" : "",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Target</label>
                  <input
                    type="text"
                    name="target"
                    value={formData.target}
                    placeholder="Rp"
                    onChange={handleInputChange}
                    style={{
                      border: errors.target ? "2px solid red" : "",
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Jenis Tabungan</label>
                <div className="select-box">Bersama</div>
              </div>
              <div className="form-group">
                <label>Tanggal Awal Setor</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group frequency">
                <label>Frekuensi Setor</label>
                <div className="frequency-options">
                  {["Harian", "Mingguan", "Bulanan"].map((freq) => (
                    <button
                      type="button"
                      key={freq}
                      className={formData.frequency === freq ? "active" : ""}
                      onClick={() => handleFrequencyChange(freq)}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Tanggal Akhir Setor</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Nominal Setor</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  placeholder="Rp."
                  onChange={handleInputChange}
                  style={{
                    border: errors.amount ? "2px solid red" : "",
                  }}
                />
              </div>
              <div className="form-group">
                <label>Unggah Gambar</label>
                <button type="button" className="upload-btn" onClick={handleUpload}>
                  {formData.uploadFileName}
                </button>
              </div>
              <div className="form-group">
                <label>Undang Teman</label>
                <input
                  type="text"
                  name="invite"
                  value={formData.invite}
                  placeholder="Ketik username di sini yaa"
                  onChange={handleInputChange}
                  style={{
                    border: errors.invite ? "2px solid red" : "",
                  }}
                />
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel"
                  onClick={() => navigate("/home")}
                >
                  Batal
                </button>
                <button type="submit" className="save">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Formbersama;