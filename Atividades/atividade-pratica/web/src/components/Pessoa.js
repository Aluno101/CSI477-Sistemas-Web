import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const api = axios.create({
  baseURL: `http://localhost:5000/pessoas`
});

function Pessoa() {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [rg, setRg] = useState('');
  const [cidadeId, setCidadeId] = useState('');
  const [tipoId, setTipoId] = useState('');
  const [id, setId] = useState(null);

  const fetchPessoas = async () => {
    const response = await api.get('/');
    setPessoas(response.data);
  };

  useEffect(() => {
    fetchPessoas();
  }, []);

  const criarOuAtualizarPessoa = async (e) => {
    e.preventDefault();
    const payload = {
      nome,
      rua,
      numero,
      rg,
      cidade_id: parseInt(cidadeId, 10),
      tipo_id: parseInt(tipoId, 10)
    };
    if (id) {
      await api.put('/', { ...payload, id });
      window.location.reload()
    } else {
      await api.post('/', payload);
    }
    fetchPessoas();
    setNome('');
    setRua('');
    setNumero('');
    setRg('');
    setCidadeId('');
    setTipoId('');
    setId(null);
  };

  const deletarPessoa = async (id) => {
    await api.delete('/', { data: { id } });
    fetchPessoas();
  };

  return (
    <div>
      <h2>Gerenciar Doadores</h2>
      <form onSubmit={criarOuAtualizarPessoa}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="text"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          placeholder="Rua"
          required
        />
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Número"
          required
        />
        <input
          type="text"
          value={rg}
          onChange={(e) => setRg(e.target.value)}
          placeholder="RG"
          required
        />
        <input
          type="number"
          value={cidadeId}
          onChange={(e) => setCidadeId(e.target.value)}
          placeholder="ID da Cidade"
          required
        />
        <input
          type="number"
          value={tipoId}
          onChange={(e) => setTipoId(e.target.value)}
          placeholder="Tipo ID"
          required
        />
        <button type="submit">{id ? 'Atualizar' : 'Criar'}</button>
      </form>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.id}>
            <span>
              Nome: {pessoa.nome}, Rua: {pessoa.rua}, Nº: {pessoa.numero}, RG: {pessoa.rg}, Cidade ID: {pessoa.cidade_id}, Tipo ID: {pessoa.tipo_id}
            </span>
            <div>
              <button onClick={() => { setId(pessoa.id); setNome(pessoa.nome); setRua(pessoa.rua); setNumero(pessoa.numero); setRg(pessoa.rg); setCidadeId(String(pessoa.cidade_id)); setTipoId(String(pessoa.tipo_id)); }}>Editar</button>
              <button onClick={() => deletarPessoa(pessoa.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Pessoa;
