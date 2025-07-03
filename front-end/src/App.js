import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/home.js";
import Login from "../src/pages/login.js";
import Lembrete from "../src/pages/lembrete.js";

import homeIcon from "../src/assets/botao-home.png";

function App() {
  return (
    <Router>
      <nav>
  <ul className="menu">
    <li>
      <Link to="/home">
        <img src={homeIcon} alt="Home" className="icon" />
        Home
      </Link>
    </li>
    {/* <li>
      <Link to="/login">
        <img src={loginIcon} alt="Login" className="icon" />
        Login
      </Link>
    </li> */}
  </ul>
</nav>


      <div className="header">
        <h1>Seja Bem-Vindo ao Eventus</h1>
        <p>Aqui você terá acesso às ferramentas populares e que irão te auxiliar para lembrar de seus compromissos!</p>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lembrete" element={<Lembrete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
