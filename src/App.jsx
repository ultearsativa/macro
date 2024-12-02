import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import Artikel from "./pages/artikel";
import Formbersama from "./pages/formbersama";
import Formpribadi from "./pages/formpribadi";
import Isiartikel from "./pages/isiartikel";
import Keuangan from "./pages/keuangan";
import List from "./pages/list";
import List2 from "./pages/list2";
import ListBersama from "./pages/listBersama";
import ListBersama2 from "./pages/listBersama2";
import Profil from "./pages/profil";
import Tabunganbersama from "./pages/tabunganbersama";
import Tabunganpribadi from "./pages/tabunganpribadi";
import Login from "./pages/login";

function App(root) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/formbersama" element={<Formbersama />} />
        <Route path="/formpribadi" element={<Formpribadi />} />
        <Route path="/isiartikel" element={<Isiartikel />} />
        <Route path="/keuangan" element={<Keuangan />} />
        <Route path="/list" element={<List />} />
        <Route path="/list2" element={<List2 />} />
        <Route path="/listBersama" element={<ListBersama />} />
        <Route path="/listBersama2" element={<ListBersama2 />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/tabunganbersama" element={<Tabunganbersama />} />
        <Route path="/tabunganpribadi" element={<Tabunganpribadi />} />
      </Routes>
    </Router>
  );
}

export default App;
