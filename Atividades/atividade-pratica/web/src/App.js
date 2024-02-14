import React from 'react';
import './App.css';
import Estado from './components/Estado';
import Navbar from './components/Navbar';
import Cidade from './components/Cidade';
import LocalColeta from './components/LocalColeta';
import Doacao from './components/Doacao';
import Pessoa from './components/Pessoa';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estados" element={<Estado />} />
          <Route path="/cidades" element={<Cidade />} />
          <Route path="/locais-coleta" element={<LocalColeta />} />
          <Route path="/doacoes" element={<Doacao />} />
          <Route path="/doadores" element={<Pessoa />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <><h1>Sistema de Doações</h1>
      <p> Sua contribuição salva vidas! </p></>
  )
}

export default App;
