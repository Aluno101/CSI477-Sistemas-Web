import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/candidates">Candidate Manager</Link>
      <Link to="/users">User Manager</Link>
      <Link to="/login">Login</Link>
      <Link to="/voting">Vote</Link>
    </div>
  );
}

export default Navbar