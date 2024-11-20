import React, { Fragment } from "react";
import { Link } from "react-router-dom"; 

function SignUp() { 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted!");
    
  };

  return (
    <Fragment>
      <>
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
              <input type="text" id="name" placeholder="Masukkan Nama Anda" required />
              
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Masukkan Username Anda" required />
              
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Masukkan Email Anda" required />
              
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan Kata Sandi"
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
      </>
    </Fragment>
  );
}

export default SignUp;
