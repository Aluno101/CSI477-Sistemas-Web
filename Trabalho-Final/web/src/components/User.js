import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const api = axios.create({
  baseURL: `http://localhost:5000/users`
});

function User() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [id, setId] = useState(null);

  const fetchUsers = async () => {
    const response = await api.get('/');
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const criarOuAtualizarUser = async (e) => {
    e.preventDefault();
    if (id) {
      await api.put(`/${id}`, { email });
    } else {
      await api.post('/', { email });
    }
    fetchUsers();
    setEmail('');
    setId(null);
  };

  const deleteUser = async (id) => {
    await api.delete(`/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h2>User Manager</h2>
      <form onSubmit={criarOuAtualizarUser}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="User Email"
          required
        />
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span className={user.voted ? 'voted' : 'not-voted'}>
              {user.email} - {user.voted ? 'voted' : 'not-voted'}
            </span>
            <div>
              <button onClick={() => { setId(user.id); setEmail(user.email); }}>Editar</button>
              <button onClick={() => deleteUser(user.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
