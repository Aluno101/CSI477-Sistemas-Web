import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const api = axios.create({
    baseURL: `http://localhost:5000/doacoes`
});

function Doacao() {
    const [doacoes, setDoacoes] = useState([]);
    const [pessoaId, setPessoaId] = useState('');
    const [localId, setLocalId] = useState('');
    const [data, setData] = useState('');
    const [id, setId] = useState(null);

    const fetchDoacoes = async () => {
        const response = await api.get('/');
        setDoacoes(response.data);
    };

    useEffect(() => {
        fetchDoacoes();
    }, []);

    const criarOuAtualizarDoacao = async (e) => {
        e.preventDefault();
        const payload = {
            pessoa_id: parseInt(pessoaId, 10),
            local_id: parseInt(localId, 10),
            data
        };
        if (id) {
            await api.put('/', { ...payload, id });
            window.location.reload()
        } else {
            await api.post('/', payload);
        }
        fetchDoacoes();
        setPessoaId('');
        setLocalId('');
        setData('');
        setId(null);
    };

    const deletarDoacao = async (id) => {
        await api.delete('/', { data: { id } });
        fetchDoacoes();
    };

    return (
        <div>
            <h2>Gerenciar Doações</h2>
            <form onSubmit={criarOuAtualizarDoacao}>
                <input
                    type="number"
                    value={pessoaId}
                    onChange={(e) => setPessoaId(e.target.value)}
                    placeholder="ID da Pessoa"
                    required
                />
                <input
                    type="number"
                    value={localId}
                    onChange={(e) => setLocalId(e.target.value)}
                    placeholder="ID do Local"
                    required
                />
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Data da doação"
                    required
                />
                <button type="submit">{id ? 'Atualizar' : 'Criar'}</button>
            </form>
            <ul>
                {doacoes.map(doacao => (
                    <li key={doacao.id}>
                        <span>Doação {doacao.id}: Pessoa ID {doacao.pessoa_id}, Local ID {doacao.local_id}, Data {doacao.data}</span>
                        <div>
                            <button onClick={() => { setId(doacao.id); setPessoaId(String(doacao.pessoa_id)); setLocalId(String(doacao.local_id)); setData(doacao.data); }}>Editar</button>
                            <button onClick={() => deletarDoacao(doacao.id)}>Deletar</button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Doacao;
