import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/users/${email}`);
      const user = response.data;
      if (user.voted) {
        alert('You have already voted.');
      } else {
        navigate('/voting', { state: { email: user.email, user } });
      }
    } catch (error) {
      alert('Email not registered.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your e-mail"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
