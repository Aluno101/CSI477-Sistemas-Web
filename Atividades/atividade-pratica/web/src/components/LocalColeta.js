import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'; // Reutilize o CSS que você já tem, ou ajuste conforme necessário

const api = axios.create({
    baseURL: `http://localhost:5000/localColeta`
});

function LocalColeta() {
    const [locais, setLocais] = useState([]);
    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidadeId, setCidadeId] = useState('');
    const [id, setId] = useState(null);

    const fetchLocais = async () => {
        const response = await api.get('/');
        setLocais(response.data);
    };

    useEffect(() => {
        fetchLocais();
    }, []);

    const criarOuAtualizarLocal = async (e) => {
        e.preventDefault();
        const payload = {
            nome,
            rua,
            numero,
            cidade_id: parseInt(cidadeId, 10)
        };
        if (id) {
            await api.put('/', { ...payload, id });
            window.location.reload()
        } else {
            await api.post('/', payload);
        }
        fetchLocais();
        setNome('');
        setRua('');
        setNumero('');
        setCidadeId('');
        setId(null);
    };

    const deletarLocal = async (id) => {
        await api.delete('/', { data: { id } });
        fetchLocais();
    };

    return (
        <div>
            <h2>Gerenciar Locais de Coleta</h2>
            <form onSubmit={criarOuAtualizarLocal}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do Local"
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
                    type="number"
                    value={cidadeId}
                    onChange={(e) => setCidadeId(e.target.value)}
                    placeholder="ID da Cidade"
                    required
                />
                <button type="submit">{id ? 'Atualizar' : 'Criar'}</button>
            </form>
            <ul>
                {locais.map(local => (
                    <li key={local.id}>
                        <span>{`${local.nome}, ${local.rua}, ${local.numero} (Cidade ID: ${local.cidade_id})`}</span>
                        <div>
                            <button onClick={() => { setId(local.id); setNome(local.nome); setRua(local.rua); setNumero(local.numero); setCidadeId(String(local.cidade_id)); }}>Editar</button>
                            <button onClick={() => deletarLocal(local.id)}>Deletar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LocalColeta;
