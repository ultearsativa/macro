import React, { Fragment } from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

function Login() { 
  const navigate = useNavigate(); // Menggunakan hook useNavigate untuk navigasi programatik

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted!");
    // Navigasi ke halaman home setelah login
    navigate("/home"); // Ganti '/home' dengan path halaman home yang sesuai
  };

  return (
    <Fragment>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tabungin Login Page</title>
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <script src="assets/js/script.js"></script>
      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <a href="home.html">Home</a>
          <a href="tabunganbersama.html">Tabungan</a>
          <a href="keuangan.html">Keuangan</a>
          <a href="Artikel.html">Artikel</a>
          <Link to="/signup">
            <button className="profile">SignUp</button>
          </Link>
        </nav>
      </header>
      <main className="login-container">
        <div className="login-box">
          <h2>Kamu Sudah Mempunyai Akun, Silahkan Log In!</h2>
          <form>
            <label htmlFor="email">Email or Username</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email or Username"
              aria-label="Email or Username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              aria-label="Password"
              required
            />
            <Link to ="/home">
            <button type="submit" className="login-btn" aria-label="Log In">Log In</button>
            </Link>
            <div className="divider">Or</div>
            <button
              type="button"
              className="google-login"
              aria-label="Continue with Google"
            >
              Continue with Google
            </button>
          </form>
        </div>
      </main>
      <footer>
        <button className="faq-btn">
          FAQ &amp; Bantuan <span>❓</span>
        </button>
      </footer>
    </Fragment>
  );
}

export default Login;
