import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/estados">Estados</Link>
      <Link to="/cidades">Cidades</Link>
      <Link to="/locais-coleta">Locais de Coleta</Link>
      <Link to="/doacoes">Doações</Link>
      <Link to="/doadores">Doadores</Link>
    </div>
  );
}

export default Navbar