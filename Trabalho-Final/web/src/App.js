import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Candidate from './components/Candidate';
import User from './components/User';
import LoginPage from './components/LoginPage';
import VotingPage from './components/VotingPage';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidates" element={<Candidate />} />
          <Route path="/users" element={<User />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/voting" element={<VotingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <><h1>Basic Voting System</h1>
      <p> welcome home! </p></>
  )
}

export default App;
