import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const TabunganItem = ({ tabungan, onEdit, onFavorite }) => {
  return (
    <div className="tabungan-item">
      <div className="card">
        <div className="card-header">
          <i
            className={`star-icon ${tabungan.isFavorited ? "favorited" : ""}`}
            onClick={() => onFavorite(tabungan.id)}
          >
            ★
          </i>
          <span>{tabungan.name}</span>
          <i className="edit-icon" onClick={() => onEdit(tabungan.id, tabungan.name)}>✏️</i>
        </div>
        <img src={tabungan.image} alt={tabungan.name} className="card-image" />
      </div>
      <div className="tabungan-info">
        <div>Target <span>{tabungan.target}</span></div>
        <div>Nominal Setor <span>{tabungan.nominalSetor}</span></div>
        <div>Tanggal Awal Setor <span>{tabungan.startDate}</span></div>
        <div>Tanggal Akhir Setor <span>{tabungan.endDate}</span></div>
         <div>Nominal Saat Ini <span>{tabungan.currentAmount}</span></div> 
      </div>
    </div>
  );
};

const formatTanggal = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


const ListBersama = () => {
  const [tabunganList, setTabunganList] = useState([]);
  const [jenisTabungan, setJenisTabungan] = useState("Bersama");
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data dari API
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Token dari localStorage
        const response = await fetch("http://localhost:5000/api/auth/bersama", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Gagal mengambil data tabungan.");
        }

        const data = await response.json();
        setTabunganList(data);
      } catch (error) {
        console.error("Error fetching tabungan data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectJenisTabungan = () => {
    const types = ["Pribadi", "Holiday", "Birthday Party"];
    const currentIndex = types.indexOf(jenisTabungan);
    const nextIndex = (currentIndex + 1) % types.length;
    setJenisTabungan(types[nextIndex]);
  };

  const handleFavorite = (id) => {
    setTabunganList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isFavorited: !item.isFavorited } : item
      )
    );
  };

  const handleDetail = (id) => {
    navigate(`/editbersama/${id}`);
  }

  const handleEdit = (id) => {
    navigate(`/tabunganbersama/${id}`); 
  };

  return (
    <Fragment>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tabungan Bersama</title>
      <link rel="stylesheet" href="assets/css/listBersama.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home">
            <a href="home.html" className="active">Home</a>
          </Link>
          <a
            href="#"
            className="navigation-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Tabungan
          </a>
          <div className="dropdown-menu fade-up m-0">
            <Link to="/formbersama">
              <a href="formbersama.html" className="dropdown-item">Tabungan Bersama</a>
            </Link>
            <Link to="/formpribadi">
              <a href="formpribadi.html" className="dropdown-item">Tabungan Mandiri</a>
            </Link>
          </div>
          <Link to="/keuangan">
            <a href="keuangan.html">Keuangan</a>
          </Link>
          <Link to="/artikel">
            <a href="Artikel.html">Artikel</a>
          </Link>
          <Link to="/profil">
            <a href="profil.html">
              <button className="profile">Profile</button>
            </a>
          </Link>
        </nav>
      </header>
      <main>
        <section className="tabungan-container">
          <h1>Tabungan Bersama</h1>
          <div className="tabungan-select">
            <button onClick={handleSelectJenisTabungan}>
              <span>🗂️ Pilih Jenis Tabungan</span>
              <span className="tabungan-jenis">{jenisTabungan}</span>
            </button>
          </div>
          <div className="tabungan-card">
            {tabunganList.map((tabungan) => (
              <TabunganItem
                key={tabungan.id}
                tabungan={{
                  id: tabungan.id,
                  name: tabungan.judul,
                  target: `Rp ${parseInt(tabungan.target_tabungan).toLocaleString('id-ID')}`,
                  nominalSetor: `Rp ${parseInt(tabungan.nominal_setor).toLocaleString('id-ID')}`,
                  startDate: formatTanggal(tabungan.tanggal_awal_setor),
                  endDate: formatTanggal(tabungan.tanggal_akhir_setor),
                  currentAmount: `Rp ${parseFloat(tabungan.currentAmount).toLocaleString('id-ID')}`,
                  image: `http://localhost:5000/${tabungan.unggah_gambar}`,
                }}
                onEdit={handleEdit}
                onFavorite={handleDetail}
              />
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ListBersama;
