import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const api = axios.create({
    baseURL: `http://localhost:5000/cidades`
});

function Cidade() {
    const [cidades, setCidades] = useState([]);
    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState(''); // Mantenha como string para o input
    const [id, setId] = useState(null);

    const fetchCidades = async () => {
        const response = await api.get('/');
        setCidades(response.data);
    };

    useEffect(() => {
        fetchCidades();
    }, []);

    const criarOuAtualizarCidade = async (e) => {
        e.preventDefault();
        const payload = {
            nome,
            estado_id: parseInt(estadoId, 10) // Converte estadoId para inteiro
        };
        if (id) {
            await api.put('/', { ...payload, id });
            window.location.reload()
        } else {
            await api.post('/', payload);
        }
        fetchCidades();
        setNome('');
        setEstadoId(''); // Reset como string
        setId(null);
    };

    const deletarCidade = async (id) => {
        await api.delete('/', { data: { id } });
        fetchCidades();
    };

    return (
        <div>
            <h2>Gerenciar Cidades</h2>
            <form onSubmit={criarOuAtualizarCidade}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome da Cidade"
                    required
                />
                <input
                    type="number"
                    value={estadoId}
                    onChange={(e) => setEstadoId(e.target.value)}
                    placeholder="ID do Estado"
                    required
                />
                <button type="submit">{id ? 'Atualizar' : 'Criar'}</button>
            </form>
            <ul>
                {cidades.map(cidade => (
                    <li key={cidade.id}>
                        <span>{cidade.nome} (Estado ID: {cidade.estado_id})</span>
                        <div>
                            <button onClick={() => { setId(cidade.id); setNome(cidade.nome); setEstadoId(String(cidade.estado_id)); }}>Editar</button>
                            <button onClick={() => deletarCidade(cidade.id)}>Deletar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cidade;
