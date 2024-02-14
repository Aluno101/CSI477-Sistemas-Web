import express from 'express'
import cors from 'cors';
import { estadoRouter } from './src/routes/estados.js';
import { cidadeRouter } from './src/routes/cidades.js'

import { localColetaRouter } from './src/routes/locais-coleta.js'
import { doacaoRouter } from './src/routes/doacoes.js'
import { pessoaRouter } from './src/routes/pessoas.js'
import { tipoSanguineoRouter } from './src/routes/tipos-sanguineos.js'

const server = express();
const PORT = 5000

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    })
})

server.use(express.json())
server.use(cors());
server.use(estadoRouter);
server.use(cidadeRouter);

server.use(localColetaRouter);
server.use(doacaoRouter);
server.use(pessoaRouter);
server.use(tipoSanguineoRouter);


server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})