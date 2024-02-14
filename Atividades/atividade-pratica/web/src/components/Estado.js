import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';


const api = axios.create({
  baseURL: `http://localhost:5000/estados`
});

function Estado() {
  const [estados, setEstados] = useState([]);
  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [id, setId] = useState(null);

  const fetchEstados = async () => {
    const response = await api.get('/');
    console.log(response.data); // Para verificar os dados recebidos
    setEstados(response.data);
  };


  useEffect(() => {
    fetchEstados();
  }, []);

  const criarOuAtualizarEstado = async (e) => {
    e.preventDefault();
    if (id) {
      await api.put('/', { id, nome, sigla });
      window.location.reload()
    } else {
      await api.post('/', { nome, sigla });
    }
    fetchEstados();
    setNome('');
    setSigla('');
    setId(null);

  };

  const deletarEstado = async (id) => {
    await api.delete('/', { data: { id } });
    fetchEstados();
  };

  return (
    <div>
      <h2>Gerenciar Estados</h2>
      <form onSubmit={criarOuAtualizarEstado}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do Estado"
          required
        />
        <input
          type="text"
          value={sigla}
          onChange={(e) => setSigla(e.target.value)}
          placeholder="Sigla do Estado"
          required
        />
        <button type="submit">{id ? 'Atualizar' : 'Criar'}</button>
      </form>
      <ul>
        {estados.map(estado => (
          <li key={estado.id}>
            <span>{estado.nome} ({estado.sigla})</span>
            <div>
              <button onClick={() => { setId(estado.id); setNome(estado.nome); setSigla(estado.sigla); }}>Editar</button>
              <button onClick={() => deletarEstado(estado.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Estado;
