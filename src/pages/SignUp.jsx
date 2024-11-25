import React, { Fragment,useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  // State untuk menangani data formulir
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registrasi berhasil!");
        // Reset form jika perlu
        setForm({ name: "", username: "", email: "", password: "" });
      } else {
        alert(`Gagal: ${data.message}`);
      }
    } catch (error) {
      alert("Terjadi kesalahan saat registrasi. Pastikan backend berjalan.");
    }
  };

  return (
    <Fragment>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Register Page</title>
      <link rel="stylesheet" href="assets/css/styles.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/login">
            <button className="profile">Login</button>
          </Link>
        </nav>
      </header>
      <main className="register-container">
        <div className="register-box">
          <h2>Kamu Belum Mempunyai Akun, Daftarkan Sekarang!</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Nama Anda"
              onChange={(e)=> handleChange (e)}
              value={form.name}
              required
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Masukkan Username Anda"
              onChange={(e)=> handleChange (e)}
              value={form.username}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Email Anda"
              onChange={(e)=> handleChange (e)}
              value={form.email}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan Kata Sandi"
              onChange={(e)=> handleChange (e)}
              value={form.password}
              required
            />
            <button type="submit" className="register-btn">
              Sign Up
            </button>
            <div className="divider">Or</div>
            <button
              type="button"
              className="google-register"
              aria-label="Continue with Google"
            >
              Continue with Google
            </button>
          </form>
        </div>
      </main>
      <footer>
        <button className="faq-btn">
          FAQ & Bantuan <span>❓</span>
        </button>
      </footer>
    </Fragment>
  );
}

export default SignUp;
