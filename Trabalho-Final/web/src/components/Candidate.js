import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const api = axios.create({
  baseURL: `http://localhost:5000/candidates`
});

function Candidate() {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState(null);

  const fetchCandidates = async () => {
    const response = await api.get('/');
    console.log(response.data);
    setCandidates(response.data);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const criarOuAtualizarCandidato = async (e) => {
    e.preventDefault();
    if (id) {
      await api.put(`/${id}`, { name });
    } else {
      await api.post('/', { name });
    }
    fetchCandidates();
    setName('');
    setId(null);
  };

  const deletarCandidato = async (id) => {
    await api.delete(`/${id}`);
    fetchCandidates();
  };

  return (
    <div>
      <h2>Candidate Manager</h2>
      <form onSubmit={criarOuAtualizarCandidato}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Candidate Name"
          required
        />
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>
            <span>{candidate.name} - Votos: {candidate.votes}</span>
            <div>
              <button onClick={() => { setId(candidate.id); setName(candidate.name); }}>Editar</button>
              <button onClick={() => deletarCandidato(candidate.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Candidate;
