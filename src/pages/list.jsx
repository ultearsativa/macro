import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function List() {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const [data, setData] = useState(null); // State untuk data tabungan bersama
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    console.log("Fetching data for ID:", id); // Debugging ID

    // Fungsi untuk fetch data tabungan bersama
    const fetchData = async () => {
      try {
        // Ambil token dari localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Token tidak tersedia. Harap login terlebih dahulu.");
        }

        const response = await fetch(`http://localhost:5000/api/auth/pribadi/history/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Result:", result); // Debugging log untuk memeriksa respons API

        if (result && result.length > 0) {
          setData(result[0]); // Ambil tabungan pertama
        } else {
          throw new Error("Data tidak ditemukan atau array kosong");
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Error:", err); // Debugging log untuk menangani error
        setError(err.message);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Data tidak ditemukan.</p>;

  return (
    <>
      <header>
        <link rel="stylesheet" href="/assets/css/listT.css" />
        <img src="/assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home">Home</Link>
          <Link to="/keuangan">Keuangan</Link>
        </nav>
      </header>

      <main>
        <section className="detail-tabungan-container">
          <div className="back-button" onClick={() => window.history.back()}>
            ⬅️
          </div>
          <h1>{data.judul}</h1>
          <div className="tabungan-detail">
            <div className="tabungan-image-section">
              <img
                src={data.unggah_gambar || "/assets/img/default.jpg"}
                alt={data.judul}
                className="tabungan-image"
              />
            </div>
            <div className="tabungan-info">
              <h2>{formatRupiah(data.target_tabungan)}</h2>
              <p>
                {formatRupiah(data.nominal_setor)} {data.frekuensi_setor}
              </p>
              <p>Terkumpul: {formatRupiah(data.currentAmount)}</p>
            </div>
            <div className="tabungan-dates">
              <div>
                <p>Tanggal Dibuat</p>
                <p>{new Date(data.tanggal_awal_setor).toLocaleDateString()}</p>
              </div>
              <div>
                <p>Estimasi Tanggal Ketercapaian</p>
                <p>{new Date(data.tanggal_akhir_setor).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default List;
